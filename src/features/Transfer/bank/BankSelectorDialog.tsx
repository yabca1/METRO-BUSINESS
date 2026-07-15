'use client'

import * as React from 'react'
import Image from 'next/image'
import { Dialog } from '@/components/ui/Dialog'
import { CloseIcon, SearchIcon } from '@/components/icons/vuesax'
import { BANKS } from './data'

interface BankSelectorDialogProps {
  open: boolean
  selected: string
  onClose: () => void
  onSelect: (bank: string) => void
}

export function BankSelectorDialog({ open, selected, onClose, onSelect }: BankSelectorDialogProps) {
  const [search, setSearch] = React.useState('')
  const banks = BANKS.filter((bank) => bank.toLowerCase().includes(search.toLowerCase()))

  return (
    <Dialog open={open} onOpenChange={(next) => !next && onClose()} hideCloseButton contentClassName="max-h-[calc(100vh-2rem)] max-w-[511px] overflow-y-auto border-[0.5px] border-brand-border p-3 shadow-none">
      <div className="px-5">
        <button type="button" onClick={onClose} aria-label="Close bank selector" className="flex size-6 items-center justify-center rounded-full bg-brand-surface">
          <CloseIcon className="size-2" />
        </button>
      </div>
      <div className="px-5 pb-5 pt-4">
        <h2 className="font-poppins-semibold text-fig-20 font-semibold text-brand-primary">Select bank</h2>
        <label className="mt-5 flex h-11 items-center gap-2 rounded-2xl border border-[#D0D5DD] px-3.5">
          <SearchIcon className="size-5 text-brand-muted" />
          <input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search" className="min-w-0 flex-1 bg-transparent text-base outline-none placeholder:text-[#667085]" />
        </label>
        <div className="mt-7 grid grid-cols-3 justify-between gap-y-5 sm:grid-cols-4">
          {banks.map((bank) => {
            const sourceIndex = BANKS.indexOf(bank)
            return (
              <button type="button" key={bank} onClick={() => onSelect(bank)} className="flex cursor-pointer flex-col items-center gap-2 text-center">
                <span className={`relative size-[67px] overflow-hidden rounded-lg ${selected === bank ? 'ring-1 ring-brand-primary' : ''}`}>
                  <Image src={`/images/banks/${String(sourceIndex + 1).padStart(2, '0')}.png`} alt="" fill sizes="67px" className="object-contain" />
                </span>
                <span className="min-h-8 text-xs leading-4 text-brand-dark">{bank}</span>
              </button>
            )
          })}
        </div>
      </div>
    </Dialog>
  )
}
