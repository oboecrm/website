import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

import { Container } from "@/components/marketing/container";

const cases = [
  {
    title: "Product-led sales",
    href: "/features#pls",
    description:
      "Instrument trials, seats, and expansion in one schema your app already understands.",
  },
  {
    title: "API-native workflows",
    href: "/features#api",
    description:
      "Trigger automations from your backend, sync to data warehouses, or power internal tools.",
  },
  {
    title: "Self-hosted & portable",
    href: "/features#self-hosted",
    description:
      "Run on your infra, export your data, and avoid vendor walls without sacrificing UX.",
  },
  {
    title: "Integrations hub",
    href: "/features#integrations",
    description:
      "Webhooks, typed SDKs, and extension points so every team ships on the same contracts.",
  },
] as const;

export function HomeUseCases() {
  return (
    <section className="border-b border-border/60 py-20 lg:py-24">
      <Container>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Built for how you ship
            </h2>
            <p className="mt-3 max-w-xl text-muted-foreground">
              From seed-stage teams to platform groups, OboeCRM is the answer to
              “build vs. buy” — without giving up polish.
            </p>
          </div>
          <Link
            href="/features"
            className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
          >
            All features
            <ArrowUpRight className="size-4" />
          </Link>
        </div>
        <ul className="mt-12 grid gap-4 sm:grid-cols-2">
          {cases.map((c) => (
            <li key={c.href}>
              <Link
                href={c.href}
                className="group flex h-full flex-col rounded-2xl border border-border/60 bg-background p-6 transition-colors hover:border-foreground/20 hover:bg-muted/40"
              >
                <span className="flex items-start justify-between gap-2">
                  <span className="text-lg font-semibold tracking-tight">
                    {c.title}
                  </span>
                  <ArrowUpRight className="size-4 shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </span>
                <p className="mt-2 flex-1 text-sm text-muted-foreground leading-relaxed">
                  {c.description}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
