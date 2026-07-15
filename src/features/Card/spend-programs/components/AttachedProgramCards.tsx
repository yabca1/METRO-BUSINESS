import { PanelCard } from "@/components/ui/PanelCard"
import type { AttachedProgramCard } from "../types"

function MiniCard() {
  return (
    <span className="card-surface card-surface-virtual relative h-8 w-13.25 shrink-0 overflow-hidden">
      <span className="absolute right-1 top-0.5 font-orbitron text-fig-7 font-semibold text-brand-white">M</span>
      <span className="absolute bottom-1 right-1 flex -space-x-1"><i className="size-2 rounded-full bg-brand-white/45" /><i className="size-2 rounded-full bg-brand-white/25" /></span>
    </span>
  )
}

function AttachedCardRow({ card }: { card: AttachedProgramCard }) {
  return (
    <div className="flex h-8 items-center gap-2.25">
      <MiniCard />
      <div className="min-w-0 flex-1">
        <p className="truncate text-fig-12 font-urbanist-semibold text-brand-primary">{card.cardholder}</p>
        <p className="text-fig-10"><span className="font-urbanist-semibold capitalize text-brand-completed">{card.status}</span><span className="mx-1.5 text-brand-muted">{"\u2022"}</span><span className="text-brand-muted">{card.created}</span></p>
      </div>
      <div className="shrink-0 text-right">
        <p className="text-fig-10 font-urbanist-semibold text-brand-primary">{card.spent} / {card.limit}</p>
        <p className="text-fig-10 font-urbanist-medium text-brand-muted">{card.period}</p>
      </div>
    </div>
  )
}

export function AttachedProgramCards({ cards }: { cards: AttachedProgramCard[] }) {
  return (
    <PanelCard className="pb-3.5 pt-2.5">
      <div className="mb-5 flex items-center justify-between text-fig-12">
        <p className="font-urbanist-semibold text-brand-primary">Attached cards <span className="mx-1.5">{"\u2022"}</span><span className="font-poppins-regular">{cards.length}</span></p>
        <button type="button" className="font-urbanist-semibold text-brand-blue cursor-pointer">See all</button>
      </div>
      <div className="space-y-4">{cards.map((card) => <AttachedCardRow key={card.id} card={card} />)}</div>
    </PanelCard>
  )
}
