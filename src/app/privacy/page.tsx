import type { Metadata } from "next";
import { site, legal } from "@/config/site";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "מדיניות פרטיות",
  description: "מדיניות הפרטיות של אתר סמדר שור קניגסברג, יועצת הנקה.",
  alternates: { canonical: "/privacy" },
  robots: { index: true, follow: true },
};

const hasRealEmail = !site.email.includes("example.com");

export default function PrivacyPage() {
  return (
    <>
      <PageHero title="מדיניות פרטיות" />
      <section className="container-page py-14">
        <div className="mx-auto flex max-w-3xl flex-col gap-6 text-ink-light [&_h2]:mt-4 [&_h2]:font-heading [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-ink [&_p]:leading-relaxed">
          <p className="text-sm text-ink-muted">
            עודכן לאחרונה: {legal.lastUpdated}
          </p>

          <div className="rounded-2xl border border-blush-200 bg-blush-50/60 p-5 text-sm">
            זוהי תבנית ראשונית למדיניות פרטיות. מומלץ שאיש/אשת מקצוע משפטי יעברו
            עליה ויתאימו אותה למצב בפועל לפני פרסום האתר.
          </div>

          <h2>כללי</h2>
          <p>
            הפרטיות שלך חשובה לי. מסמך זה מסביר איזה מידע נאסף באתר של {site.name},
            כיצד נעשה בו שימוש וכיצד הוא נשמר.
          </p>

          <h2>איזה מידע נאסף</h2>
          <p>
            כאשר את פונה דרך טופס יצירת הקשר, נאספים הפרטים שאת בוחרת למסור: שם,
            מספר טלפון, ובאופן אופציונלי כתובת אימייל, סוג הפנייה והודעה חופשית.
            איני מבקשת ואיני אוספת דרך הטופס מידע רפואי רגיש.
          </p>

          <h2>כיצד נעשה שימוש במידע</h2>
          <p>
            המידע משמש אך ורק לצורך יצירת קשר חוזר ומתן מענה לפנייתך. איני מוכרת,
            משכירה או מעבירה את פרטייך לצדדים שלישיים לצורכי שיווק.
          </p>

          <h2>שמירת המידע ואבטחתו</h2>
          <p>
            הפניות מועברות אליי באמצעי מאובטח. אני שומרת על המידע לפרק הזמן הנדרש
            לטיפול בפנייתך ובהתאם לחובות החלות עליי, ונוקטת באמצעים סבירים להגנה
            עליו.
          </p>

          <h2>זכויותייך</h2>
          <p>
            באפשרותך לפנות אליי בכל עת כדי לעיין במידע שנמסר, לתקנו או לבקש את
            מחיקתו
            {hasRealEmail ? (
              <>
                {" "}
                בכתובת <span dir="ltr">{site.email}</span>
              </>
            ) : null}
            .
          </p>

          <h2>קובצי Cookie</h2>
          <p>
            האתר עשוי לעשות שימוש בקובצי Cookie טכניים הנדרשים לתפעולו התקין. ככל
            שיתווספו כלי ניתוח או פרסום, מסמך זה יעודכן בהתאם.
          </p>

          <h2>יצירת קשר</h2>
          <p>
            בכל שאלה בנוגע למדיניות פרטיות זו, ניתן לפנות אליי דרך עמוד
            &quot;צרי קשר&quot; באתר.
          </p>
        </div>
      </section>
    </>
  );
}
