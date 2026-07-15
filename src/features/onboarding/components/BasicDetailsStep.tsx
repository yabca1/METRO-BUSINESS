// src/features/onboarding/components/BasicDetailsStep.tsx
'use client'

import * as React from "react"
import { useFormik } from "formik"
import * as Yup from "yup"
import { Button } from "@/components/ui/Button"
import { BrandMark } from "@/components/brand/BrandMark"
import { EditBadgeIcon } from "@/components/icons/vuesax-onboarding"
import { OnboardingField } from "./OnboardingField"

export interface BasicDetails {
  companyName: string
  companyCategory: string
  companySize: string
  companyAddress: string
  companyPhone: string
}

const EMPTY_DETAILS: BasicDetails = {
  companyName: "", companyCategory: "", companySize: "", companyAddress: "", companyPhone: "",
}

const basicDetailsSchema = Yup.object({
  companyName: Yup.string().trim().required("Company name is required"),
  companyCategory: Yup.string().trim().required("Company category is required"),
  companySize: Yup.string().trim().required("Company size is required"),
  companyAddress: Yup.string().trim().required("Company address is required"),
  companyPhone: Yup.string().trim().required("Company phone number is required"),
})

interface BasicDetailsStepProps {
  onSubmit: (details: BasicDetails) => void
}

/** Step 1 — company profile fields, matching the Figma "Basic Detail" form. */
export function BasicDetailsStep({ onSubmit }: BasicDetailsStepProps) {
  const formik = useFormik<BasicDetails>({
    initialValues: EMPTY_DETAILS,
    validationSchema: basicDetailsSchema,
    onSubmit,
  })

  const set = (key: keyof BasicDetails) => (value: string) => formik.setFieldValue(key, value)

  return (
    <form onSubmit={formik.handleSubmit} className="flex mx-auto w-full max-w-118.5 flex-col gap-5">
      <div className="relative size-16.5">
        <BrandMark className="size-full rounded-full" />
        <span className="absolute -bottom-0.5 -right-0.5 flex size-4.5 items-center justify-center rounded-full bg-brand-primary text-brand-white ring-2 ring-brand-white">
          <EditBadgeIcon className="size-3" />
        </span>
      </div>

      <OnboardingField label="Company name" placeholder="Enter your company full name" value={formik.values.companyName} onChange={set("companyName")} />
      <OnboardingField label="Company category" placeholder="Select your company category" value={formik.values.companyCategory} onChange={set("companyCategory")} select />
      <OnboardingField label="Company size" placeholder="Select your company size" value={formik.values.companySize} onChange={set("companySize")} select />
      <OnboardingField label="Company address" placeholder="Enter your company address" value={formik.values.companyAddress} onChange={set("companyAddress")} />
      <OnboardingField label="Company phone number" placeholder="Enter your company primary phone number" value={formik.values.companyPhone} onChange={set("companyPhone")} type="tel" />

      <Button type="submit" variant="primary" className="h-13.5 w-full rounded-2xl text-base font-bold">
        Save &amp; Continue
      </Button>
    </form>
  )
}
