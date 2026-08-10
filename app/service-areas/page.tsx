import type { Metadata } from "next";
import { MapPin, Phone, ArrowRight } from "lucide-react";
import Button from "@/components/Button";
import SectionHeading from "@/components/SectionHeading";
import { business, serviceAreas } from "@/lib/data";

export const metadata: Metadata = {
  title: "Service Areas | Local Plumber Near You",
  description:
    "FlowPro Plumbing & Drain proudly serves Maple Ridge, Cedar Falls, Brookhaven, Fairview Heights, Riverside District, Oakdale and the surrounding area. (Fictional demo service area.)",
};

export default function ServiceAreasPage() {
  return (
    <>
      <section className="bg-navy-900 py-16 sm:py-20">
        <div className="container-page text-center">
          <span className="section-eyebrow justify-center flex">Where We Work</span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white">
            Professional Plumbing Near You
          </h1>
          <p className="mt-5 text-mist-200 text-lg max-w-2xl mx-auto leading-relaxed">
            FlowPro serves homeowners and businesses throughout the
            surrounding area with fast, dependable local plumbing service.
          </p>
          <p className="mt-4 inline-block rounded-full bg-white/10 text-mist-100 text-xs font-semibold px-3.5 py-1.5">
            Cities and neighborhoods below are fictional and used for demo purposes only
          </p>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="container-page">
          <SectionHeading
            eyebrow="Our Coverage"
            title="Areas We Proudly Serve"
            description="Click into any area below to see the services our team most commonly provides nearby."
          />

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {serviceAreas.map((area) => (
              <div key={area.name} className="card-surface p-6 flex flex-col">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-flow-50 text-flow-600 mb-4">
                  <MapPin size={19} />
                </span>
                <h3 className="text-lg font-bold text-navy-900 mb-2">{area.name}</h3>
                <p className="text-sm text-navy-700/75 leading-relaxed mb-4">
                  {area.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {area.services.map((s) => (
                    <span
                      key={s}
                      className="text-xs font-medium rounded-full bg-mist-100 text-navy-700 px-3 py-1"
                    >
                      {s}
                    </span>
                  ))}
                </div>
                <Button
                  href="/contact"
                  variant="secondary"
                  icon={ArrowRight}
                  className="mt-auto !w-full justify-center"
                >
                  Request Service
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-flow-600">
        <div className="container-page text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Don&apos;t See Your Area?
          </h2>
          <p className="mt-3 text-flow-50 max-w-xl mx-auto">
            Give us a call to find out if we service your location — we&apos;re
            often able to accommodate nearby areas as well.
          </p>
          <a href={business.phoneHref} className="btn-emergency mt-7 inline-flex !px-8">
            <Phone size={18} />
            {business.phoneDisplay}
          </a>
        </div>
      </section>
    </>
  );
}
