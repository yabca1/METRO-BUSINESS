import { DetailAvatar } from "@/components/ui/DetailPanel"
import { PanelCard } from "@/components/ui/PanelCard"
import { ArrowUpIcon } from "@/components/icons/vuesax"
import { cn } from "@/lib/utils"
import type { RecipientTransaction } from "../types"

interface PaymentHistoryCardProps {
  recipientName: string
  initials: string
  transactions: RecipientTransaction[]
}

export function PaymentHistoryCard({ recipientName, initials, transactions }: PaymentHistoryCardProps) {
  return (
    <PanelCard className="space-y-5 pt-2.5">
      <div className="flex items-center justify-between gap-2">
        <p className="font-urbanist-semibold text-fig-12 font-semibold tracking-wide text-brand-primary">
          Payment history <span className="font-poppins-regular font-normal">• {transactions.length}</span>
        </p>
        <button type="button" className="font-urbanist-semibold text-fig-12 font-semibold text-brand-blue cursor-pointer">See all</button>
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
              <p className="truncate font-urbanist-semibold text-fig-14 font-semibold text-brand-primary">
                {tx.direction === "to" ? "To" : "From"} {recipientName}
              </p>
              <p className="truncate font-urbanist-regular text-fig-10 font-normal text-brand-muted">
                {tx.timestamp} • {tx.counterparty}
              </p>
            </div>
            <span className="shrink-0 font-urbanist-semibold text-fig-12 font-semibold text-brand-primary">{tx.amount}</span>
          </div>
        ))}
      </div>
    </PanelCard>
  )
}
