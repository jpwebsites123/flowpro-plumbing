"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, Menu, X, Wrench } from "lucide-react";
import { business, navLinks } from "@/lib/data";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-navy-900/97 backdrop-blur shadow-lg"
          : "bg-navy-900"
      }`}
    >
      <div className="container-page flex h-[76px] items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2.5 shrink-0"
          aria-label="FlowPro Plumbing & Drain — Home"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-flow-500">
            <Wrench className="h-5 w-5 text-white" strokeWidth={2.5} />
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-display text-lg font-bold text-white">
              FlowPro
            </span>
            <span className="text-[11px] font-medium tracking-wide text-flow-300">
              PLUMBING &amp; DRAIN
            </span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav
          className="hidden lg:flex items-center gap-1"
          aria-label="Primary"
        >
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  active
                    ? "bg-white/10 text-white"
                    : "text-mist-200 hover:text-white hover:bg-white/5"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href={business.phoneHref}
            className="flex items-center gap-2 text-sm font-semibold text-white hover:text-flow-300 transition-colors"
          >
            <Phone size={16} className="text-flow-400" />
            {business.phoneDisplay}
          </a>
          <Link href="/contact" className="btn-primary !py-2.5 !px-5 text-sm">
            Request a Quote
          </Link>
        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-2 lg:hidden">
          <a
            href={business.phoneHref}
            className="flex h-11 w-11 items-center justify-center rounded-full bg-flow-500 text-white"
            aria-label={`Call FlowPro now at ${business.phoneDisplay}`}
          >
            <Phone size={19} />
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`lg:hidden overflow-hidden transition-[max-height] duration-300 ease-in-out bg-navy-900 border-t border-white/10 ${
          open ? "max-h-[520px]" : "max-h-0"
        }`}
      >
        <nav className="container-page flex flex-col py-4 gap-1" aria-label="Mobile">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`px-3 py-3 rounded-lg text-base font-medium ${
                pathname === link.href
                  ? "bg-white/10 text-white"
                  : "text-mist-200 hover:bg-white/5 hover:text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="btn-primary mt-3 w-full justify-center"
          >
            Request a Quote
          </Link>
        </nav>
      </div>
    </header>
  );
}
