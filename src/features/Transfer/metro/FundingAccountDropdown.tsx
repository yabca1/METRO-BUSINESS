'use client'

import Image from 'next/image'
import { Check } from 'lucide-react'
import { cn } from '@/lib/utils'
import { MetroAccountAvatar } from './RecipientAvatar'
import type { TransferFundingAccount } from './types'

interface FundingAccountDropdownProps {
  accounts: TransferFundingAccount[]
  selected: TransferFundingAccount
  onClose: () => void
  onSelect: (account: TransferFundingAccount) => void
}

export function FundingAccountMark({ account, className }: { account: TransferFundingAccount; className?: string }) {
  if (account.kind === 'main') return <MetroAccountAvatar className={cn('size-10 text-xl shadow-sm', className)} />
  return (
    <span className={cn('relative flex size-10 shrink-0 overflow-hidden rounded-full border border-brand-border bg-brand-white shadow-sm', className)}>
      {account.image && <Image src={account.image} alt="" fill sizes="40px" className="object-cover" />}
    </span>
  )
}

export function FundingAccountDropdown({ accounts, selected, onClose, onSelect }: FundingAccountDropdownProps) {
  return (
    <div className="auth-step-in absolute left-3 right-3 top-20 z-30 overflow-hidden rounded-2xl border border-brand-border bg-brand-white p-2 shadow-2xl">
      <div className="flex items-start justify-between px-2 pb-2 pt-1">
        <span>
          <strong className="block text-sm font-semibold text-brand-primary">Pay from</strong>
          <span className="text-fig-10 text-brand-muted">Choose the account funding this transfer</span>
        </span>
        <button type="button" onClick={onClose} className="rounded-full bg-brand-surface px-2.5 py-1 text-fig-10 font-semibold text-brand-primary">
          Close
        </button>
      </div>
      <div role="listbox" aria-label="Funding accounts" className="space-y-1">
        {accounts.map((account) => {
          const active = account.id === selected.id
          return (
            <button
              type="button"
              role="option"
              aria-selected={active}
              key={account.id}
              onClick={() => onSelect(account)}
              className={cn(
                'group flex w-full cursor-pointer items-center gap-3 rounded-xl border px-3 py-2.5 text-left transition-all duration-200',
                active ? 'border-brand-primary bg-brand-primary text-brand-white shadow-md' : 'border-transparent bg-brand-surface/50 text-brand-primary hover:border-brand-border hover:bg-brand-surface',
              )}
            >
              <FundingAccountMark account={account} />
              <span className="min-w-0 flex-1">
                <strong className="block truncate text-sm font-semibold">{account.label}</strong>
                <span className={cn('block text-xs', active ? 'text-brand-white/70' : 'text-brand-muted')}>{account.balance} {account.currency} available</span>
              </span>
              <span className={cn('flex size-6 items-center justify-center rounded-full', active ? 'bg-brand-white text-brand-primary' : 'bg-brand-white text-transparent group-hover:text-brand-muted')}>
                <Check className="size-3.5" />
              </span>
            </button>
          )
        })}
      </div>
    </div>
  )
}
