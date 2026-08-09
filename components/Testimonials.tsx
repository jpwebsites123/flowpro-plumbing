import { Star, Quote } from "lucide-react";
import { testimonials } from "@/lib/data";
import SectionHeading from "./SectionHeading";

export default function Testimonials() {
  return (
    <section className="py-20 sm:py-24 bg-mist-50">
      <div className="container-page">
        <div className="flex flex-col items-center text-center">
          <SectionHeading
            eyebrow="Customer Reviews"
            title="What Homeowners Are Saying"
            align="center"
          />
          <span className="mt-4 inline-block rounded-full bg-navy-100 text-navy-700 text-xs font-semibold px-3.5 py-1.5">
            Sample reviews shown for demonstration purposes only
          </span>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <figure key={i} className="card-surface p-6 flex flex-col">
              <Quote className="text-flow-200" size={28} />
              <div className="flex gap-0.5 mt-4 mb-3" aria-hidden="true">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <Star
                    key={idx}
                    size={15}
                    className={
                      idx < t.rating
                        ? "fill-flow-500 text-flow-500"
                        : "fill-mist-300 text-mist-300"
                    }
                  />
                ))}
              </div>
              <blockquote className="text-sm text-navy-700/85 leading-relaxed flex-1">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-5 pt-4 border-t border-mist-200 text-sm">
                <span className="font-semibold text-navy-900">{t.name}</span>
                <span className="text-navy-500"> · {t.location}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
