import { ErrorBoundary } from '@/components/ErrorBoundary'
import { PaymentLinkSettingsScreen } from '@/features/Merchant/payment-link/screens/PaymentLinkSettingsScreen'

export default function PaymentLinkSettingsPage() {
  return (
    <ErrorBoundary>
      <PaymentLinkSettingsScreen />
    </ErrorBoundary>
  )
}
