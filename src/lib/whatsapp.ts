import { site } from "@/config/site";

/**
 * Build a wa.me link with a prefilled Hebrew message.
 * Pass a custom message to override the default site-wide message
 * (e.g. a service-specific inquiry).
 */
export function whatsappLink(message?: string): string {
  const text = encodeURIComponent(message ?? site.whatsappMessage);
  return `https://wa.me/${site.whatsappNumber}?text=${text}`;
}

/** Click-to-call link using the international format. */
export function telLink(): string {
  return `tel:+${site.phoneIntl}`;
}

/** mailto link. */
export function mailLink(subject?: string): string {
  const q = subject ? `?subject=${encodeURIComponent(subject)}` : "";
  return `mailto:${site.email}${q}`;
}
