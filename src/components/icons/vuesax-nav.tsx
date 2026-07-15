import type * as React from "react"

type IconProps = React.SVGProps<SVGSVGElement>

/**
 * Exact vuesax (Iconsax) icons used in the sidebar nav + profile menu,
 * transcribed from the Figma node exports. `currentColor` throughout so
 * each usage recolors via text-* utilities.
 */

const stroke = { stroke: "currentColor", strokeWidth: 1.5, strokeLinecap: "round" as const, strokeLinejoin: "round" as const }

/** vuesax/linear/arrow-swap-horizontal — Transfer */
export function ArrowSwapHorizontalIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path d="M20.5 14.99L15.49 20.01" {...stroke} strokeMiterlimit="10" />
      <path d="M3.5 14.99H20.5" {...stroke} strokeMiterlimit="10" />
      <path d="M3.5 9.01L8.51 3.99" {...stroke} strokeMiterlimit="10" />
      <path d="M20.5 9.01H3.5" {...stroke} strokeMiterlimit="10" />
    </svg>
  )
}

/** vuesax/linear/layer — Payment */
export function LayerIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path d="M13.01 2.92L18.91 5.54C20.61 6.29 20.61 7.53 18.91 8.28L13.01 10.9C12.34 11.2 11.24 11.2 10.57 10.9L4.67 8.28C2.97 7.53 2.97 6.29 4.67 5.54L10.57 2.92C11.24 2.62 12.34 2.62 13.01 2.92Z" {...stroke} />
      <path d="M3 11C3 11.84 3.63 12.81 4.4 13.15L11.19 16.17C11.71 16.4 12.3 16.4 12.81 16.17L19.6 13.15C20.37 12.81 21 11.84 21 11" {...stroke} />
      <path d="M3 16C3 16.93 3.55 17.77 4.4 18.15L11.19 21.17C11.71 21.4 12.3 21.4 12.81 21.17L19.6 18.15C20.45 17.77 21 16.93 21 16" {...stroke} />
    </svg>
  )
}

/** vuesax/linear/element-plus — Products */
export function ReceiptItemIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path d="M22 6v2.42C22 10 21 11 19.42 11H16V4.01A2.02 2.02 0 0 1 18.02 2C20.21 2.02 22 3.8 22 6ZM2 7v14c0 .83.94 1.3 1.6.8l1.71-1.28c.4-.3.96-.26 1.32.1l1.66 1.67c.39.39 1.03.39 1.42 0l1.68-1.68c.35-.35.91-.39 1.3-.09l1.71 1.28c.66.49 1.6.02 1.6-.8V4a2 2 0 0 1 2-2H7C3 2 2 3.79 2 6v1ZM9 13.01h3M9 9.01h3" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M6 13h.01M6 9h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

export function ElementPlusIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path d="M22 8.27V4.23C22 2.64 21.36 2 19.77 2H15.73C14.14 2 13.5 2.64 13.5 4.23V8.27C13.5 9.86 14.14 10.5 15.73 10.5H19.77C21.36 10.5 22 9.86 22 8.27Z" {...stroke} />
      <path d="M10.5 8.52V3.98C10.5 2.57 9.86 2 8.27 2H4.23C2.64 2 2 2.57 2 3.98V8.51C2 9.93 2.64 10.49 4.23 10.49H8.27C9.86 10.5 10.5 9.93 10.5 8.52Z" {...stroke} />
      <path d="M10.5 19.77V15.73C10.5 14.14 9.86 13.5 8.27 13.5H4.23C2.64 13.5 2 14.14 2 15.73V19.77C2 21.36 2.64 22 4.23 22H8.27C9.86 22 10.5 21.36 10.5 19.77Z" {...stroke} />
      <path d="M14.5 17.5H20.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M17.5 20.5V14.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

/** vuesax/linear/card — Card */
export function CardIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path d="M2 8.50496H22" {...stroke} strokeMiterlimit="10" />
      <path d="M6 16.505H8" {...stroke} strokeMiterlimit="10" />
      <path d="M10.5 16.505H14.5" {...stroke} strokeMiterlimit="10" />
      <path d="M6.44 3.50496H17.55C21.11 3.50496 22 4.38496 22 7.89496V16.105C22 19.615 21.11 20.495 17.56 20.495H6.44C2.89 20.505 2 19.625 2 16.115V7.89496C2 4.38496 2.89 3.50496 6.44 3.50496Z" {...stroke} />
    </svg>
  )
}

