// One place for brand, URLs and price. The app (Lovable) lives on its own subdomain;
// this static site only links to it and never depends on it at build time.
export const site = {
  name: "FixxMyResume",
  tagline: "Fix your resume for ATS and AI screening",
  url: "https://fixxmyresume.com",
  appUrl: "https://app.fixxmyresume.com",
  // Keep equal to price_inr in the app's Admin → Settings (the amount Razorpay charges).
  priceInr: 99,
  operatedBy: "Fundvice Private Limited",
  supportEmail: "support@fixxmyresume.com",
  locale: "en_IN",
};

export const links = {
  check: `${site.appUrl}/check?src=site`,
  login: `${site.appUrl}/login`,
  privacy: `${site.appUrl}/privacy`,
  terms: `${site.appUrl}/terms`,
  refund: `${site.appUrl}/refund`,
  contact: `${site.appUrl}/contact`,
  delivery: `${site.appUrl}/delivery`,
};

export const categories = {
  "ats-and-keywords": { label: "ATS and keywords", blurb: "How applicant tracking systems and AI screeners read your resume, and how to get through them." },
  "resume-writing": { label: "Resume writing", blurb: "Summaries, bullets, skills, achievements and the words that make them work." },
  "formats-and-templates": { label: "Formats and templates", blurb: "Layouts, file types, length and the format that fits your situation." },
  "examples-by-role": { label: "Examples by role", blurb: "Worked resume examples for common jobs, with what makes each one work." },
  "freshers-and-students": { label: "Freshers and students", blurb: "First resumes, internships, campus placements and resumes with no experience." },
  "career-situations": { label: "Career situations", blurb: "Gaps, layoffs, career changes, returning to work and other turns." },
  "cover-letters": { label: "Cover letters", blurb: "Cover letters and outreach messages that get read." },
  "job-portals-and-linkedin": { label: "Job portals and LinkedIn", blurb: "Naukri, LinkedIn and job portals: profiles, headlines and how recruiters search." },
  "working-abroad": { label: "Working abroad", blurb: "Resume rules for jobs in other countries." },
} as const;
export type CategoryId = keyof typeof categories;

export const regions = {
  india: { label: "India", blurb: "Resume advice for jobs in India: Naukri, freshers, campus placements, CTC and Indian hiring norms." },
  global: { label: "Global", blurb: "Resume advice that works across the US, UK, Europe, the Middle East and remote jobs." },
} as const;
export type RegionId = keyof typeof regions;

export const formats = {
  guide: "Guide",
  "how-to": "How-to",
  checklist: "Checklist",
  examples: "Examples",
  comparison: "Comparison",
  "quick-answer": "Quick answer",
  glossary: "Glossary",
  list: "List",
  myths: "Myth-buster",
} as const;
export type FormatId = keyof typeof formats;
