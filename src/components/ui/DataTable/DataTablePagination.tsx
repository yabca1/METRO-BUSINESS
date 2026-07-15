// src/components/ui/DataTable/DataTablePagination.tsx
'use client'

import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"
import type { PaginationState } from "./types"

interface DataTablePaginationProps {
  pagination: PaginationState
  onPageChange: (page: number) => void
}

const chipClass = "flex size-8 items-center justify-center rounded-full text-xs font-medium transition cursor-pointer disabled:opacity-40 disabled:pointer-events-none"

/** Compact pager: "Showing x–y of z" + prev/next and nearby page chips. */
export function DataTablePagination({ pagination, onPageChange }: DataTablePaginationProps) {
  const { page, pageSize, total } = pagination
  const pageCount = Math.max(1, Math.ceil(total / pageSize))
  if (total === 0) return null

  const from = (page - 1) * pageSize + 1
  const to = Math.min(page * pageSize, total)
  const pages = Array.from({ length: pageCount }, (_, i) => i + 1)
    .filter((p) => p === 1 || p === pageCount || Math.abs(p - page) <= 1)

  return (
    <div className="flex items-center justify-between gap-4 px-1 pt-4">
      <p className="text-xs text-brand-muted">
        Showing <span className="font-semibold text-brand-primary">{from}–{to}</span> of{" "}
        <span className="font-semibold text-brand-primary">{total}</span>
      </p>
      <div className="flex items-center gap-1">
        <button type="button" aria-label="Previous page" disabled={page <= 1}
          onClick={() => onPageChange(page - 1)}
          className={cn(chipClass, "text-brand-primary hover:bg-brand-surface")}>
          <ChevronLeft className="size-4" />
        </button>
        {pages.map((p, i) => {
          const gap = i > 0 && p - pages[i - 1] > 1
          return (
            <span key={p} className="flex items-center">
              {gap && <span className="px-1 text-xs text-brand-muted">…</span>}
              <button type="button" onClick={() => onPageChange(p)}
                aria-current={p === page ? "page" : undefined}
                className={cn(chipClass, p === page
                  ? "bg-brand-primary text-brand-white"
                  : "text-brand-primary hover:bg-brand-surface")}>
                {p}
              </button>
            </span>
          )
        })}
        <button type="button" aria-label="Next page" disabled={page >= pageCount}
          onClick={() => onPageChange(page + 1)}
          className={cn(chipClass, "text-brand-primary hover:bg-brand-surface")}>
          <ChevronRight className="size-4" />
        </button>
      </div>
    </div>
  )
}
