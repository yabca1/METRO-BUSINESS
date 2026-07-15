// src/features/auth/components/LoginEmailCard.tsx
import * as React from "react"
import { useFormik } from "formik"
import * as Yup from "yup"
import Link from "next/link"
import { ROUTES } from "@/constants/routes"
import { Wordmark } from "@/components/brand/Wordmark"
import { TextField } from "@/components/ui/TextField"
import { Button } from "@/components/ui/Button"
import { GoogleIcon } from "@/components/icons/GoogleIcon"
import { AppleIcon } from "@/components/icons/AppleIcon"
import { AuthCard } from "./AuthCard"
import { AuthDivider } from "./AuthDivider"
import { SocialAuthButton } from "./SocialAuthButton"
import { QrLoginCard } from "./QrLoginCard"

interface LoginEmailCardProps {
  email: string
  onEmailChange: (value: string) => void
  onSubmit: (email: string) => void
  onSocialLogin: () => void
}

export function LoginEmailCard({ email, onEmailChange, onSubmit, onSocialLogin }: LoginEmailCardProps) {
  const formik = useFormik({
    initialValues: { email },
    enableReinitialize: true,
    validationSchema: Yup.object({ email: Yup.string().email("Enter a valid email").required("Email is required") }),
    onSubmit: (values) => onSubmit(values.email),
  })

  return (
    <AuthCard className="flex max-w-[927px] flex-col items-stretch gap-12 p-8 md:min-h-[618px] md:flex-row md:gap-0 md:px-[60px] md:pb-[39px] md:pt-[37px]">
      <div className="flex w-full flex-col justify-between md:w-[392px] md:shrink-0">
        <div>
          <Wordmark className="mb-[29px] block" />
          <h1 className="text-2xl font-semibold leading-tight text-brand-primary">Welcome back</h1>
          <p className="mt-1.5 text-fig-12 font-normal text-brand-gray">
            Enter the email associated with your Metro Business account
          </p>

          <form onSubmit={formik.handleSubmit} className="mt-[27px]">
            <TextField
              required
              placeholder="Enter your email"
              value={formik.values.email}
              onChange={(e) => { formik.handleChange(e); onEmailChange(e.target.value) }}
            />
            <Link href={ROUTES.LOST_EMAIL_ACCESS} className="ml-[3px] mt-[17px] block text-sm font-semibold text-brand-link hover:underline">
              Lost access to my email?
            </Link>
            <Button type="submit" variant="primary" disabled={!formik.values.email} className="mt-[27px] h-13.5 w-full rounded-2xl text-base font-bold disabled:opacity-100">
              Continue
            </Button>
          </form>

          <AuthDivider />

          <div className="space-y-[10px]">
            <SocialAuthButton icon={<GoogleIcon className="size-5" />} onClick={onSocialLogin}>
              Continue with Google
            </SocialAuthButton>
            <SocialAuthButton icon={<AppleIcon className="size-5 text-brand-primary" />} onClick={onSocialLogin}>
              Continue with Apple
            </SocialAuthButton>
          </div>
        </div>

        <p className="mt-8 flex h-[45px] items-center justify-center text-base font-normal text-brand-indicator-dark">
          Don&apos;t have an account?
          <Link href={ROUTES.CREATE_ACCOUNT} className="ml-1.5 text-brand-blue underline">Create account</Link>
        </p>
      </div>

      <QrLoginCard />
    </AuthCard>
  )
}
