// src/features/onboarding/constants.ts
import { BriefcaseIcon, BuyCryptoIcon } from "@/components/icons/vuesax-onboarding"
import { ROUTES } from "@/constants/routes"
import type { NavIcon } from "@/constants/navigation"

export interface OnboardingGuideStep {
  id: "business" | "plan"
  href: string
  icon: NavIcon
  title: string
  subtitle: string
}

/** The two top-level items in the "Setup Guide" sidebar. */
export const ONBOARDING_GUIDE: OnboardingGuideStep[] = [
  { id: "business", href: ROUTES.ONBOARDING, icon: BriefcaseIcon, title: "Set up your Business Account", subtitle: "Create your company profile." },
  { id: "plan", href: ROUTES.CHOOSE_PLAN, icon: BuyCryptoIcon, title: "Choose your plan", subtitle: "Choose your payment plan" },
]
