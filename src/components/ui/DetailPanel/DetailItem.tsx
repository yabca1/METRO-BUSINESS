import * as React from "react"
import { cn } from "@/lib/utils"

interface DetailItemProps {
  label?: React.ReactNode
  title: React.ReactNode
  description?: React.ReactNode
  leading?: React.ReactNode
  action?: React.ReactNode
  className?: string
}

export function DetailItem({ label, title, description, leading, action, className }: DetailItemProps) {
  return (
    <div className={cn("flex flex-col gap-2", className)}>
      {label && <p className="text-xs font-medium tracking-wide text-brand-muted">{label}</p>}
      <div className="flex items-center gap-3">
        {leading}
        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-semibold leading-5 text-brand-primary">{title}</p>
          {description && <p className="truncate text-xs leading-4 text-brand-muted">{description}</p>}
        </div>
        {action}
      </div>
    </div>
  )
}
