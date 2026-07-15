// src/features/onboarding/components/OnboardingField.tsx
import * as React from "react"
import { ChevronRight } from "lucide-react"
import { fieldClasses } from "@/components/ui/TextField"
import { cn } from "@/lib/utils"

interface OnboardingFieldProps {
  label: string
  placeholder: string
  value: string
  onChange: (value: string) => void
  /** Renders as a tappable row with a trailing chevron instead of free text entry. */
  select?: boolean
  onSelectClick?: () => void
  type?: string
  required?: boolean
}

/** Labeled input matching the "Company name / category / size" rows in Figma. */
export function OnboardingField({
  label, placeholder, value, onChange, select, onSelectClick, type = "text", required = true,
}: OnboardingFieldProps) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-semibold leading-[1.2] text-brand-ink">{label}</span>
      {select ? (
        <button
          type="button"
          onClick={onSelectClick}
          className={cn(fieldClasses, "flex items-center justify-between text-left", !value && "text-brand-muted")}
        >
          <span className="truncate">{value || placeholder}</span>
          <ChevronRight className="size-4.5 shrink-0 text-brand-primary" />
        </button>
      ) : (
        <input
          required={required}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={fieldClasses}
        />
      )}
    </label>
  )
}
