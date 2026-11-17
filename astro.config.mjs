import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import fs from "node:fs";
import path from "node:path";

// Last real update of each article, read from its front matter (updated, else published).
const lastmod = {};
const dir = "./src/content/articles";
for (const f of fs.readdirSync(dir).filter((f) => f.endsWith(".md"))) {
  const fm = fs.readFileSync(path.join(dir, f), "utf8").split("---")[1] ?? "";
  const d = fm.match(/^updated:\s*(\S+)/m)?.[1] ?? fm.match(/^published:\s*(\S+)/m)?.[1];
  if (d) lastmod[`/articles/${f.replace(/\.md$/, "")}/`] = new Date(d).toISOString();
}
const newest = Object.values(lastmod).sort().at(-1);

export default defineConfig({
  site: "https://fixxmyresume.com",
  trailingSlash: "always",
  build: { format: "directory" },
  integrations: [
    sitemap({
      filter: (page) => !page.includes("/og/"),
      serialize(item) {
        const p = new URL(item.url).pathname;
        item.lastmod = lastmod[p] ?? newest;
        return item;
      },
    }),
  ],
  // Plain, light code blocks styled by our own CSS (resume samples, not code).
  markdown: { syntaxHighlight: false },
});
