// src/components/ui/DataTable/types.ts
import type * as React from "react"

export type SortDirection = "asc" | "desc"

export interface SortState {
  /** Column id currently sorted by. */
  id: string
  direction: SortDirection
}

export interface ColumnDef<TRow> {
  /** Stable identifier — used for sort state and React keys. */
  id: string
  /** Header label; a node so features can localize or decorate it. */
  header: React.ReactNode
  /** Cell renderer for a row. */
  cell: (row: TRow) => React.ReactNode
  /** Enables the sort toggle on this column's header. */
  sortable?: boolean
  /** Right-align (amounts) or center content. Defaults to left. */
  align?: "left" | "right" | "center"
  /** CSS grid track for this column, e.g. "1.65fr" or "10rem". Defaults to "1fr". */
  width?: string
  /** Hide below this breakpoint to keep narrow screens readable. */
  hideBelow?: "sm" | "md" | "lg"
}

export interface TableTab {
  /** Value reported to the query, e.g. a status filter. */
  value: string
  label: string
  /** Optional count badge rendered next to the label. */
  count?: number
}

export interface PaginationState {
  page: number
  pageSize: number
  total: number
}

export interface DataTableState {
  search: string
  tab: string
  sort: SortState | null
  page: number
}
