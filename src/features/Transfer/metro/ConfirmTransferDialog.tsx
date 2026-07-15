'use client'

import * as React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { Dialog } from '@/components/ui/Dialog'
import { BackArrowIcon, EyeIcon } from './TransferFlowIcons'

interface ConfirmTransferDialogProps {
  open: boolean
  onBack: () => void
  onComplete: () => void
}

const confirmationSchema = Yup.object({
  password: Yup.string().required('Password is required'),
})

export function ConfirmTransferDialog({ open, onBack, onComplete }: ConfirmTransferDialogProps) {
  const [visible, setVisible] = React.useState(false)
  const formik = useFormik({
    initialValues: { password: '' },
    validationSchema: confirmationSchema,
    onSubmit: onComplete,
  })

  return (
    <Dialog open={open} onOpenChange={(next) => !next && onBack()} hideCloseButton contentClassName="max-w-[511px] border-[0.5px] border-brand-border p-3 shadow-none">
      <form onSubmit={formik.handleSubmit}>
        <div className="px-3">
          <button type="button" onClick={onBack} aria-label="Back to review" className="flex size-6 items-center justify-center rounded-full bg-brand-surface">
            <BackArrowIcon className="size-4" />
          </button>
        </div>
        <div className="flex flex-col gap-[30px] px-3 py-4">
          <h2 className="text-fig-28 font-semibold text-brand-primary">Confirm Transfer</h2>
          <div className="flex h-28 flex-col justify-center">
            <div className="relative">
              <input
                name="password"
                type={visible ? 'text' : 'password'}
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Password"
                className="h-13.5 w-full rounded-2xl border border-brand-field-border bg-brand-white px-4 pr-12 text-sm outline-none focus:border-brand-primary"
              />
              <button type="button" onClick={() => setVisible((value) => !value)} aria-label={visible ? 'Hide password' : 'Show password'} className="absolute inset-y-0 right-4 flex items-center">
                <EyeIcon className="size-6" />
              </button>
            </div>
            {formik.touched.password && formik.errors.password && <p className="mt-1 text-fig-10 text-brand-danger">{formik.errors.password}</p>}
          </div>
          <button type="submit" className="h-12 w-full cursor-pointer rounded-2xl bg-brand-primary text-base font-semibold text-brand-white transition hover:bg-brand-dark">Confirm and Send</button>
        </div>
      </form>
    </Dialog>
  )
}
