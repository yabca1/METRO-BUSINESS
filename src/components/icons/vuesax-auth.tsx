import type * as React from "react"

type IconProps = React.SVGProps<SVGSVGElement>

/** vuesax/bulk/sms-notification — used on the "check your email" auth confirmation card */
export function SmsNotificationIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 120 120" fill="none" {...props}>
      <path d="M97.5 40C104.404 40 110 34.4036 110 27.5C110 20.5964 104.404 15 97.5 15C90.5964 15 85 20.5964 85 27.5C85 34.4036 90.5964 40 97.5 40Z" fill="currentColor" />
      <path opacity="0.4" d="M103.6 46.55C106.75 45.55 110 48 110 51.35V77.55C110 95.05 100 102.55 85 102.55H35C20 102.55 10 95.05 10 77.55V42.55C10 25.05 20 17.55 35 17.55H73.0499C76.2999 17.55 78.4999 20.55 77.8999 23.7C77.2999 26.65 77.4 29.8 78.3 33.05C80.15 39.75 85.6 45.1 92.3 46.85C96.25 47.85 100.1 47.65 103.6 46.55Z" fill="currentColor" />
      <path d="M60 64.35C55.8 64.35 51.55 63.05 48.3 60.4L32.65 47.9C31.05 46.6 30.75 44.25 32.05 42.65C33.35 41.05 35.6999 40.7501 37.2999 42.0501L52.9499 54.5501C56.7499 57.6001 63.1999 57.6001 66.9999 54.5501L72.8999 49.85C74.4999 48.55 76.9 48.8 78.15 50.45C79.45 52.05 79.2 54.45 77.55 55.7L71.6499 60.4C68.4499 63.05 64.2 64.35 60 64.35Z" fill="currentColor" />
    </svg>
  )
}
