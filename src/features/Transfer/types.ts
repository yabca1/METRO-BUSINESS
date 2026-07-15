// src/features/Transfer/types.ts

export type TransferStatus = 'draft' | 'sent' | 'paid' | 'overdue'

/** One row in the "Recipients" breakdown shown on a bulk (multi-recipient) transfer. */
export interface TransferRecipientBreakdown {
  id: string
  name: string
  wallet: string
  handle: string
  amount: string
}

export interface Transfer {
  id: string
  number: string
  status: TransferStatus
  amount: number
  dueDate: string
  createdAt: string
  recipientId: string
  currency: string
  /** Free-text note shown in the detail panel; defaults to "Metro Payment". */
  note?: string
  /** Who approved the transfer — only set once a `sent` transfer becomes `paid`. */
  approvedBy?: string
  /** Present when this is a bulk/multi-recipient transfer (drives the Pending "Recipients" card). */
  recipients?: TransferRecipientBreakdown[]
  /** How many of the 5 timeline steps are complete; defaults to all for `paid`, first 2 for `sent`. */
  timelineStepsDone?: number
}

export interface TransferListParams {
  page?: number
  pageSize?: number
  status?: string
  search?: string
  sortBy?: string
  sortDir?: 'asc' | 'desc'
}

export interface CreateTransferDto {
  amount: number
  dueDate: string
  recipientId: string
}

export type UpdateTransferDto = Partial<CreateTransferDto>
