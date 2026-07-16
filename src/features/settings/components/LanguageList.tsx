// src/features/settings/components/LanguageList.tsx

import { type Language } from '@/features/settings/data'
import { cn } from '@/lib/utils'

function LanguageItem({
  name,
  variant,
  description,
  icon,
  active,
  onSelect,
}: Language & { onSelect: () => void }) {
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
        <div className="flex size-11 shrink-0 items-center justify-center overflow-hidden rounded-full bg-brand-surface/80">
          <img src={icon} alt={name} className="size-11 rounded-full object-cover" />
        </div>
        <div>
          <div className="flex items-center gap-2">
            <p className="text-fig-14 font-urbanist-semibold text-brand-primary">{name}</p>
            <img src="/icons/settings/dot-separator.svg" alt="" className="size-[3px]" />
            <p className="text-fig-14 font-urbanist-semibold text-brand-primary">{variant}</p>
          </div>
          <p className="mt-1 text-fig-12 font-urbanist-medium text-brand-muted">{description}</p>
        </div>
      </div>
      {active && (
        <img src="/icons/settings/selected.svg" alt="selected" className="size-6 shrink-0" />
      )}
    </button>
  )
}

export function LanguageList({
  languages,
  onSelect,
}: {
  languages: Language[]
  onSelect: (index: number) => void
}) {
  if (languages.length === 0) {
    return (
      <p className="text-fig-14 font-urbanist-medium text-brand-muted">
        No languages available.
      </p>
    )
  }

  return (
    <div className="mt-8 space-y-3">
      {languages.map((language, index) => (
        <LanguageItem
          key={`${language.name}-${language.variant}`}
          {...language}
          onSelect={() => onSelect(index)}
        />
      ))}
    </div>
  )
}
