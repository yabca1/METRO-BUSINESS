'use client'

import { useRouter } from 'next/navigation'
import { Bell, CalendarDays, Palette } from 'lucide-react'
import { BackChip } from '@/features/auth/components/BackChip'
import { ROUTES } from '@/constants/routes'

const SETTINGS = [
  {
    section: 'General',
    items: [
      {
        title: 'Default expiry date',
        description: 'Set the default number of days your payment link will be active',
        icon: CalendarDays,
        href: ROUTES.MERCHANT_PAYMENT_LINK_SETTINGS,
      },
    ],
  },
  {
    section: 'Checkout',
    items: [
      {
        title: 'Branding',
        description: 'Manage the way your payment link looks, edit your contact details and business address',
        icon: Palette,
        href: ROUTES.MERCHANT_PAYMENT_LINK_BRANDING,
      },
    ],
  },
  {
    section: 'Notifications',
    items: [
      {
        title: 'Notifications',
        description: 'Get notified each time a customer successfully make a payment',
        icon: Bell,
        href: ROUTES.MERCHANT_PAYMENT_LINK_SETTINGS,
      },
    ],
  },
]

export function PaymentLinkSettingsScreen() {
  const router = useRouter()

  return (
    <div className="mx-auto w-full rounded-t-3xl bg-brand-white px-6 py-7">
      <div className="mx-auto max-w-xl">
        <BackChip onClick={() => router.push(ROUTES.MERCHANT_PAYMENT_LINK)} />
        <h1 className="mt-6 text-fig-28 font-urbanist-semibold text-brand-primary">Payment link settings</h1>

        <div className="mt-8 space-y-8">
          {SETTINGS.map((group) => (
            <section key={group.section}>
              <h2 className="mb-2.5 text-fig-14 font-urbanist-semibold text-brand-primary">{group.section}</h2>
              <div className="space-y-3">
                {group.items.map((item) => {
                  const Icon = item.icon
                  return (
                    <button
                      key={item.title}
                      type="button"
                      onClick={() => router.push(item.href)}
                      className="flex w-full items-start gap-3.5 rounded-2xl border border-brand-border bg-brand-surface/40 px-3 py-4 text-left transition hover:bg-brand-surface cursor-pointer"
                    >
                      <span className="flex size-11.5 shrink-0 items-center justify-center rounded-full bg-brand-secondary text-brand-primary">
                        <Icon className="size-5" />
                      </span>
                      <span className="min-w-0">
                        <span className="block text-fig-14 font-urbanist-semibold text-brand-primary">
                          {item.title}
                        </span>
                        <span className="mt-0.5 block text-fig-12 font-urbanist-medium text-brand-muted">
                          {item.description}
                        </span>
                      </span>
                    </button>
                  )
                })}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  )
}
