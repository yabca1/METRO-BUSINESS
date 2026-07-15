// src/features/onboarding/components/ChoosePlanStep.tsx
import { Button } from "@/components/ui/Button"

interface ChoosePlanStepProps {
  onContinue: () => void
}

/**
 * "Choose your plan" step. No Figma frame exists for this screen yet (only
 * "Basic Detail" and "Legal Documents" were designed) — placeholder built on
 * the same shell/tokens so it's ready to receive real pricing content later.
 */
export function ChoosePlanStep({ onContinue }: ChoosePlanStepProps) {
  return (
    <div className="flex w-full max-w-118.5 flex-col items-start gap-5">
      <p className="text-sm leading-[1.35] text-brand-gray">
        Pricing plans aren&apos;t final yet — pick the free plan for now, you can upgrade anytime from Settings.
      </p>
      <div className="w-full rounded-2xl border border-brand-primary bg-brand-surface/30 p-5">
        <p className="text-base font-semibold text-brand-primary">Free</p>
        <p className="mt-1 text-xs text-brand-muted">Everything you need to get started with Metro Business.</p>
      </div>
      <Button type="button" variant="primary" onClick={onContinue} className="h-13.5 w-full rounded-2xl text-base font-bold">
        Continue to dashboard
      </Button>
    </div>
  )
}
