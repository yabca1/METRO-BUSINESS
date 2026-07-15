import { RecipientAvatar } from './RecipientAvatar'
import { ChevronRightIcon } from './TransferFlowIcons'
import type { MetroRecipient } from './types'

interface RecipientRowProps {
  recipient: MetroRecipient
  onSelect: (recipient: MetroRecipient) => void
}

export function RecipientRow({ recipient, onSelect }: RecipientRowProps) {
  return (
    <button type="button" onClick={() => onSelect(recipient)} className="flex w-full cursor-pointer items-center gap-2 py-1 text-left">
      <RecipientAvatar initials={recipient.initials} />
      <span className="min-w-0 flex-1">
        <span className="block truncate text-sm font-semibold leading-6 text-brand-primary">{recipient.name}</span>
        <span className="flex items-center gap-1.5 text-fig-10 text-brand-muted">
          <span>{recipient.wallet}</span>
          <span className="size-0.75 rounded-full bg-brand-muted" />
          <span className="font-light text-brand-primary">{recipient.handle}</span>
        </span>
      </span>
      <ChevronRightIcon className="size-5 text-brand-primary" />
    </button>
  )
}
