import { cn } from "@/lib/utils"

interface InfoLineProps {
  label: string
  value: string
  valueClassName?: string
}

/** Label-left / value-right row used across the transfer detail panel's cards. */
export function InfoLine({ label, value, valueClassName }: InfoLineProps) {
  return (
    <div className="flex items-center justify-between gap-3 text-sm tracking-wide">
      <span className="text-brand-muted">{label}</span>
      <span className={cn("text-right font-medium text-brand-primary", valueClassName)}>{value}</span>
    </div>
  )
}
