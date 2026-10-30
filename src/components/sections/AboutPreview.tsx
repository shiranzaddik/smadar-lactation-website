import Link from "next/link";
import { site } from "@/config/site";
import { Icon } from "@/components/Icon";
import { ImageSlot } from "@/components/ImageSlot";

export function AboutPreview() {
  return (
    <section className="container-page py-12 lg:py-16">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div className="relative order-2 lg:order-1">
          <ImageSlot
            src="/images/smadar-portrait.jpg"
            alt={`פורטרט של ${site.name}`}
            objectPosition="center 20%"
            className="aspect-square w-full max-w-md shadow-soft lg:mr-auto"
          />
        </div>
        <div className="order-1 flex flex-col gap-5 lg:order-2">
          <span className="eyebrow w-fit">קצת עליי</span>
          <h2 className="font-heading text-3xl font-bold leading-tight text-ink sm:text-4xl">
            נעים להכיר, אני {site.name}
          </h2>
          <p className="text-lg leading-relaxed text-ink-light">
            אחות מוסמכת ויועצת הנקה, עם ניסיון בטיפת חלב והתמחות בפגים. לכל אם
            מגיע ליווי חם ונטול שיפוטיות.
          </p>
          <p className="leading-relaxed text-ink-light">
            המטרה שלי: שתרגישי בטוחה ומוחזקת, וההחלטות על ההנקה יהיו שלך.
          </p>
          <Link href="/about" className="btn-outline w-fit">
            להכיר אותי יותר
            <Icon name="arrow" className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
