import { ArrowRight, Terminal } from "lucide-react";
import Link from "next/link";

import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

const snippet = `// oboe.config.ts
export default defineConfig({
  schema: {
    Account: { fields: { name: "text" } },
    Deal: { fields: { value: "number" } },
  },
  api: { rest: true, graphql: true },
});`;

export function HomeHero() {
  return (
    <section className="relative overflow-hidden border-b border-border/60 bg-zinc-950 text-zinc-50 dark:border-white/10">
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        aria-hidden
      >
        <div className="absolute -left-1/4 top-0 h-[480px] w-[480px] rounded-full bg-violet-600/30 blur-3xl" />
        <div className="absolute -right-1/4 bottom-0 h-[400px] w-[400px] rounded-full bg-cyan-500/20 blur-3xl" />
      </div>
      <Container className="relative py-20 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="text-sm font-medium uppercase tracking-wider text-zinc-400">
              Open source · Code-first
            </p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
              The backend your CRM has been missing.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-zinc-400">
              {siteConfig.description}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button
                size="lg"
                className="h-11 bg-zinc-50 text-zinc-950 hover:bg-zinc-200"
                asChild
              >
                <Link href="/docs">
                  Get started
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
                  View on GitHub
                </a>
              </Button>
            </div>
            <p className="mt-6 font-mono text-xs text-zinc-500">
              npx create-oboe-app{" "}
              <span className="text-zinc-600">(placeholder CLI)</span>
            </p>
          </div>
          <div className="relative">
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/80 p-1 shadow-2xl backdrop-blur">
              <div className="flex items-center gap-2 border-b border-zinc-800 px-4 py-3">
                <Terminal className="size-4 text-zinc-500" aria-hidden />
                <span className="text-xs font-medium text-zinc-500">
                  oboe.config.ts
                </span>
              </div>
              <pre className="overflow-x-auto p-4 text-left text-sm leading-relaxed text-zinc-300">
                <code>{snippet}</code>
              </pre>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
