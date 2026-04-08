import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  Building2,
  ClipboardList,
  Database,
  Globe2,
  Headphones,
  KeyRound,
  Radio,
  Server,
  Shield,
  Zap,
} from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";
import type { ReactNode } from "react";

import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Enterprise",
  description:
    "Self-host OboeCRM, enforce access in code, and align CRM with your security and compliance posture—open source, API-first, built for regulated and scaled GTM orgs.",
};

const pillars = [
  {
    icon: Shield,
    title: "Governance in code",
    body: "Schema, permissions, and integrations ship through the same review process as the rest of your platform—no mystery clicks in a vendor admin.",
  },
  {
    icon: Server,
    title: "Your infra, your data",
    body: "Run on your VPC, keep primary data in databases you operate, and align with residency requirements without negotiating a special contract clause.",
  },
  {
    icon: Zap,
    title: "APIs that match your SDLC",
    body: "REST and GraphQL generated from the same definitions your services consume—fewer one-off sync jobs and fewer reconciliation spreadsheets.",
  },
  {
    icon: Building2,
    title: "Built to compose",
    body: "Hooks, custom endpoints, and UI extension points so OboeCRM grows with subsidiaries, product lines, and M&A—not against them.",
  },
] as const;

const enterpriseCapabilities: {
  icon: LucideIcon;
  title: string;
  body: string;
}[] = [
  {
    icon: KeyRound,
    title: "Single Sign-On ready",
    body: "Design for SAML / OAuth identity providers and centralize access alongside the rest of your internal tooling.",
  },
  {
    icon: Shield,
    title: "Row- and field-aware access",
    body: "Express who can read or edit sensitive fields as auditable logic—not a matrix only RevOps remembers.",
  },
  {
    icon: ClipboardList,
    title: "Audit-friendly change history",
    body: "Track what moved on a deal, when, and by whom—exportable for security reviews and quarter-close forensics.",
  },
  {
    icon: Database,
    title: "Self-hosted & portable",
    body: "MIT-licensed core you can run where compliance demands. Leave with your data and your schema—not a ransom export.",
  },
  {
    icon: Radio,
    title: "Webhooks & event streams",
    body: "Notify SOAR, data platforms, and internal workflows when records cross thresholds your risk team cares about.",
  },
  {
    icon: Headphones,
    title: "Dedicated support path",
    body: "Enterprise deployments benefit from named engineering contact, faster escalation, and optional implementation partners.",
  },
];

