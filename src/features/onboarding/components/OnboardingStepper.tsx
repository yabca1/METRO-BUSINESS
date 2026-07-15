// src/features/onboarding/components/OnboardingStepper.tsx
import { cn } from "@/lib/utils"

export type OnboardingStep = "basic" | "documents"

const badgeClass = "flex h-7.75 w-8 shrink-0 items-center justify-center rounded-full text-base text-brand-white"

/** Two-step "Basic Detail → Legal Documents" horizontal progress indicator. */
export function OnboardingStepper({ step }: { step: OnboardingStep }) {
  const onDocuments = step === "documents"

  return (
    <div className="flex w-full max-w-118.5 items-center justify-between">
      <div className="flex items-center gap-1">
        <span className={cn(badgeClass, "bg-brand-primary")}>1</span>
        <span className="whitespace-nowrap text-sm font-semibold text-[#333]">Basic Detail</span>
      </div>
      <span className={cn("mx-3 h-px flex-1", onDocuments ? "bg-brand-primary" : "bg-[#d4d4d4]")} />
      <div className="flex items-center gap-1">
        <span className={cn(badgeClass, onDocuments ? "bg-brand-primary" : "bg-[#d4d4d4]")}>2</span>
        <span className={cn("whitespace-nowrap text-base font-semibold", onDocuments ? "text-brand-primary" : "text-[#d4d4d4]")}>
          Legal Documents
        </span>
      </div>
    </div>
  )
}
