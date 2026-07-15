import 'server-only'

import { recipientApi } from '@/features/Recipient/api'
import { findTransferMethod, getSupportedTransferMethods, toTransferRecipient } from './recipientTransfer'
import type { MetroRecipient } from './metro/types'

export interface ResolvedRecipientTransfer {
  selected: MetroRecipient
  accounts: MetroRecipient[]
}

export async function resolveRecipientTransfer(
  recipientId: string | undefined,
  methodId: string | undefined,
  channel: 'metro' | 'bank',
): Promise<ResolvedRecipientTransfer | null> {
  if (!recipientId) return null
  try {
    const recipient = await recipientApi.getById(recipientId)
    const methods = getSupportedTransferMethods(recipient)
    const requestedMethod = findTransferMethod(recipient, methodId)
    const selectedMethod = requestedMethod?.icon === channel
      ? requestedMethod
      : methods.find((method) => method.icon === channel) ?? methods[0]
    if (!selectedMethod) return null
    return {
      selected: toTransferRecipient(recipient, selectedMethod),
      accounts: methods.map((method) => toTransferRecipient(recipient, method)),
    }
  } catch {
    return null
  }
}
