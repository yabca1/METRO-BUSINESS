'use client'

import * as React from 'react'
import { TRANSFER_FUNDING_ACCOUNTS } from './data'
import { FundingAccountDropdown, FundingAccountMark } from './FundingAccountDropdown'
import { ChevronRightIcon, FlashIcon, ReceiptIcon } from './TransferFlowIcons'
import type { TransferFundingAccount } from './types'

function OptionIcon({ children }: { children: React.ReactNode }) {
  return <span className="flex size-11.5 shrink-0 items-center justify-center rounded-full bg-brand-secondary/60 text-brand-primary">{children}</span>
}

interface TransferOptionsCardProps {
  account: TransferFundingAccount
  onAccountChange: (account: TransferFundingAccount) => void
}

export function TransferOptionsCard({ account, onAccountChange }: TransferOptionsCardProps) {
  const [accountsOpen, setAccountsOpen] = React.useState(false)

  function selectAccount(nextAccount: TransferFundingAccount) {
    onAccountChange(nextAccount)
    setAccountsOpen(false)
  }

  return (
    <section className="relative rounded-2xl border-[0.5px] border-brand-border bg-transfer-surface/40 p-3">
      <p className="mb-2 text-fig-10 font-medium text-brand-primary">Pay with</p>
      <div className="flex items-center gap-3">
        <FundingAccountMark account={account} className="size-11.5 text-xl" />
        <span className="min-w-0 flex-1">
          <strong className="block truncate text-sm font-semibold text-brand-primary">{account.label}</strong>
          <span className="text-xs text-brand-dark">{account.balance} {account.currency} available</span>
        </span>
        <button type="button" onClick={() => setAccountsOpen((open) => !open)} aria-expanded={accountsOpen} className="cursor-pointer rounded-full bg-brand-secondary/70 px-2 py-1 text-[8px] font-semibold transition hover:bg-brand-secondary">
          Change
        </button>
      </div>
      <div className="mt-4 flex items-center gap-3">
        <OptionIcon><FlashIcon className="size-6" /></OptionIcon>
        <span className="min-w-0 flex-1">
          <span className="block text-xs text-brand-muted">Arrives</span>
          <strong className="text-sm font-semibold text-brand-primary">Today - in seconds</strong>
        </span>
        <button type="button" className="rounded-full bg-brand-secondary/70 px-2 py-1 text-[8px] font-semibold">Schedule</button>
      </div>
      <div className="my-3 mx-[17px] h-px bg-brand-border" />
      <div className="flex items-center gap-3">
        <OptionIcon><ReceiptIcon className="size-6" /></OptionIcon>
        <span className="min-w-0 flex-1">
          <span className="block text-xs text-brand-muted">Total fees</span>
          <strong className="text-sm font-semibold text-brand-primary">Free - no fees to pay</strong>
        </span>
        <span className="flex items-center gap-1 text-sm font-semibold text-brand-primary">0 {account.currency} <ChevronRightIcon className="size-4" /></span>
      </div>
      {accountsOpen && (
        <>
          <button type="button" aria-label="Close funding account options" onClick={() => setAccountsOpen(false)} className="fixed inset-0 z-20 cursor-default bg-transparent" />
          <FundingAccountDropdown accounts={TRANSFER_FUNDING_ACCOUNTS} selected={account} onClose={() => setAccountsOpen(false)} onSelect={selectAccount} />
        </>
      )}
    </section>
  )
}
