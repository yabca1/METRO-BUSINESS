'use client'

// Merchant — In-Store cart component
import * as React from 'react'
import { Minus, Plus, ShoppingCart } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { formatAmount } from '@/lib/currency'
import type { CartItem, InStoreProduct } from '../types'

interface InStoreCartProps {
  cartLines: Array<CartItem & { product: InStoreProduct }>
  total: number
  onChangeQuantity: (productId: string, delta: number) => void
}

export function InStoreCart({ cartLines, total, onChangeQuantity }: InStoreCartProps) {
  return (
    <section>
      <div className="flex items-center justify-between gap-3">
        <h2 className="text-fig-28 font-urbanist-bold text-brand-indicator-dark">Cart</h2>
        <button
          type="button"
          className="text-fig-12 font-urbanist-semibold tracking-tight text-brand-blue cursor-pointer"
        >
          Order history
        </button>
      </div>

      {cartLines.length === 0 ? (
        <EmptyCart />
      ) : (
        <div className="mt-6 space-y-4">
          <div className="space-y-3 rounded-[20px] border border-brand-border bg-brand-surface/40 p-4">
            {cartLines.map((line) => (
              <div
                key={line.productId}
                className="flex items-center justify-between gap-3 rounded-2xl bg-brand-white px-3 py-3"
              >
                <div className="min-w-0">
                  <p className="truncate font-protest-strike text-fig-14 text-brand-ink">
                    {line.product.name}
                  </p>
                  <p className="mt-0.5 text-fig-12 font-urbanist-semibold text-brand-primary">
                    {formatAmount(line.product.price, line.product.currency)}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <QtyButton
                    label={`Decrease ${line.product.name}`}
                    onClick={() => onChangeQuantity(line.productId, -1)}
                  >
                    <Minus className="size-3.5" />
                  </QtyButton>
                  <span className="w-5 text-center text-fig-12 font-urbanist-semibold">
                    {line.quantity}
                  </span>
                  <QtyButton
                    label={`Increase ${line.product.name}`}
                    onClick={() => onChangeQuantity(line.productId, 1)}
                  >
                    <Plus className="size-3.5" />
                  </QtyButton>
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-between px-1">
            <span className="text-fig-12 text-brand-muted">Total + VAT</span>
            <span className="text-fig-14 font-urbanist-bold text-brand-primary">
              {formatAmount(total, 'ETB')}
            </span>
          </div>

          <Button className="h-11 w-full rounded-2xl font-urbanist-bold uppercase tracking-wide">
            Checkout
          </Button>
        </div>
      )}
    </section>
  )
}

function EmptyCart() {
  return (
    <div className="mt-6 flex min-h-42 flex-col items-center justify-center rounded-[20px] border border-brand-border bg-brand-surface/40 px-6 py-8 text-center">
      <ShoppingCart className="size-12 text-brand-primary" strokeWidth={1.5} />
      <p className="mt-5 text-fig-14 font-urbanist-semibold text-brand-ink">Your cart is empty</p>
      <p className="mt-1 text-fig-12 text-brand-muted">
        products added to the cart will appear here.
      </p>
    </div>
  )
}

function QtyButton({
  label,
  onClick,
  children,
}: {
  label: string
  onClick: () => void
  children: React.ReactNode
}) {
  return (
    <button
      type="button"
      aria-label={label}
      onClick={onClick}
      className="flex size-7 items-center justify-center rounded-full bg-brand-surface text-brand-primary transition hover:bg-brand-secondary cursor-pointer"
    >
      {children}
    </button>
  )
}
