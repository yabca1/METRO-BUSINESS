export type QrCodeType = 'static' | 'dynamic'
export type QrCodeStatus = 'active' | 'completed' | 'paused'

export interface QrCode {
  id: string
  name: string
  createdAt: string
  createdBy: string
  type: QrCodeType
  status: QrCodeStatus
  used: number | null
  limit: number | null
  account: string
  currency: string
  amount: number | null
  url: string
  handle: string
}
