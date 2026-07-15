// src/features/onboarding/components/LegalDocumentsStep.tsx
'use client'

import * as React from "react"
import { useFormik } from "formik"
import * as Yup from "yup"
import { Button } from "@/components/ui/Button"
import { OnboardingField } from "./OnboardingField"
import { DocumentUploadField } from "./DocumentUploadField"

interface LegalDocumentsStepProps {
  onSubmit: () => void
}

interface LegalDocumentsValues {
  businessLicense: File | string
  commercialRegistration: File | string
  tinCertification: File | string
  tin: string
  vat: string
}

const legalDocumentsSchema = Yup.object({
  businessLicense: Yup.mixed<File | string>().required("Business license is required"),
  commercialRegistration: Yup.mixed<File | string>().required("Commercial registration license is required"),
  tinCertification: Yup.mixed<File | string>().required("TIN certification is required"),
  tin: Yup.string().trim().required("TIN number is required"),
  vat: Yup.string().trim(),
})

/** Step 2 — document uploads + tax IDs, matching the Figma "Legal Documents" frame. */
export function LegalDocumentsStep({ onSubmit }: LegalDocumentsStepProps) {
  const formik = useFormik<LegalDocumentsValues>({
    initialValues: {
      businessLicense: "Business_license.pdf",
      commercialRegistration: "",
      tinCertification: "",
      tin: "",
      vat: "",
    },
    validationSchema: legalDocumentsSchema,
    onSubmit: () => onSubmit(),
  })

  return (
    <form onSubmit={formik.handleSubmit} className="flex mx-auto w-full max-w-118.5 flex-col gap-5">
      <DocumentUploadField label="Business License" hint="Click to upload Business License" defaultFileName="Business_license.pdf" required onFileChange={(file) => formik.setFieldValue("businessLicense", file ?? "")} />
      <DocumentUploadField label="Commercial Registration License" hint="Click to upload Commercial Registration License" required onFileChange={(file) => formik.setFieldValue("commercialRegistration", file ?? "")} />
      <DocumentUploadField label="TIN Certification" hint="Click to upload TIN Certification" required onFileChange={(file) => formik.setFieldValue("tinCertification", file ?? "")} />
      <OnboardingField label="TIN number" placeholder="Enter your company TIN number" value={formik.values.tin} onChange={(value) => formik.setFieldValue("tin", value)} />
      <OnboardingField label="VAT number" placeholder="Enter your company VAT number" value={formik.values.vat} onChange={(value) => formik.setFieldValue("vat", value)} required={false} />

      <Button type="submit" variant="primary" className="h-13.5 w-full rounded-2xl text-base font-bold">
        Save &amp; Continue
      </Button>
    </form>
  )
}
