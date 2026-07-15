// src/components/ui/DetailPanel/DetailTimeline.tsx
import { Check } from "lucide-react"
import { cn } from "@/lib/utils"

export interface TimelineItem {
  title: string
  timestamp?: string
  /** Completed steps show a filled check; pending steps are muted. */
  done?: boolean
}

/** Vertical checkmark-timestamp timeline (transfer setup → review → complete). */
export function DetailTimeline({ items }: { items: TimelineItem[] }) {
  return (
    <ol className="space-y-1">
      {items.map((item, i) => {
        const last = i === items.length - 1
        return (
          <li key={i} className="flex gap-3">
            <div className="flex flex-col items-center">
              <span
                className={cn(
                  "flex size-6 shrink-0 items-center justify-center rounded-full",
                  item.done ? "bg-brand-success text-brand-white" : "bg-brand-track text-brand-muted",
                )}
              >
                <Check className="size-3.5" />
              </span>
              {!last && <span className="my-1 w-px flex-1 bg-brand-border" />}
            </div>
            <div className={cn(!last && "pb-4")}>
              <p className="text-sm font-medium text-brand-primary">{item.title}</p>
              {item.timestamp && <p className="mt-0.5 text-xs text-brand-muted">{item.timestamp}</p>}
            </div>
          </li>
        )
      })}
    </ol>
  )
}
