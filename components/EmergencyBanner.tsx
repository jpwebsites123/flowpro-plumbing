import { Phone, AlertTriangle } from "lucide-react";
import { business } from "@/lib/data";

export default function EmergencyBanner() {
  return (
    <section className="relative overflow-hidden bg-flow-600">
      <div className="container-page py-12 sm:py-14 flex flex-col lg:flex-row items-center justify-between gap-8">
        <div className="flex items-start gap-4 text-white text-center lg:text-left">
          <span className="hidden sm:flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white/15">
            <AlertTriangle size={26} />
          </span>
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold">Plumbing Emergency?</h2>
            <p className="mt-2 text-flow-50 text-base sm:text-lg max-w-xl">
              Leaks, burst pipes and backups don&apos;t wait. Neither do we.
            </p>
          </div>
        </div>
        <a
          href={business.phoneHref}
          className="btn-emergency shrink-0 !px-8 !py-4 text-base shadow-lg"
        >
          <Phone size={19} />
          Call for Emergency Service
        </a>
      </div>
    </section>
  );
}
