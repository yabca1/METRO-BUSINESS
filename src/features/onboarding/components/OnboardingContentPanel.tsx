// src/features/onboarding/components/OnboardingContentPanel.tsx
import * as React from "react"

/** White rounded panel that hosts the stepper + active step form. */
export function OnboardingContentPanel({ children }: { children: React.ReactNode }) {
  return (
    <section className="min-h-0 flex-1 overflow-y-auto rounded-tl-[30px] rounded-tr-[30px] bg-brand-white px-9.25 pb-14 pt-10.5">
      <div className="flex w-full flex-col items-center gap-9">
        {children}
      </div>
    </section>
  )
}
