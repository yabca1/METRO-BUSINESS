// src/components/ui/TextField.tsx
import * as React from "react"
import { cn } from "@/lib/utils"

/** Shared input styling so every field in the app looks identical (54px tall per Figma). */
export const fieldClasses = cn(
  "h-13.5 w-full rounded-2xl border border-brand-field-border bg-brand-white",
  "px-4 text-sm text-brand-dark placeholder:text-brand-muted",
  "outline-none transition font-urbanist",
  "focus:border-brand-primary focus:ring-1 focus:ring-brand-primary",
  "disabled:opacity-50 disabled:pointer-events-none",
)

export type TextFieldProps = React.InputHTMLAttributes<HTMLInputElement>

export const TextField = React.forwardRef<HTMLInputElement, TextFieldProps>(
  ({ className, type = "text", ...props }, ref) => (
    <input ref={ref} type={type} className={cn(fieldClasses, className)} {...props} />
  ),
)
TextField.displayName = "TextField"
