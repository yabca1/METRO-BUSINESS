// src/app/login/page.tsx
'use client'

import * as React from "react"
import { useRouter } from "next/navigation"
import { ROUTES } from "@/constants/routes"
import { AuthShell } from "@/features/auth/components/AuthShell"
import { LoginEmailCard } from "@/features/auth/components/LoginEmailCard"
import { LoginPasswordCard } from "@/features/auth/components/LoginPasswordCard"
import { isDeviceVerified } from "@/lib/deviceVerification"

export default function LoginPage() {
  const router = useRouter()
  const [step, setStep] = React.useState<'email' | 'password'>('email')
  const [email, setEmail] = React.useState("")
  const [password, setPassword] = React.useState("")
  const [isLoading, setIsLoading] = React.useState(false)

  const loginSuccess = () => {
    if (!isDeviceVerified()) {
      // Verification grants the session once completed — see confirm-email/page.tsx.
      const query = new URLSearchParams({ context: 'first-login', email: email || 'you@metrobusiness.com' })
      router.push(`${ROUTES.CONFIRM_EMAIL}?${query}`)
      return
    }
    document.cookie = "mock-session=true; path=/; max-age=86400"
    router.push(ROUTES.DASHBOARD)
  }

  const handleEmailSubmit = (nextEmail: string) => {
    setEmail(nextEmail)
    setStep('password')
  }

  const handlePasswordSubmit = (nextPassword: string) => {
    setPassword(nextPassword)
    setIsLoading(true)
    setTimeout(loginSuccess, 800)
  }

  const backToEmail = () => {
    setStep('email')
    setPassword("")
  }

  return (
    <AuthShell stepKey={step}>
      {step === 'email' ? (
        <LoginEmailCard
          email={email}
          onEmailChange={setEmail}
          onSubmit={handleEmailSubmit}
          onSocialLogin={loginSuccess}
        />
      ) : (
        <LoginPasswordCard
          password={password}
          onPasswordChange={setPassword}
          onSubmit={handlePasswordSubmit}
          onBack={backToEmail}
          isLoading={isLoading}
        />
      )}
    </AuthShell>
  )
}
