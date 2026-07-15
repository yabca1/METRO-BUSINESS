// src/components/ui/Avatar.tsx
import { cn } from "@/lib/utils"

interface AvatarProps {
  initials?: string
  src?: string
  alt?: string
  className?: string
}

/** Circular avatar: image when `src` is given, otherwise initials on the brand fill. */
export function Avatar({ initials, src, alt = "", className }: AvatarProps) {
  return (
    <span
      className={cn(
        "inline-flex size-11 items-center justify-center overflow-hidden rounded-full",
        "bg-brand-primary text-sm font-semibold text-brand-white",
        className,
      )}
    >
      {src ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={src} alt={alt} className="size-full object-cover" />
      ) : (
        initials
      )}
    </span>
  )
}
