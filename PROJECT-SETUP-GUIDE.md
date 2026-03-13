# BlueLoom Ventures — Project Setup Guide

## How These Files Work Together

You have two key files:

1. **CLAUDE.md** — Goes in the ROOT of your project folder. Claude Code reads this automatically every time you start a session. It contains all the design rules, content, tone, and technical decisions so you don't have to repeat yourself.

2. **blueloom-website-prompt-v2.md** — This is your website copy prompt. You'll paste this into Claude (or Claude Code) when you're ready to generate the actual written content for each section.

## Step-by-Step Setup

### 1. Create your project folder

```bash
mkdir blueloom-ventures-site
cd blueloom-ventures-site
```

### 2. Drop CLAUDE.md into the root

```
blueloom-ventures-site/
├── CLAUDE.md       <-- put it right here
├── src/
├── public/
├── package.json
└── ...
```

### 3. Initialize your Next.js project

Open Claude Code in the project folder and say:

> "Set up the Next.js project with Tailwind CSS and Framer Motion. Follow the CLAUDE.md specs."

### 4. Build section by section

Don't ask Claude to build the entire site at once. Go section by section:

> "Build the navbar component following CLAUDE.md guidelines"
> "Build the hero section. Use this copy: [paste hero copy from the website prompt output]"
> "Build the problem statement section"
> "Build the services section with 5 service cards"
> "Build the how-we-work process section"
> "Build the example engagements section with 4 scenarios"
> "Build the FAQ accordion"
> "Build the about section"
> "Build the final CTA and contact form"

### 5. Review and refine

After each section:
> "Review this section on mobile — does it look good at 375px width?"
> "The spacing feels too tight between the headline and subheadline, add more breathing room"
> "Make the CTA button more prominent"

### 6. Polish pass

Once all sections are built:
> "Do a full design review of the page. Check for consistency in spacing, typography, and color usage across all sections"
> "Run a Lighthouse audit and fix any issues"
> "Check all interactive elements — hover states, accordion, mobile menu, form validation"

## Tips for Getting the Best Results from Claude Code

**Be specific with feedback.** Instead of "this doesn't look right," say "the service cards are too close together and the text is hard to read on mobile."

**Reference the CLAUDE.md.** If Claude drifts from the design direction, say "check CLAUDE.md — we're not supposed to use generic fonts" or "the tone guidelines say no corporate jargon."

**Show examples.** If you see a website you like, screenshot it and say "I like how this site handles the services section — adapt that approach for ours."

**Don't skip mobile.** After every section, check it at mobile width. Small business owners browse on their phones.

## Content Workflow

1. Take the website prompt (blueloom-website-prompt-v2.md)
2. Add your AI automation points to it (the ones from our conversation)
3. Paste the full prompt into Claude to generate all the website copy
4. Review and edit the copy — make it sound like YOU
5. Feed the finalized copy into Claude Code section by section as you build

## What You Might Want to Add Later

- **Blog** — Write about small business tech problems and solutions. Great for SEO and credibility.
- **Lead magnet** — A free "Small Business IT Security Checklist" PDF in exchange for email. Builds your list.
- **Testimonials** — As soon as you complete your first project, get a quote from the client and add it to the site.
- **Calendly integration** — Embed directly on the contact section so people can book without leaving the site.
