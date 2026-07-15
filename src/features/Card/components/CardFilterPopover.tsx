'use client'

import * as React from "react"
import { FilterIcon } from "@/components/icons/vuesax-card"
import { cn } from "@/lib/utils"
import type { CardStatus, CardType } from "../types"

export interface CardFilters {
  statuses: CardStatus[]
  types: CardType[]
}

export const EMPTY_CARD_FILTERS: CardFilters = { statuses: [], types: [] }

const STATUS_OPTIONS: { value: CardStatus; label: string; dot: string }[] = [
  { value: "active", label: "Active", dot: "bg-brand-completed" },
  { value: "locked", label: "Locked", dot: "bg-brand-danger" },
  { value: "waiting", label: "Waiting", dot: "bg-brand-indicator" },
]

const TYPE_OPTIONS: { value: CardType; label: string }[] = [
  { value: "virtual", label: "Virtual" },
  { value: "metal", label: "Metal" },
  { value: "standard", label: "Standard" },
]

export function activeFilterCount(filters: CardFilters) {
  return filters.statuses.length + filters.types.length
}

interface CardFilterPopoverProps {
  value: CardFilters
  onChange: (filters: CardFilters) => void
}

export function CardFilterPopover({ value, onChange }: CardFilterPopoverProps) {
  const [open, setOpen] = React.useState(false)
  const [draft, setDraft] = React.useState(value)
  const rootRef = React.useRef<HTMLDivElement>(null)
  const count = activeFilterCount(value)

  React.useEffect(() => {
    if (!open) return
    const close = (event: MouseEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false)
    }
    const escape = (event: KeyboardEvent) => event.key === "Escape" && setOpen(false)
    document.addEventListener("mousedown", close)
    document.addEventListener("keydown", escape)
    return () => {
      document.removeEventListener("mousedown", close)
      document.removeEventListener("keydown", escape)
    }
  }, [open, value])

  const toggleStatus = (status: CardStatus) => {
    setDraft((current) => ({
      ...current,
      statuses: current.statuses.includes(status)
        ? current.statuses.filter((item) => item !== status)
        : [...current.statuses, status],
    }))
  }

  const toggleType = (type: CardType) => {
    setDraft((current) => ({
      ...current,
      types: current.types.includes(type)
        ? current.types.filter((item) => item !== type)
        : [...current.types, type],
    }))
  }

  const toggleOpen = () => {
    if (!open) setDraft(value)
    setOpen((current) => !current)
  }

  return (
    <div ref={rootRef} className="relative">
      <button type="button" aria-expanded={open} onClick={toggleOpen}
        className={cn(
          "flex h-7.5 items-center gap-2 rounded-2xl px-3 text-fig-12 font-urbanist-medium transition cursor-pointer",
          open || count ? "bg-brand-primary text-brand-white" : "bg-brand-secondary text-brand-primary hover:bg-brand-secondary/70",
        )}>
        <FilterIcon className="size-3.5" />
        Filters
        {count > 0 && <span className="flex size-4 items-center justify-center rounded-full bg-brand-white text-fig-10 font-urbanist-bold text-brand-primary">{count}</span>}
      </button>

      {open && (
        <div className="card-filter-popover absolute left-0 top-10 z-30 w-72 overflow-hidden rounded-2xl border border-brand-border bg-brand-white shadow-xl">
          <div className="border-b border-brand-border px-4 py-3">
            <p className="text-fig-14 font-urbanist-semibold text-brand-primary">Filter cards</p>
            <p className="mt-0.5 text-fig-10 text-brand-muted">Narrow the list by status and card type.</p>
          </div>

          <div className="space-y-5 p-4">
            <FilterGroup title="Status">
              {STATUS_OPTIONS.map((option) => (
                <OptionButton key={option.value} selected={draft.statuses.includes(option.value)}
                  onClick={() => toggleStatus(option.value)}>
                  <span className={cn("size-2 rounded-full", option.dot)} />{option.label}
                </OptionButton>
              ))}
            </FilterGroup>

            <FilterGroup title="Card type">
              {TYPE_OPTIONS.map((option) => (
                <OptionButton key={option.value} selected={draft.types.includes(option.value)}
                  onClick={() => toggleType(option.value)}>
                  <span className={cn("card-surface size-5", `card-surface-${option.value}`)} />{option.label}
                </OptionButton>
              ))}
            </FilterGroup>
          </div>

          <div className="flex gap-2 border-t border-brand-border p-3">
            <button type="button" onClick={() => setDraft(EMPTY_CARD_FILTERS)}
              className="h-8 flex-1 rounded-xl bg-brand-surface text-fig-12 font-urbanist-semibold text-brand-primary transition hover:bg-brand-secondary cursor-pointer">
              Reset
            </button>
            <button type="button" onClick={() => { onChange(draft); setOpen(false) }}
              className="h-8 flex-1 rounded-xl bg-brand-primary text-fig-12 font-urbanist-semibold text-brand-white transition hover:opacity-85 cursor-pointer">
              Apply filters
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

function FilterGroup({ title, children }: { title: string; children: React.ReactNode }) {
  return <div><p className="mb-2 text-fig-10 font-urbanist-semibold uppercase tracking-widest text-brand-muted">{title}</p><div className="grid grid-cols-3 gap-2">{children}</div></div>
}

function OptionButton({ selected, onClick, children }: { selected: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button type="button" aria-pressed={selected} onClick={onClick}
      className={cn("flex min-h-14 flex-col items-center justify-center gap-1.5 rounded-xl border text-fig-10 font-urbanist-medium transition cursor-pointer",
        selected ? "border-brand-primary bg-brand-primary text-brand-white shadow-sm" : "border-brand-border bg-brand-surface/50 text-brand-primary hover:border-brand-indicator")}>
      {children}
    </button>
  )
}
