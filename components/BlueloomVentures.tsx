'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import {
  ArrowRight,
  ChevronRight,
  Menu,
  X,
  Code2,
  Lightbulb,
  Bot,
  ShieldCheck,
  Cloud,
  Link2,
} from 'lucide-react';

// ─────────────────────────────────────────────────────────────
// BRAND DATA
// ─────────────────────────────────────────────────────────────

const NAV_LINKS: [string, string][] = [
  ['Services',  '#services'],
  ['Our Work',  '#work'],
  ['Approach',  '#approach'],
  ['Contact',   '#contact'],
];

const SERVICES = [
  {
    number: '01',
    Icon: Code2,
    title: 'Custom Software Development',
    summary:
      'Full-stack web applications, SaaS platforms, and API systems engineered for performance, scalability, and long-term maintainability.',
    capabilities: [
      'Web application development — Next.js, React, Node.js',
      'SaaS platform architecture and full-stack delivery',
      'RESTful and GraphQL API design and documentation',
      'Legacy system modernisation and codebase migration',
    ],
  },
  {
    number: '02',
    Icon: Lightbulb,
    title: 'IT Consulting & Advisory',
    summary:
      'Strategic technology guidance that helps organisations make informed decisions, reduce technical risk, and build durable competitive advantage.',
    capabilities: [
      'Technology stack assessment and architecture review',
      'Digital transformation strategy and roadmapping',
      'Technical due diligence for investment and M&A',
      'Engineering team structure and process advisory',
    ],
  },
  {
    number: '03',
    Icon: Bot,
    title: 'AI & Process Automation',
    summary:
      'Intelligent automation solutions that eliminate operational overhead, accelerate decision cycles, and reduce cost at scale.',
    capabilities: [
      'LLM integration and AI-powered workflow automation',
      'Intelligent document processing and extraction',
      'Business process automation — API and RPA-based',
      'Automated reporting pipelines and data workflows',
    ],
  },
  {
    number: '04',
    Icon: ShieldCheck,
    title: 'QA & Software Testing',
    summary:
      'Comprehensive quality assurance programmes that ensure software reliability, regulatory compliance, and confidence across all release cycles.',
    capabilities: [
      'End-to-end test automation — Playwright, Cypress',
      'Performance, load, and stress testing',
      'Regulatory and compliance validation frameworks',
      'CI/CD pipeline integration and test governance',
    ],
  },
  {
    number: '05',
    Icon: Cloud,
    title: 'Cloud Architecture & Infrastructure',
    summary:
      'Scalable, secure, and cost-optimised cloud infrastructure designed to support enterprise workloads from day one through sustained growth.',
    capabilities: [
      'Cloud architecture design — AWS, Vercel, Supabase',
      'Infrastructure as code and DevOps automation',
      'Database architecture, optimisation, and migration',
      'Security design, access controls, and compliance',
    ],
  },
  {
    number: '06',
    Icon: Link2,
    title: 'System Integration',
    summary:
      "Seamless integration of disparate systems, third-party platforms, and data sources across an organisation's technology estate.",
    capabilities: [
      'Enterprise API integration and service orchestration',
      'Third-party platform connectivity — CRM, ERP, payments',
      'Event-driven architecture and message queue design',
      'Real-time data synchronisation and monitoring',
    ],
  },
];

const PRINCIPLES = [
  {
    number: '01',
    title: 'Senior delivery. Every time.',
    body:
      'Every engagement is staffed exclusively with senior engineers and consultants. We do not allocate junior resource against senior billing rates.',
  },
  {
    number: '02',
    title: 'Defined scope. Predictable cost.',
    body:
      'We scope engagements with precision before any work begins. Fixed milestones, transparent progress reporting, and no unplanned scope expansions.',
  },
  {
    number: '03',
    title: 'Engineering over process.',
    body:
      'We build working software, not slide decks. Our practitioners are engineers first — we measure success by outcomes delivered, not hours logged.',
  },
  {
    number: '04',
    title: 'Built to be owned.',
    body:
      'Everything we deliver is fully documented, cleanly architected, and designed for your team to operate independently after handover.',
  },
];

const CREDENTIALS = [
  { value: '5',   unit: '+', label: 'Years of delivery experience' },
  { value: '50',  unit: '+', label: 'Enterprise and commercial projects' },
  { value: '100', unit: '%', label: 'Senior-grade practitioners on every engagement' },
  { value: '24',  unit: 'h', label: 'Maximum guaranteed response time' },
];

