// src/proxy.ts
import { ROUTES } from '@/constants/routes'
import type { NextRequest } from 'next/server'

/** Routes reachable without an authenticated session. */
const PUBLIC_ROUTES = [
  ROUTES.LOGIN,
  ROUTES.CREATE_ACCOUNT,
  ROUTES.FORGOT_PASSWORD,
  ROUTES.VERIFY,
  ROUTES.RESET_PASSWORD,
  ROUTES.CONFIRM_EMAIL,
  ROUTES.LOST_EMAIL_ACCESS,
]

export function proxy(req: NextRequest) {
  const { pathname } = req.nextUrl
  const isPublicRoute = PUBLIC_ROUTES.some((route) => pathname.startsWith(route))
  const hasMockCookie = req.cookies.has('mock-session')
  const isAuthenticated = hasMockCookie

  if (!isAuthenticated && !isPublicRoute) {
    return Response.redirect(new URL(ROUTES.LOGIN, req.url))
  }

  if (isAuthenticated && isPublicRoute) {
    return Response.redirect(new URL(ROUTES.DASHBOARD, req.url))
  }
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)'],
}
