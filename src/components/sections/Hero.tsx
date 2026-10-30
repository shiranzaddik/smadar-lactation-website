import Link from "next/link";
import Image from "next/image";
import { site } from "@/config/site";
import { Icon } from "@/components/Icon";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* soft background wash */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-blush-100/40 blur-3xl" />
        <div className="absolute -left-20 top-40 h-80 w-80 rounded-full bg-sage-100/40 blur-3xl" />
      </div>

      <div className="grid items-stretch lg:grid-cols-2">
        {/* Text column — right side in RTL */}
        <div className="order-2 flex flex-col justify-center lg:order-1">
          <div className="mx-auto w-full max-w-xl px-5 py-12 sm:px-6 lg:px-12 lg:py-24 xl:px-16">
            <span className="eyebrow mb-5 w-fit">
              ייעוץ הנקה פרטי · {site.serviceArea}
            </span>
            <h1 className="font-heading text-4xl font-black leading-[1.2] text-ink sm:text-5xl lg:text-[3.4rem]">
              ההנקה שלך,{" "}
              <span className="gold-underline">בדרך שמתאימה לך</span>
            </h1>
            <p className="mt-5 max-w-lg text-lg leading-relaxed text-ink-light">
              אחות מוסמכת ויועצת הנקה. ליווי חם ומקצועי בבית או בקליניקה — בקצב
              שמתאים לך.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <WhatsAppButton label="לתיאום ייעוץ בוואטסאפ" />
              <Link href="/services" className="btn-outline">
                לפרטים נוספים
                <Icon name="arrow" className="h-4 w-4" />
              </Link>
            </div>

            <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold text-ink-light">
              {[
                "אחות מוסמכת ויועצת הנקה",
                "התמחות בפגים",
                "בבית או בקליניקה",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gold-100 text-gold-600">
                    <Icon name="check" className="h-4 w-4" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Full-bleed portrait — left side in RTL, spilling to the screen edge */}
        <div className="relative order-1 min-h-[46vh] w-full lg:order-2 lg:min-h-[86vh]">
          <Image
            src="/images/smadar-portrait.jpg"
            alt={`${site.name} — אחות מוסמכת ויועצת הנקה`}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
            style={{ objectPosition: "center 20%" }}
            priority
          />
          {/* floating trust chip */}
          <div className="absolute bottom-5 right-5 flex items-center gap-3 rounded-2xl bg-cream/90 px-5 py-3 shadow-float backdrop-blur-sm">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gold-100 text-gold-600">
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
