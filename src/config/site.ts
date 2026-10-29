/**
 * ===========================================================================
 *  CENTRAL SITE CONFIGURATION
 * ===========================================================================
 *  This is the single source of truth for every business detail on the site:
 *  contact info, services, process, FAQ, SEO, navigation, etc.
 *
 *  Edit values here and the whole site updates. Fields marked `PENDING` are
 *  placeholders that must be confirmed with Smadar before going live — they
 *  are intentionally NOT presented as factual claims in the UI.
 *
 *  ⚠️  Do NOT invent credentials, prices, testimonials, or medical claims.
 * ===========================================================================
 */

/** Marks a value that is a placeholder awaiting confirmation. */
export const PENDING = {
  email: "hello@example.com", // PENDING — replace with real email
} as const;

/** Confirmed contact details. */
export const CONTACT = {
  phone: "052-4323780", // display format
  phoneIntl: "972524323780", // digits only, country code, no "+"
} as const;

export const site = {
  // ---- Identity -----------------------------------------------------------
  name: "סמדר שור קניגסברג",
  shortName: "סמדר שור קניגסברג",
  role: "אחות מוסמכת ויועצת הנקה",
  tagline: "ההנקה שלך, בדרך שמתאימה לך",
  // Short description used for meta tags and the site header area.
  description:
    "ייעוץ הנקה פרטי ואישי עד הבית באזור רמת גן, עם סמדר שור קניגסברג — אחות מוסמכת ויועצת הנקה. ליווי חם, מקצועי ונטול שיפוטיות לאורך כל מסע ההנקה.",

  // ---- Location / service area -------------------------------------------
  serviceArea: "רמת גן והסביבה",
  serviceAreaLong:
    "אזור רמת גן והסביבה. הייעוץ מתקיים בבית הלקוחה — בנוחות, בפרטיות ובסביבה המוכרת לך.",

  // ---- Contact (edit these) ----------------------------------------------
  // Keep the "+" OUT of whatsappNumber — wa.me needs digits only.
  phone: CONTACT.phone,
  phoneIntl: CONTACT.phoneIntl,
  whatsappNumber: CONTACT.phoneIntl, // wa.me/<this>
  email: PENDING.email,

  // Prefilled WhatsApp message (URL-encoded automatically in lib/whatsapp.ts)
  whatsappMessage:
    "היי סמדר, הגעתי אלייך דרך האתר ואשמח לשמוע פרטים על ייעוץ הנקה.",

  // ---- Social -------------------------------------------------------------
  instagram: "https://www.instagram.com/smadar.hanaka/",
  instagramHandle: "@smadar.hanaka",

  // ---- SEO ----------------------------------------------------------------
  // Falls back to this if NEXT_PUBLIC_SITE_URL is not set.
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://www.example.com",
  locale: "he_IL",
  keywords: [
    "יועצת הנקה",
    "ייעוץ הנקה פרטי",
    "ייעוץ הנקה ברמת גן",
    "יועצת הנקה ברמת גן",
    "יועצת הנקה עד הבית ברמת גן",
    "ייעוץ הנקה עד הבית",
    "ליווי הנקה",
    "קשיי הנקה",
    "הנקה אחרי לידה",
    "אחות מוסמכת",
  ],
} as const;

// ---------------------------------------------------------------------------
//  NAVIGATION
// ---------------------------------------------------------------------------
export const navLinks = [
  { href: "/", label: "דף הבית" },
  { href: "/services", label: "השירותים שלי" },
  { href: "/about", label: "קצת עליי" },
  { href: "/testimonials", label: "המלצות" },
  { href: "/articles", label: "מאמרים וטיפים" },
  { href: "/faq", label: "שאלות נפוצות" },
  { href: "/contact", label: "צרי קשר" },
] as const;

// ---------------------------------------------------------------------------
//  TRUST POINTS (home) — keep factual, no government endorsement implied
// ---------------------------------------------------------------------------
export const trustPoints = [
  {
    icon: "nurse",
    title: "אחות מוסמכת",
    text: "רקע מקצועי כאחות מוסמכת, עם היכרות עמוקה עם עולם האם והתינוק.",
  },
  {
    icon: "heart",
    title: "ניסיון בטיפת חלב",
    text: "ניסיון מעשי בעבודה עם אימהות ותינוקות בטיפת חלב, בשגרה ובאתגרים.",
  },
  {
    icon: "home",
    title: "ייעוץ עד הבית",
    text: "מגיעה אלייך הביתה באזור רמת גן — בנוחות ובפרטיות, בלי לצאת עם התינוק.",
  },
  {
    icon: "chat",
    title: "ליווי אישי וחם",
    text: "ליווי קשוב ונטול שיפוטיות, שמתאים את ההנקה לקצב ולצרכים שלך ושל המשפחה.",
  },
] as const;

