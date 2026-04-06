import { Code2, Users } from "lucide-react";

import { Container } from "@/components/marketing/container";

const pillars = [
  {
    icon: Code2,
    title: "Code-first for developers",
    body: "Version your schema, automate migrations, and expose REST or GraphQL without leaving your editor. OboeCRM grows with your product, not against it.",
  },
  {
    icon: Users,
    title: "Clarity for revenue teams",
    body: "Give sales and success a focused UI on top of the same source of truth. No shadow spreadsheets — just pipelines, tasks, and history that stay honest.",
  },
] as const;

export function HomeDualAudience() {
  return (
    <section className="border-b border-border/60 py-20 lg:py-24">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Code-first for developers. Clarity for go-to-market.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Use OboeCRM to own your CRM stack — or embed pieces where you need
            them. One model, many surfaces.
          </p>
        </div>
        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {pillars.map((p) => (
            <div
              key={p.title}
              className="rounded-2xl border border-border/60 bg-card p-8 shadow-sm"
            >
              <div className="flex size-10 items-center justify-center rounded-lg bg-muted">
                <p.icon className="size-5 text-foreground" aria-hidden />
              </div>
              <h3 className="mt-6 text-xl font-semibold tracking-tight">
                {p.title}
              </h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                {p.body}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
