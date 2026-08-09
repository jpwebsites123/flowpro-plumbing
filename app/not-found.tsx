import Link from "next/link";
import { Home, Phone } from "lucide-react";
import { business } from "@/lib/data";

export default function NotFound() {
  return (
    <section className="py-24 sm:py-32">
      <div className="container-page text-center">
        <p className="text-flow-600 font-bold text-sm tracking-wide uppercase mb-3">
          404 Error
        </p>
        <h1 className="text-4xl sm:text-5xl font-bold text-navy-900">
          Page Not Found
        </h1>
        <p className="mt-4 text-navy-700/75 max-w-md mx-auto leading-relaxed">
          The page you&apos;re looking for doesn&apos;t exist. Head back home,
          or give us a call if you need help right away.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/" className="btn-primary">
            <Home size={18} />
            Back to Home
          </Link>
          <a href={business.phoneHref} className="btn-secondary">
            <Phone size={18} />
            {business.phoneDisplay}
          </a>
        </div>
      </div>
    </section>
  );
}
