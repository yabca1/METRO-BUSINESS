// src/features/onboarding/components/ProgressRing.tsx
const SIZE = 20
const STROKE = 2
const RADIUS = (SIZE - STROKE) / 2
const CIRCUMFERENCE = 2 * Math.PI * RADIUS

/** Small circular completion indicator — the "0% Completed" ring in the Setup Guide. */
export function ProgressRing({ percent }: { percent: number }) {
  const clamped = Math.min(100, Math.max(0, percent))
  const offset = CIRCUMFERENCE * (1 - clamped / 100)

  return (
    <svg width={SIZE} height={SIZE} viewBox={`0 0 ${SIZE} ${SIZE}`} className="-rotate-90 shrink-0">
      <circle cx={SIZE / 2} cy={SIZE / 2} r={RADIUS} fill="none" strokeWidth={STROKE} className="stroke-brand-secondary" />
      <circle
        cx={SIZE / 2}
        cy={SIZE / 2}
        r={RADIUS}
        fill="none"
        strokeWidth={STROKE}
        strokeLinecap="round"
        strokeDasharray={CIRCUMFERENCE}
        strokeDashoffset={offset}
        className="stroke-brand-primary transition-[stroke-dashoffset] duration-500"
      />
    </svg>
  )
}
