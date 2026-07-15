import { DetailAvatar } from "@/components/ui/DetailPanel"
import { PanelCard } from "@/components/ui/PanelCard"

/** "From account" card: the sending Main Account, identical across every status variant. */
export function FromAccountCard() {
  return (
    <PanelCard>
      <p className="mb-2 text-sm tracking-wide text-brand-muted">From account</p>
      <div className="flex items-center gap-3">
        <DetailAvatar initials="M" />
        <div className="min-w-0">
          <p className="truncate text-sm font-semibold text-brand-primary">Main Account</p>
          <p className="truncate text-detail-meta text-brand-muted">Metro business&nbsp;&nbsp;•&nbsp;&nbsp;@metrobusiness</p>
        </div>
      </div>
    </PanelCard>
  )
}
