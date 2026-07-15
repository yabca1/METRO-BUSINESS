// src/components/ui/DataTable/DataTable.tsx
'use client'

import * as React from "react"
import { ArrowDown, ArrowUp } from "lucide-react"
import { cn } from "@/lib/utils"
import type { ColumnDef, SortState } from "./types"
import { TableSkeleton, TableEmpty, TableError } from "./DataTableStates"

const HIDE_BELOW: Record<string, string> = {
  sm: "hidden sm:block",
  md: "hidden md:block",
  lg: "hidden lg:block",
}
const ALIGN: Record<string, string> = { left: "text-left", right: "text-right", center: "text-center" }

interface DataTableProps<TRow> {
  className?: string
  rowClassName?: string
  columns: ColumnDef<TRow>[]
  rows: TRow[]
  rowKey: (row: TRow) => string
  onRowClick?: (row: TRow) => void
  selectedKey?: string | null
  sort?: SortState | null
  onSortToggle?: (columnId: string) => void
  isLoading?: boolean
  error?: Error | null
  onRetry?: () => void
  emptyMessage?: string
  /** Slot rendered as the first header cell, e.g. "All • 24". */
  headerLead?: React.ReactNode
  /** Alternate row backgrounds (odd rows shaded). On by default for every table. */
  striped?: boolean
}

export function DataTable<TRow>({
  columns, rows, rowKey, onRowClick, selectedKey, sort, onSortToggle,
  isLoading, error, onRetry, emptyMessage, headerLead, striped = true, className, rowClassName,
}: DataTableProps<TRow>) {
  const grid = { gridTemplateColumns: columns.map((c) => c.width ?? "1fr").join(" ") }

  const cellClass = (col: ColumnDef<TRow>) =>
    cn(ALIGN[col.align ?? "left"], col.hideBelow && HIDE_BELOW[col.hideBelow], "min-w-0")

  return (
    <div className={cn("w-full overflow-hidden rounded-2xl border border-brand-border bg-brand-white", className)}>
      <div className="grid items-center gap-3 px-4 py-3" style={grid} role="row">
        {columns.map((col, i) => (
          <div key={col.id} className={cellClass(col)}>
            {i === 0 && headerLead ? (
              <span className="text-xs font-medium text-brand-muted">{headerLead}</span>
            ) : col.sortable && onSortToggle ? (
              <button type="button" onClick={() => onSortToggle(col.id)}
                className={cn(
                  "inline-flex items-center gap-1 text-xs font-medium transition cursor-pointer",
                  sort?.id === col.id ? "text-brand-primary" : "text-brand-muted hover:text-brand-primary",
                  col.align === "right" && "flex-row-reverse",
                )}>
                {col.header}
                {sort?.id === col.id && (sort.direction === "asc"
                  ? <ArrowUp className="size-3" /> : <ArrowDown className="size-3" />)}
              </button>
            ) : (
              <span className="text-xs font-medium text-brand-muted">{col.header}</span>
            )}
          </div>
        ))}
      </div>

      {isLoading ? (
        <TableSkeleton columns={columns.length} />
      ) : error ? (
        <TableError error={error} onRetry={onRetry} />
      ) : rows.length === 0 ? (
        <TableEmpty message={emptyMessage} />
      ) : (
        <div className="space-y-1 p-1">
          {rows.map((row, index) => {
            const key = rowKey(row)
            const selected = selectedKey === key
            return (
              <div key={key} role="row"
                onClick={onRowClick ? () => onRowClick(row) : undefined}
                onKeyDown={onRowClick ? (e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); onRowClick(row) } } : undefined}
                tabIndex={onRowClick ? 0 : undefined}
                className={cn(
                  "grid items-center gap-3 rounded-2xl border px-3 py-2 transition",
                  rowClassName,
                  onRowClick && "cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary",
                  selected
                    ? "border-brand-primary bg-brand-surface"
                    : cn("border-transparent hover:bg-brand-surface/70", striped && index % 2 === 1 && "bg-brand-surface"),
                )}
                style={grid}>
                {columns.map((col) => (
                  <div key={col.id} className={cellClass(col)}>{col.cell(row)}</div>
                ))}
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}
