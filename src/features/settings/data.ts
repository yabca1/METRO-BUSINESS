// src/features/settings/data.ts
import { ROUTES } from '@/constants/routes'

export type SettingsNavItem = {
  label: string
  icon: string
  active?: boolean
  href?: string
  textOnly?: boolean
  text?: string
}

export type SettingsNavGroup = SettingsNavItem[][]

export const SETTINGS_NAV_GROUPS: SettingsNavGroup = [
  [
    { label: 'Account', icon: '/icons/settings/account.svg' },
    { label: 'Security', icon: '/icons/settings/security.svg' },
    { label: 'Business account', icon: '/icons/settings/business-account.svg' },
    { label: 'Statements and report', icon: '/icons/settings/statements.svg' },
    { label: 'Approval process', icon: '/icons/settings/approval.svg' },
  ],
  [
    { label: 'Notifications', icon: '/icons/settings/notifications.svg' },
    { label: 'Appearance', icon: '/icons/settings/appearance.svg' },
    { label: 'Language', icon: '/icons/settings/language.svg', href: ROUTES.SETTINGS_LANGUAGE },
  ],
  [
    { label: 'Integration', icon: '/icons/settings/integration.svg' },
    { label: 'APIs', icon: '/icons/settings/apis.svg' },
  ],
  [
    { label: 'Help and support', icon: '/icons/settings/help.svg' },
    { label: 'About us', icon: '', textOnly: true, text: 'M' },
  ],
]

export type Language = {
  name: string
  variant: string
  description: string
  active?: boolean
}

export const LANGUAGES: Language[] = [
  {
    name: 'English',
    variant: 'UK',
    description: 'Click here to change to UK English language',
    active: true,
  },
  {
    name: 'English',
    variant: 'American',
    description: 'Click here to change to American English language',
  },
  {
    name: 'Amharic',
    variant: 'አማርኛ',
    description: 'Click here to change to Amharic language',
  },
  {
    name: 'Afan Oromo',
    variant: 'Oromiffa',
    description: 'Click here to change to Afan Oromo language',
  },
  {
    name: 'Tigregna',
    variant: 'ትግርኛ',
    description: 'Click here to change to Tigregna language',
  },
]
