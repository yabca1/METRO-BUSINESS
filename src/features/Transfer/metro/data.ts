import type { MetroRecipient, TransferFundingAccount } from './types'

export const DEFAULT_RECIPIENT: MetroRecipient = {
  id: 'abebe-kebede',
  name: 'Abebe Kebede',
  wallet: 'Metro Wallet',
  handle: '@AbebeKebede',
  initials: 'AK',
}

export const RECENT_RECIPIENTS: MetroRecipient[] = Array.from(
  { length: 5 },
  (_, index) => ({
    ...DEFAULT_RECIPIENT,
    id: `abebe-kebede-${index + 1}`,
    handle: '@abebekebede',
  }),
)

export const TRANSFER_FUNDING_ACCOUNTS: TransferFundingAccount[] = [
  { id: 'main-etb', label: 'Main Account', balance: '8,500', currency: 'ETB', kind: 'main' },
  { id: 'currency-usd', label: 'United States dollar', balance: '800', currency: 'USD', kind: 'currency', image: '/icons/dashboard/flag-usd.png' },
  { id: 'currency-gbp', label: 'British pound', balance: '100', currency: 'GBP', kind: 'currency', image: '/icons/dashboard/flag-gbp.png' },
]
