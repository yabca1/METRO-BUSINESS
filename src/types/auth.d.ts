// src/types/auth.d.ts
import type { DefaultSession } from "next-auth"

declare module "next-auth" {
  interface Session {
    user: {
      scopes: string[]
    } & DefaultSession["user"]
  }

  interface User {
    scopes: string[]
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    scopes: string[]
  }
}
