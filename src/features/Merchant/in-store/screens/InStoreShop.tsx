'use client'

import * as React from 'react'
import { Minus, Plus, ShoppingCart } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { formatAmount } from '@/lib/currency'
import { cn } from '@/lib/utils'
import { IN_STORE_PRODUCTS } from '../data'
import type { CartItem, InStoreProduct } from '../types'

export function InStoreShop() {
  const [cart, setCart] = React.useState<CartItem[]>([])

  const addToCart = (productId: string) => {
    setCart((current) => {
      const existing = current.find((item) => item.productId === productId)
      if (existing) {
        return current.map((item) =>
          item.productId === productId ? { ...item, quantity: item.quantity + 1 } : item,
        )
      }
      return [...current, { productId, quantity: 1 }]
    })
  }

  const updateQuantity = (productId: string, delta: number) => {
    setCart((current) =>
      current
        .map((item) =>
          item.productId === productId
            ? { ...item, quantity: item.quantity + delta }
            : item,
        )
        .filter((item) => item.quantity > 0),
    )
  }

  const cartLines = cart
    .map((item) => {
      const product = IN_STORE_PRODUCTS.find((entry) => entry.id === item.productId)
      if (!product) return null
      return { ...item, product }
    })
    .filter(Boolean) as Array<CartItem & { product: InStoreProduct }>

  const total = cartLines.reduce((sum, line) => sum + line.product.price * line.quantity, 0)

  return (
    <div className="mx-auto w-full rounded-t-3xl bg-brand-white px-6 py-7">
      <div className="grid grid-cols-1 gap-8 xl:grid-cols-[1.55fr_0.9fr]">
        <section>
          <h2 className="text-fig-28 font-urbanist-bold text-brand-indicator-dark">Shop</h2>
          <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
            {IN_STORE_PRODUCTS.map((product) => (
              <ProductCard key={product.id} product={product} onAdd={() => addToCart(product.id)} />
            ))}
          </div>
        </section>

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
                        onClick={() => updateQuantity(line.productId, -1)}
                      >
                        <Minus className="size-3.5" />
                      </QtyButton>
                      <span className="w-5 text-center text-fig-12 font-urbanist-semibold">
                        {line.quantity}
                      </span>
                      <QtyButton
                        label={`Increase ${line.product.name}`}
                        onClick={() => updateQuantity(line.productId, 1)}
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
      </div>
    </div>
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
