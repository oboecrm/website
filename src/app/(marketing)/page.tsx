import { HomeDualAudience } from "@/components/marketing/home/dual-audience";
import { HomeFeaturesGrid } from "@/components/marketing/home/features-grid";
import { HomeHero } from "@/components/marketing/home/hero";
import { HomeManifesto } from "@/components/marketing/home/manifesto";
import { HomeTestimonials } from "@/components/marketing/home/testimonials";
import { HomeUseCases } from "@/components/marketing/home/use-cases";

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
