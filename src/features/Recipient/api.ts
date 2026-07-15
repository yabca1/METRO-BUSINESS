// src/features/Recipient/api.ts
import { apiClient } from '@/lib/api/client'
import type { PaginatedResponse } from '@/lib/api/types'
import type { Recipient, RecipientListParams } from './types'

const ABEBE_PAYMENT_METHODS: Recipient['paymentMethods'] = [
  { id: 'p1', label: 'Abebe Kebede', meta: 'Metro business • @abebekebede', icon: 'metro' },
  { id: 'p2', label: 'Abebe Kebede', meta: 'CBE • 1000242950635', icon: 'bank' },
  { id: 'p3', label: 'Abebe Kebede', badge: 'USD', meta: '453190951813395', icon: 'card' },
  { id: 'p4', label: 'Abebe Kebede', badge: 'GBP', meta: '23-08-01 • 222713033', icon: 'flag' },
]

const ABEBE_TRANSACTIONS: Recipient['transactions'] = [
  { id: 't1', direction: 'to',   timestamp: 'Today, 2:46 AM', counterparty: 'Selam Abebe', amount: '5,000 ETB' },
  { id: 't2', direction: 'from', timestamp: 'Today, 2:46 AM', counterparty: 'Metro wallet', amount: '+1,000 ETB' },
  { id: 't3', direction: 'to',   timestamp: 'Today, 2:46 AM', counterparty: 'Selam Abebe', amount: '5,000 ETB' },
  { id: 't4', direction: 'from', timestamp: 'Today, 2:46 AM', counterparty: 'Metro wallet', amount: '+1,000 ETB' },
  { id: 't5', direction: 'to',   timestamp: 'Today, 2:46 AM', counterparty: 'Selam Abebe', amount: '5,000 ETB' },
]

const SELAM_PAYMENT_METHODS: Recipient['paymentMethods'] = [
  { id: 'p1', label: 'Selam Kebede', meta: 'Metro business • @selamkebede', icon: 'metro' },
  { id: 'p2', label: 'Selam Kebede', meta: 'Awash Bank • 0130242950212', icon: 'bank' },
  { id: 'p3', label: 'Selam Kebede', badge: 'ETB', meta: '453190951800021', icon: 'card' },
]

const SELAM_TRANSACTIONS: Recipient['transactions'] = [
  { id: 't1', direction: 'from', timestamp: 'Yesterday, 6:12 PM', counterparty: 'Metro wallet', amount: '+2,300 ETB' },
  { id: 't2', direction: 'to',   timestamp: 'Yesterday, 6:12 PM', counterparty: 'Abebe Kebede', amount: '2,300 ETB' },
  { id: 't3', direction: 'from', timestamp: 'Mon, 9:04 AM',       counterparty: 'Metro wallet', amount: '+900 ETB' },
]

const mockRecipients: Recipient[] = Array.from({ length: 21 }, (_, i): Recipient => {
  const isAbebe = i % 2 === 0
  return isAbebe
    ? {
        id: String(i + 1),
        name: 'Abebe Kebede',
        initials: 'AK',
        kind: 'individual',
        account: 'Metro',
        paymentDetail: '@abebekebede',
        type: 'Individual',
        paymentMethods: ABEBE_PAYMENT_METHODS,
        transactions: ABEBE_TRANSACTIONS,
      }
    : {
        id: String(i + 1),
        name: 'Selam Kebede',
        initials: 'SK',
        kind: 'business',
        account: 'Multiple',
        paymentDetail: '3 payment methods',
        type: 'Business',
        paymentMethods: SELAM_PAYMENT_METHODS,
        transactions: SELAM_TRANSACTIONS,
      }
})

const SORTABLE: Record<string, (a: Recipient, b: Recipient) => number> = {
  name:    (a, b) => a.name.localeCompare(b.name),
  account: (a, b) => a.account.localeCompare(b.account),
  type:    (a, b) => a.type.localeCompare(b.type),
}

/** Apply search/sort/pagination the way a real backend would. */
function queryMock(params?: RecipientListParams): PaginatedResponse<Recipient> {
  let rows = [...mockRecipients]

  if (params?.kind && params.kind !== 'all') {
    rows = rows.filter((recipient) => recipient.kind === params.kind)
  }
  if (params?.search) {
    const q = params.search.toLowerCase()
    rows = rows.filter((r) => r.name.toLowerCase().includes(q) || r.paymentDetail.toLowerCase().includes(q))
  }
  if (params?.sortBy && SORTABLE[params.sortBy]) {
    rows.sort(SORTABLE[params.sortBy])
    if (params.sortDir === 'desc') rows.reverse()
  }

  const page = params?.page ?? 1
  const pageSize = params?.pageSize ?? 8
  return { items: rows.slice((page - 1) * pageSize, page * pageSize), total: rows.length, page, pageSize }
}

export const recipientApi = {
  getAll: async (params?: RecipientListParams): Promise<PaginatedResponse<Recipient>> => {
    if (!process.env.NEXT_PUBLIC_API_BASE_URL) {
      await new Promise((resolve) => setTimeout(resolve, 350))
      return queryMock(params)
    }
    return apiClient.get<PaginatedResponse<Recipient>>('/recipients', { params }) as unknown as PaginatedResponse<Recipient>
  },

  getById: async (id: string): Promise<Recipient> => {
    if (!process.env.NEXT_PUBLIC_API_BASE_URL) {
      const recipient = mockRecipients.find((r) => r.id === id)
      if (!recipient) throw new Error('Recipient not found')
      return recipient
    }
    return apiClient.get<Recipient>(`/recipients/${id}`) as unknown as Recipient
  },
}
