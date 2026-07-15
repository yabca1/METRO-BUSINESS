import { ArrowUpRight, CornerDownLeft } from "lucide-react"
import { cn } from "@/lib/utils"
import type { SearchResult } from "./types"

interface Props {
  results: SearchResult[]
  activeIndex: number
  onActiveIndex: (index: number) => void
  onSelect: (result: SearchResult) => void
}

export function SearchResultList({ results, activeIndex, onActiveIndex, onSelect }: Props) {
  if (!results.length) {
    return (
      <div className="flex min-h-72 flex-col items-center justify-center px-8 text-center">
        <span className="font-orbitron text-4xl text-brand-secondary">M</span>
        <h3 className="mt-5 text-fig-20 font-urbanist-semibold text-brand-primary">No signal found</h3>
        <p className="mt-2 max-w-xs text-fig-12 text-brand-muted">Try a person, transfer reference, card, spend program, or page name.</p>
      </div>
    )
  }

  return (
    <div role="listbox" className="max-h-96 space-y-1 overflow-y-auto p-2">
      {results.map((result, index) => {
        const active = activeIndex === index
        return (
          <button key={result.id} type="button" role="option" aria-selected={active}
            onMouseEnter={() => onActiveIndex(index)} onClick={() => onSelect(result)}
            className={cn("group flex w-full items-center gap-3 rounded-2xl px-3 py-2.5 text-left transition cursor-pointer", active ? "bg-brand-primary text-brand-white" : "text-brand-primary hover:bg-brand-surface")}>
            <span className={cn("flex size-9 shrink-0 items-center justify-center rounded-xl transition", active ? "bg-brand-white/12" : "bg-brand-surface")}>{result.icon}</span>
            <span className="min-w-0 flex-1"><span className="block truncate text-fig-14 font-urbanist-semibold">{result.title}</span><span className={cn("block truncate text-fig-10", active ? "text-brand-white/60" : "text-brand-muted")}>{result.subtitle}</span></span>
            <span className={cn("hidden text-fig-10 font-urbanist-medium sm:block", active ? "text-brand-white/70" : "text-brand-muted")}>{result.meta}</span>
            {active ? <CornerDownLeft className="size-3.5" /> : <ArrowUpRight className="size-3.5 opacity-0 transition group-hover:opacity-100" />}
          </button>
        )
      })}
    </div>
  )
}
