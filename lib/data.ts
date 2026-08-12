export const business = {
  name: "FlowPro Plumbing & Drain",
  shortName: "FlowPro",
  tagline: "Reliable Plumbing. Done Right.",
  phone: "(555) 247-7586",
  phoneDisplay: "(555) 247-PLUM",
  phoneHref: "tel:+15552477586",
  email: "service@flowproplumbing.com",
  hours: [
    { days: "Monday – Friday", time: "7:00 AM – 7:00 PM" },
    { days: "Saturday", time: "8:00 AM – 5:00 PM" },
    { days: "Sunday", time: "Emergency Service Only" },
  ],
  serviceAreaSummary: "Maple Ridge, Cedar Falls, Brookhaven & the surrounding area",
};

export type Service = {
  slug: string;
  name: string;
  icon: string;
  shortDescription: string;
  description: string;
  commonProblems: string[];
  benefits: string[];
  image: string;
};

export const services: Service[] = [
  {
    slug: "emergency-plumbing",
    name: "Emergency Plumbing",
    icon: "AlertTriangle",
    shortDescription:
      "Burst pipes, major leaks, and backups don't wait — our emergency plumbers respond fast, day or night.",
    description:
      "When a pipe bursts or a drain backs up without warning, every minute counts. Our emergency plumbing team is equipped to handle urgent residential and commercial issues quickly, with the tools and experience to stop the damage and get your home back to normal.",
    commonProblems: [
      "Burst or split pipes",
      "Overflowing toilets",
      "Sewer backups",
      "No hot or cold water",
      "Flooding from a failed fixture",
    ],
    benefits: [
      "Fast local response times",
      "Available for urgent Sunday calls",
      "Fully stocked service vehicles",
      "Clear explanation before any work begins",
    ],
    image:
      "https://images.unsplash.com/photo-1676210134188-4c05dd172f89?q=80&w=1200&auto=format&fit=crop",
  },
  {
    slug: "drain-cleaning",
    name: "Drain Cleaning",
    icon: "Waves",
    shortDescription:
      "Slow or clogged drains in your sink, shower, tub, or main line — cleared quickly without harsh chemicals.",
    description:
      "From a slow bathroom sink to a completely blocked main line, clogged drains are one of the most common plumbing headaches. We use professional-grade equipment to clear blockages thoroughly, rather than masking the problem the way store-bought chemicals often do.",
    commonProblems: [
      "Slow-draining sinks and tubs",
      "Clogged shower and floor drains",
      "Recurring main line backups",
      "Gurgling drains or odors",
    ],
    benefits: [
      "Thorough clearing, not a temporary fix",
      "Safe for older and modern pipe systems",
      "Camera inspection available for stubborn clogs",
      "Upfront pricing before we start",
    ],
    image:
      "https://images.unsplash.com/photo-1607472829760-8a25b6f4dc84?q=80&w=1200&auto=format&fit=crop",
  },
  {
    slug: "leak-repair",
    name: "Leak Detection & Repair",
    icon: "Droplet",
    shortDescription:
      "Dripping faucets to hidden pipe leaks — found and fixed before they turn into costly water damage.",
    description:
      "Small leaks rarely stay small. Whether it's a dripping faucet or a hidden leak behind a wall driving up your water bill, our plumbers use proven leak-detection methods to find the source and repair it correctly the first time.",
    commonProblems: [
      "Dripping or leaking faucets",
      "Unexplained increases in water bills",
      "Damp spots on walls, floors or ceilings",
      "Leaking supply or drain lines",
    ],
    benefits: [
      "Non-invasive leak detection where possible",
      "Prevents costly structural water damage",
      "Repairs built to last, not quick patches",
    ],
    image:
      "https://images.unsplash.com/photo-1584622781564-1d987f7333c1?q=80&w=1200&auto=format&fit=crop",
  },
  {
    slug: "water-heater",
    name: "Water Heater Services",
    icon: "Flame",
    shortDescription:
      "Water heater repair, replacement and installation for tank and tankless systems.",
    description:
      "No hot water is never convenient. We repair, maintain, and install both tank and tankless water heaters, helping you choose the right unit for your household size and budget when it's time for a replacement.",
    commonProblems: [
      "No hot water or inconsistent temperature",
      "Rumbling, popping or leaking tank",
      "Water heater at the end of its lifespan",
      "Pilot light or ignition issues",
    ],
    benefits: [
      "Support for tank and tankless systems",
      "Honest guidance on repair vs. replacement",
      "Proper installation for safety and efficiency",
    ],
    image:
      "https://images.unsplash.com/photo-1620626011761-996317b8d101?q=80&w=1200&auto=format&fit=crop",
  },
  {
    slug: "toilet-services",
    name: "Toilet Repair & Installation",
    icon: "Bath",
    shortDescription:
      "Running, clogged or leaking toilets repaired fast, plus new toilet installations.",
    description:
      "A running or clogged toilet is more than an annoyance — it can waste water and signal a bigger issue. We repair existing toilets and install new, water-efficient models with clean, careful workmanship.",
    commonProblems: [
      "Constantly running toilet",
      "Frequent clogs",
      "Rocking, loose or leaking base",
      "Weak or incomplete flush",
    ],
    benefits: [
      "Water-efficient replacement options",
      "Clean installs with no mess left behind",
      "Fast repairs for everyday annoyances",
    ],
    image:
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1200&auto=format&fit=crop",
  },
  {
    slug: "faucets-fixtures",
    name: "Faucet & Fixture Installation",
    icon: "ShowerHead",
    shortDescription:
      "Faucets, sinks, showerheads and fixtures installed or replaced with clean, precise work.",
    description:
      "Upgrading a faucet or fixture can transform a kitchen or bathroom. Our plumbers install and replace faucets, sinks, showerheads and more, making sure every connection is sealed and every fixture works the way it should.",
    commonProblems: [
      "Outdated or leaking faucets",
      "Low water pressure at a fixture",
      "Fixture upgrades for a remodel",
      "Mismatched or failing hardware",
    ],
    benefits: [
      "Wide range of fixture compatibility",
      "Precise, leak-free installation",
      "Great for remodels and quick refreshes",
    ],
    image:
      "https://images.unsplash.com/photo-1584622650271-6a2f2e6b3f2b?q=80&w=1200&auto=format&fit=crop",
  },
  {
    slug: "pipe-repair",
    name: "Pipe Repair",
    icon: "Wrench",
    shortDescription:
      "Damaged, corroded, frozen or burst pipes repaired or replaced with lasting solutions.",
    description:
      "Aging, corroded or frozen pipes can lead to serious water damage if left unaddressed. We diagnose the true source of pipe problems and repair or replace the affected sections using durable materials suited to your home.",
    commonProblems: [
      "Corroded or aging pipes",
      "Frozen pipes in winter",
      "Pinhole leaks",
      "Low water pressure from pipe damage",
    ],
    benefits: [
      "Accurate diagnosis before any repair",
      "Durable materials built for the long term",
      "Minimally invasive repair methods where possible",
    ],
    image:
      "https://images.unsplash.com/photo-1607472829760-8a25b6f4dc84?q=80&w=1200&auto=format&fit=crop",
  },
  {
    slug: "sump-pumps",
    name: "Sump Pumps",
    icon: "Gauge",
    shortDescription:
      "Sump pump installation, replacement and maintenance to help protect your basement.",
    description:
      "A properly working sump pump is one of the best defenses against basement flooding. We install new systems, replace aging pumps, and perform maintenance checks to help keep your basement dry through every season.",
    commonProblems: [
      "Sump pump not turning on",
      "Aging or noisy pump",
      "No backup power source",
      "New basement without a sump system",
    ],
    benefits: [
      "Battery backup options available",
      "Seasonal maintenance to catch issues early",
      "Peace of mind before storm season",
    ],
    image:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=1200&auto=format&fit=crop",
  },
];

