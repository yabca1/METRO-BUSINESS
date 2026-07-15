// src/app/verify/page.tsx
'use client'

import * as React from "react"
import { useSearchParams } from "next/navigation"
import { AuthShell } from "@/features/auth/components/AuthShell"
import { OtpVerificationCard } from "@/features/auth/components/OtpVerificationCard"
import { ROUTES } from "@/constants/routes"

function VerifyContent() {
  const params = useSearchParams()
  const isSignup = params.get("context") === "signup"
  const email = params.get("email")

  const signupQuery = new URLSearchParams({ context: "signup", ...(email ? { email } : {}) })

  return (
    <OtpVerificationCard
      onSuccessHref={isSignup ? `${ROUTES.RESET_PASSWORD}?${signupQuery}` : ROUTES.RESET_PASSWORD}
      backHref={isSignup ? ROUTES.CREATE_ACCOUNT : ROUTES.FORGOT_PASSWORD}
    />
  )
}

export default function VerifyPage() {
  return (
    <AuthShell>
      <React.Suspense fallback={null}>
        <VerifyContent />
      </React.Suspense>
    </AuthShell>
  )
}
