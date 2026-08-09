import type { Metadata } from "next";
import { Phone, Mail, Clock, MapPin, AlertTriangle } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import ContactForm from "@/components/ContactForm";
import { business } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact Us | Request a Free Plumbing Quote",
  description:
    "Contact FlowPro Plumbing & Drain or request a free quote online. Fast local plumbing service with emergency availability. (Fictional demo business.)",
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-navy-900 py-16 sm:py-20">
        <div className="container-page text-center">
          <span className="section-eyebrow justify-center flex">Get In Touch</span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white">
            Contact FlowPro Plumbing &amp; Drain
          </h1>
          <p className="mt-5 text-mist-200 text-lg max-w-2xl mx-auto leading-relaxed">
            Call us directly or fill out the form below to request a free
            quote. We&apos;ll follow up to confirm the details.
          </p>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="container-page grid lg:grid-cols-[380px_1fr] gap-12">
          {/* Info column */}
          <div className="space-y-6">
            <div className="card-surface p-6">
              <SectionHeading eyebrow="Reach Us" title="Contact Details" />
              <ul className="mt-6 space-y-5">
                <li className="flex items-start gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-flow-50 text-flow-600">
                    <Phone size={17} />
                  </span>
                  <div>
                    <p className="text-xs text-navy-500">Call or text</p>
                    <a
                      href={business.phoneHref}
                      className="font-bold text-navy-900 hover:text-flow-600 transition-colors"
                    >
                      {business.phoneDisplay}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-flow-50 text-flow-600">
                    <Mail size={17} />
                  </span>
                  <div>
                    <p className="text-xs text-navy-500">Email</p>
                    <a
                      href={`mailto:${business.email}`}
                      className="font-bold text-navy-900 hover:text-flow-600 transition-colors break-all"
                    >
                      {business.email}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-flow-50 text-flow-600">
                    <MapPin size={17} />
                  </span>
                  <div>
                    <p className="text-xs text-navy-500">Service Area</p>
                    <p className="font-bold text-navy-900">{business.serviceAreaSummary}</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-flow-50 text-flow-600">
                    <Clock size={17} />
                  </span>
                  <div>
                    <p className="text-xs text-navy-500 mb-1">Business Hours</p>
                    {business.hours.map((h) => (
                      <p key={h.days} className="text-sm text-navy-800">
                        <span className="font-semibold">{h.days}:</span> {h.time}
                      </p>
                    ))}
                  </div>
                </li>
              </ul>
            </div>

            <div className="rounded-2xl bg-flow-50 border border-flow-100 p-6 flex gap-3">
              <AlertTriangle size={20} className="text-flow-600 shrink-0 mt-0.5" />
              <p className="text-sm text-navy-800 leading-relaxed">
                <span className="font-bold">Have a plumbing emergency?</span>{" "}
                Don&apos;t wait for a callback — call{" "}
                <a href={business.phoneHref} className="font-bold underline">
                  {business.phoneDisplay}
                </a>{" "}
                directly for the fastest response, including Sunday
                emergency service.
              </p>
            </div>
          </div>

          {/* Form column */}
          <div>
            <SectionHeading eyebrow="Request Service" title="Request a Free Quote" />
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
