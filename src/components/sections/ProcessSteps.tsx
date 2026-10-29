import { processSteps } from "@/config/site";
import { SectionHeading } from "@/components/SectionHeading";

export function ProcessSteps() {
  return (
    <section className="container-page py-12 lg:py-16">
      <SectionHeading
        eyebrow="איך זה עובד"
        title="שלושה צעדים פשוטים"
        subtitle="תהליך ברור ורגוע, מהפנייה ועד הליווי."
      />
      <div className="relative mt-14 grid gap-8 md:grid-cols-3">
        {/* connecting line (desktop) */}
        <div
          aria-hidden
          className="absolute inset-x-12 top-9 hidden h-px bg-gradient-to-l from-sage-200 via-blush-200 to-sage-200 md:block"
        />
        {processSteps.map((step) => (
          <div
            key={step.number}
            className="relative flex flex-col items-center gap-4 text-center"
          >
            <span className="relative z-10 flex h-20 w-20 items-center justify-center rounded-full bg-white font-heading text-2xl font-extrabold text-sage-600 shadow-float ring-4 ring-sage-100">
              {step.number}
            </span>
            <h3 className="font-heading text-xl font-bold text-ink">
              {step.title}
            </h3>
            <p className="max-w-xs text-sm leading-relaxed text-ink-light">
              {step.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
