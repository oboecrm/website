import Link from "next/link";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

type DocCtaProps = {
  title?: string;
  description?: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
  tertiaryHref?: string;
  tertiaryLabel?: string;
};

function ActionLink({
  href,
  label,
  tone = "default",
}: {
  href: string;
  label: string;
  tone?: "default" | "muted";
}) {
  const className = cn(
    "inline-flex items-center justify-center rounded-md border px-4 py-2 text-sm font-medium transition-colors",
    tone === "default"
      ? "border-foreground bg-foreground text-background hover:bg-foreground/90"
      : "border-border bg-background hover:bg-muted",
  );

  if (href.startsWith("http")) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        {label}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {label}
    </Link>
  );
}

export function DocCta({
  title = "If OboeCRM fits your stack, star the repo and keep going.",
  description = "This project is being shaped in public. GitHub is the best place to follow progress, open questions, and early implementation work.",
  primaryHref = siteConfig.githubRepoUrl,
  primaryLabel = "Star on GitHub",
  secondaryHref,
  secondaryLabel,
  tertiaryHref,
  tertiaryLabel,
}: DocCtaProps) {
  return (
    <div className="my-10 rounded-2xl border border-border/70 bg-muted/40 p-6">
      <p className="text-base font-semibold tracking-tight">{title}</p>
      <p className="mt-2 text-sm leading-6 text-muted-foreground">
        {description}
      </p>
      <div className="mt-4 flex flex-wrap gap-3">
        <ActionLink href={primaryHref} label={primaryLabel} />
        {secondaryHref && secondaryLabel ? (
          <ActionLink
            href={secondaryHref}
            label={secondaryLabel}
            tone="muted"
          />
        ) : null}
        {tertiaryHref && tertiaryLabel ? (
          <ActionLink href={tertiaryHref} label={tertiaryLabel} tone="muted" />
        ) : null}
      </div>
    </div>
  );
}
