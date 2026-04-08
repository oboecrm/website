import {
  ArrowRight,
  BarChart3,
  Megaphone,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";
import type { ReactNode } from "react";

import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Marketers",
  description:
    "Align GTM with engineering reality—OboeCRM keeps pipelines, campaigns, and product data on one code-first foundation your whole company can trust.",
};

const alignmentPillars = [
  {
    title: "One model for GTM and product",
    body: "When deals, trials, and accounts live in the same schema as your app, handoffs stop being archaeology projects.",
  },
  {
    title: "Ship field changes with confidence",
    body: "New lifecycle stages or attribution fields ship through the same release train as your product—not a Friday ticket to “someone in CRM admin.”",
  },
  {
    title: "Reporting that doesn’t rot",
    body: "Dashboards reflect the fields your engineers actually write to. Fewer “why doesn’t this number match the app?” meetings.",
  },
  {
    title: "Open source, visible roadmap",
    body: "No surprise deprecations hiding behind a vendor portal. Your RevOps and engineering leads read the same MIT-licensed core.",
  },
] as const;

const gridFeatures = [
  {
    title: "Lifecycle & stages",
    body: "Model how leads become revenue in terminology your reps already use—without forking a shadow spreadsheet.",
    href: "/features",
  },
  {
    title: "Segments that stay honest",
    body: "Build cohorts off live product usage and CRM fields that share IDs with your data warehouse.",
    href: "/features",
  },
  {
    title: "Campaign → pipeline lineage",
    body: "Trace outreach and experiments to opportunities when engineering wires campaign IDs into the same graph as deals.",
    href: "/developers",
  },
  {
    title: "Territory & ownership",
    body: "Clear rules for who owns which accounts—expressed as code your security team can review.",
    href: "/docs",
  },
  {
    title: "SLAs & handoff queues",
    body: "Surface bottlenecks between marketing-qualified and sales-accepted with queues reps can actually clear.",
    href: "/features",
  },
  {
    title: "Approvals & governance",
    body: "Discounts, partner deals, and exceptions flow through auditable paths instead of DMs.",
    href: "/docs",
  },
  {
    title: "Attribution hooks",
    body: "Connect UTM, product events, and CRM milestones so Finance and Marketing stop debating definitions.",
    href: "/developers",
  },
  {
    title: "Exports you can trust",
    body: "Portable data and APIs mean your ops team isn’t locked into a black box when leadership asks for a new board deck.",
    href: "/docs",
  },
  {
    title: "Partner with developers",
    body: "Give engineers a system they want to extend—so marketers get automation without begging for one-off scripts.",
    href: "/developers",
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

function InsightCard({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-border/60 bg-card p-6 shadow-sm",
        className,
      )}
    >
      {children}
    </div>
  );
}

