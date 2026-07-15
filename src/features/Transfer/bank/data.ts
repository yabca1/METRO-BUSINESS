export const BANKS = [
  'Abay Bank', 'Awash Bank', 'Bank of Abyssinia', 'Berhan Bank',
  'Buna Bank', 'CBE', 'COOP', 'Dashen Bank',
  'Debub Global Bank', 'Enat Bank', 'Goh Betoch', 'United Bank',
  'Tsehay Bank', 'Wegagen Bank', 'Zemen Bank', 'Zam Zam Bank',
  'NIB', 'CBE Birr', 'Addis Bank', 'Kacha',
  'Ahadu Bank', 'Siinqee Bank', 'Rays MFI', 'KAAFI MFI',
  'One MFI', 'Somali Micro Finance',
] as const

export const BANK_TILE_CLASSES = [
  'bg-brand-blue/10', 'bg-brand-accent/10', 'bg-brand-pending/10', 'bg-brand-accent/10',
  'bg-brand-danger/10', 'bg-brand-violet/10', 'bg-brand-blue/10', 'bg-brand-ink/10',
  'bg-brand-success/10', 'bg-brand-danger/10', 'bg-brand-accent/10', 'bg-brand-completed/10',
] as const

export const RECENT_BANK_RECIPIENTS = Array.from({ length: 5 }, (_, index) => ({
  id: `bank-recipient-${index + 1}`,
  name: 'Abebe Kebede',
  wallet: 'Commercial Bank of Ethiopia',
  handle: '1000242950635',
  initials: 'AK',
  channel: 'bank' as const,
}))
