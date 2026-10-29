import { trustPoints } from "@/config/site";
import { Icon, type IconName } from "@/components/Icon";

export function TrustPoints() {
  return (
    <section className="container-page py-8">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {trustPoints.map((point) => (
          <div
            key={point.title}
            className="flex flex-col gap-3 rounded-3xl border border-beige-200/70 bg-white/70 p-6 shadow-card transition-transform hover:-translate-y-1"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sage-100 text-sage-600">
              <Icon name={point.icon as IconName} className="h-6 w-6" />
            </span>
            <h3 className="font-heading text-lg font-bold text-ink">
              {point.title}
            </h3>
            <p className="text-sm leading-relaxed text-ink-light">{point.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
