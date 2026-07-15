// src/features/auth/components/SocialAuthButton.tsx
import * as React from "react"
import { cn } from "@/lib/utils"

interface SocialAuthButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: React.ReactNode
}

/** Bordered "Continue with <provider>" button used on the login screen. */
export function SocialAuthButton({ icon, children, className, ...props }: SocialAuthButtonProps) {
  return (
    <button
      type="button"
      className={cn(
        "flex h-12 w-full items-center justify-center gap-2 rounded-2xl border border-brand-border text-base font-semibold tracking-wide text-brand-primary transition hover:bg-brand-surface active:scale-99 cursor-pointer",
        className,
      )}
      {...props}
    >
      <span className="flex size-5 items-center justify-center">{icon}</span>
      {children}
    </button>
  )
}
