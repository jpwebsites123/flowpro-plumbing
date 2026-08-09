import type { MetadataRoute } from "next";

const base = "https://flowproplumbing-demo.example.com";
const routes = ["", "/services", "/about", "/service-areas", "/gallery", "/contact"];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
