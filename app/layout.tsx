import type { Metadata, Viewport } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MobileBottomBar from "@/components/MobileBottomBar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://flowproplumbing-demo.example.com"),
  title: {
    default: "FlowPro Plumbing & Drain | Local Plumber Near You",
    template: "%s | FlowPro Plumbing & Drain",
  },
  description:
    "FlowPro Plumbing & Drain provides fast, reliable residential and emergency plumbing services including drain cleaning, leak repair, water heaters and more. Licensed & insured local plumbers. (Demo business.)",
  keywords: [
    "plumber near me",
    "local plumber",
    "emergency plumber",
    "drain cleaning",
    "plumbing repair",
    "water heater repair",
    "residential plumbing",
  ],
  openGraph: {
    title: "FlowPro Plumbing & Drain | Local Plumber Near You",
    description:
      "Fast, reliable plumbing services for your home or business. Licensed & insured. This is a fictional demo business.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#0B2545",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${sora.variable}`}>
      <body className="flex min-h-screen flex-col">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:rounded-lg focus:bg-flow-500 focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content" className="flex-1 pb-16 lg:pb-0">
          {children}
        </main>
        <Footer />
        <MobileBottomBar />
      </body>
    </html>
  );
}