export type ServiceArea = {
  name: string;
  description: string;
  services: string[];
};

export const serviceAreas: ServiceArea[] = [
  {
    name: "Maple Ridge",
    description:
      "Fast local response for the homes and businesses throughout Maple Ridge, from older established streets to newer developments.",
    services: ["Emergency Plumbing", "Drain Cleaning", "Water Heaters"],
  },
  {
    name: "Cedar Falls",
    description:
      "Serving Cedar Falls homeowners with everyday repairs and larger plumbing installations alike.",
    services: ["Leak Repair", "Pipe Repair", "Fixture Installation"],
  },
  {
    name: "Brookhaven",
    description:
      "A regular service area for our team, with quick turnaround on both routine maintenance and urgent calls.",
    services: ["Toilet Services", "Sump Pumps", "Emergency Plumbing"],
  },
  {
    name: "Fairview Heights",
    description:
      "Supporting the growing neighborhoods of Fairview Heights with dependable residential plumbing service.",
    services: ["Drain Cleaning", "Water Heaters", "Leak Repair"],
  },
  {
    name: "Riverside District",
    description:
      "From condos to single-family homes near the river, we handle plumbing calls throughout the Riverside District.",
    services: ["Emergency Plumbing", "Pipe Repair", "Sump Pumps"],
  },
  {
    name: "Oakdale",
    description:
      "A trusted local option for Oakdale residents who want honest pricing and clean, careful workmanship.",
    services: ["Fixture Installation", "Toilet Services", "Drain Cleaning"],
  },
];

export type Testimonial = {
  name: string;
  location: string;
  rating: number;
  quote: string;
};

