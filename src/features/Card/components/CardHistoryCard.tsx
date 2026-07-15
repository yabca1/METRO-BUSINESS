// src/features/Card/components/CardHistoryCard.tsx
import { DetailAvatar } from "@/components/ui/DetailPanel"
import { PanelCard } from "@/components/ui/PanelCard"
import { ArrowUpIcon } from "@/components/icons/vuesax"
import { cn } from "@/lib/utils"
import type { CardTransaction } from "../types"

interface CardHistoryCardProps {
  cardholder: string
  initials: string
  transactions: CardTransaction[]
}

/** "Payment history" summary card, matching the Recipient detail panel pattern. */
export function CardHistoryCard({ cardholder, initials, transactions }: CardHistoryCardProps) {
  return (
    <PanelCard className="space-y-5 pb-4 pt-2.5">
      <div className="flex items-center justify-between gap-2">
        <p className="text-xs font-semibold tracking-wide text-brand-primary">
          Payment history <span className="font-normal">• {transactions.length}</span>
        </p>
        <button type="button" className="text-xs font-semibold text-brand-link cursor-pointer">See all</button>
      </div>

      <div className="space-y-4">
        {transactions.map((tx) => (
          <div key={tx.id} className="flex items-center gap-3">
            <DetailAvatar
              initials={initials}
              initialsClassName="font-poppins-medium text-fig-20 font-medium tracking-tight"
              mark={<ArrowUpIcon className={cn("size-2.5 text-brand-white", tx.direction === "to" ? "rotate-90" : "-rotate-90")} />}
            />
            <div className="min-w-0 flex-1">
              <p className="truncate text-fig-14 font-urbanist-semibold text-brand-primary">
                {tx.direction === "to" ? "To" : "From"} {cardholder}
              </p>
              <p className="truncate text-[10px] text-brand-muted">{tx.timestamp} • {tx.counterparty}</p>
            </div>
            <span className="shrink-0 text-xs font-semibold text-brand-primary">{tx.amount}</span>
          </div>
        ))}
      </div>
    </PanelCard>
  )
}
