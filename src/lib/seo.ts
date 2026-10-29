import { site } from "@/config/site";

/**
 * Structured data (JSON-LD). Built only from verified facts.
 * We intentionally do NOT emit price, rating, or review schema until real,
 * approved data exists — fabricating it would be misleading and can be
 * penalized by search engines.
 */

const hasRealPhone = !site.phone.includes("000-0000");

export function localBusinessJsonLd() {
  const data: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "MedicalBusiness"],
    name: site.name,
    description: site.description,
    url: site.url,
    areaServed: {
      "@type": "Place",
      name: site.serviceArea,
    },
    knowsLanguage: "he",
    sameAs: [site.instagram],
    // Home-visit service, no fixed storefront address published.
    availableService: {
      "@type": "Service",
      serviceType: "ייעוץ הנקה",
      areaServed: site.serviceArea,
    },
  };
  if (hasRealPhone) {
    data.telephone = `+${site.phoneIntl}`;
  }
  return data;
}

export function personJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    jobTitle: site.role,
    worksFor: undefined,
    url: `${site.url}/about`,
    sameAs: [site.instagram],
  };
}

export function faqJsonLd(items: ReadonlyArray<{ q: string; a: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
}

export function articleJsonLd(args: {
  title: string;
  description: string;
  date: string;
  slug: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: args.title,
    description: args.description,
    datePublished: args.date,
    inLanguage: "he",
    author: { "@type": "Person", name: site.name },
    mainEntityOfPage: `${site.url}/articles/${args.slug}`,
  };
}

/** Helper to render a JSON-LD <script> safely. */
export function jsonLdScript(data: unknown) {
  return {
    __html: JSON.stringify(data),
  };
}
