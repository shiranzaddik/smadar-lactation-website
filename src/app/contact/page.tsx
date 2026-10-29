import type { Metadata } from "next";
import { site } from "@/config/site";
import { PageHero } from "@/components/PageHero";
import { ContactForm } from "@/components/ContactForm";
import { Icon } from "@/components/Icon";
import { whatsappLink, telLink, mailLink } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "צרי קשר",
  description:
    "ליצירת קשר עם סמדר שור קניגסברג, יועצת הנקה באזור רמת גן — בוואטסאפ, בטלפון, באינסטגרם או דרך טופס יצירת הקשר.",
  alternates: { canonical: "/contact" },
};

const hasRealPhone = !site.phone.includes("000-0000");
const hasRealEmail = !site.email.includes("example.com");

export default function ContactPage() {
  const channels = [
    {
      icon: "whatsapp" as const,
      label: "וואטסאפ",
      value: "הדרך המהירה והנוחה ביותר",
      href: whatsappLink(),
      external: true,
      accent: "text-[#25D366]",
    },
    hasRealPhone && {
      icon: "phone" as const,
      label: "טלפון",
      value: site.phone,
      href: telLink(),
      external: false,
      accent: "text-sage-600",
    },
    {
      icon: "instagram" as const,
      label: "אינסטגרם",
      value: site.instagramHandle,
      href: site.instagram,
      external: true,
      accent: "text-blush-500",
    },
    hasRealEmail && {
      icon: "mail" as const,
      label: "אימייל",
      value: site.email,
      href: mailLink(),
      external: false,
      accent: "text-sage-600",
    },
  ].filter(Boolean) as {
    icon: "whatsapp" | "phone" | "instagram" | "mail";
    label: string;
    value: string;
    href: string;
    external: boolean;
    accent: string;
  }[];

  return (
    <>
      <PageHero
        eyebrow="צרי קשר"
        title="בואי נדבר"
        subtitle="יש לך שאלה או שאת רוצה לתאם ייעוץ? אני כאן. אפשר לפנות בכל אחת מהדרכים — ואחזור אלייך בהקדם."
      />

      <section className="container-page py-16">
        <div className="grid gap-10 lg:grid-cols-5">
          {/* Channels */}
          <div className="flex flex-col gap-4 lg:col-span-2">
            <h2 className="font-heading text-xl font-bold text-ink">
              דרכים ליצירת קשר
            </h2>
            {channels.map((c) => (
              <a
                key={c.label}
                href={c.href}
                target={c.external ? "_blank" : undefined}
                rel={c.external ? "noopener noreferrer" : undefined}
                className="flex items-center gap-4 rounded-2xl border border-beige-200/70 bg-white/80 p-5 shadow-card transition-transform hover:-translate-y-0.5"
              >
                <span
                  className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-cream ${c.accent}`}
                >
                  <Icon name={c.icon} className="h-6 w-6" />
                </span>
                <span className="leading-tight">
                  <span className="block font-semibold text-ink">{c.label}</span>
                  <span
                    dir={
                      c.label === "אינסטגרם" ||
                      c.label === "אימייל" ||
                      c.label === "טלפון"
                        ? "ltr"
                        : undefined
                    }
                    className="block text-sm text-ink-light"
                  >
                    {c.value}
                  </span>
                </span>
              </a>
            ))}

            <div className="mt-2 flex items-start gap-3 rounded-2xl bg-sage-50 p-5 text-sm text-sage-700">
              <Icon name="home" className="mt-0.5 h-5 w-5 shrink-0" />
              <p>
                <strong>אזור השירות:</strong> {site.serviceAreaLong}
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <div className="rounded-4xl border border-beige-200/70 bg-white/70 p-7 shadow-card sm:p-9">
              <h2 className="mb-6 font-heading text-xl font-bold text-ink">
                טופס פנייה
              </h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
