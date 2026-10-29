import { challenges } from "@/config/site";
import { SectionHeading } from "@/components/SectionHeading";
import { Icon } from "@/components/Icon";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export function Challenges() {
  return (
    <section className="bg-sage-50/60 py-12 lg:py-16">
      <div className="container-page">
        <SectionHeading
          eyebrow="מתמודדת עם קושי?"
          title="את לא לבד — ולרוב יש פתרון"
          subtitle="משהו מוכר? זה הזמן לפנות."
        />
        <ul className="mx-auto mt-12 grid max-w-4xl gap-3 sm:grid-cols-2">
          {challenges.map((item) => (
            <li
              key={item}
              className="flex items-center gap-3 rounded-2xl border border-beige-200/70 bg-white/70 px-5 py-4 text-ink-light shadow-card"
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blush-100 text-blush-600">
                <Icon name="heart" className="h-4 w-4" />
              </span>
              <span className="text-sm font-medium">{item}</span>
            </li>
          ))}
        </ul>
        <div className="mt-10 text-center">
          <WhatsAppButton label="אשמח לעזור — דברי איתי" />
        </div>
      </div>
    </section>
  );
}
