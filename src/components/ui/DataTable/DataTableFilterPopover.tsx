'use client'

import * as React from "react"
import { FilterIcon } from "@/components/icons/vuesax-card"
import { cn } from "@/lib/utils"
import type { TableTab } from "./types"

interface DataTableFilterPopoverProps {
  options: TableTab[]
  value: string
  label?: string
  onChange: (value: string) => void
}

export function DataTableFilterPopover({ options, value, label = "records", onChange }: DataTableFilterPopoverProps) {
  const [open, setOpen] = React.useState(false)
  const [draft, setDraft] = React.useState(value)
  const rootRef = React.useRef<HTMLDivElement>(null)
  const active = value !== "all"

  React.useEffect(() => {
    if (!open) return
    const outside = (event: MouseEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false)
    }
    const escape = (event: KeyboardEvent) => event.key === "Escape" && setOpen(false)
    document.addEventListener("mousedown", outside)
    document.addEventListener("keydown", escape)
    return () => {
      document.removeEventListener("mousedown", outside)
      document.removeEventListener("keydown", escape)
    }
  }, [open])

  const toggleOpen = () => {
    if (!open) setDraft(value)
    setOpen((current) => !current)
  }

  return (
    <div ref={rootRef} className="relative">
      <button type="button" aria-expanded={open} onClick={toggleOpen}
        className={cn(
          "flex h-8 items-center gap-2 rounded-full px-4 text-fig-12 font-urbanist-medium transition cursor-pointer",
          open || active ? "bg-brand-primary text-brand-white" : "bg-brand-secondary/60 text-brand-primary hover:bg-brand-secondary",
        )}>
        <FilterIcon className="size-3.5" /> Filters
        {active && <span className="size-1.5 rounded-full bg-brand-completed" />}
      </button>

      {open && (
        <div className="card-filter-popover absolute left-0 top-11 z-30 w-72 overflow-hidden rounded-2xl border border-brand-border bg-brand-white shadow-xl">
          <div className="border-b border-brand-border px-4 py-3">
            <p className="text-fig-14 font-urbanist-semibold text-brand-primary">Filter {label}</p>
            <p className="mt-0.5 text-fig-10 text-brand-muted">Choose which {label} you want to see.</p>
          </div>
          <div className="grid grid-cols-2 gap-2 p-4">
            {options.map((option) => {
              const selected = draft === option.value
              return (
                <button key={option.value} type="button" aria-pressed={selected} onClick={() => setDraft(option.value)}
                  className={cn(
                    "flex min-h-14 items-center justify-between rounded-xl border px-3 text-left text-fig-12 font-urbanist-medium transition cursor-pointer",
                    selected ? "border-brand-primary bg-brand-primary text-brand-white shadow-sm" : "border-brand-border bg-brand-surface/50 text-brand-primary hover:border-brand-indicator",
                  )}>
                  <span>{option.label}</span>
                  <span className={cn("flex size-4 items-center justify-center rounded-full border", selected ? "border-brand-white bg-brand-white text-brand-primary" : "border-brand-indicator")}>
                    {selected && <span className="size-1.5 rounded-full bg-brand-primary" />}
                  </span>
                </button>
              )
            })}
          </div>
          <div className="flex gap-2 border-t border-brand-border p-3">
            <button type="button" onClick={() => setDraft("all")}
              className="h-8 flex-1 rounded-xl bg-brand-surface text-fig-12 font-urbanist-semibold text-brand-primary transition hover:bg-brand-secondary cursor-pointer">
              Reset
            </button>
            <button type="button" onClick={() => { onChange(draft); setOpen(false) }}
              className="h-8 flex-1 rounded-xl bg-brand-primary text-fig-12 font-urbanist-semibold text-brand-white transition hover:opacity-85 cursor-pointer">
              Apply
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
