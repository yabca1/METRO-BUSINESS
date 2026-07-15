// src/features/auth/components/AuthFooter.tsx
import { ChevronDown } from "lucide-react"

/** Shared footer shown beneath every authentication card. */
export function AuthFooter() {
  return (
    <footer className="flex w-full max-w-4xl flex-col items-center gap-[10px] text-base font-semibold leading-6 text-brand-primary">
      <p className="whitespace-nowrap">Copyright © 2026 Metro Financial Technologies S.C.</p>
      <div className="flex items-center gap-3 text-sm font-medium leading-6 text-brand-muted">
        <button type="button" className="flex h-[30px] w-[90px] items-center justify-end gap-[10px] rounded-[20px] px-[9px] text-brand-primary transition hover:bg-brand-secondary/30 cursor-pointer">
          <span>Eng</span>
          <ChevronDown className="size-2.5" />
        </button>
        <span className="text-brand-muted">•</span>
        <a href="#" className="transition hover:text-brand-primary">Privacy Policy</a>
        <span className="text-brand-muted">•</span>
        <a href="#" className="transition hover:text-brand-primary">Terms of Service</a>
      </div>
    </footer>
  )
}
