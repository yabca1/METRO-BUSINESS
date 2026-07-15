// src/features/Card/types.ts

export type CardType = 'virtual' | 'metal' | 'standard'

export type CardStatus = 'active' | 'locked' | 'waiting'

export interface CardTransaction {
  id: string
  direction: 'to' | 'from'
  timestamp: string
  counterparty: string
  amount: string
}

export interface Card {
  id: string
  type: CardType
  label: string
  cardholder: string
  cardNumber: string
  last4: string
  expiryDate: string
  cvv: string
  status: CardStatus
  riskOfFraud: boolean
  spendingProgram: string
  limitSpent: number
  limitTotal: number
  limitPeriod: string
  currency: string
  transactions: CardTransaction[]
}

export interface CardListParams {
  page?: number
  pageSize?: number
  search?: string
  sortBy?: string
  sortDir?: 'asc' | 'desc'
}
