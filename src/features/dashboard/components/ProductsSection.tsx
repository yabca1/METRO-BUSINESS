// src/features/dashboard/components/ProductsSection.tsx
import { ChevronRight } from "lucide-react"
import { productOffers } from "../data"
import { SectionCard } from "./SectionCard"

export function ProductsSection() {
  return (
    <SectionCard
      title="Products for you"
      action={
        <button type="button" aria-label="View all products" className="text-brand-muted cursor-pointer">
          <ChevronRight className="size-4" />
        </button>
      }
      bodyClassName="space-y-1"
    >
      {productOffers.map((product) => (
        <button
          key={product.id}
          type="button"
          className="flex w-full items-center gap-3 rounded-xl py-2 text-left transition hover:bg-brand-white cursor-pointer"
        >
          <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-brand-secondary/50 text-brand-primary">
            <product.icon className="size-[18px]" />
          </span>
          <span className="min-w-0 flex-1">
            <span className="block text-sm font-semibold text-brand-primary">{product.label}</span>
            <span className="block truncate text-xs text-brand-muted">{product.description}</span>
          </span>
          <ChevronRight className="size-4 shrink-0 text-brand-muted" />
        </button>
      ))}
    </SectionCard>
  )
}