const CASE_STUDIES = [
  {
    sector: 'Financial Services',
    title: 'Automated Data Pipeline & Analytics Platform',
    metric: '72h → 4h',
    metricLabel: 'Reporting cycle reduction',
    challenge:
      'A regional financial institution required consolidation of data from 12 legacy systems into a single, auditable reporting layer accessible to compliance and operations teams.',
    outcome:
      'Full reconciliation across all source systems automated with zero manual intervention. Deployed to production on schedule and under budget.',
    tags: ['Data Engineering', 'Cloud Architecture', 'API Integration'],
  },
  {
    sector: 'Retail & E-Commerce',
    title: 'Order Management & Fulfilment Automation',
    metric: '92%',
    metricLabel: 'Reduction in manual processing overhead',
    challenge:
      'A high-volume e-commerce operator faced order processing bottlenecks constraining commercial growth at 15,000 daily transactions across multiple fulfilment channels.',
    outcome:
      'Platform now supports 40,000+ daily transactions across all channels with no unplanned downtime since deployment.',
    tags: ['Process Automation', 'System Integration', 'QA Testing'],
  },
  {
    sector: 'Healthcare Technology',
    title: 'Regulatory Compliance Testing Framework',
    metric: '3,400+',
    metricLabel: 'Automated test cases deployed',
    challenge:
      'A MedTech software provider required a fully validated QA framework to satisfy FDA 21 CFR Part 11 software qualification requirements ahead of a regulatory submission.',
    outcome:
      'Full compliance achieved within 14 weeks. Continuous regression coverage on every release cycle, with zero critical defects reaching production.',
    tags: ['QA Automation', 'Compliance Testing', 'Test Architecture'],
  },
];

const INDUSTRIES = [
  {
    name: 'Financial Services',
    description:
      'Regulatory compliance systems, automated reporting pipelines, and high-availability financial infrastructure.',
  },
  {
    name: 'Healthcare & Life Sciences',
    description:
      'FDA-validated QA frameworks, EHR integrations, and clinical data processing systems.',
  },
  {
    name: 'Retail & E-Commerce',
    description:
      'High-throughput order management, fulfilment automation, and customer-facing platform engineering.',
  },
  {
    name: 'SaaS & Technology',
    description:
      'Product architecture, API platform design, and scalable multi-tenant infrastructure.',
  },
  {
    name: 'Professional Services',
    description:
      'Workflow automation, document intelligence, and practice management system integration.',
  },
  {
    name: 'Manufacturing & Logistics',
    description:
      'Supply chain visibility systems, IoT data pipelines, and operational analytics platforms.',
  },
];

const APPROACH = [
  {
    step: '01',
    title: 'Discovery & Scoping',
    body:
      'We conduct structured discovery to define requirements, assess technical constraints, and establish clear success criteria. No work begins without a mutually agreed scope.',
  },
  {
    step: '02',
    title: 'Architecture & Planning',
    body:
      'We design the solution architecture and select appropriate technology components before delivery begins. A detailed plan with defined milestones and review gates is issued to all stakeholders.',
  },
  {
    step: '03',
    title: 'Iterative Delivery',
    body:
      'We deliver in structured two-week iterations with stakeholder demonstrations at each stage. All in-progress work is tracked against the agreed scope with full transparency.',
  },
  {
    step: '04',
    title: 'Handover & Post-Delivery Support',
    body:
      'We provide thorough documentation, structured knowledge transfer, and defined post-delivery support to ensure long-term operational success after client handover.',
  },
];

const TESTIMONIALS = [
  {
    quote:
      'BlueLoom brought the engineering discipline and delivery rigour our in-house team lacked. They scoped the engagement clearly, delivered on schedule, and produced documentation that our engineers could build upon immediately.',
    author: 'M. Thompson',
    title: 'Chief Technology Officer, Series B SaaS Company',
    initials: 'MT',
  },
  {
    quote:
      'The architectural clarity their consultants provided was unlike anything we had encountered previously. Technology recommendations were grounded in practical delivery constraints — not theoretical frameworks divorced from commercial reality.',
    author: 'S. Patel',
    title: 'Head of Technology, Financial Services Group',
    initials: 'SP',
  },
];

const SERVICE_OPTIONS = [
  'Custom Software Development',
  'IT Consulting & Advisory',
  'AI & Process Automation',
  'QA & Software Testing',
  'Cloud Architecture & Infrastructure',
  'System Integration',
  'Multiple Services / Unsure',
];

const FOOTER_SERVICES = [
  'Software Development',
  'IT Consulting',
  'AI & Automation',
  'QA & Testing',
  'Cloud Infrastructure',
  'System Integration',
];

// ─────────────────────────────────────────────────────────────
// COMPONENT
// ─────────────────────────────────────────────────────────────

