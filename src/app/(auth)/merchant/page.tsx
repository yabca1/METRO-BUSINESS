import { redirect } from 'next/navigation'
import { ROUTES } from '@/constants/routes'

export default function MerchantPage() {
  redirect(ROUTES.MERCHANT_PAYMENT_LINK)
}
