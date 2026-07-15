export interface InStoreProduct {
  id: string
  name: string
  description: string
  price: number
  currency: string
  accent: 'terminal' | 'reader'
}

export interface CartItem {
  productId: string
  quantity: number
}
