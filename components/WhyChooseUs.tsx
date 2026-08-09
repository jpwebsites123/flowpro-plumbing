import { UserCheck, Receipt, Zap, Sparkles, BadgeCheck, HeartHandshake } from "lucide-react";
import SectionHeading from "./SectionHeading";

const reasons = [
  {
    icon: UserCheck,
    title: "Experienced Professionals",
    description:
      "Our plumbers bring years of hands-on experience to every job, from routine repairs to complex installs.",
  },
  {
    icon: Receipt,
    title: "Honest, Upfront Pricing",
    description:
      "You'll know the cost before we start. No surprise fees, no pressure to add on services you don't need.",
  },
  {
    icon: Zap,
    title: "Fast & Reliable Service",
    description:
      "We respect your time and show up when we say we will, with fast response for urgent issues.",
  },
  {
    icon: Sparkles,
    title: "Clean Workmanship",
    description:
      "We treat your home with respect — protecting floors, cleaning up after the job, and leaving no mess behind.",
  },
  {
    icon: BadgeCheck,
    title: "Quality Parts",
    description:
      "We install durable, trusted fixtures and materials built to last, not the cheapest option on the shelf.",
  },
  {
    icon: HeartHandshake,
    title: "Customer Satisfaction",
    description:
      "We're not done until the job is done right and you're comfortable with the work we've completed.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 sm:py-24 bg-mist-50">
      <div className="container-page">
        <SectionHeading
          eyebrow="Why FlowPro"
          title="Why Choose FlowPro?"
          align="center"
          description="A local plumbing team focused on doing the job right the first time."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((r) => (
            <div key={r.title} className="card-surface p-6">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-flow-50 text-flow-600 mb-4">
                <r.icon size={20} strokeWidth={2.2} />
              </span>
              <h3 className="font-bold text-navy-900 mb-2">{r.title}</h3>
              <p className="text-sm text-navy-700/75 leading-relaxed">
                {r.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
