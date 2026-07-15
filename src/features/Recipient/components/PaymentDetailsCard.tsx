import { PanelCard } from "@/components/ui/PanelCard"
import { cn } from "@/lib/utils"
import type { PaymentMethod } from "../types"

/** Leading avatar per method: Metro "M" tile, bank logo circle, or an empty slot for cards. */
function MethodIcon({ method }: { method: PaymentMethod }) {
  if (method.icon === "metro") {
    return (
      <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-brand-primary">
        <span className="font-orbitron text-fig-20 font-bold text-brand-white">M</span>
      </span>
    )
  }
  if (method.icon === "bank") {
    return <span className="flex size-10 shrink-0 items-center justify-center rounded-full border border-brand-border bg-brand-white" />
  }
  // card / flag methods sit indented with no leading avatar, matching Figma
  return <span className="size-10 shrink-0" />
}

export function PaymentDetailsCard({ methods }: { methods: PaymentMethod[] }) {
  return (
    <PanelCard className="space-y-5 pt-2.5">
      <div className="flex items-center justify-between gap-2">
        <p className="font-urbanist-semibold text-fig-12 font-semibold tracking-wide text-brand-primary">
          Payment details <span className="font-poppins-regular font-normal">• {methods.length}</span>
        </p>
        <button type="button" className="font-urbanist-semibold text-fig-12 font-semibold text-brand-blue cursor-pointer">Add new</button>
      </div>

      <div className="space-y-4">
        {methods.map((method) => (
          <div key={method.id} className="flex items-center gap-3">
            <MethodIcon method={method} />
            <div className="min-w-0">
              <p className={cn("truncate font-urbanist-semibold text-fig-14 font-semibold text-brand-primary")}>
                {method.label}
                {method.badge && <span className="font-normal text-brand-muted"> • {method.badge}</span>}
              </p>
              <p className="truncate font-urbanist-light text-fig-12 font-light text-brand-primary/90">{method.meta}</p>
            </div>
          </div>
        ))}
      </div>
    </PanelCard>
  )
}
