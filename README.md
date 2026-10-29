# אתר סמדר שור קניגסברג — יועצת הנקה

Production-ready Hebrew (RTL) marketing website for **Smadar Shor Kenigsberg
(סמדר שור קניגסברג)**, a registered nurse and lactation consultant offering
private, home-visit consultations in the Ramat Gan area.

Built with **Next.js (App Router)**, **TypeScript**, and **Tailwind CSS**.

---

## ✨ Features

- Fully RTL, Hebrew-first, mobile-first responsive design
- Warm maternal-wellness visual identity (cream / sage / blush), Heebo + Assistant fonts
- 7 content pages: Home, Services, About, Testimonials, Articles, FAQ, Contact
- Privacy policy + accessibility statement pages (templates for professional review)
- Floating WhatsApp button + sticky mobile WhatsApp/call bar on every page
- Secure contact form: client + server validation (zod), honeypot, timing check,
  in-memory rate limiting, and configurable email delivery (Resend)
- SEO: per-page metadata, Open Graph (auto-generated image), JSON-LD structured
  data (LocalBusiness/MedicalBusiness, Person, FAQ, Article), `sitemap.xml`, `robots.txt`
- Accessibility: semantic HTML, keyboard focus styles, skip link, reduced-motion support
- **All business content lives in one file:** [`src/config/site.ts`](src/config/site.ts)

---

## 🚀 Getting started

```bash
# 1. Install dependencies
npm install

# 2. Create your local env file
cp .env.example .env.local   # then edit values (see below)

# 3. Run the dev server
npm run dev
# open http://localhost:3000
```

### Useful scripts

| Command             | What it does                        |
| ------------------- | ----------------------------------- |
| `npm run dev`       | Start the dev server                |
| `npm run build`     | Production build                    |
| `npm run start`     | Run the production build locally    |
| `npm run lint`      | ESLint                              |
| `npm run typecheck` | TypeScript type checking            |

---

## ✏️ Editing content

Almost everything is edited in **`src/config/site.ts`**:

- Contact details (phone, WhatsApp, email) — currently **placeholders** marked
  `PENDING`. Replace them with real values before launch.
- Services, trust points, process steps, common challenges
- FAQ questions and answers
- **Testimonials** — the array is intentionally empty. Add only **real,
  approved** client reviews. Never fabricate reviews.
- SEO keywords, service area, social links

Articles live in **`src/lib/articles.ts`**. Set `published: false` to keep an
article as a hidden draft until it has been professionally reviewed.

Images: see [`public/images/README.md`](public/images/README.md). Until you add
licensed photos, tasteful placeholders are shown automatically.

> ⚠️ Do not present placeholders as factual claims. Confirm credentials, phone,
> email, and specific service details with Smadar before publishing.

---

## 📧 Contact form & email

The form posts to `POST /api/contact`, which validates the data server-side and
sends an email notification. Email delivery uses [Resend](https://resend.com).

Set these in `.env.local` (and in your hosting provider's env settings):

| Variable               | Purpose                                             |
| ---------------------- | --------------------------------------------------- |
| `NEXT_PUBLIC_SITE_URL` | Public site URL (canonical, sitemap, OG, JSON-LD)   |
| `RESEND_API_KEY`       | Resend API key                                      |
| `CONTACT_FROM_EMAIL`   | Verified sender, e.g. `Smadar <noreply@domain.co.il>` |
| `CONTACT_TO_EMAIL`     | Where inquiries are delivered (Smadar's inbox)      |

If the email variables are **not** set, submissions are validated and logged to
the server console instead of emailed — safe for local development. No secrets
are hardcoded.

### Using a different email provider

Replace the `sendEmail` function in
[`src/app/api/contact/route.ts`](src/app/api/contact/route.ts) with your
provider's API call (SendGrid, Nodemailer/SMTP, etc.). Keep credentials in
environment variables.

---

## 🌐 Deployment

### Vercel (recommended for Next.js)

1. Push this folder to a Git repository (GitHub/GitLab/Bitbucket).
2. Import the project in [Vercel](https://vercel.com).
3. Add the environment variables above in **Project → Settings → Environment Variables**.
4. Deploy. Vercel auto-detects Next.js; no extra config needed.

### Any Node host

```bash
npm run build
npm run start   # serves on PORT (default 3000)
```

After pointing your domain, set `NEXT_PUBLIC_SITE_URL` to the final URL so
canonical tags, the sitemap, and structured data are correct.

---

## ✅ Pre-launch checklist

- [ ] Replace `PENDING` phone / WhatsApp / email in `src/config/site.ts`
- [ ] Confirm exact credentials & service details; update About/Services copy
- [ ] Add licensed photos in `public/images` and wire up `ImageSlot src`
- [ ] Add real, approved testimonials (or keep the empty state)
- [ ] Set all environment variables in the hosting provider
- [ ] Have the privacy policy & accessibility statement reviewed professionally
- [ ] Set `NEXT_PUBLIC_SITE_URL` to the production domain
- [ ] Run `npm run build` and verify no errors

---

## 🗂️ Project structure

```
src/
  app/              # App Router pages, API route, sitemap, robots, OG image
  components/       # Reusable UI + home-page sections (components/sections)
  config/site.ts    # ⭐ Central editable business configuration
  lib/              # whatsapp links, validation (zod), articles, SEO helpers
public/images/      # Drop licensed photos here
```

---

_The site presents general information and is not a substitute for personal
medical advice._
