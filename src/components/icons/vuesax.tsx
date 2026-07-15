import * as React from "react"

type IconProps = React.SVGProps<SVGSVGElement>

/**
 * Exact vuesax (Iconsax) icons used on the recipients screen, transcribed from
 * the Figma node exports. Colors use `currentColor` so each usage recolors via
 * text-* utilities; two-tone "bulk" opacities are preserved from the source.
 */

/** vuesax/linear/add */
export function AddIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 14 14" fill="none" {...props}>
      <path d="M3.5 7H10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M7 10.5V3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

/** vuesax/linear/search-normal (14px chip variant) */
export function SearchIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 14 14" fill="none" {...props}>
      <path d="M6.70833 12.25C9.76891 12.25 12.25 9.76891 12.25 6.70833C12.25 3.64776 9.76891 1.16667 6.70833 1.16667C3.64776 1.16667 1.16667 3.64776 1.16667 6.70833C1.16667 9.76891 3.64776 12.25 6.70833 12.25Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12.8333 12.8333L11.6667 11.6667" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

/** vuesax/linear/search-normal (24px topnav variant) */
export function SearchNormalIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path d="M11 20C15.9706 20 20 15.9706 20 11C20 6.02944 15.9706 2 11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M18.9299 20.6898C19.4599 22.2898 20.6699 22.4498 21.5999 21.0498C22.4499 19.7698 21.8899 18.7198 20.3499 18.7198C19.2099 18.7098 18.5699 19.5998 18.9299 20.6898Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

/** vuesax/linear/setting-2 */
export function Setting2Icon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M2 12.88V11.12C2 10.08 2.85 9.22 3.9 9.22C5.71 9.22 6.45 7.94 5.54 6.37C5.02 5.47 5.33 4.3 6.24 3.78L7.97 2.79C8.76 2.32 9.78 2.6 10.25 3.39L10.36 3.58C11.26 5.15 12.74 5.15 13.65 3.58L13.76 3.39C14.23 2.6 15.25 2.32 16.04 2.79L17.77 3.78C18.68 4.3 18.99 5.47 18.47 6.37C17.56 7.94 18.3 9.22 20.11 9.22C21.15 9.22 22.01 10.07 22.01 11.12V12.88C22.01 13.92 21.16 14.78 20.11 14.78C18.3 14.78 17.56 16.06 18.47 17.63C18.99 18.54 18.68 19.7 17.77 20.22L16.04 21.21C15.25 21.68 14.23 21.4 13.76 20.61L13.65 20.42C12.75 18.85 11.27 18.85 10.36 20.42L10.25 20.61C9.78 21.4 8.76 21.68 7.97 21.21L6.24 20.22C5.33 19.7 5.02 18.53 5.54 17.63C6.45 16.06 5.71 14.78 3.9 14.78C2.85 14.78 2 13.92 2 12.88Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

/** vuesax/linear/notification */
export function NotificationIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path d="M12.02 2.91C8.71 2.91 6.02 5.6 6.02 8.91V11.8C6.02 12.41 5.76 13.34 5.45 13.86L4.3 15.77C3.59 16.95 4.08 18.26 5.38 18.7C9.69 20.14 14.34 20.14 18.65 18.7C19.86 18.3 20.39 16.87 19.73 15.77L18.58 13.86C18.28 13.34 18.02 12.41 18.02 11.8V8.91C18.02 5.61 15.32 2.91 12.02 2.91Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" />
      <path d="M13.87 3.2C13.56 3.11 13.24 3.04 12.91 3C11.95 2.88 11.03 2.95 10.17 3.2C10.46 2.46 11.18 1.94 12.02 1.94C12.86 1.94 13.58 2.46 13.87 3.2Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M15.02 19.06C15.02 20.71 13.67 22.06 12.02 22.06C11.2 22.06 10.44 21.72 9.9 21.18C9.36 20.64 9.02 19.88 9.02 19.06" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" />
    </svg>
  )
}

/** vuesax/linear/more (horizontal dots) */
export function MoreIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 12 12" fill="none" {...props}>
      <path d="M2.5 5C1.95 5 1.5 5.45 1.5 6C1.5 6.55 1.95 7 2.5 7C3.05 7 3.5 6.55 3.5 6C3.5 5.45 3.05 5 2.5 5Z" stroke="currentColor" strokeWidth="0.8" />
      <path d="M9.5 5C8.95 5 8.5 5.45 8.5 6C8.5 6.55 8.95 7 9.5 7C10.05 7 10.5 6.55 10.5 6C10.5 5.45 10.05 5 9.5 5Z" stroke="currentColor" strokeWidth="0.8" />
      <path d="M6 5C5.45 5 5 5.45 5 6C5 6.55 5.45 7 6 7C6.55 7 7 6.55 7 6C7 5.45 6.55 5 6 5Z" stroke="currentColor" strokeWidth="0.8" />
    </svg>
  )
}

