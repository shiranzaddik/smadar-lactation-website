import type { MetadataRoute } from "next";
import { site } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url.replace(/\/$/, "");
  const now = new Date();

  return [
    "",
    "/services",
    "/about",
    "/testimonials",
    "/faq",
    "/contact",
    "/privacy",
    "/accessibility",
  ].map((path) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.7,
  }));
}
