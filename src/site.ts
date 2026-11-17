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
  // Cloudflare Web Analytics (cookie-free). Public token, safe to commit.
  analyticsToken: "1bbdce58a79c4544971a96f535c5e632",
  // Official profiles (LinkedIn company page, X, YouTube...). Added to Organization schema as sameAs.
  sameAs: [] as string[],
};

// The person who leads FixxMyResume. Shown on /about/ and in structured data.
export const founder = {
  id: "ritin-agarwal",
  name: "Ritin Agarwal",
  jobTitle: "Founder, FixxMyResume; Founder and Managing Partner, Fundvice Private Limited",
  url: "https://fixxmyresume.com/about/",
  sameAs: [] as string[],
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
  "ats-and-keywords": {
    label: "ATS and keywords",
    seoTitle: "ATS Resume Guides: Keywords, Formatting, Screening",
    blurb: "How applicant tracking systems and AI screeners read your resume, and how to get through them.",
    intro: [
      "Most companies with more than a few dozen employees run applications through an applicant tracking system (ATS). It turns your resume into text, files it against the job, and lets recruiters search and filter. Many now add an AI step that ranks or summarises candidates before a person reads anything.",
      "These guides explain what that software actually does, which layouts it misreads, how to pick keywords from a job description without stuffing, and how to check your own resume before you apply.",
    ],
    faq: [
      { q: "Do ATS systems reject resumes automatically?", a: "Rarely on their own. Most ATS store and rank applications; recruiters then search and filter. A resume is 'rejected' when it can't be read properly or doesn't match the words recruiters search for, so it never appears near the top." },
      { q: "What makes a resume ATS-friendly?", a: "A single-column layout, standard headings (Experience, Education, Skills), contact details in the body rather than the header, no tables, text boxes or images, and keywords from the job description that are true for you. Save it as a text-based PDF or Word file." },
      { q: "How do I check if my resume is ATS-friendly?", a: "Copy all the text out of your PDF and paste it into a plain text editor: if the order is jumbled or sections are missing, an ATS will struggle too. Or run the free check on FixxMyResume, which scores readability and keywords out of 100." },
    ],
  },
  "resume-writing": {
    label: "Resume writing",
    seoTitle: "Resume Writing Guides: Summaries, Bullets, Skills",
    blurb: "Summaries, bullets, skills, achievements and the words that make them work.",
    intro: [
      "A recruiter spends seconds on a first read, so every line has to earn its place. The difference between a resume that gets calls and one that doesn't is usually in the writing: a summary aimed at the job, bullets that show results with numbers, and skills that match what the employer asked for.",
      "These guides cover each part of the resume in turn, with formulas and examples you can adapt to your own experience.",
    ],
    faq: [
      { q: "What should a resume include?", a: "Your name and contact details, a short summary, work experience (or projects for freshers) with achievement-focused bullets, education, and skills. Add certifications, languages or links such as a portfolio when they help for the role." },
      { q: "How do I write resume bullet points?", a: "Start with an action verb, say what you did, and end with the result, ideally a number: 'Reduced month-end close from 8 to 5 days by automating bank reconciliations.' One idea per bullet, three to six bullets per role." },
      { q: "Should I write my resume in first person?", a: "No. Resumes use an implied first person: drop 'I' and 'my' and start bullets with the verb. 'Managed a team of 6', not 'I managed a team of 6'." },
    ],
  },
  "formats-and-templates": {
    label: "Formats and templates",
    seoTitle: "Resume Formats and Templates: Layout, Length, File Type",
    blurb: "Layouts, file types, length and the format that fits your situation.",
    intro: [
      "The right format depends on your experience and where you're applying. Reverse-chronological works for most people; freshers and career changers sometimes lead with projects or skills. Length, file type, photos and personal details follow different norms in India, the US, the UK and the Gulf.",
      "These guides help you choose a layout, a length and a file type that both software and recruiters read easily.",
    ],
    faq: [
      { q: "Which resume format is best?", a: "Reverse-chronological, in a single column, suits most candidates because recruiters and ATS expect it. A hybrid format that opens with key skills can help freshers and career changers. Purely functional resumes without dates make recruiters suspicious." },
      { q: "How long should a resume be?", a: "One page for freshers and most people with under five to seven years of experience; two pages for experienced professionals. Senior or academic CVs can run longer." },
      { q: "PDF or Word: which should I send?", a: "A text-based PDF keeps your layout intact and is read well by modern ATS. Send Word (.docx) when the employer or a portal asks for it." },
    ],
  },
  "examples-by-role": {
    label: "Examples by role",
    seoTitle: "Resume Examples by Job Role (India and Global)",
    blurb: "Worked resume examples for common jobs, with what makes each one work.",
    intro: [
      "What a recruiter looks for changes with the job. A sales resume lives or dies on targets and numbers; a software resume on projects and tech stack; a CA resume on scale, standards and systems. Each example here shows a complete resume for one role and explains why each part is there.",
      "Use them for structure and wording, then replace every detail with your own facts.",
    ],
    faq: [
      { q: "Can I copy a resume example?", a: "Copy the structure and the style of the bullets, not the content. Recruiters see the same sample lines often, and every number and claim on your resume must be true for you." },
      { q: "What should I change for each job role?", a: "The summary, the order of skills and the bullets you lead with. Match them to the words in the job description and put your most relevant achievements first." },
    ],
  },
  "freshers-and-students": {
    label: "Freshers and students",
    seoTitle: "Fresher Resume Guides: Projects, Internships, Placements",
    blurb: "First resumes, internships, campus placements and resumes with no experience.",
    intro: [
      "A fresher resume has a different job: with little or no work history, it has to show potential through projects, internships, coursework, certifications and positions of responsibility. In India, campus placements and mass recruiters also screen on marks, backlogs and graduation year.",
      "These guides show how to fill one page well when you're starting out, with examples for B.Tech, BCA/MCA, B.Com and MBA freshers.",
    ],
    faq: [
      { q: "How do I make a resume with no experience?", a: "Lead with a two-line summary naming the role you want, then skills, then projects, internships, part-time work or volunteering with results, then education. Coursework, certifications and college positions fill the gap." },
      { q: "Should a fresher resume be one page?", a: "Yes. One page is expected for freshers in India and abroad. Cut school-level details beyond class X and XII marks if you need space." },
      { q: "Should freshers write an objective or a summary?", a: "A short summary works better: two lines naming the role you're targeting and your strongest relevant skills or project. Avoid generic objectives like 'seeking a challenging position'." },
    ],
  },
  "career-situations": {
    label: "Career situations",
    seoTitle: "Resume Help for Gaps, Layoffs and Career Changes",
    blurb: "Gaps, layoffs, career changes, returning to work and other turns.",
    intro: [
      "Most careers aren't a straight line. Gaps, layoffs, career breaks for family or health, and switches into a new field all raise questions a resume has to answer briefly and honestly.",
      "These guides show how to present each situation so a recruiter sees what you can do now, not just the break.",
    ],
    faq: [
      { q: "How do I explain a gap on my resume?", a: "Show the dates honestly and add one line for the gap if it was long or recent, such as 'Career break: family care' or 'Upskilling: completed Google Data Analytics certificate'. Keep detail for the interview." },
      { q: "Should I mention a layoff on my resume?", a: "Not on the resume itself. List the job with its real end date. In applications and interviews, say briefly that the role was part of a layoff and move on to what you achieved." },
    ],
  },
  "cover-letters": {
    label: "Cover letters",
    seoTitle: "Cover Letter Guides and Examples",
    blurb: "Cover letters and outreach messages that get read.",
    intro: [
      "A cover letter is your chance to connect your resume to one specific job in a few short paragraphs. Many recruiters skip them, but the ones who read them notice a letter that names the role, proves one or two relevant results and sounds like a person.",
      "These guides cover structure, examples and short outreach messages for LinkedIn and email.",
    ],
    faq: [
      { q: "Is a cover letter still necessary?", a: "Not always, but send one when the application allows it, when you're changing careers, or when you can show a clear link to the job. A short, specific letter rarely hurts." },
      { q: "How long should a cover letter be?", a: "Three or four short paragraphs, under a page; 200 to 350 words is enough." },
    ],
  },
  "job-portals-and-linkedin": {
    label: "Job portals and LinkedIn",
    seoTitle: "Naukri and LinkedIn Profile Guides for Job Seekers",
    blurb: "Naukri, LinkedIn and job portals: profiles, headlines and how recruiters search.",
    intro: [
      "On Naukri and LinkedIn, recruiters search you before they read you. Your headline, key skills and profile summary decide whether you appear in their results at all, and the first lines decide whether they click.",
      "These guides explain how recruiters search each platform and how to fill your profile so it shows up for the right roles.",
    ],
    faq: [
      { q: "What should my Naukri resume headline be?", a: "Your role, experience and two or three core skills in one line, for example 'Accounts Executive, 3 years, GST, TDS, Tally Prime, bank reconciliation'. Use the words recruiters search for." },
      { q: "Should my LinkedIn profile match my resume?", a: "Titles, employers and dates should match exactly. The LinkedIn About section can be more personal and broader than the resume summary." },
    ],
  },
  "working-abroad": {
    label: "Working abroad",
    seoTitle: "Resume Rules for Jobs Abroad: Gulf, UK, US, Europe",
    blurb: "Resume rules for jobs in other countries.",
    intro: [
      "Resume norms change across borders. Gulf employers often expect nationality, visa status and sometimes a photo; US and UK employers expect none of these; Europe has its own formats. Getting them wrong can make an otherwise strong resume look out of place.",
      "These guides cover what to include and leave out for the main destinations Indian job seekers apply to.",
    ],
    faq: [
      { q: "Should I add a photo to my resume for jobs abroad?", a: "For the US, UK and Canada, no. In the Gulf and parts of Europe a professional photo is common and often expected. Follow the norm for the country you're applying to." },
      { q: "Should I mention visa status on my resume?", a: "Yes for international applications: add one line near your contact details, such as 'Visa: requires sponsorship' or 'UAE visit visa, available to join immediately'." },
    ],
  },
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
