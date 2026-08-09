import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import GalleryGrid from "@/components/GalleryGrid";
import BeforeAfter from "@/components/BeforeAfter";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Project Gallery | FlowPro Plumbing & Drain",
  description:
    "Browse sample plumbing project photos from FlowPro Plumbing & Drain, including bathroom plumbing, water heaters, pipe repairs and before & after transformations.",
};

export default function GalleryPage() {
  return (
    <>
      <section className="bg-navy-900 py-16 sm:py-20">
        <div className="container-page text-center">
          <span className="section-eyebrow justify-center flex">Our Work</span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white">Project Gallery</h1>
          <p className="mt-5 text-mist-200 text-lg max-w-2xl mx-auto leading-relaxed">
            A look at the type of plumbing work our team handles, from small
            fixture upgrades to full pipe replacements.
          </p>
          <p className="mt-4 inline-block rounded-full bg-white/10 text-mist-100 text-xs font-semibold px-3.5 py-1.5">
            All images below are demonstration content for this portfolio sample
          </p>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="container-page">
          <GalleryGrid />
        </div>
      </section>

      <section className="py-20 sm:py-24 bg-mist-50">
        <div className="container-page">
          <SectionHeading
            eyebrow="Transformations"
            title="Before & After"
            align="center"
            description="A few sample projects showing the difference professional plumbing work can make."
          />
          <div className="mt-14">
            <BeforeAfter />
          </div>
        </div>
      </section>

      <CTASection
        title="Like What You See?"
        description="Let's talk about the plumbing project you have in mind."
      />
    </>
  );
}
