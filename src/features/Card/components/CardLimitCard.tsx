// src/features/Card/components/CardLimitCard.tsx
import { InfoRow } from "@/components/ui/DetailPanel"
import { PanelCard } from "@/components/ui/PanelCard"
import { formatAmount } from "@/lib/currency"
import type { Card } from "../types"

/** "Limit and spend" summary card with a Manage link, matching Figma. */
export function CardLimitCard({ card }: { card: Card }) {
  return (
    <PanelCard className="space-y-5 pb-4 pt-2.5">
      <div className="flex items-center justify-between gap-2">
        <p className="text-xs font-semibold tracking-wide text-brand-primary">Limit and spend</p>
        <button type="button" className="text-xs font-semibold text-brand-link cursor-pointer">Manage</button>
      </div>
      <InfoRow label="Spend program" value={card.spendingProgram || "-"} className="py-0" />
      <InfoRow
        className="py-0"
        label="Limit spent"
        value={
          card.limitTotal === 0 ? (
            "No limit set"
          ) : (
            <span className="block">
              <span className="block">{formatAmount(card.limitSpent, card.currency)} / {formatAmount(card.limitTotal, card.currency)}</span>
              <span className="block font-normal text-brand-muted">{card.limitPeriod}</span>
            </span>
          )
        }
      />
    </PanelCard>
  )
}
