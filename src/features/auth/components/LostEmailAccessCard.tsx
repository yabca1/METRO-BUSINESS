// src/features/auth/components/LostEmailAccessCard.tsx
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

export function LostEmailAccessCard() {
  const router = useRouter()
  const formik = useFormik({
    initialValues: { email: "" },
    validationSchema: Yup.object({ email: Yup.string().email("Enter a valid email").required("Email is required") }),
    onSubmit: () => router.push(ROUTES.CONFIRM_EMAIL),
  })

  return (
    <AuthPanel>
      <AuthCardHeader
        title="Enter Email address"
        description="Enter the email associated with your Metro Business account. You can recover access only if your email is verified"
        onBack={() => router.push(ROUTES.LOGIN)}
      />
      <form onSubmit={formik.handleSubmit} className="mt-8 space-y-4">
        <TextField
          required
          type="email"
          placeholder="Enter your email"
          value={formik.values.email}
          onChange={formik.handleChange}
        />
        <Button type="submit" variant="primary" disabled={!formik.values.email} className="mt-2 h-13.5 w-full rounded-2xl text-base font-bold">
          Continue
        </Button>
      </form>
    </AuthPanel>
  )
}
