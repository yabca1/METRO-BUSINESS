// src/features/auth/components/ForgotPasswordCard.tsx
'use client'

import * as React from "react"
import { useFormik } from "formik"
import * as Yup from "yup"
import { useRouter } from "next/navigation"
import { ROUTES } from "@/constants/routes"
import { TextField } from "@/components/ui/TextField"
import { Button } from "@/components/ui/Button"
import { AuthPanel } from "./AuthPanel"
import { AuthCardHeader } from "./AuthCardHeader"
import { ConfirmEmailDialog } from "./ConfirmEmailDialog"

export function ForgotPasswordCard() {
  const router = useRouter()
  const [confirmOpen, setConfirmOpen] = React.useState(false)
  const formik = useFormik({
    initialValues: { email: "" },
    validationSchema: Yup.object({ email: Yup.string().email("Enter a valid email").required("Email is required") }),
    onSubmit: () => setConfirmOpen(true),
  })

  return (
    <AuthPanel>
      <AuthCardHeader
        title="Forgot password"
        description="Enter the email associated with your account and we'll send you a verification code."
        onBack={() => router.push(ROUTES.LOGIN)}
      />
      <form onSubmit={formik.handleSubmit} className="mt-8 space-y-6">
        <TextField
          required
          type="email"
          placeholder="Enter your email"
          value={formik.values.email}
          onChange={formik.handleChange}
        />
        <Button type="submit" variant="primary" disabled={!formik.values.email} className="h-13.5 w-full rounded-2xl text-base font-bold">
          Send code
        </Button>
      </form>

      <ConfirmEmailDialog
        open={confirmOpen}
        email={formik.values.email}
        description="Is this the email associated with your account?"
        onOpenChange={setConfirmOpen}
        onConfirm={() => router.push(ROUTES.VERIFY)}
      />
    </AuthPanel>
  )
}
