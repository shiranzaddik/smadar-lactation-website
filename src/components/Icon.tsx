import type { SVGProps } from "react";

/**
 * Lightweight inline icon set (stroke-based, currentColor).
 * Keys are referenced from config/site.ts. Decorative by default
 * (aria-hidden); pass a `title` for meaningful icons.
 */

type IconName =
  | "nurse"
  | "heart"
  | "home"
  | "chat"
  | "sprout"
  | "calendar"
  | "shield"
  | "drop"
  | "bottle"
  | "briefcase"
  | "leaf"
  | "phone"
  | "whatsapp"
  | "instagram"
  | "mail"
  | "check"
  | "arrow"
  | "menu"
  | "close"
  | "star";

const paths: Record<IconName, React.ReactNode> = {
  nurse: (
    <>
      <path d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" />
      <path d="M5 21a7 7 0 0 1 14 0" />
      <path d="M12 5.5v-2M10.5 4.5h3" />
    </>
  ),
  heart: (
    <path d="M12 20s-7-4.4-9.3-8.6C1.2 8.5 2.7 5.5 5.6 5.1c1.9-.3 3.4.8 4.4 2 .9-1.2 2.4-2.3 4.3-2 2.9.4 4.4 3.4 2.9 6.3C19 15.6 12 20 12 20Z" />
  ),
  home: (
    <>
      <path d="M3 10.5 12 3l9 7.5" />
      <path d="M5 9.5V21h14V9.5" />
      <path d="M10 21v-6h4v6" />
    </>
  ),
  chat: (
    <>
      <path d="M4 5h16v11H8l-4 4V5Z" />
      <path d="M8.5 10.5h.01M12 10.5h.01M15.5 10.5h.01" />
    </>
  ),
  sprout: (
    <>
      <path d="M12 21v-9" />
      <path d="M12 12c0-3 2-5 6-5 0 3-2 5-6 5Z" />
      <path d="M12 14c0-2.5-1.8-4.5-5-4.5 0 2.6 1.9 4.5 5 4.5Z" />
    </>
  ),
  calendar: (
    <>
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M3 9h18M8 3v4M16 3v4" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3 5 6v5c0 4.5 3 7.5 7 9 4-1.5 7-4.5 7-9V6l-7-3Z" />
      <path d="m9.5 11.5 1.8 1.8 3.2-3.6" />
    </>
  ),
  drop: <path d="M12 3s6 6.5 6 10.5A6 6 0 1 1 6 13.5C6 9.5 12 3 12 3Z" />,
  bottle: (
    <>
      <path d="M9 8.5h6v9a3 3 0 0 1-3 3 3 3 0 0 1-3-3v-9Z" />
      <path d="M10 8.5V6h4v2.5M11 4.5h2M9 12h6" />
    </>
  ),
  briefcase: (
    <>
      <rect x="3" y="7.5" width="18" height="12" rx="2" />
      <path d="M9 7.5V6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1.5M3 12.5h18" />
    </>
  ),
  leaf: (
    <>
      <path d="M4 20c0-8 5-13 16-13 0 11-5 16-13 16-2 0-3-1-3-3Z" />
      <path d="M9 15c3-3 6-4 9-4" />
    </>
  ),
  phone: (
    <path d="M6.5 3.5 9 3l1.5 4-2 1.5c.8 2 2 3.2 4 4l1.5-2 4 1.5-.5 2.5c-.2 1-1.1 1.6-2.1 1.4C9.9 19.2 4.8 14.1 3.6 7.6 3.4 6.6 4 5.7 5 5.5l1.5-2Z" />
  ),
  whatsapp: (
    <>
      <path d="M12 3a9 9 0 0 0-7.7 13.6L3 21l4.5-1.2A9 9 0 1 0 12 3Z" />
      <path d="M8.5 8.3c.2-.5.4-.5.7-.5h.6c.2 0 .4 0 .6.5l.7 1.6c.1.2 0 .4-.1.6l-.5.6c-.1.2-.2.3 0 .6.3.6 1 1.4 1.9 1.9.3.2.5.1.6 0l.6-.6c.2-.2.3-.2.6-.1l1.5.8c.3.1.4.3.4.5 0 .9-.8 1.6-1.6 1.6-1.9 0-5.4-2.9-5.9-5.1-.1-.6-.3-1.3-.2-1.9Z" />
    </>
  ),
  instagram: (
    <>
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="3.8" />
      <circle cx="17" cy="7" r="1" />
    </>
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3.5 6.5 8.5 6 8.5-6" />
    </>
  ),
  check: <path d="m5 12.5 4.5 4.5L19 7" />,
  arrow: <path d="M14 6l-6 6 6 6" />,
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  close: <path d="M6 6l12 12M18 6 6 18" />,
  star: (
    <path d="m12 3.5 2.6 5.3 5.9.9-4.2 4.1 1 5.8-5.3-2.8-5.3 2.8 1-5.8L3.5 9.7l5.9-.9L12 3.5Z" />
  ),
};

interface IconProps extends SVGProps<SVGSVGElement> {
  name: IconName;
  title?: string;
}

export function Icon({ name, title, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      {paths[name]}
    </svg>
  );
}

export type { IconName };
