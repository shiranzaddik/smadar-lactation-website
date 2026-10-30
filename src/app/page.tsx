import { Hero } from "@/components/sections/Hero";
import { TrustPoints } from "@/components/sections/TrustPoints";
import { ServicesPreview } from "@/components/sections/ServicesPreview";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { AboutPreview } from "@/components/sections/AboutPreview";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustPoints />
      <ServicesPreview />
      <ProcessSteps />
      <AboutPreview />
      <FinalCTA />
    </>
  );
}
