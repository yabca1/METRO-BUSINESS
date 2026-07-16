'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { cn } from '@/lib/utils'
import { BackChip } from '@/features/auth/components/BackChip'
import { SettingsNavSidebar } from '@/features/settings/components/SettingsNavSidebar'

type AppearanceOption = {
  title: string
  description: string
  icon: string
  active?: boolean
}

const appearanceOptions: AppearanceOption[] = [
  {
    title: 'Same as device',
    description: 'Use light or dark mode depending on your device settings',
    icon: '/icons/settings/theme-device.svg',
    active: true,
  },
  {
    title: 'Light mode',
    description: 'Click here to change to light mode',
    icon: '/icons/settings/theme-light.svg',
  },
  {
    title: 'Dark mode',
    description: 'Click here to change to dark mode',
    icon: '/icons/settings/theme-dark.svg',
  },
]

function AppearanceOptionCard({
  title,
  description,
  icon,
  active,
  onSelect,
}: AppearanceOption & { onSelect: () => void }) {
  return (
    <button
      type="button"
      onClick={onSelect}
      className={cn(
        'flex w-full items-center justify-between gap-4 rounded-[16px] border px-4 py-4 text-left transition-all duration-200',
        active
          ? 'border-brand-primary bg-brand-white shadow-sm'
          : 'border-brand-border bg-brand-surface/40 hover:border-brand-primary/40 hover:bg-brand-white/60',
      )}
    >
      <div className="flex items-center gap-3">
        <div className="flex size-11 shrink-0 items-center justify-center rounded-full bg-brand-surface/80">
          <img src={icon} alt={title} className="size-8" />
        </div>
        <div>
          <p className="text-fig-14 font-urbanist-semibold text-brand-primary">{title}</p>
          <p className="mt-1 text-fig-12 font-urbanist-medium text-brand-muted">{description}</p>
        </div>
      </div>
      {active && (
        <img src="/icons/settings/selected.svg" alt="selected" className="size-6 shrink-0" />
      )}
    </button>
  )
}

export function SettingsScreen() {
  const router = useRouter()
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <div className="w-full max-w-6xl rounded-[30px] border border-brand-border/60 bg-brand-white p-4 shadow-[0_18px_45px_rgba(4,6,15,0.08)] sm:p-6 lg:p-8">
      <div className="flex items-center justify-between">
        <BackChip onClick={() => router.back()} />
        <div className="size-8 rounded-full bg-brand-surface" />
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-[minmax(240px,320px)_minmax(0,1fr)]">
        <SettingsNavSidebar activeLabel="Appearance" />

        <div className="rounded-[24px] border border-brand-border bg-[rgba(248,248,248,0.7)] p-5 sm:p-7 lg:p-8">
          <div className="max-w-2xl">
            <h1 className="text-fig-28 font-urbanist-semibold text-brand-primary">
              Appearance
            </h1>
            <p className="mt-2 text-fig-14 text-brand-muted">
              Select your preferred mode of appearance
            </p>

            <div className="mt-8 space-y-3">
              {appearanceOptions.map((option, index) => (
                <AppearanceOptionCard
                  key={option.title}
                  {...option}
                  active={index === activeIndex}
                  onSelect={() => setActiveIndex(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
