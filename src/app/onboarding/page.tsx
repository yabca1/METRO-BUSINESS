'use client'

import * as React from "react"
import { useRouter } from "next/navigation"
import { ROUTES } from "@/constants/routes"
import { OnboardingSidebar } from "@/features/onboarding/components/OnboardingSidebar"
import { OnboardingTopBar } from "@/features/onboarding/components/OnboardingTopBar"
import { OnboardingContentPanel } from "@/features/onboarding/components/OnboardingContentPanel"
import { OnboardingIntro } from "@/features/onboarding/components/OnboardingIntro"
import { OnboardingStepper, type OnboardingStep } from "@/features/onboarding/components/OnboardingStepper"
import { BasicDetailsStep, type BasicDetails } from "@/features/onboarding/components/BasicDetailsStep"
import { LegalDocumentsStep } from "@/features/onboarding/components/LegalDocumentsStep"

export default function OnboardingPage() {
  const router = useRouter()
  const [step, setStep] = React.useState<OnboardingStep>("basic")

  const handleBasicDetailsSubmit = (_details: BasicDetails) => setStep("documents")
  const handleDocumentsSubmit = () => router.push(ROUTES.CHOOSE_PLAN)
  const handleLogout = () => {
    document.cookie = "mock-session=; path=/; max-age=0"
    router.push(ROUTES.LOGIN)
  }

  return (
    <main className="flex h-screen w-full overflow-hidden bg-[#f7f7f7] font-sans">
      <OnboardingSidebar />

      <div className="flex min-w-0 flex-1 flex-col">
        <OnboardingTopBar title="Metro Business Account Onboarding" onLogout={handleLogout} />
        <OnboardingContentPanel>
          <OnboardingIntro subtitle="Welcome, Abebe Kebede. Tell us a bit about your company." />
          <OnboardingStepper step={step} />
          <div key={step} className="auth-step-in w-full">
            {step === "basic" ? (
              <BasicDetailsStep onSubmit={handleBasicDetailsSubmit} />
            ) : (
              <LegalDocumentsStep onSubmit={handleDocumentsSubmit} />
            )}
          </div>
        </OnboardingContentPanel>
      </div>
    </main>
  )
}
