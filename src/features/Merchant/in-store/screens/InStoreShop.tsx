'use client'

import * as React from 'react'
import { IN_STORE_PRODUCTS } from '../data'
import type { CartItem } from '../types'
import { ProductGrid } from '../components/ProductGrid'
import { InStoreCart } from '../components/InStoreCart'

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
        <ProductGrid products={IN_STORE_PRODUCTS} onAdd={addToCart} />
        <InStoreCart cartLines={cartLines} total={total} onChangeQuantity={updateQuantity} />
      </div>
    </div>
  )
}

// TODO: Review merchant page logic
