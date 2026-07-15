import { ROUTES } from '@/constants/routes'
import type { PaymentMethod, Recipient } from '@/features/Recipient/types'
import type { MetroRecipient } from './metro/types'

export type TransferPaymentMethod = PaymentMethod & { icon: 'metro' | 'bank' }

export function isTransferPaymentMethod(method: PaymentMethod): method is TransferPaymentMethod {
  return method.icon === 'metro' || method.icon === 'bank'
}

export function getSupportedTransferMethods(recipient: Recipient) {
  return recipient.paymentMethods.filter(isTransferPaymentMethod)
}

export function getRecipientTransferHref(recipient: Recipient, method: TransferPaymentMethod) {
  const route = method.icon === 'metro' ? ROUTES.METRO_TRANSFER : ROUTES.BANK_TRANSFER
  const query = new URLSearchParams({ recipientId: recipient.id, methodId: method.id, stage: 'amount' })
  return `${route}?${query.toString()}`
}

export function getRecipientTransferSelectionHref(recipient: Recipient) {
  const firstMethod = getSupportedTransferMethods(recipient)[0]
  if (!firstMethod) return null
  const route = firstMethod.icon === 'bank' ? ROUTES.BANK_TRANSFER : ROUTES.METRO_TRANSFER
  const query = new URLSearchParams({ recipientId: recipient.id, stage: 'amount' })
  return `${route}?${query.toString()}`
}

export function getPreferredTransferMethod(recipient: Recipient) {
  const methods = getSupportedTransferMethods(recipient)
  if (recipient.account.toLowerCase() === 'multiple') return null
  const account = recipient.account.toLowerCase()
  return methods.find((method) =>
    method.icon === account || method.meta.toLowerCase().includes(account),
  ) ?? methods[0] ?? null
}

export function toTransferRecipient(recipient: Recipient, method: TransferPaymentMethod): MetroRecipient {
  const [account = method.meta, detail = ''] = method.meta.split('•').map((part) => part.trim())
  return {
    id: recipient.id,
    name: recipient.name,
    initials: recipient.initials,
    wallet: account,
    handle: detail,
    channel: method.icon,
  }
}

export function findTransferMethod(recipient: Recipient, methodId?: string) {
  const method = recipient.paymentMethods.find((item) => item.id === methodId)
  return method && isTransferPaymentMethod(method) ? method : null
}
