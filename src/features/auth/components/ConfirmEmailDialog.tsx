// src/features/auth/components/ConfirmEmailDialog.tsx
import { Dialog } from "@/components/ui/Dialog"

interface ConfirmEmailDialogProps {
  open: boolean
  email: string
  description?: string
  onOpenChange: (open: boolean) => void
  onConfirm: () => void
}

/** Popup asking the user to confirm the email before continuing a recovery flow. */
export function ConfirmEmailDialog({
  open,
  email,
  description = "Is this the email you've lost access to?",
  onOpenChange,
  onConfirm,
}: ConfirmEmailDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange} hideCloseButton contentClassName="max-w-93 bg-white rounded-2xl p-5" ariaLabelledBy="confirm-email-title">
      <h2 id="confirm-email-title" className="font-poppins-semibold text-base font-semibold leading-8 tracking-tight text-brand-primary">
        {email}
      </h2>
      <p className="font-poppins-regular text-fig-12 font-normal text-brand-muted">{description}</p>

      <div className="mt-5 flex items-center gap-3">
        <button
          type="button"
          onClick={() => onOpenChange(false)}
          className="flex-1 rounded-2xl bg-brand-secondary/10 py-3.5 text-fig-12 font-semibold text-brand-primary transition hover:bg-brand-secondary/20 cursor-pointer"
        >
          Go back
        </button>
        <button
          type="button"
          onClick={onConfirm}
          className="flex-1 rounded-2xl bg-brand-primary py-3.5 text-fig-12 font-semibold text-brand-white transition hover:bg-brand-dark cursor-pointer"
        >
          Confirm
        </button>
      </div>
    </Dialog>
  )
}
