// src/app/forgot-password/page.tsx
import { AuthShell } from "@/features/auth/components/AuthShell"
import { ForgotPasswordCard } from "@/features/auth/components/ForgotPasswordCard"

export default function ForgotPasswordPage() {
  return (
    <AuthShell>
      <ForgotPasswordCard />
    </AuthShell>
  )
}
