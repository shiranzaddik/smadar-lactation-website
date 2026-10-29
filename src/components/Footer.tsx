import Link from "next/link";
import { navLinks, site } from "@/config/site";
import { Icon } from "./Icon";
import { whatsappLink, telLink, mailLink } from "@/lib/whatsapp";

const hasRealPhone = !site.phone.includes("000-0000");
const hasRealEmail = !site.email.includes("example.com");

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-16 border-t border-beige-200/70 bg-beige-100/60">
      <div className="container-page grid gap-10 py-12 md:grid-cols-3">
        {/* Brand */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-sage-100 text-sage-600">
              <Icon name="sprout" className="h-6 w-6" />
            </span>
            <div className="leading-tight">
              <p className="font-heading text-lg font-bold text-ink">{site.name}</p>
              <p className="text-sm text-ink-muted">{site.role}</p>
            </div>
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-ink-light">
            ייעוץ הנקה פרטי בבית או בקליניקה ב{site.serviceArea}. ליווי חם, מקצועי ואישי
            לאורך כל מסע ההנקה.
          </p>
          <a
            href={site.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-sage-700 hover:text-sage-600"
          >
            <Icon name="instagram" className="h-5 w-5" />
            <span dir="ltr">{site.instagramHandle}</span>
          </a>
        </div>

        {/* Nav */}
        <nav aria-label="ניווט בתחתית העמוד">
          <h2 className="mb-4 font-heading text-base font-bold text-ink">ניווט מהיר</h2>
          <ul className="grid grid-cols-2 gap-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-ink-light transition-colors hover:text-sage-700"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Contact */}
        <div>
          <h2 className="mb-4 font-heading text-base font-bold text-ink">יצירת קשר</h2>
          <ul className="flex flex-col gap-3 text-sm">
            <li>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-ink-light hover:text-sage-700"
              >
                <Icon name="whatsapp" className="h-5 w-5 text-[#25D366]" />
                וואטסאפ
              </a>
            </li>
            {hasRealPhone && (
              <li>
                <a
                  href={telLink()}
                  className="inline-flex items-center gap-2 text-ink-light hover:text-sage-700"
                >
                  <Icon name="phone" className="h-5 w-5 text-sage-600" />
                  {site.phone}
                </a>
              </li>
            )}
            {hasRealEmail && (
              <li>
                <a
                  href={mailLink()}
                  className="inline-flex items-center gap-2 text-ink-light hover:text-sage-700"
                >
                  <Icon name="mail" className="h-5 w-5 text-sage-600" />
                  {site.email}
                </a>
              </li>
            )}
            <li className="inline-flex items-center gap-2 text-ink-light">
              <Icon name="home" className="h-5 w-5 text-sage-600" />
              {site.serviceArea}
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-beige-200/70">
        <div className="container-page flex flex-col items-center justify-between gap-3 py-5 text-xs text-ink-muted sm:flex-row">
          <p>
            © {year} {site.name}. כל הזכויות שמורות.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="hover:text-sage-700">
              מדיניות פרטיות
            </Link>
            <Link href="/accessibility" className="hover:text-sage-700">
              הצהרת נגישות
            </Link>
          </div>
        </div>
        <div className="container-page pb-6">
          <p className="text-[11px] leading-relaxed text-ink-muted">
            המידע באתר הוא כללי ואינו מהווה תחליף לייעוץ רפואי אישי. בכל חשש
            בריאותי יש לפנות לצוות רפואי מוסמך.
          </p>
        </div>
      </div>
    </footer>
  );
}
