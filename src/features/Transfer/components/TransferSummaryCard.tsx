import type * as React from "react"
import { PanelCard } from "@/components/ui/PanelCard"
import { TimelineCheckIcon } from "@/components/icons/vuesax-transfer"
import { cn } from "@/lib/utils"

const STEPS = [
  "Abebe Kebede setup the transfer",
  "Pending review and approval from Seleam Kebede",
  "Leaving for recipient's wallet",
  "We paid out your transfer",
  "Your transfer's complete",
]

interface TransferSummaryCardProps {
  timestamp: string
  /** How many steps (from the top) are marked complete; the rest render muted. */
  stepsDone: number
  finalNote: React.ReactNode
}

/** "Summary" card: vertical checklist of transfer lifecycle steps. */
export function TransferSummaryCard({ timestamp, stepsDone, finalNote }: TransferSummaryCardProps) {
  return (
    <PanelCard className="space-y-4 pt-2.5">
      <p className="text-xs font-semibold tracking-wide text-brand-primary">Summary</p>
      <ol className="space-y-1">
        {STEPS.map((step, index) => {
          const done = index < stepsDone
          const last = index === STEPS.length - 1
          return (
            <li key={step} className="flex gap-3">
              <div className="flex flex-col items-center">
                <TimelineCheckIcon done={done} className="size-5" />
                {!last && <span className={cn("my-1 h-6 border-l border-dashed", done ? "border-brand-primary" : "border-brand-muted")} />}
              </div>
              <div className="min-w-0 pb-1">
                <p className="text-detail-meta text-brand-muted">{timestamp}</p>
                <p className={cn("text-detail-timeline font-medium", done ? "text-brand-primary" : "text-brand-muted")}>{step}</p>
                {last && done && <p className="text-detail-meta text-brand-primary">{finalNote}</p>}
              </div>
            </li>
          )
        })}
      </ol>
    </PanelCard>
  )
}
