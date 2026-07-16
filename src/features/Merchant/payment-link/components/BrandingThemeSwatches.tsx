'use client'

// Merchant — Branding theme color swatches
import * as React from 'react'
import { cn } from '@/lib/utils'

interface BrandingThemeSwatchesProps {
  theme: 'blue' | 'purple' | 'pink' | 'teal'
  onThemeChange: (theme: 'blue' | 'purple' | 'pink' | 'teal') => void
}

export function BrandingThemeSwatches({ theme, onThemeChange }: BrandingThemeSwatchesProps) {
  return (
    <div className="flex gap-3">
      {THEME_SWATCHES.map((swatch) => {
        const selected = theme === swatch.id
        return (
          <button
            key={swatch.id}
            type="button"
            aria-label={`Theme ${swatch.id}`}
            onClick={() => onThemeChange(swatch.id)}
            className={cn(
              'size-10 rounded-full transition cursor-pointer',
              swatch.className,
              selected && 'ring-2 ring-brand-primary ring-offset-2',
            )}
          />
        )
      })}
    </div>
  )
}

const THEME_SWATCHES = [
  { id: 'blue' as const, className: 'bg-[#4B8BF5]' },
  { id: 'purple' as const, className: 'bg-[#8B5CF6]' },
  { id: 'pink' as const, className: 'bg-[#EC4899]' },
  { id: 'teal' as const, className: 'bg-[#14B8A6]' },
]
