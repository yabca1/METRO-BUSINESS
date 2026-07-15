import type { ReactNode } from "react"
import { formatAmount } from "@/lib/currency"
import type { Card, CardStatus } from "../types"
import { CardTypeChip } from "./CardTypeChip"

const STATUS: Record<CardStatus, { label: string; className: string }> = {
  active: { label: "Active", className: "text-brand-completed" },
  locked: { label: "Locked", className: "text-brand-danger" },
  waiting: { label: "Waiting to be claimed", className: "text-brand-muted" },
}

interface CardListProps {
  cards: Card[]
  total: number
  selectedId: string | null
  isLoading: boolean
  error: Error | null
  onSelect: (card: Card) => void
  onRetry: () => void
}

export function CardList({ cards, total, selectedId, isLoading, error, onSelect, onRetry }: CardListProps) {
  return (
    <div className="min-h-138.5 overflow-x-auto rounded-2xl border border-brand-border bg-brand-white">
      <div className="card-list-grid min-w-4xl items-center px-2 text-fig-12 font-urbanist-medium text-brand-muted">
        <CheckBox label="Select all cards" />
        <span>All <span className="font-poppins-regular">• {total}</span></span>
        <span>Cardholder</span><span>Card number</span><span>Expiry date</span>
        <span>Status</span><span>Spending program</span><span className="text-right">Limit spent</span>
      </div>

      {isLoading && <ListMessage>Loading cards...</ListMessage>}
      {error && <ListMessage><button type="button" onClick={onRetry} className="font-urbanist-semibold underline">Unable to load cards. Try again</button></ListMessage>}
      {!isLoading && !error && cards.length === 0 && <ListMessage>No cards found</ListMessage>}

      {!isLoading && !error && cards.map((card, index) => (
        <button
          key={card.id}
          type="button"
          onClick={() => onSelect(card)}
          className={`card-list-grid min-w-4xl w-full items-center px-2 text-left transition-colors ${index % 2 ? "bg-brand-surface" : "bg-brand-white"} ${selectedId === card.id ? "ring-1 ring-inset ring-brand-primary/15" : "hover:bg-brand-surface/70"}`}
        >
          <CheckBox label={`Select ${card.label} card`} />
          <span className="flex min-w-0 items-center gap-4"><CardTypeChip type={card.type} /><span className="truncate text-fig-14 font-urbanist-semibold">{card.label}</span></span>
          <Cell>{card.cardholder}</Cell>
          <Cell>{card.last4 ? `..${card.last4}` : "-"}</Cell>
          <Cell>{card.expiryDate || "-"}</Cell>
          <StatusCell card={card} />
          <Cell>{card.spendingProgram || "-"}</Cell>
          <LimitCell card={card} />
        </button>
      ))}
    </div>
  )
}

function CheckBox({ label }: { label: string }) {
  return <span role="checkbox" aria-label={label} aria-checked="false" className="block size-5 rounded-md border border-brand-keypad bg-brand-white" />
}

function Cell({ children }: { children: ReactNode }) {
  return <span className="truncate text-fig-12 font-urbanist-medium text-brand-primary">{children}</span>
}

function StatusCell({ card }: { card: Card }) {
  const status = STATUS[card.status]
  return <span className="truncate text-fig-12 font-urbanist-semibold"><span className={status.className}>{status.label}</span>{card.riskOfFraud && <><span className="text-brand-muted"> • </span><span className="text-brand-danger">Risk of fraud</span></>}</span>
}

function LimitCell({ card }: { card: Card }) {
  if (!card.limitTotal) return <span className="text-right text-fig-12 font-urbanist-medium text-brand-muted">No limit set</span>
  return <span className="text-right"><span className="block text-fig-12 font-urbanist-semibold">{formatAmount(card.limitSpent, card.currency)} / {formatAmount(card.limitTotal, card.currency)}</span><span className="block text-fig-10 text-brand-muted">{card.limitPeriod}</span></span>
}

function ListMessage({ children }: { children: ReactNode }) {
  return <div className="flex h-31 min-w-4xl items-center justify-center text-fig-12 text-brand-muted">{children}</div>
}
