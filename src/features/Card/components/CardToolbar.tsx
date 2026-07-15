'use client'

import * as React from "react"
import { AddIcon, CloseIcon, SearchIcon, Setting2Icon } from "@/components/icons/vuesax"
import { cn } from "@/lib/utils"
import type { DataTableController } from "@/components/ui/DataTable"
import { CardFilterPopover, type CardFilters } from "./CardFilterPopover"

interface CardToolbarProps {
  controller: DataTableController
  filters: CardFilters
  onFiltersChange: (filters: CardFilters) => void
  onOrderCard?: () => void
}

export function CardToolbar({ controller, filters, onFiltersChange, onOrderCard }: CardToolbarProps) {
  const { searchInput, setSearchInput } = controller
  const [searchOpen, setSearchOpen] = React.useState(false)
  const inputRef = React.useRef<HTMLInputElement>(null)

  const openSearch = () => {
    setSearchOpen(true)
    requestAnimationFrame(() => inputRef.current?.focus())
  }

  const closeSearch = () => {
    setSearchOpen(false)
    setSearchInput("")
  }

  return (
    <div className="mb-5 flex min-h-7.5 items-center justify-between gap-3">
      <div className="flex items-center gap-2">
        <div className={cn(
          "flex h-7.5 items-center overflow-hidden rounded-2xl bg-brand-secondary transition-[width,box-shadow] duration-300 ease-out",
          searchOpen ? "w-64 shadow-sm" : "w-7.5",
        )}>
          <button type="button" onClick={openSearch} aria-label="Search cards"
            className="flex size-7.5 shrink-0 items-center justify-center text-brand-primary transition hover:opacity-70 cursor-pointer">
            <SearchIcon className="size-3.5" />
          </button>
          <input
            ref={inputRef}
            value={searchInput}
            onChange={(event) => setSearchInput(event.target.value)}
            onKeyDown={(event) => event.key === "Escape" && closeSearch()}
            placeholder="Search cards or cardholders"
            tabIndex={searchOpen ? 0 : -1}
            className={cn(
              "min-w-0 flex-1 bg-transparent text-fig-12 text-brand-dark outline-none transition-opacity duration-200 placeholder:text-brand-muted",
              searchOpen ? "opacity-100 delay-100" : "pointer-events-none opacity-0",
            )}
          />
          <button type="button" onClick={closeSearch} aria-label="Close search" tabIndex={searchOpen ? 0 : -1}
            className={cn(
              "mr-1 flex size-6 shrink-0 items-center justify-center rounded-full text-brand-muted transition-all hover:bg-brand-white/70 cursor-pointer",
              searchOpen ? "scale-100 opacity-100 delay-100" : "pointer-events-none scale-75 opacity-0",
            )}>
            <CloseIcon className="size-1.5" />
          </button>
        </div>

        <CardFilterPopover value={filters} onChange={onFiltersChange} />
      </div>

      <div className="flex items-center gap-2">
        <button type="button"
          className="flex h-7.5 items-center gap-2 rounded-2xl bg-brand-secondary px-4 text-fig-12 font-urbanist-semibold text-brand-primary transition hover:bg-brand-secondary/70 cursor-pointer">
          <Setting2Icon className="size-3.5" /> Setting
        </button>
        <button type="button" onClick={onOrderCard}
          className="flex h-7.5 items-center gap-2 rounded-2xl bg-brand-primary px-4 text-fig-12 font-urbanist-semibold text-brand-white transition hover:opacity-85 cursor-pointer">
          <AddIcon className="size-3.5" /> Order card
        </button>
      </div>
    </div>
  )
}
