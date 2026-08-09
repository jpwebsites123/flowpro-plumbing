import { Phone, ClipboardList } from "lucide-react";
import { business } from "@/lib/data";
import Link from "next/link";

export default function MobileBottomBar() {
  return (
    <div className="lg:hidden fixed bottom-0 inset-x-0 z-40 grid grid-cols-2 border-t border-mist-300 bg-white shadow-[0_-4px_16px_rgba(11,37,69,0.1)] pb-[env(safe-area-inset-bottom)]">
      <a
        href={business.phoneHref}
        className="flex items-center justify-center gap-2 py-4 text-[15px] font-bold text-navy-900 border-r border-mist-200 active:bg-mist-100"
      >
        <Phone size={18} className="text-flow-500" />
        Call Now
      </a>
      <Link
        href="/contact"
        className="flex items-center justify-center gap-2 py-4 text-[15px] font-bold text-white bg-flow-500 active:bg-flow-600"
      >
        <ClipboardList size={18} />
        Request Service
      </Link>
    </div>
  );
}
