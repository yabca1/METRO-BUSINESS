import { RecipientAvatar } from '../metro/RecipientAvatar'
import { ChevronRightIcon } from '../metro/TransferFlowIcons'
import type { MetroRecipient } from '../metro/types'

export function BankRecipientRow({ recipient, onSelect }: { recipient: MetroRecipient; onSelect: (recipient: MetroRecipient) => void }) {
  return (
    <button type="button" onClick={() => onSelect(recipient)} className="flex w-full cursor-pointer items-center gap-2 py-1 text-left">
      <RecipientAvatar initials={recipient.initials} channel="bank" />
      <span className="min-w-0 flex-1">
        <span className="block truncate text-sm font-semibold leading-6 text-brand-primary">{recipient.name}</span>
        <span className="flex min-w-0 items-center gap-1.5 text-fig-10">
          <span className="truncate text-brand-muted">{recipient.wallet}</span>
          <span className="size-0.75 shrink-0 rounded-full bg-brand-muted" />
          <span className="shrink-0 font-light text-brand-primary">{recipient.handle}</span>
        </span>
      </span>
      <ChevronRightIcon className="size-5 shrink-0 text-brand-primary" />
    </button>
  )
}
