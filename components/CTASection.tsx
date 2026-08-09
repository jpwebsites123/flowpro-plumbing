import { Phone, ClipboardList } from "lucide-react";
import Button from "./Button";
import { business } from "@/lib/data";

type CTASectionProps = {
  title: string;
  description: string;
};

export default function CTASection({ title, description }: CTASectionProps) {
  return (
    <section className="relative overflow-hidden bg-navy-900">
      <div
        className="absolute inset-0 opacity-[0.08] bg-flow-line bg-[length:200%_100%] animate-flow"
        aria-hidden="true"
      />
      <div className="container-page py-16 sm:py-20 relative text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white max-w-2xl mx-auto">
          {title}
        </h2>
        <p className="mt-4 text-mist-200 text-base sm:text-lg max-w-xl mx-auto">
          {description}
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button href="/contact" variant="primary" icon={ClipboardList}>
            Request a Quote
          </Button>
          <Button href={business.phoneHref} variant="outline-light" icon={Phone}>
            Call Now — {business.phoneDisplay}
          </Button>
        </div>
      </div>
    </section>
  );
}
