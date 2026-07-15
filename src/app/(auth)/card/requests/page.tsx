import { ErrorBoundary } from '@/components/ErrorBoundary'
import { CardDashboard } from '@/features/Card/screens/CardDashboard'

export default function CardRequestsPage() {
  return (
    <ErrorBoundary>
      <CardDashboard />
    </ErrorBoundary>
  )
}
