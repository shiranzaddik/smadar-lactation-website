interface Props {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}

/** Compact hero band for inner pages. */
export function PageHero({ eyebrow, title, subtitle }: Props) {
  return (
    <section className="relative overflow-hidden border-b border-beige-200/60 bg-gradient-to-b from-blush-50/60 to-cream">
      <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-sage-100/50 blur-3xl" />
      <div className="container-page relative py-14 text-center lg:py-20">
        {eyebrow ? <span className="eyebrow">{eyebrow}</span> : null}
        <h1 className="mx-auto mt-4 max-w-3xl font-heading text-4xl font-extrabold leading-tight text-ink sm:text-5xl">
          {title}
        </h1>
        {subtitle ? (
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-ink-light">
            {subtitle}
          </p>
        ) : null}
      </div>
    </section>
  );
}
