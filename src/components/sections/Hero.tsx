import Link from "next/link";
import { site } from "@/config/site";
import { Icon } from "@/components/Icon";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { ImageSlot } from "@/components/ImageSlot";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* soft background wash */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-blush-100/40 blur-3xl" />
        <div className="absolute -left-20 top-40 h-80 w-80 rounded-full bg-sage-100/40 blur-3xl" />
      </div>

      <div className="container-page grid items-center gap-10 py-16 lg:grid-cols-2 lg:gap-16 lg:py-24">
        {/* Text column — right side in RTL */}
        <div className="order-2 flex flex-col gap-6 lg:order-1">
          <span className="eyebrow w-fit">
            ייעוץ הנקה פרטי · {site.serviceArea}
          </span>
          <h1 className="font-heading text-4xl font-bold leading-[1.15] tracking-tight text-ink sm:text-5xl lg:text-[3.2rem]">
            ההנקה שלך,{" "}
            <span className="gold-underline">בדרך שמתאימה לך</span>
          </h1>
          <p className="max-w-lg text-lg leading-relaxed text-ink-light">
            אחות מוסמכת ויועצת הנקה. ליווי חם ומקצועי בבית או בקליניקה — בקצב
            שמתאים לך.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <WhatsAppButton label="לתיאום ייעוץ בוואטסאפ" />
            <Link href="/services" className="btn-outline">
              לפרטים נוספים
              <Icon name="arrow" className="h-4 w-4" />
            </Link>
          </div>

          <ul className="mt-2 flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold text-ink-light">
            {[
              "אחות מוסמכת ויועצת הנקה",
              "התמחות בפגים",
              "בבית או בקליניקה",
            ].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-sage-100 text-sage-600">
                  <Icon name="check" className="h-4 w-4" />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Portrait — large, in a soft rounded frame */}
        <div className="relative order-1 lg:order-2">
          {/* editorial offset frame behind the portrait */}
          <div
            aria-hidden
            className="absolute -left-4 -top-4 h-full w-full rounded-[2rem] border border-blush-200 bg-blush-50/60 lg:-left-6 lg:-top-6"
          />
          <ImageSlot
            src="/images/smadar-portrait.jpg"
            alt={`${site.name} — אחות מוסמכת ויועצת הנקה`}
            objectPosition="center 15%"
            rounded="rounded-[2rem]"
            className="relative aspect-[4/5] w-full shadow-soft"
            priority
          />
          {/* floating trust chip */}
          <div className="absolute -bottom-5 right-6 flex items-center gap-3 rounded-2xl bg-cream/95 px-5 py-3 shadow-float backdrop-blur-sm">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-sage-100 text-sage-600">
              <Icon name="home" className="h-5 w-5" />
            </span>
            <div className="leading-tight">
              <p className="text-sm font-bold text-ink">בבית או בקליניקה</p>
              <p className="text-xs text-ink-muted">{site.serviceArea}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
