import { z } from "zod";

/** Allowed inquiry types for the contact form (value + Hebrew label). */
export const inquiryTypes = [
  { value: "postpartum", label: "ליווי אחרי לידה" },
  { value: "prenatal", label: "הכנה להנקה לפני לידה" },
  { value: "pain", label: "הנקה כואבת" },
  { value: "supply", label: "אספקת חלב / משקל" },
  { value: "pumping", label: "שאיבה ושילוב בקבוק" },
  { value: "return-to-work", label: "חזרה לעבודה" },
  { value: "weaning", label: "גמילה" },
  { value: "other", label: "אחר / לא בטוחה" },
] as const;

const inquiryValues = inquiryTypes.map((t) => t.value) as [string, ...string[]];

// Israeli phone: allows 0xx-xxxxxxx, +972..., spaces/dashes. Kept permissive.
const phoneRegex = /^[+]?[\d][\d\s-]{6,15}$/;

export const contactSchema = z.object({
  name: z
    .string({ required_error: "נא למלא שם" })
    .trim()
    .min(2, "נא למלא שם מלא")
    .max(80, "השם ארוך מדי"),
  phone: z
    .string({ required_error: "נא למלא מספר טלפון" })
    .trim()
    .regex(phoneRegex, "מספר טלפון לא תקין"),
  email: z
    .string()
    .trim()
    .email("כתובת אימייל לא תקינה")
    .max(120)
    .optional()
    .or(z.literal("")),
  inquiryType: z.enum(inquiryValues, {
    errorMap: () => ({ message: "נא לבחור סוג פנייה" }),
  }),
  message: z.string().trim().max(1500, "ההודעה ארוכה מדי").optional().or(z.literal("")),
  consent: z.literal(true, {
    errorMap: () => ({ message: "יש לאשר את מדיניות הפרטיות כדי לשלוח" }),
  }),
  // Honeypot — must stay empty. Bots tend to fill every field.
  company: z.string().max(0).optional().or(z.literal("")),
  // Milliseconds since the form was rendered — used to reject instant bot posts.
  elapsedMs: z.number().int().nonnegative().optional(),
});

export type ContactInput = z.infer<typeof contactSchema>;

export function inquiryLabel(value: string): string {
  return inquiryTypes.find((t) => t.value === value)?.label ?? value;
}
