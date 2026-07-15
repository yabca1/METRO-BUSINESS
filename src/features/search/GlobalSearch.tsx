'use client'

import * as React from "react"
import { createPortal } from "react-dom"
import { Search, Sparkles, X } from "lucide-react"
import { useRouter } from "next/navigation"
import { GLOBAL_SEARCH_RESULTS } from "./data"
import { SearchResultList } from "./SearchResultList"
import type { SearchResult } from "./types"

interface Props { open: boolean; onOpenChange: (open: boolean) => void }

export function GlobalSearch({ open, onOpenChange }: Props) {
  const [query, setQuery] = React.useState("")
  const [activeIndex, setActiveIndex] = React.useState(0)
  const inputRef = React.useRef<HTMLInputElement>(null)
  const router = useRouter()
  const normalized = query.trim().toLowerCase()
  const results = GLOBAL_SEARCH_RESULTS.filter((item) => !normalized || `${item.title} ${item.subtitle} ${item.group}`.toLowerCase().includes(normalized))
  const select = (result: SearchResult) => { onOpenChange(false); setQuery(""); router.push(result.href) }
  const handleKey = React.useEffectEvent((event: KeyboardEvent) => {
    if (event.key === "Escape") onOpenChange(false)
    if (event.key === "ArrowDown") { event.preventDefault(); setActiveIndex((value) => (value + 1) % Math.max(results.length, 1)) }
    if (event.key === "ArrowUp") { event.preventDefault(); setActiveIndex((value) => (value - 1 + Math.max(results.length, 1)) % Math.max(results.length, 1)) }
    if (event.key === "Enter" && results[activeIndex]) select(results[activeIndex])
  })

  React.useEffect(() => {
    if (!open) return
    const previous = document.activeElement as HTMLElement | null
    document.body.style.overflow = "hidden"
    const frame = requestAnimationFrame(() => inputRef.current?.focus())
    document.addEventListener("keydown", handleKey)
    return () => { document.body.style.overflow = ""; cancelAnimationFrame(frame); document.removeEventListener("keydown", handleKey); previous?.focus() }
  }, [open])

  if (!open) return null
  return createPortal(
    <div className="fixed inset-0 z-50 flex justify-center px-4 pt-20 sm:pt-24">
      <button type="button" aria-label="Close global search" onClick={() => onOpenChange(false)} className="command-backdrop absolute inset-0 bg-brand-shadow/20 backdrop-blur-sm cursor-default" />
      <section role="dialog" aria-modal="true" aria-label="Global search" className="command-panel relative z-10 h-fit w-full max-w-2xl overflow-hidden rounded-3xl border border-brand-border bg-brand-white shadow-2xl">
        <div className="flex items-center gap-3 border-b border-brand-border px-5 py-4">
          <Search className="size-5 shrink-0 text-brand-primary" />
          <input ref={inputRef} value={query} onChange={(event) => { setQuery(event.target.value); setActiveIndex(0) }} placeholder="Search everything..." className="min-w-0 flex-1 bg-transparent text-fig-20 font-urbanist-medium text-brand-primary outline-none placeholder:text-brand-muted/60" />
          <button type="button" onClick={() => onOpenChange(false)} aria-label="Close search" className="flex size-8 items-center justify-center rounded-full bg-brand-surface text-brand-muted transition hover:text-brand-primary cursor-pointer"><X className="size-4" /></button>
        </div>
        <div className="flex items-center justify-between border-b border-brand-border px-5 py-2.5 text-fig-10 text-brand-muted">
          <span className="flex items-center gap-1.5"><Sparkles className="size-3 text-brand-primary" /> {query ? `${results.length} matches across Metro` : "Suggested from your workspace"}</span>
          <span className="hidden items-center gap-1 sm:flex"><kbd className="rounded-md bg-brand-surface px-1.5 py-1">{"\u2191\u2193"}</kbd> Navigate <kbd className="ml-2 rounded-md bg-brand-surface px-1.5 py-1">{"\u21B5"}</kbd> Open</span>
        </div>
        <SearchResultList results={results} activeIndex={activeIndex} onActiveIndex={setActiveIndex} onSelect={select} />
        <footer className="flex items-center justify-between bg-brand-primary px-5 py-3 text-fig-10 text-brand-white/65"><span>METRO GLOBAL INDEX</span><span className="font-orbitron tracking-widest text-brand-white">M</span></footer>
      </section>
    </div>, document.body,
  )
}
