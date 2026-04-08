/** Official OboeCRM monorepo — https://github.com/oboecrm/oboe */
const GITHUB_REPO_URL = "https://github.com/oboecrm/oboe" as const;

export const siteConfig = {
  name: "OboeCRM",
  tagline: "The open-source, code-first CRM for modern teams.",
  description:
    "Define your data model in code, ship faster with APIs your stack already speaks, and keep sales workflows in sync with engineering reality.",
  url: "https://oboecrm.com",
  githubRepoUrl: GITHUB_REPO_URL,
  nav: [
    { label: "Features", href: "/features" },
    { label: "Marketers", href: "/marketers" },
    { label: "Developers", href: "/developers" },
    { label: "Enterprise", href: "/enterprise" },
    { label: "Pricing", href: "/pricing" },
    { label: "Docs", href: "/docs" },
  ],
  footer: {
    product: [
      { label: "Features", href: "/features" },
      { label: "Marketers", href: "/marketers" },
      { label: "Headless CRM", href: "/use-cases/headless-crm" },
      {
        label: "Enterprise app builder",
        href: "/use-cases/enterprise-app-builder",
      },
      {
        label: "Sales force automation",
        href: "/use-cases/sales-force-automation",
      },
      {
        label: "Marketing automation",
        href: "/use-cases/marketing-automation",
      },
      { label: "Pricing", href: "/pricing" },
      { label: "Changelog", href: "/changelog" },
    ],
    developers: [
      { label: "Developers", href: "/developers" },
      { label: "Headless CRM", href: "/use-cases/headless-crm" },
      {
        label: "Enterprise app builder",
        href: "/use-cases/enterprise-app-builder",
      },
      {
        label: "Sales force automation",
        href: "/use-cases/sales-force-automation",
      },
      {
        label: "Marketing automation",
        href: "/use-cases/marketing-automation",
      },
      { label: "Documentation", href: "/docs" },
      { label: "GitHub", href: GITHUB_REPO_URL },
    ],
    company: [
      { label: "Enterprise", href: "/enterprise" },
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
    ],
  },
} as const;
