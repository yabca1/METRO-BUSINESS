// src/features/onboarding/components/OnboardingIntro.tsx
interface OnboardingIntroProps {
  title?: string
  subtitle: string
}

/** Heading + welcome subtitle shown above the stepper/content on every onboarding step. */
export function OnboardingIntro({ title = "Set up your Metro business account", subtitle }: OnboardingIntroProps) {
  return (
    <div className="w-full max-w-118.5">
      <h2 className="text-2xl font-semibold leading-[1.2] text-brand-primary">{title}</h2>
      <p className="mt-1 text-sm leading-[1.35] text-brand-gray">{subtitle}</p>
    </div>
  )
}
