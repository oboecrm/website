import { ArrowRight, Code2, Star } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";
import type { ReactNode } from "react";

import { CodeSample } from "@/components/developers/code-sample";
import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Developers",
  description:
    "Schema in code, typed APIs, and an operator UI—OboeCRM is the open-source, code-first CRM for TypeScript teams.",
};

const configSnippet = `// oboe.config.ts
import { defineConfig } from "@oboe/crm";

export default defineConfig({
  schema: {
    Account: {
      fields: {
        name: { type: "text", required: true },
        domain: { type: "text", unique: true },
      },
    },
    Deal: {
      fields: {
        value: { type: "currency" },
        stage: { type: "select", options: ["lead", "won", "lost"] },
      },
      relations: { account: "Account" },
    },
  },
  api: { rest: true, graphql: true },
  admin: { theme: "system" },
});`;

const configSnippetCompact = `// oboe.config.ts — the spine of your CRM
export default defineConfig({
  schema: {
    Account: { fields: { name: { type: "text", required: true } } },
    Deal: {
      fields: { value: { type: "currency" } },
      relations: { account: "Account" },
    },
  },
  api: { rest: true, graphql: true },
});`;

const apiSnippet = `// On your server — no extra HTTP hop
import { oboe } from "@/lib/oboe";

const deal = await oboe.deals.create({
  data: {
    value: 48_000,
    stage: "lead",
    accountId: account.id,
  },
  // Respect row-level rules from your schema
  context: { user: currentUser },
});

const pipeline = await oboe.deals.list({
  where: { stage: { in: ["lead", "qualified"] } },
  include: { account: true },
});`;

const accessSnippet = `// access/deal.ts — versioned with your app
import { defineAccess } from "@oboe/crm";

export const dealAccess = defineAccess({
  read: ({ user, record }) =>
    user.role === "admin" || record.ownerId === user.id,
  write: ({ user }) => ["admin", "sales"].includes(user.role),
  delete: ({ user }) => user.role === "admin",
});`;

const stackItems = [
  {
    title: "Schema is the contract",
    body: "Accounts, deals, and custom objects live in config you review in PRs—same as the rest of your codebase.",
  },
  {
    title: "Typed APIs by default",
    body: "Generate OpenAPI and GraphQL from the same definitions your Next.js routes and workers consume.",
  },
  {
    title: "Self-host or bring your cloud",
    body: "Run on your VPC, wire your own Postgres, and keep data residency decisions yours—not a vendor’s.",
  },
  {
    title: "Escape hatches everywhere",
    body: "Hooks, custom endpoints, and UI slots when you outgrow conventions—no proprietary DSL lock-in.",
  },
] as const;

const gridFeatures = [
  {
    title: "Migrations in git",
    body: "Ship schema changes with atomic deploys and rollbacks your team already understands.",
    href: "/docs",
  },
  {
    title: "Webhooks & events",
    body: "Subscribe to lifecycle events from deals, tasks, and custom objects for your automations.",
    href: "/docs",
  },
  {
    title: "Row-level security",
    body: "Encode who sees what in TypeScript—not a separate admin console nobody audits.",
    href: "/docs",
  },
  {
    title: "Embeddable admin",
    body: "Mount operator UI inside your existing app shell when reps should never leave your product.",
    href: "/docs",
  },
  {
    title: "Multi-environment",
    body: "Promote the same config from preview to prod with environment overrides.",
    href: "/docs",
  },
  {
    title: "Import & sync",
    body: "Pipe CSV, warehouse snapshots, or legacy CRM exports into typed tables.",
    href: "/docs",
  },
  {
    title: "Background jobs",
    body: "Queue enrichment, scoring, and notifications without bolting on a second workflow engine.",
    href: "/docs",
  },
  {
    title: "Observability-friendly",
    body: "Structured logs and request IDs across API and admin—fits your existing APM story.",
    href: "/docs",
  },
  {
    title: "MIT licensed core",
    body: "Fork, extend, and redistribute. The roadmap you depend on is the one in your repo.",
    href: siteConfig.githubRepoUrl,
  },
] as const;

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

