import { ErrorBoundary } from '@/components/ErrorBoundary'
import { CardDashboard } from '@/features/Card/screens/CardDashboard'

export default function CardPage() {
  return (
    <ErrorBoundary>
      <CardDashboard />
    </ErrorBoundary>
  )
}
