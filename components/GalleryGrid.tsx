"use client";

import { useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, Expand } from "lucide-react";
import { galleryCategories, galleryItems, type GalleryItem } from "@/lib/data";

export default function GalleryGrid() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered: GalleryItem[] =
    activeCategory === "All"
      ? galleryItems
      : galleryItems.filter((g) => g.category === activeCategory);

  const openLightbox = (id: string) => {
    const idx = filtered.findIndex((g) => g.id === id);
    setLightboxIndex(idx);
  };

  const closeLightbox = () => setLightboxIndex(null);

  const showNext = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % filtered.length);
  };

  const showPrev = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex - 1 + filtered.length) % filtered.length);
  };

  const active = lightboxIndex !== null ? filtered[lightboxIndex] : null;

  return (
    <div>
      <div className="flex flex-wrap gap-2 justify-center mb-12">
        {["All", ...galleryCategories].map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setActiveCategory(cat)}
            className={`rounded-full px-4 py-2 text-sm font-medium border transition-colors ${
              activeCategory === cat
                ? "bg-flow-500 border-flow-500 text-white"
                : "bg-white border-mist-300 text-navy-700 hover:border-flow-400 hover:text-flow-600"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
        {filtered.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => openLightbox(item.id)}
            className="group relative aspect-square overflow-hidden rounded-2xl shadow-card"
          >
            <Image
              src={item.image}
              alt={`${item.title} — ${item.category} demo project photo`}
              fill
              sizes="(min-width: 1024px) 260px, 45vw"
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-navy-950/0 group-hover:bg-navy-950/50 transition-colors flex items-center justify-center">
              <Expand
                size={22}
                className="text-white opacity-0 group-hover:opacity-100 transition-opacity"
              />
            </div>
            <span className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-navy-950/85 to-transparent px-3 py-3 text-left">
              <span className="block text-white text-xs font-semibold leading-tight">
                {item.title}
              </span>
            </span>
          </button>
        ))}
      </div>

      {active && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={active.title}
          className="fixed inset-0 z-[100] bg-navy-950/95 flex items-center justify-center p-4 sm:p-8"
          onClick={closeLightbox}
        >
          <button
            type="button"
            onClick={closeLightbox}
            aria-label="Close image viewer"
            className="absolute top-5 right-5 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
          >
            <X size={22} />
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              showPrev();
            }}
            aria-label="Previous image"
            className="absolute left-3 sm:left-6 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
          >
            <ChevronLeft size={22} />
          </button>

          <div
            className="relative w-full max-w-3xl aspect-[4/3]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={active.image}
              alt={`${active.title} — ${active.category} demo project photo, enlarged`}
              fill
              sizes="800px"
              className="object-cover rounded-2xl"
            />
            <p className="text-center text-mist-200 text-sm mt-4">
              {active.title} &middot; {active.category}{" "}
              <span className="text-mist-400">(demo image)</span>
            </p>
          </div>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              showNext();
            }}
            aria-label="Next image"
            className="absolute right-3 sm:right-6 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
          >
            <ChevronRight size={22} />
          </button>
        </div>
      )}
    </div>
  );
}
