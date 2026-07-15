// src/features/dashboard/components/RequestsPanel.tsx
'use client'

import * as React from "react"
import { ArrowRight, ArrowDown } from "lucide-react"
import { cn } from "@/lib/utils"
import { Avatar } from "@/components/ui/Avatar"
import { formatAmount, maskAmount } from "@/lib/currency"
import { requests } from "../data"
import type { FundingRequest } from "../types"
import { SectionCard } from "./SectionCard"

interface RequestsPanelProps {
  amountsHidden: boolean
}

function RequestCard({ request, amountsHidden }: { request: FundingRequest; amountsHidden: boolean }) {
  return (
    <div className="w-full shrink-0 rounded-2xl bg-brand-white p-3">
      <div className="flex items-center gap-3">
        <span className="relative shrink-0">
          <Avatar initials={request.initials} className="size-11" />
          <span className="absolute bottom-0 right-0 flex size-3 items-center justify-center rounded-full bg-brand-white ring-2 ring-brand-white">
            <ArrowDown className="size-2 text-brand-primary" strokeWidth={3} />
          </span>
        </span>
        <span className="min-w-0 flex-1">
          <span className="block truncate text-sm font-semibold text-brand-primary">{request.requester}</span>
          <span className="flex items-center gap-1.5 text-[10px]">
            <span className="font-medium text-brand-success">Requested</span>
            <span aria-hidden className="size-1 rounded-full bg-brand-muted/40" />
            <span className="text-brand-muted/80">{request.date}</span>
          </span>
        </span>
        <span className="shrink-0 text-sm font-semibold text-brand-primary">
          {amountsHidden ? maskAmount(request.currency) : formatAmount(request.amount, request.currency)}
        </span>
      </div>

      <div className="mt-4 flex items-center gap-2">
        <button
          type="button"
          className="flex-1 rounded-2xl bg-brand-primary py-3 text-xs font-semibold text-brand-white transition hover:bg-brand-dark cursor-pointer"
        >
          Pay
        </button>
        <button
          type="button"
          className="flex-1 rounded-2xl bg-zinc-400/10 py-3 text-xs font-semibold text-brand-primary transition hover:bg-zinc-400/20 cursor-pointer"
        >
          Decline
        </button>
      </div>
    </div>
  )
}

export function RequestsPanel({ amountsHidden }: RequestsPanelProps) {
  const [activeIndex, setActiveIndex] = React.useState(0)

  return (
    <SectionCard
      title="Requests"
      action={
        <button type="button" className="inline-flex items-center gap-1 text-xs font-bold text-brand-link cursor-pointer">
          View all
          <ArrowRight className="size-3" />
        </button>
      }
    >
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-300 ease-out"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {requests.map((request) => (
            <RequestCard key={request.id} request={request} amountsHidden={amountsHidden} />
          ))}
        </div>
      </div>

      {requests.length > 1 && (
        <div className="mt-3 flex items-center justify-center gap-[5px]" role="tablist" aria-label="Requests">
          {requests.map((request, index) => (
            <button
              key={request.id}
              type="button"
              role="tab"
              aria-selected={index === activeIndex}
              aria-label={`Show request ${index + 1} of ${requests.length}`}
              onClick={() => setActiveIndex(index)}
              className={cn(
                "h-1 rounded-[2px] transition-all cursor-pointer",
                index === activeIndex ? "w-5 bg-brand-primary" : "w-2.5 bg-brand-primary/10",
              )}
            />
          ))}
        </div>
      )}
    </SectionCard>
  )
}
