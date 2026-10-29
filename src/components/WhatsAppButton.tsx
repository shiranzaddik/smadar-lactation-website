import { Icon } from "./Icon";
import { whatsappLink } from "@/lib/whatsapp";

interface Props {
  message?: string;
  label?: string;
  className?: string;
}

/** Primary WhatsApp call-to-action link. */
export function WhatsAppButton({
  message,
  label = "לתיאום ייעוץ בוואטסאפ",
  className = "",
}: Props) {
  return (
    <a
      href={whatsappLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={`btn-whatsapp ${className}`}
    >
      <Icon name="whatsapp" className="h-5 w-5" />
      {label}
    </a>
  );
}
