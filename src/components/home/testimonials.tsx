import { Container } from "@/components/container";

const quotes = [
  {
    quote:
      "We replaced three internal tools with one schema. Sales finally trusts the same IDs our product emits.",
    name: "Alex Rivera",
    role: "Engineering Lead",
    org: "Northwind Labs",
  },
  {
    quote:
      "The admin UI is opinionated enough for reps, but the escape hatch is always code. That balance is rare.",
    name: "Jordan Lee",
    role: "RevOps",
    org: "Contour SaaS",
  },
  {
    quote:
      "Self-hosting was non-negotiable. OboeCRM let us ship a CRM-shaped layer without a procurement saga.",
    name: "Sam Okonkwo",
    role: "CTO",
    org: "Fieldline",
  },
] as const;

export function HomeTestimonials() {
  return (
    <section className="border-b border-border/60 py-20 lg:py-24">
      <Container>
        <h2 className="mx-auto max-w-3xl text-center text-3xl font-semibold tracking-tight sm:text-4xl">
          From fast-moving startups to teams that can’t afford brittle CRMs
        </h2>
        <ul className="mt-14 grid gap-6 lg:grid-cols-3">
          {quotes.map((q) => (
            <li
              key={q.name}
              className="flex flex-col rounded-2xl border border-border/60 bg-muted/20 p-6"
            >
              <blockquote className="flex-1 text-sm leading-relaxed text-foreground">
                “{q.quote}”
              </blockquote>
              <footer className="mt-6 border-t border-border/60 pt-4">
                <p className="text-sm font-medium">{q.name}</p>
                <p className="text-xs text-muted-foreground">
                  {q.role}, {q.org}
                </p>
              </footer>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
