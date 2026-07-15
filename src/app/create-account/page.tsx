'use client'

import * as React from "react"
import { useRouter } from "next/navigation"
import { AuthShell } from "@/features/auth/components/AuthShell"
import { CreateAccountCard } from "@/features/auth/components/CreateAccountCard"
import { OtpVerificationCard } from "@/features/auth/components/OtpVerificationCard"
import { ResetPasswordCard } from "@/features/auth/components/ResetPasswordCard"
import { ROUTES } from "@/constants/routes"

type SignupStep = "details" | "password" | "verification"

export default function CreateAccountPage() {
  const router = useRouter()
  const [step, setStep] = React.useState<SignupStep>("details")
  const [email, setEmail] = React.useState("")

  const handleDetails = (_fullName: string, nextEmail: string) => {
    setEmail(nextEmail)
    setStep("password")
  }

  const handleVerified = () => {
    document.cookie = "mock-session=true; path=/; max-age=86400; samesite=lax"
    router.push(ROUTES.ONBOARDING)
  }

  return (
    <AuthShell stepKey={step}>
      {step === "details" ? (
        <CreateAccountCard onSubmit={handleDetails} onSocialSignup={(nextEmail) => handleDetails("Metro member", nextEmail)} />
      ) : null}
      {step === "password" ? (
        <ResetPasswordCard variant="setup" onBack={() => setStep("details")} onComplete={() => setStep("verification")} />
      ) : null}
      {step === "verification" ? (
        <OtpVerificationCard
          onBack={() => setStep("password")}
          onSuccess={handleVerified}
          description={<>We&apos;ve sent a verification code to <span className="font-semibold text-brand-primary">{email}</span></>}
        />
      ) : null}
    </AuthShell>
  )
}
