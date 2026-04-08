import {
  ArrowRight,
  Funnel,
  LineChart,
  Mail,
  Megaphone,
  Radar,
  Users,
  Webhook,
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
  title: "Marketing automation",
  description:
    "Unify campaigns, scoring, and handoffs in OboeCRM—capture UTMs in schema, trigger nurture from product signals, and sync segments through typed hooks your engineers own.",
};

const marketingSnippet = `// hooks/leadLifecycle.ts — MA + product in one graph
import { defineHooks } from "@oboe/crm";

export const leadHooks = defineHooks({
  Lead: {
    afterChange: async ({ doc, previous, context }) => {
      if (doc.score >= 80 && (previous?.score ?? 0) < 80) {
        await salesQueue.enqueue({
          type: "mql_to_sql",
          leadId: doc.id,
          campaign: doc.utmCampaign,
        });
        await esp.updateSubscription({
          email: doc.email,
          list: "high_intent_nurture",
          paused: true,
        });
      }
    },
  },
});`;

const outcomes = [
  {
    title: "One record from first touch to revenue",
    body: "UTMs, form fills, webinar attendance, and product activation live on the same lead and account IDs sales already works—no more stitching exports every Monday.",
  },
  {
    title: "Segments defined in code",
    body: "Cohorts are queries and rules you can review, test, and version—marketing moves fast without hiding logic in a no-code maze.",
  },
  {
    title: "Triggers from real usage",
    body: "Start or stop journeys when trials hit milestones, seats change, or health scores dip—because the CRM schema sits next to your application data.",
  },
] as const;

const programs: {
  n: string;
  title: string;
  body: string;
  icon: typeof Mail;
}[] = [
  {
    n: "01",
    icon: Mail,
    title: "Capture & normalize every source",
    body: "Landing pages, events, ads, and referrals write into typed fields—duplicate handling and consent flags stay explicit for compliance reviews.",
  },
  {
    n: "02",
    icon: Megaphone,
    title: "Campaign orchestration",
    body: "Coordinate email, in-app, and sales touches from one timeline. Pause or branch nurture when a human owner takes over the thread.",
  },
  {
    n: "03",
    icon: LineChart,
    title: "Scoring that sales trusts",
    body: "Blend firmographic fit with live product signals. When the model changes, everyone sees the diff in git—not a surprise dashboard swing.",
  },
  {
    n: "04",
    icon: Funnel,
    title: "Lifecycle stages that match finance",
    body: "MQL, SQL, opportunity, and expansion definitions align to reporting dimensions so Marketing and Finance argue less about definitions.",
  },
  {
    n: "05",
    icon: Webhook,
    title: "Bi-directional ESP & ads hooks",
    body: "Push audiences to your ESP, pull engagement back, and fan out webhooks to CDPs or warehouses without bespoke cron jobs per channel.",
  },
  {
    n: "06",
    icon: Users,
    title: "Clean handoff to sales",
    body: "Route qualified leads with context: campaign, content consumed, and product milestones—so the first call is informed, not cold.",
  },
];