/** bi:x — bootstrap close glyph (filled) */
export function CloseIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 5.25114 5.25114" fill="none" {...props}>
      <path d="M0.11017 0.11017C0.145004 0.0752477 0.186386 0.0475405 0.231945 0.0286356C0.277504 0.00973079 0.326345 0 0.37567 0C0.424996 0 0.473837 0.00973079 0.519395 0.0286356C0.564954 0.0475405 0.606336 0.0752477 0.64117 0.11017L2.62567 2.09542L4.61017 0.11017C4.64504 0.0753042 4.68643 0.0476469 4.73198 0.0287776C4.77754 0.00990828 4.82636 0.000196338 4.87567 0.000196338C4.92498 0.000196338 4.9738 0.00990828 5.01936 0.0287776C5.06491 0.0476469 5.1063 0.0753042 5.14117 0.11017C5.17604 0.145036 5.20369 0.186428 5.22256 0.231982C5.24143 0.277537 5.25114 0.326362 5.25114 0.37567C5.25114 0.424978 5.24143 0.473803 5.22256 0.519358C5.20369 0.564913 5.17604 0.606304 5.14117 0.64117L3.15592 2.62567L5.14117 4.61017C5.17604 4.64504 5.20369 4.68643 5.22256 4.73198C5.24143 4.77754 5.25114 4.82636 5.25114 4.87567C5.25114 4.92498 5.24143 4.9738 5.22256 5.01936C5.20369 5.06491 5.17604 5.1063 5.14117 5.14117C5.1063 5.17604 5.06491 5.20369 5.01936 5.22256C4.9738 5.24143 4.92498 5.25114 4.87567 5.25114C4.82636 5.25114 4.77754 5.24143 4.73198 5.22256C4.68643 5.20369 4.64504 5.17604 4.61017 5.14117L2.62567 3.15592L0.64117 5.14117C0.606304 5.17604 0.564912 5.20369 0.519358 5.22256C0.473803 5.24143 0.424978 5.25114 0.37567 5.25114C0.326362 5.25114 0.277537 5.24143 0.231982 5.22256C0.186428 5.20369 0.145036 5.17604 0.11017 5.14117C0.0753042 5.1063 0.0476469 5.06491 0.0287776 5.01936C0.00990828 4.9738 0.000196338 4.92498 0.000196338 4.87567C0.000196338 4.82636 0.00990828 4.77754 0.0287776 4.73198C0.0476469 4.68643 0.0753042 4.64504 0.11017 4.61017L2.09542 2.62567L0.11017 0.64117C0.0752477 0.606336 0.0475405 0.564954 0.0286356 0.519396C0.00973078 0.473837 0 0.424996 0 0.37567C0 0.326345 0.00973078 0.277504 0.0286356 0.231945C0.0475405 0.186386 0.0752477 0.145004 0.11017 0.11017Z" fill="currentColor" />
    </svg>
  )
}

/** vuesax/linear/arrow-up — directional badge (rotate via className) */
export function ArrowUpIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 9 9" fill="none" {...props}>
      <path d="M6.77635 3.58879L4.5001 1.31254L2.22385 3.58879" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M4.5 7.6875V1.37625" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

/** vuesax/twotone/arrow-left, mirrored to point right for the Send chip */
export function ArrowRightIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <g transform="translate(24,0) scale(-1,1)">
        <path d="M9.57 5.93L3.5 12L9.57 18.07" stroke="currentColor" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
        <path opacity="0.4" d="M20.5 12H3.67" stroke="currentColor" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
      </g>
    </svg>
  )
}

