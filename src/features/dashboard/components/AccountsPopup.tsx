// src/features/dashboard/components/AccountsPopup.tsx
'use client'

import { Banknote, Check, Plus } from "lucide-react"
import { Dialog } from "@/components/ui/Dialog"
import { Avatar } from "@/components/ui/Avatar"
import { cn } from "@/lib/utils"
import { formatAmount } from "@/lib/currency"
import { accountsSummary, accountCurrencies } from "../data"
import type { AccountCurrency } from "../types"

interface AccountsPopupProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  selectedCurrencyId: string
  onSelectCurrency: (currencyId: string) => void
}

function CurrencyRow({
  currency,
  selected,
  onSelect,
}: {
  currency: AccountCurrency
  selected: boolean
  onSelect: () => void
}) {
  return (
    <button
      type="button"
      onClick={onSelect}
      aria-pressed={selected}
      className={cn(
        "flex w-full items-center gap-3 rounded-[10px] px-1 py-1 text-left transition cursor-pointer",
        currency.isPrimary ? "-mx-1 bg-brand-surface px-2 py-2.5" : "hover:bg-brand-surface/60",
      )}
    >
      {currency.isPrimary ? (
        <span className="flex size-[46px] shrink-0 items-center justify-center rounded-full bg-brand-primary">
          <span className="font-orbitron-bold text-lg font-bold leading-none text-brand-white">M</span>
        </span>
      ) : (
        <Avatar src={currency.flag} alt={currency.label} className="size-[46px] bg-transparent" />
      )}
      <span className="min-w-0 flex-1">
        <span className="block truncate font-urbanist-semibold text-fig-14 font-semibold leading-[1.4] text-brand-primary">
          {currency.label}
        </span>
        <span className="block font-urbanist-regular text-fig-12 text-brand-muted">{currency.code}</span>
      </span>
      <span className="shrink-0 text-right">
        <span className="block font-urbanist-semibold text-fig-14 font-semibold leading-[1.4] text-brand-primary">
          {formatAmount(currency.amount, currency.currency)}
        </span>
        {!currency.isPrimary && (
          <span className="block font-urbanist-regular text-fig-12 text-brand-muted">
            {formatAmount(currency.convertedAmount, currency.convertedCurrency)}
          </span>
        )}
      </span>
      <span className="flex size-4 shrink-0 items-center justify-center">
        {selected && <Check className="size-4 text-brand-blue" strokeWidth={2.5} />}
      </span>
    </button>
  )
}

/** Multi-currency breakdown of the primary wallet, opened from the Accounts chip on the AccountCard. */
export function AccountsPopup({ open, onOpenChange, selectedCurrencyId, onSelectCurrency }: AccountsPopupProps) {
  return (
    <Dialog
      open={open}
      onOpenChange={onOpenChange}
      hideCloseButton
      ariaLabelledBy="accounts-popup-title"
      contentClassName="max-w-[372px] rounded-2xl border-[0.5px] border-brand-border bg-white p-3 pb-2 shadow-none"
    >
      <div id="accounts-popup-title" className="flex items-center gap-1.5 px-1 pb-3 pt-1">
        <span className="font-poppins-regular text-fig-10 text-brand-muted">Accounts</span>
        <span aria-hidden className="size-[3px] rounded-full bg-brand-indicator" />
        <span className="font-poppins-regular text-fig-10 text-brand-muted">
          {accountsSummary.accountsCount} currencies
        </span>
      </div>

      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-3 px-1">
          <span className="flex size-[46px] shrink-0 items-center justify-center rounded-full bg-brand-indicator/10">
            <Banknote className="size-6 text-brand-primary/70" />
          </span>
          <span className="min-w-0 flex-1">
            <span className="block font-urbanist-semibold text-fig-14 font-semibold leading-[1.4] text-brand-primary">
              Total wealth
            </span>
            <span className="block font-urbanist-regular text-fig-12 text-brand-muted">
              {accountsSummary.accountsCount} accounts
            </span>
          </span>
          <span className="shrink-0 font-urbanist-semibold text-fig-14 font-semibold leading-[1.4] text-brand-primary">
            {formatAmount(accountsSummary.totalAmount, accountsSummary.totalCurrency)}
          </span>
        </div>

        {accountCurrencies.map((currency) => (
          <CurrencyRow
            key={currency.id}
            currency={currency}
            selected={currency.id === selectedCurrencyId}
            onSelect={() => {
              onSelectCurrency(currency.id)
              onOpenChange(false)
            }}
          />
        ))}
      </div>

      <div className="my-3 border-t border-brand-border" />

      <button
        type="button"
        className="flex items-center gap-2 px-1 text-left cursor-pointer"
      >
        <Plus className="size-6 text-brand-blue" strokeWidth={2.5} />
        <span className="font-urbanist-semibold text-fig-14 font-semibold leading-[1.4] text-brand-blue">
          Create account
        </span>
      </button>
    </Dialog>
  )
}
