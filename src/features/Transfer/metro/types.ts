export interface MetroRecipient {
  id: string
  name: string
  wallet: string
  handle: string
  initials: string
  channel?: 'metro' | 'bank'
}

export interface TransferFundingAccount {
  id: string
  label: string
  balance: string
  currency: string
  kind: 'main' | 'currency'
  image?: string
}
export interface MetroTransferDraft {
  recipient: MetroRecipient
  amount: string
  reference: string
  fundingAccount: TransferFundingAccount
  schedule?: ScheduleDraft
}

export type MetroTransferStep = 'recipient' | 'amount' | 'details'

export type RepeatFrequency = 'never' | 'weekly' | 'biweekly' | 'monthly' | 'quarterly'

export interface ScheduleDraft {
  date: string
  repeats: RepeatFrequency
  endDate: string
}
