// src/features/dashboard/types.ts
import type { LucideIcon } from "lucide-react"

export interface DashboardAccount {
  id: string
  balance: number
  currency: string
  currencyCount: number
  walletLabel: string
  handle: string
}

export interface Pocket {
  id: string
  label: string
  amount: number
  currency: string
  tone: "green" | "rose"
  icon: string
}

export interface QuickAction {
  id: string
  label: string
  icon: string
}

export type TransactionStatus = "completed" | "pending"

export interface Transaction {
  id: string
  recipient: string
  reference: string
  date: string
  createdBy: string
  status: TransactionStatus
  amount: number
  currency: string
}

export interface FundingRequest {
  id: string
  requester: string
  initials: string
  date: string
  amount: number
  currency: string
}

export interface CardTile {
  id: string
  label: string
  meta?: string
  variant: "disposable" | "virtual" | "add"
}

export interface ProductOffer {
  id: string
  label: string
  description: string
  icon: LucideIcon
}

export interface WealthBalance {
  id: string
  label: string
  amount: number
  currency: string
  icon: LucideIcon
}

export interface WealthPromo {
  id: string
  label: string
  description: string
  icon: LucideIcon
}

export interface AccountCurrency {
  id: string
  label: string
  code: string
  amount: number
  currency: string
  convertedAmount: number
  convertedCurrency: string
  flag?: string
  isPrimary?: boolean
}

export interface AccountsSummary {
  totalAmount: number
  totalCurrency: string
  accountsCount: number
}
