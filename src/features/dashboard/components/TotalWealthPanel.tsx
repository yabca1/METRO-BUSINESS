// src/features/dashboard/components/TotalWealthPanel.tsx
import { ChevronRight } from "lucide-react"
import { formatAmount, maskAmount } from "@/lib/currency"
import { wealthBalances, wealthPromo, wealthTotal } from "../data"
import { SectionCard } from "./SectionCard"

interface TotalWealthPanelProps {
  amountsHidden: boolean
}

export function TotalWealthPanel({ amountsHidden }: TotalWealthPanelProps) {
  return (
    <SectionCard
      title="Total wealth"
      action={
        <button type="button" aria-label="View wealth breakdown" className="text-brand-muted cursor-pointer">
          <ChevronRight className="size-4" />
        </button>
      }
      bodyClassName="space-y-1"
    >
      <p className="px-0 pb-3 text-2xl font-bold tracking-tight text-brand-primary">
        {amountsHidden ? maskAmount(wealthTotal.currency) : formatAmount(wealthTotal.amount, wealthTotal.currency)}
      </p>

      {wealthBalances.map((item) => (
        <div key={item.id} className="flex items-center gap-3 py-2">
          <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-brand-secondary/50 text-brand-primary">
            <item.icon className="size-[18px]" />
          </span>
          <span className="flex-1 text-sm font-semibold text-brand-primary">{item.label}</span>
          <span className="text-sm font-semibold text-brand-primary">
            {amountsHidden ? maskAmount(item.currency) : formatAmount(item.amount, item.currency)}
          </span>
        </div>
      ))}

      <button
        type="button"
        className="flex w-full items-center gap-3 rounded-xl py-2 text-left transition hover:bg-brand-white cursor-pointer"
      >
        <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-brand-secondary/50 text-brand-primary">
          <wealthPromo.icon className="size-[18px]" />
        </span>
        <span className="min-w-0 flex-1">
          <span className="block text-sm font-semibold text-brand-primary">{wealthPromo.label}</span>
          <span className="block truncate text-xs text-brand-muted">{wealthPromo.description}</span>
        </span>
        <ChevronRight className="size-4 shrink-0 text-brand-muted" />
      </button>
    </SectionCard>
  )
}
