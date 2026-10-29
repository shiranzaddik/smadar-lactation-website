"use client";

import { useRef, useState } from "react";
import { contactSchema, inquiryTypes } from "@/lib/validation";
import { Icon } from "./Icon";

type Status = "idle" | "submitting" | "success" | "error";
type FieldErrors = Partial<Record<string, string>>;

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<FieldErrors>({});
  const [serverError, setServerError] = useState<string | null>(null);
  const mountedAt = useRef<number>(Date.now());

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErrors({});
    setServerError(null);

    const form = e.currentTarget;
    const fd = new FormData(form);
    const payload = {
      name: String(fd.get("name") ?? ""),
      phone: String(fd.get("phone") ?? ""),
      email: String(fd.get("email") ?? ""),
      inquiryType: String(fd.get("inquiryType") ?? ""),
      message: String(fd.get("message") ?? ""),
      consent: fd.get("consent") === "on",
      company: String(fd.get("company") ?? ""), // honeypot
      elapsedMs: Date.now() - mountedAt.current,
    };

    // Client-side validation (server re-validates authoritatively).
    const parsed = contactSchema.safeParse(payload);
    if (!parsed.success) {
      const fieldErrors: FieldErrors = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0];
        if (typeof key === "string" && !fieldErrors[key]) {
          fieldErrors[key] = issue.message;
        }
      }
      setErrors(fieldErrors);
      return;
    }

    setStatus("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data?.error ?? "שגיאה בשליחה");
      }
      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setServerError(
        err instanceof Error ? err.message : "משהו השתבש. נסי שוב מאוחר יותר."
      );
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-3xl border border-sage-200 bg-sage-50 p-10 text-center shadow-card">
        <span className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-sage-500 text-white">
          <Icon name="check" className="h-7 w-7" />
        </span>
        <h3 className="font-heading text-2xl font-bold text-ink">הפנייה נשלחה!</h3>
        <p className="mx-auto mt-2 max-w-md text-ink-light">
          תודה שפנית. אחזור אלייך בהקדם האפשרי. אם זה דחוף, אפשר גם לשלוח לי הודעה
          ישירות בוואטסאפ.
        </p>
      </div>
    );
  }

  const inputClass =
    "w-full rounded-2xl border border-beige-200 bg-white px-4 py-3 text-ink shadow-sm transition-colors placeholder:text-ink-muted/60 focus:border-sage-400 focus:outline-none focus:ring-2 focus:ring-sage-200";
  const labelClass = "mb-1.5 block text-sm font-semibold text-ink";
  const errorClass = "mt-1 text-sm text-blush-600";

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
      {/* Honeypot — visually hidden, off-screen; real users never fill it */}
      <div aria-hidden className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label htmlFor="company">אל תמלאי שדה זה</label>
        <input
          id="company"
          name="company"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelClass}>
            שם מלא <span className="text-blush-600">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            className={inputClass}
            placeholder="איך קוראים לך?"
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "err-name" : undefined}
          />
          {errors.name && (
            <p id="err-name" className={errorClass}>
              {errors.name}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="phone" className={labelClass}>
            טלפון <span className="text-blush-600">*</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            inputMode="tel"
            autoComplete="tel"
            dir="ltr"
            className={`${inputClass} text-right`}
            placeholder="050-0000000"
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? "err-phone" : undefined}
          />
          {errors.phone && (
            <p id="err-phone" className={errorClass}>
              {errors.phone}
            </p>
          )}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className={labelClass}>
            אימייל <span className="text-ink-muted">(לא חובה)</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            dir="ltr"
            className={`${inputClass} text-right`}
            placeholder="name@email.com"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "err-email" : undefined}
          />
          {errors.email && (
            <p id="err-email" className={errorClass}>
              {errors.email}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="inquiryType" className={labelClass}>
            סוג הפנייה <span className="text-blush-600">*</span>
          </label>
          <select
            id="inquiryType"
            name="inquiryType"
            required
            defaultValue=""
            className={inputClass}
            aria-invalid={!!errors.inquiryType}
            aria-describedby={errors.inquiryType ? "err-inquiry" : undefined}
          >
            <option value="" disabled>
              בחרי נושא…
            </option>
            {inquiryTypes.map((t) => (
              <option key={t.value} value={t.value}>
                {t.label}
              </option>
            ))}
          </select>
          {errors.inquiryType && (
            <p id="err-inquiry" className={errorClass}>
              {errors.inquiryType}
            </p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="message" className={labelClass}>
          הודעה <span className="text-ink-muted">(לא חובה)</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className={`${inputClass} resize-y`}
          placeholder="ספרי לי בקצרה איך אפשר לעזור. אין צורך לפרט מידע רפואי רגיש כאן."
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "err-message" : undefined}
        />
        {errors.message && (
          <p id="err-message" className={errorClass}>
            {errors.message}
          </p>
        )}
      </div>

      <div>
        <label className="flex items-start gap-3 text-sm text-ink-light">
          <input
            type="checkbox"
            name="consent"
            required
            className="mt-1 h-5 w-5 shrink-0 rounded border-beige-300 text-sage-600 focus:ring-sage-400"
            aria-invalid={!!errors.consent}
          />
          <span>
            אני מאשרת שפרטיי ישמשו ליצירת קשר בלבד, בהתאם ל
            <a href="/privacy" className="link-underline mx-1 text-sage-700">
              מדיניות הפרטיות
            </a>
            . <span className="text-blush-600">*</span>
          </span>
        </label>
        {errors.consent && <p className={errorClass}>{errors.consent}</p>}
      </div>

      {serverError && (
        <div
          role="alert"
          className="rounded-2xl border border-blush-200 bg-blush-50 px-4 py-3 text-sm text-blush-600"
        >
          {serverError}
        </div>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === "submitting" ? "שולחת…" : "שליחת הפנייה"}
      </button>

      <p className="text-center text-xs text-ink-muted">
        השדות המסומנים ב-<span className="text-blush-600">*</span> הם חובה. לא
        נאסוף מידע רפואי רגיש דרך הטופס.
      </p>
    </form>
  );
}
