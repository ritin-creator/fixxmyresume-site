import { allArticles } from "../lib/articles";
import { site, categories, regions } from "../site";

// llms.txt: a plain-text map of the site for AI assistants and answer engines.
export async function GET() {
  const all = await allArticles();
  const lines: string[] = [
    `# ${site.name}`,
    "",
    `> ${site.name} checks a resume or LinkedIn PDF for free, scores it out of 100 on a fixed ATS and AI-screening checklist, and for ₹${site.priceInr} rewrites it into an ATS-friendly resume (PDF and Word) using only the candidate's own facts. Operated by ${site.operatedBy}, India.`,
    "",
    `- Free resume check: ${site.appUrl}/check`,
    `- Price: ₹${site.priceInr} per resume, one-time; includes 3 regenerations and up to 5 cover letters`,
    `- Scoring: ATS readability 25, keywords and role fit 25, impact 20, sections and contact 15, clarity 15`,
    `- Rule: the AI never invents employers, titles, degrees, colleges or dates; a code check blocks them`,
    "",
  ];
  for (const [rid, r] of Object.entries(regions)) {
    lines.push(`## Articles: ${r.label}`, "");
    for (const [cid, c] of Object.entries(categories)) {
      const items = all.filter((a) => a.data.region === rid && a.data.category === cid);
      if (!items.length) continue;
      lines.push(`### ${c.label}`, "");
      for (const a of items) lines.push(`- [${a.data.title}](${site.url}/articles/${a.id}/): ${a.data.answer}`);
      lines.push("");
    }
  }
  return new Response(lines.join("\n"), { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
