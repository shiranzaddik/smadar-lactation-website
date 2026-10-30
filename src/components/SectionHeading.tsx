interface Props {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "start";
  as?: "h1" | "h2";
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  as = "h2",
}: Props) {
  const Tag = as;
  const alignment =
    align === "center" ? "text-center items-center" : "text-start items-start";
  return (
    <div className={`flex flex-col gap-4 ${alignment}`}>
      {eyebrow ? <span className="eyebrow">{eyebrow}</span> : null}
      <Tag
        className={`font-heading text-3xl font-bold leading-[1.15] tracking-tight text-ink sm:text-4xl lg:text-[2.6rem] ${
          align === "center" ? "mx-auto max-w-2xl" : ""
        }`}
      >
        {title}
      </Tag>
      <span className="gold-rule" aria-hidden />
      {subtitle ? (
        <p
          className={`text-lg leading-relaxed text-ink-light ${
            align === "center" ? "mx-auto max-w-2xl" : "max-w-2xl"
          }`}
        >
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
