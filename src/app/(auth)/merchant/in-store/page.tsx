import { ErrorBoundary } from '@/components/ErrorBoundary'
import { InStoreShop } from '@/features/Merchant/in-store/screens/InStoreShop'

export default function InStorePage() {
  return (
    <ErrorBoundary>
      <InStoreShop />
    </ErrorBoundary>
  )
}
