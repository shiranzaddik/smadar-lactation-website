import type { Metadata } from "next";
import { site, legal } from "@/config/site";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "הצהרת נגישות",
  description: "הצהרת הנגישות של אתר סמדר שור קניגסברג, יועצת הנקה.",
  alternates: { canonical: "/accessibility" },
};

export default function AccessibilityPage() {
  return (
    <>
      <PageHero title="הצהרת נגישות" />
      <section className="container-page py-14">
        <div className="mx-auto flex max-w-3xl flex-col gap-6 text-ink-light [&_h2]:mt-4 [&_h2]:font-heading [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-ink [&_p]:leading-relaxed">
          <p className="text-sm text-ink-muted">
            עודכן לאחרונה: {legal.lastUpdated}
          </p>

          <div className="rounded-2xl border border-blush-200 bg-blush-50/60 p-5 text-sm">
            זוהי תבנית ראשונית להצהרת נגישות. יש להתאים אותה למצב בפועל ולדרישות
            הדין החל לפני פרסום האתר.
          </div>

          <h2>המחויבות שלי לנגישות</h2>
          <p>
            אני רואה חשיבות רבה בכך שהאתר של {site.name} יהיה נגיש וידידותי לכלל
            המשתמשות והמשתמשים, לרבות אנשים עם מוגבלות. האתר תוכנן תוך מאמץ לעמוד
            בעקרונות הנגישות המקובלים (WCAG) ככל הניתן.
          </p>

          <h2>מה נעשה באתר</h2>
          <p>האתר כולל, בין היתר, את התאמות הנגישות הבאות:</p>
          <ul className="flex list-disc flex-col gap-2 pr-6">
            <li>מבנה סמנטי וכותרות היררכיות לניווט ברור.</li>
            <li>תמיכה בניווט באמצעות מקלדת וסימון מיקוד ברור.</li>
            <li>טקסט חלופי לתמונות ותוויות לשדות טופס.</li>
            <li>ניגודיות צבעים מותאמת וטיפוגרפיה קריאה.</li>
            <li>כיבוד העדפת משתמש להפחתת אנימציות (reduced motion).</li>
            <li>תצוגה רספונסיבית במובייל ובמחשב, בכיווניות ימין-לשמאל.</li>
          </ul>

          <h2>פנייה בנושא נגישות</h2>
          <p>
            נתקלת בקושי בנגישות האתר, או שיש לך הצעה לשיפור? אשמח לשמוע. ניתן לפנות
            אליי דרך עמוד &quot;צרי קשר&quot;, ואטפל בפנייה בהקדם האפשרי.
          </p>

          <h2>המשך שיפור</h2>
          <p>
            הנגשת האתר היא תהליך מתמשך. אני ממשיכה לפעול לשיפור חוויית השימוש עבור
            כלל המשתמשות והמשתמשים.
          </p>
        </div>
      </section>
    </>
  );
}
