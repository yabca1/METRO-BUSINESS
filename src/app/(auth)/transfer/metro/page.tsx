import { ErrorBoundary } from '@/components/ErrorBoundary'
import { MetroTransferFlow } from '@/features/Transfer/metro/MetroTransferFlow'
import { resolveRecipientTransfer } from '@/features/Transfer/resolveRecipientTransfer'

type SearchParams = Promise<Record<string, string | string[] | undefined>>

function value(param: string | string[] | undefined) {
  return typeof param === 'string' ? param : undefined
}

export default async function MetroTransferPage({ searchParams }: { searchParams: SearchParams }) {
  const query = await searchParams
  const initialTransfer = value(query.stage) === 'amount'
    ? await resolveRecipientTransfer(value(query.recipientId), value(query.methodId), 'metro')
    : null

  return (
    <ErrorBoundary>
      <MetroTransferFlow initialRecipient={initialTransfer?.selected} initialAccounts={initialTransfer?.accounts} initialStep={initialTransfer ? 'amount' : undefined} />
    </ErrorBoundary>
  )
}
