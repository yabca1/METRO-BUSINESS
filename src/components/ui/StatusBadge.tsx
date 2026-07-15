// src/components/ui/StatusBadge.tsx
import * as React from "react"
import { cn } from "@/lib/utils"

export type StatusTone = "success" | "warning" | "danger" | "neutral"

const TONES: Record<StatusTone, string> = {
  success: "bg-brand-success/10 text-brand-success",
  warning: "bg-brand-accent/15 text-brand-accent",
  danger: "bg-brand-danger/10 text-brand-danger",
  neutral: "bg-brand-surface text-brand-muted",
}

interface StatusBadgeProps {
  tone?: StatusTone
  className?: string
  children: React.ReactNode
}

/** Pill for statuses like Completed (success) or Pending Review (warning). */
export function StatusBadge({ tone = "neutral", className, children }: StatusBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold",
        TONES[tone],
        className,
      )}
    >
      {children}
    </span>
  )
}
