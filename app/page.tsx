import type { Metadata } from "next";
import Image from "next/image";
import { Phone, ClipboardList, ArrowRight, ShieldCheck } from "lucide-react";
import Button from "@/components/Button";
import TrustBar from "@/components/TrustBar";
import ServiceCard from "@/components/ServiceCard";
import SectionHeading from "@/components/SectionHeading";
import WhyChooseUs from "@/components/WhyChooseUs";
import EmergencyBanner from "@/components/EmergencyBanner";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import CTASection from "@/components/CTASection";
import { business, services } from "@/lib/data";

export const metadata: Metadata = {
  title: "Local Plumber Near You | Residential & Emergency Plumbing",
  description:
    "Your local plumbing experts. Fast, reliable residential and emergency plumbing services — drain cleaning, leak repair, water heaters, and more. Request a free quote today.",
};

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-navy-900">
        <div className="container-page relative py-16 sm:py-20 lg:py-28 grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative z-10 text-center lg:text-left">
            <span className="section-eyebrow justify-center lg:justify-start flex">
              Demo Business · Local Plumbing Services
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-bold text-white leading-[1.1]">
              Your Local Plumbing Experts
            </h1>
            <p className="mt-6 text-lg text-mist-200 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Fast, reliable plumbing services for your home or business. From
              leaking faucets to plumbing emergencies, FlowPro gets the job
              done right.
            </p>
            <div className="mt-9 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Button href="/contact" variant="primary" icon={ClipboardList}>
                Request a Free Quote
              </Button>
              <Button href={business.phoneHref} variant="outline-light" icon={Phone}>
                Call Now
              </Button>
            </div>
            <div className="mt-8 flex items-center justify-center lg:justify-start gap-2 text-sm text-mist-300">
              <ShieldCheck size={16} className="text-flow-400" />
              Licensed &amp; insured local plumbers
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10 aspect-[4/3]">
              <Image
                src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=1200&auto=format&fit=crop"
                alt="Professional plumber repairing a pipe under a kitchen sink inside a home"
                fill
                priority
                sizes="(min-width: 1024px) 560px, 100vw"
                className="object-cover"
              />
            </div>
            <div className="hidden sm:flex absolute -bottom-6 -left-6 items-center gap-3 rounded-2xl bg-white shadow-xl px-5 py-4 border border-mist-200">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-flow-50 text-flow-600">
                <Phone size={19} />
              </span>
              <div className="leading-tight">
                <p className="text-xs text-navy-500">Call us anytime</p>
                <p className="font-bold text-navy-900">{business.phoneDisplay}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <TrustBar />

      {/* Services preview */}
      <section className="py-20 sm:py-24">
        <div className="container-page">
          <SectionHeading
            eyebrow="What We Do"
            title="Plumbing Services You Can Rely On"
            description="From everyday repairs to urgent emergencies, our licensed plumbers handle it all with honest pricing and clean workmanship."
            align="center"
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s) => (
              <ServiceCard key={s.slug} service={s} />
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button href="/services" variant="secondary" icon={ArrowRight}>
              View All Services
            </Button>
          </div>
        </div>
      </section>

      <WhyChooseUs />
      <EmergencyBanner />
      <HowItWorks />
      <Testimonials />

      <CTASection
        title="Need a Plumber You Can Count On?"
        description="Get in touch today and let us take care of the problem."
      />
    </>
  );
}
