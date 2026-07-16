export type PaymentLinkStatus = 'active' | 'completed' | 'paused'

export interface PaymentLinkPayer {
  id: string
  name: string
  paidAt: string
  reference: string
}

export interface PaymentLink {
  id: string
  name: string
  createdAt: string
  createdBy: string
  status: PaymentLinkStatus
  used: number
  limit: number
  account: string
  currency: string
  amount: number
  url: string
  payers: PaymentLinkPayer[]
}

export interface BrandingDetails {
  address: string
  website: string
  phone: string
  email: string
  showAddress: boolean
  showWebsite: boolean
  showPhone: boolean
  showEmail: boolean
  theme: 'blue' | 'purple' | 'pink' | 'teal'
  merchantName: string
}
// TODO: Review merchant page logic
