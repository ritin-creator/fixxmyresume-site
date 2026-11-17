// Runs after "wrangler deploy" in Cloudflare Workers Builds: tells Bing (and other IndexNow engines)
// which URLs exist so they recrawl quickly. Never fails the deploy.
import fs from "node:fs";
const key = "b4b7abaeec99a7e69d870c374bd2fbbe";
const host = "fixxmyresume.com";
try {
  const xml = fs.readFileSync("dist/sitemap-0.xml", "utf8");
  const urlList = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
  const res = await fetch("https://api.indexnow.org/indexnow", {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify({ host, key, keyLocation: `https://${host}/${key}.txt`, urlList }),
  });
  console.log(`IndexNow: ${res.status} for ${urlList.length} URLs`);
} catch (e) {
  console.log("IndexNow skipped:", e.message);
}
