import type { MetadataRoute } from "next";
import { site } from "@/config/site";
import { getPublishedArticles } from "@/lib/articles";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url.replace(/\/$/, "");
  const now = new Date();

  const staticRoutes = [
    "",
    "/services",
    "/about",
    "/testimonials",
    "/articles",
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

  const articleRoutes = getPublishedArticles().map((a) => ({
    url: `${base}/articles/${a.slug}`,
    lastModified: new Date(a.date),
    changeFrequency: "yearly" as const,
    priority: 0.5,
  }));

  return [...staticRoutes, ...articleRoutes];
}
