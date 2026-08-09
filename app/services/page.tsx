import type { Metadata } from "next";
import Image from "next/image";
import { Phone, ClipboardList, CheckCircle2, ListChecks } from "lucide-react";
import Button from "@/components/Button";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import { getIcon } from "@/lib/icons";
import { business, services } from "@/lib/data";

export const metadata: Metadata = {
  title: "Plumbing Services | Emergency, Drain Cleaning, Repairs & More",
  description:
    "Explore FlowPro's full range of residential plumbing services — emergency plumbing, drain cleaning, leak repair, water heaters, toilets, fixtures, pipe repair and sump pumps.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="bg-navy-900 py-16 sm:py-20">
        <div className="container-page text-center">
          <span className="section-eyebrow justify-center flex">Our Services</span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white">
            Residential Plumbing Services
          </h1>
          <p className="mt-5 text-mist-200 text-lg max-w-2xl mx-auto leading-relaxed">
            Honest, upfront plumbing repair and installation for homeowners
            across the area — from minor fixes to full emergencies.
          </p>
        </div>
      </section>

      {/* Quick jump list */}
      <nav
        aria-label="Jump to a service"
        className="border-b border-mist-200 bg-mist-50 py-4 overflow-x-auto"
      >
        <ul className="container-page flex gap-2 whitespace-nowrap">
          {services.map((s) => (
            <li key={s.slug}>
              <a
                href={`#${s.slug}`}
                className="inline-block rounded-full bg-white border border-mist-300 px-4 py-2 text-sm font-medium text-navy-700 hover:border-flow-400 hover:text-flow-600 transition-colors"
              >
                {s.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {services.map((service, i) => {
        const Icon = getIcon(service.icon);
        const reversed = i % 2 === 1;
        return (
          <section
            key={service.slug}
            id={service.slug}
            className={`scroll-mt-24 py-16 sm:py-20 ${
              i % 2 === 0 ? "bg-white" : "bg-mist-50"
            }`}
          >
            <div className="container-page grid lg:grid-cols-2 gap-12 items-center">
              <div className={reversed ? "lg:order-2" : ""}>
                <div className="relative rounded-3xl overflow-hidden shadow-xl aspect-[4/3]">
                  <Image
                    src={service.image}
                    alt={`FlowPro plumber performing ${service.name.toLowerCase()} work`}
                    fill
                    sizes="(min-width: 1024px) 540px, 100vw"
                    className="object-cover"
                  />
                </div>
              </div>

              <div className={reversed ? "lg:order-1" : ""}>
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy-900 text-flow-400 mb-5">
                  <Icon size={22} strokeWidth={2.2} />
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-navy-900">
                  {service.name}
                </h2>
                <p className="mt-4 text-navy-700/80 leading-relaxed">
                  {service.description}
                </p>

                <div className="mt-7 grid sm:grid-cols-2 gap-6">
                  <div>
                    <h3 className="flex items-center gap-2 text-sm font-bold text-navy-900 mb-3">
                      <ListChecks size={16} className="text-flow-600" />
                      Common Problems
                    </h3>
                    <ul className="space-y-2">
                      {service.commonProblems.map((p) => (
                        <li key={p} className="flex items-start gap-2 text-sm text-navy-700/80">
                          <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-flow-400 shrink-0" />
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="flex items-center gap-2 text-sm font-bold text-navy-900 mb-3">
                      <CheckCircle2 size={16} className="text-flow-600" />
                      Benefits
                    </h3>
                    <ul className="space-y-2">
                      {service.benefits.map((b) => (
                        <li key={b} className="flex items-start gap-2 text-sm text-navy-700/80">
                          <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-flow-400 shrink-0" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <Button href="/contact" variant="primary" icon={ClipboardList}>
                    Request Service
                  </Button>
                  <Button href={business.phoneHref} variant="secondary" icon={Phone}>
                    Call Now
                  </Button>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      <CTASection
        title="Not Sure Which Service You Need?"
        description="Give us a call and we'll help diagnose the problem and walk you through your options."
      />
    </>
  );
}
