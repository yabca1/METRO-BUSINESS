'use client'

import { Building2, Check } from 'lucide-react'
import { cn } from '@/lib/utils'
import { MetroAccountAvatar } from './RecipientAvatar'
import type { MetroRecipient } from './types'

interface TransferAccountDropdownProps {
  accounts: MetroRecipient[]
  selected: MetroRecipient
  onClose: () => void
  onSelect: (account: MetroRecipient) => void
}

function AccountMark({ channel }: Pick<MetroRecipient, 'channel'>) {
  if (channel === 'bank') {
    return (
      <span className="flex size-10 shrink-0 items-center justify-center rounded-full border border-brand-border bg-brand-white text-brand-primary shadow-sm">
        <Building2 className="size-5" />
      </span>
    )
  }
  return <MetroAccountAvatar className="size-10 text-xl shadow-sm" />
}

function isSameAccount(account: MetroRecipient, selected: MetroRecipient) {
  return account.channel === selected.channel
    && account.wallet === selected.wallet
    && account.handle === selected.handle
}

export function TransferAccountDropdown({ accounts, selected, onClose, onSelect }: TransferAccountDropdownProps) {
  return (
    <div className="auth-step-in absolute left-1/2 top-[calc(100%_-_1.25rem)] z-20 w-[calc(100%_-_2rem)] -translate-x-1/2 overflow-hidden rounded-2xl border border-brand-border bg-brand-white p-2 shadow-2xl">
      <div className="flex items-start justify-between px-2 pb-2 pt-1">
        <span>
          <strong className="block text-sm font-semibold text-brand-primary">Choose recipient account</strong>
          <span className="text-fig-10 text-brand-muted">Where should this transfer arrive?</span>
        </span>
        <button type="button" onClick={onClose} className="rounded-full bg-brand-surface px-2.5 py-1 text-fig-10 font-semibold text-brand-primary">
          Close
        </button>
      </div>
      <div role="listbox" aria-label="Recipient accounts" className="max-h-56 space-y-1 overflow-y-auto">
        {accounts.map((account) => {
          const active = isSameAccount(account, selected)
          return (
            <button
              type="button"
              role="option"
              aria-selected={active}
              key={`${account.channel}-${account.wallet}-${account.handle}`}
              onClick={() => onSelect(account)}
              className={cn(
                'group flex w-full cursor-pointer items-center gap-3 rounded-xl border px-3 py-2.5 text-left transition-all duration-200',
                active
                  ? 'border-brand-primary bg-brand-primary text-brand-white shadow-md'
                  : 'border-transparent bg-brand-surface/50 text-brand-primary hover:border-brand-border hover:bg-brand-surface',
              )}
            >
              <AccountMark channel={account.channel} />
              <span className="min-w-0 flex-1">
                <strong className="block truncate text-sm font-semibold">{account.wallet}</strong>
                <span className={cn('block truncate text-xs', active ? 'text-brand-white/70' : 'text-brand-muted')}>
                  {account.handle || (account.channel === 'bank' ? 'Bank account' : 'Metro wallet')}
                </span>
              </span>
              <span className={cn('flex size-6 items-center justify-center rounded-full transition', active ? 'bg-brand-white text-brand-primary' : 'bg-brand-white text-transparent group-hover:text-brand-muted')}>
                <Check className="size-3.5" />
              </span>
            </button>
          )
        })}
      </div>
    </div>
  )
}
