import Link from 'next/link'
import { ROUTES } from '@/constants/routes'
import { BackArrowIcon } from './TransferFlowIcons'
import { RecipientAvatar } from './RecipientAvatar'
import type { MetroRecipient } from './types'

export function FlowTopControls({ onBack, saveDraft = false }: { onBack?: () => void; saveDraft?: boolean }) {
  const chip = 'inline-flex h-7 items-center justify-center rounded-full bg-transfer-secondary/30 px-5 text-fig-10 font-semibold text-brand-primary'
  return (
    <div className="flex w-full items-center justify-between">
      {onBack ? (
        <button type="button" onClick={onBack} className={`${chip} gap-1.5 cursor-pointer`}>
          <BackArrowIcon className="size-4" /> back
        </button>
      ) : (
        <Link href={ROUTES.TRANSFER} className={`${chip} gap-1.5`}>
          <BackArrowIcon className="size-4" /> back
        </Link>
      )}
      {saveDraft && <button type="button" className={`${chip} cursor-pointer`}>Save draft</button>}
    </div>
  )
}

export function RecipientHero({ recipient, expandable = false, onExpand }: { recipient: MetroRecipient; expandable?: boolean; onExpand?: () => void }) {
  return (
    <section className="flex h-[167px] w-full flex-col items-center justify-center rounded-2xl border-[0.5px] border-brand-border bg-transfer-surface/40">
      <RecipientAvatar initials={recipient.initials} channel={recipient.channel} className="size-16.5 text-2xl" />
      <h2 className="mt-3 text-2xl font-semibold leading-tight text-brand-primary">{recipient.name}</h2>
      <button type="button" onClick={onExpand} disabled={!onExpand} aria-label={onExpand ? `Choose an account for ${recipient.name}` : undefined} className="mt-1 flex items-center gap-1.5 text-[13px] font-medium text-brand-primary disabled:cursor-default">
        <span>{recipient.wallet}</span><span className="size-1 rounded-full bg-brand-primary" />
        <span>{recipient.handle}</span>
        {expandable && <span className="ml-1 rotate-90 text-base">›</span>}
      </button>
    </section>
  )
}

export function ContinueButton({ disabled = false, children = 'Continue' }: { disabled?: boolean; children?: React.ReactNode }) {
  return (
    <button type="submit" disabled={disabled} className="h-13.5 w-full cursor-pointer rounded-2xl bg-brand-primary text-base font-semibold text-brand-white transition hover:bg-brand-dark disabled:cursor-not-allowed disabled:bg-brand-secondary disabled:text-brand-muted">
      {children}
    </button>
  )
}
