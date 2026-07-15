import { ErrorBoundary } from '@/components/ErrorBoundary'
import { QrServiceDashboard } from '@/features/Merchant/qr-service/screens/QrServiceDashboard'

export default function QrServicePage() {
  return (
    <ErrorBoundary>
      <QrServiceDashboard />
    </ErrorBoundary>
  )
}
