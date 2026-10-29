import Image from "next/image";
import { Icon } from "./Icon";

interface Props {
  /** If set, renders this image from /public. Otherwise shows a styled slot. */
  src?: string;
  alt: string;
  /** Guidance label shown in the empty slot (not rendered when src is set). */
  hint?: string;
  className?: string;
  rounded?: string;
  priority?: boolean;
  /** CSS object-position for framing (e.g. "center 25%"). Default: center. */
  objectPosition?: string;
}

/**
 * Renders a real image when `src` is provided, otherwise a tasteful placeholder
 * slot with guidance. This lets the site ship without fabricated imagery while
 * marking exactly where Smadar should add appropriately licensed photos.
 *
 * To use a real photo: drop the file in /public/images and set `src` to e.g.
 * "/images/smadar-portrait.jpg".
 */
export function ImageSlot({
  src,
  alt,
  hint = "מקום לתמונה",
  className = "",
  rounded = "rounded-4xl",
  priority = false,
  objectPosition = "center",
}: Props) {
  if (src) {
    return (
      <div className={`relative overflow-hidden ${rounded} ${className}`}>
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
          style={{ objectPosition }}
          priority={priority}
        />
      </div>
    );
  }

  return (
    <div
      role="img"
      aria-label={alt}
      className={`relative flex items-center justify-center overflow-hidden ${rounded} border border-beige-200 bg-gradient-to-br from-blush-50 via-cream to-sage-50 ${className}`}
    >
      {/* soft decorative blobs */}
      <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-blush-100/70 blur-2xl" />
      <div className="pointer-events-none absolute -bottom-12 -left-8 h-44 w-44 rounded-full bg-sage-100/70 blur-2xl" />
      <div className="relative flex flex-col items-center gap-2 px-6 text-center text-sage-600">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white/70 shadow-card">
          <Icon name="heart" className="h-7 w-7" />
        </span>
        <span className="text-sm font-semibold text-ink-light">{hint}</span>
      </div>
    </div>
  );
}
