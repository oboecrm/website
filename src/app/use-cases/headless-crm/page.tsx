import {
  ArrowRight,
  Boxes,
  Globe2,
  Layers,
  Radio,
  Webhook,
  Zap,
} from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";
import type { ReactNode } from "react";

import { CodeSample } from "@/components/developers/code-sample";
import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Headless CRM",
  description:
    "Use OboeCRM as the API-first backbone for accounts, deals, and workflows—embed UI in your product, power internal tools, and skip the one-size-fits-all CRM chrome.",
};

const headlessSnippet = `// oboe.config.ts — APIs first, UI where you want it
import { defineConfig } from "@oboe/crm";

export default defineConfig({
  schema: {
    Account: {
      fields: {
        name: { type: "text", required: true },
        healthScore: { type: "number" },
      },
    },
    Deal: {
      fields: {
        amount: { type: "currency" },
        stage: { type: "select", options: ["new", "active", "won"] },
      },
      relations: { account: "Account" },
    },
  },
  api: {
    rest: { prefix: "/api/crm" },
    graphql: { path: "/graphql/crm" },
  },
  admin: {
    // Ship a minimal operator UI, mount it under your app shell, or disable it
    basePath: "/ops",
  },
});`;

const simplifyPillars = [
  {
    title: "One schema, many surfaces",
    body: "Mobile, web, partner portals, and internal Retool dashboards all read the same typed contracts—no nightly CSV duct tape.",
  },
  {
    title: "Buy vs. build, on your timeline",
    body: "Start headless inside your existing app, add rep-facing UI when ready, or keep everything behind your design system forever.",
  },
  {
    title: "Open source exit hatch",
    body: "MIT-licensed core means you are never negotiating API rate limits to unlock your own customer data.",
  },
] as const;

const numberedHighlights: {
  n: string;
  title: string;
  body: string;
}[] = [
  {
    n: "01",
    title: "REST & GraphQL out of the box",
    body: "Generate endpoints from the same definitions your services import—fewer hand-written controllers that drift from production.",
  },
  {
    n: "02",
    title: "Event-native webhooks",
    body: "Fan out stage changes, SLA breaches, and enrichment results to queues, functions, or your CDP without polling brittle exports.",
  },
  {
    n: "03",
    title: "Embeddable operator UI",
    body: "Mount kanban, timelines, and detail drawers inside your SaaS shell so reps never context-switch to another subdomain.",
  },
  {
    n: "04",
    title: "Multi-tenant aware",
    body: "Model org boundaries in code and enforce them consistently across APIs—critical when every customer gets their own workspace.",
  },
  {
    n: "05",
    title: "Field-level localization",
    body: "Store translated account names, regions, and compliance notes without cloning records per locale.",
  },
  {
    n: "06",
    title: "Workflow hooks",
    body: "Run validation, enrichment, and approvals in TypeScript beside the rest of your domain logic—not in a proprietary workflow DSL.",
  },
];

const deepLinks: { n: string; title: string; body: string; href: string }[] =
  [
    {
      n: "01",
      title: "Access control in code",
      body: "Row- and field-level rules that security teams can review like any other service.",
      href: "/developers",
    },
    {
      n: "02",
      title: "Localization & regions",
      body: "Keep global GTM data maintainable as you add markets.",
      href: "/docs",
    },
    {
      n: "03",
      title: "Multi-tenant patterns",
      body: "Share infrastructure while isolating customer data with explicit tenant keys.",
      href: "/enterprise",
    },
    {
      n: "04",
      title: "Authentication & sessions",
      body: "Wire OboeCRM into your existing auth stack instead of bolting on another IdP.",
      href: "/docs",
    },
    {
      n: "05",
      title: "Custom React admin slots",
      body: "Drop in components that speak your design tokens and render account-specific context.",
      href: "/docs",
    },
    {
      n: "06",
      title: "Custom API endpoints",
      body: "Expose batch operations or legacy-friendly payloads without forking the core.",
      href: "/developers",
    },
    {
      n: "07",
      title: "Audit logs & versions",
      body: "Reconstruct who changed a forecast line before the board meeting.",
      href: "/docs",
    },
    {
      n: "08",
      title: "SSO for operators",
      body: "Align CRM login policies with the rest of your enterprise tooling.",
      href: "/enterprise",
    },
  ];

function SectionTitle({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <h2
      className={cn(
        "text-3xl font-semibold tracking-tight sm:text-4xl",
        className,
      )}
    >
      {children}
    </h2>
  );
}

