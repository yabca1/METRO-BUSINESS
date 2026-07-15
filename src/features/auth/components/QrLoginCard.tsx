// src/features/auth/components/QrLoginCard.tsx

import Image from "next/image"

/** The "Log in with QR code" column shown on the right of the email step. */
export function QrLoginCard() {
  return (
    <div className="hidden w-48 shrink-0 flex-col items-center md:ml-48 md:mt-13.75 md:flex md:self-start">
      <Image src="/images/qr.svg" alt="QR code to log in" width={179} height={190} className="h-[190px] w-[179px] *:rounded-2xl" />
      <h3 className="mt-3 w-full text-center text-sm font-semibold leading-6 text-brand-ink">Log in with QR code</h3>
      <p className="w-full text-center text-fig-12 font-normal leading-4 text-brand-muted">
        scan this code with your&nbsp; phone<br />camera to log in instantly
      </p>
    </div>
  )
}