const deepFeatures: {
  n: string;
  title: string;
  body: string;
  href: string;
}[] = [
  {
    n: "01",
    title: "Approval & deal-desk workflows",
    body: "Route discounts, legal exceptions, and high-touch renewals through steps your Finance and Legal teams can sign off on.",
    href: "/marketers",
  },
  {
    n: "02",
    title: "Identity provider integration",
    body: "Align OboeCRM sign-in with the IdP policies you already enforce for email, chat, and internal apps.",
    href: "/docs",
  },
  {
    n: "03",
    title: "Hooks for every integration",
    body: "Transform records, call internal services, and fan out events without maintaining a zoo of brittle middleware.",
    href: "/developers",
  },
  {
    n: "04",
    title: "Enterprise-grade access control",
    body: "Model territories, executive visibility, and partner restrictions with code your security reviewers can grep.",
    href: "/developers",
  },
  {
    n: "05",
    title: "Composable admin experience",
    body: "Embed custom React surfaces where reps need company-specific context—without forking the whole product.",
    href: "/docs",
  },
  {
    n: "06",
    title: "Multi-region & localization",
    body: "Field-level language and regional rollouts that stay maintainable as you add markets.",
    href: "/docs",
  },
  {
    n: "07",
    title: "Custom API endpoints",
    body: "Expose bespoke read paths or batch operations for legacy systems that cannot speak GraphQL yet.",
    href: "/developers",
  },
  {
    n: "08",
    title: "Versioning & rollback",
    body: "When definitions change, retain history and recover quickly—critical for SOX-minded revenue teams.",
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

export default function EnterprisePage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-border/60 bg-zinc-950 text-zinc-50 dark:border-white/10">
        <div
          className="pointer-events-none absolute inset-0 opacity-40"
          aria-hidden
        >
          <div className="absolute -left-1/4 top-0 h-[440px] w-[440px] rounded-full bg-blue-600/20 blur-3xl" />
          <div className="absolute -right-1/4 bottom-0 h-[360px] w-[360px] rounded-full bg-amber-500/10 blur-3xl" />
        </div>
        <Container className="relative py-20 lg:py-28">
          <p className="text-sm font-medium uppercase tracking-wider text-zinc-400">
            Enterprise
          </p>
          <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            Take back your customer data infrastructure.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-400">
            {siteConfig.name} is open source and code-first—so security,
            RevOps, and engineering share one system of record you can deploy
            on your terms. Build what your board expects without surrendering
            roadmap control to a black-box SaaS CRM.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button
              size="lg"
              className="h-11 bg-zinc-50 text-zinc-950 hover:bg-zinc-200"
              asChild
            >
              <Link href="/contact">
                Talk to sales
                <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-11 border-zinc-700 bg-transparent text-zinc-50 hover:bg-zinc-900 hover:text-zinc-50"
              asChild
            >
              <Link href="/developers">Technical overview</Link>
            </Button>
          </div>
        </Container>
      </section>

      <section className="border-b border-border/60 py-20 lg:py-24">
        <Container>
          <SectionTitle>
            The enterprise stack is moving toward open source. Your CRM should
            too.
          </SectionTitle>
          <p className="mt-4 max-w-3xl text-lg text-muted-foreground leading-relaxed">
            Buyers increasingly prefer platforms they can inspect, self-host,
            and extend—especially when customer data sits at the center.
            {siteConfig.name} pairs that transparency with the operator UI
            revenue teams still need, so you are not choosing between
            compliance and usability.
          </p>
          <p className="mt-6 max-w-3xl text-muted-foreground leading-relaxed">
            Embrace a CRM layer your developers are proud to own, and retire
            expensive rip-and-replace cycles every time strategy shifts.
          </p>
        </Container>
      </section>

      <section className="border-b border-border/60 bg-muted/30 py-20 lg:py-24">
        <Container>
          <SectionTitle>Why platform teams shortlist {siteConfig.name}</SectionTitle>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Ship on schedule, pass scrutiny, and keep GTM agile—these outcomes
            stop being trade-offs when the CRM is just another service in your
            repo.
          </p>
          <ul className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map((p) => (
              <li key={p.title}>
                <div className="flex size-10 items-center justify-center rounded-lg bg-background text-foreground shadow-sm">
                  <p.icon className="size-5" aria-hidden />
                </div>
                <h3 className="mt-5 text-base font-semibold tracking-tight">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {p.body}
                </p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="border-b border-border/60 py-20 lg:py-24">
        <Container>
          <SectionTitle>Enterprise capabilities</SectionTitle>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Mix and match what your risk register requires today. Extend the
            rest as your program matures.
          </p>
          <ul className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {enterpriseCapabilities.map((item) => {
              const Icon = item.icon;
              return (
              <li
                key={item.title}
                className="rounded-2xl border border-border/60 bg-card p-6 shadow-sm"
              >
                <div className="flex size-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Icon className="size-4" aria-hidden />
                </div>
                <h3 className="mt-4 text-lg font-semibold tracking-tight">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {item.body}
                </p>
              </li>
            );
            })}
          </ul>
        </Container>
      </section>

      <section className="border-b border-border/60 py-20 lg:py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
            <div>
              <SectionTitle className="text-left">
                Retire CRM sprawl—not ambition.
              </SectionTitle>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Most enterprises stitch together a hosted CRM, ad-hoc
                microservices, and a warehouse job nobody wants to own.{" "}
                {siteConfig.name} collapses the API, data model, and admin
                experience into one framework your teams can reason about.
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                When requirements change, you extend—not replatform. That is
                how ambitious roadmaps stay funded.
              </p>
            </div>
            <div className="rounded-2xl border border-border/60 bg-muted/40 p-8">
              <ul className="space-y-4 text-sm text-muted-foreground">
                <li className="flex gap-3">
                  <Globe2
                    className="mt-0.5 size-5 shrink-0 text-foreground"
                    aria-hidden
                  />
                  <span>
                    <strong className="font-medium text-foreground">
                      Unified APIs:
                    </strong>{" "}
                    One contract for mobile, web, BI, and partner portals.
                  </span>
                </li>
                <li className="flex gap-3">
                  <Shield
                    className="mt-0.5 size-5 shrink-0 text-foreground"
                    aria-hidden
                  />
                  <span>
                    <strong className="font-medium text-foreground">
                      Policy as code:
                    </strong>{" "}
                    Access reviews mirror how you secure the rest of the stack.
                  </span>
                </li>
                <li className="flex gap-3">
                  <Headphones
                    className="mt-0.5 size-5 shrink-0 text-foreground"
                    aria-hidden
                  />
                  <span>
                    <strong className="font-medium text-foreground">
                      Human escalation:
                    </strong>{" "}
                    Named support when revenue is on the line during quarter
                    end.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-b border-border/60 py-20 lg:py-24">
        <Container>
          <SectionTitle className="max-w-3xl">
            Deep features for security, RevOps, and platform engineering.
          </SectionTitle>
          <ul className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {deepFeatures.map((f) => (
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
          <div className="mx-auto max-w-3xl">
            <h2 className="text-center text-3xl font-semibold tracking-tight sm:text-4xl">
              Schedule time with us
            </h2>
            <p className="mt-4 text-center text-muted-foreground">
              Tell us about your GTM stack, compliance posture, and timeline—we
              will match you with the right technical owner.
            </p>
            <ul className="mx-auto mt-10 max-w-xl space-y-3 text-sm text-muted-foreground">
              <li className="flex gap-2">
                <span className="text-foreground" aria-hidden>
                  •
                </span>
                Architecture review for self-hosted or hybrid deployments
              </li>
              <li className="flex gap-2">
                <span className="text-foreground" aria-hidden>
                  •
                </span>
                Walkthrough of schema, access control, and integration
                patterns
              </li>
              <li className="flex gap-2">
                <span className="text-foreground" aria-hidden>
                  •
                </span>
                Roadmap alignment for SSO, audit, and enterprise support
                packages
              </li>
              <li className="flex gap-2">
                <span className="text-foreground" aria-hidden>
                  •
                </span>
                Optional introductions to implementation partners
              </li>
            </ul>
            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button size="lg" className="h-11" asChild>
                <Link href="/contact">
                  Contact enterprise sales
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="h-11" asChild>
                <a
                  href={siteConfig.githubRepoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Review the open-source core
                </a>
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
