# FlowPro Plumbing & Drain — Demo Website

A complete, multi-page marketing website built for **FlowPro Plumbing & Drain**,
a fictional local plumbing company created as a portfolio/sales demo.

> ⚠️ **This is a demo project.** FlowPro Plumbing & Drain is not a real
> business. All reviews, statistics, service areas and gallery photos are
> placeholder/demo content, clearly labeled as such throughout the site.

## Tech Stack

- **Next.js 14** (App Router, TypeScript)
- **Tailwind CSS** for styling, with a custom design-token theme
  (`tailwind.config.ts`)
- **lucide-react** for icons
- Fully responsive, accessible, and SEO-ready (metadata, sitemap, robots.txt)

## Pages

| Route             | Description                                   |
| ------------------ | ---------------------------------------------- |
| `/`                | Home — hero, services preview, why choose us, emergency CTA, process, reviews |
| `/services`        | Full service details for all 8 services       |
| `/about`           | Company story, mission, values, stats          |
| `/service-areas`   | Fictional local service-area cards             |
| `/gallery`         | Filterable project gallery with lightbox + before/after |
| `/contact`         | Contact info + quote request form              |

## Getting Started

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

## Project Structure

```
app/                 Route segments (App Router), one folder per page
  layout.tsx          Root layout: fonts, metadata, Navbar/Footer/MobileBottomBar
  page.tsx             Home page
  services/page.tsx    Services page
  about/page.tsx        About page
  service-areas/page.tsx
  gallery/page.tsx
  contact/page.tsx
  sitemap.ts / robots.ts
components/          Reusable UI components (Navbar, Footer, ServiceCard, etc.)
lib/                 Shared content/data (business info, services, testimonials…) and icon map
```

## Notes for Customization

- All business info (phone, email, hours, service areas, services,
  testimonials, gallery items) lives in `lib/data.ts` — update this one file
  to re-brand the entire site for a real client.
- The contact form (`components/ContactForm.tsx`) is front-end only. Wire it
  up to a real backend (API route, CRM, email service, etc.) before using in
  production.
- Images are pulled from Unsplash for demo purposes — replace with the
  client's real project photos before delivery.
