import Link from "next/link";
import { Phone, Mail, MapPin, Clock, Wrench, Facebook, Instagram, Twitter } from "lucide-react";
import { business, navLinks } from "@/lib/data";

const footerServices = [
  { label: "Emergency Plumbing", href: "/services#emergency-plumbing" },
  { label: "Drain Cleaning", href: "/services#drain-cleaning" },
  { label: "Leak Repair", href: "/services#leak-repair" },
  { label: "Water Heaters", href: "/services#water-heater" },
  { label: "Pipe Repair", href: "/services#pipe-repair" },
];

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-mist-200">
      <div className="container-page py-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2.5 mb-4">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-flow-500">
              <Wrench className="h-5 w-5 text-white" strokeWidth={2.5} />
            </span>
            <span className="flex flex-col leading-none">
              <span className="font-display text-lg font-bold text-white">
                FlowPro
              </span>
              <span className="text-[11px] font-medium tracking-wide text-flow-300">
                PLUMBING &amp; DRAIN
              </span>
            </span>
          </div>
          <p className="text-sm text-mist-300">{business.tagline}</p>
          <div className="flex gap-3 mt-5">
            <a
              href="#"
              aria-label="FlowPro on Facebook"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 hover:bg-flow-500 transition-colors"
            >
              <Facebook size={16} />
            </a>
            <a
              href="#"
              aria-label="FlowPro on Instagram"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 hover:bg-flow-500 transition-colors"
            >
              <Instagram size={16} />
            </a>
            <a
              href="#"
              aria-label="FlowPro on Twitter"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 hover:bg-flow-500 transition-colors"
            >
              <Twitter size={16} />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4 text-sm tracking-wide uppercase">
            Quick Links
          </h3>
          <ul className="space-y-2.5 text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-flow-300 transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4 text-sm tracking-wide uppercase">
            Services
          </h3>
          <ul className="space-y-2.5 text-sm">
            {footerServices.map((s) => (
              <li key={s.label}>
                <Link href={s.href} className="hover:text-flow-300 transition-colors">
                  {s.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4 text-sm tracking-wide uppercase">
            Contact &amp; Hours
          </h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2.5">
              <Phone size={16} className="mt-0.5 text-flow-400 shrink-0" />
              <a href={business.phoneHref} className="hover:text-flow-300 transition-colors">
                {business.phoneDisplay}
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <Mail size={16} className="mt-0.5 text-flow-400 shrink-0" />
              <a href={`mailto:${business.email}`} className="hover:text-flow-300 transition-colors break-all">
                {business.email}
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <MapPin size={16} className="mt-0.5 text-flow-400 shrink-0" />
              <span>{business.serviceAreaSummary}</span>
            </li>
            <li className="flex items-start gap-2.5">
              <Clock size={16} className="mt-0.5 text-flow-400 shrink-0" />
              <div className="space-y-0.5">
                {business.hours.map((h) => (
                  <p key={h.days}>
                    <span className="text-white">{h.days}:</span> {h.time}
                  </p>
                ))}
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-mist-400">
          <p>
            &copy; {new Date().getFullYear()} FlowPro Plumbing &amp; Drain. All rights reserved.
          </p>
          <p className="text-center sm:text-right">
            Demo website created for portfolio purposes. FlowPro Plumbing &amp; Drain is a
            fictional business.
          </p>
        </div>
      </div>
    </footer>
  );
}
