# ELYVEX NEXUS — Official Corporate Website

[![Next.js](https://img.shields.io/badge/Next.js-15%2F16-black?style=flat&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?style=flat&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38bdf8?style=flat&logo=tailwind-css)](https://tailwindcss.com/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-Supabase_Ready-336791?style=flat&logo=postgresql)](https://supabase.com/)

> **"Empowering Skills. Building Futures."**  
> Official production-ready corporate website for **Elyvex Nexus**, an education-focused technology company bridging academic learning with real software engineering capability, hands-on projects, and verifiable credentials.

---

## Architecture Overview

This repository houses the **official corporate website** for Elyvex Nexus. Designed around clean separation of concerns, the website functions as the central public gateway with an architecture built to connect future independent sub-platforms:

```text
                  elyvexnexus.com (Corporate Gateway)
                                   │
      ┌────────────────────────────┼────────────────────────────┐
      ▼                            ▼                            ▼
learn.elyvexnexus.com       lab.elyvexnexus.com        admin.elyvexnexus.com
(Course LMS & Cohorts)     (Interactive Project Lab)      (CMS & Operations)
```

---

## Key Features

1. **Multilingual i18n Architecture**:
   - Native support for **English (`/en`)**, **Tamil (`/ta`)**, and **Hindi (`/hi`)**.
   - Path-preserving language switcher in header and footer.
   - Centralized translations in `messages/{en,ta,hi}.json` with natural terminology (technical terms preserved naturally).
2. **CMS & Database Ready**:
   - Complete PostgreSQL / Supabase schema in `database/schema.sql` and realistic seed data in `database/seed.sql`.
   - Service layer (`lib/services/`) gracefully connects to Supabase when environment keys are configured, and provides an offline fallback CMS repository for local development and demos.
3. **Structured Course Catalog & Detail Pages**:
   - Dynamic search, level filters, and category filters.
   - Comprehensive course syllabus, tool matrix, project deliverables, and configurable enrollment CTA (`NEXT_PUBLIC_COURSE_REGISTRATION_URL`).
4. **Project Lab Preview**:
   - Preview of the upcoming interactive coding sandbox, problem ladders, multi-language execution, and achievement badges.
   - Connected via configurable `NEXT_PUBLIC_PROJECT_LAB_URL`.
5. **Technical SEO & Structured Data**:
   - Schema.org `Course` and `TechArticle` JSON-LD structured data.
   - Dynamic `sitemap.ts` and `robots.ts`.
   - OpenGraph and Twitter card metadata for high-trust social sharing.
6. **Certificate Verification & Student Passport**:
   - Verification route `/verify/[certificateId]` with tamper-proof credential records.
   - Student capability passport `/passport/[studentId]` showing completed courses, projects built, and lab badges.
7. **Security & Accessibility**:
   - Rate-limiting and honeypot anti-spam protection on `/api/contact`.
   - Zod server-side and client-side input validation.
   - WCAG-compliant color contrast, keyboard navigation, and reduced motion considerations.
   - Configurable cookie consent banner (`components/common/CookieConsent.tsx`).

---

## Technology Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router, Server Components)
- **Language**: [TypeScript](https://www.typescriptlang.org/) (Strict typing, zero `any`)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) with custom design tokens
- **Animations**: [Framer Motion](https://www.framer.com/motion/) (Controlled, subtle micro-interactions)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Validation**: [Zod](https://zod.dev/)
- **Database Client**: [@supabase/supabase-js](https://supabase.com/docs/reference/javascript)

---

## Project Structure

```text
Elyvex-Nexus/
├── app/
│   ├── [locale]/
│   │   ├── layout.tsx                # Locale root with Navbar & Footer
│   │   ├── page.tsx                  # Corporate Homepage
│   │   ├── about/                    # Story, Mission, Vision, Ecosystem
│   │   ├── courses/                  # Catalog & Course Detail ([slug])
│   │   ├── resources/                # SEO Technical Guides ([slug])
│   │   ├── project-lab/              # Interactive Lab Preview
│   │   ├── team/                     # Founding Leadership Team
│   │   ├── announcements/            # News & Cohort Schedules
│   │   ├── faq/                      # Categorized Accordion FAQ
│   │   ├── contact/                  # Contact Form with Zod validation
│   │   ├── verify/[certificateId]/   # Certificate Verification Portal
│   │   ├── passport/[studentId]/     # Student Capability Passport
│   │   ├── privacy-policy/           # Privacy Policy
│   │   ├── terms-and-conditions/     # Terms & Conditions
│   │   └── cookie-policy/            # Cookie Policy
│   ├── api/
│   │   └── contact/route.ts          # Validated contact endpoint
│   ├── layout.tsx                    # Root HTML layout
│   ├── page.tsx                      # Root redirect to default locale
│   ├── robots.ts                     # Search engine crawler instructions
│   └── sitemap.ts                    # Dynamic multilingual sitemap
├── components/
│   ├── common/                       # BrandLogo, LanguageSwitcher, Button, etc.
│   ├── layout/                       # Navbar, Footer
│   ├── home/                         # Hero, TrustStrip, AboutPreview, Offerings, etc.
│   ├── courses/                      # CourseCard, CourseCatalog
│   ├── resources/                    # ResourceCard
│   ├── contact/                      # ContactForm
│   └── faq/                          # FAQAccordion
├── config/                           # Central site, navigation, links, SEO configs
├── database/
│   ├── schema.sql                    # PostgreSQL / Supabase migration schema
│   └── seed.sql                      # Realistic test seed data
├── lib/
│   ├── db/supabase.ts                # Supabase client with graceful fallback
│   ├── i18n/                         # Dictionaries and locale loaders
│   ├── services/                     # Data access layer (Courses, FAQs, Team, etc.)
│   ├── validation/                   # Zod schemas
│   └── utils.ts                      # Utilities and formatting
├── messages/                         # Centralized i18n dictionaries
│   ├── en.json                       # English
│   ├── ta.json                       # Tamil (தமிழ்)
│   └── hi.json                       # Hindi (हिन्दी)
├── types/                            # Domain TypeScript interfaces
├── .env.example                      # Configuration template
├── package.json
└── README.md
```

---

## Installation & Local Development

1. **Clone the repository**:
   ```bash
   git clone https://github.com/elyvex-nexus/corporate-website.git
   cd Elyvex-Nexus
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Configure Environment Variables**:
   Copy `.env.example` to `.env.local`:
   ```bash
   cp .env.example .env.local
   ```
   *(Note: The website is completely functional out of the box with built-in fallback data even before Supabase credentials are provided).*

4. **Run Development Server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Database Setup (Supabase / PostgreSQL)

1. Create a new project on [Supabase](https://supabase.com).
2. In the Supabase SQL Editor, run `database/schema.sql`.
3. Run `database/seed.sql` to populate default courses, FAQs, and team members.
4. Retrieve your `Project URL` and `anon public key` from project settings and set them in `.env.local`:
   ```bash
   NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
   ```

---

## Production Build & Deployment

To verify and run production builds:

```bash
# Build the application
npm run build

# Start production server
npm run start
```

### Vercel Deployment
1. Push repository to GitHub.
2. Import project into [Vercel](https://vercel.com).
3. Set environment variables from `.env.example`.
4. Deploy!

---

## License & Copyright

© 2026 **Elyvex Nexus**. All rights reserved.
