import { Icon } from "./Icon";
import { site } from "@/config/site";
import { whatsappLink, telLink } from "@/lib/whatsapp";

const hasRealPhone = !site.phone.includes("000-0000");

/** Sticky WhatsApp / call bar — mobile only. */
export function StickyMobileBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-beige-200/70 bg-cream/95 backdrop-blur-md sm:hidden">
      <div className="flex items-stretch gap-2 p-3">
        <a
          href={whatsappLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-whatsapp flex-1 py-3 text-sm"
        >
          <Icon name="whatsapp" className="h-5 w-5" />
          וואטסאפ
        </a>
        {hasRealPhone && (
          <a href={telLink()} className="btn-outline flex-1 py-3 text-sm">
            <Icon name="phone" className="h-5 w-5" />
            התקשרי
          </a>
        )}
      </div>
    </div>
  );
}