/** vuesax/bulk/calendar-2 (two-tone fill) */
export function CalendarIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path d="M16.75 3.56V2C16.75 1.59 16.41 1.25 16 1.25C15.59 1.25 15.25 1.59 15.25 2V3.5H8.75001V2C8.75001 1.59 8.41001 1.25 8.00001 1.25C7.59001 1.25 7.25001 1.59 7.25001 2V3.56C4.55001 3.81 3.24002 5.42 3.04002 7.81C3.02002 8.1 3.26002 8.34 3.54002 8.34H20.46C20.75 8.34 20.99 8.09 20.96 7.81C20.76 5.42 19.45 3.81 16.75 3.56Z" fill="currentColor" />
      <path opacity="0.4" d="M20 9.84C20.55 9.84 21 10.29 21 10.84V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V10.84C3 10.29 3.45 9.84 4 9.84H20Z" fill="currentColor" />
      <path d="M8.5 15C8.37 15 8.24 14.97 8.12 14.92C8 14.87 7.89001 14.8 7.79001 14.71C7.70001 14.61 7.62999 14.5 7.57999 14.38C7.52999 14.26 7.5 14.13 7.5 14C7.5 13.87 7.52999 13.74 7.57999 13.62C7.62999 13.5 7.70001 13.39 7.79001 13.29C7.89001 13.2 8 13.13 8.12 13.08C8.36 12.98 8.64 12.98 8.88 13.08C9 13.13 9.10999 13.2 9.20999 13.29C9.29999 13.39 9.37001 13.5 9.42001 13.62C9.47001 13.74 9.5 13.87 9.5 14C9.5 14.13 9.47001 14.26 9.42001 14.38C9.37001 14.5 9.29999 14.61 9.20999 14.71C9.10999 14.8 9 14.87 8.88 14.92C8.76 14.97 8.63 15 8.5 15Z" fill="currentColor" />
      <path d="M12 15C11.87 15 11.74 14.97 11.62 14.92C11.5 14.87 11.39 14.8 11.29 14.71C11.11 14.52 11 14.26 11 14C11 13.74 11.11 13.48 11.29 13.29C11.39 13.2 11.5 13.13 11.62 13.08C11.86 12.97 12.14 12.97 12.38 13.08C12.5 13.13 12.61 13.2 12.71 13.29C12.89 13.48 13 13.74 13 14C13 14.26 12.89 14.52 12.71 14.71C12.61 14.8 12.5 14.87 12.38 14.92C12.26 14.97 12.13 15 12 15Z" fill="currentColor" />
      <path d="M8.5 18.5C8.37 18.5 8.24 18.47 8.12 18.42C8 18.37 7.89001 18.3 7.79001 18.21C7.61001 18.02 7.5 17.76 7.5 17.5C7.5 17.24 7.61001 16.98 7.79001 16.79C7.89001 16.7 8 16.63 8.12 16.58C8.36 16.48 8.64 16.48 8.88 16.58C9 16.63 9.10999 16.7 9.20999 16.79C9.38999 16.98 9.5 17.24 9.5 17.5C9.5 17.76 9.38999 18.02 9.20999 18.21C9.10999 18.3 9 18.37 8.88 18.42C8.76 18.47 8.63 18.5 8.5 18.5Z" fill="currentColor" />
    </svg>
  )
}

/** vuesax/bulk/message-edit (two-tone fill — blue edit affordance) */
export function MessageEditIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 16 16" fill="none" {...props}>
      <path opacity="0.1" d="M10.6667 1.33333H5.33333C2.66667 1.33333 1.33333 2.66667 1.33333 5.33333V14C1.33333 14.3667 1.63333 14.6667 2 14.6667H10.6667C13.3333 14.6667 14.6667 13.3333 14.6667 10.6667V5.33333C14.6667 2.66667 13.3333 1.33333 10.6667 1.33333Z" fill="currentColor" />
      <path d="M11.0333 4.97333C10.1933 4.13333 9.38 4.11333 8.52 4.97333L7.99333 5.5C7.94666 5.54667 7.93334 5.61333 7.94668 5.67333C8.27334 6.82 9.18667 7.73333 10.3333 8.06C10.3467 8.06667 10.3667 8.06667 10.3867 8.06667C10.4333 8.06667 10.48 8.04667 10.5133 8.01333L11.0333 7.49333C11.46 7.06667 11.6667 6.66 11.6667 6.24667C11.6667 5.81333 11.46 5.4 11.0333 4.97333Z" fill="currentColor" />
      <path d="M9.56 8.44667C9.43333 8.38667 9.31333 8.32667 9.19999 8.25333C9.10666 8.2 9.01335 8.14 8.92668 8.07333C8.85335 8.02667 8.76666 7.96 8.67999 7.88667C8.66666 7.88 8.64 7.86 8.60667 7.82C8.46667 7.7 8.30666 7.54 8.16 7.37333C8.14666 7.36667 8.12666 7.33333 8.1 7.29333C8.05333 7.24 7.98667 7.15333 7.92001 7.06C7.86667 6.99333 7.80667 6.9 7.75334 6.80667C7.68667 6.69333 7.62001 6.57333 7.56667 6.45333C7.50667 6.32 7.46 6.2 7.41333 6.08L4.90001 8.59333C4.73334 8.76 4.58001 9.06667 4.54667 9.29333L4.35333 10.68C4.30667 10.9733 4.39333 11.2467 4.57333 11.4333C4.72666 11.5867 4.94001 11.6667 5.17334 11.6667C5.22668 11.6667 5.27333 11.66 5.32666 11.6533L6.71334 11.46C6.94001 11.4267 7.24667 11.2733 7.41333 11.1067L9.92668 8.59333C9.80668 8.54667 9.68667 8.5 9.56 8.44667Z" fill="currentColor" />
    </svg>
  )
}