export default function DevelopersPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-border/60 bg-zinc-950 text-zinc-50 dark:border-white/10">
        <div
          className="pointer-events-none absolute inset-0 opacity-40"
          aria-hidden
        >
          <div className="absolute -left-1/4 top-0 h-[420px] w-[420px] rounded-full bg-violet-600/25 blur-3xl" />
          <div className="absolute -right-1/4 bottom-0 h-[380px] w-[380px] rounded-full bg-emerald-500/15 blur-3xl" />
        </div>
        <Container className="relative py-20 lg:py-28">
          <p className="text-sm font-medium uppercase tracking-wider text-zinc-400">
            Developers
          </p>
          <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            The code-first way to ship CRM.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-400">
            No black boxes—{siteConfig.name} is open source, schema-driven, and
            built for teams who want REST, GraphQL, and a real admin UI from one
            TypeScript config you actually own.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button
              size="lg"
              className="h-11 bg-zinc-50 text-zinc-950 hover:bg-zinc-200"
              asChild
            >
              <Link href="/docs">
                Read the docs
                <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-11 border-zinc-700 bg-transparent text-zinc-50 hover:bg-zinc-900 hover:text-zinc-50"
              asChild
            >
              <a
                href={siteConfig.githubRepoUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Star className="size-4" />
                Star on GitHub
              </a>
            </Button>
          </div>
        </Container>
      </section>

      <section className="border-b border-border/60 py-20 lg:py-24">
        <Container>
          <SectionTitle>
            Define your CRM schema in code—get APIs and admin instantly.
          </SectionTitle>
          <p className="mt-4 max-w-3xl text-lg text-muted-foreground leading-relaxed">
            Skip the parallel spreadsheet of fields in a vendor UI. Model
            accounts, pipelines, and custom objects where engineers already
            work: pull requests, tests, and typed modules.
          </p>
          <div className="mt-12 max-w-4xl">
            <CodeSample filename="oboe.config.ts" code={configSnippet} />
          </div>
        </Container>
      </section>

      <section className="border-b border-border/60 bg-muted/30 py-20 lg:py-24">
        <Container>
          <SectionTitle>Built for TypeScript monorepos and Next.js apps.</SectionTitle>
          <p className="mt-4 max-w-3xl text-muted-foreground leading-relaxed lg:text-lg">
            Same repo, same deploy pipeline, same code review culture—whether
            you ship on Vercel, Kubernetes, or bare metal.
          </p>
          <ul className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {stackItems.map((item) => (
              <li key={item.title}>
                <h3 className="text-base font-semibold tracking-tight">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {item.body}
                </p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="border-b border-border/60 py-16 lg:py-20">
        <Container>
          <blockquote className="mx-auto max-w-3xl text-center">
            <p className="text-xl font-medium tracking-tight text-foreground sm:text-2xl">
              When CRM data is code, your product and your pipeline finally
              share one contract.
            </p>
          </blockquote>
        </Container>
      </section>

      <section className="border-b border-border/60 py-20 lg:py-24">
        <Container className="space-y-24 lg:space-y-28">
          <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <p className="font-mono text-sm text-muted-foreground">01</p>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
                Unapologetically code-first
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Your config scaffolds storage, validation, admin views, and
                API surfaces—with TypeScript narrowing so refactors stay honest.
              </p>
            </div>
            <CodeSample filename="oboe.config.ts" code={configSnippetCompact} />
          </div>

          <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="lg:order-2">
              <p className="font-mono text-sm text-muted-foreground">02</p>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
                Server-side data access
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Call into Oboe from Server Actions, route handlers, or workers
                without round-tripping through a hosted SaaS API you don’t
                control.
              </p>
            </div>
            <div className="lg:order-1">
              <CodeSample filename="app/api/deals/route.ts" code={apiSnippet} />
            </div>
          </div>

          <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <p className="font-mono text-sm text-muted-foreground">03</p>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
                Access control you can audit
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Express permissions as functions colocated with your domain.
                Security reviews read like normal application code—not mystery
                XML in a vendor portal.
              </p>
            </div>
            <CodeSample filename="access/deal.ts" code={accessSnippet} />
          </div>
        </Container>
      </section>

      <section className="border-b border-border/60 py-20 lg:py-24">
        <Container>
          <SectionTitle className="max-w-3xl">
            Extensibility so you never paint yourself into a corner.
          </SectionTitle>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Everything below is designed to compose—add what you need, ignore
            what you don’t.
          </p>
          <ul className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {gridFeatures.map((f, i) => (
              <li key={f.title}>
                <p className="font-mono text-xs text-muted-foreground">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-2 text-lg font-semibold tracking-tight">
                  {f.href.startsWith("http") ? (
                    <a
                      href={f.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline-offset-4 hover:underline"
                    >
                      {f.title}
                    </a>
                  ) : (
                    <Link
                      href={f.href}
                      className="underline-offset-4 hover:underline"
                    >
                      {f.title}
                    </Link>
                  )}
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
              No black magic. Just code the way it’s meant to be.
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed sm:text-lg">
              If you have to “learn Oboe” as a separate universe, we’ve missed
              the point. The surface area should feel like the frameworks you
              already use—transparent files, grep-friendly patterns, and an MIT
              license that keeps the escape hatch wide open.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed sm:text-lg">
              {siteConfig.name} should make your team faster—not locked in.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button size="lg" className="h-11" asChild>
                <a
                  href={siteConfig.githubRepoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Code2 className="size-4" />
                  View source
                </a>
              </Button>
              <Button size="lg" variant="outline" className="h-11" asChild>
                <Link href="/docs">Get started</Link>
              </Button>
            </div>
            <p className="mt-8 font-mono text-sm text-muted-foreground">
              npx create-oboe-app{" "}
              <span className="text-muted-foreground/70">(placeholder CLI)</span>
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
