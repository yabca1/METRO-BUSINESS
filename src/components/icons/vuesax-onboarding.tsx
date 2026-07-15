import type * as React from "react"

type IconProps = React.SVGProps<SVGSVGElement>

/**
 * Exact vuesax (Iconsax) icons used on the onboarding "Legal Documents" step,
 * transcribed from the Figma node exports. `currentColor` throughout so each
 * usage recolors via text-* utilities.
 */

/** vuesax/outline/document — file-upload row icon */
export function DocumentIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 28 28" fill="none" {...props}>
      <path d="M16.33 2.33H9.33C5.83 2.33 4.08 4.08 4.08 7.58V20.42C4.08 23.92 5.83 25.67 9.33 25.67H18.67C22.17 25.67 23.92 23.92 23.92 20.42V9.92L16.33 2.33Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M15.75 2.33V6.42C15.75 8.36 17.32 9.92 19.25 9.92H23.92" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9.33 15.17H14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9.33 19.83H18.67" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

/** icon/outline/eye — small "preview" glyph next to an uploaded file name */
export function PreviewEyeIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 16 16" fill="none" {...props}>
      <path d="M1.36 8.32C1.22 8.11 1.22 7.88 1.36 7.68C2.5 6.03 5.03 3 8 3C10.97 3 13.5 6.03 14.64 7.68C14.78 7.89 14.78 8.12 14.64 8.32C13.5 9.97 10.97 13 8 13C5.03 13 2.5 9.97 1.36 8.32Z" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M8 10C9.1 10 10 9.1 10 8C10 6.9 9.1 6 8 6C6.9 6 6 6.9 6 8C6 9.1 6.9 10 8 10Z" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

/** vuesax/bulk/briefcase — onboarding "Set up your Business Account" step icon */
export function BriefcaseIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path opacity="0.4" d="M21.5 13.72V17C21.5 20.34 20.34 21.5 17 21.5H7C3.66 21.5 2.5 20.34 2.5 17V13.72C2.5 12.68 3.36 11.85 4.4 11.9C6.5 12 8.65 12.05 10.8 12.05C11.34 12.05 11.88 12.06 12.42 12.06C15.34 12.06 18.25 12 21.06 11.88C21.85 11.85 21.5 12.68 21.5 13.72Z" fill="currentColor" />
      <path d="M8 12.05V13C8 13.55 8.44 14 8.99 14.02C9.66 14.05 10.33 14.06 11 14.06C11.67 14.06 12.34 14.05 13.01 14.02C13.56 14 14 13.55 14 13V12.05C14 11.5 13.56 11.05 13.01 11.03C12.34 11.01 11.67 11 11 11C10.33 11 9.66 11.01 8.99 11.03C8.44 11.05 8 11.5 8 12.05Z" fill="currentColor" />
      <path d="M15.5 6.5H8.5V4.75C8.5 4.34 8.84 4 9.25 4H14.75C15.16 4 15.5 4.34 15.5 4.75V6.5Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M2.5 13V9.5C2.5 6.16 3.66 5 7 5H17C20.34 5 21.5 6.16 21.5 9.5V13.15" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

/** vuesax/bulk/buy-crypto — onboarding "Choose your plan" step icon */
export function BuyCryptoIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path opacity="0.4" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="currentColor" />
      <path d="M14.5 9.5C14.5 8.12 13.38 7 12 7C10.62 7 9.5 8.12 9.5 9.5C9.5 10.63 10.26 11.57 11.29 11.88C10.26 12.19 9.5 13.13 9.5 14.26C9.5 15.64 10.62 16.76 12 16.76C13.38 16.76 14.5 15.64 14.5 14.26" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" />
      <path d="M8.5 9.5H12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M8.5 14.26H12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

/** vuesax/linear/edit-2 — small round edit affordance badge */
export function EditBadgeIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 14 14" fill="none" {...props}>
      <path d="M7.79 1.75L2.7 7.13C2.51 7.33 2.33 7.72 2.29 8L2.02 9.94C1.93 10.6 2.4 11.05 3.06 10.94L4.99 10.61C5.27 10.56 5.65 10.36 5.84 10.15L10.93 4.77C11.81 3.84 12.21 2.78 10.84 1.48C9.47 0.19 8.67 0.82 7.79 1.75Z" stroke="currentColor" strokeWidth="0.7" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M6.96 2.63C7.09 3.47 7.77 4.11 8.62 4.2" stroke="currentColor" strokeWidth="0.7" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M1.75 12.83H12.25" stroke="currentColor" strokeWidth="0.7" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
