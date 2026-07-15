// src/features/Card/api.ts
import { apiClient } from '@/lib/api/client'
import type { PaginatedResponse } from '@/lib/api/types'
import type { Card, CardListParams } from './types'

const AK_TRANSACTIONS: Card['transactions'] = [
  { id: 't1', direction: 'to',   timestamp: 'Today, 2:46 AM', counterparty: 'Selam Abebe',  amount: '5,000 ETB' },
  { id: 't2', direction: 'from', timestamp: 'Today, 2:46 AM', counterparty: 'Metro wallet', amount: '+1,000 ETB' },
  { id: 't3', direction: 'to',   timestamp: 'Today, 2:46 AM', counterparty: 'Selam Abebe',  amount: '5,000 ETB' },
]

const mockCards: Card[] = [
  {
    id: '1',
    type: 'virtual',
    label: 'Virtual',
    cardholder: 'Abebe Kebede',
    cardNumber: '1234 5678 9101 1234',
    last4: '1234',
    expiryDate: '01/30',
    cvv: '123',
    status: 'active',
    riskOfFraud: false,
    spendingProgram: '',
    limitSpent: 0,
    limitTotal: 30000,
    limitPeriod: 'Monthly',
    currency: 'ETB',
    transactions: AK_TRANSACTIONS,
  },
  {
    id: '2',
    type: 'metal',
    label: 'Metal',
    cardholder: 'Abebe Kebede',
    cardNumber: '1234 5678 9101 1234',
    last4: '1234',
    expiryDate: '01/30',
    cvv: '123',
    status: 'locked',
    riskOfFraud: true,
    spendingProgram: 'Ergonomic budget',
    limitSpent: 800,
    limitTotal: 20000,
    limitPeriod: 'All time',
    currency: 'ETB',
    transactions: AK_TRANSACTIONS,
  },
  {
    id: '3',
    type: 'standard',
    label: 'Standard',
    cardholder: 'Marketing@company.com',
    cardNumber: '1234 5678 9101 1213',
    last4: '',
    expiryDate: '',
    cvv: '123',
    status: 'waiting',
    riskOfFraud: false,
    spendingProgram: 'Marketing',
    limitSpent: 11000,
    limitTotal: 30000,
    limitPeriod: 'Monthly',
    currency: 'ETB',
    transactions: AK_TRANSACTIONS,
  },
]

const SORTABLE: Record<string, (a: Card, b: Card) => number> = {
  cardholder: (a, b) => a.cardholder.localeCompare(b.cardholder),
  expiryDate: (a, b) => a.expiryDate.localeCompare(b.expiryDate),
  status:     (a, b) => a.status.localeCompare(b.status),
}

/** Apply search/sort/pagination the way a real backend would. */
function queryMock(params?: CardListParams): PaginatedResponse<Card> {
  let rows = [...mockCards]

  if (params?.search) {
    const q = params.search.toLowerCase()
    rows = rows.filter((c) => c.label.toLowerCase().includes(q) || c.cardholder.toLowerCase().includes(q))
  }
  if (params?.sortBy && SORTABLE[params.sortBy]) {
    rows.sort(SORTABLE[params.sortBy])
    if (params.sortDir === 'desc') rows.reverse()
  }

  const page = params?.page ?? 1
  const pageSize = params?.pageSize ?? 10
  return { items: rows.slice((page - 1) * pageSize, page * pageSize), total: 10, page, pageSize }
}

export const cardApi = {
  getAll: async (params?: CardListParams): Promise<PaginatedResponse<Card>> => {
    if (!process.env.NEXT_PUBLIC_API_BASE_URL) {
      await new Promise((resolve) => setTimeout(resolve, 350))
      return queryMock(params)
    }
    return apiClient.get<PaginatedResponse<Card>>('/cards', { params }) as unknown as PaginatedResponse<Card>
  },

  getById: async (id: string): Promise<Card> => {
    if (!process.env.NEXT_PUBLIC_API_BASE_URL) {
      const card = mockCards.find((c) => c.id === id)
      if (!card) throw new Error('Card not found')
      return card
    }
    return apiClient.get<Card>(`/cards/${id}`) as unknown as Card
  },
}
