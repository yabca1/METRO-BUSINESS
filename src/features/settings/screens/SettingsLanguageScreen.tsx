/** 
 * SettingsLanguageScreen — language selection view
 * Displays a list of available languages with variants (e.g. English UK, Amharic)
 * and allows the user to select their preferred language.
 */
'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { BackChip } from '@/features/auth/components/BackChip'
import { LANGUAGES } from '@/features/settings/data'
import { SettingsNavSidebar } from '@/features/settings/components/SettingsNavSidebar'
import { LanguageList } from '@/features/settings/components/LanguageList'

const languages = LANGUAGES

/** Language selection screen with sidebar navigation */
export function SettingsLanguageScreen() {
  const router = useRouter()
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <div className="w-full max-w-6xl rounded-[30px] border border-brand-border/60 bg-brand-white p-4 shadow-[0_18px_45px_rgba(4,6,15,0.08)] sm:p-6 lg:p-8">
      <div className="flex items-center justify-between">
        <BackChip onClick={() => router.back()} />
        <div className="size-8 rounded-full bg-brand-surface" />
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-[minmax(240px,320px)_minmax(0,1fr)]">
        <SettingsNavSidebar activeLabel="Language" />

        <div className="rounded-[24px] border border-brand-border bg-[rgba(248,248,248,0.7)] p-5 sm:p-7 lg:p-8">
          <div className="max-w-2xl">
            <h1 className="text-fig-28 font-urbanist-semibold text-brand-primary">
              Choose Your language
            </h1>
            <p className="mt-2 text-fig-14 text-brand-muted">
              Select your preferred language
            </p>

            <LanguageList
              languages={languages.map((lang, i) => ({
                ...lang,
                active: i === activeIndex,
              }))}
              onSelect={setActiveIndex}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
