import { PhoneCall, FileSearch, Hammer, Smile } from "lucide-react";
import SectionHeading from "./SectionHeading";

const steps = [
  {
    icon: PhoneCall,
    title: "Contact Us",
    description: "Call or submit a quote request and tell us what's going on.",
  },
  {
    icon: FileSearch,
    title: "Get an Estimate",
    description: "We review the problem and give you honest, upfront pricing.",
  },
  {
    icon: Hammer,
    title: "We Fix the Problem",
    description: "Our licensed plumbers complete the repair with care.",
  },
  {
    icon: Smile,
    title: "Enjoy Peace of Mind",
    description: "Walk away with a job done right and a plumber you can trust.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20 sm:py-24">
      <div className="container-page">
        <SectionHeading
          eyebrow="Our Process"
          title="How It Works"
          align="center"
          description="A simple, straightforward process from your first call to the finished repair."
        />
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <div key={step.title} className="relative text-center">
              <div className="flex flex-col items-center">
                <div className="relative">
                  <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-navy-900 text-flow-400">
                    <step.icon size={26} strokeWidth={2} />
                  </span>
                  <span className="absolute -top-2 -right-2 flex h-7 w-7 items-center justify-center rounded-full bg-flow-500 text-white text-xs font-bold">
                    {i + 1}
                  </span>
                </div>
                <h3 className="mt-5 font-bold text-navy-900">{step.title}</h3>
                <p className="mt-2 text-sm text-navy-700/75 leading-relaxed max-w-[220px]">
                  {step.description}
                </p>
              </div>
              {i < steps.length - 1 && (
                <div
                  className="hidden lg:block absolute top-8 left-[calc(50%+40px)] w-[calc(100%-80px)] h-px bg-mist-300"
                  aria-hidden="true"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
