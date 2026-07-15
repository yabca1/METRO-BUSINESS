// src/features/auth/components/OtpVerificationCard.tsx
'use client'

import * as React from "react"
import { useFormik } from "formik"
import * as Yup from "yup"
import { useRouter } from "next/navigation"
import { ROUTES } from "@/constants/routes"
import { OtpInput } from "@/components/ui/OtpInput"
import { Button } from "@/components/ui/Button"
import { AuthPanel } from "./AuthPanel"
import { AuthCardHeader } from "./AuthCardHeader"

const CODE_LENGTH = 6
const RESEND_SECONDS = 59

interface OtpVerificationCardProps {
  /** Where "Verify" navigates on success. Defaults to the reset-password step. */
  onSuccessHref?: string
  /** Where the back chip navigates. Defaults to the forgot-password step. */
  backHref?: string
  /** Override the success navigation entirely — used when embedded as a step. */
  onSuccess?: () => void
  /** Override the back navigation entirely — used when embedded as a step. */
  onBack?: () => void
  description?: React.ReactNode
}

export function OtpVerificationCard({
  onSuccessHref = ROUTES.RESET_PASSWORD,
  backHref = ROUTES.FORGOT_PASSWORD,
  onSuccess,
  onBack,
  description = "We've sent you a verification code to your phone number associated with your Metro Business account",
}: OtpVerificationCardProps) {
  const router = useRouter()
  const [seconds, setSeconds] = React.useState(RESEND_SECONDS)
  const formik = useFormik({
    initialValues: { code: "" },
    validationSchema: Yup.object({ code: Yup.string().length(CODE_LENGTH, "Enter the full code").required("Verification code is required") }),
    onSubmit: () => {
      if (onSuccess) return onSuccess()
      router.push(onSuccessHref)
    },
  })

  React.useEffect(() => {
    if (seconds <= 0) return
    const timer = setTimeout(() => setSeconds((s) => s - 1), 1000)
    return () => clearTimeout(timer)
  }, [seconds])

  const mm = String(Math.floor(seconds / 60)).padStart(2, "0")
  const ss = String(seconds % 60).padStart(2, "0")

  return (
    <AuthPanel>
      <AuthCardHeader
        title="Verification"
        description={description}
        onBack={onBack ?? (() => router.push(backHref))}
      />
      <form onSubmit={formik.handleSubmit} className="mt-8 space-y-4">
        <OtpInput value={formik.values.code} onChange={(value) => formik.setFieldValue("code", value)} length={CODE_LENGTH} autoFocus />
        <div className="flex items-center justify-between text-sm">
          <span className="font-medium text-brand-primary">{mm}:{ss}</span>
          <span className="text-brand-primary">
            Code not received?{" "}
            {seconds > 0 ? (
              <span className="font-semibold text-brand-blue underline">Resend</span>
            ) : (
              <button
                type="button"
                onClick={() => setSeconds(RESEND_SECONDS)}
                className="font-semibold text-brand-blue underline cursor-pointer"
              >
                Resend
              </button>
            )}
          </span>
        </div>
        <Button type="submit" variant="primary" disabled={formik.values.code.length < CODE_LENGTH} className="h-13.5 w-full rounded-2xl text-base font-bold">
          Verify
        </Button>
      </form>
    </AuthPanel>
  )
}
