// src/app/lost-email-access/page.tsx
import { AuthShell } from "@/features/auth/components/AuthShell"
import { LostEmailAccessCard } from "@/features/auth/components/LostEmailAccessCard"

export default function LostEmailAccessPage() {
  return (
    <AuthShell>
      <LostEmailAccessCard />
    </AuthShell>
  )
}
