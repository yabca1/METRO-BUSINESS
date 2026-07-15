'use client'

import * as React from "react"
import { useFormik } from "formik"
import * as Yup from "yup"
import Link from "next/link"
import { AppleIcon } from "@/components/icons/AppleIcon"
import { GoogleIcon } from "@/components/icons/GoogleIcon"
import { Wordmark } from "@/components/brand/Wordmark"
import { Button } from "@/components/ui/Button"
import { TextField } from "@/components/ui/TextField"
import { ROUTES } from "@/constants/routes"
import { AuthCard } from "./AuthCard"
import { AuthDivider } from "./AuthDivider"
import { SocialAuthButton } from "./SocialAuthButton"

interface CreateAccountCardProps {
  /** Fired with the entered details when the form is submitted. */
  onSubmit: (fullName: string, email: string) => void
  /** Fired when the user picks a social provider. */
  onSocialSignup: (email: string) => void
}

export function CreateAccountCard({ onSubmit, onSocialSignup }: CreateAccountCardProps) {
  const formik = useFormik({
    initialValues: { fullName: "", email: "" },
    validationSchema: Yup.object({
      fullName: Yup.string().trim().required("Full name is required"),
      email: Yup.string().email("Enter a valid email").required("Email is required"),
    }),
    onSubmit: (values) => onSubmit(values.fullName, values.email),
  })

  return (
    <AuthCard className="relative -mt-[9px] min-h-[695px] max-w-[520px] px-8 pb-6 pt-9 md:px-16">
      <Wordmark className="block" />

      <div className="mt-[29px]">
        <h1 className="text-2xl font-semibold leading-[1.2] text-brand-primary">Create an account</h1>
        <p className="mt-1.5 text-fig-12 font-normal text-brand-gray">
          Create your account to become our Metro Business member
        </p>
      </div>

      <form onSubmit={formik.handleSubmit} className="mt-[27px]">
        <div className="space-y-4">
          <TextField
            required
            autoComplete="name"
            placeholder="Enter your full name"
            value={formik.values.fullName}
            onChange={formik.handleChange}
          />
          <TextField
            required
            type="email"
            autoComplete="email"
            placeholder="Enter your email"
            value={formik.values.email}
            onChange={formik.handleChange}
          />
        </div>

        <Button
          type="submit"
          variant="primary"
          disabled={!formik.values.fullName || !formik.values.email}
          className="mt-[30px] h-13.5 w-full rounded-2xl text-base font-bold disabled:opacity-100"
        >
          Create your account
        </Button>
      </form>

      <AuthDivider className="-left-1" />

      <div className="relative -left-1 w-full space-y-[10px]">
        <SocialAuthButton icon={<GoogleIcon className="size-5" />} onClick={() => onSocialSignup("you@metrobusiness.com")}>
          Sign up with Google
        </SocialAuthButton>
        <SocialAuthButton icon={<AppleIcon className="size-5 text-brand-primary" />} onClick={() => onSocialSignup("you@metrobusiness.com")}>
          Sign up with Apple
        </SocialAuthButton>
      </div>

      <p className="mt-2 flex h-[45px] items-center justify-center whitespace-nowrap text-base font-normal text-brand-indicator-dark">
        Already have an account?
        <Link href={ROUTES.LOGIN} className="ml-1.5 text-brand-blue underline">Sign in Instead</Link>
      </p>

      <p className="absolute bottom-6 left-1/2 w-[calc(100%-64px)] -translate-x-1/2 text-center text-fig-12 font-normal leading-[1.4] text-brand-muted md:w-[410px]">
        By continuing, you agree to our <a href="#" className="text-brand-blue">Terms of Service</a> and acknowledge that you have read our <a href="#" className="text-brand-blue">Privacy Policy</a> to learn how we collect, use and share your data.
      </p>
    </AuthCard>
  )
}
