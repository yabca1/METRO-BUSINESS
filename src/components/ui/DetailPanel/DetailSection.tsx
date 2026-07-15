import * as React from "react"
import { cn } from "@/lib/utils"

interface DetailSectionProps {
  title?: React.ReactNode
  action?: React.ReactNode
  className?: string
  children: React.ReactNode
}

/** Rounded detail card used for account, receiver, fee, and metadata groups. */
export function DetailSection({ title, action, className, children }: DetailSectionProps) {
  return (
    <section className={cn("rounded-lg border border-brand-border bg-brand-surface/40 p-4", className)}>
      {(title || action) && (
        <div className="mb-3 flex items-center justify-between gap-2">
          {title && <h3 className="text-xs font-medium tracking-wide text-brand-muted">{title}</h3>}
          {action}
        </div>
      )}
      {children}
    </section>
  )
}