export default function MarketersPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-border/60 bg-gradient-to-b from-violet-100/80 via-background to-background dark:from-violet-950/40 dark:via-background dark:to-background">
        <div
          className="pointer-events-none absolute inset-0 opacity-60 dark:opacity-40"
          aria-hidden
        >
          <div className="absolute -left-1/4 top-0 h-[380px] w-[380px] rounded-full bg-fuchsia-400/25 blur-3xl dark:bg-fuchsia-600/20" />
          <div className="absolute -right-1/4 top-24 h-[320px] w-[320px] rounded-full bg-violet-400/20 blur-3xl dark:bg-violet-600/15" />
        </div>
        <Container className="relative py-20 lg:py-28">
          <p className="inline-flex items-center gap-2 text-sm font-medium uppercase tracking-wider text-muted-foreground">
            <Megaphone className="size-4" aria-hidden />
            Marketers
          </p>
          <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            CRM that keeps up with how you go to market.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            {siteConfig.name} is code-first behind the scenes—so your campaigns,
            pipeline, and product data stay aligned. Give marketing and RevOps
            clarity while engineers keep control of the schema and APIs.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button size="lg" className="h-11" asChild>
              <Link href="/contact">
                Talk to us
                <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="h-11" asChild>
              <Link href="/developers">How engineers use Oboe</Link>
            </Button>
          </div>
        </Container>
      </section>

      <section className="border-b border-border/60 py-20 lg:py-24">
        <Container>
          <SectionTitle>
            Stop reconciling three truths: spreadsheet, CRM, and product.
          </SectionTitle>
          <p className="mt-4 max-w-3xl text-lg text-muted-foreground leading-relaxed">
            Legacy CRMs encourage shadow systems because the “official” record
            lags what the product knows. A code-first CRM lives next to your
            application stack—so the funnel your marketers optimize is the same
            object graph your engineers extend.
          </p>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            <InsightCard>
              <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Users className="size-5" aria-hidden />
              </div>
              <h3 className="mt-4 text-lg font-semibold tracking-tight">
                Shared language with Sales
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Stages, fields, and ownership rules reflect how your team
                actually sells—not how a generic SaaS wizard guessed you work.
              </p>
            </InsightCard>
            <InsightCard>
              <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Sparkles className="size-5" aria-hidden />
              </div>
              <h3 className="mt-4 text-lg font-semibold tracking-tight">
                Launches that don’t stall on “CRM tickets”
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                New motions (PLG, partner, enterprise) need new data shapes.
                Ship them with the same PR process as a feature flag—not a
                month-long admin project.
              </p>
            </InsightCard>
            <InsightCard>
              <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <BarChart3 className="size-5" aria-hidden />
              </div>
              <h3 className="mt-4 text-lg font-semibold tracking-tight">
                Metrics your CFO can defend
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                When definitions live in versioned config, Finance and Marketing
                stop arguing over whose export is “more right.”
              </p>
            </InsightCard>
          </div>
        </Container>
      </section>

      <section className="border-b border-border/60 bg-muted/30 py-20 lg:py-24">
        <Container>
          <SectionTitle>
            Built for tight loops between Marketing, RevOps, and Engineering.
          </SectionTitle>
          <p className="mt-4 max-w-3xl text-muted-foreground leading-relaxed lg:text-lg">
            You shouldn’t need a translation layer for every experiment.{" "}
            {siteConfig.name} rewards teams that collaborate in public—in repos,
            docs, and shared KPIs.
          </p>
          <ul className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {alignmentPillars.map((item) => (
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
              The best GTM teams don’t fight their CRM—they extend it like a
              product surface.
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
                Campaign context that survives the handoff
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Store experiment names, cohorts, and touchpoints on the same
                records sales works every day—so follow-up emails reference the
                story prospects actually lived.
              </p>
            </div>
            <InsightCard className="space-y-3 font-mono text-xs sm:text-sm">
              <div className="flex items-center justify-between border-b border-border/60 pb-2 text-muted-foreground">
                <span>Lead · Jordan Lee</span>
                <span className="rounded-md bg-muted px-2 py-0.5 text-[0.65rem] uppercase tracking-wide">
                  MQL
                </span>
              </div>
              <p className="text-foreground">
                <span className="text-muted-foreground">source:</span>{" "}
                spring_launch_webinar
              </p>
              <p className="text-foreground">
                <span className="text-muted-foreground">utm_campaign:</span>{" "}
                plg_expansion_q2
              </p>
              <p className="text-foreground">
                <span className="text-muted-foreground">product_signals:</span>{" "}
                activated_invites ≥ 3
              </p>
              <p className="border-t border-border/60 pt-2 text-primary">
                → converts to Opportunity with lineage intact
              </p>
            </InsightCard>
          </div>

          <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="lg:order-2">
              <p className="font-mono text-sm text-muted-foreground">02</p>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
                Pipelines reps trust to open every morning
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Kanban and list views stay fast because the data model matches
                how your app stores accounts and usage—not a bolted-on object
                graph from 2008.
              </p>
            </div>
            <div className="lg:order-1">
              <InsightCard className="space-y-4 p-5">
                <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                  Pipeline snapshot
                </p>
                <ul className="space-y-3">
                  {[
                    { stage: "Qualified", count: 24, value: "$1.1M" },
                    { stage: "Evaluation", count: 11, value: "$640K" },
                    { stage: "Negotiation", count: 6, value: "$410K" },
                  ].map((row) => (
                    <li
                      key={row.stage}
                      className="flex items-center justify-between rounded-lg border border-border/60 bg-muted/30 px-3 py-2.5 text-sm"
                    >
                      <span className="font-medium">{row.stage}</span>
                      <span className="text-muted-foreground">
                        {row.count} deals · {row.value}
                      </span>
                    </li>
                  ))}
                </ul>
              </InsightCard>
            </div>
          </div>

          <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <p className="font-mono text-sm text-muted-foreground">03</p>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
                Governance without killing velocity
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Discount requests, partner introductions, and sensitive
                accounts flow through rules everyone can read. Compliance gets
                receipts; marketers keep shipping.
              </p>
            </div>
            <InsightCard className="space-y-4">
              <div className="flex items-start gap-3">
                <ShieldCheck
                  className="mt-0.5 size-5 shrink-0 text-primary"
                  aria-hidden
                />
                <div>
                  <p className="font-medium">Deal desk approval</p>
                  <p className="text-sm text-muted-foreground">
                    &gt;25% discount requires RevOps + Finance sign-off with
                    timestamps stored on the opportunity.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <ShieldCheck
                  className="mt-0.5 size-5 shrink-0 text-primary"
                  aria-hidden
                />
                <div>
                  <p className="font-medium">Field history you can export</p>
                  <p className="text-sm text-muted-foreground">
                    Know who changed territory, stage, or ACV—without exporting
                    obscure admin logs.
                  </p>
                </div>
              </div>
            </InsightCard>
          </div>
        </Container>
      </section>

      <section className="border-b border-border/60 py-20 lg:py-24">
        <Container>
          <SectionTitle className="max-w-3xl">
            Everything you need to orchestrate modern GTM—without a parallel
            shadow CRM.
          </SectionTitle>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Pick the slices that matter to your motion today. Extend the rest
            when your playbook evolves.
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
              Your GTM stack should feel inevitable—not improvised.
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed sm:text-lg">
              Code-first isn’t about excluding marketers—it’s about giving you a
              backbone that engineers are proud to own. When both sides trust
              the system of record, launches get faster and attribution gets
              quieter.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed sm:text-lg">
              Bring {siteConfig.name} into your next planning cycle and see how
              much calendar time you reclaim.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button size="lg" className="h-11" asChild>
                <Link href="/contact">
                  Book a conversation
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="h-11" asChild>
                <Link href="/features">Explore features</Link>
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
