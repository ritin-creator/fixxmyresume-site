import { getCollection, type CollectionEntry } from "astro:content";

export type Article = CollectionEntry<"articles">;

export async function allArticles(): Promise<Article[]> {
  return (await getCollection("articles")).sort(
    (a, b) => +(b.data.updated ?? b.data.published) - +(a.data.updated ?? a.data.published) || a.data.title.localeCompare(b.data.title),
  );
}

export function readingMinutes(body: string | undefined): number {
  const words = (body ?? "").split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 220));
}

export function wordCount(body: string | undefined): number {
  return (body ?? "").split(/\s+/).filter(Boolean).length;
}

export function fmtDate(d: Date): string {
  return d.toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric", timeZone: "UTC" });
}

/** Same category first, then same region, excluding the article itself. */
export function related(a: Article, all: Article[], n = 4): Article[] {
  const score = (b: Article) => (b.data.category === a.data.category ? 2 : 0) + (b.data.region === a.data.region ? 1 : 0);
  return all
    .filter((b) => b.id !== a.id)
    .map((b) => ({ b, s: score(b) }))
    .sort((x, y) => y.s - x.s || x.b.data.title.localeCompare(y.b.data.title))
    .slice(0, n)
    .map((x) => x.b);
}
