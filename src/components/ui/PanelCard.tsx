import * as React from "react"
import { cn } from "@/lib/utils"

interface PanelCardProps {
  className?: string
  children: React.ReactNode
}

/** Rounded surface card used inside detail rails (payment details, history, summary). */
export function PanelCard({ className, children }: PanelCardProps) {
  return (
    <section className={cn("rounded-2xl border border-brand-border bg-brand-surface/40 px-3 py-4", className)}>
      {children}
    </section>
  )
}
