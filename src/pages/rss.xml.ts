import rss from "@astrojs/rss";
import type { APIContext } from "astro";
import { allArticles } from "../lib/articles";
import { site } from "../site";

export async function GET(context: APIContext) {
  const all = await allArticles();
  return rss({
    title: `${site.name} articles`,
    description: "Free guides on ATS-friendly resumes, formats, examples and job search, for India and abroad.",
    site: context.site ?? site.url,
    items: all.map((a) => ({
      title: a.data.title,
      description: a.data.description,
      pubDate: a.data.published,
      link: `/articles/${a.id}/`,
      categories: [a.data.region, a.data.category],
    })),
  });
}
