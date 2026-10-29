import Link from "next/link";
import type { Article } from "@/lib/articles";
import { Icon } from "./Icon";

export function ArticleCard({ article }: { article: Article }) {
  return (
    <article className="group flex h-full flex-col gap-3 rounded-3xl border border-beige-200/70 bg-white/80 p-6 shadow-card transition-all hover:-translate-y-1 hover:shadow-soft">
      <div className="flex items-center gap-2 text-xs font-medium text-ink-muted">
        <time dateTime={article.date}>
          {new Date(article.date).toLocaleDateString("he-IL", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </time>
        <span aria-hidden>·</span>
        <span>{article.readingMinutes} דק׳ קריאה</span>
      </div>
      <h3 className="font-heading text-xl font-bold leading-snug text-ink">
        <Link
          href={`/articles/${article.slug}`}
          className="transition-colors hover:text-sage-700"
        >
          {article.title}
        </Link>
      </h3>
      <p className="flex-1 text-sm leading-relaxed text-ink-light">
        {article.excerpt}
      </p>
      <div className="flex flex-wrap gap-2 pt-1">
        {article.tags.slice(0, 3).map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-sage-50 px-3 py-1 text-xs font-medium text-sage-700"
          >
            {tag}
          </span>
        ))}
      </div>
      <Link
        href={`/articles/${article.slug}`}
        className="mt-1 inline-flex items-center gap-1.5 text-sm font-semibold text-sage-700 hover:text-sage-600"
      >
        להמשך קריאה
        <Icon
          name="arrow"
          className="h-4 w-4 transition-transform group-hover:-translate-x-1"
        />
      </Link>
    </article>
  );
}
