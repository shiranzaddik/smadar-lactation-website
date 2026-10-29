import { NextRequest, NextResponse } from "next/server";
import { contactSchema, inquiryLabel } from "@/lib/validation";
import { site } from "@/config/site";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// --- Very small in-memory rate limiter (per instance) ---------------------
// For higher-traffic production, back this with a shared store (e.g. Upstash).
const WINDOW_MS = 60_000;
const MAX_PER_WINDOW = 5;
const hits = new Map<string, { count: number; first: number }>();

function rateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = hits.get(ip);
  if (!entry || now - entry.first > WINDOW_MS) {
    hits.set(ip, { count: 1, first: now });
    return false;
  }
  entry.count += 1;
  return entry.count > MAX_PER_WINDOW;
}

function clientIp(req: NextRequest): string {
  const fwd = req.headers.get("x-forwarded-for");
  if (fwd) return fwd.split(",")[0].trim();
  return req.headers.get("x-real-ip") ?? "unknown";
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

async function sendEmail(data: {
  name: string;
  phone: string;
  email?: string;
  inquiryType: string;
  message?: string;
}): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_FROM_EMAIL;
  const to = process.env.CONTACT_TO_EMAIL;

  // If email isn't configured, log instead so the form still works in dev.
  if (!apiKey || !from || !to) {
    console.info(
      "[contact] Email not configured (RESEND_API_KEY/CONTACT_FROM_EMAIL/CONTACT_TO_EMAIL). Submission:",
      {
        ...data,
        inquiry: inquiryLabel(data.inquiryType),
      }
    );
    return;
  }

  const subject = `פנייה חדשה מהאתר — ${data.name} (${inquiryLabel(
    data.inquiryType
  )})`;

  const html = `
    <div dir="rtl" style="font-family: Arial, sans-serif; line-height:1.6; color:#4A4038;">
      <h2 style="color:#5B6E55;">פנייה חדשה מאתר ${escapeHtml(site.name)}</h2>
      <p><strong>שם:</strong> ${escapeHtml(data.name)}</p>
      <p><strong>טלפון:</strong> ${escapeHtml(data.phone)}</p>
      ${data.email ? `<p><strong>אימייל:</strong> ${escapeHtml(data.email)}</p>` : ""}
      <p><strong>סוג פנייה:</strong> ${escapeHtml(inquiryLabel(data.inquiryType))}</p>
      ${
        data.message
          ? `<p><strong>הודעה:</strong><br/>${escapeHtml(data.message).replace(
              /\n/g,
              "<br/>"
            )}</p>`
          : ""
      }
    </div>`;

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [to],
      subject,
      html,
      reply_to: data.email || undefined,
    }),
  });

  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(`Resend error ${res.status}: ${text}`);
  }
}

export async function POST(req: NextRequest) {
  const ip = clientIp(req);
  if (rateLimited(ip)) {
    return NextResponse.json(
      { error: "יותר מדי בקשות. נסי שוב בעוד דקה." },
      { status: 429 }
    );
  }

  // Hard cap on request body size (defense-in-depth against oversized-input
  // resource exhaustion, independent of the validation layer). The form payload
  // is a few hundred bytes at most.
  const MAX_BODY_BYTES = 16 * 1024;
  const contentLength = Number(req.headers.get("content-length") ?? "0");
  if (contentLength > MAX_BODY_BYTES) {
    return NextResponse.json({ error: "הבקשה גדולה מדי." }, { status: 413 });
  }

  let body: unknown;
  try {
    const raw = await req.text();
    if (raw.length > MAX_BODY_BYTES) {
      return NextResponse.json({ error: "הבקשה גדולה מדי." }, { status: 413 });
    }
    body = JSON.parse(raw);
  } catch {
    return NextResponse.json({ error: "בקשה לא תקינה." }, { status: 400 });
  }

  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "נא לבדוק את פרטי הטופס." },
      { status: 422 }
    );
  }

  const { company, elapsedMs, consent, ...data } = parsed.data;

  // Honeypot: real users leave this empty.
  if (company) {
    // Pretend success to avoid giving bots signal.
    return NextResponse.json({ ok: true });
  }

  // Timing check: a genuine human takes more than ~1.5s to fill the form.
  if (typeof elapsedMs === "number" && elapsedMs < 1500) {
    return NextResponse.json({ ok: true });
  }

  if (!consent) {
    return NextResponse.json(
      { error: "יש לאשר את מדיניות הפרטיות." },
      { status: 422 }
    );
  }

  try {
    await sendEmail(data);
  } catch (err) {
    console.error("[contact] Failed to send email:", err);
    return NextResponse.json(
      { error: "אירעה תקלה בשליחה. אפשר לפנות גם בוואטסאפ." },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
