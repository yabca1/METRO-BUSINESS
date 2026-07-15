// src/features/auth/components/ResetPasswordCard.tsx
'use client'

import * as React from "react"
import { useFormik } from "formik"
import * as Yup from "yup"
import { useRouter } from "next/navigation"
import { ROUTES } from "@/constants/routes"
import { PasswordField } from "@/components/ui/PasswordField"
import { Button } from "@/components/ui/Button"
import { AuthPanel } from "./AuthPanel"
import { AuthCardHeader } from "./AuthCardHeader"

const MIN_LENGTH = 8

interface ResetPasswordCardProps {
  /**
   * "reset" is the forgot-password flow; "setup" is the final signup step
   * ("Setup your password"). Only the copy, submit label and destination differ.
   */
  variant?: "reset" | "setup"
  /** Override the default navigation on submit — used when embedded as a step. */
  onComplete?: () => void
  /** Override the default back navigation — used when embedded as a step. */
  onBack?: () => void
}

const COPY = {
  reset: {
    title: "Reset new password",
    description: "Please enter and confirm your new password, you will need to login after reset.",
    submit: "Reset password",
    withBack: true,
  },
  setup: {
    title: "Setup your password",
    description: "Please enter and confirm your password, you will need it to login and access your account.",
    submit: "Set password",
    withBack: false,
  },
} as const

export function ResetPasswordCard({ variant = "reset", onComplete, onBack }: ResetPasswordCardProps) {
  const router = useRouter()
  const copy = COPY[variant]
  const formik = useFormik({
    initialValues: { password: "", confirm: "" },
    validationSchema: Yup.object({
      password: Yup.string().min(MIN_LENGTH, `Use at least ${MIN_LENGTH} characters.`).required("Password is required"),
      confirm: Yup.string().oneOf([Yup.ref("password")], "Passwords do not match.").required("Confirm your password"),
    }),
    onSubmit: () => {
      if (onComplete) return onComplete()
      router.push(variant === "setup" ? ROUTES.DASHBOARD : ROUTES.LOGIN)
    },
  })

  const mismatch = formik.values.confirm.length > 0 && formik.values.password !== formik.values.confirm
  const valid = formik.isValid && formik.values.password.length > 0 && formik.values.confirm.length > 0

  const backHandler = onBack ?? (copy.withBack ? () => router.push(ROUTES.LOGIN) : undefined)

  return (
    <AuthPanel>
      <AuthCardHeader
        title={copy.title}
        description={copy.description}
        wrapDescription
        onBack={backHandler}
      />
      <form onSubmit={formik.handleSubmit} className="mt-8 space-y-4">
        <PasswordField required placeholder="New password" value={formik.values.password} onChange={(e) => formik.setFieldValue("password", e.target.value)} />
        <PasswordField required placeholder="Confirm new password" value={formik.values.confirm} onChange={(e) => formik.setFieldValue("confirm", e.target.value)} />
        {mismatch ? (
          <p className="text-xs font-medium text-brand-danger">Passwords do not match.</p>
        ) : (
          <p className="text-xs font-light text-brand-muted">Use at least {MIN_LENGTH} characters.</p>
        )}
        <Button type="submit" variant="primary" disabled={!valid} className="mt-2 h-13.5 w-full rounded-2xl text-base font-bold">
          {copy.submit}
        </Button>
      </form>
    </AuthPanel>
  )
}
