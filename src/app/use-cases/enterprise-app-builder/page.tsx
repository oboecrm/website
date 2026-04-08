import {
  ArrowRight,
  Blocks,
  KeyRound,
  Puzzle,
  Share2,
  Workflow,
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
  title: "Enterprise app builder",
  description:
    "Ship partner portals, RevOps consoles, and customer-facing CRM surfaces from one open-source, code-first foundation—SSO, typed APIs, and workflows included.",
};

const appBuilderSnippet = `// oboe.config.ts — scaffold data + APIs + admin in one place
import { defineConfig } from "@oboe/crm";

export default defineConfig({
  schema: {
    Account: { fields: { name: { type: "text", required: true } } },
    Deal: {
      fields: { value: { type: "currency" } },
      relations: { account: "Account" },
    },
    // Internal or partner-facing objects ship beside core CRM
    PartnerRequest: {
      fields: {
        status: { type: "select", options: ["draft", "legal", "approved"] },
        notes: { type: "richtext" },
      },
    },
  },
  auth: {
    providers: ["saml", "oidc"],
    defaultRole: "viewer",
  },
  api: { rest: true, graphql: true },
  hooks: {
    PartnerRequest: {
      afterChange: ["notifySlack", "syncErp"],
    },
  },
});`;

const sweetSpot = [
  {
    title: "Faster than greenfield CRUD",
    body: "Spin up secure list/detail views, permissions, and APIs for a new business unit without copying another repo’s half-working boilerplate.",
  },
  {
    title: "Safer than no-code sprawl",
    body: "Keep logic in TypeScript and PRs—not opaque automations only one person understands before PTO.",
  },
  {
    title: "Aligned with your CRM truth",
    body: "Partner desks, CS playbooks, and revenue apps read the same accounts and deals your sellers already trust.",
  },
] as const;

const fourPillars: {
  n: string;
  title: string;
  body: string;
  icon: typeof KeyRound;
}[] = [
  {
    n: "01",
    icon: KeyRound,
    title: "Roles from day one with SSO",
    body: "First login through your IdP provisions profiles, maps groups to CRM roles, and keeps access aligned as org charts change—no duplicate user tables to reconcile.",
  },
  {
    n: "02",
    icon: Blocks,
    title: "Code-first flexibility",
    body: "One config scaffolds persistence, validation, admin chrome, hooks, and typed clients—so your internal apps inherit the same rigor as customer-facing features.",
  },
  {
    n: "03",
    icon: Share2,
    title: "Integrate with anything",
    body: "REST, GraphQL, and server-side SDKs let you wire ERP, data warehouses, ticketing, and custom microservices without bespoke glue per project.",
  },
  {
    n: "04",
    icon: Workflow,
    title: "Workflows that match how you operate",
    body: "Stage gates, legal review, and cross-functional approvals stay explicit—notifications and audit trails keep distributed teams in sync.",
  },
];

