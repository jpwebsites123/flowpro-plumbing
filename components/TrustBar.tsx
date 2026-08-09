import { ShieldCheck, Timer, Receipt, Award, PhoneCall } from "lucide-react";

const items = [
  { icon: ShieldCheck, label: "Licensed & Insured" },
  { icon: Timer, label: "Fast Response Times" },
  { icon: Receipt, label: "Upfront Pricing" },
  { icon: Award, label: "Quality Workmanship" },
  { icon: PhoneCall, label: "Emergency Service" },
];

export default function TrustBar() {
  return (
    <div className="bg-white border-b border-mist-200">
      <div className="container-page py-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
        {items.map(({ icon: Icon, label }) => (
          <div key={label} className="flex items-center gap-3">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-flow-50 text-flow-600">
              <Icon size={19} strokeWidth={2.2} />
            </span>
            <span className="text-sm font-semibold text-navy-800 leading-tight">
              {label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
