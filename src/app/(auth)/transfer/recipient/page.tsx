import { ErrorBoundary } from '@/components/ErrorBoundary'
import { RecipientDashboard } from '@/features/Recipient/screens/RecipientDashboard'

export default function RecipientPage() {
  return (
    <ErrorBoundary>
      <RecipientDashboard />
    </ErrorBoundary>
  )
}
