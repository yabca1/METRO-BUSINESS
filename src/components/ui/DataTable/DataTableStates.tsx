// src/components/ui/DataTable/DataTableStates.tsx
import { Inbox, RefreshCw } from "lucide-react"

const SKELETON_ROWS = 5

export function TableSkeleton({ columns }: { columns: number }) {
  return (
    <div className="space-y-1 p-1" aria-busy="true" aria-label="Loading">
      {Array.from({ length: SKELETON_ROWS }).map((_, row) => (
        <div key={row} className="flex animate-pulse items-center gap-3 rounded-2xl px-3 py-3">
          <span className="size-11 shrink-0 rounded-full bg-brand-surface" />
          <span className="flex flex-1 flex-col gap-2">
            <span className="h-3 w-1/3 rounded-full bg-brand-surface" />
            <span className="h-2 w-1/5 rounded-full bg-brand-surface" />
          </span>
          {Array.from({ length: Math.max(columns - 2, 1) }).map((_, cell) => (
            <span key={cell} className="hidden h-3 flex-1 rounded-full bg-brand-surface sm:block" />
          ))}
        </div>
      ))}
    </div>
  )
}

export function TableEmpty({ message = "Nothing here yet" }: { message?: string }) {
  return (
    <div className="flex flex-col items-center justify-center gap-3 px-6 py-16 text-center">
      <span className="flex size-12 items-center justify-center rounded-full bg-brand-surface text-brand-muted">
        <Inbox className="size-5" />
      </span>
      <p className="text-sm font-medium text-brand-primary">{message}</p>
      <p className="text-xs text-brand-muted">Try adjusting your search or filters.</p>
    </div>
  )
}

export function TableError({ error, onRetry }: { error: Error; onRetry?: () => void }) {
  return (
    <div className="flex flex-col items-center justify-center gap-3 px-6 py-16 text-center">
      <p className="text-sm font-medium text-brand-danger">Something went wrong</p>
      <p className="max-w-sm text-xs text-brand-muted">{error.message}</p>
      {onRetry && (
        <button type="button" onClick={onRetry}
          className="flex items-center gap-2 rounded-full bg-brand-primary px-4 py-2 text-xs font-semibold text-brand-white transition hover:bg-brand-dark cursor-pointer">
          <RefreshCw className="size-3.5" /> Try again
        </button>
      )}
    </div>
  )
}
