import type * as React from "react"

type IconProps = React.SVGProps<SVGSVGElement>

/**
 * Exact vuesax (Iconsax) icons used in the transfer detail panel,
 * transcribed from the Figma node exports (Completed `1:3252`, Pending/bulk
 * `1:3417`). `currentColor` throughout so each usage recolors via text-*
 * utilities, except the two-tone "bulk" fills which keep their source opacity.
 */

/** vuesax/linear/tick-double-02 — Approve action chip */
export function TickDoubleIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path d="M2.5 13.8333L6 17.5L7.02402 16.4272M16.5 6.5L10.437 12.8517" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M7.5 13.8333L11 17.5L21.5 6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

/** vuesax/bulk/sms — "Send via email" share action */
export function BulkSmsIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path opacity="0.4" d="M17 20.5H7C4 20.5 2 19 2 15.5V8.5C2 5 4 3.5 7 3.5H17C20 3.5 22 5 22 8.5V15.5C22 19 20 20.5 17 20.5Z" fill="currentColor" />
      <path d="M12 12.87C11.16 12.87 10.31 12.61 9.66001 12.08L6.53001 9.58C6.21001 9.32 6.15001 8.85 6.41001 8.53C6.67001 8.21 7.14001 8.15 7.46001 8.41L10.59 10.91C11.35 11.52 12.64 11.52 13.4 10.91L16.53 8.41C16.85 8.15 17.33 8.2 17.58 8.53C17.84 8.85 17.79 9.33 17.46 9.58L14.33 12.08C13.69 12.61 12.84 12.87 12 12.87Z" fill="currentColor" />
    </svg>
  )
}

/** vuesax/bulk/receive-square — "Download Statement" share action */
export function BulkReceiveSquareIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path opacity="0.4" d="M16.19 2H7.82C4.17 2 2 4.17 2 7.81V16.18C2 19.82 4.17 21.99 7.81 21.99H16.18C19.82 21.99 21.99 19.82 21.99 16.18V7.81C22 4.17 19.83 2 16.19 2Z" fill="currentColor" />
      <path d="M11.4702 15.04C11.5402 15.11 11.6202 15.16 11.7102 15.2C11.8002 15.24 11.9002 15.26 12.0002 15.26C12.1002 15.26 12.1902 15.24 12.2902 15.2C12.3802 15.16 12.4602 15.11 12.5302 15.04L15.5302 12.04C15.8202 11.75 15.8202 11.27 15.5302 10.98C15.2402 10.69 14.7602 10.69 14.4702 10.98L12.7502 12.7V6.51C12.7502 6.1 12.4102 5.76 12.0002 5.76C11.5902 5.76 11.2502 6.1 11.2502 6.51V12.7L9.53024 10.98C9.24024 10.69 8.76025 10.69 8.47025 10.98C8.18025 11.27 8.18025 11.75 8.47025 12.04L11.4702 15.04Z" fill="currentColor" />
      <path d="M18.71 16.28C18.58 15.89 18.16 15.68 17.76 15.81C14.04 17.05 9.95 17.05 6.23 15.81C5.84 15.68 5.41 15.89 5.28 16.28C5.15 16.67 5.36 17.1 5.75 17.23C7.76 17.9 9.87 18.24 11.99 18.24C14.11 18.24 16.22 17.9 18.23 17.23C18.63 17.09 18.84 16.67 18.71 16.28Z" fill="currentColor" />
    </svg>
  )
}

