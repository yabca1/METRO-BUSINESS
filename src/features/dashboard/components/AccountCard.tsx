// src/features/dashboard/components/AccountCard.tsx
'use client'

import * as React from "react"
import { BrandMark } from "@/components/brand/BrandMark"
import { Avatar } from "@/components/ui/Avatar"
import { formatAmount, maskAmount } from "@/lib/currency"
import { account, accountCurrencies } from "../data"
import { AccountsPopup } from "./AccountsPopup"

interface AccountCardProps {
  amountsHidden: boolean
  onToggleAmountsHidden: () => void
}

const primaryCurrency = accountCurrencies.find((currency) => currency.isPrimary) ?? accountCurrencies[0]

/** Primary wallet balance card, including the account switcher chip and quick links. */
export function AccountCard({ amountsHidden, onToggleAmountsHidden }: AccountCardProps) {
  const [accountsOpen, setAccountsOpen] = React.useState(false)
  const [selectedCurrencyId, setSelectedCurrencyId] = React.useState(primaryCurrency.id)

  const selectedCurrency = accountCurrencies.find((currency) => currency.id === selectedCurrencyId) ?? primaryCurrency

  return (
    <div className="relative flex h-full flex-col overflow-hidden rounded-[20px] bg-brand-secondary/30 p-4">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-10 -top-16 size-56 rounded-full border border-brand-primary/10"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 top-6 size-56 rounded-full border border-brand-primary/10"
      />
      <span
        aria-hidden
        className="pointer-events-none absolute bottom-2.5 right-4 font-orbitron-bold text-2xl font-bold leading-tight text-brand-primary"
      >
        Metro
      </span>

      <button
        type="button"
        onClick={() => setAccountsOpen(true)}
        className="inline-flex w-fit items-center gap-2 rounded-2xl border border-brand-primary/20 px-3 py-1.5 text-xs font-medium text-brand-primary transition hover:bg-brand-white/50 cursor-pointer"
      >
        Accounts
        <span aria-hidden className="size-1 rounded-full bg-brand-primary/40" />
        {account.currencyCount} currencies
        <img src="/icons/dashboard/chevron-right.svg" alt="" className="size-3" />
      </button>

      <AccountsPopup
        open={accountsOpen}
        onOpenChange={setAccountsOpen}
        selectedCurrencyId={selectedCurrencyId}
        onSelectCurrency={setSelectedCurrencyId}
      />

      <div className="mt-4 flex items-center gap-1.5 text-[10px] font-medium text-brand-primary">
        {selectedCurrency.isPrimary ? (
          <BrandMark variant="dark" className="size-[18px] rounded-md" />
        ) : (
          <Avatar src={selectedCurrency.flag} alt={selectedCurrency.label} className="size-[18px] rounded-md bg-transparent" />
        )}
        <span>{selectedCurrency.label}</span>
        <span aria-hidden className="size-1 rounded-full bg-brand-primary/40" />
        <span>@{account.handle}</span>
        <button type="button" aria-label="Copy account handle" className="text-brand-muted transition hover:text-brand-primary cursor-pointer">
          <img src="/icons/dashboard/copy.svg" alt="" className="size-3" />
        </button>
      </div>

      <div className="mt-2 flex items-center gap-2.5">
        <p className="text-4xl font-bold tracking-tight text-brand-primary">
          {amountsHidden ? maskAmount(selectedCurrency.currency) : formatAmount(selectedCurrency.amount, selectedCurrency.currency)}
        </p>
        <button
          type="button"
          aria-label={amountsHidden ? "Show balance" : "Hide balance"}
          onClick={onToggleAmountsHidden}
          className="flex size-9 items-center justify-center rounded-full text-brand-primary transition hover:bg-brand-white/50 cursor-pointer"
        >
          {amountsHidden ? (
            <img src="/icons/dashboard/eye.svg" alt="" className="size-5" />
          ) : (
            <img src="/icons/dashboard/eye-slash.svg" alt="" className="size-5" />
          )}
        </button>
      </div>

      <div className="mt-auto flex items-center gap-2 pt-5">
        <button
          type="button"
          className="inline-flex items-center gap-2 rounded-2xl border border-brand-primary/70 px-3 py-2 text-xs font-medium text-brand-primary transition hover:bg-brand-white/50 cursor-pointer"
        >
          <img src="/icons/dashboard/empty-wallet.svg" alt="" className="size-3.5" />
          Account detail
        </button>
        <button
          type="button"
          aria-label="View account chart"
          className="flex size-9 items-center justify-center rounded-full border border-brand-primary/70 text-brand-primary transition hover:bg-brand-white/50 cursor-pointer"
        >
          <img src="/icons/dashboard/chart.svg" alt="" className="size-4" />
        </button>
      </div>
    </div>
  )
}
