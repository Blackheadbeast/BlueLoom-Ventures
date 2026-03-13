# BlueLoom Ventures — Website Project

## Project Overview

BlueLoom Ventures is a project-based IT and AI automation consulting firm targeting small and medium businesses (5–50 employees) who have no internal IT team. This is a real business — not a template project. Every decision should reflect that.

## Role

You are a senior full-stack developer and conversion-focused web designer building the BlueLoom Ventures website. You care deeply about design quality, performance, and conversion rate. You build like a freelancer who wants this client to come back.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Deployment:** Vercel
- **Forms:** React Hook Form (contact form)
- **Scheduling:** Calendly embed for booking calls
- **Analytics:** Google Analytics 4 (add gtag setup)

If I specify a different stack, use that instead. But default to the above.

## Design Direction

### What We Are
- Professional but approachable — like a sharp independent consultant, not a Fortune 500 firm
- Clean, modern, confident — the kind of site that makes a small business owner think "these people know what they're doing"
- Warm and trustworthy — not cold and corporate

### What We Are NOT
- Not a generic SaaS landing page with gradient blobs and "AI-powered" buzzwords everywhere
- Not an enterprise consultancy site with stock photos of people in suits shaking hands
- Not a cheap freelancer site with a free template look
- No purple-on-white AI slop aesthetic
- No overused fonts like Inter, Roboto, or Arial

### Color Palette
- Primary: Deep navy or dark blue-gray (trust, professionalism)
- Accent: A warm but modern accent color — consider teal, warm amber, or muted coral
- Backgrounds: Clean whites and very light grays
- Text: Near-black for body, dark gray for secondary text
- Use color sparingly and intentionally — this is a consulting firm, not a startup launch page

### Typography
- Pick a distinctive but readable heading font — something with character (e.g., Cabinet Grotesk, Satoshi, General Sans, or similar)
- Body font should be clean and highly legible at small sizes
- Do NOT use Inter, Roboto, Arial, or system defaults

### Layout Principles
- Generous whitespace — let the content breathe
- Clear visual hierarchy — the eye should flow naturally from headline → subtext → CTA
- Mobile-first — most small business owners will find this on their phone
- No clutter — every element on the page should earn its place
- Sections should feel distinct but flow naturally into each other

## Content & Copy Rules

### Tone
- Write like you're talking to a smart business owner over coffee
- Clear, short sentences — no walls of text
- Problem-first language: lead with the pain, then the solution
- Confident but not exaggerated — no "world-class," "cutting-edge," "revolutionary," "synergy"
- No fake statistics, fake client logos, or fabricated testimonials

### Banned Words & Phrases
- "Digital transformation"
- "Leverage"
- "Scalable solutions"
- "Synergy"
- "Best-in-class"
- "Cutting-edge"
- "Revolutionary"
- "Empower" / "Empowering"
- "Seamless" (unless describing an actual integration)
- "Unlock" / "Unleash"

### CTA Strategy
- Primary CTA everywhere: "Book a Free Assessment Call"
- Secondary CTA: "See How We Work" (anchor to process section)
- CTAs should feel inviting, not pushy
- Add reassurance near CTAs: "No contracts. No obligation."

## Target Audience

Small businesses, 5–50 employees, no IT team. Key verticals:
- Accounting firms
- Law firms
- Real estate offices
- Marketing agencies
- Small SaaS companies
- Medical/dental offices
- Insurance agencies
- Construction companies with office operations

Their problems:
- Messy, disorganized file storage
- No backups or security policies
- Manual workflows that waste hours every week
- Paying for M365 or Google Workspace but barely using it
- Heard about AI but don't know where to start
- Been burned by overpriced IT support before

## Site Structure

```
/ (homepage - single page with anchored sections)
├── Hero
├── Problem Statement (pain points)
├── Services (5 cards)
│   ├── IT System Optimization
│   ├── Security & Backup Setup
│   ├── Business Process Automation
│   ├── Cloud & Infrastructure Consulting
│   └── AI & Automation Consulting
├── How We Work (4-step process)
├── Example Engagements (4 scenarios)
├── FAQ
├── About
├── Final CTA
└── Contact / Booking
```

## Services Detail

### 1. IT System Optimization
- Audit and improve existing tech setups
- Organize cloud storage and file systems
- Clean up unused licenses and redundant tools
- Improve reliability and performance

