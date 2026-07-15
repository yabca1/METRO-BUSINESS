// src/features/Card/components/CardActionRow.tsx
import { CardSettingIcon, EyeIcon, EyeSlashIcon, FreezeIcon, ReissueIcon } from "@/components/icons/vuesax-card"
import type { ComponentType } from "react"
import { cn } from "@/lib/utils"

interface ActionButtonProps {
  icon: ComponentType<{ className?: string }>
  label: string
  active?: boolean
  onClick?: () => void
}

function ActionButton({ icon: Icon, label, active, onClick }: ActionButtonProps) {
  return (
    <button type="button" onClick={onClick} className="flex flex-col items-center gap-1.5 cursor-pointer">
      <span className={cn(
        "flex size-11.5 items-center justify-center rounded-full border border-brand-indicator bg-brand-secondary/70 text-brand-primary transition",
        active && "bg-brand-primary text-brand-white",
      )}>
        <Icon className="size-6" />
      </span>
      <span className="text-fig-10 font-urbanist-bold text-brand-primary">{label}</span>
    </button>
  )
}

interface CardActionRowProps {
  revealed: boolean
  onToggleReveal: () => void
  frozen: boolean
  onToggleFreeze: () => void
  onReissue?: () => void
  onSetting?: () => void
}

/** The Hide detail / Freeze / Reissue / Setting row beneath the card face. */
export function CardActionRow({ revealed, onToggleReveal, frozen, onToggleFreeze, onReissue, onSetting }: CardActionRowProps) {
  return (
    <div className="flex items-start justify-between px-1">
      <ActionButton icon={revealed ? EyeSlashIcon : EyeIcon} label={revealed ? "Hide detail" : "Show detail"} active={revealed} onClick={onToggleReveal} />
      <ActionButton icon={FreezeIcon} label="Freeze" active={frozen} onClick={onToggleFreeze} />
      <ActionButton icon={ReissueIcon} label="Reissue" onClick={onReissue} />
      <ActionButton icon={CardSettingIcon} label="Setting" onClick={onSetting} />
    </div>
  )
}
