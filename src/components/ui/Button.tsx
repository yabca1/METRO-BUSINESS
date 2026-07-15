import * as React from "react"
import { cn } from "@/lib/utils"

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline' | 'ghost' | 'gradient' | 'primary' | 'secondary'
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'default', ...props }, ref) => {
    return (
      <button
        className={cn(
          "inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary disabled:pointer-events-none disabled:opacity-50 cursor-pointer active:scale-98",
          variant === 'default' && "bg-brand-primary text-brand-white hover:bg-brand-dark",
          variant === 'primary' && "bg-brand-primary text-brand-white hover:bg-brand-dark",
          variant === 'secondary' && "border border-brand-secondary bg-brand-white text-brand-primary hover:bg-brand-surface",
          variant === 'outline' && "border border-brand-primary bg-transparent text-brand-primary hover:bg-brand-surface",
          variant === 'ghost' && "text-brand-primary hover:bg-brand-surface",
          variant === 'gradient' && "bg-brand-primary text-brand-white shadow-md shadow-brand-shadow/10 hover:bg-brand-dark",
          className,
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"
