// Share image per article (1200x630), built at build time. Shown in WhatsApp, LinkedIn and X previews.
import type { APIRoute, GetStaticPaths } from "astro";
import fs from "node:fs";
import { createRequire } from "node:module";
import satori from "satori";
import { Resvg } from "@resvg/resvg-js";
import { allArticles, type Article } from "../../lib/articles";
import { site, categories, regions } from "../../site";

const require = createRequire(import.meta.url);
const font = (sub: string, w: 400 | 700) => fs.readFileSync(require.resolve(`@fontsource/inter/files/inter-${sub}-${w}-normal.woff`));
// "latin-ext" carries the ₹ sign.
const fonts = (["latin", "latin-ext"] as const).flatMap((sub) => [
  { name: sub === "latin" ? "Inter" : "InterExt", data: font(sub, 400), weight: 400 as const, style: "normal" as const },
  { name: sub === "latin" ? "Inter" : "InterExt", data: font(sub, 700), weight: 700 as const, style: "normal" as const },
]);

export const getStaticPaths: GetStaticPaths = async () => (await allArticles()).map((a) => ({ params: { slug: a.id }, props: { a } }));

const el = (type: string, style: Record<string, unknown>, children: unknown) => ({ type, props: { style, children } });

export const GET: APIRoute = async ({ props }) => {
  const a = (props as { a: Article }).a;
  const d = a.data;
  const title = d.title.length > 90 ? d.title.slice(0, 87) + "…" : d.title;
  const size = title.length > 60 ? 58 : 66;
  // Satori adds padding to the size, so the content sits in an absolutely placed inner box instead.
  const tree = el("div", { width: 1200, height: 630, display: "flex", background: "#F7F8FB", fontFamily: "Inter, InterExt" }, [el("div", { position: "absolute", top: 64, left: 72, right: 72, bottom: 64, display: "flex", flexDirection: "column", justifyContent: "space-between" }, [
    el("div", { display: "flex", alignItems: "center", gap: 16, width: 1056 }, [
      el("div", { display: "flex", background: "#1D4ED8", color: "#fff", fontWeight: 700, fontSize: 28, padding: "10px 16px", borderRadius: 12 }, "FMR"),
      el("div", { display: "flex", fontSize: 30, fontWeight: 700, color: "#111827" }, site.name),
      el("div", { display: "flex", marginLeft: "auto", fontSize: 24, color: "#1D4ED8", border: "2px solid #1D4ED8", borderRadius: 999, padding: "6px 18px" }, regions[d.region].label === "India" ? "For India" : "Global"),
    ]),
    el("div", { display: "flex", flexDirection: "column", width: 1056, gap: 18 }, [
      el("div", { display: "flex", fontSize: 26, color: "#1D4ED8", fontWeight: 700 }, categories[d.category].label),
      el("div", { display: "flex", width: 1056, fontSize: size, fontWeight: 700, color: "#111827", lineHeight: 1.15, letterSpacing: -1 }, title),
    ]),
    el("div", { display: "flex", justifyContent: "space-between", width: 1056, fontSize: 26, color: "#4B5563" }, [
      el("div", { display: "flex" }, "Free ATS resume check · fixxmyresume.com"),
      el("div", { display: "flex", color: "#1D4ED8", fontWeight: 700 }, `Fixed resume ₹${site.priceInr}`),
    ]),
  ])]);
  const svg = await satori(tree as never, { width: 1200, height: 630, fonts });
  const png = new Resvg(svg).render().asPng();
  return new Response(png, { headers: { "Content-Type": "image/png" } });
};
