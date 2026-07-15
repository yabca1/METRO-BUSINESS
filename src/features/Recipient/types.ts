// src/features/Recipient/types.ts

export type RecipientKind = 'individual' | 'business'

export type PaymentMethodIcon = 'metro' | 'bank' | 'card' | 'flag'

export interface PaymentMethod {
  id: string
  label: string
  badge?: string
  meta: string
  icon: PaymentMethodIcon
}

export interface RecipientTransaction {
  id: string
  direction: 'to' | 'from'
  timestamp: string
  counterparty: string
  amount: string
}

export interface Recipient {
  id: string
  name: string
  initials: string
  kind: RecipientKind
  account: string
  paymentDetail: string
  type: string
  paymentMethods: PaymentMethod[]
  transactions: RecipientTransaction[]
}

export interface RecipientListParams {
  page?: number
  pageSize?: number
  search?: string
  kind?: string
  sortBy?: string
  sortDir?: 'asc' | 'desc'
}
