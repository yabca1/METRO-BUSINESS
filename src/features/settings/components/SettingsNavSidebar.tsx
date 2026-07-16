// src/features/settings/components/SettingsNavSidebar.tsx
'use client'

import { useRouter } from 'next/navigation'
import { SETTINGS_NAV_GROUPS } from '@/features/settings/data'

function SettingsNavItem({
  label,
  icon,
  active,
  href,
  textOnly,
  text,
}: {
  label: string
  icon: string
  active?: boolean
  href?: string
  textOnly?: boolean
  text?: string
}) {
  const router = useRouter()

  return (
    <button
      type="button"
      onClick={() => href && router.push(href)}
      className={[
        'flex w-full items-center gap-3 rounded-[16px] px-3 py-2.5 text-left transition-all duration-200',
        active
          ? 'border border-brand-primary bg-brand-white shadow-sm'
          : 'border border-transparent bg-transparent hover:bg-brand-white/50',
      ].join(' ')}
    >
      <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-brand-surface/80">
        {textOnly ? (
          <span className="font-orbitron text-[20px] font-semibold text-brand-primary">
            {text ?? 'M'}
          </span>
        ) : (
          <img src={icon} alt={label} className="size-6" />
        )}
      </div>
      <span className="text-fig-14 font-urbanist-medium text-brand-primary">{label}</span>
    </button>
  )
}

export function SettingsNavSidebar({ activeLabel }: { activeLabel?: string }) {
  return (
    <div className="space-y-4">
      {SETTINGS_NAV_GROUPS.map((group, groupIndex) => (
        <div
          key={`group-${groupIndex}`}
          className="rounded-[20px] border border-brand-border bg-brand-surface/50 p-3 sm:p-4"
        >
          <div className="space-y-2.5">
            {group.map((item, itemIndex) => (
              <SettingsNavItem
                key={`${item.label}-${itemIndex}`}
                label={item.label}
                icon={item.icon}
                active={item.active ?? item.label === activeLabel}
                href={item.href}
                textOnly={item.textOnly}
                text={item.text}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
