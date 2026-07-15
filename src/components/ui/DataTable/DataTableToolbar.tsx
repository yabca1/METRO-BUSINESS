'use client'

import * as React from "react"
import { CloseIcon, SearchIcon } from "@/components/icons/vuesax"
import { cn } from "@/lib/utils"
import type { TableTab } from "./types"
import type { DataTableController } from "./useDataTable"
import { DataTableFilterPopover } from "./DataTableFilterPopover"

interface DataTableToolbarProps {
  controller: DataTableController
  tabs?: TableTab[]
  filterOptions?: TableTab[]
  filterLabel?: string
  searchPlaceholder?: string
  children?: React.ReactNode
  actions?: React.ReactNode
}

export function DataTableToolbar({
  controller, tabs, filterOptions, filterLabel, searchPlaceholder = "Search", children, actions,
}: DataTableToolbarProps) {
  const { searchInput, setSearchInput, state, setTab } = controller
  const [searchOpen, setSearchOpen] = React.useState(false)
  const inputRef = React.useRef<HTMLInputElement>(null)
  const filters = filterOptions ?? tabs ?? []

  const openSearch = () => {
    setSearchOpen(true)
    requestAnimationFrame(() => inputRef.current?.focus())
  }

  const closeSearch = () => {
    setSearchOpen(false)
    setSearchInput("")
  }

  return (
    <div className="flex flex-wrap items-center justify-between gap-3">
      <div className="flex min-w-0 items-center gap-2">
        <div className={cn(
          "flex h-8 items-center overflow-hidden rounded-full bg-brand-surface transition-[width,box-shadow] duration-300 ease-out",
          searchOpen ? "w-64 shadow-sm" : "w-8",
        )}>
          <button type="button" onClick={openSearch} aria-label={`Search ${filterLabel ?? "records"}`}
            className="flex size-8 shrink-0 items-center justify-center text-brand-primary transition hover:opacity-70 cursor-pointer">
            <SearchIcon className="size-3.5" />
          </button>
          <input ref={inputRef} value={searchInput} onChange={(event) => setSearchInput(event.target.value)}
            onKeyDown={(event) => event.key === "Escape" && closeSearch()} placeholder={searchPlaceholder}
            tabIndex={searchOpen ? 0 : -1}
            className={cn(
              "min-w-0 flex-1 bg-transparent text-fig-12 text-brand-dark outline-none transition-opacity duration-200 placeholder:text-brand-muted",
              searchOpen ? "opacity-100 delay-100" : "pointer-events-none opacity-0",
            )}
          />
          <button type="button" onClick={closeSearch} aria-label="Close search" tabIndex={searchOpen ? 0 : -1}
            className={cn("mr-1 flex size-6 shrink-0 items-center justify-center rounded-full text-brand-muted transition-all hover:bg-brand-white cursor-pointer",
              searchOpen ? "scale-100 opacity-100 delay-100" : "pointer-events-none scale-75 opacity-0")}>
            <CloseIcon className="size-1.5" />
          </button>
        </div>

        {filters.length > 0 && (
          <DataTableFilterPopover options={filters} value={state.tab} label={filterLabel} onChange={setTab} />
        )}
        {children}
      </div>

      <div className="flex items-center gap-2">
        {tabs?.map((tab) => {
          const active = state.tab === tab.value
          return (
            <button key={tab.value} type="button" onClick={() => setTab(tab.value)}
              className={cn("rounded-full px-4 py-2 text-fig-12 font-urbanist-medium transition cursor-pointer",
                active ? "bg-brand-primary text-brand-white" : "text-brand-primary hover:bg-brand-surface")}>
              {tab.label}
              {tab.count !== undefined && <span className="ml-1.5 opacity-60">{tab.count}</span>}
            </button>
          )
        })}
        {actions}
      </div>
    </div>
  )
}
