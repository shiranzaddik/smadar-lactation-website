import type { Metadata } from "next";
import Link from "next/link";
import { getPublishedArticles } from "@/lib/articles";
import { PageHero } from "@/components/PageHero";
import { ArticleCard } from "@/components/ArticleCard";
import { Icon } from "@/components/Icon";

export const metadata: Metadata = {
  title: "מאמרים וטיפים",
  description:
    "מאמרים וטיפים מקצועיים על הנקה: הימים הראשונים, אספקת חלב, הנקה כואבת, שאיבה, חזרה לעבודה ועוד — בשפה ברורה וזהירה.",
  alternates: { canonical: "/articles" },
};

export default function ArticlesPage() {
  const articles = getPublishedArticles();

  return (
    <>
      <PageHero
        eyebrow="מאמרים וטיפים"
        title="ידע שמעצים"
        subtitle="מידע כללי וברור על הנקה, לכל שלב."
      />

      <section className="container-page py-16">
        {articles.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {articles.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        ) : (
          <div className="mx-auto max-w-xl rounded-3xl border border-beige-200/70 bg-white/70 p-10 text-center shadow-card">
            <span className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-sage-100 text-sage-600">
              <Icon name="chat" className="h-7 w-7" />
            </span>
            <p className="text-lg font-semibold text-ink">מאמרים בדרך</p>
            <p className="mt-2 text-sm text-ink-light">
              תוכן חדש מתווסף כאן בקרוב.
            </p>
          </div>
        )}

        <p className="mx-auto mt-10 max-w-2xl text-center text-xs text-ink-muted">
          התכנים הם מידע כללי בלבד ואינם מהווים תחליף לייעוץ רפואי אישי.
        </p>
      </section>
    </>
  );
}
