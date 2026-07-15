// src/features/onboarding/components/OnboardingTopBar.tsx
import { LoginIcon } from "@/components/icons/vuesax-nav"
import { ProfileMenu } from "@/components/layout/ProfileMenu"

interface OnboardingTopBarProps {
  title: string
  onLogout: () => void
}

/** Header row above the content panel: page title, logout chip, avatar. */
export function OnboardingTopBar({ title, onLogout }: OnboardingTopBarProps) {
  return (
    <div className="flex h-28.75 shrink-0 items-center justify-between pl-1 pr-9.25">
      <h1 className="font-protest-strike text-fig-28 font-normal leading-[1.4] text-brand-primary">{title}</h1>
      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={onLogout}
          className="flex h-8 items-center gap-2.5 rounded-2xl bg-brand-white py-1.5 pl-2.25 pr-3.5 text-xs font-semibold tracking-wide text-brand-primary transition hover:bg-brand-surface cursor-pointer"
        >
          <LoginIcon className="size-5" />
          Logout
        </button>
        <ProfileMenu initials="AK" />
      </div>
    </div>
  )
}