// ---------------------------------------------------------------------------
//  SERVICES
//  `confirmed: false` services are shown with a subtle "בתיאום מראש" note and
//  should be verified with Smadar before being presented as fixed offerings.
//  Home visits in the Ramat Gan area ARE confirmed.
// ---------------------------------------------------------------------------
export type Service = {
  slug: string;
  title: string;
  short: string;
  description: string;
  helpsWith: string[];
  icon: string;
  confirmed: boolean;
};

export const services: Service[] = [
  {
    slug: "postpartum",
    title: "ליווי הנקה אחרי לידה",
    short: "התחלה רכה ובטוחה בימים ובשבועות הראשונים.",
    description:
      "עוברים יחד על תפיסה, תנוחות וקצב הנקות — כדי שתרגישי בטוחה ורגועה עם התינוק כבר מההתחלה.",
    helpsWith: [
      "תפיסה וצמידה נכונה לשד",
      "תנוחות הנקה נוחות",
      "הבנת סימני רעב ושובע",
      "ביסוס אספקת חלב בריאה",
    ],
    icon: "sprout",
    confirmed: true,
  },
  {
    slug: "prenatal",
    title: "הכנה להנקה לפני הלידה",
    short: "להגיע ללידה עם ידע, ביטחון וציפיות מציאותיות.",
    description:
      "מפגש הכנה עוד לפני הלידה — להיכנס לתקופה הראשונה עם ידע, ביטחון וציפיות מציאותיות.",
    helpsWith: [
      "מה לצפות בימים הראשונים",
      "התחלת הנקה סמוך ללידה",
      "ציוד ותמיכה מועילים",
      "שאלות וחששות לפני הלידה",
    ],
    icon: "calendar",
    confirmed: true,
  },
  {
    slug: "pain",
    title: "הנקה כואבת ופצעים",
    short: "להפוך הנקה כואבת לחוויה נעימה יותר.",
    description:
      "מאתרים יחד את מקור הכאב ובונים תוכנית מעשית להקלה ולריפוי — בקצב שמתאים לך.",
    helpsWith: [
      "פטמות כואבות או פצועות",
      "כאב בזמן ההנקה",
      "גודש וחסימת צינוריות",
      "שיפור התפיסה להפחתת כאב",
    ],
    icon: "shield",
    confirmed: true,
  },
  {
    slug: "supply",
    title: "אספקת חלב ועלייה במשקל",
    short: "ליווי סביב דאגות לכמות החלב ולגדילת התינוק.",
    description:
      "הערכה מסודרת של ההנקה ותוכנית מותאמת — להרגעה או להגדלת אספקת החלב לפי הצורך.",
    helpsWith: [
      "תחושת חוסר בחלב",
      "דאגה לעלייה במשקל של התינוק",
      "הגדלת אספקת חלב",
      "שילוב שאיבה בעת הצורך",
    ],
    icon: "drop",
    confirmed: true,
  },
  {
    slug: "pumping",
    title: "שאיבה ושילוב בקבוק",
    short: "גמישות מבלי לוותר על ההנקה.",
    description:
      "בונים שגרת שאיבה ושילוב בקבוק שתומכים בהמשך ההנקה ובגמישות שלך.",
    helpsWith: [
      "בחירת משאבה ושגרת שאיבה",
      "אגירת חלב ואחסון נכון",
      "הכנסת בקבוק לצד ההנקה",
      "שמירה על אספקת חלב בזמן שאיבה",
    ],
    icon: "bottle",
    confirmed: true,
  },
  {
    slug: "return-to-work",
    title: "חזרה לעבודה",
    short: "לשמור על ההנקה גם כשחוזרים לשגרה.",
    description:
      "מתכננים שאיבה ריאלית ומעבר חלק למסגרת, תוך שמירה על אספקת החלב ועל הקשר.",
    helpsWith: [
      "תכנון שאיבה ביום עבודה",
      "מעבר חלק למסגרת",
      "שמירה על אספקת חלב",
      "איזון בין עבודה להנקה",
    ],
    icon: "briefcase",
    confirmed: true,
  },
  {
    slug: "weaning",
    title: "גמילה מהנקה",
    short: "פרידה הדרגתית ועדינה, בקצב שלך.",
    description:
      "תהליך גמילה הדרגתי ועדין, שמפחית אי-נוחות ושומר על הקשר ביניכם.",
    helpsWith: [
      "גמילה הדרגתית ונוחה",
      "הפחתת גודש בזמן גמילה",
      "גמילה חלקית לעומת מלאה",
      "ליווי רגשי בתהליך",
    ],
    icon: "leaf",
    confirmed: true,
  },
];

