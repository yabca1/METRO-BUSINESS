import type * as React from 'react'

type IconProps = React.SVGProps<SVGSVGElement>

export function BackArrowIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 16 16" fill="none" {...props}>
      <path d="M10 3.5 5.5 8l4.5 4.5M5.75 8H14" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function ChevronRightIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 20 20" fill="none" {...props}>
      <path d="m7.5 4.25 5.75 5.75-5.75 5.75" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function InfoCircleIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 16 16" fill="none" {...props}>
      <circle cx="8" cy="8" r="5.75" stroke="currentColor" />
      <path d="M8 7.25v3.25M8 5.4h.01" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" />
    </svg>
  )
}

export function FlashIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path d="M13.25 2.5 5.5 13h5.75l-.5 8.5L18.5 11h-5.75l.5-8.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  )
}

export function ReceiptIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path d="M6 3.5h12v17l-2-1.25L14 20.5l-2-1.25-2 1.25-2-1.25L6 20.5v-17Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M9 8h6M9 12h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

export function EditIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 20 20" fill="none" {...props}>
      <path d="m12.1 4.15 3.75 3.75M4 16l1.05-4.1 7.8-7.8a1.8 1.8 0 0 1 2.55 0l.5.5a1.8 1.8 0 0 1 0 2.55l-7.8 7.8L4 16Z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M11.5 16H16" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  )
}

export function EyeIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path d="M2.5 12s3.5-6 9.5-6 9.5 6 9.5 6-3.5 6-9.5 6-9.5-6-9.5-6Z" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  )
}

/** vuesax/linear/finger-cricle (biometric keypad key) */
export function FingerprintIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path d="M12 3.5c-4.7 0-8.5 3.8-8.5 8.5 0 1.6.2 3.1.7 4.5M20.5 12c0-1.7-.3-3.3-.9-4.8M8.5 4.6A8.44 8.44 0 0 1 12 3.9M17.8 6.5A8.47 8.47 0 0 1 20.1 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M12 7.5a4.5 4.5 0 0 0-4.5 4.5c0 2.9-.6 5.6-1.7 8M12 7.5a4.5 4.5 0 0 1 4.5 4.5c0 .9-.05 1.8-.15 2.6M9.2 20.4c.4-.9.75-1.85 1.02-2.83M12 12v.7c0 2.6-.4 5.1-1.15 7.4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

/** on-screen keypad backspace glyph */
export function BackspaceIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path d="M9 6h10.5a1.5 1.5 0 0 1 1.5 1.5v9a1.5 1.5 0 0 1-1.5 1.5H9l-6-6 6-6Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="m10.5 9.5 5 5m0-5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

/** vuesax/bulk/calendar-tick (schedule success icon) */
export function CalendarTickIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path d="M8 3v3.5M16 3v3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <rect x="3" y="5.5" width="18" height="15" rx="4" stroke="currentColor" strokeWidth="1.5" />
      <path d="M3 10h18" stroke="currentColor" strokeWidth="1.5" />
      <path d="m9 15.5 2 2 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
