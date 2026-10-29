import Link from "next/link";
import { services } from "@/config/site";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceCard } from "@/components/ServiceCard";
import { Icon } from "@/components/Icon";

export function ServicesPreview() {
  const preview = services.slice(0, 6);
  return (
    <section className="container-page py-12 lg:py-16">
      <SectionHeading
        eyebrow="השירותים שלי"
        title="ליווי לכל שלב"
        subtitle="מהכנה להנקה ועד גמילה."
      />
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {preview.map((service) => (
          <ServiceCard key={service.slug} service={service} />
        ))}
      </div>
      <div className="mt-10 text-center">
        <Link href="/services" className="btn-outline">
          לכל השירותים
          <Icon name="arrow" className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}
