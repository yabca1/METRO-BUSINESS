// src/features/dashboard/components/QuickActions.tsx
import { quickActions } from "../data"

export function QuickActions() {
  return (
    <ul className="grid grid-cols-4 gap-3 sm:grid-cols-7">
      {quickActions.map((action) => (
        <li key={action.id}>
          <button
            type="button"
            className="flex w-full flex-col items-center gap-2 rounded-2xl bg-brand-surface px-2 py-3 transition hover:bg-brand-secondary/50 cursor-pointer"
          >
            <span className="flex size-7 items-center justify-center text-brand-primary">
              <img src={action.icon} alt="" className="size-5" />
            </span>
            <span className="text-xs font-semibold text-brand-primary">{action.label}</span>
          </button>
        </li>
      ))}
    </ul>
  )
}
