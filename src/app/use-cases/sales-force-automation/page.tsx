import {
  ArrowRight,
  Bot,
  GitBranch,
  ListTodo,
  Route,
  Target,
  Timer,
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
  title: "Sales force automation",
  description:
    "Automate pipeline hygiene, task creation, routing, and follow-ups with OboeCRM—rules and hooks in code, triggers from product events, and full visibility for RevOps.",
};

const automationSnippet = `// hooks/dealAutomation.ts — SFA in TypeScript
import { defineHooks } from "@oboe/crm";

export const dealHooks = defineHooks({
  Deal: {
    afterChange: async ({ doc, previous, context }) => {
      if (doc.stage === "qualified" && previous?.stage !== "qualified") {
        await tasks.create({
          data: {
            title: "Schedule discovery call",
            ownerId: doc.ownerId,
            dueInDays: 2,
            relatedDealId: doc.id,
          },
          context,
        });
        await notifySlack({
          channel: "sales-revops",
          text: \`Deal \${doc.name} qualified — SLA started\`,
        });
      }
    },
  },
});`;

const outcomes = [
  {
    title: "Less manual CRM hygiene",
    body: "Stage changes, owner swaps, and field updates automatically spawn the next task, alert, or approval—reps sell instead of clicking through busywork.",
  },
  {
    title: "Rules you can review in PRs",
    body: "Automation lives beside your domain logic. Security and RevOps read the same TypeScript—not a hidden workflow builder only one admin understands.",
  },
  {
    title: "Triggers from the real product",
    body: "Fire sequences when trials activate, seats expand, or usage crosses a threshold—because OboeCRM shares IDs with the application your buyers already use.",
  },
] as const;

const playbooks: {
  n: string;
  title: string;
  body: string;
  icon: typeof Zap;
}[] = [
  {
    n: "01",
    icon: Route,
    title: "Lead & deal routing",
    body: "Round-robin by territory, skill, or capacity. Escalate stalled opportunities before forecast calls based on rules you define—not static workflow templates.",
  },
  {
    n: "02",
    icon: ListTodo,
    title: "Task & sequence orchestration",
    body: "Auto-create follow-ups when emails bounce, meetings no-show, or contracts sit unsigned. Chain steps with clear owners and due dates.",
  },
  {
    n: "03",
    icon: Timer,
    title: "SLAs & stage timers",
    body: "Track time-in-stage, ping managers when thresholds slip, and log outcomes for quarterly business reviews without exporting to another tool.",
  },
  {
    n: "04",
    icon: Bot,
    title: "Enrichment & scoring hooks",
    body: "Call enrichment vendors, compute scores, and write results back atomically—so reps see fresh context the moment records update.",
  },
  {
    n: "05",
    icon: Target,
    title: "Playbooks by segment",
    body: "Enterprise, mid-market, and PLG motions get different guardrails. Branch automation with the same schema instead of cloning orgs.",
  },
  {
    n: "06",
    icon: GitBranch,
    title: "Branch-safe rollouts",
    body: "Ship automation changes through staging, preview data, and roll back like any other service when something misbehaves.",
  },
];

