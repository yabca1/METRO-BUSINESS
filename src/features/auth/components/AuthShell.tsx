// src/features/auth/components/AuthShell.tsx
import * as React from "react"
import { AuthFooter } from "./AuthFooter"

interface AuthShellProps {
  children: React.ReactNode
  /** Change this to re-trigger the step-in animation when swapping steps without a route change. */
  stepKey?: string | number
}

/** Full-page wrapper for the auth screens: centers the card and pins the footer. */
export function AuthShell({ children, stepKey }: AuthShellProps) {
  return (
    <div className="relative flex min-h-screen select-none flex-col items-center justify-center overflow-hidden bg-[#f7f7f7] px-4 font-sans">
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-[-749px] h-[1629px] w-full"
        viewBox="0 0 1569 1629"
        preserveAspectRatio="none"
        fill="none"
      >
        <defs>
          <linearGradient id="auth-background-gradient" x1="784.5" y1="0" x2="784.5" y2="1629" gradientUnits="userSpaceOnUse">
            <stop stopColor="#A1A1AA" stopOpacity="0.23" />
            <stop offset="1" stopColor="#F8F8F8" stopOpacity="0.23" />
          </linearGradient>
          <filter id="auth-background-texture" x="-2%" y="-2%" width="104%" height="104%">
            <feTurbulence type="fractalNoise" baseFrequency="0.5" numOctaves="1" seed="4" result="noise" />
            <feColorMatrix in="noise" type="saturate" values="0" result="monoNoise" />
            <feComponentTransfer in="monoNoise" result="softNoise">
              <feFuncA type="table" tableValues="0 0.025" />
            </feComponentTransfer>
            <feBlend in="SourceGraphic" in2="softNoise" mode="multiply" />
          </filter>
        </defs>
        <ellipse cx="784.5" cy="814.5" rx="784" ry="814" fill="url(#auth-background-gradient)" filter="url(#auth-background-texture)" />
      </svg>
      <div className="relative  z-10 flex w-full flex-1 items-center justify-center pt-[clamp(32px,11.72vh,120px)]">
        <div key={stepKey} className="flex w-full justify-center auth-step-in">
          {children}
        </div>
      </div>
      <div className="relative z-10 pb-[110px] pt-8">
        <AuthFooter />
      </div>
    </div>
  )
}
