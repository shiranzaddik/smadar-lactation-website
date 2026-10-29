import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getArticleBySlug,
  getPublishedArticles,
} from "@/lib/articles";
import { services } from "@/config/site";
import { Icon } from "@/components/Icon";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { articleJsonLd, jsonLdScript } from "@/lib/seo";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return getPublishedArticles().map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return { title: "מאמר לא נמצא" };
  return {
    title: article.title,
    description: article.excerpt,
    alternates: { canonical: `/articles/${article.slug}` },
    openGraph: {
      type: "article",
      title: article.title,
      description: article.excerpt,
      publishedTime: article.date,
    },
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const related = article.relatedService
    ? services.find((s) => s.slug === article.relatedService)
    : undefined;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(
          articleJsonLd({
            title: article.title,
            description: article.excerpt,
            date: article.date,
            slug: article.slug,
          })
        )}
      />

      <article className="container-page py-14">
        <div className="mx-auto max-w-3xl">
          <Link
            href="/articles"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-sage-700 hover:text-sage-600"
          >
            <Icon name="arrow" className="h-4 w-4 rotate-180" />
            חזרה למאמרים
          </Link>

          <header className="mt-6 flex flex-col gap-4">
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
            <h1 className="font-heading text-3xl font-extrabold leading-tight text-ink sm:text-4xl">
              {article.title}
            </h1>
            <div className="flex flex-wrap gap-2">
              {article.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-sage-50 px-3 py-1 text-xs font-medium text-sage-700"
                >
                  {tag}
                </span>
              ))}
            </div>
          </header>

          <div className="mt-8 flex flex-col gap-5 text-lg leading-relaxed text-ink-light">
            {article.body.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>

          <div className="mt-10 rounded-3xl border-r-4 border-sage-300 bg-sage-50/70 p-6 text-sm leading-relaxed text-ink-light">
            המידע במאמר זה הוא כללי ואינו מהווה תחליף לייעוץ רפואי או ליווי אישי.
            בכל שאלה הנוגעת לך ולתינוק, מוזמנת לפנות אליי או לצוות רפואי מוסמך.
          </div>

          {related && (
            <div className="mt-8 flex flex-col items-start gap-4 rounded-3xl bg-beige-100/70 p-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm font-semibold text-ink-muted">שירות קשור</p>
                <p className="font-heading text-lg font-bold text-ink">
                  {related.title}
                </p>
              </div>
              <Link href={`/services#${related.slug}`} className="btn-outline">
                לפרטים
                <Icon name="arrow" className="h-4 w-4" />
              </Link>
            </div>
          )}

          <div className="mt-10 text-center">
            <WhatsAppButton label="יש לך שאלה? דברי איתי" />
          </div>
        </div>
      </article>
    </>
  );
}
