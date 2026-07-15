import * as React from "react"
import { cn } from "@/lib/utils"

interface InfoRowProps {
  label: React.ReactNode
  value: React.ReactNode
  strong?: boolean
  className?: string
}

/** Label-left / value-right row used in summary cards. */
export function InfoRow({ label, value, strong, className }: InfoRowProps) {
  return (
    <div className={cn("flex items-center justify-between gap-3 py-2 text-sm tracking-wide", className)}>
      <span className="text-brand-muted">{label}</span>
      <span className={cn("text-right font-semibold text-brand-primary", strong && "font-bold")}>{value}</span>
    </div>
  )
}
