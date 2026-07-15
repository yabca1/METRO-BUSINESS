import { ErrorBoundary } from "@/components/ErrorBoundary"
import { SpendProgramsDashboard } from "@/features/Card/spend-programs/screens/SpendProgramsDashboard"

export default function SpendProgramsPage() {
  return (
    <ErrorBoundary>
      <SpendProgramsDashboard />
    </ErrorBoundary>
  )
}
