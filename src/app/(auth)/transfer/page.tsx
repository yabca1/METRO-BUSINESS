import { ErrorBoundary } from '@/components/ErrorBoundary'
import { TransferDashboard } from '@/features/Transfer/screens/TransferDashboard'

export default function TransferPage() {
  return (
    <ErrorBoundary>
      <TransferDashboard />
    </ErrorBoundary>
  )
}
