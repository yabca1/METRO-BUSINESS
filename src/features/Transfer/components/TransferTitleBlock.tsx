import { DetailAvatar } from "@/components/ui/DetailPanel"
import { CloseIcon } from "@/components/icons/vuesax"
import { ArrangeCircle2Icon, ClockIcon, TickDoubleIcon } from "@/components/icons/vuesax-transfer"

interface TransferTitleBlockProps {
  title: string
  subtitle: string
  initials: string
  /** Bulk transfers show a circular arrange/clock mark instead of recipient initials. */
  isBulk: boolean
  /** Only "Pending Review" transfers show Approve/Decline actions. */
  showApproveDecline: boolean
}

export function TransferTitleBlock({ title, subtitle, initials, isBulk, showApproveDecline }: TransferTitleBlockProps) {
  return (
    <div className="mb-5 flex flex-col gap-4">
      <div className="flex items-center justify-between gap-4">
        <div className="min-w-0">
          <h2 className="truncate text-detail-title font-semibold tracking-normal text-brand-primary">{title}</h2>
          <p className="mt-1 truncate text-detail-meta text-brand-muted">{subtitle}</p>
        </div>
        {isBulk ? (
          <span className="relative flex size-11 shrink-0 items-center justify-center rounded-full bg-brand-primary text-brand-white">
            <ArrangeCircle2Icon className="size-7" />
            <span className="absolute bottom-0 right-0 flex size-3 items-center justify-center rounded-full bg-brand-primary ring-2 ring-brand-white">
              <ClockIcon className="size-2" />
            </span>
          </span>
        ) : (
          <DetailAvatar initials={initials} mark={<span className="scale-75 font-orbitron text-xs text-brand-white">M</span>} />
        )}
      </div>

      {showApproveDecline && (
        <div className="flex items-center gap-4">
          <button type="button" className="flex items-center gap-2.5 rounded-full bg-brand-primary px-4 py-1.5 text-sm font-medium tracking-wide text-brand-white cursor-pointer">
            <TickDoubleIcon className="size-6" /> Approve
          </button>
          <button type="button" className="flex items-center gap-2.5 rounded-full border border-brand-border bg-brand-secondary/10 px-4 py-1.5 text-sm font-medium tracking-wide text-brand-primary cursor-pointer">
            <CloseIcon className="size-3.5" /> Decline
          </button>
        </div>
      )}
    </div>
  )
}