export default function BlueloomVentures() {
  const [scrolled, setScrolled]     = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">

      {/* ══════════════════════════════════════════
          NAVIGATION
      ══════════════════════════════════════════ */}
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white border-b border-slate-200 shadow-sm'
            : 'bg-[#030D1F]/90 backdrop-blur-md'
        }`}
      >
        <div className="max-w-content mx-auto px-8 py-4 flex items-center justify-between">

          {/* Logo + wordmark */}
          <a href="#" className="flex items-center gap-3 flex-shrink-0">
            <Image
              src="/blueloom-logo.png"
              alt="BlueLoom Ventures"
              width={34}
              height={34}
              className="object-contain flex-shrink-0"
              priority
            />
            <div className="leading-tight">
              <div className={`font-bold text-sm tracking-tight transition-colors duration-200 ${scrolled ? 'text-slate-900' : 'text-white'}`}>
                BlueLoom Ventures
              </div>
              <div className={`text-[9.5px] font-semibold tracking-[0.12em] uppercase transition-colors duration-200 ${scrolled ? 'text-slate-400' : 'text-white/30'}`}>
                Technology Consulting
              </div>
            </div>
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map(([label, href]) => (
              <a
                key={label}
                href={href}
                className={`text-[13px] font-medium transition-colors duration-200 ${
                  scrolled
                    ? 'text-slate-600 hover:text-slate-900'
                    : 'text-white/60 hover:text-white'
                }`}
              >
                {label}
              </a>
            ))}
          </nav>

          {/* Right actions */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="mailto:blueloomventuresllc@gmail.com"
              className={`text-[13px] font-medium transition-colors duration-200 ${
                scrolled ? 'text-slate-500 hover:text-slate-800' : 'text-white/50 hover:text-white/80'
              }`}
            >
              blueloomventuresllc@gmail.com
            </a>
            <a
              href="#contact"
              className="px-4 py-2.5 bg-[#0066FF] text-white text-[13px] font-semibold rounded hover:bg-[#0047CC] transition-colors duration-200"
            >
              Book a Consultation
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            aria-label="Toggle navigation"
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`lg:hidden p-2 rounded transition-colors ${
              scrolled ? 'text-slate-700 hover:bg-slate-100' : 'text-white'
            }`}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile drawer */}
        {mobileOpen && (
          <div className="lg:hidden bg-white border-t border-slate-200 shadow-lg px-8 py-5">
            {NAV_LINKS.map(([label, href]) => (
              <a
                key={label}
                href={href}
                onClick={() => setMobileOpen(false)}
                className="flex justify-between items-center py-3.5 text-[13px] font-medium text-slate-700 border-b border-slate-100 last:border-0"
              >
                {label}
                <ChevronRight className="w-4 h-4 text-slate-300" />
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="mt-4 flex items-center justify-center w-full py-3 bg-[#0066FF] text-white text-[13px] font-semibold rounded"
            >
              Book a Consultation
            </a>
          </div>
        )}
      </header>


      {/* ══════════════════════════════════════════
          HERO
      ══════════════════════════════════════════ */}
      <section className="relative min-h-screen bg-[#030D1F] flex items-center overflow-hidden">

        {/* Background depth layers */}
        <div className="absolute inset-0 pointer-events-none select-none">
          {/* Dot grid */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)',
              backgroundSize: '32px 32px',
            }}
          />
          {/* Glow — top-left */}
          <div className="absolute -top-48 -left-48 w-[800px] h-[800px] rounded-full bg-[#0066FF]/[0.06] blur-[160px]" />
          {/* Glow — bottom-right */}
          <div className="absolute bottom-0 right-0 translate-x-1/4 translate-y-1/4 w-[600px] h-[600px] rounded-full bg-blue-900/15 blur-[120px]" />
          {/* Column rule */}
          <div className="absolute top-0 bottom-0 left-[58%] w-px bg-white/[0.04] hidden lg:block" />
          {/* Horizontal scan lines */}
          <div
            className="absolute inset-0 opacity-[0.012]"
            style={{
              backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px)',
              backgroundSize: '100% 96px',
            }}
          />
        </div>

        <div className="relative z-10 max-w-content mx-auto px-8 w-full py-36 grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-16 items-center">

          {/* Left — headline + CTAs */}
          <div>
            {/* Badge */}
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 border border-white/[0.08] rounded text-[11px] font-semibold text-white/40 tracking-[0.1em] uppercase mb-10"
              style={{ animation: 'fadeUp 0.6s cubic-bezier(0.16,1,0.3,1) 0.05s both' }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#0066FF]" />
              IT Consulting &amp; Software Development
            </div>

            <h1
              className="text-[3.25rem] lg:text-[3.75rem] font-bold text-white leading-[1.07] tracking-tight mb-7"
              style={{ animation: 'fadeUp 0.7s cubic-bezier(0.16,1,0.3,1) 0.15s both' }}
            >
              Technology solutions
              <br />
              <span className="text-[#0066FF]">engineered to perform.</span>
            </h1>

            <p
              className="text-[17px] text-white/50 max-w-xl leading-relaxed mb-10"
              style={{ animation: 'fadeUp 0.7s cubic-bezier(0.16,1,0.3,1) 0.28s both' }}
            >
              BlueLoom Ventures delivers enterprise-grade software development,
              strategic IT consulting, and intelligent automation for organisations
              that require precision, reliability, and measurable results.
            </p>

            <div
              className="flex flex-wrap gap-3"
              style={{ animation: 'fadeUp 0.7s cubic-bezier(0.16,1,0.3,1) 0.4s both' }}
            >
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#0066FF] text-white font-semibold text-[13px] rounded hover:bg-[#0047CC] transition-colors duration-200"
              >
                Book a Consultation
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#services"
                className="inline-flex items-center gap-2 px-6 py-3.5 border border-white/15 text-white/65 font-semibold text-[13px] rounded hover:border-white/30 hover:text-white/85 transition-all duration-200"
              >
                View Service Areas
              </a>
            </div>
          </div>

          {/* Right — service index panel */}
          <div
            className="hidden lg:block border border-white/[0.08] rounded-xl overflow-hidden"
            style={{ animation: 'fadeUp 0.7s cubic-bezier(0.16,1,0.3,1) 0.5s both' }}
          >
            <div className="px-5 py-3.5 border-b border-white/[0.06] bg-white/[0.03]">
              <p className="text-[10px] font-semibold text-white/30 uppercase tracking-[0.12em]">
                Service Areas
              </p>
            </div>
            {SERVICES.map(({ number, title }, i) => (
              <a
                key={number}
                href="#services"
                className={`flex items-center justify-between px-5 py-3.5 group hover:bg-white/[0.04] transition-colors duration-150 ${
                  i < SERVICES.length - 1 ? 'border-b border-white/[0.05]' : ''
                }`}
              >
                <div className="flex items-center gap-4">
                  <span className="text-[10px] font-mono text-white/20 w-4 flex-shrink-0 tabular-nums">
                    {number}
                  </span>
                  <span className="text-[13px] font-medium text-white/55 group-hover:text-white/85 transition-colors duration-150">
                    {title}
                  </span>
                </div>
                <ChevronRight className="w-3.5 h-3.5 text-white/15 group-hover:text-[#0066FF] transition-colors duration-150 flex-shrink-0" />
              </a>
            ))}
          </div>
        </div>

        <div className="absolute bottom-0 inset-x-0 h-px bg-white/[0.05]" />
      </section>


      {/* ══════════════════════════════════════════
          INDUSTRY TRUST STRIP
      ══════════════════════════════════════════ */}
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="max-w-content mx-auto px-8 py-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-widest flex-shrink-0">
            Delivering outcomes across
          </p>
          <div className="flex flex-wrap gap-x-8 gap-y-1">
            {INDUSTRIES.map(({ name }) => (
              <span key={name} className="text-[13px] font-semibold text-slate-500">
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>


      {/* ══════════════════════════════════════════
          SERVICES
      ══════════════════════════════════════════ */}
      <section id="services" className="py-28 px-8 bg-white">
        <div className="max-w-content mx-auto">

          <div className="max-w-2xl mb-14">
            <p className="corp-label mb-3">Service Areas</p>
            <h2 className="text-[2.25rem] font-bold text-slate-900 mb-5 leading-tight">
              What we deliver
            </h2>
            <p className="text-[15px] text-slate-500 leading-relaxed">
              Six focused practice areas covering the complete lifecycle of enterprise
              software — from strategy and architecture through to delivery, quality
              assurance, and ongoing operational support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {SERVICES.map(({ number, Icon, title, summary, capabilities }) => (
              <div
                key={number}
                className="group relative bg-white border border-slate-200/80 rounded-xl p-8 overflow-hidden hover:border-[#0066FF]/25 hover:-translate-y-0.5 hover:shadow-[0_16px_48px_-12px_rgba(0,102,255,0.12)] transition-all duration-300"
              >
                {/* Left accent bar — reveals on hover */}
                <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#0066FF] scale-y-0 group-hover:scale-y-100 origin-top transition-transform duration-300" />

                {/* Icon + number */}
                <div className="flex items-start justify-between mb-6">
                  <div className="w-10 h-10 border border-slate-200 rounded-lg flex items-center justify-center group-hover:border-[#0066FF] group-hover:bg-[#0066FF] transition-all duration-300 flex-shrink-0">
                    <Icon className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <span className="text-[11px] font-mono text-slate-300 tabular-nums">{number}</span>
                </div>

                <h3 className="text-[16px] font-semibold text-slate-900 mb-3 leading-snug">{title}</h3>
                <p className="text-[13px] text-slate-500 leading-relaxed mb-5">{summary}</p>

                <ul className="space-y-2">
                  {capabilities.map((cap, j) => (
                    <li key={j} className="flex items-start gap-2.5 text-[12px] text-slate-500 leading-snug">
                      <span className="w-1 h-1 rounded-full bg-[#0066FF] mt-1.5 flex-shrink-0" />
                      {cap}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* ══════════════════════════════════════════
          WHO WE ARE
      ══════════════════════════════════════════ */}
      <section className="py-28 px-8 bg-slate-50 border-t border-slate-200">
        <div className="max-w-content mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">

          {/* Left — company description */}
          <div>
            <p className="corp-label mb-3">Who We Are</p>
            <h2 className="text-[2.25rem] font-bold text-slate-900 mb-6 leading-tight">
              A focused firm with
              <br />a deliberate model
            </h2>
            <p className="text-[15px] text-slate-500 leading-relaxed mb-5">
              BlueLoom Ventures is a specialist technology consulting and software engineering
              firm that works with mid-market and enterprise organisations on their most complex
              and consequential technology challenges.
            </p>
            <p className="text-[15px] text-slate-500 leading-relaxed mb-5">
              We are not a generalist agency or a staffing provider. We are a precision delivery
              firm — built to work on projects where quality, reliability, and accountability matter.
            </p>
            <p className="text-[15px] text-slate-500 leading-relaxed">
              Every engagement is led by senior practitioners with direct experience in the domain
              and technology stack relevant to the project. No generalists, no project coordinators,
              no inflated teams.
            </p>
          </div>

          {/* Right — four principles */}
          <div className="space-y-1">
            {PRINCIPLES.map(({ number, title, body }) => (
              <div
                key={number}
                className="group relative pl-6 pr-5 py-6 rounded-lg border border-transparent hover:bg-white hover:border-slate-200/80 hover:shadow-[0_2px_16px_-4px_rgba(0,0,0,0.06)] transition-all duration-200 cursor-default"
              >
                <div className="absolute left-0 top-5 bottom-5 w-[3px] bg-[#0066FF] scale-y-0 group-hover:scale-y-100 origin-top transition-transform duration-300 rounded-sm" />
                <div className="flex items-start gap-4">
                  <span className="text-[11px] font-mono font-bold text-[#0066FF] mt-0.5 flex-shrink-0 tabular-nums">
                    {number}
                  </span>
                  <div>
                    <h4 className="text-[14px] font-semibold text-slate-900 mb-2">{title}</h4>
                    <p className="text-[13px] text-slate-500 leading-relaxed">{body}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* ══════════════════════════════════════════
          CREDENTIALS STRIP — dark
      ══════════════════════════════════════════ */}
      <section className="bg-[#030D1F]">
        <div className="max-w-content mx-auto">

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/[0.05]">
            {CREDENTIALS.map(({ value, unit, label }) => (
              <div key={label} className="px-10 py-12 text-center bg-[#030D1F]">
                <div className="flex items-baseline justify-center gap-0.5 mb-3">
                  <span className="text-[3rem] font-bold text-white tabular-nums leading-none">
                    {value}
                  </span>
                  <span className="text-[1.75rem] font-bold text-[#0066FF] tabular-nums leading-none">
                    {unit}
                  </span>
                </div>
                <div className="text-[12px] text-white/35 leading-snug max-w-[160px] mx-auto">
                  {label}
                </div>
              </div>
            ))}
          </div>

          <div className="px-8 py-14 border-t border-white/[0.05]">
            <p className="text-[15px] text-white/40 leading-relaxed max-w-3xl mx-auto text-center">
              We maintain a deliberately focused team of senior engineers and consultants.
              This structure ensures every client engagement receives the full attention of
              experienced practitioners — not junior resource allocated against senior billing
              rates. Focused teams, accountable delivery, consistent outcomes.
            </p>
          </div>

        </div>
      </section>


      {/* ══════════════════════════════════════════
          CASE STUDIES
      ══════════════════════════════════════════ */}
      <section id="work" className="py-28 px-8 bg-white border-t border-slate-200">
        <div className="max-w-content mx-auto">

          <div className="max-w-2xl mb-14">
            <p className="corp-label mb-3">Delivery Examples</p>
            <h2 className="text-[2.25rem] font-bold text-slate-900 mb-5 leading-tight">
              Representative engagements
            </h2>
            <p className="text-[15px] text-slate-500 leading-relaxed">
              A selection of representative projects illustrating our delivery capability
              across different sectors and service areas. All client details have been
              anonymised.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {CASE_STUDIES.map(({ sector, title, metric, metricLabel, challenge, outcome, tags }) => (
              <div
                key={title}
                className="border border-slate-200 rounded-xl overflow-hidden flex flex-col"
              >
                {/* Sector label */}
                <div className="px-6 py-3 border-b border-slate-100 bg-slate-50 flex-shrink-0">
                  <span className="corp-label">{sector}</span>
                </div>

                {/* Outcome metric — hero number */}
                <div className="px-6 pt-6 pb-5 border-b border-slate-100">
                  <p className="text-[2.5rem] font-extrabold text-[#0066FF] leading-none tracking-tight mb-1.5">
                    {metric}
                  </p>
                  <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                    {metricLabel}
                  </p>
                </div>

                {/* Body */}
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-[15px] font-semibold text-slate-900 mb-5 leading-snug">
                    {title}
                  </h3>

                  <div className="space-y-4 flex-1 mb-5">
                    <div>
                      <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider mb-1.5">
                        Challenge
                      </p>
                      <p className="text-[13px] text-slate-600 leading-relaxed">{challenge}</p>
                    </div>
                    <div>
                      <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider mb-1.5">
                        Outcome
                      </p>
                      <p className="text-[13px] text-slate-600 leading-relaxed">{outcome}</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-100">
                    {tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-medium text-[#0066FF] bg-blue-50 px-2.5 py-1 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* ══════════════════════════════════════════
          INDUSTRIES
      ══════════════════════════════════════════ */}
      <section className="py-28 px-8 bg-slate-50 border-t border-slate-200">
        <div className="max-w-content mx-auto">

          <div className="max-w-2xl mb-14">
            <p className="corp-label mb-3">Industry Focus</p>
            <h2 className="text-[2.25rem] font-bold text-slate-900 mb-5 leading-tight">
              Sectors we serve
            </h2>
            <p className="text-[15px] text-slate-500 leading-relaxed">
              Deep domain knowledge across regulated, high-complexity industries where
              the cost of poor technology delivery is significant.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-slate-200">
            {INDUSTRIES.map(({ name, description }) => (
              <div
                key={name}
                className="bg-slate-50 p-8 hover:bg-white transition-colors duration-150 group"
              >
                <div className="w-1 h-6 bg-[#0066FF]/25 group-hover:bg-[#0066FF] rounded-full mb-5 transition-colors duration-200" />
                <h3 className="text-[15px] font-semibold text-slate-900 mb-3">{name}</h3>
                <p className="text-[13px] text-slate-500 leading-relaxed">{description}</p>
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* ══════════════════════════════════════════
          OUR APPROACH — vertical timeline
      ══════════════════════════════════════════ */}
      <section id="approach" className="py-28 px-8 bg-white border-t border-slate-200">
        <div className="max-w-content mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">

            {/* Left — copy */}
            <div>
              <p className="corp-label mb-3">Delivery Methodology</p>
              <h2 className="text-[2.25rem] font-bold text-slate-900 mb-6 leading-tight">
                How we engage
                <br />and deliver
              </h2>
              <p className="text-[15px] text-slate-500 leading-relaxed mb-5">
                Our methodology is built around transparency, accountability, and
                predictability. We do not operate as a time-and-materials provider.
                We scope engagements precisely, price responsibly, and deliver against
                defined outcomes.
              </p>
              <p className="text-[15px] text-slate-500 leading-relaxed mb-10">
                Every engagement is staffed by senior practitioners only. Clients work
                directly with the engineers and consultants responsible for their delivery
                — not through intermediary layers.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#0066FF] text-white font-semibold text-[13px] rounded hover:bg-[#0047CC] transition-colors duration-200"
              >
                Discuss an Engagement
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Right — vertical timeline */}
            <div className="relative">
              {/* Connecting line */}
              <div className="absolute left-[19px] top-12 bottom-10 w-px bg-gradient-to-b from-[#0066FF]/40 via-[#0066FF]/15 to-transparent" />

              <div>
                {APPROACH.map(({ step, title, body }, i) => (
                  <div
                    key={step}
                    className={`relative flex gap-6 ${i < APPROACH.length - 1 ? 'pb-10' : ''}`}
                  >
                    {/* Step node */}
                    <div className="relative z-10 flex-shrink-0 w-10 h-10 rounded-full border-2 border-[#0066FF]/30 bg-white flex items-center justify-center">
                      <span className="text-[11px] font-mono font-bold text-[#0066FF] tabular-nums">
                        {step}
                      </span>
                    </div>
                    <div className="pt-1.5">
                      <h4 className="text-[15px] font-semibold text-slate-900 mb-2">{title}</h4>
                      <p className="text-[13px] text-slate-500 leading-relaxed">{body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* ══════════════════════════════════════════
          TESTIMONIALS
      ══════════════════════════════════════════ */}
      <section className="py-28 px-8 bg-slate-50 border-t border-slate-200">
        <div className="max-w-content mx-auto">

          <div className="mb-14">
            <p className="corp-label mb-3">Client Perspectives</p>
            <h2 className="text-[2.25rem] font-bold text-slate-900 leading-tight">
              What senior stakeholders say
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {TESTIMONIALS.map(({ quote, author, title, initials }) => (
              <div
                key={author}
                className="bg-white border border-slate-200 rounded-xl p-8 flex flex-col"
              >
                {/* Large serif quote mark */}
                <div className="text-[3.5rem] font-serif text-[#0066FF]/20 leading-none mb-4 select-none -mt-2">
                  &ldquo;
                </div>
                <p className="text-[15px] text-slate-700 leading-relaxed flex-1 mb-7">{quote}</p>
                <div className="flex items-center gap-4 pt-5 border-t border-slate-100">
                  {/* Blue gradient avatar */}
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#0066FF] to-[#0047CC] flex items-center justify-center text-white text-[12px] font-bold flex-shrink-0">
                    {initials}
                  </div>
                  <div>
                    <p className="text-[13px] font-semibold text-slate-900">{author}</p>
                    <p className="text-[11px] text-slate-400 mt-0.5">{title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* ══════════════════════════════════════════
          CTA BANNER — electric blue
      ══════════════════════════════════════════ */}
      <section className="relative py-20 px-8 bg-[#0066FF] overflow-hidden">
        {/* Dot-grid texture overlay */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.07]"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(255,255,255,1) 1px, transparent 1px)',
            backgroundSize: '28px 28px',
          }}
        />
        <div className="relative z-10 max-w-content mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-[2rem] font-bold text-white leading-tight mb-4">
              Ready to discuss your requirements?
            </h2>
            <p className="text-[15px] text-white/75 leading-relaxed">
              We offer a complimentary 60-minute discovery session for qualified
              organisations. Submit an enquiry and we will respond within one business day.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 lg:justify-end">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white text-[#0066FF] font-semibold text-[13px] rounded hover:bg-blue-50 transition-colors duration-200"
            >
              Book a Discovery Call
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="mailto:blueloomventuresllc@gmail.com"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 border border-white/30 text-white font-semibold text-[13px] rounded hover:border-white/55 transition-colors duration-200"
            >
              Send an Enquiry
            </a>
          </div>
        </div>
      </section>


      {/* ══════════════════════════════════════════
          CONTACT
      ══════════════════════════════════════════ */}
      <section id="contact" className="py-28 px-8 bg-white border-t border-slate-200">
        <div className="max-w-content mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">

          {/* Left — contact details */}
          <div>
            <p className="corp-label mb-3">Get in Touch</p>
            <h2 className="text-[2.25rem] font-bold text-slate-900 mb-5 leading-tight">
              Start a conversation
            </h2>
            <p className="text-[15px] text-slate-500 leading-relaxed mb-10">
              Whether you have a defined requirement or an exploratory question about how
              technology might address a business challenge, we are available to discuss it.
              All initial consultations are conducted in confidence and carry no obligation.
            </p>

            <div className="space-y-6">
              {[
                {
                  label: 'Email',
                  value: 'blueloomventuresllc@gmail.com',
                  href: 'mailto:blueloomventuresllc@gmail.com',
                },
                {
                  label: 'Response Time',
                  value: 'All enquiries acknowledged within one business day',
                  href: null,
                },
                {
                  label: 'LinkedIn',
                  value: 'BlueLoom Ventures',
                  href: 'https://linkedin.com/company/blueloom-ventures',
                },
              ].map(({ label, value, href }) => (
                <div key={label} className="flex items-start gap-4">
                  <div className="w-7 h-7 border border-slate-200 rounded flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0066FF]" />
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wide mb-1">
                      {label}
                    </p>
                    {href ? (
                      <a
                        href={href}
                        target={href.startsWith('http') ? '_blank' : undefined}
                        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="text-[13px] text-slate-700 hover:text-[#0066FF] transition-colors"
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="text-[13px] text-slate-500">{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — enterprise enquiry form */}
          <div>
            <form
              action="https://formspree.io/f/mkozrpkz"
              method="POST"
              className="space-y-5"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-[10px] font-semibold text-slate-500 uppercase tracking-[0.08em] mb-2">
                    Full Name
                  </label>
                  <input
                    type="text" name="name" required
                    placeholder="Alexandra Johnson"
                    className="w-full px-4 py-3 border border-slate-300 rounded text-slate-900 text-[13px] placeholder:text-slate-300 focus:outline-none focus:border-[#0066FF] bg-white transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-semibold text-slate-500 uppercase tracking-[0.08em] mb-2">
                    Email Address
                  </label>
                  <input
                    type="email" name="email" required
                    placeholder="a.johnson@company.com"
                    className="w-full px-4 py-3 border border-slate-300 rounded text-slate-900 text-[13px] placeholder:text-slate-300 focus:outline-none focus:border-[#0066FF] bg-white transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-[10px] font-semibold text-slate-500 uppercase tracking-[0.08em] mb-2">
                    Organisation
                  </label>
                  <input
                    type="text" name="company"
                    placeholder="Company name"
                    className="w-full px-4 py-3 border border-slate-300 rounded text-slate-900 text-[13px] placeholder:text-slate-300 focus:outline-none focus:border-[#0066FF] bg-white transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-semibold text-slate-500 uppercase tracking-[0.08em] mb-2">
                    Job Title
                  </label>
                  <input
                    type="text" name="jobtitle"
                    placeholder="Chief Technology Officer"
                    className="w-full px-4 py-3 border border-slate-300 rounded text-slate-900 text-[13px] placeholder:text-slate-300 focus:outline-none focus:border-[#0066FF] bg-white transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-semibold text-slate-500 uppercase tracking-[0.08em] mb-2">
                  Service Area
                </label>
                <div className="relative">
                  <select
                    name="service"
                    className="w-full px-4 py-3 border border-slate-300 rounded text-slate-700 text-[13px] bg-white focus:outline-none focus:border-[#0066FF] appearance-none pr-10 transition-colors"
                  >
                    <option value="">Select a service area…</option>
                    {SERVICE_OPTIONS.map((s) => (
                      <option key={s}>{s}</option>
                    ))}
                  </select>
                  <ChevronRight className="absolute right-3.5 top-1/2 -translate-y-1/2 rotate-90 w-4 h-4 text-slate-400 pointer-events-none" />
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-semibold text-slate-500 uppercase tracking-[0.08em] mb-2">
                  Enquiry Details
                </label>
                <textarea
                  name="message" required rows={5}
                  placeholder="Please describe your requirements, project context, and any relevant timelines or constraints."
                  className="w-full px-4 py-3 border border-slate-300 rounded text-slate-900 text-[13px] placeholder:text-slate-300 focus:outline-none focus:border-[#0066FF] bg-white resize-none transition-colors"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 bg-[#0066FF] text-white text-[13px] font-semibold rounded hover:bg-[#0047CC] transition-colors duration-200 flex items-center justify-center gap-2"
              >
                Submit Enquiry
                <ArrowRight className="w-4 h-4" />
              </button>

              <p className="text-[11px] text-slate-400 text-center">
                All enquiries are treated as confidential. We respond within one business day.
              </p>
            </form>
          </div>

        </div>
      </section>


      {/* ══════════════════════════════════════════
          FOOTER
      ══════════════════════════════════════════ */}
      <footer className="bg-[#030D1F]">
        <div className="max-w-content mx-auto px-8 pt-16 pb-10">

          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-14">

            {/* Brand block */}
            <div className="md:col-span-4">
              <div className="flex items-center gap-3 mb-5">
                <Image
                  src="/blueloom-logo.png"
                  alt="BlueLoom Ventures"
                  width={30}
                  height={30}
                  className="object-contain"
                />
                <div className="leading-tight">
                  <div className="font-bold text-[13px] text-white tracking-tight">
                    BlueLoom Ventures
                  </div>
                  <div className="text-[9px] font-semibold text-white/25 tracking-[0.12em] uppercase mt-0.5">
                    Technology Consulting
                  </div>
                </div>
              </div>
              <p className="text-[13px] text-white/35 leading-relaxed max-w-xs mb-5">
                Enterprise software development and IT consulting for organisations that
                require precision, reliability, and measurable results.
              </p>
              <a
                href="mailto:blueloomventuresllc@gmail.com"
                className="text-[13px] text-white/35 hover:text-white/70 transition-colors"
              >
                blueloomventuresllc@gmail.com
              </a>
            </div>

            {/* Services */}
            <div className="md:col-span-2 md:col-start-6">
              <h4 className="text-[10px] font-semibold text-white/25 uppercase tracking-widest mb-4">
                Services
              </h4>
              <ul className="space-y-2.5">
                {FOOTER_SERVICES.map((s) => (
                  <li key={s}>
                    <a
                      href="#services"
                      className="text-[13px] text-white/35 hover:text-white/70 transition-colors"
                    >
                      {s}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div className="md:col-span-2">
              <h4 className="text-[10px] font-semibold text-white/25 uppercase tracking-widest mb-4">
                Company
              </h4>
              <ul className="space-y-2.5">
                {[
                  ['Our Work', '#work'],
                  ['Approach', '#approach'],
                  ['Contact',  '#contact'],
                ].map(([label, href]) => (
                  <li key={label}>
                    <a
                      href={href}
                      className="text-[13px] text-white/35 hover:text-white/70 transition-colors"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Connect */}
            <div className="md:col-span-2">
              <h4 className="text-[10px] font-semibold text-white/25 uppercase tracking-widest mb-4">
                Connect
              </h4>
              <ul className="space-y-2.5">
                <li>
                  <a
                    href="https://linkedin.com/company/blueloom-ventures"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[13px] text-white/35 hover:text-white/70 transition-colors"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href="https://x.com/BlueLoomVenture"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[13px] text-white/35 hover:text-white/70 transition-colors"
                  >
                    Twitter / X
                  </a>
                </li>
              </ul>
            </div>

          </div>

          {/* Legal bar */}
          <div className="pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row justify-between items-center gap-3 text-[11px] text-white/20">
            <span>© 2026 BlueLoom Ventures LLC. All rights reserved.</span>
            <div className="flex gap-5">
              <a href="#" className="hover:text-white/40 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white/40 transition-colors">Terms of Service</a>
            </div>
          </div>

        </div>
      </footer>

    </div>
  );
}
