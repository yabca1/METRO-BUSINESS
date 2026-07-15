// src/app/reset-password/page.tsx
'use client'

import * as React from "react"
import { useSearchParams } from "next/navigation"
import { AuthShell } from "@/features/auth/components/AuthShell"
import { ResetPasswordCard } from "@/features/auth/components/ResetPasswordCard"

function ResetPasswordContent() {
  const params = useSearchParams()
  const isSignup = params.get("context") === "signup"

  return <ResetPasswordCard variant={isSignup ? "setup" : "reset"} />
}

export default function ResetPasswordPage() {
  return (
    <AuthShell>
      <React.Suspense fallback={null}>
        <ResetPasswordContent />
      </React.Suspense>
    </AuthShell>
  )
}
