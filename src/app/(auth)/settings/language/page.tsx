/** 
 * Settings language page — language selection sub-screen
 * Renders the SettingsLanguageScreen component inside an ErrorBoundary.
 * Allows users to choose their preferred language for the dashboard.
 */
import { ErrorBoundary } from '@/components/ErrorBoundary'
import { SettingsLanguageScreen } from '@/features/settings/screens/SettingsLanguageScreen'

export default function SettingsLanguagePage() {
  return (
    <ErrorBoundary>
      <SettingsLanguageScreen />
    </ErrorBoundary>
  )
}