export const testimonials: Testimonial[] = [
  {
    name: "Sample Review",
    location: "Maple Ridge",
    rating: 5,
    quote:
      "FlowPro came out the same day when our basement drain backed up. The plumber explained everything clearly and had the problem fixed quickly.",
  },
  {
    name: "Sample Review",
    location: "Brookhaven",
    rating: 5,
    quote:
      "Upfront about the price before any work started, and the bathroom faucet install looks great. No surprises on the bill.",
  },
  {
    name: "Sample Review",
    location: "Cedar Falls",
    rating: 5,
    quote:
      "Our water heater went out on a Saturday and they still made it out. Professional, on time, and cleaned up after themselves.",
  },
  {
    name: "Sample Review",
    location: "Fairview Heights",
    rating: 4,
    quote:
      "Cleared a stubborn main line clog that two other visits from a different company couldn't fix. Would call again.",
  },
  {
    name: "Sample Review",
    location: "Riverside District",
    rating: 5,
    quote:
      "Friendly, straightforward, and didn't try to upsell us on anything we didn't need. Exactly what you want from a plumber.",
  },
  {
    name: "Sample Review",
    location: "Oakdale",
    rating: 5,
    quote:
      "Installed a new sump pump before the spring rains. Explained the backup battery option without any pressure to buy.",
  },
];

export const stats = [
  { label: "Years of Experience", value: "10+" },
  { label: "Jobs Completed", value: "1,000+" },
  { label: "Response Time", value: "Fast Local Service" },
  { label: "Our Approach", value: "Customer-First" },
];

export const galleryCategories = [
  "Bathroom Plumbing",
  "Kitchen Plumbing",
  "Water Heaters",
  "Pipe Repairs",
  "Drain Work",
  "Fixture Installations",
] as const;

export type GalleryItem = {
  id: string;
  category: (typeof galleryCategories)[number];
  title: string;
  image: string;
};

export const galleryItems: GalleryItem[] = [
  {
    id: "g1",
    category: "Bathroom Plumbing",
    title: "Full bathroom re-pipe",
    image:
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: "g2",
    category: "Bathroom Plumbing",
    title: "Walk-in shower valve replacement",
    image:
      "https://images.unsplash.com/photo-1620626011761-996317b8d101?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: "g3",
    category: "Kitchen Plumbing",
    title: "Kitchen sink and disposal install",
    image:
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: "g4",
    category: "Kitchen Plumbing",
    title: "Under-sink leak repair",
    image:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: "g5",
    category: "Water Heaters",
    title: "Tankless water heater install",
    image:
      "https://images.unsplash.com/photo-1676210134190-3f2c0d5cf58d?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: "g6",
    category: "Water Heaters",
    title: "Standard tank replacement",
    image:
      "https://images.unsplash.com/photo-1607472829760-8a25b6f4dc84?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: "g7",
    category: "Pipe Repairs",
    title: "Copper pipe section replacement",
    image:
      "https://images.unsplash.com/photo-1584622781564-1d987f7333c1?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: "g8",
    category: "Pipe Repairs",
    title: "Exposed pipe repair, basement",
    image:
      "https://images.unsplash.com/photo-1621905252472-943afaa20e20?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: "g9",
    category: "Drain Work",
    title: "Main line camera inspection",
    image:
      "https://images.unsplash.com/photo-1607472829760-8a25b6f4dc84?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: "g10",
    category: "Drain Work",
    title: "Floor drain clearing",
    image:
      "https://images.unsplash.com/photo-1595535373192-b25a8e1a3b0a?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: "g11",
    category: "Fixture Installations",
    title: "Modern faucet upgrade",
    image:
      "https://images.unsplash.com/photo-1584622650271-6a2f2e6b3f2b?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: "g12",
    category: "Fixture Installations",
    title: "Rain showerhead install",
    image:
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=1000&auto=format&fit=crop",
  },
];

export const beforeAfterProjects = [
  {
    title: "Outdated Bathroom to Modern Fixtures",
    before:
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=900&auto=format&fit=crop",
    after:
      "https://images.unsplash.com/photo-1620626011761-996317b8d101?q=80&w=900&auto=format&fit=crop",
  },
  {
    title: "Corroded Pipe Section Replacement",
    before:
      "https://images.unsplash.com/photo-1584622781564-1d987f7333c1?q=80&w=900&auto=format&fit=crop",
    after:
      "https://images.unsplash.com/photo-1607472829760-8a25b6f4dc84?q=80&w=900&auto=format&fit=crop",
  },
  {
    title: "Water Heater Replacement",
    before:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=900&auto=format&fit=crop",
    after:
      "https://images.unsplash.com/photo-1676210134190-3f2c0d5cf58d?q=80&w=900&auto=format&fit=crop",
  },
];

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/service-areas", label: "Service Areas" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];
