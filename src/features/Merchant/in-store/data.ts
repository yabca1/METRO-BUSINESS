// Merchant — In-Store mock data
import type { InStoreProduct } from './types'

export const IN_STORE_PRODUCTS: InStoreProduct[] = [
  {
    id: 'terminal',
    name: 'Metro Terminal',
    description: 'Combine POS and payments into a single powerful device',
    price: 14999,
    currency: 'ETB',
    accent: 'terminal',
  },
  {
    id: 'reader',
    name: 'Metro Reader',
    description: 'Portable card reader for contactless and chip & pin payments on the go',
    price: 4999,
    currency: 'ETB',
    accent: 'reader',
  },
]
// TODO: Review merchant page logic
