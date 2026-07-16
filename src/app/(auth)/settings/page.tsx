import { ErrorBoundary } from '@/components/ErrorBoundary'
import { SettingsScreen } from '@/features/settings/screens/SettingsScreen'

export default function SettingsPage() {
  return (
    <ErrorBoundary>
      <SettingsScreen />
    </ErrorBoundary>
  )
}
