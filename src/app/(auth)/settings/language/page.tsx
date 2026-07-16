import { ErrorBoundary } from '@/components/ErrorBoundary'
import { SettingsLanguageScreen } from '@/features/settings/screens/SettingsLanguageScreen'

export default function SettingsLanguagePage() {
  return (
    <ErrorBoundary>
      <SettingsLanguageScreen />
    </ErrorBoundary>
  )
}
