// src/app/not-found.tsx
import Link from 'next/link'
import { ROUTES } from '@/constants/routes'

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-zinc-50 dark:bg-zinc-950 px-4 text-center">
      <h1 className="text-6xl font-extrabold text-zinc-900 dark:text-zinc-50">404</h1>
      <h2 className="mt-4 text-xl font-bold text-zinc-700 dark:text-zinc-300">Page Not Found</h2>
      <p className="mt-2 text-zinc-500 max-w-sm text-sm">
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
      <Link
        href={ROUTES.HOME}
        className="mt-6 inline-flex h-10 items-center justify-center rounded-xl bg-zinc-900 px-6 text-sm font-semibold text-white hover:bg-zinc-800 dark:bg-zinc-50 dark:text-zinc-950 dark:hover:bg-zinc-200 transition-colors"
      >
        Go Home
      </Link>
    </div>
  )
}