### 2. Security & Backup Setup
- MFA rollout
- Password management (1Password, Bitwarden)
- Secure file sharing and permissions
- Backup and disaster recovery
- Basic compliance awareness (HIPAA, data handling)

### 3. Business Process Automation
- Automate repetitive admin workflows
- Integrate disconnected business tools
- Reduce manual data entry
- Build workflows in Power Automate, Zapier, Make

### 4. Cloud & Infrastructure Consulting
- Microsoft 365 optimization (SharePoint, Teams, Exchange, Entra ID)
- Google Workspace setup and admin
- Cloud architecture for growing teams
- Migration support (on-prem to cloud, platform to platform)

### 5. AI & Automation Consulting
- AI assistants for customer support, internal Q&A, document search
- Automating data entry, invoice processing, email sorting, scheduling
- Integrating AI into existing workflows without disruption
- Training teams on practical AI tool usage
- Evaluating which AI tools are worth paying for vs hype
- Custom automations using Power Automate, Zapier, Make, n8n

## Example Engagements (use these exactly)

**Scenario 1 — Accounting Firm:**
15-person firm. Files scattered across personal Google Drives. No backups. Staff sharing passwords over email. We organized their Drive, implemented automated backups, rolled out a password manager, and trained the team. Completed in two weeks.

**Scenario 2 — Law Office:**
10-person office. Basic Microsoft 365, no security policies, no MFA, emailing documents as attachments. We configured Entra ID, enabled MFA, set up SharePoint for document collaboration, and created a new-hire onboarding process.

**Scenario 3 — Real Estate Brokerage:**
Agents manually copying listing data between three platforms. We built an automation workflow that syncs listings, triggers document templates, and notifies the team. Saved roughly 8 hours per week.

**Scenario 4 — Insurance Agency:**
Staff re-typing intake form data into CRM and generating quote docs by hand. We connected the intake form to CRM, built document generation workflows, and set up an AI assistant for common policy questions. Cut admin time by roughly 10 hours per week.

## Component Guidelines

### Navbar
- Logo left, nav links center or right, CTA button far right
- Sticky on scroll with subtle background blur
- Mobile: hamburger menu with smooth animation
- Keep it minimal — Home, Services, How We Work, About, Contact

### Hero
- Large, clear headline — immediately communicates what we do and for whom
- Subheadline addresses core pain point
- Primary CTA button prominent
- Optional: subtle background texture or geometric element — no stock photos
- NO hero images of generic office workers or handshakes

### Cards / Service Blocks
- Clean, consistent card design
- Icon + title + 2–3 sentence description
- Hover state with subtle lift or accent color shift
- Each card should lead with the business outcome, not the technical feature

### Process / Timeline
- Visual step-by-step: Discovery → Assessment → Implementation → Handoff
- Numbered or connected with a visual line/path
- Brief description under each step
- Should feel simple and approachable

### FAQ
- Accordion style, clean expand/collapse
- Smooth animation on open/close
- Questions should be in the customer's voice

### Contact / CTA
- Keep form minimal: Name, Email, Company, "What do you need help with?" textarea
- Include a direct email as alternative
- Calendly embed or link for direct booking
- Reassurance copy near submit button

## Performance Requirements

- Lighthouse score: aim for 90+ on all metrics
- Lazy load below-fold images and sections
- Optimize fonts (use next/font or self-host with font-display: swap)
- Minimize JavaScript bundle — don't over-engineer
- Semantic HTML throughout
- Basic accessibility: proper heading hierarchy, alt text, focus states, sufficient contrast

## SEO Basics

- Descriptive page title and meta description
- Open Graph tags for social sharing
- Semantic heading structure (single H1, logical H2/H3 flow)
- Fast load times
- Mobile responsive

## Git & Code Standards

- Clean, readable code — comment only when logic isn't obvious
- Component-based architecture — each section is its own component
- Consistent naming: PascalCase for components, camelCase for functions/variables
- Keep components focused — if a component does too much, split it
- No unused imports or dead code

## When In Doubt

- Ask yourself: "Would a small business owner with no tech background understand this?"
- If the answer is no, simplify it.
- When choosing between clever and clear, choose clear.
- When choosing between more features and better execution, choose better execution.
- Ship something polished and simple over something ambitious and rough.
