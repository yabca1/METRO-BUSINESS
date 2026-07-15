import { ErrorBoundary } from '@/components/ErrorBoundary'
import { PaymentLinkDashboard } from '@/features/Merchant/payment-link/screens/PaymentLinkDashboard'

export default function PaymentLinkPage() {
  return (
    <ErrorBoundary>
      <PaymentLinkDashboard />
    </ErrorBoundary>
  )
}
