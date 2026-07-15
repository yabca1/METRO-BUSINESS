// src/app/(public)/page.tsx
import Image from "next/image"
import Link from "next/link"
import { ROUTES } from "@/constants/routes"

export default function PublicPage() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black py-16 px-4">
      <main className="flex flex-col items-center justify-between w-full max-w-3xl py-20 px-8 sm:px-16 bg-white dark:bg-zinc-900 rounded-3xl border border-zinc-100 dark:border-zinc-800 shadow-xl text-center sm:text-left sm:items-start">
        <Image
          className="dark:invert mb-8"
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />
        <div className="flex flex-col gap-6">
          <h1 className="max-w-md text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50 leading-tight">
            The modern financial stack for business.
          </h1>
          <p className="max-w-md text-lg text-zinc-500 leading-relaxed">
            Beautiful invoices, corporate billing control, cash flow insights, and role-based permissions — all in one dashboard.
          </p>
        </div>
        <div className="flex flex-col gap-4 w-full sm:w-auto sm:flex-row mt-10">
          <Link
            className="flex h-12 items-center justify-center gap-2 rounded-xl bg-zinc-900 px-8 text-sm font-semibold text-white transition-all hover:bg-zinc-800 dark:bg-zinc-50 dark:text-zinc-950 dark:hover:bg-zinc-200 active:scale-98"
            href={ROUTES.TRANSFER}
          >
            Go to Portal
          </Link>
          <Link
            className="flex h-12 items-center justify-center rounded-xl border border-solid border-zinc-200 px-8 text-sm font-semibold text-zinc-600 transition-colors hover:bg-zinc-50 dark:border-zinc-800 dark:text-zinc-400 dark:hover:bg-zinc-800"
            href="/login"
          >
            Sign In
          </Link>
        </div>
      </main>
    </div>
  )
}
