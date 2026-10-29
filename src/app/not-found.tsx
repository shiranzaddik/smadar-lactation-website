import Link from "next/link";
import { Icon } from "@/components/Icon";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export default function NotFound() {
  return (
    <section className="container-page flex min-h-[60vh] flex-col items-center justify-center gap-5 py-20 text-center">
      <span className="flex h-16 w-16 items-center justify-center rounded-full bg-blush-100 text-blush-600">
        <Icon name="heart" className="h-8 w-8" />
      </span>
      <h1 className="font-heading text-4xl font-extrabold text-ink">404</h1>
      <p className="max-w-md text-lg text-ink-light">
        אופס — העמוד שחיפשת לא נמצא. אולי הקישור השתנה או שהעמוד הוסר.
      </p>
      <div className="mt-2 flex flex-wrap justify-center gap-3">
        <Link href="/" className="btn-primary">
          חזרה לדף הבית
        </Link>
        <WhatsAppButton label="דברי איתי" />
      </div>
    </section>
  );
}
