import { Container } from "@/components/marketing/container";
import { MarketingPageHeader } from "@/components/marketing/page-header";

export default function FeaturesPage() {
  return (
    <>
      <MarketingPageHeader
        title="Features"
        description="Deep dives for pipelines, APIs, and deployment patterns will live here. This page is a scaffold — replace the copy and sections as the product solidifies."
      />
      <div className="py-12 lg:py-16">
        <Container>
          <p className="max-w-2xl text-muted-foreground leading-relaxed">
            Suggested sections to add next: schema authoring, access control,
            automation hooks, reporting, and migration guides.
          </p>
        </Container>
      </div>
    </>
  );
}
