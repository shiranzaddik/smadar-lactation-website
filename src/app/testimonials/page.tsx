import type { Metadata } from "next";
import Link from "next/link";
import { testimonials } from "@/config/site";
import { PageHero } from "@/components/PageHero";
import { TestimonialCard } from "@/components/TestimonialCard";
import { Icon } from "@/components/Icon";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "המלצות",
  description:
    "המלצות אותנטיות מאימהות שליוותה סמדר שור קניגסברג בייעוץ הנקה פרטי. רק המלצות אמיתיות ובאישור מלא.",
  alternates: { canonical: "/testimonials" },
};

export default function TestimonialsPage() {
  const has = testimonials.length > 0;
  return (
    <>
      <PageHero
        eyebrow="מה אומרות אימהות"
        title="המלצות"
        subtitle={
          has
            ? "מילים חמות מאימהות שבחרו לשתף את החוויה שלהן."
            : "המלצות אמיתיות מאימהות יתווספו כאן — תמיד באישור מלא ובלי המצאות."
        }
      />

      <section className="container-page py-16">
        {has ? (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((item, i) => (
              <TestimonialCard key={i} item={item} />
            ))}
          </div>
        ) : (
          <div className="mx-auto max-w-xl rounded-4xl border border-beige-200/70 bg-white/70 p-12 text-center shadow-card">
            <span className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-blush-100 text-blush-600">
              <Icon name="heart" className="h-8 w-8" />
            </span>
            <h2 className="font-heading text-2xl font-bold text-ink">
              בקרוב — מילים מאימהות
            </h2>
            <p className="mx-auto mt-3 max-w-md leading-relaxed text-ink-light">
              אני בתחילת הדרך באיסוף המלצות, ומקפידה לפרסם כאן רק דברים אמיתיים
              ובאישור מלא של מי שכתבה אותם. עברת אצלי ייעוץ ותרצי לשתף? אשמח מאוד.
            </p>
            <div className="mt-7 flex flex-wrap justify-center gap-3">
              <WhatsAppButton label="לשיתוף המלצה" />
              <Link href="/contact" className="btn-outline">
                ליצירת קשר
                <Icon name="arrow" className="h-4 w-4" />
              </Link>
            </div>
          </div>
        )}
      </section>
    </>
  );
}
