// src/features/dashboard/components/PocketsCard.tsx
import { cn } from "@/lib/utils"
import { formatAmount, maskAmount } from "@/lib/currency"
import { pockets, pocketsSummary } from "../data"
import type { Pocket } from "../types"

const TONE: Record<Pocket["tone"], string> = {
  green: "bg-emerald-50 text-emerald-500",
  rose: "bg-rose-50 text-rose-500",
}

interface PocketsCardProps {
  amountsHidden: boolean
}

export function PocketsCard({ amountsHidden }: PocketsCardProps) {
  return (
    <div className="flex h-full flex-col rounded-[20px] border border-brand-border bg-brand-white p-4">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-base font-bold tracking-tight text-brand-primary">Pockets</h2>
          <p className="mt-0.5 flex items-center gap-1.5 text-[10px] font-semibold text-brand-primary">
            {amountsHidden ? maskAmount(pocketsSummary.currency) : formatAmount(pocketsSummary.amount, pocketsSummary.currency)}
            <span aria-hidden className="size-1 rounded-full bg-brand-muted/40" />
            <span className="font-normal text-brand-muted">{pocketsSummary.count} pockets</span>
          </p>
        </div>
        <button
          type="button"
          aria-label="Add pocket"
          className="flex size-9 items-center justify-center rounded-full border border-brand-border text-brand-primary transition hover:bg-brand-surface cursor-pointer"
        >
          <img src="/icons/dashboard/pocket-add.svg" alt="" className="size-4" />
        </button>
      </div>

      <ul className="mt-4 flex-1 space-y-1">
        {pockets.map((pocket) => (
          <li key={pocket.id}>
            <button
              type="button"
              className="flex w-full items-center justify-between gap-3 rounded-xl py-1.5 text-left transition hover:bg-brand-surface cursor-pointer"
            >
              <span className="flex items-center gap-3">
                <span className={cn("flex size-8 items-center justify-center rounded-full", TONE[pocket.tone])}>
                  <img src={pocket.icon} alt="" className="size-[18px]" />
                </span>
                <span className="text-sm font-semibold text-brand-primary">{pocket.label}</span>
              </span>
              <span className="flex items-center gap-1.5">
                <span className="text-sm font-semibold text-brand-primary">
                  {amountsHidden ? maskAmount(pocket.currency) : formatAmount(pocket.amount, pocket.currency)}
                </span>
                <img src="/icons/dashboard/chevron-right.svg" alt="" className="size-2.5" />
              </span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
