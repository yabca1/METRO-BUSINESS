'use client'

import * as React from "react"
import { useDataTable } from "@/components/ui/DataTable"
import { useCards } from "../hooks"
import type { Card } from "../types"
import { activeFilterCount, EMPTY_CARD_FILTERS, type CardFilters } from "./CardFilterPopover"
import { CardToolbar } from "./CardToolbar"
import { CardDetailPanel } from "./CardDetailPanel"
import { CardList } from "./CardList"

export function CardTable() {
  const table = useDataTable()
  const { state } = table
  const [filters, setFilters] = React.useState<CardFilters>(EMPTY_CARD_FILTERS)
  const [panelCard, setPanelCard] = React.useState<Card | null>(null)
  const [panelClosing, setPanelClosing] = React.useState(false)

  const query = useCards({
    page: state.page,
    search: state.search || undefined,
    sortBy: state.sort?.id,
    sortDir: state.sort?.direction,
  })

  const cards = query.data?.items ?? []
  const filteredCards = cards.filter((card) => {
    const statusMatch = filters.statuses.length === 0 || filters.statuses.includes(card.status)
    const typeMatch = filters.types.length === 0 || filters.types.includes(card.type)
    return statusMatch && typeMatch
  })
  const total = activeFilterCount(filters) ? filteredCards.length : (query.data?.total ?? 0)

  const openPanel = (card: Card) => {
    setPanelCard(card)
    setPanelClosing(false)
  }

  return (
    <div className="mx-auto min-h-[calc(100vh-7rem)] w-full rounded-t-3xl bg-brand-white px-4 py-7 sm:px-8">
      <CardToolbar controller={table} filters={filters} onFiltersChange={setFilters} />

      <div className={`card-split-grid items-start ${panelCard ? "is-open" : ""}`}>
        <div className="min-w-0">
          <CardList
            cards={filteredCards}
            total={total}
            selectedId={panelCard?.id ?? null}
            isLoading={query.isPending}
            error={query.error as Error | null}
            onSelect={openPanel}
            onRetry={() => query.refetch()}
          />
        </div>

        {panelCard && (
          <CardDetailPanel
            key={panelCard.id}
            card={panelCard}
            closing={panelClosing}
            onClose={() => setPanelClosing(true)}
            onExitComplete={() => {
              setPanelCard(null)
              setPanelClosing(false)
            }}
          />
        )}
      </div>
    </div>
  )
}
