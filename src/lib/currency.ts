// src/lib/currency.ts

const CURRENCY_LOCALE: Record<string, string> = {
  ETB: 'en-ET',
  USD: 'en-US',
  GBP: 'en-GB',
}

export function formatAmount(amount: number, currency: string): string {
  return `${amount.toLocaleString(CURRENCY_LOCALE[currency] ?? 'en-US')} ${currency}`
}

export function maskAmount(currency?: string): string {
  // matches the "********" masked state shown when balances are hidden
  return currency ? `${'*'.repeat(8)} ${currency}` : '*'.repeat(8)
}
