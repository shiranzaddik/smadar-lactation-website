import type { Testimonial } from "@/config/site";
import { Icon } from "./Icon";

export function TestimonialCard({ item }: { item: Testimonial }) {
  return (
    <figure className="flex h-full flex-col gap-4 rounded-3xl border border-beige-200/70 bg-white/80 p-7 shadow-card">
      <div className="flex gap-1 text-blush-400" aria-hidden>
        {Array.from({ length: 5 }).map((_, i) => (
          <Icon key={i} name="star" className="h-5 w-5" fill="currentColor" stroke="none" />
        ))}
      </div>
      <blockquote className="flex-1 text-base leading-relaxed text-ink-light">
        “{item.text}”
      </blockquote>
      <figcaption className="flex items-center gap-3 border-t border-beige-200/70 pt-4">
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-sage-100 font-heading font-bold text-sage-600">
          {item.name.charAt(0)}
        </span>
        <span className="leading-tight">
          <span className="block font-semibold text-ink">{item.name}</span>
          {item.location ? (
            <span className="block text-xs text-ink-muted">{item.location}</span>
          ) : null}
        </span>
      </figcaption>
    </figure>
  );
}