const deepLinks: { n: string; title: string; body: string; href: string }[] =
  [
    {
      n: "01",
      title: "Marketer-facing overview",
      body: "How GTM teams partner with engineering on Oboe.",
      href: "/marketers",
    },
    {
      n: "02",
      title: "Headless CRM surfaces",
      body: "Embed forms and account health where prospects already are.",
      href: "/use-cases/headless-crm",
    },
    {
      n: "03",
      title: "Sales automation",
      body: "Bridge nurture completion into tasks and pipeline SLAs.",
      href: "/use-cases/sales-force-automation",
    },
    {
      n: "04",
      title: "Webhooks & events",
      body: "Notify stacks when cohorts or scores change.",
      href: "/developers",
    },
    {
      n: "05",
      title: "Access control",
      body: "Limit PII and campaign data to the right teams.",
      href: "/enterprise",
    },
    {
      n: "06",
      title: "Localization",
      body: "Run regional programs without cloning entire orgs.",
      href: "/docs",
    },
    {
      n: "07",
      title: "Custom API endpoints",
      body: "Batch subscribe, unsubscribe, and enrichment safely.",
      href: "/developers",
    },
    {
      n: "08",
      title: "Audit & attribution exports",
      body: "Prove what touched an opportunity before it closed.",
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

export default function MarketingAutomationPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-border/60 bg-gradient-to-b from-fuchsia-950/80 via-zinc-950 to-zinc-950 text-zinc-50">
        <div
          className="pointer-events-none absolute inset-0 opacity-50"
          aria-hidden
        >
          <div className="absolute -left-1/4 top-0 h-[400px] w-[400px] rounded-full bg-fuchsia-500/20 blur-3xl" />
          <div className="absolute -right-1/4 bottom-0 h-[360px] w-[360px] rounded-full bg-pink-500/10 blur-3xl" />
        </div>
        <Container className="relative py-20 lg:py-28">
          <p className="text-sm font-medium uppercase tracking-wider text-zinc-400">
            Use case · Marketing automation
          </p>
          <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            Automate journeys on the same graph your product uses.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-400">
            {siteConfig.name} lets marketing wire campaigns, scoring, and
            handoffs in TypeScript—so nurture, sales, and in-product prompts
            stay aligned without a tangle of Zapier-only tribal knowledge.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button
              size="lg"
              className="h-11 bg-zinc-50 text-zinc-950 hover:bg-zinc-200"
              asChild
            >
              <Link href="/marketers">
                For marketing teams
                <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-11 border-zinc-600 bg-transparent text-zinc-50 hover:bg-zinc-900 hover:text-zinc-50"
              asChild
            >
              <Link href="/developers">Integration patterns</Link>
            </Button>
          </div>
        </Container>
      </section>

      <section className="border-b border-border/60 py-20 lg:py-24">
        <Container>
          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Campaign operations
          </p>
          <SectionTitle className="mt-3 max-w-3xl">
            Attribution works when the CRM is not a walled garden.
          </SectionTitle>
          <p className="mt-4 max-w-3xl text-lg text-muted-foreground leading-relaxed">
            Marketing automation fails when customer data is trapped in a SaaS
            UI your stack cannot extend. {siteConfig.name} keeps leads, touches,
            and scores queryable—so analytics, email, and sales automation read
            one story.
          </p>
        </Container>
      </section>

      <section className="border-b border-border/60 bg-muted/30 py-16 lg:py-20">
        <Container>
          <blockquote className="mx-auto max-w-3xl text-center">
            <p className="text-xl font-medium tracking-tight text-foreground sm:text-2xl">
              Great MA is invisible to buyers but obvious to RevOps: every touch
              is logged, every handoff has context.
            </p>
          </blockquote>
        </Container>
      </section>

      <section className="border-b border-border/60 py-20 lg:py-24">
        <Container>
          <SectionTitle>Why marketing automates on {siteConfig.name}</SectionTitle>
          <ul className="mt-14 grid gap-10 md:grid-cols-3">
            {outcomes.map((item) => (
              <li key={item.title}>
                <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Radar className="size-5" aria-hidden />
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
        <Container>
          <ul className="grid gap-12 lg:grid-cols-2">
            {programs.map((item) => {
              const Icon = item.icon;
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
          <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <SectionTitle className="text-left">
                Score, sync, and hand off in one hook.
              </SectionTitle>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                When a lead crosses the threshold, update your ESP, notify
                sales, and stamp attribution fields in the same transaction—so
                nobody chases a lead that already converted in-product.
              </p>
            </div>
            <CodeSample
              filename="hooks/leadLifecycle.ts"
              code={marketingSnippet}
            />
          </div>
        </Container>
      </section>

      <section className="border-b border-border/60 py-20 lg:py-24">
        <Container>
          <SectionTitle className="max-w-3xl">
            Plug marketing automation into the rest of your GTM motion.
          </SectionTitle>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Explore adjacent patterns for sales, headless surfaces, and
            enterprise controls.
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
              Bring your next nurture program into one system of record.
            </h2>
            <p className="mt-4 text-muted-foreground">
              Share your channels, consent model, and handoff criteria—we will
              map how {siteConfig.name} keeps marketing automation transparent
              for both Growth and Engineering.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button size="lg" className="h-11" asChild>
                <Link href="/contact">
                  Talk to us
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
