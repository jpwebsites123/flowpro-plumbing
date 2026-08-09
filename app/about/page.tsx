import type { Metadata } from "next";
import Image from "next/image";
import { Compass, HeartHandshake, ShieldCheck, Users, Target, Gem } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import { stats } from "@/lib/data";

export const metadata: Metadata = {
  title: "About FlowPro Plumbing & Drain",
  description:
    "Learn about FlowPro Plumbing & Drain — a local residential plumbing company built on trust, honest communication and quality workmanship. (Fictional demo business.)",
};

const values = [
  {
    icon: ShieldCheck,
    title: "Honesty",
    description: "We tell you what's really going on and what it will cost — before any work begins.",
  },
  {
    icon: Gem,
    title: "Quality",
    description: "We use trusted materials and take the time to do every job correctly the first time.",
  },
  {
    icon: HeartHandshake,
    title: "Respect",
    description: "Your home, your time and your questions all deserve to be treated with care.",
  },
  {
    icon: Target,
    title: "Reliability",
    description: "When we say we'll be there, we're there — with a fully prepared service vehicle.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-navy-900 py-16 sm:py-20">
        <div className="container-page text-center">
          <span className="section-eyebrow justify-center flex">About FlowPro</span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white">
            Plumbing Service Built on Trust
          </h1>
          <p className="mt-5 text-mist-200 text-lg max-w-2xl mx-auto leading-relaxed">
            A local plumbing company focused on dependable service, honest
            communication and workmanship you can count on.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 sm:py-24">
        <div className="container-page grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="relative rounded-3xl overflow-hidden shadow-xl aspect-[4/3]">
              <Image
                src="https://images.unsplash.com/photo-1621905252472-943afaa20e20?q=80&w=1100&auto=format&fit=crop"
                alt="FlowPro plumber inspecting pipework in a residential basement"
                fill
                sizes="(min-width: 1024px) 540px, 100vw"
                className="object-cover"
              />
            </div>
          </div>
          <div>
            <SectionHeading eyebrow="Our Story" title="How FlowPro Got Started" />
            <div className="mt-5 space-y-4 text-navy-700/80 leading-relaxed">
              <p>
                FlowPro Plumbing &amp; Drain was created around a simple idea:
                homeowners deserve a plumber they can actually trust. Too many
                people have had the experience of an unclear invoice, a rushed
                repair, or a technician who was hard to reach when something
                went wrong.
              </p>
              <p>
                We set out to build a local plumbing company that does things
                differently — one that explains the problem in plain language,
                gives honest pricing before starting work, and stands behind
                every repair. Over time, that approach has shaped everything
                about how our team operates, from the first phone call to the
                final walkthrough.
              </p>
              <p>
                Today, FlowPro serves homeowners and small businesses
                throughout the surrounding area, handling everything from
                routine maintenance to urgent emergency calls.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 sm:py-24 bg-mist-50">
        <div className="container-page grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <SectionHeading eyebrow="Our Mission" title="Dependable Plumbing, Honest Communication" />
            <p className="mt-5 text-navy-700/80 leading-relaxed">
              Our mission is to give every customer a plumbing experience that
              feels straightforward and fair — clear communication, fair
              pricing, and workmanship that holds up over time. We measure
              success not by how many jobs we complete, but by how many
              customers call us again the next time they need a plumber.
            </p>
            <div className="mt-8 flex items-center gap-4 rounded-2xl bg-white border border-mist-200 p-5 shadow-card">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-flow-50 text-flow-600">
                <Compass size={20} />
              </span>
              <p className="text-sm text-navy-700/80">
                Every decision, from the products we install to how we answer
                the phone, is guided by whether it earns lasting trust.
              </p>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <div className="relative rounded-3xl overflow-hidden shadow-xl aspect-[4/3]">
              <Image
                src="https://images.unsplash.com/photo-1584622781564-1d987f7333c1?q=80&w=1100&auto=format&fit=crop"
                alt="Close-up of a plumber's hands repairing a copper pipe fitting"
                fill
                sizes="(min-width: 1024px) 540px, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 sm:py-24">
        <div className="container-page">
          <SectionHeading
            eyebrow="Our Values"
            title="What Guides Our Work"
            align="center"
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <div key={v.title} className="card-surface p-6 text-center">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-flow-50 text-flow-600 mx-auto mb-4">
                  <v.icon size={21} strokeWidth={2.2} />
                </span>
                <h3 className="font-bold text-navy-900 mb-2">{v.title}</h3>
                <p className="text-sm text-navy-700/75 leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why customers choose us + commitment to quality */}
      <section className="py-20 sm:py-24 bg-navy-900">
        <div className="container-page grid lg:grid-cols-2 gap-12">
          <div>
            <span className="section-eyebrow">Why Customers Choose Us</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-5">
              A Local Team That Listens
            </h2>
            <ul className="space-y-4">
              {[
                "Clear, jargon-free explanations of every repair",
                "Upfront pricing with no hidden fees",
                "Punctual, well-equipped service vehicles",
                "A team that stands behind its work",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-mist-200">
                  <Users size={18} className="text-flow-400 mt-0.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <span className="section-eyebrow">Our Commitment to Quality</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-5">
              Work That Holds Up
            </h2>
            <p className="text-mist-200 leading-relaxed">
              Quality isn&apos;t just about the repair looking finished — it&apos;s
              about it lasting. We use durable parts, follow proper
              installation practices, and take the time to test our work
              before we consider a job complete. If something isn&apos;t right,
              we make it right.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-navy-950">
        <div className="container-page">
          <p className="text-center text-xs font-semibold uppercase tracking-wide text-flow-300 mb-8">
            Demo statistics shown for illustration — not real business figures
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <p className="text-3xl sm:text-4xl font-bold text-white">{s.value}</p>
                <p className="mt-2 text-sm text-mist-300">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Work With a Plumber You Can Trust?"
        description="Reach out today and experience the FlowPro difference."
      />
    </>
  );
}
