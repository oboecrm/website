import { Container } from "@/components/container";

type PageHeaderProps = {
  title: string;
  description?: string;
};

export function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <div className="border-b border-border/60 py-16 lg:py-24">
      <Container>
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
          {title}
        </h1>
        {description ? (
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground leading-relaxed">
            {description}
          </p>
        ) : null}
      </Container>
    </div>
  );
}
