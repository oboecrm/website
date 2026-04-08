import { HomeDualAudience } from "@/components/home/dual-audience";
import { HomeFeaturesGrid } from "@/components/home/features-grid";
import { HomeHero } from "@/components/home/hero";
import { HomeManifesto } from "@/components/home/manifesto";
import { HomeTestimonials } from "@/components/home/testimonials";
import { HomeUseCases } from "@/components/home/use-cases";

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <HomeDualAudience />
      <HomeUseCases />
      <HomeTestimonials />
      <HomeFeaturesGrid />
      <HomeManifesto />
    </>
  );
}