export default function HeadlessCrmPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-border/60 bg-gradient-to-b from-zinc-900 via-zinc-950 to-zinc-950 text-zinc-50">
        <div
          className="pointer-events-none absolute inset-0 opacity-50"
          aria-hidden
        >
          <div className="absolute -left-1/4 top-0 h-[400px] w-[400px] rounded-full bg-cyan-500/15 blur-3xl" />
          <div className="absolute -right-1/4 bottom-0 h-[360px] w-[360px] rounded-full bg-violet-600/20 blur-3xl" />
        </div>
        <Container className="relative py-20 lg:py-28">
          <p className="text-sm font-medium uppercase tracking-wider text-zinc-400">
            Use case · Headless CRM
          </p>
          <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            Run CRM data on your terms—not inside someone else’s chrome.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-400">
            {siteConfig.name} keeps accounts, pipelines, and tasks behind clean
            APIs. Use the optional admin when it helps, embed views in your
            product when it wins, and never let a legacy UI dictate your
            roadmap.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button
              size="lg"
              className="h-11 bg-zinc-50 text-zinc-950 hover:bg-zinc-200"
              asChild
            >
              <Link href="/developers">
                See the developer model
                <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-11 border-zinc-600 bg-transparent text-zinc-50 hover:bg-zinc-900 hover:text-zinc-50"
              asChild
            >
              <Link href="/docs">Read the docs</Link>
            </Button>
          </div>
        </Container>
      </section>

      <section className="border-b border-border/60 py-20 lg:py-24">
        <Container>
          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            API-first operations
          </p>
          <SectionTitle className="mt-3 max-w-3xl">
            Your product surface is the CRM your users already trust.
          </SectionTitle>
          <p className="mt-4 max-w-3xl text-lg text-muted-foreground leading-relaxed">
            Headless does not mean “no UI”—it means the UI ships where your
            customers live. Surface pipeline health inside your dashboard,
            trigger playbooks from product events, and let success teams work
            without alt-tabbing into a bloated tab from 2014.
          </p>
        </Container>
      </section>

      <section className="border-b border-border/60 bg-muted/30 py-16 lg:py-20">
        <Container>
          <blockquote className="mx-auto max-w-3xl text-center">
            <p className="text-xl font-medium tracking-tight text-foreground sm:text-2xl">
              When CRM logic is just another service, your feature team stops
              waiting on “CRM admin bandwidth.”
            </p>
          </blockquote>
        </Container>
      </section>

      <section className="border-b border-border/60 py-20 lg:py-24">
        <Container>
          <SectionTitle>Simplify your GTM stack</SectionTitle>
          <p className="mt-4 max-w-3xl text-muted-foreground leading-relaxed lg:text-lg">
            {siteConfig.name} is fully extensible in code—prioritize the
            integrations that matter, trim unused modules, and avoid paying for
            shelf-ware bundles you will never deploy.
          </p>
          <ul className="mt-14 grid gap-10 md:grid-cols-3">
            {simplifyPillars.map((p) => (
              <li key={p.title}>
                <h3 className="text-lg font-semibold tracking-tight">
                  {p.title}
                </h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  {p.body}
                </p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="border-b border-border/60 py-20 lg:py-24">
        <Container>
          <ul className="grid gap-12 lg:grid-cols-2">
            {numberedHighlights.map((item, i) => {
              const icons = [Zap, Webhook, Layers, Boxes, Globe2, Radio];
              const Icon = icons[i] ?? Zap;
              return (
                <li key={item.n} className="flex gap-5">
                  <div className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-border/60 bg-card text-primary shadow-sm">
                    <Icon className="size-5" aria-hidden />
                  </div>
                  <div>
                    <p className="font-mono text-xs text-muted-foreground">
                      {item.n}
                    </p>
                    <h3 className="mt-1 text-xl font-semibold tracking-tight">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-muted-foreground leading-relaxed">
                      {item.body}
                    </p>
                  </div>
                </li>
              );
            })}
          </ul>
        </Container>
      </section>

      <section className="border-b border-border/60 py-20 lg:py-24">
        <Container>
          <SectionTitle className="max-w-3xl">
            Configure once—serve every channel from the same graph.
          </SectionTitle>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Your schema stays in repo; your channels stay in sync.
          </p>
          <div className="mt-12 max-w-4xl">
            <CodeSample filename="oboe.config.ts" code={headlessSnippet} />
          </div>
        </Container>
      </section>

      <section className="border-b border-border/60 py-20 lg:py-24">
        <Container>
          <SectionTitle className="max-w-3xl">
            Headless without the heartache.
          </SectionTitle>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Modern CRM infrastructure should feel as approachable as your favorite
            framework—transparent, typed, and easy to extend.
          </p>
          <ul className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {deepLinks.map((f) => (
              <li key={f.n}>
                <p className="font-mono text-xs text-muted-foreground">{f.n}</p>
                <h3 className="mt-2 text-base font-semibold tracking-tight">
                  <Link
                    href={f.href}
                    className="underline-offset-4 hover:underline"
                  >
                    {f.title}
                  </Link>
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {f.body}
                </p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="py-20 lg:py-28">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Ready to wire {siteConfig.name} behind your stack?
            </h2>
            <p className="mt-4 text-muted-foreground">
              We will walk through your channels, auth model, and data residency
              needs—then map the smallest headless slice to prove value.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button size="lg" className="h-11" asChild>
                <Link href="/contact">
                  Talk to us
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="h-11" asChild>
                <a
                  href={siteConfig.githubRepoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Explore the repo
                </a>
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
