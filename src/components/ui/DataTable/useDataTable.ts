// src/components/ui/DataTable/useDataTable.ts
'use client'

import * as React from "react"
import type { DataTableState, SortState } from "./types"

const SEARCH_DEBOUNCE_MS = 300

interface UseDataTableOptions {
  initialTab?: string
  initialSort?: SortState | null
}

/**
 * Owns the table's query state (search, tab, sort, page) with the right
 * interactions between them: changing search/tab/sort resets to page 1,
 * and search is debounced so every keystroke doesn't hit the server.
 *
 * `state` is the debounced object — pass it straight into a TanStack Query key.
 */
export function useDataTable({ initialTab = "all", initialSort = null }: UseDataTableOptions = {}) {
  const [searchInput, setSearchInput] = React.useState("")
  const [search, setSearchDebounced] = React.useState("")
  const [tab, setTabState] = React.useState(initialTab)
  const [sort, setSortState] = React.useState<SortState | null>(initialSort)
  const [page, setPage] = React.useState(1)

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setSearchDebounced(searchInput)
      setPage(1)
    }, SEARCH_DEBOUNCE_MS)
    return () => clearTimeout(timer)
  }, [searchInput])

  const setTab = React.useCallback((value: string) => {
    setTabState(value)
    setPage(1)
  }, [])

  /** Toggles asc → desc → off for the given column id. */
  const toggleSort = React.useCallback((id: string) => {
    setSortState((prev) => {
      if (prev?.id !== id) return { id, direction: "asc" }
      if (prev.direction === "asc") return { id, direction: "desc" }
      return null
    })
    setPage(1)
  }, [])

  const state: DataTableState = React.useMemo(
    () => ({ search, tab, sort, page }),
    [search, tab, sort, page],
  )

  return { state, searchInput, setSearchInput, setTab, toggleSort, setPage }
}

export type DataTableController = ReturnType<typeof useDataTable>
