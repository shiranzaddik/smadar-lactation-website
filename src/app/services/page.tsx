import type { Metadata } from "next";
import Link from "next/link";
import { services, site } from "@/config/site";
import { PageHero } from "@/components/PageHero";
import { ServiceCard } from "@/components/ServiceCard";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Icon } from "@/components/Icon";

export const metadata: Metadata = {
  title: "השירותים שלי — ייעוץ הנקה פרטי",
  description:
    "שירותי ייעוץ הנקה פרטי עד הבית: ליווי אחרי לידה, הכנה להנקה, הנקה כואבת, אספקת חלב, שאיבה ובקבוק, חזרה לעבודה וגמילה. באזור רמת גן והסביבה.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="השירותים שלי"
        title="ליווי הנקה שמתאים לך"
        subtitle="כל אם וכל תינוק הם עולם בפני עצמו. לכן הייעוץ תמיד מותאם אישית — לצרכים, לקצב ולמטרות שלך."
      />

      <section className="container-page py-16">
        <div className="mb-8 flex items-center justify-center gap-2 rounded-2xl border border-sage-200 bg-sage-50 px-5 py-4 text-center text-sm text-sage-700">
          <Icon name="home" className="h-5 w-5 shrink-0" />
          <span>
            הייעוץ מתקיים <strong>עד הבית</strong> ב{site.serviceArea}.
          </span>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} detailed />
          ))}
        </div>

        <p className="mx-auto mt-8 max-w-3xl text-center text-sm text-ink-muted">
          רשימת השירותים ניתנת להתאמה. היקף כל שירות ופורמט המפגש נקבעים יחד איתך
          בתיאום מראש, בהתאם למצב הספציפי שלך.
        </p>

        <div className="mt-12 rounded-4xl bg-beige-100/70 px-6 py-12 text-center">
          <h2 className="font-heading text-2xl font-bold text-ink sm:text-3xl">
            לא בטוחה איזה ייעוץ מתאים לך?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-ink-light">
            זה בסדר גמור. ספרי לי בוואטסאפ מה קורה, ונבין יחד מה הכי יעזור לך
            ולתינוק.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <WhatsAppButton label="דברי איתי בוואטסאפ" />
            <Link href="/contact" className="btn-outline">
              לטופס יצירת קשר
              <Icon name="arrow" className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
