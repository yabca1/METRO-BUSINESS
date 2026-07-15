// src/lib/auth.ts
import type { NextAuthOptions } from 'next-auth'
import GithubProvider from 'next-auth/providers/github'

export const authConfig: NextAuthOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID ?? '',
      clientSecret: process.env.GITHUB_SECRET ?? '',
    }),
  ],
  session: { strategy: 'jwt' },
  callbacks: {
    jwt: ({ token, user }) => {
      if (user) {
        token.scopes = ['invoices:read', 'invoices:create']
      }
      return token
    },
    session: ({ session, token }) => ({
      ...session,
      user: {
        ...session.user,
        scopes: (token.scopes as string[]) ?? [],
      },
    }),
  },
}
