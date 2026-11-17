import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://fixxmyresume.com",
  trailingSlash: "always",
  build: { format: "directory" },
  integrations: [sitemap()],
  // Plain, light code blocks styled by our own CSS (resume samples, not code).
  markdown: { syntaxHighlight: false },
});
