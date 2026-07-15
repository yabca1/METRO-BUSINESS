import { ErrorBoundary } from '@/components/ErrorBoundary'
import { BrandingScreen } from '@/features/Merchant/payment-link/screens/BrandingScreen'

export default function PaymentLinkBrandingPage() {
  return (
    <ErrorBoundary>
      <BrandingScreen />
    </ErrorBoundary>
  )
}
