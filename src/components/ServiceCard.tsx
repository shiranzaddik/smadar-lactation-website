import Link from "next/link";
import type { Service } from "@/config/site";
import { Icon, type IconName } from "./Icon";

interface Props {
  service: Service;
  /** When true, shows the full helpsWith list + description (services page). */
  detailed?: boolean;
}

export function ServiceCard({ service, detailed = false }: Props) {
  return (
    <article
      id={service.slug}
      className="group flex scroll-mt-28 flex-col gap-4 rounded-3xl border border-beige-200/70 bg-white/80 p-7 shadow-card transition-all hover:-translate-y-1 hover:shadow-soft"
    >
      <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blush-50 text-blush-600">
        <Icon name={service.icon as IconName} className="h-7 w-7" />
      </span>

      <div className="flex items-start justify-between gap-2">
        <h3 className="font-heading text-xl font-bold text-ink">{service.title}</h3>
      </div>

      <p className="text-sm leading-relaxed text-ink-light">
        {detailed ? service.description : service.short}
      </p>

      {detailed && (
        <ul className="mt-1 flex flex-col gap-2">
          {service.helpsWith.map((item) => (
            <li
              key={item}
              className="flex items-start gap-2 text-sm text-ink-light"
            >
              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-sage-100 text-sage-600">
                <Icon name="check" className="h-3.5 w-3.5" />
              </span>
              {item}
            </li>
          ))}
        </ul>
      )}

      {!detailed && (
        <Link
          href={`/services#${service.slug}`}
          className="mt-auto inline-flex items-center gap-1.5 pt-2 text-sm font-semibold text-sage-700 transition-colors hover:text-sage-600"
        >
          קראי עוד
          <Icon name="arrow" className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
        </Link>
      )}
    </article>
  );
}
