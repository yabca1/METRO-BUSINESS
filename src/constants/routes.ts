// src/constants/routes.ts
export const ROUTES = {
  HOME:                  '/',
  DASHBOARD:             '/dashboard',

  // Authentication
  LOGIN:                 '/login',
  CREATE_ACCOUNT:        '/create-account',
  ONBOARDING:            '/onboarding',
  CHOOSE_PLAN:           '/onboarding/plan',
  FORGOT_PASSWORD:       '/forgot-password',
  VERIFY:                '/verify',
  RESET_PASSWORD:        '/reset-password',
  CONFIRM_EMAIL:         '/confirm-email',
  LOST_EMAIL_ACCESS:     '/lost-email-access',

  // Primary navigation
  TRANSFER:              '/transfer',
  METRO_TRANSFER:        '/transfer/metro',
  BANK_TRANSFER:         '/transfer/bank',
  TRANSFER_RECIPIENT:    '/transfer/recipient',
  PAYMENT:               '/payment',
  EXPENSE:               '/expense',
  PRODUCTS:              '/products',
  MERCHANT:              '/merchant',
  MERCHANT_PAYMENT_LINK: '/merchant/payment-link',
  MERCHANT_PAYMENT_LINK_NEW: '/merchant/payment-link/new',
  MERCHANT_PAYMENT_LINK_SETTINGS: '/merchant/payment-link/settings',
  MERCHANT_PAYMENT_LINK_BRANDING: '/merchant/payment-link/settings/branding',
  MERCHANT_QR:           '/merchant/qr-service',
  MERCHANT_QR_NEW:       '/merchant/qr-service/new',
  MERCHANT_QR_SETTINGS:  '/merchant/qr-service/settings',
  MERCHANT_IN_STORE:     '/merchant/in-store',
  CARD:                  '/card',
  CARD_REQUESTS:         '/card/requests',
  CARD_SPEND_PROGRAMS:   '/card/spend-programs',
  TEAM:                  '/team',
  REWARDS:               '/rewards',
  INSIGHT:               '/insight',

  // Existing
  SETTINGS:    '/settings',
} as const
