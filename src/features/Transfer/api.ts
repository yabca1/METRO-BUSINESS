// src/features/Transfer/api.ts
import { apiClient } from '@/lib/api/client'
import type { Transfer, CreateTransferDto, UpdateTransferDto, TransferListParams } from './types'
import type { PaginatedResponse } from '@/lib/api/types'

const BULK_RECIPIENTS = [
  { id: 'r1', name: 'Abebe Kebede', wallet: 'Metro Wallet', handle: '@abebekebede', amount: '10,000 ETB' },
  { id: 'r2', name: 'Abebe Kebede', wallet: 'Metro Wallet', handle: '@abebekebede', amount: '10,000 ETB' },
  { id: 'r3', name: 'Abebe Kebede', wallet: 'Metro Wallet', handle: '@abebekebede', amount: '12,000 ETB' },
]

// Simulated memory storage for out-of-the-box functionality
let mockTransfers: Transfer[] = [
  { id: '1',  number: 'MFT234DER2',   status: 'paid',    amount: 5000,   dueDate: '2026-07-15', createdAt: '2026-07-07', recipientId: 'Abebe Kebede',      currency: 'ETB', approvedBy: 'Selam Kebede' },
  { id: '2',  number: 'Order 123',    status: 'sent',    amount: 5000,   dueDate: '2026-07-15', createdAt: '2026-07-07', recipientId: 'Abebe Kebede',      currency: 'ETB' },
  { id: '3',  number: '5 transfers',  status: 'sent',    amount: 50000,  dueDate: '2026-07-15', createdAt: '2026-07-06', recipientId: 'Salary Payment',    currency: 'ETB', note: 'Salary Payment', recipients: BULK_RECIPIENTS },
  { id: '4',  number: 'Order 124',    status: 'draft',   amount: 1200,   dueDate: '2026-07-20', createdAt: '2026-07-05', recipientId: 'Wayne Enterprises', currency: 'GBP' },
  { id: '5',  number: 'MFT234DER3',   status: 'paid',    amount: 2450,   dueDate: '2026-07-15', createdAt: '2026-07-04', recipientId: 'Acme Corp',         currency: 'USD', approvedBy: 'Selam Kebede' },
  { id: '6',  number: 'INV-2026-006', status: 'overdue', amount: 8000,   dueDate: '2026-06-28', createdAt: '2026-06-20', recipientId: 'Stark Industries',  currency: 'USD' },
  { id: '7',  number: 'INV-2026-007', status: 'draft',   amount: 640,    dueDate: '2026-08-01', createdAt: '2026-06-18', recipientId: 'Globex',            currency: 'USD' },
  { id: '8',  number: 'MFT234DER4',   status: 'paid',    amount: 15000, dueDate: '2026-06-15', createdAt: '2026-06-10', recipientId: 'Selam Kebede',      currency: 'ETB', approvedBy: 'Selam Kebede' },
  { id: '9',  number: 'Order 125',    status: 'sent',    amount: 3200,   dueDate: '2026-07-30', createdAt: '2026-06-08', recipientId: 'Hooli',             currency: 'USD' },
  { id: '10', number: 'INV-2026-010', status: 'overdue', amount: 990,    dueDate: '2026-06-01', createdAt: '2026-05-25', recipientId: 'Initech',           currency: 'USD' },
  { id: '11', number: 'MFT234DER5',   status: 'paid',    amount: 7500,   dueDate: '2026-05-20', createdAt: '2026-05-12', recipientId: 'Abebe Kebede',      currency: 'ETB', approvedBy: 'Selam Kebede' },
  { id: '12', number: 'Order 126',    status: 'draft',   amount: 450,    dueDate: '2026-08-10', createdAt: '2026-05-02', recipientId: 'Umbrella Corp',     currency: 'GBP' },
]

const SORTABLE: Record<string, (a: Transfer, b: Transfer) => number> = {
  createdAt: (a, b) => a.createdAt.localeCompare(b.createdAt),
  amount:    (a, b) => a.amount - b.amount,
  recipient: (a, b) => a.recipientId.localeCompare(b.recipientId),
  status:    (a, b) => a.status.localeCompare(b.status),
}

/** Apply search/status/sort/pagination the way a real backend would. */
function queryMock(params?: TransferListParams): PaginatedResponse<Transfer> {
  let rows = [...mockTransfers]

  if (params?.status && params.status !== 'all') {
    rows = rows.filter((t) => t.status === params.status)
  }
  if (params?.search) {
    const q = params.search.toLowerCase()
    rows = rows.filter((t) =>
      t.recipientId.toLowerCase().includes(q) || t.number.toLowerCase().includes(q))
  }
  if (params?.sortBy && SORTABLE[params.sortBy]) {
    rows.sort(SORTABLE[params.sortBy])
    if (params.sortDir === 'desc') rows.reverse()
  } else {
    rows.sort(SORTABLE.createdAt)
    rows.reverse() // newest first by default
  }

  const page = params?.page ?? 1
  const pageSize = params?.pageSize ?? 8
  return { items: rows.slice((page - 1) * pageSize, page * pageSize), total: rows.length, page, pageSize }
}

export const transferApi = {
  getAll: async (params?: TransferListParams): Promise<PaginatedResponse<Transfer>> => {
    if (!process.env.NEXT_PUBLIC_API_BASE_URL) {
      // Simulate latency so loading states are visible in development
      await new Promise((resolve) => setTimeout(resolve, 350))
      return queryMock(params)
    }
    return apiClient.get<PaginatedResponse<Transfer>>('/transfers', { params }) as unknown as PaginatedResponse<Transfer>
  },

  getById: async (id: string): Promise<Transfer> => {
    if (!process.env.NEXT_PUBLIC_API_BASE_URL) {
      const transfer = mockTransfers.find(t => t.id === id)
      if (!transfer) throw new Error('Transfer not found')
      return transfer
    }
    return apiClient.get<Transfer>(`/transfers/${id}`) as unknown as Transfer
  },

  create: async (data: CreateTransferDto): Promise<Transfer> => {
    if (!process.env.NEXT_PUBLIC_API_BASE_URL) {
      const newTransfer: Transfer = {
        id: String(Date.now()),
        number: `TRF-2026-${String(mockTransfers.length + 1).padStart(3, '0')}`,
        status: 'draft',
        amount: data.amount,
        dueDate: data.dueDate,
        createdAt: new Date().toISOString().split('T')[0],
        recipientId: data.recipientId,
        currency: 'USD'
      }
      mockTransfers = [newTransfer, ...mockTransfers]
      return newTransfer
    }
    return apiClient.post<Transfer>('/transfers', data) as unknown as Transfer
  },

  update: async (id: string, data: UpdateTransferDto): Promise<Transfer> => {
    if (!process.env.NEXT_PUBLIC_API_BASE_URL) {
      const index = mockTransfers.findIndex(t => t.id === id)
      if (index === -1) throw new Error('Transfer not found')
      mockTransfers[index] = { ...mockTransfers[index], ...data }
      return mockTransfers[index]
    }
    return apiClient.patch<Transfer>(`/transfers/${id}`, data) as unknown as Transfer
  },

  delete: async (id: string): Promise<void> => {
    if (!process.env.NEXT_PUBLIC_API_BASE_URL) {
      mockTransfers = mockTransfers.filter(t => t.id !== id)
      return
    }
    await apiClient.delete(`/transfers/${id}`)
  },
}
