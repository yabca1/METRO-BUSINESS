'use client'

// Merchant — Product grid component for in-store shop
import * as React from 'react'
import { cn } from '@/lib/utils'
import { formatAmount } from '@/lib/currency'
import type { InStoreProduct } from '../types'

interface ProductGridProps {
  products: InStoreProduct[]
  onAdd: (productId: string) => void
}

export function ProductGrid({ products, onAdd }: ProductGridProps) {
  return (
    <section>
      <h2 className="text-fig-28 font-urbanist-bold text-brand-indicator-dark">Shop</h2>
      <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} onAdd={() => onAdd(product.id)} />
        ))}
      </div>
    </section>
  )
}

function ProductCard({
  product,
  onAdd,
}: {
  product: InStoreProduct
  onAdd: () => void
}) {
  return (
    <button
      type="button"
      onClick={onAdd}
      className="overflow-hidden rounded-[20px] border border-brand-border bg-brand-surface/40 text-left transition hover:bg-brand-surface cursor-pointer"
    >
      <div
        className={cn(
          'flex h-42 items-center justify-center',
          product.accent === 'terminal'
            ? 'bg-gradient-to-br from-brand-secondary to-brand-track'
            : 'bg-gradient-to-br from-brand-white to-brand-secondary',
        )}
      >
        <ProductVisual kind={product.accent} />
      </div>
      <div className="px-7 pb-6 pt-4">
        <h3 className="font-protest-strike text-fig-14 text-brand-ink">{product.name}</h3>
        <p className="mt-2 min-h-10 text-fig-12 leading-relaxed text-brand-muted">
          {product.description}
        </p>
        <p className="mt-4 text-fig-14 font-urbanist-bold text-brand-primary">
          {formatAmount(product.price, product.currency)}{' '}
          <span className="font-urbanist-regular text-brand-muted">+ VAT</span>
        </p>
      </div>
    </button>
  )
}

function ProductVisual({ kind }: { kind: InStoreProduct['accent'] }) {
  if (kind === 'terminal') {
    return (
      <div className="relative h-28 w-36 rounded-2xl border border-brand-border bg-brand-white shadow-sm">
        <div className="absolute inset-x-3 top-3 h-14 rounded-lg bg-brand-primary/90" />
        <div className="absolute inset-x-6 bottom-4 h-6 rounded-md bg-brand-secondary" />
      </div>
    )
  }

  return (
    <div className="relative h-20 w-28 rounded-xl border border-brand-border bg-brand-white shadow-sm">
      <div className="absolute inset-x-3 top-3 h-8 rounded-md bg-brand-primary/80" />
      <div className="absolute bottom-3 left-1/2 h-2 w-10 -translate-x-1/2 rounded-full bg-brand-secondary" />
    </div>
  )
}
//git commit -m "Add ProductGrid component for merchant page"
