// src/features/dashboard/components/CardsWidget.tsx
import { ChevronRight, Plus } from "lucide-react"
import { cn } from "@/lib/utils"
import { cardTiles } from "../data"
import type { CardTile } from "../types"
import { SectionCard } from "./SectionCard"

const TILE_ART: Record<CardTile["variant"], string> = {
  disposable: "bg-gradient-to-br from-[#8199AC] to-[#5B7E97]",
  virtual: "bg-gradient-to-br from-[#C2A8AD]/[0.81] to-[#F27C96]/[0.51]",
  add: "bg-[#A1A1AA]/10",
}

function Tile({ card }: { card: CardTile }) {
  return (
    <button type="button" className="flex w-[79px] shrink-0 flex-col items-center gap-2.5 text-center cursor-pointer">
      <span className={cn("relative flex h-[49px] w-full items-center justify-center overflow-hidden rounded-[4px]", TILE_ART[card.variant])}>
        {card.variant !== "add" && (
          <>
            <span aria-hidden className="absolute -bottom-3 -right-3 size-8 rounded-full bg-white/20 blur-md" />
            <span className="absolute right-1.5 top-1 font-orbitron-bold text-[9px] font-bold leading-none text-brand-white">M</span>
          </>
        )}
        {card.variant === "add" && <Plus className="size-[30px] text-brand-primary/70" strokeWidth={2.5} />}
      </span>
      <span className="flex flex-col items-center">
        <span className="font-urbanist-semibold text-fig-14 font-semibold leading-[1.4] text-brand-primary">{card.label}</span>
        {card.meta && <span className="font-urbanist-regular text-fig-12 text-brand-muted">{card.meta}</span>}
      </span>
    </button>
  )
}

export function CardsWidget() {
  return (
    <SectionCard
      title={
        <button type="button" className="inline-flex items-center gap-1 cursor-pointer">
          <span className="font-poppins-regular text-fig-10 text-brand-muted">Cards</span>
          <span aria-hidden className="size-[3px] rounded-full bg-brand-indicator" />
          <span className="font-poppins-regular text-fig-10 text-brand-muted">{cardTiles.length}</span>
          <ChevronRight className="size-2.5 text-brand-muted" />
        </button>
      }
    >
      <div className="flex items-start justify-between">
        {cardTiles.map((card) => (
          <Tile key={card.id} card={card} />
        ))}
      </div>
    </SectionCard>
  )
}
