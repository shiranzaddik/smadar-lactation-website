import type { Metadata } from "next";
import Link from "next/link";
import { faq } from "@/config/site";
import { PageHero } from "@/components/PageHero";
import { FaqAccordion } from "@/components/FaqAccordion";
import { Icon } from "@/components/Icon";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { faqJsonLd, jsonLdScript } from "@/lib/seo";

export const metadata: Metadata = {
  title: "שאלות נפוצות",
  description:
    "תשובות לשאלות נפוצות על ייעוץ הנקה: מתי לפנות, כאב בהנקה, אספקת חלב, שילוב בקבוק, שאיבה, חזרה לעבודה וייעוץ אונליין.",
  alternates: { canonical: "/faq" },
};

export default function FaqPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(faqJsonLd(faq))}
      />
      <PageHero
        eyebrow="שאלות נפוצות"
        title="כל מה שרצית לדעת"
        subtitle="תשובות לשאלות שחוזרות אצל אימהות רבות."
      />

      <section className="container-page py-16">
        <FaqAccordion items={faq} />

        <div className="mx-auto mt-12 max-w-2xl rounded-3xl border border-beige-200/70 bg-beige-100/60 p-8 text-center">
          <p className="text-lg font-semibold text-ink">נשארה לך שאלה?</p>
          <p className="mt-2 text-sm leading-relaxed text-ink-light">
            אין שאלה טיפשית כשמדובר בך ובתינוק. כתבי לי ואשמח לעזור.
          </p>
          <div className="mt-5 flex flex-wrap justify-center gap-3">
            <WhatsAppButton label="לשאלה בוואטסאפ" />
            <Link href="/contact" className="btn-outline">
              ליצירת קשר
              <Icon name="arrow" className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <p className="mx-auto mt-8 max-w-2xl text-center text-xs text-ink-muted">
          המידע בעמוד זה כללי ואינו מהווה תחליף לייעוץ רפואי אישי. בכל חשש בריאותי
          יש לפנות לצוות רפואי מוסמך.
        </p>
      </section>
    </>
  );
}