/** vuesax/bold/arrange-circle-2 — bulk-transfer avatar mark */
export function ArrangeCircle2Icon(props: IconProps) {
  return (
    <svg viewBox="0 0 28 28" fill="none" {...props}>
      <path d="M14 2.33333C7.56 2.33333 2.33333 7.56 2.33333 14C2.33333 20.44 7.56 25.6667 14 25.6667C20.44 25.6667 25.6667 20.44 25.6667 14C25.6667 7.56 20.44 2.33333 14 2.33333ZM20.825 16.45C20.7783 16.555 20.72 16.6483 20.6383 16.73L17.0917 20.2767C16.9167 20.4517 16.695 20.5333 16.4733 20.5333C16.2517 20.5333 16.03 20.4517 15.855 20.2767C15.5167 19.9383 15.5167 19.3783 15.855 19.04L17.9083 16.9867H7.99167C7.51333 16.9867 7.11667 16.59 7.11667 16.1117C7.11667 15.6333 7.51333 15.2367 7.99167 15.2367H20.02C20.1367 15.2367 20.2417 15.26 20.3583 15.3067C20.5683 15.4 20.7433 15.5633 20.8367 15.785C20.9067 15.995 20.9067 16.24 20.825 16.45ZM20.0083 12.7517H7.99167C7.875 12.7517 7.75833 12.7283 7.65333 12.6817C7.44333 12.5883 7.26833 12.425 7.175 12.2033C7.08167 11.9933 7.08167 11.7483 7.175 11.5383C7.22167 11.4333 7.28 11.34 7.36167 11.2583L10.9083 7.71167C11.2467 7.37333 11.8067 7.37333 12.145 7.71167C12.4833 8.05 12.4833 8.61 12.145 8.94833L10.1033 11.0017H20.02C20.4983 11.0017 20.895 11.3983 20.895 11.8767C20.895 12.355 20.4983 12.7517 20.0083 12.7517Z" fill="currentColor" />
    </svg>
  )
}

/** vuesax/bold/clock — small badge on the bulk-transfer avatar mark */
export function ClockIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 8 8" fill="none" {...props}>
      <path d="M4 0.666667C2.16333 0.666667 0.666667 2.16333 0.666667 4C0.666667 5.83667 2.16333 7.33333 4 7.33333C5.83667 7.33333 7.33333 5.83667 7.33333 4C7.33333 2.16333 5.83667 0.666667 4 0.666667ZM5.45 5.19C5.40333 5.27 5.32 5.31333 5.23333 5.31333C5.19 5.31333 5.14667 5.30333 5.10667 5.27667L4.07333 4.66C3.81667 4.50667 3.62667 4.17 3.62667 3.87333V2.50667C3.62667 2.37 3.74 2.25667 3.87667 2.25667C4.01333 2.25667 4.12667 2.37 4.12667 2.50667V3.87333C4.12667 3.99333 4.22667 4.17 4.33 4.23L5.36333 4.84667C5.48333 4.91667 5.52333 5.07 5.45 5.19Z" fill="currentColor" />
    </svg>
  )
}

/** User Interface / Check cr-fr — filled timeline step marker; `done` toggles the fill */
export function TimelineCheckIcon({ done = true, ...props }: IconProps & { done?: boolean }) {
  return (
    <svg viewBox="0 0 20 20" fill="none" {...props}>
      <path d="M10 1.66667C5.39763 1.66667 1.66667 5.39763 1.66667 10C1.66667 14.6024 5.39763 18.3333 10 18.3333C14.6024 18.3333 18.3333 14.6024 18.3333 10C18.3333 5.39763 14.6024 1.66667 10 1.66667Z" fill={done ? "#18181B" : "#828282"} />
      <path fillRule="evenodd" clipRule="evenodd" d="M13.0893 7.74408C13.4147 8.06951 13.4147 8.59715 13.0893 8.92259L9.75592 12.2559C9.43049 12.5814 8.90285 12.5814 8.57741 12.2559L6.91074 10.5893C6.58531 10.2638 6.58531 9.73618 6.91074 9.41074C7.23618 9.08531 7.76382 9.08531 8.08926 9.41074L9.16667 10.4882L11.9107 7.74408C12.2362 7.41864 12.7638 7.41864 13.0893 7.74408Z" fill="white" />
    </svg>
  )
}
