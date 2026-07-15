import { ArrowUpRight } from "lucide-react"
import { DetailAvatar } from "@/components/ui/DetailPanel"
import { PanelCard } from "@/components/ui/PanelCard"
import type { TransferRecipientBreakdown } from "../types"

/** "Recipients" card on bulk/pending transfers: per-recipient share of the total. */
export function RecipientsBreakdownCard({ recipients }: { recipients: TransferRecipientBreakdown[] }) {
  return (
    <PanelCard className="space-y-4">
      <div className="flex items-center justify-between gap-2">
        <p className="text-xs font-semibold tracking-wide text-brand-primary">
          Recipients <span className="text-brand-muted">• {recipients.length}</span>
        </p>
        <button type="button" className="text-xs font-semibold text-brand-blue cursor-pointer">See all</button>
      </div>

      <div className="space-y-4">
        {recipients.map((recipient) => (
          <div key={recipient.id} className="flex items-center gap-3">
            <DetailAvatar
              initials={initials(recipient.name)}
              mark={<ArrowUpRight className="size-2 stroke-[3] text-brand-white" />}
            />
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-semibold text-brand-primary">{recipient.name}</p>
              <p className="truncate text-detail-meta text-brand-muted">{recipient.wallet}&nbsp;&nbsp;•&nbsp;&nbsp;{recipient.handle}</p>
            </div>
            <span className="shrink-0 text-xs font-semibold text-brand-primary">{recipient.amount}</span>
          </div>
        ))}
      </div>
    </PanelCard>
  )
}

function initials(name: string) {
  return name.split(" ").map((part) => part[0]).join("").slice(0, 2).toUpperCase() || "AK"
}
