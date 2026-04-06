import {
  Boxes,
  GitBranch,
  LayoutDashboard,
  ShieldCheck,
  Zap,
} from "lucide-react";

import { Container } from "@/components/marketing/container";

const features = [
  {
    icon: GitBranch,
    title: "Schema in code",
    description:
      "Treat accounts, deals, and custom objects like any other domain model — reviewable, testable, deployable.",
  },
  {
    icon: Zap,
    title: "Instant APIs",
    description:
      "Generate typed clients and webhooks from the same definitions your UI consumes.",
  },
  {
    icon: LayoutDashboard,
    title: "Operator-grade UI",
    description:
      "Kanban, timelines, and activity feeds that stay fast even when your data model evolves weekly.",
  },
  {
    icon: Boxes,
    title: "Composable modules",
    description:
      "Enable only what you need: sequences, quotes, or a thin CRM shell around your own app.",
  },
  {
    icon: ShieldCheck,
    title: "Ownership by default",
    description:
      "MIT-licensed core, portable exports, and deployment patterns that respect compliance-heavy buyers.",
  },
] as const;

export function HomeFeaturesGrid() {
  return (
    <section className="border-b border-border/60 py-20 lg:py-24">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Meet the CRM from the repo
          </h2>
          <p className="mt-4 text-muted-foreground">
            Everything below ships as first-class primitives — not bolt-on
            plugins you’ll outgrow in a quarter.
          </p>
        </div>
        <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <li
              key={f.title}
              className="rounded-2xl border border-border/60 bg-card p-6 text-left"
            >
              <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <f.icon className="size-5" aria-hidden />
              </div>
              <h3 className="mt-5 text-lg font-semibold tracking-tight">
                {f.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                {f.description}
              </p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
