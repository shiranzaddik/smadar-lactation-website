import Link from "next/link";
import { testimonials } from "@/config/site";
import { SectionHeading } from "@/components/SectionHeading";
import { TestimonialCard } from "@/components/TestimonialCard";
import { Icon } from "@/components/Icon";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export function TestimonialsPreview() {
  const hasTestimonials = testimonials.length > 0;

  return (
    <section className="bg-blush-50/50 py-12 lg:py-16">
      <div className="container-page">
        <SectionHeading
          eyebrow="מה אומרות אימהות"
          title="המלצות"
          subtitle={
            hasTestimonials
              ? "מילים חמות מאימהות שליוויתי בדרך."
              : undefined
          }
        />

        {hasTestimonials ? (
          <>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {testimonials.slice(0, 3).map((item, i) => (
                <TestimonialCard key={i} item={item} />
              ))}
            </div>
            <div className="mt-10 text-center">
              <Link href="/testimonials" className="btn-outline">
                לכל ההמלצות
                <Icon name="arrow" className="h-4 w-4" />
              </Link>
            </div>
          </>
        ) : (
          <div className="mx-auto mt-10 max-w-xl rounded-3xl border border-beige-200/70 bg-white/70 p-10 text-center shadow-card">
            <span className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-blush-100 text-blush-600">
              <Icon name="heart" className="h-7 w-7" />
            </span>
            <p className="text-lg font-semibold text-ink">
              אוספת כאן המלצות אמיתיות מאימהות
            </p>
            <p className="mt-2 text-sm leading-relaxed text-ink-light">
              עברת אצלי ייעוץ ותרצי לשתף? אשמח מאוד לשמוע ממך. ההמלצות שיתפרסמו כאן
              יהיו אותנטיות ובאישור מלא בלבד.
            </p>
            <div className="mt-6 flex justify-center">
              <WhatsAppButton label="לשיתוף המלצה" />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
