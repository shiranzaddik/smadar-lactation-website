/**
 * Educational articles / tips.
 *
 * ⚠️ Content is general and medically cautious. Articles with
 * `published: false` are DRAFTS and are hidden from the live site until
 * professionally reviewed and approved by Smadar. They remain here so they can
 * be refined before publishing — do NOT present drafts as reviewed advice.
 *
 * `relatedService` links an article to a service slug (see config/site.ts).
 */

export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  /** Simple paragraph list. Keep medically cautious; no diagnostic claims. */
  body: string[];
  date: string; // ISO yyyy-mm-dd
  readingMinutes: number;
  relatedService?: string;
  tags: string[];
  published: boolean;
};

export const articles: Article[] = [
  {
    slug: "first-days-breastfeeding",
    title: "הימים הראשונים של ההנקה: למה לצפות",
    excerpt:
      "הימים הראשונים אחרי הלידה הם עקומת למידה — לך ולתינוק. הנה מה שחשוב לדעת כדי להתחיל ברגל ימין ובראש רגוע יותר.",
    body: [
      "הימים הראשונים אחרי הלידה מלאים ברגש, בעייפות ובהמון שאלות חדשות. חשוב לזכור שהנקה היא מיומנות נלמדת — גם עבורך וגם עבור התינוק — ולרוב היא משתפרת עם הזמן והתרגול.",
      "בימים הראשונים הגוף מייצר קולוסטרום (חלב ראשוני) בכמויות קטנות אך מרוכזות ומזינות. ירידה קלה במשקל התינוק בימים הראשונים נחשבת שכיחה, והגוף בדרך כלל מגביר את ייצור החלב בהדרגה.",
      "תפיסה נכונה היא המפתח להנקה נוחה. כשהתינוק תופס היטב, הפה מכסה חלק נרחב מהעטרה ולא רק את הפטמה, והסנטר נוגע בשד. תפיסה טובה מפחיתה כאב ומסייעת לתינוק לקבל חלב ביעילות.",
      "אם ההנקה כואבת באופן מתמשך, אם מופיעים פצעים, או שיש חשש לגבי כמות החלב או משקל התינוק — זה הזמן הנכון להתייעץ. פנייה מוקדמת ליועצת הנקה עושה לעיתים קרובות הבדל גדול.",
      "זכרי: אין דרך אחת 'נכונה' להניק. המטרה היא למצוא את הדרך שמתאימה לך, לתינוק ולמשפחה שלך.",
    ],
    date: "2026-10-20",
    readingMinutes: 4,
    relatedService: "postpartum",
    tags: ["אחרי לידה", "תפיסה", "התחלה"],
    published: true,
  },
  {
    slug: "do-i-have-enough-milk",
    title: "איך יודעים אם יש מספיק חלב?",
    excerpt:
      "אחת הדאגות הנפוצות ביותר בהנקה. הנה הסימנים המרגיעים שכדאי להכיר — ומתי כדאי להתייעץ.",
    body: [
      "הדאגה 'האם יש לי מספיק חלב' מלווה אימהות רבות, במיוחד כי קשה 'לראות' כמה חלב התינוק מקבל. הבשורה הטובה: יש כמה סימנים מרגיעים שאפשר לעקוב אחריהם.",
      "סימנים שכיחים לכך שהתינוק מקבל מספיק כוללים: חיתולים רטובים ומלוכלכים בכמות סבירה לאורך היממה, עלייה במשקל לאורך זמן (ולא מיום ליום), ותינוק שנראה רגוע ושבע בחלק מהזמן בין הנקות.",
      "חשוב לדעת שתחושת רכות בשד, הנקות תכופות, או תינוק ש'מבקש' הרבה — אינם בהכרח סימן למחסור בחלב. אלו התנהגויות שכיחות לגמרי, במיוחד בתקופות של זינוקי גדילה.",
      "אם יש חשש אמיתי לגבי עלייה במשקל של התינוק, חשוב להיוועץ בטיפת חלב או ברופא/ת הילדים, שיכולים לעקוב אחרי המשקל והגדילה בצורה מסודרת.",
      "בייעוץ הנקה אפשר לעשות הערכה מעשית של ההנקה, להבין יחד מה קורה, ובמידת הצורך לבנות תוכנית מותאמת — להרגעה או להגדלת אספקת החלב.",
    ],
    date: "2026-10-12",
    readingMinutes: 4,
    relatedService: "supply",
    tags: ["אספקת חלב", "משקל", "דאגות נפוצות"],
    published: true,
  },
  {
    slug: "painful-breastfeeding",
    title: "הנקה כואבת: למה זה קורה ומה אפשר לעשות",
    excerpt:
      "כאב בהנקה הוא שכיח אך לרוב ניתן לשיפור. מה הגורמים הנפוצים ואיך ניגשים אליהם.",
    body: [
      "רגישות קלה בתחילת ההנקה שכיחה, אך כאב ממשי לאורך ההנקה או פטמות פצועות אינם משהו שצריך פשוט 'לסבול'. ברוב המקרים ניתן לשפר את המצב משמעותית.",
      "אחד הגורמים השכיחים לכאב הוא תפיסה לא אופטימלית. התאמה קטנה של התנוחה ושל אופן הצמידה לשד יכולה לעשות הבדל גדול בתחושה ובריפוי.",
      "גורמים אפשריים נוספים כוללים גודש, חסימת צינוריות, או רגישות מקומית. לכל אחד מהם יש דרכי התמודדות מעשיות שאפשר לעבור עליהן יחד בייעוץ.",
      "אם מופיעים חום, אודם מתפשט, או כאב חד ומתגבר — חשוב להתייעץ גם עם הצוות הרפואי, שכן ייתכן שמדובר בדלקת הזקוקה לטיפול.",
      "המסר המרכזי: כאב מתמשך הוא סימן שכדאי לבדוק משהו — לא עדות לכך ש'הנקה פשוט כואבת'. יש למי לפנות.",
    ],
    date: "2026-10-05",
    readingMinutes: 4,
    relatedService: "pain",
    tags: ["כאב", "פצעים", "תפיסה"],
    published: true,
  },
  {
    slug: "pumping-and-bottles",
    title: "שאיבה ושילוב בקבוק בלי לפגוע בהנקה",
    excerpt:
      "טיוטה בבדיקה מקצועית — תפורסם לאחר אישור.",
    body: [
      "טיוטה. התוכן נמצא בבדיקה מקצועית ויפורסם לאחר אישור.",
    ],
    date: "2026-10-01",
    readingMinutes: 3,
    relatedService: "pumping",
    tags: ["שאיבה", "בקבוק"],
    published: false,
  },
  {
    slug: "back-to-work",
    title: "חזרה לעבודה תוך המשך הנקה",
    excerpt:
      "טיוטה בבדיקה מקצועית — תפורסם לאחר אישור.",
    body: ["טיוטה. התוכן נמצא בבדיקה מקצועית ויפורסם לאחר אישור."],
    date: "2026-09-25",
    readingMinutes: 3,
    relatedService: "return-to-work",
    tags: ["חזרה לעבודה", "שאיבה"],
    published: false,
  },
];

/** Only published articles, newest first. */
export function getPublishedArticles(): Article[] {
  return articles
    .filter((a) => a.published)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug && a.published);
}
