'use client'

import * as React from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { AuthShell } from "@/features/auth/components/AuthShell"
import { ConfirmEmailCard } from "@/features/auth/components/ConfirmEmailCard"
import { ROUTES } from "@/constants/routes"
import { DEVICE_VERIFIED_COOKIE } from "@/lib/deviceVerification"

function ConfirmEmailContent() {
  const router = useRouter()
  const params = useSearchParams()
  const context = params.get('context')
  const email = params.get('email') ?? undefined

  // Each flow that lands on this screen resolves the "verified" moment differently.
  const onVerified =
    context === 'first-login'
      ? () => {
          document.cookie = `${DEVICE_VERIFIED_COOKIE}=true; path=/; max-age=31536000`
          document.cookie = "mock-session=true; path=/; max-age=86400"
          router.push(ROUTES.DASHBOARD)
        }
      : context === 'signup'
        ? () => {
            const query = new URLSearchParams({ context: 'signup', ...(email ? { email } : {}) })
            router.push(`${ROUTES.VERIFY}?${query}`)
          }
        : undefined

  return <ConfirmEmailCard email={email} onVerified={onVerified} />
}

export default function ConfirmEmailPage() {
  return (
    <AuthShell>
      <React.Suspense fallback={null}>
        <ConfirmEmailContent />
      </React.Suspense>
    </AuthShell>
  )
}
