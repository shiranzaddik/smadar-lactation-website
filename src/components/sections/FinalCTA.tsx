import Link from "next/link";
import { site } from "@/config/site";
import { Icon } from "@/components/Icon";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export function FinalCTA() {
  return (
    <section className="container-page py-14 lg:py-20">
      <div className="relative overflow-hidden rounded-4xl bg-gradient-to-br from-sage-500 to-sage-600 px-6 py-14 text-center shadow-soft sm:px-12">
        <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-white/10 blur-2xl" />
        <div className="pointer-events-none absolute -bottom-20 -left-10 h-64 w-64 rounded-full bg-blush-300/20 blur-2xl" />
        <div className="relative mx-auto flex max-w-2xl flex-col items-center gap-5">
          <h2 className="font-heading text-3xl font-bold text-white sm:text-4xl">
            מוכנה להרגיש בטוחה יותר עם ההנקה?
          </h2>
          <p className="text-lg leading-relaxed text-sage-50">
            אני כאן בשבילך. בואי נדבר — בלי התחייבות — ונראה יחד איך אני יכולה
            לעזור לך ולתינוק.
          </p>
          <div className="mt-2 flex flex-wrap items-center justify-center gap-3">
            <WhatsAppButton
              label="לתיאום ייעוץ בוואטסאפ"
              className="bg-white text-sage-700 hover:bg-cream"
            />
            <Link
              href="/contact"
              className="btn border-2 border-white/70 text-white hover:bg-white/10"
            >
              לטופס יצירת קשר
              <Icon name="arrow" className="h-4 w-4" />
            </Link>
          </div>
          <p className="mt-2 text-sm text-sage-50/90">
            בבית או בקליניקה · {site.serviceArea}
          </p>
        </div>
      </div>
    </section>
  );
}