/** vuesax/outline/shop — Merchant */
export function ShopIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path d="M14.7 22.75H9.3C4.36 22.75 2.26 20.64 2.26 15.71V11.22C2.26 10.81 2.6 10.47 3.01 10.47C3.42 10.47 3.76 10.81 3.76 11.22V15.71C3.76 19.8 5.21 21.25 9.3 21.25H14.69C18.78 21.25 20.23 19.8 20.23 15.71V11.22C20.23 10.81 20.57 10.47 20.98 10.47C21.39 10.47 21.73 10.81 21.73 11.22V15.71C21.74 20.64 19.63 22.75 14.7 22.75Z" fill="currentColor" />
      <path d="M12 12.75C10.9 12.75 9.9 12.32 9.19 11.53C8.48 10.74 8.15 9.71 8.26 8.61L8.93 1.93C8.97 1.55 9.29 1.25 9.68 1.25H14.35C14.74 1.25 15.06 1.54 15.1 1.93L15.77 8.61C15.88 9.71 15.55 10.74 14.84 11.53C14.1 12.32 13.1 12.75 12 12.75Z" fill="currentColor" />
      <path d="M18.31 12.75C16.28 12.75 14.47 11.11 14.26 9.09L13.56 2.08C13.54 1.87 13.61 1.66 13.75 1.5C13.89 1.34 14.09 1.25 14.31 1.25H17.36C20.3 1.25 21.67 2.48 22.08 5.5L22.36 8.28C22.48 9.46 22.12 10.58 21.35 11.43C20.58 12.28 19.5 12.75 18.31 12.75Z" fill="currentColor" />
      <path d="M5.64 12.75C4.45 12.75 3.37 12.28 2.6 11.43C1.83 10.58 1.47 9.46 1.59 8.28L1.86 5.53C2.28 2.48 3.65 1.25 6.59 1.25H9.64C9.85 1.25 10.05 1.34 10.2 1.5C10.35 1.66 10.41 1.87 10.39 2.08L9.69 9.09C9.48 11.11 7.67 12.75 5.64 12.75Z" fill="currentColor" />
      <path d="M14.5 22.75H9.5C9.09 22.75 8.75 22.41 8.75 22V19.5C8.75 17.4 9.9 16.25 12 16.25C14.1 16.25 15.25 17.4 15.25 19.5V22C15.25 22.41 14.91 22.75 14.5 22.75Z" fill="currentColor" />
    </svg>
  )
}

/** vuesax/linear/profile-2user — Team */
export function Profile2UserIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path d="M9.16 10.87C9.06 10.86 8.94 10.86 8.83 10.87C6.45 10.79 4.56 8.84 4.56 6.44C4.56 3.99 6.54 2 9 2C11.45 2 13.44 3.99 13.44 6.44C13.43 8.84 11.54 10.79 9.16 10.87Z" {...stroke} />
      <path d="M16.41 4C18.35 4 19.91 5.57 19.91 7.5C19.91 9.39 18.41 10.93 16.54 11C16.46 10.99 16.37 10.99 16.28 11" {...stroke} />
      <path d="M4.16 14.56C1.74 16.18 1.74 18.82 4.16 20.43C6.91 22.27 11.42 22.27 14.17 20.43C16.59 18.81 16.59 16.17 14.17 14.56C11.43 12.73 6.92 12.73 4.16 14.56Z" {...stroke} />
      <path d="M18.34 20C19.06 19.85 19.74 19.56 20.3 19.13C21.86 17.96 21.86 16.03 20.3 14.86C19.75 14.44 19.08 14.16 18.37 14" {...stroke} />
    </svg>
  )
}

/** vuesax/linear/gift — Rewards */
export function GiftIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path d="M19.97 10H3.97V18C3.97 21 4.97 22 7.97 22H15.97C18.97 22 19.97 21 19.97 18V10Z" {...stroke} strokeMiterlimit="10" />
      <path d="M21.5 7V8C21.5 9.1 20.97 10 19.5 10H4.5C2.97 10 2.5 9.1 2.5 8V7C2.5 5.9 2.97 5 4.5 5H19.5C20.97 5 21.5 5.9 21.5 7Z" {...stroke} strokeMiterlimit="10" />
      <path d="M11.64 5H6.12C5.78 4.63 5.79 4.06 6.15 3.7L7.57 2.28C7.94 1.91 8.55 1.91 8.92 2.28L11.64 5Z" {...stroke} strokeMiterlimit="10" />
      <path d="M17.87 5H12.35L15.07 2.28C15.44 1.91 16.05 1.91 16.42 2.28L17.84 3.7C18.2 4.06 18.21 4.63 17.87 5Z" {...stroke} strokeMiterlimit="10" />
      <path d="M8.94 10V15.14C8.94 15.94 9.82 16.41 10.49 15.98L11.43 15.36C11.77 15.14 12.2 15.14 12.53 15.36L13.42 15.96C14.08 16.4 14.97 15.93 14.97 15.13V10H8.94Z" {...stroke} strokeMiterlimit="10" />
    </svg>
  )
}

/** vuesax/linear/chart — Insight */
export function ChartIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path d="M2 22H22" {...stroke} strokeMiterlimit="10" />
      <path d="M9.75 4V22H14.25V4C14.25 2.9 13.8 2 12.45 2H11.55C10.2 2 9.75 2.9 9.75 4Z" {...stroke} />
      <path d="M3 10V22H7V10C7 8.9 6.6 8 5.4 8H4.6C3.4 8 3 8.9 3 10Z" {...stroke} />
      <path d="M17 15V22H21V15C21 13.9 20.6 13 19.4 13H18.6C17.4 13 17 13.9 17 15Z" {...stroke} />
    </svg>
  )
}

/** vuesax/linear/arrow-up — 14px expand/collapse caret (points down at rest) */
export function ChevronIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 14 14" fill="none" {...props}>
      <path d="M11.62 8.77917L7.81667 4.97583C7.3675 4.52667 6.6325 4.52667 6.18333 4.97583L2.38 8.77917" {...stroke} strokeMiterlimit="10" />
    </svg>
  )
}

/** vuesax/linear/login — profile menu log out item */
export function LoginIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path d="M8.9 7.56C9.21 3.96 11.06 2.49 15.11 2.49H15.24C19.71 2.49 21.5 4.28 21.5 8.75V15.27C21.5 19.74 19.71 21.53 15.24 21.53H15.11C11.09 21.53 9.24 20.08 8.91 16.54" {...stroke} />
      <path d="M2 12H14.88" {...stroke} />
      <path d="M12.65 8.65L16 12L12.65 15.35" {...stroke} />
    </svg>
  )
}
