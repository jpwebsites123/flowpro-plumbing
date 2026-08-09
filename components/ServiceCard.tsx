import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getIcon } from "@/lib/icons";
import { type Service } from "@/lib/data";

export default function ServiceCard({ service }: { service: Service }) {
  const Icon = getIcon(service.icon);
  return (
    <div className="card-surface p-6 flex flex-col h-full">
      <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy-900 text-flow-400 mb-5">
        <Icon size={22} strokeWidth={2.2} />
      </span>
      <h3 className="text-lg font-bold text-navy-900 mb-2">{service.name}</h3>
      <p className="text-sm text-navy-700/75 leading-relaxed mb-5 flex-1">
        {service.shortDescription}
      </p>
      <Link
        href={`/services#${service.slug}`}
        className="inline-flex items-center gap-1.5 text-sm font-semibold text-flow-600 hover:text-flow-700 hover:gap-2.5 transition-all"
      >
        Learn More
        <ArrowRight size={15} />
      </Link>
    </div>
  );
}
