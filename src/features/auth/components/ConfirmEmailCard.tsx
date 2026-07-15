// src/features/auth/components/ConfirmEmailCard.tsx
'use client'

import * as React from "react"
import { useRouter } from "next/navigation"
import { ROUTES } from "@/constants/routes"
import { CloseIcon } from "@/components/icons/vuesax"
import { SmsNotificationIcon } from "@/components/icons/vuesax-auth"
import { AuthCard } from "./AuthCard"

const RESEND_SECONDS = 15

interface ConfirmEmailCardProps {
  /** Masked email the verification link was sent to, e.g. "a**@test.com". */
  email?: string
  /** Defaults to navigating back to /login. */
  onClose?: () => void
  /**
   * Simulates the user clicking the link in the verification email (there's no real
   * inbox here). When provided, fires once the initial countdown finishes and hides
   * the "Choose another method" link, since it doesn't apply to device verification.
   */
  onVerified?: () => void
}

export function ConfirmEmailCard({ email = "a**@test.com", onClose, onVerified }: ConfirmEmailCardProps) {
  const router = useRouter()
  const [seconds, setSeconds] = React.useState(RESEND_SECONDS)

  React.useEffect(() => {
    if (seconds <= 0) return
    const timer = setTimeout(() => setSeconds((s) => s - 1), 1000)
    return () => clearTimeout(timer)
  }, [seconds])

  React.useEffect(() => {
    if (!onVerified || seconds > 0) return
    onVerified()
  }, [onVerified, seconds])

  const mm = String(Math.floor(seconds / 60)).padStart(2, "0")
  const ss = String(seconds % 60).padStart(2, "0")

  return (
    <AuthCard className="w-93 p-3">
      <div className="mb-3">
        <button
          type="button"
          onClick={onClose ?? (() => router.push(ROUTES.LOGIN))}
          aria-label="Close"
          className="flex size-6 items-center justify-center rounded-full bg-brand-secondary/70 text-brand-primary transition hover:bg-brand-secondary cursor-pointer"
        >
          <CloseIcon className="size-3" />
        </button>
      </div>

      <div className="px-3 pb-4">
        <h2 className="text-fig-20 font-semibold leading-8 tracking-tight text-brand-primary">
          Check your email on this device
        </h2>
        <p className="mt-1.5 text-fig-10 font-normal leading-relaxed text-brand-muted">
          We&apos;ve sent a verification email to {email}. open it on this device and click the button to continue
        </p>
        {!onVerified && (
          <button
            type="button"
            onClick={() => router.push(ROUTES.LOST_EMAIL_ACCESS)}
            className="mt-3 text-sm font-semibold text-brand-blue cursor-pointer"
          >
            Choose another method
          </button>
        )}
      </div>

      <div className="flex h-38 items-center justify-center">
        <SmsNotificationIcon className="size-30 text-brand-primary" />
      </div>

      <div className="flex items-center justify-center gap-1 py-3.5 text-base">
        <span className="text-brand-ink">{mm}:{ss}s</span>
        <button
          type="button"
          onClick={() => setSeconds(RESEND_SECONDS)}
          className="font-semibold text-brand-blue underline cursor-pointer"
        >
          Resend email
        </button>
      </div>
    </AuthCard>
  )
}
