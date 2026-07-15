'use client'

import { useRouter } from 'next/navigation'
import { ArrowRightIcon } from '@/components/icons/vuesax'
import {
  getPreferredTransferMethod,
  getRecipientTransferHref,
  getRecipientTransferSelectionHref,
  getSupportedTransferMethods,
} from '@/features/Transfer/recipientTransfer'
import type { Recipient } from '../types'

export function RecipientSendAction({ recipient }: { recipient: Recipient }) {
  const router = useRouter()
  const methods = getSupportedTransferMethods(recipient)

  function send() {
    const preferred = getPreferredTransferMethod(recipient)
    const href = preferred
      ? getRecipientTransferHref(recipient, preferred)
      : getRecipientTransferSelectionHref(recipient)
    if (href) router.push(href)
  }

  return (
    <button type="button" onClick={send} disabled={!methods.length} className="flex cursor-pointer items-center gap-2.5 rounded-full bg-brand-primary px-4 py-1.5 font-urbanist-medium text-fig-14 font-medium tracking-wide text-brand-white disabled:cursor-not-allowed disabled:opacity-50">
      <ArrowRightIcon className="size-6" /> Send
    </button>
  )
}
