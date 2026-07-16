/** 
 * Settings page — main settings screen
 * Renders the SettingsScreen component inside an ErrorBoundary.
 * Allows users to manage account preferences (appearance, language, security, etc.).
 */
import { ErrorBoundary } from '@/components/ErrorBoundary'
import { SettingsScreen } from '@/features/settings/screens/SettingsScreen'

export default function SettingsPage() {
  return (
    <ErrorBoundary>
      <SettingsScreen />
    </ErrorBoundary>
  )
}