// ---------------------------------------------------------------------------
//  COMMON BREASTFEEDING CHALLENGES (home)
// ---------------------------------------------------------------------------
export const challenges = [
  "כאב בזמן ההנקה או פטמות פצועות",
  "דאגה שאין מספיק חלב",
  "קושי בתפיסה ובצמידה לשד",
  "גודש, חסימת צינוריות או דלקת",
  "תינוק שלא עולה במשקל כמצופה",
  "התלבטות לגבי שאיבה ושילוב בקבוק",
  "חזרה לעבודה תוך המשך הנקה",
  "התלבטות לגבי גמילה",
] as const;

// ---------------------------------------------------------------------------
//  CONSULTATION PROCESS (3 steps)
// ---------------------------------------------------------------------------
export const processSteps = [
  {
    number: "01",
    title: "יצירת קשר",
    text: "כותבות לי בוואטסאפ מה קורה, ומתאמות זמן שמתאים לך.",
  },
  {
    number: "02",
    title: "מפגש עד הבית",
    text: "אני מגיעה אלייך, צופה בהנקה ובונה איתך תוכנית מעשית.",
  },
  {
    number: "03",
    title: "ליווי והמשך",
    text: "נשארת זמינה לשאלות ולתמיכה גם אחרי המפגש.",
  },
] as const;

// ---------------------------------------------------------------------------
//  TESTIMONIALS
//  ⚠️ ONLY add real, approved client reviews here. Keep empty until Smadar
//  provides authentic, consented testimonials. Never fabricate reviews.
// ---------------------------------------------------------------------------
export type Testimonial = {
  name: string; // first name or "אמא ל..." — with client consent only
  location?: string;
  text: string;
};

export const testimonials: Testimonial[] = [
  // Example of the required shape (DO NOT publish — real, approved reviews only):
  // { name: "—", location: "רמת גן", text: "—" },
];

// ---------------------------------------------------------------------------
//  FAQ — medically cautious, general guidance only
// ---------------------------------------------------------------------------
export const faq = [
  {
    q: "מתי כדאי לפנות לייעוץ הנקה?",
    a: "אפשר לפנות בכל שלב — עוד בהיריון כהכנה, בימים הראשונים אחרי הלידה, או בכל רגע שבו עולה קושי או שאלה. אין צורך לחכות שיהיה 'מספיק גרוע'; ככל שפונים מוקדם יותר, לרוב קל יותר לסייע.",
  },
  {
    q: "ההנקה כואבת לי — זה נורמלי?",
    a: "רגישות קלה בתחילת הדרך שכיחה, אך כאב ממשי או פטמות פצועות אינם משהו שצריך 'לסבול'. לרוב ניתן לשפר זאת משמעותית באמצעות התאמת התפיסה והתנוחה. אם יש כאב מתמשך, חום או סימני דלקת — חשוב להתייעץ גם עם הצוות הרפואי שלך.",
  },
  {
    q: "איך אדע אם יש לי מספיק חלב?",
    a: "סימנים מרגיעים נפוצים הם חיתולים רטובים ומלוכלכים בכמות סבירה, עלייה במשקל לאורך זמן ותינוק שנראה שבע ורגוע בין הנקות. תחושת 'רכות' בשד אינה בהכרח סימן למחסור. בייעוץ נעשה הערכה מסודרת יחד, ובכל שאלה על גדילת התינוק חשוב להיוועץ גם בטיפת חלב או ברופא/ת הילדים.",
  },
  {
    q: "אפשר לשלב בקבוק ולהמשיך להניק?",
    a: "במקרים רבים כן. שילוב נכון של בקבוק, תזמון וסוג המוצץ יכולים לתמוך בהמשך ההנקה. בייעוץ נתאים שגרה שמתאימה למטרות שלך — בין אם לשאיבה, לגמישות או לחזרה לעבודה.",
  },
  {
    q: "מה לגבי שאיבה — איך מתחילים?",
    a: "נעבור יחד על בחירת משאבה, בניית שגרת שאיבה ריאלית, אחסון חלב נכון ושמירה על אספקת החלב. ההמלצות תמיד מותאמות לשגרה ולצרכים הספציפיים שלך.",
  },
  {
    q: "אני חוזרת לעבודה — אפשר להמשיך להניק?",
    a: "בהחלט. נתכנן יחד שגרת שאיבה, תיאום עם המסגרת של התינוק ושמירה על הקשר ועל אספקת החלב, כדי שהמעבר יהיה חלק ככל האפשר עבורך ועבור התינוק.",
  },
  {
    q: "האם יש ייעוץ אונליין?",
    a: "חלק מהנושאים ניתנים ללווי גם בשיחה מרחוק, אך ייעוץ הכולל צפייה בהנקה מתבצע באופן הטוב ביותר במפגש עד הבית. נשמח לתאם את הפורמט שהכי יתאים למצב שלך.",
  },
] as const;

// ---------------------------------------------------------------------------
//  Legal / review pages last-updated stamp
// ---------------------------------------------------------------------------
export const legal = {
  lastUpdated: "2026-10-29",
} as const;