const deepLinks: { n: string; title: string; body: string; href: string }[] =
  [
    {
      n: "01",
      title: "Publishing & approval flows",
      body: "Ensure sensitive updates never skip Legal or Finance.",
      href: "/marketers",
    },
    {
      n: "02",
      title: "Localization support",
      body: "Ship regional apps without forking schemas per country.",
      href: "/docs",
    },
    {
      n: "03",
      title: "Multi-tenancy patterns",
      body: "Reuse one codebase for many business units or customers.",
      href: "/enterprise",
    },
    {
      n: "04",
      title: "Authentication",
      body: "Session models that match how your platform already signs users in.",
      href: "/docs",
    },
    {
      n: "05",
      title: "Single Sign-On (SSO)",
      body: "Enterprise login without a parallel identity silo.",
      href: "/enterprise",
    },
    {
      n: "06",
      title: "Extend with React components",
      body: "Inject bespoke UI where generic tables are not enough.",
      href: "/docs",
    },
    {
      n: "07",
      title: "Custom API endpoints",
      body: "Batch imports, legacy adapters, and one-off operator tools.",
      href: "/developers",
    },
    {
      n: "08",
      title: "Audit logs & version control",
      body: "Rollback and forensics when revenue-critical data moves.",
      href: "/docs",
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

export default function EnterpriseAppBuilderPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-border/60 bg-zinc-950 text-zinc-50 dark:border-white/10">
        <div
          className="pointer-events-none absolute inset-0 opacity-45"
          aria-hidden
        >
          <div className="absolute -left-1/4 top-0 h-[420px] w-[420px] rounded-full bg-indigo-600/25 blur-3xl" />
          <div className="absolute -right-1/4 bottom-0 h-[380px] w-[380px] rounded-full bg-teal-500/15 blur-3xl" />
        </div>
        <Container className="relative py-20 lg:py-28">
          <p className="text-sm font-medium uppercase tracking-wider text-zinc-400">
            Use case · Enterprise app builder
          </p>
          <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            Build enterprise GTM apps on your terms.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-400">
            {siteConfig.name} is the open-source, code-first backbone for
            portals, consoles, and workflows your teams rely on—ship full-stack
            solutions on schedule without surrendering data to another black-box
            vendor.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button
              size="lg"
              className="h-11 bg-zinc-50 text-zinc-950 hover:bg-zinc-200"
              asChild
            >
              <Link href="/enterprise">
                Enterprise programs
                <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-11 border-zinc-700 bg-transparent text-zinc-50 hover:bg-zinc-900 hover:text-zinc-50"
              asChild
            >
              <Link href="/developers">Developer deep dive</Link>
            </Button>
          </div>
        </Container>
      </section>

      <section className="border-b border-border/60 bg-muted/30 py-16 lg:py-20">
        <Container>
          <blockquote className="mx-auto max-w-3xl text-center">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Building with {siteConfig.name} stays fast because schema, APIs,
              and admin UI all rise from the same typed config—your team spends
              time on domain logic, not wiring another CRUD stack.
            </p>
            <footer className="mt-6 text-sm font-medium text-foreground">
              Platform engineering pattern
            </footer>
          </blockquote>
        </Container>
      </section>

      <section className="border-b border-border/60 py-20 lg:py-24">
        <Container>
          <SectionTitle>
            The sweet spot between custom development and no-code.
          </SectionTitle>
          <p className="mt-4 max-w-3xl text-lg text-muted-foreground leading-relaxed">
            Progressive enterprises rebuild customer and revenue infrastructure
            on open platforms they control.{siteConfig.name} gives you immediate
            ROI: provision apps for partners, RevOps, and success teams while
            keeping the roadmap inside your repo.
          </p>
          <ul className="mt-14 grid gap-10 md:grid-cols-3">
            {sweetSpot.map((item) => (
              <li key={item.title}>
                <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Puzzle className="size-5" aria-hidden />
                </div>
                <h3 className="mt-4 text-lg font-semibold tracking-tight">
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

      <section className="border-b border-border/60 py-20 lg:py-24">
        <Container className="space-y-20 lg:space-y-24">
          {fourPillars.map((block, index) => {
            const Icon = block.icon;
            const showCode = index === 1;
            const body = (
              <>
                <div className="flex items-center gap-3">
                  <div className="flex size-10 items-center justify-center rounded-lg border border-border/60 bg-card text-primary shadow-sm">
                    <Icon className="size-5" aria-hidden />
                  </div>
                  <p className="font-mono text-sm text-muted-foreground">
                    {block.n}
                  </p>
                </div>
                <h2 className="mt-4 text-2xl font-semibold tracking-tight sm:text-3xl">
                  {block.title}
                </h2>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  {block.body}
                </p>
              </>
            );
            if (showCode) {
              return (
                <div
                  key={block.n}
                  className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16"
                >
                  <div>{body}</div>
                  <CodeSample
                    filename="oboe.config.ts"
                    code={appBuilderSnippet}
                  />
                </div>
              );
            }
            return (
              <div key={block.n} className="max-w-3xl">
                {body}
              </div>
            );
          })}
        </Container>
      </section>

      <section className="border-b border-border/60 py-20 lg:py-24">
        <Container>
          <SectionTitle className="max-w-3xl">
            Ship full-stack GTM tools in a fraction of the time.
          </SectionTitle>
          <p className="mt-4 max-w-3xl text-muted-foreground leading-relaxed lg:text-lg">
            More than a standalone admin, {siteConfig.name} scaffolds the data
            layer, APIs, and operator experiences for new initiatives—so your
            next partner program or renewal desk launches with security and
            observability already in place.
          </p>
        </Container>
      </section>

      <section className="border-b border-border/60 py-20 lg:py-24">
        <Container>
          <SectionTitle className="max-w-3xl">
            Everything you need to compose serious internal apps.
          </SectionTitle>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Mix primitives as your program matures—from MVP console to regulated
            production surface.
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
              Plan your next enterprise app with us
            </h2>
            <p className="mt-4 text-muted-foreground">
              We will cover dedicated engineering support, deployment models,
              and how {siteConfig.name} maps to your existing identity and data
              platforms.
            </p>
            <ul className="mx-auto mt-8 max-w-lg space-y-2 text-left text-sm text-muted-foreground">
              <li>• Architecture for internal, partner, and hybrid apps</li>
              <li>• SSO, audit, and compliance checkpoints</li>
              <li>• Integration patterns with ERP, CDP, and ticketing</li>
              <li>• Roadmap input for your vertical requirements</li>
            </ul>
            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button size="lg" className="h-11" asChild>
                <Link href="/contact">
                  Schedule a conversation
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="h-11" asChild>
                <a
                  href={siteConfig.githubRepoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Browse the source
                </a>
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
