import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

export function HomeManifesto() {
  return (
    <section className="py-20 lg:py-28">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            We’re building a better default for CRM.
          </h2>
          <div className="mt-8 space-y-4 text-left text-muted-foreground leading-relaxed sm:text-lg">
            <p>
              The last generation of CRMs traded flexibility for walled gardens.
              Teams copy-pasted deals into spreadsheets, engineers rebuilt the
              same APIs, and nobody trusted the “source of truth.”
            </p>
            <p>
              <strong className="font-medium text-foreground">
                {siteConfig.name} marks a different approach.
              </strong>{" "}
              Open source is not a checkbox — it is leverage. You keep the
              runtime, the schema, and the roadmap. Marketing and sales get
              interfaces that respect reality, not the other way around.
            </p>
            <p>
              Finally ship a CRM layer you truly own — one that pairs with
              Next.js, your data warehouse, and the automations you already run
              in production.
            </p>
          </div>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button size="lg" className="h-11" asChild>
              <Link href="/contact">
                Talk to us
                <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="h-11" asChild>
              <Link href="/docs">Read the docs</Link>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
