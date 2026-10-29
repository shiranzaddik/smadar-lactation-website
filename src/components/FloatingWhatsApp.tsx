import { Icon } from "./Icon";
import { whatsappLink } from "@/lib/whatsapp";

/** Floating WhatsApp button, visible on every page (above the mobile bar). */
export function FloatingWhatsApp() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="פנייה בוואטסאפ"
      className="group fixed bottom-24 left-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-float transition-transform hover:scale-105 focus-visible:scale-105 sm:bottom-6"
    >
      <Icon name="whatsapp" className="h-7 w-7" />
      <span className="pointer-events-none absolute right-16 hidden whitespace-nowrap rounded-full bg-ink px-3 py-1.5 text-xs font-semibold text-white opacity-0 transition-opacity group-hover:opacity-100 lg:block">
        דברי איתי בוואטסאפ
      </span>
    </a>
  );
}
