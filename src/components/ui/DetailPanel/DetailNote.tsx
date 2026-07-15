import * as React from "react"
import { Edit2 } from "lucide-react"
import { cn } from "@/lib/utils"

interface DetailNoteProps {
  label?: React.ReactNode
  value: React.ReactNode
  onEdit?: () => void
  className?: string
}

export function DetailNote({ label = "Note", value, onEdit, className }: DetailNoteProps) {
  return (
    <div className={cn("flex min-h-16 items-center justify-between gap-4 rounded-xl bg-brand-surface px-3 py-2", className)}>
      <div className="min-w-0">
        <p className="truncate text-xs text-brand-muted/80">{label}</p>
        <p className="truncate text-base font-medium leading-6 text-brand-primary">{value}</p>
      </div>
      {onEdit && (
        <button type="button" onClick={onEdit} aria-label="Edit note" className="shrink-0 text-brand-primary">
          <Edit2 className="size-5" />
        </button>
      )}
    </div>
  )
}
