import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const articles = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/articles" }),
  schema: z.object({
    title: z.string().max(110),
    description: z.string().min(50).max(170),
    // The direct answer shown first on the page: what AI answer engines quote.
    answer: z.string().min(40).max(420),
    region: z.enum(["india", "global"]),
    category: z.enum([
      "ats-and-keywords",
      "resume-writing",
      "formats-and-templates",
      "examples-by-role",
      "freshers-and-students",
      "career-situations",
      "cover-letters",
      "job-portals-and-linkedin",
      "working-abroad",
    ]),
    format: z.enum(["guide", "how-to", "checklist", "examples", "comparison", "quick-answer", "glossary", "list", "myths"]),
    keywords: z.array(z.string()).min(2).max(10),
    published: z.coerce.date(),
    updated: z.coerce.date().optional(),
    faq: z.array(z.object({ q: z.string(), a: z.string() })).default([]),
    lang: z.enum(["en", "hi-Latn"]).default("en"),
  }),
});

export const collections = { articles };
