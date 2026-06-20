export type Project = {
  slug: string;
  id: string;
  name: string;
  tagline: string;
  status: 'live' | 'in progress';
  github: string;
  demo: string | null;
  summary: string;
  stack: string[];
  detail: {
    overview: string;
    problem: string;
    solution: string;
    features: string[];
    role: string;
    architecture: string;
    challenges: string;
    impact: string;
  };
};

export const projects: Project[] = [
  {
    slug: 'code-to-content',
    id: '01',
    name: 'Code to Content',
    tagline: 'AI tool that turns GitHub activity into X content',
    status: 'live',
    github: '#',
    demo: 'https://codetocontent-production.up.railway.app/',
    summary:
      'Reads a developer\'s GitHub activity and converts it into X posts that sound like the developer wrote them, not a generic AI model.',
    stack: ['Node.js', 'TypeScript', 'MongoDB', 'Gemini API'],
    detail: {
      overview:
        'Code to Content is a SaaS tool built for solo developers, indie hackers, and startup founders who ship code regularly but rarely have time to write about it. It connects to a developer\'s GitHub account, pulls recent activity, and turns it into ready-to-post X content — without sounding like generic AI output.',
      problem:
        'Developers ship code constantly but rarely talk about it publicly. Writing good technical content takes time most developers don\'t have, and generic AI writing tools produce text that doesn\'t sound like the person who wrote the code. Indie hackers and startup founders lose visibility and audience growth because their work never gets communicated, even though the underlying work is interesting and worth sharing.',
      solution:
        'The system reads a developer\'s GitHub activity — commits, PRs, releases — and converts it into X posts using a structured prompt system. Output is built around per-user writing voice profiles, so generated content matches how the individual developer actually writes instead of defaulting to generic AI phrasing. Content generation is template-driven: different activity types (a feature merge, a release, a refactor) map to different content templates, and few-shot examples are injected into the prompt to anchor tone and structure.',
      features: [
        'GitHub activity ingestion (commits, PRs, repo changes)',
        'Writing voice profile system per user, built from sample posts',
        'Structured prompt templates mapped to activity type',
        'Few-shot example injection to reduce generic AI tone',
        'Manual copy-paste publishing workflow, with edit-before-post by design',
      ],
      role:
        'Designed and built the full backend: GitHub OAuth integration and activity polling, the voice profile data model, the prompt template system, and the Gemini API integration that generates the final content. Owned the prompt engineering work end to end — this was the core product problem, not a side concern.',
      architecture:
        'The backend is a Node.js/TypeScript service backed by MongoDB. GitHub activity is pulled per user and normalized into a common event shape regardless of source (commit, PR, release). Each event is matched to a prompt template, then combined with the user\'s voice profile and a small set of few-shot examples before being sent to the Gemini API. Generated drafts are stored against the source event so a user can trace any post back to the commit or PR that produced it.',
      challenges:
        'The hardest problem was preventing generic, interchangeable AI output. A single shared prompt produces flat, sample-looking text that reads the same for every user. This was solved by separating concerns in the prompt pipeline: voice profile data (tone, sentence length, vocabulary patterns) is layered on top of a structured template (what kind of content this is), and few-shot examples are selected per template type rather than reused globally. This turned one generic prompt into a per-user, context-aware generation pipeline that produces noticeably different output for different developers given the same underlying commit.',
      impact:
        'Live in production. Reduces the time developers spend turning code into shareable content from a manual writing task down to a generate-and-edit workflow — review a draft instead of starting from a blank page.',
    },
  },
  {
    slug: 'glucose-care',
    id: '02',
    name: 'Glucose Care',
    tagline: 'Multi-app healthcare platform for diabetic patient care',
    status: 'in progress',
    github: '#',
    demo: null,
    summary:
      'A modular backend ecosystem connecting patients, hospitals, pharmacies, labs, and insurance for diabetic patient care.',
    stack: ['Node.js', 'TypeScript', 'MongoDB', 'OpenAI', 'Zoom API', 'Google Auth', 'iOS Auth', 'Firebase'],
    detail: {
      overview:
        'Glucose Care is a healthcare platform built for diabetic patients and the providers around them. Instead of one app, it\'s an ecosystem of connected services covering patients, hospitals, pharmacies, labs, and insurance, currently in active development with a team.',
      problem:
        'Diabetic patients need coordinated care across hospitals, pharmacies, labs, and insurance, but these systems normally don\'t talk to each other. Patients deal with fragmented records and manual coordination between providers; providers lack a shared system to manage the same patient across hospital visits, prescriptions, and lab results.',
      solution:
        'A modular backend ecosystem connecting patients, hospitals, pharmacies, labs, and insurance into one platform. Each domain — hospital, patient, pharmacy, and so on — is built as its own service with clean, well-defined APIs, rather than one shared codebase handling every concern. This keeps each part of the system independently maintainable while still sharing common infrastructure like authentication, logging, and error handling.',
      features: [
        'Multi-role system spanning patients, hospitals, pharmacies, labs, and insurance',
        'AI-assisted features for patients and providers via OpenAI integration',
        'Video consultations between patients and providers via Zoom API',
        'Authentication via Google Auth and iOS Auth, backed by Firebase',
        'Modular service architecture, one service per domain',
      ],
      role:
        'Backend developer on the team. Worked on refactoring the backend from a single monolithic codebase into modular services, building shared middleware for logging, error handling, and authentication, and designing clean API boundaries between services so each team member could work on a domain without stepping on shared code.',
      architecture:
        'The platform is split into domain services (hospital, patient, pharmacy, lab, insurance) that each expose their own REST API, with shared middleware for authentication, request logging, and error handling pulled into common packages so every service behaves consistently. Auth flows through Google Auth and iOS Auth on the client side, backed by Firebase, with session handling shared across services. AI features (OpenAI) and video consultations (Zoom) are integrated as service-level capabilities rather than bolted onto a single app, so any domain service can call into them as needed.',
      challenges:
        'The backend started as a monolith and became difficult to extend as more patient, hospital, and pharmacy features were added — changes in one area risked breaking unrelated functionality, and the codebase became harder to reason about as a team. The fix was breaking it into modular services with their own clean APIs, while keeping shared concerns — logging, error handling, auth middleware — centralized in shared packages so each service didn\'t reimplement the same logic differently. This required deliberate API design at the boundaries between services to keep them independent without duplicating core infrastructure.',
      impact:
        'Faster authentication, cleaner and more maintainable APIs, better system-wide error tracking, and a noticeably improved developer experience for the team working across services. The project is still in active development.',
    },
  },
  {
    slug: 'curtain-crafts',
    id: '03',
    name: 'Curtain Crafts Inventory System',
    tagline: 'Inventory and sales system for a multi-branch retail business',
    status: 'live',
    github: '#',
    demo: 'http://curtaincrafts.org/',
    summary:
      'A database-backed inventory and sales system that replaced Excel for a multi-branch retail business, with role-based access and per-sale accountability.',
    stack: ['Node.js', 'MongoDB'],
    detail: {
      overview:
        'Curtain Crafts Inventory System replaces a multi-branch retail business\'s Excel-based stock and sales tracking with a real database system used daily by staff, managers, and the owner.',
      problem:
        'The business tracked stock and sales across multiple branches using Excel. This meant no real-time visibility into stock levels between branches, manual pricing updates prone to error, no accountability for who made a given sale, and no way for the owner to check business status without being on-site.',
      solution:
        'A database-backed inventory and sales system that replaced the Excel workflow entirely. Every sale is tied to the staff member who made it, supporting accountability and audit tracking. Role-based access controls what staff, managers, and the owner can each see and do, and stock updates are reflected in real time across branches instead of being reconciled manually at the end of the day.',
      features: [
        'Role-based access for staff, managers, and owner',
        'Per-sale user attribution for accountability and audit tracking',
        'Real-time stock visibility across branches',
        'Automated pricing logic, removing manual price entry errors',
        'Mobile access for the owner to check business status remotely',
      ],
      role:
        'Built the system end-to-end: the data model for inventory and sales, role-based permission logic, and the migration path from the existing Excel-based tracking to the new database system, including getting staff onto the new workflow without disrupting daily sales.',
      architecture:
        'The system is built on Node.js with MongoDB as the data store, modeling branches, staff, inventory items, and sales as related collections. Every sale record is linked to the staff member who created it and the branch it occurred at, which is what makes per-sale accountability and audit tracking possible. Stock levels are updated transactionally as part of the sale flow so branch-level inventory stays accurate in real time rather than being batch-reconciled.',
      challenges:
        'The hardest part was migrating an established business from an Excel workflow to a live database system without disrupting daily operations across multiple branches. This meant designing a data model that mapped cleanly to how staff already worked — so the new system felt like a faster version of their existing process, not a foreign tool — then layering in role-based access and audit tracking so the change improved accountability instead of just changing the interface.',
      impact:
        'Full migration from Excel to a database-backed system. Real-time stock visibility, automated pricing, improved accuracy across branches, and mobile access that lets the owner check business status without visiting in person.',
    },
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
