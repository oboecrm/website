import defaultMdxComponents from "fumadocs-ui/mdx";
import type { MDXComponents } from "mdx/types";
import { DocCta } from "@/components/docs/doc-cta";

export function useMDXComponents(): MDXComponents {
  return {
    ...defaultMdxComponents,
    DocCta,
  };
}
