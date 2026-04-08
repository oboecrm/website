import { Menu } from "lucide-react";
import Link from "next/link";

import { Container } from "@/components/container";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md",
      )}
    >
      <Container className="flex h-14 items-center justify-between gap-4">
        <div className="flex items-center gap-8">
          <Link
            href="/"
            className="font-semibold tracking-tight text-foreground"
          >
            {siteConfig.name}
          </Link>
          <nav className="hidden items-center gap-1 md:flex">
            {siteConfig.nav.map((item) => (
              <Button key={item.href} variant="ghost" size="sm" asChild>
                <Link href={item.href}>{item.label}</Link>
              </Button>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-1 sm:gap-2">
          <ThemeToggle className="hidden sm:inline-flex" />
          <Button
            variant="ghost"
            size="sm"
            className="hidden sm:inline-flex"
            asChild
          >
            <a
              href={siteConfig.githubRepoUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </Button>
          <Button size="sm" className="hidden sm:inline-flex" asChild>
            <Link href="/docs">Get started</Link>
          </Button>
          <details className="relative md:hidden">
            <summary className="list-none [&::-webkit-details-marker]:hidden">
              <Button variant="outline" size="icon" aria-label="Open menu">
                <Menu className="size-4" />
              </Button>
            </summary>
            <div className="absolute right-0 mt-2 w-52 rounded-xl border bg-popover p-2 shadow-lg">
              <div className="flex items-center justify-between border-b border-border/60 px-3 py-2">
                <span className="text-xs font-medium text-muted-foreground">
                  Theme
                </span>
                <ThemeToggle />
              </div>
              {siteConfig.nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block rounded-md px-3 py-2 text-sm hover:bg-muted"
                >
                  {item.label}
                </Link>
              ))}
              <a
                href={siteConfig.githubRepoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-md px-3 py-2 text-sm hover:bg-muted"
              >
                GitHub
              </a>
              <Link
                href="/docs"
                className="mt-1 block rounded-md bg-primary px-3 py-2 text-center text-sm text-primary-foreground"
              >
                Get started
              </Link>
            </div>
          </details>
        </div>
      </Container>
    </header>
  );
}
