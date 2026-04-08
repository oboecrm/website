import Link from "next/link";

import { Container } from "@/components/container";
import { siteConfig } from "@/config/site";

const columns = [
  { title: "Product", links: siteConfig.footer.product },
  { title: "Developers", links: siteConfig.footer.developers },
  { title: "Company", links: siteConfig.footer.company },
] as const;

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-muted/30">
      <Container className="py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Link href="/" className="text-lg font-semibold tracking-tight">
              {siteConfig.name}
            </Link>
            <p className="mt-3 max-w-xs text-sm text-muted-foreground">
              {siteConfig.tagline}
            </p>
          </div>
          {columns.map((col) => (
            <div key={col.title}>
              <p className="text-sm font-medium text-foreground">{col.title}</p>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <FooterLink {...link} />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 border-t border-border/60 pt-8 text-sm text-muted-foreground">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. Open source under
            MIT.
          </p>
        </div>
      </Container>
    </footer>
  );
}

function FooterLink(link: { label: string; href: string }) {
  const external = link.href.startsWith("http");
  if (external) {
    return (
      <a
        href={link.href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-muted-foreground transition-colors hover:text-foreground"
      >
        {link.label}
      </a>
    );
  }
  return (
    <Link
      href={link.href}
      className="text-muted-foreground transition-colors hover:text-foreground"
    >
      {link.label}
    </Link>
  );
}
