import { ErrorBoundary } from '@/components/ErrorBoundary'
import { NewPaymentLinkScreen } from '@/features/Merchant/payment-link/screens/NewPaymentLinkScreen'

export default function NewPaymentLinkPage() {
  return (
    <ErrorBoundary>
      <NewPaymentLinkScreen />
    </ErrorBoundary>
  )
}
