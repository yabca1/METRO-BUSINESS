'use client'

import { Dialog } from '@/components/ui/Dialog'
import { CloseIcon } from '@/components/icons/vuesax'
import { FundingAccountMark } from './FundingAccountDropdown'
import { RecipientAvatar } from './RecipientAvatar'
import { EditIcon } from './TransferFlowIcons'
import type { MetroTransferDraft } from './types'

interface ReviewTransferDialogProps {
  open: boolean
  draft: MetroTransferDraft
  onClose: () => void
  onConfirm: () => void
  destinationLabel?: string
}

function SummaryLine({ label, value, strong = false }: { label: string; value: string; strong?: boolean }) {
  return (
    <div className="flex items-center justify-between gap-4 text-sm">
      <span className="text-brand-muted">{label}</span>
      <span className={strong ? 'font-bold text-brand-primary' : 'font-semibold text-brand-primary'}>{value}</span>
    </div>
  )
}

export function ReviewTransferDialog({ open, draft, onClose, onConfirm, destinationLabel = 'Metro Wallet Account' }: ReviewTransferDialogProps) {
  const amount = `${Number(draft.amount).toLocaleString()} ${draft.fundingAccount.currency}`

  return (
    <Dialog open={open} onOpenChange={(next) => !next && onClose()} hideCloseButton contentClassName="max-h-[calc(100vh-2rem)] max-w-[511px] overflow-y-auto border-[0.5px] border-brand-border p-3 shadow-none">
      <div className="px-3">
        <button type="button" onClick={onClose} aria-label="Close review" className="flex size-6 items-center justify-center rounded-full bg-brand-surface text-brand-primary">
          <CloseIcon className="size-2" />
        </button>
      </div>
      <div className="flex flex-col gap-[30px] px-3 py-4">
        <h2 className="text-fig-28 font-semibold text-brand-primary">Review Transfer</h2>
        <div className="space-y-3">
          <section className="rounded-lg border-[0.5px] border-brand-border bg-transfer-surface/40 p-4">
            <p className="text-xs font-semibold text-brand-muted">Pay with</p>
            <div className="mt-2 flex items-center gap-3">
              <FundingAccountMark account={draft.fundingAccount} className="size-11.5 text-xl" />
              <span className="flex-1">
                <strong className="block text-sm">{draft.fundingAccount.label}</strong>
                <span className="text-xs">{draft.fundingAccount.balance} {draft.fundingAccount.currency} available</span>
              </span>
              <button type="button" className="rounded-full bg-brand-primary px-3 py-1 text-[8px] text-brand-white">Change</button>
            </div>
          </section>

          <section className="rounded-lg border-[0.5px] border-brand-border bg-transfer-surface/40 p-4">
            <p className="text-xs text-brand-muted">To</p>
            <p className="mt-2 text-sm font-semibold text-brand-primary">{destinationLabel}</p>
            <p className="mt-5 text-xs text-brand-muted">Receiver</p>
            <div className="mt-2 flex items-center gap-3">
              <RecipientAvatar initials={draft.recipient.initials} channel={draft.recipient.channel} />
              <span>
                <strong className="block text-sm">{draft.recipient.name}</strong>
                <span className="text-xs text-brand-muted">{draft.recipient.handle}</span>
              </span>
            </div>
            <p className="mt-5 text-xs text-brand-muted">Estimated arrival</p>
            <p className="mt-2 text-sm font-semibold">Today - in seconds</p>
          </section>

          <section className="space-y-4 rounded-lg border-[0.5px] border-brand-border bg-transfer-surface/40 p-4">
            <p className="text-xs font-medium text-brand-primary">Transfer details</p>
            <SummaryLine label="Recipient get" value={amount} />
            <SummaryLine label="Fees" value="0 ETB" />
            <div className="h-px bg-brand-border" />
            <SummaryLine label="Your total" value={amount} strong />
          </section>

          <section className="flex h-[63px] items-center rounded-xl bg-transfer-surface px-2.5">
            <span className="min-w-0 flex-1">
              <span className="block text-fig-10 text-brand-muted">Note</span>
              <span className="block truncate text-base font-medium">{draft.reference}</span>
            </span>
            <EditIcon className="size-5" />
          </section>
        </div>
        <button type="button" onClick={onConfirm} className="h-12 w-full cursor-pointer rounded-2xl bg-brand-primary text-base font-semibold text-brand-white transition hover:bg-brand-dark">Confirm and Send</button>
      </div>
    </Dialog>
  )
}
