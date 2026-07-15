// src/features/auth/components/LoginPasswordCard.tsx
import * as React from "react"
import { useFormik } from "formik"
import * as Yup from "yup"
import Link from "next/link"
import { ROUTES } from "@/constants/routes"
import { PasswordField } from "@/components/ui/PasswordField"
import { Button } from "@/components/ui/Button"
import { AuthPanel } from "./AuthPanel"
import { AuthCardHeader } from "./AuthCardHeader"

interface LoginPasswordCardProps {
  password: string
  onPasswordChange: (value: string) => void
  onSubmit: (password: string) => void
  onBack: () => void
  isLoading: boolean
}

export function LoginPasswordCard({ password, onPasswordChange, onSubmit, onBack, isLoading }: LoginPasswordCardProps) {
  const formik = useFormik({
    initialValues: { password },
    enableReinitialize: true,
    validationSchema: Yup.object({ password: Yup.string().required("Password is required") }),
    onSubmit: (values) => onSubmit(values.password),
  })

  return (
    <AuthPanel>
      <AuthCardHeader
        title="Enter password"
        description="Enter the password associated with your Metro Business account"
        onBack={onBack}
      />

      <form onSubmit={formik.handleSubmit} className="mt-[27px]">
        <PasswordField
          required
          placeholder="Password"
          value={formik.values.password}
          onChange={(e) => { formik.handleChange(e); onPasswordChange(e.target.value) }}
        />
        <Link href={ROUTES.FORGOT_PASSWORD} className="ml-[3px] mt-[17px] block text-sm font-semibold text-brand-link hover:underline">
          Forgot password?
        </Link>
        <Button
          type="submit"
          variant="primary"
          disabled={isLoading || !formik.values.password}
          className="mt-[36px] h-13.5 w-full rounded-2xl text-base font-bold disabled:opacity-100"
        >
          {isLoading ? "Continuing..." : "Continue"}
        </Button>
      </form>
    </AuthPanel>
  )
}