const deepLinks: { n: string; title: string; body: string; href: string }[] =
  [
    {
      n: "01",
      title: "Webhooks & events",
      body: "Notify downstream systems the moment pipeline state changes.",
      href: "/use-cases/headless-crm",
    },
    {
      n: "02",
      title: "Access control",
      body: "Ensure automations respect row-level permissions.",
      href: "/developers",
    },
    {
      n: "03",
      title: "Approval workflows",
      body: "Insert human gates before discounts or legal commits fire.",
      href: "/marketers",
    },
    {
      n: "04",
      title: "Audit & versions",
      body: "Prove who moved a deal and when—for compliance and coaching.",
      href: "/docs",
    },
    {
      n: "05",
      title: "Custom endpoints",
      body: "Expose operator-safe bulk actions for RevOps runbooks.",
      href: "/developers",
    },
    {
      n: "06",
      title: "Enterprise deployment",
      body: "Run automation close to your data for latency and residency.",
      href: "/enterprise",
    },
    {
      n: "07",
      title: "Headless surfaces",
      body: "Embed next-best-action UI inside your product shell.",
      href: "/use-cases/headless-crm",
    },
    {
      n: "08",
      title: "Internal app patterns",
      body: "Give RevOps consoles the same hooks your sellers rely on.",
      href: "/use-cases/enterprise-app-builder",
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

export default function SalesForceAutomationPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-border/60 bg-gradient-to-b from-slate-900 via-zinc-950 to-zinc-950 text-zinc-50">
        <div
          className="pointer-events-none absolute inset-0 opacity-50"
          aria-hidden
        >
          <div className="absolute -left-1/4 top-0 h-[400px] w-[400px] rounded-full bg-orange-500/15 blur-3xl" />
          <div className="absolute -right-1/4 bottom-0 h-[360px] w-[360px] rounded-full bg-sky-500/15 blur-3xl" />
        </div>
        <Container className="relative py-20 lg:py-28">
          <p className="text-sm font-medium uppercase tracking-wider text-zinc-400">
            Use case · Sales force automation
          </p>
          <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            Automate the work around the deal—not the relationship.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-400">
            {siteConfig.name} turns pipeline events into tasks, notifications,
            and data updates you control in code. Keep reps focused on
            conversations while RevOps trusts the machine behind the scenes.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button
              size="lg"
              className="h-11 bg-zinc-50 text-zinc-950 hover:bg-zinc-200"
              asChild
            >
              <Link href="/developers">
                Automation in code
                <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-11 border-zinc-600 bg-transparent text-zinc-50 hover:bg-zinc-900 hover:text-zinc-50"
              asChild
            >
              <Link href="/features">Product overview</Link>
            </Button>
          </div>
        </Container>
      </section>

      <section className="border-b border-border/60 py-20 lg:py-24">
        <Container>
          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Pipeline operations
          </p>
          <SectionTitle className="mt-3 max-w-3xl">
            Every stage change can kick off the right next step.
          </SectionTitle>
          <p className="mt-4 max-w-3xl text-lg text-muted-foreground leading-relaxed">
            Sales force automation is not about spamming contacts—it is about
            consistent execution. Qualify, route, remind, and escalate using
            the same customer graph your product team already extends.
          </p>
        </Container>
      </section>

      <section className="border-b border-border/60 bg-muted/30 py-16 lg:py-20">
        <Container>
          <blockquote className="mx-auto max-w-3xl text-center">
            <p className="text-xl font-medium tracking-tight text-foreground sm:text-2xl">
              The best SFA systems feel invisible: reps notice the nudge, not
              the infrastructure.
            </p>
          </blockquote>
        </Container>
      </section>

      <section className="border-b border-border/60 py-20 lg:py-24">
        <Container>
          <SectionTitle>Why teams automate with {siteConfig.name}</SectionTitle>
          <ul className="mt-14 grid gap-10 md:grid-cols-3">
            {outcomes.map((item) => (
              <li key={item.title}>
                <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Zap className="size-5" aria-hidden />
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
            {playbooks.map((item) => {
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
                Hooks, not mystery macros.
              </SectionTitle>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Express automation as functions that run when records change.
                Test them, type them, and deploy them with the rest of your
                services—so SFA keeps pace with how fast your motion evolves.
              </p>
            </div>
            <CodeSample filename="hooks/dealAutomation.ts" code={automationSnippet} />
          </div>
        </Container>
      </section>

      <section className="border-b border-border/60 py-20 lg:py-24">
        <Container>
          <SectionTitle className="max-w-3xl">
            Connect automation to the rest of your GTM stack.
          </SectionTitle>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Start with pipeline events, extend into docs, marketing, and
            internal tools—without re-platforming every year.
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
              Design automation with RevOps and Engineering together.
            </h2>
            <p className="mt-4 text-muted-foreground">
              Share a short brief on territories, SLAs, and tools—we will map
              how {siteConfig.name} can replace brittle scripts without slowing
              sellers down.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button size="lg" className="h-11" asChild>
                <Link href="/contact">
                  Talk to us
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="h-11" asChild>
                <Link href="/marketers">Marketer view</Link>
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
