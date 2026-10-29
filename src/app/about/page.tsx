import type { Metadata } from "next";
import { site } from "@/config/site";
import { PageHero } from "@/components/PageHero";
import { ImageSlot } from "@/components/ImageSlot";
import { Icon } from "@/components/Icon";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "קצת עליי",
  description:
    "הכירו את סמדר שור קניגסברג — אחות מוסמכת ויועצת הנקה, עם ניסיון בטיפת חלב וגישה חמה ואישית לליווי אימהות ומשפחות.",
  alternates: { canonical: "/about" },
};

const qualifications = [
  {
    icon: "nurse" as const,
    title: "אחות מוסמכת",
    text: "הכשרה וניסיון כאחות מוסמכת, עם היכרות מעמיקה עם עולם הבריאות של האם והתינוק.",
  },
  {
    icon: "heart" as const,
    title: "יועצת הנקה",
    text: "הכשרה כיועצת הנקה, המשלבת ידע עדכני עם יישום מעשי ורגיש לכל משפחה.",
  },
  {
    icon: "home" as const,
    title: "ניסיון בטיפת חלב",
    text: "ניסיון מעשי בעבודה עם אימהות ותינוקות בטיפת חלב, בשגרה ובהתמודדות עם אתגרים.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="קצת עליי"
        title={`נעים להכיר, אני ${site.name}`}
        subtitle={site.role}
      />

      <section className="container-page py-16">
        <div className="grid items-start gap-12 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <ImageSlot
              src="/images/smadar.jpg"
              alt={`תמונה אישית של ${site.name}`}
              objectPosition="center 25%"
              className="aspect-[4/5] w-full shadow-soft"
            />
          </div>

          <div className="flex flex-col gap-5 lg:col-span-3">
            <h2 className="font-heading text-2xl font-bold text-ink">הדרך שלי</h2>
            <p className="leading-relaxed text-ink-light">
              כאחות מוסמכת פגשתי אינספור אימהות ותינוקות ברגעים הראשונים, וראיתי
              כמה ליווי נכון יכול להפוך תקופה מאתגרת לרגועה ומעצימה.
            </p>
            <p className="leading-relaxed text-ink-light">
              הניסיון בטיפת חלב חידד אצלי הבנה חשובה: אין פתרון אחד שמתאים לכולם.
              לכל אם יש הסיפור שלה — וההנקה צריכה להשתלב בחיים שלה, לא להפך.
            </p>

            <h3 className="mt-2 font-heading text-xl font-bold text-ink">
              הגישה שלי
            </h3>
            <p className="leading-relaxed text-ink-light">
              ליווי חם, קשוב ונטול שיפוטיות. אני כאן כדי לתת לך ידע, כלים ותמיכה —
              כדי שתקבלי את ההחלטות שמתאימות לך, מתוך ביטחון ורוגע.
            </p>

            <div className="mt-4 rounded-3xl border-r-4 border-blush-300 bg-blush-50/60 p-6">
              <p className="font-heading text-lg italic leading-relaxed text-ink">
                &quot;כל אם ראויה להרגיש מוחזקת, בטוחה ורגועה בדרך ההנקה שלה — יהיה
                אשר יהיה המסלול שתבחר.&quot;
              </p>
              <p className="mt-2 text-sm font-semibold text-ink-muted">— {site.name}</p>
            </div>
          </div>
        </div>

        {/* Qualifications */}
        <div className="mt-16">
          <h2 className="text-center font-heading text-2xl font-bold text-ink sm:text-3xl">
            הכשרה וניסיון
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {qualifications.map((q) => (
              <div key={q.title} className="card flex flex-col gap-3 text-center">
                <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-sage-100 text-sage-600">
                  <Icon name={q.icon} className="h-6 w-6" />
                </span>
                <h3 className="font-heading text-lg font-bold text-ink">{q.title}</h3>
                <p className="text-sm leading-relaxed text-ink-light">{q.text}</p>
              </div>
            ))}
          </div>
          <p className="mx-auto mt-6 max-w-2xl text-center text-sm text-ink-muted">
            פרטי ההסמכה המדויקים והגופים המכשירים יתווספו כאן לאחר אישור.
          </p>
        </div>

        <div className="mt-14 text-center">
          <WhatsAppButton label="בואי נדבר" />
        </div>
      </section>
    </>
  );
}
