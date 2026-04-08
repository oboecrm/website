import { Container } from "@/components/container";
import { PageHeader } from "@/components/page-header";

export default function FeaturesPage() {
  return (
    <>
      <PageHeader
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
