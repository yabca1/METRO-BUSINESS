// src/components/ui/PasswordField.tsx
import * as React from "react"
import { Eye, EyeOff } from "lucide-react"
import { cn } from "@/lib/utils"
import { fieldClasses } from "./TextField"

export type PasswordFieldProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, "type">

export const PasswordField = React.forwardRef<HTMLInputElement, PasswordFieldProps>(
  ({ className, ...props }, ref) => {
    const [visible, setVisible] = React.useState(false)
    const Icon = visible ? EyeOff : Eye
    return (
      <div className="relative">
        <input
          ref={ref}
          type={visible ? "text" : "password"}
          className={cn(fieldClasses, "pr-12", className)}
          {...props}
        />
        <button
          type="button"
          onClick={() => setVisible((v) => !v)}
          aria-label={visible ? "Hide password" : "Show password"}
          className="absolute inset-y-0 right-4 my-auto flex size-6 items-center justify-center text-brand-dark transition hover:opacity-80 cursor-pointer"
        >
          <Icon className="size-6" />
        </button>
      </div>
    )
  },
)
PasswordField.displayName = "PasswordField"
