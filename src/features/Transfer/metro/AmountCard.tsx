'use client'

import * as React from 'react'
import { cn } from '@/lib/utils'
import { TRANSFER_FUNDING_ACCOUNTS } from './data'
import { FundingAccountMark } from './FundingAccountDropdown'
import { ChevronRightIcon } from './TransferFlowIcons'
import type { TransferFundingAccount } from './types'

interface AmountCardProps {
  amount: string
  account: TransferFundingAccount
  onAmountChange?: (value: string) => void
  onAccountChange: (account: TransferFundingAccount) => void
}

export function AmountCard({ amount, account, onAmountChange, onAccountChange }: AmountCardProps) {
  const [currenciesOpen, setCurrenciesOpen] = React.useState(false)

  function selectCurrency(nextAccount: TransferFundingAccount) {
    onAccountChange(nextAccount)
    setCurrenciesOpen(false)
  }

  return (
    <section className="rounded-2xl border-[0.5px] border-brand-border bg-transfer-surface/40 px-2.5 py-4">
      <p className="text-xs text-brand-indicator">You Send</p>
      <div className="mt-2 flex items-center justify-between gap-4">
        <div className="relative w-[100px] shrink-0">
          <button
            type="button"
            onClick={() => setCurrenciesOpen((open) => !open)}
            aria-expanded={currenciesOpen}
            aria-label={`Change transfer currency. ${account.currency} selected`}
            className="flex w-full cursor-pointer items-center justify-between rounded-full border border-brand-border bg-brand-white px-2 py-1"
          >
            <FundingAccountMark account={account} className="size-7 text-sm" />
            <span className="text-sm font-semibold text-brand-primary">{account.currency}</span>
            <ChevronRightIcon className={cn('size-4 text-brand-primary transition-transform', currenciesOpen && 'rotate-90')} />
          </button>
          {currenciesOpen && (
            <>
              <button type="button" aria-label="Close currency options" onClick={() => setCurrenciesOpen(false)} className="fixed inset-0 z-20 cursor-default bg-transparent" />
              <div role="listbox" aria-label="Transfer currencies" className="auth-step-in absolute left-0 top-[calc(100%+6px)] z-30 w-full overflow-hidden rounded-xl border border-brand-border bg-brand-white p-1 shadow-xl">
                {TRANSFER_FUNDING_ACCOUNTS.map((option) => (
                  <button
                    type="button"
                    role="option"
                    aria-selected={option.id === account.id}
                    key={option.id}
                    onClick={() => selectCurrency(option)}
                    className={cn(
                      'flex w-full cursor-pointer items-center gap-2 rounded-lg px-1.5 py-1.5 text-xs font-semibold transition-colors',
                      option.id === account.id ? 'bg-brand-primary text-brand-white' : 'text-brand-primary hover:bg-brand-surface',
                    )}
                  >
                    <FundingAccountMark account={option} className="size-6 text-xs" />
                    {option.currency}
                  </button>
                ))}
              </div>
            </>
          )}
        </div>
        {onAmountChange ? (
          <input
            autoFocus
            inputMode="decimal"
            aria-label="Transfer amount"
            value={amount}
            onChange={(event) => onAmountChange(event.target.value.replace(/[^0-9.]/g, ''))}
            className="min-w-0 flex-1 bg-transparent text-right font-poppins-semibold text-3xl font-semibold uppercase text-brand-primary outline-none"
          />
        ) : (
          <strong className="font-poppins-semibold text-3xl font-semibold text-brand-primary">{amount}</strong>
        )}
      </div>
    </section>
  )
}
