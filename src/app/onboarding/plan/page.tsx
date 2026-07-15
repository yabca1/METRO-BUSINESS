'use client'

import { useRouter } from "next/navigation"
import { ROUTES } from "@/constants/routes"
import { OnboardingSidebar } from "@/features/onboarding/components/OnboardingSidebar"
import { OnboardingTopBar } from "@/features/onboarding/components/OnboardingTopBar"
import { OnboardingContentPanel } from "@/features/onboarding/components/OnboardingContentPanel"
import { OnboardingIntro } from "@/features/onboarding/components/OnboardingIntro"
import { ChoosePlanStep } from "@/features/onboarding/components/ChoosePlanStep"

export default function ChoosePlanPage() {
  const router = useRouter()

  const handleContinue = () => {
    document.cookie = "mock-session=true; path=/; max-age=86400"
    router.push(ROUTES.DASHBOARD)
  }
  const handleLogout = () => {
    document.cookie = "mock-session=; path=/; max-age=0"
    router.push(ROUTES.LOGIN)
  }

  return (
    <main className="flex h-screen w-full overflow-hidden bg-[#f7f7f7] font-sans">
      <OnboardingSidebar completedIds={["business"]} />

      <div className="flex min-w-0 flex-1 flex-col">
        <OnboardingTopBar title="Metro Business Account Onboarding" onLogout={handleLogout} />
        <OnboardingContentPanel>
          <OnboardingIntro title="Choose your plan" subtitle="Pick the plan that fits your business — you can change this later." />
          <div className="auth-step-in w-full">
            <ChoosePlanStep onContinue={handleContinue} />
          </div>
        </OnboardingContentPanel>
      </div>
    </main>
  )
}
