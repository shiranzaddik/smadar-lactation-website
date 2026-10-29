import { Hero } from "@/components/sections/Hero";
import { TrustPoints } from "@/components/sections/TrustPoints";
import { ServicesPreview } from "@/components/sections/ServicesPreview";
import { Challenges } from "@/components/sections/Challenges";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { TestimonialsPreview } from "@/components/sections/TestimonialsPreview";
import { AboutPreview } from "@/components/sections/AboutPreview";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustPoints />
      <ServicesPreview />
      <Challenges />
      <ProcessSteps />
      <TestimonialsPreview />
      <AboutPreview />
      <FinalCTA />
    </>
  );
}
