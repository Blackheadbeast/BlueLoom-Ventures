'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import {
  ArrowRight,
  ChevronRight,
  Menu,
  X,
  Settings,
  ShieldCheck,
  Zap,
  Cloud,
  Bot,
  CheckCircle2,
} from 'lucide-react';

// ─────────────────────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────────────────────

const NAV_LINKS: [string, string][] = [
  ['Services', '#services'],
  ['Projects', '#projects'],
  ['Contact',  '#contact'],
];

const PROBLEMS = [
  {
    quote: '"Our files are everywhere."',
    detail: 'Shared drives, email attachments, personal desktops. Nobody can find anything and nobody knows what\'s current.',
  },
  {
    quote: '"We\'re not sure if our data is backed up."',
    detail: 'Maybe it is, maybe it isn\'t. That uncertainty is a real risk — and it\'s easy to fix.',
  },
  {
    quote: '"We\'re paying for Microsoft 365 but barely using it."',
    detail: 'SharePoint, Teams, Entra ID — tools you\'re paying for every month, doing almost nothing for you.',
  },
  {
    quote: '"Our team copies data between apps manually every day."',
    detail: 'It works, technically. But it\'s slow, error-prone, and a waste of everyone\'s time.',
  },
];

const SERVICES = [
  {
    Icon: Settings,
    title: 'IT System Cleanup',
    description:
      'We organize your cloud storage, clean up your tools, and eliminate the messy setups that slow your team down. Most clients see a meaningful difference within the first week.',
  },
  {
    Icon: ShieldCheck,
    title: 'Security & Backup Setup',
    description:
      'MFA, a proper password manager, automated backups, and permissions that actually make sense. You\'ll know your data is protected — without needing to think about it.',
  },
  {
    Icon: Zap,
    title: 'Business Process Automation',
    description:
      'We find the repetitive tasks eating your team\'s time and automate them using Zapier, Make, or Power Automate. Less manual work, fewer mistakes, more time for real work.',
  },
  {
    Icon: Cloud,
    title: 'Microsoft 365 & Google Workspace',
    description:
      'Most businesses use about 10% of what they\'re paying for. We configure SharePoint, Teams, and Google Workspace properly so your team can actually collaborate.',
  },
  {
    Icon: Bot,
    title: 'AI & Workflow Automation',
    description:
      'We find the specific tasks where AI tools will genuinely save your team time — then set them up properly. No subscriptions to things you won\'t use. Just practical automation that fits the way you already work.',
  },
];

const PROJECTS = [
  {
    sector: 'Accounting Firm',
    accentBg: 'bg-teal-50',
    accentBorder: 'border-teal-200',
    accentBar: 'bg-teal-500',
    problem: 'Files spread across personal desktops and Google Drive. No backup system. Staff sharing passwords over email.',
    solution: 'Organized cloud storage, set up automated daily backups, and rolled out a password manager and MFA across the team.',
    result: 'Data protected. Team saves hours every week.',
  },
  {
    sector: 'Real Estate Office',
    accentBg: 'bg-orange-50',
    accentBorder: 'border-orange-200',
    accentBar: 'bg-orange-500',
    problem: 'Agents manually copied listing data across three separate systems — every single day.',
    solution: 'Built an automation that syncs listing data, generates document templates, and notifies the team automatically.',
    result: 'Eliminated 20 minutes of manual work per listing.',
  },
  {
    sector: 'Small SaaS Startup',
    accentBg: 'bg-blue-50',
    accentBorder: 'border-blue-200',
    accentBar: 'bg-blue-500',
    problem: 'Microsoft 365 was barely configured — no MFA, messy permissions, no shared file structure.',
    solution: 'Enabled MFA across the team, set up proper access controls, and organized SharePoint for easy collaboration.',
    result: 'Stronger security and a setup the whole team can actually use.',
  },
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
    <div className="min-h-screen bg-white text-slate-900 font-sans antialiased">

      {/* ══════════════════════════════════════════
          NAVIGATION
      ══════════════════════════════════════════ */}
      <header
        className={`fixed top-0 inset-x-0 z-50 bg-white transition-all duration-200 ${
          scrolled ? 'border-b border-slate-200 shadow-sm' : 'border-b border-transparent'
        }`}
      >
        <div className="max-w-content mx-auto px-8 py-4 flex items-center justify-between">

          <a href="#" className="flex items-center gap-3 flex-shrink-0">
            <Image
              src="/blueloom-logo.png"
              alt="BlueLoom Ventures"
              width={32}
              height={32}
              className="object-contain"
              priority
            />
            <div className="leading-tight">
              <div className="font-bold text-[13px] text-slate-900 tracking-tight">BlueLoom Ventures</div>
              <div className="text-[9.5px] font-semibold text-slate-400 uppercase tracking-[0.12em]">IT Consulting</div>
            </div>
          </a>

          <nav className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map(([label, href]) => (
              <a
                key={label}
                href={href}
                className="text-[13px] font-medium text-slate-600 hover:text-slate-900 transition-colors"
              >
                {label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <a
              href="mailto:blueloomventuresllc@gmail.com"
              className="text-[13px] text-slate-500 hover:text-slate-800 transition-colors"
            >
              blueloomventuresllc@gmail.com
            </a>
            <a
              href="#contact"
              className="px-4 py-2.5 bg-teal-600 text-white text-[13px] font-semibold rounded-xl hover:bg-teal-700 transition-colors"
            >
              Book a Free Call
            </a>
          </div>

          <button
            aria-label="Toggle navigation"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-slate-700 hover:bg-slate-100 rounded-lg transition-colors"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {mobileOpen && (
          <div className="lg:hidden bg-white border-t border-slate-100 px-8 py-4 shadow-lg">
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
              className="mt-4 flex items-center justify-center w-full py-3 bg-teal-600 text-white text-[13px] font-semibold rounded-xl"
            >
              Book a Free Call
            </a>
          </div>
        )}
      </header>


      {/* ══════════════════════════════════════════
          HERO
      ══════════════════════════════════════════ */}
      <section className="pt-28 pb-24 px-8 bg-white">
        <div className="max-w-content mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          <div>
            <div
              className="inline-flex items-center gap-2 bg-teal-50 text-teal-700 text-[11px] font-semibold px-3.5 py-1.5 rounded-full mb-7 uppercase tracking-wider"
              style={{ animation: 'fadeUp 0.6s cubic-bezier(0.16,1,0.3,1) 0.05s both' }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-teal-500" />
              IT Consulting for Small Business
            </div>

            <h1
              className="text-[3.5rem] lg:text-[4rem] font-bold text-slate-900 leading-[1.08] tracking-tight mb-6"
              style={{ animation: 'fadeUp 0.7s cubic-bezier(0.16,1,0.3,1) 0.15s both' }}
            >
              Your tech should
              <br />
              work <span className="text-teal-600">for your</span>
              <br />
              <span className="text-teal-600">business.</span>
            </h1>

            <p
              className="text-[17px] text-slate-500 leading-relaxed mb-8 max-w-lg"
              style={{ animation: 'fadeUp 0.7s cubic-bezier(0.16,1,0.3,1) 0.28s both' }}
            >
              We help small businesses fix messy systems, improve security, and automate
              the repetitive work that&apos;s eating their time — without long contracts or big invoices.
            </p>

            <div
              className="flex flex-wrap gap-3 mb-5"
              style={{ animation: 'fadeUp 0.7s cubic-bezier(0.16,1,0.3,1) 0.4s both' }}
            >
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-teal-600 text-white font-semibold text-[14px] rounded-xl hover:bg-teal-700 transition-colors"
              >
                Book a Free 15-Minute IT Assessment
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#services"
                className="inline-flex items-center gap-2 px-6 py-3.5 border border-slate-200 text-slate-700 font-semibold text-[13px] rounded-xl hover:bg-slate-50 transition-colors"
              >
                See How We Help
              </a>
            </div>

            <p
              className="text-[12px] text-slate-400"
              style={{ animation: 'fadeUp 0.7s cubic-bezier(0.16,1,0.3,1) 0.5s both' }}
            >
              No contracts. No obligation. Just a straight conversation.
            </p>
          </div>

          {/* Dashboard mockup */}
          <div
            className="relative h-[400px] hidden lg:block"
            style={{ animation: 'fadeUp 0.7s cubic-bezier(0.16,1,0.3,1) 0.35s both' }}
          >
            <div className="absolute right-8 top-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-teal-50 -z-10" />
            <div className="absolute left-0 bottom-8 w-36 h-36 rounded-full bg-teal-50 -z-10 flex items-center justify-center overflow-hidden">
              <Image
                src="/blueloom-logo.png"
                alt=""
                width={64}
                height={64}
                className="object-contain opacity-40"
              />
            </div>

            {/* Main card */}
            <div className="absolute right-0 top-8 w-[290px] bg-white rounded-2xl shadow-[0_8px_40px_-8px_rgba(0,0,0,0.14)] border border-slate-100 p-5">
              <div className="flex items-center justify-between mb-5">
                <div>
                  <p className="text-[11px] text-slate-400 mb-0.5">System Health</p>
                  <p className="text-2xl font-bold text-slate-900">All Clear</p>
                </div>
                <div className="w-11 h-11 rounded-xl bg-teal-50 flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5 text-teal-600" />
                </div>
              </div>

              <div className="flex items-end gap-1.5 h-14 mb-2.5">
                {[42, 65, 50, 82, 60, 94, 74].map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-t-sm"
                    style={{
                      height: `${h}%`,
                      backgroundColor: i === 5 ? '#0D9488' : i === 3 ? '#5EEAD4' : '#F1F5F9',
                    }}
                  />
                ))}
              </div>
              <div className="flex justify-between text-[9px] text-slate-300 mb-4">
                {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((d, i) => <span key={i}>{d}</span>)}
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div className="bg-teal-50 rounded-xl p-3">
                  <p className="text-[10px] text-teal-600 font-semibold mb-1.5">Security</p>
                  <p className="text-[11px] text-slate-600"><span className="text-teal-500 font-bold">✓</span> MFA active</p>
                  <p className="text-[11px] text-slate-600"><span className="text-teal-500 font-bold">✓</span> Backup on</p>
                </div>
                <div className="bg-slate-50 rounded-xl p-3">
                  <p className="text-[10px] text-slate-500 font-semibold mb-1.5">Automations</p>
                  <p className="text-[11px] text-slate-600">12 workflows</p>
                  <p className="text-[11px] text-slate-600">running daily</p>
                </div>
              </div>
            </div>

            {/* Floating badges */}
            <div className="absolute left-0 top-20 bg-white rounded-2xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.12)] border border-slate-100 p-3 flex items-center gap-3">
              <div className="w-9 h-9 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-emerald-600 font-bold text-sm">↑</span>
              </div>
              <div>
                <p className="text-[10px] text-slate-400">Time saved</p>
                <p className="text-[13px] font-bold text-slate-900">8 hrs / week</p>
              </div>
            </div>
            <div className="absolute left-12 bottom-12 bg-teal-600 text-white text-[12px] font-semibold px-4 py-2.5 rounded-xl shadow-lg flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4" />
              Backup verified
            </div>
          </div>

        </div>
      </section>


      {/* ══════════════════════════════════════════
          COMMON PROBLEMS
      ══════════════════════════════════════════ */}
      <section className="py-20 px-8 bg-slate-50 border-t border-slate-100">
        <div className="max-w-content mx-auto">

          <div className="max-w-xl mb-12">
            <p className="corp-label mb-3">Sound Familiar?</p>
            <h2 className="text-[2.25rem] font-bold text-slate-900 leading-tight">
              These problems are more common than you think.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
            {PROBLEMS.map(({ quote, detail }, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-teal-200 hover:shadow-[0_4px_20px_-4px_rgba(13,148,136,0.1)] transition-all duration-200"
              >
                <p className="text-[15px] font-semibold text-slate-900 italic mb-2">{quote}</p>
                <p className="text-[13px] text-slate-500 leading-relaxed">{detail}</p>
              </div>
            ))}
          </div>

          <p className="text-[15px] text-slate-500 max-w-xl">
            None of these are unusual. We see them in almost every small business we talk to.
            The good news: they&apos;re all fixable — usually faster than you expect.
          </p>

        </div>
      </section>


      {/* ══════════════════════════════════════════
          SERVICES
      ══════════════════════════════════════════ */}
      <section id="services" className="py-20 px-8 bg-white border-t border-slate-100">
        <div className="max-w-content mx-auto">

          <div className="max-w-xl mb-12">
            <p className="corp-label mb-3">What We Do</p>
            <h2 className="text-[2.25rem] font-bold text-slate-900 leading-tight mb-4">
              Five ways we help small businesses get their tech sorted.
            </h2>
            <p className="text-[15px] text-slate-500 leading-relaxed">
              Every project is scoped upfront, priced flat, and handed back with your team trained.
              No monthly retainers. No dependency on us after we&apos;re done.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {SERVICES.map(({ Icon, title, description }) => (
              <div
                key={title}
                className="group bg-white rounded-2xl p-8 border border-slate-200 hover:border-teal-200 hover:shadow-[0_8px_32px_-8px_rgba(13,148,136,0.12)] hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-xl bg-teal-50 flex items-center justify-center mb-5 group-hover:bg-teal-600 transition-colors duration-300">
                  <Icon className="w-5 h-5 text-teal-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-[16px] font-bold text-slate-900 mb-3">{title}</h3>
                <p className="text-[13px] text-slate-500 leading-relaxed">{description}</p>
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* ══════════════════════════════════════════
          EXAMPLE PROJECTS
      ══════════════════════════════════════════ */}
      <section id="projects" className="py-20 px-8 bg-slate-50 border-t border-slate-100">
        <div className="max-w-content mx-auto">

          <div className="max-w-xl mb-12">
            <p className="corp-label mb-3">Example Projects</p>
            <h2 className="text-[2.25rem] font-bold text-slate-900 leading-tight mb-4">
              Real scenarios. Real results.
            </h2>
            <p className="text-[15px] text-slate-500 leading-relaxed">
              These are based on typical projects we work on. Details are kept anonymous, but the problems and outcomes are real.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            {PROJECTS.map(({ sector, accentBg, accentBorder, accentBar, problem, solution, result }) => (
              <div
                key={sector}
                className={`rounded-2xl border p-7 ${accentBg} ${accentBorder}`}
              >
                <div className="flex items-center gap-2.5 mb-6">
                  <div className={`w-2 h-2 rounded-full ${accentBar}`} />
                  <span className="text-[12px] font-bold text-slate-700 uppercase tracking-wider">{sector}</span>
                </div>

                <div className="space-y-4">
                  <div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1.5">Problem</p>
                    <p className="text-[13px] text-slate-700 leading-relaxed">{problem}</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1.5">What We Did</p>
                    <p className="text-[13px] text-slate-700 leading-relaxed">{solution}</p>
                  </div>
                  <div className="pt-4 border-t border-white/60">
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1.5">Result</p>
                    <p className="text-[14px] font-semibold text-slate-900 leading-snug">{result}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* ══════════════════════════════════════════
          FINAL CTA
      ══════════════════════════════════════════ */}
      <section className="relative py-20 px-8 bg-gradient-to-br from-teal-700 to-teal-500 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.06]"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(255,255,255,1) 1px, transparent 1px)',
            backgroundSize: '28px 28px',
          }}
        />
        <div className="relative z-10 max-w-2xl mx-auto text-center">
          <h2 className="text-[2.25rem] font-bold text-white leading-tight mb-4">
            Your tech problems aren&apos;t going to fix themselves.
          </h2>
          <p className="text-[16px] text-white/75 leading-relaxed mb-8">
            Book a free 15-minute call. We&apos;ll take a look at your current setup, tell you honestly
            what needs attention, and give you a clear sense of what it would take to fix.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-teal-700 font-semibold text-[14px] rounded-xl hover:bg-teal-50 transition-colors shadow-lg"
          >
            Book a Free IT Assessment
            <ArrowRight className="w-4 h-4" />
          </a>
          <p className="text-[12px] text-white/50 mt-5">
            No commitment. No sales pitch. We just want to understand your situation.
          </p>
        </div>
      </section>


      {/* ══════════════════════════════════════════
          CONTACT
      ══════════════════════════════════════════ */}
      <section id="contact" className="py-20 px-8 bg-white border-t border-slate-100">
        <div className="max-w-content mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">

          <div>
            <p className="corp-label mb-3">Get in Touch</p>
            <h2 className="text-[2.25rem] font-bold text-slate-900 mb-4 leading-tight">
              Tell us what&apos;s going on.
            </h2>
            <p className="text-[15px] text-slate-500 leading-relaxed mb-10">
              Fill in the form and we&apos;ll get back to you within one business day.
              No auto-replies. No sales sequences. Just a real response.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-9 h-9 bg-teal-50 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="w-2 h-2 rounded-full bg-teal-500" />
                </div>
                <div>
                  <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wide mb-0.5">Email</p>
                  <a
                    href="mailto:blueloomventuresllc@gmail.com"
                    className="text-[13px] text-slate-700 hover:text-teal-600 transition-colors"
                  >
                    blueloomventuresllc@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-9 h-9 bg-teal-50 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="w-2 h-2 rounded-full bg-teal-500" />
                </div>
                <div>
                  <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wide mb-0.5">Response Time</p>
                  <p className="text-[13px] text-slate-500">Within one business day</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-9 h-9 bg-teal-50 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="w-2 h-2 rounded-full bg-teal-500" />
                </div>
                <div>
                  <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wide mb-0.5">LinkedIn</p>
                  <a
                    href="https://www.linkedin.com/in/mahadghazipura"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[13px] text-slate-700 hover:text-teal-600 transition-colors"
                  >
                    Mahad Ghazipura
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div>
            <form
              action="https://formspree.io/f/mkozrpkz"
              method="POST"
              className="space-y-4"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-semibold text-slate-500 uppercase tracking-wide mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text" name="name" required
                    placeholder="Jane Smith"
                    className="w-full px-4 py-3 border border-slate-200 rounded-xl text-slate-900 text-[13px] placeholder:text-slate-300 focus:outline-none focus:border-teal-500 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-semibold text-slate-500 uppercase tracking-wide mb-1.5">
                    Email
                  </label>
                  <input
                    type="email" name="email" required
                    placeholder="jane@company.com"
                    className="w-full px-4 py-3 border border-slate-200 rounded-xl text-slate-900 text-[13px] placeholder:text-slate-300 focus:outline-none focus:border-teal-500 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-slate-500 uppercase tracking-wide mb-1.5">
                  Company
                </label>
                <input
                  type="text" name="company"
                  placeholder="Your company"
                  className="w-full px-4 py-3 border border-slate-200 rounded-xl text-slate-900 text-[13px] placeholder:text-slate-300 focus:outline-none focus:border-teal-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-slate-500 uppercase tracking-wide mb-1.5">
                  What do you need help with?
                </label>
                <textarea
                  name="message" required rows={5}
                  placeholder="Describe what's not working or what's slowing your team down. Plain terms are fine."
                  className="w-full px-4 py-3 border border-slate-200 rounded-xl text-slate-900 text-[13px] placeholder:text-slate-300 focus:outline-none focus:border-teal-500 resize-none transition-colors"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 bg-teal-600 text-white text-[13px] font-semibold rounded-xl hover:bg-teal-700 transition-colors flex items-center justify-center gap-2"
              >
                Send Message
                <ArrowRight className="w-4 h-4" />
              </button>

              <p className="text-[11px] text-slate-400 text-center">
                We read every message and respond personally within one business day.
              </p>
            </form>
          </div>

        </div>
      </section>


      {/* ══════════════════════════════════════════
          FOOTER
      ══════════════════════════════════════════ */}
      <footer className="bg-slate-50 border-t border-slate-200">
        <div className="max-w-content mx-auto px-8 pt-14 pb-10">

          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-12">

            <div className="md:col-span-5">
              <div className="flex items-center gap-3 mb-5">
                <Image
                  src="/blueloom-logo.png"
                  alt="BlueLoom Ventures"
                  width={30}
                  height={30}
                  className="object-contain"
                />
                <div className="leading-tight">
                  <div className="font-bold text-[13px] text-slate-900">BlueLoom Ventures</div>
                  <div className="text-[9px] font-semibold text-slate-400 uppercase tracking-widest mt-0.5">IT Consulting</div>
                </div>
              </div>
              <p className="text-[13px] text-slate-500 leading-relaxed max-w-xs mb-3">
                Project-based IT consulting for small businesses. We fix your tech, train your team, and leave you in a better position than we found you.
              </p>
              <p className="text-[13px] text-slate-500 leading-relaxed max-w-xs mb-5">
                Led by{' '}
                <a
                  href="https://www.linkedin.com/in/mahadghazipura"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal-600 hover:text-teal-700 underline underline-offset-2 decoration-teal-300 transition-colors"
                >
                  Mahad Ghazipura
                </a>
                , helping small businesses simplify their technology and automate their operations.
              </p>
              <a
                href="mailto:blueloomventuresllc@gmail.com"
                className="text-[13px] text-slate-500 hover:text-teal-600 transition-colors"
              >
                blueloomventuresllc@gmail.com
              </a>
            </div>

            <div className="md:col-span-3 md:col-start-7">
              <h4 className="text-[10px] font-semibold text-slate-400 uppercase tracking-widest mb-4">Services</h4>
              <ul className="space-y-2.5">
                {['IT System Cleanup', 'Security & Backup', 'Process Automation', 'Microsoft 365 & Google Workspace'].map((s) => (
                  <li key={s}>
                    <a href="#services" className="text-[13px] text-slate-500 hover:text-teal-600 transition-colors">{s}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="md:col-span-2">
              <h4 className="text-[10px] font-semibold text-slate-400 uppercase tracking-widest mb-4">Connect</h4>
              <ul className="space-y-2.5">
                <li>
                  <a
                    href="https://www.linkedin.com/in/mahadghazipura"
                    target="_blank" rel="noopener noreferrer"
                    className="text-[13px] text-slate-500 hover:text-teal-600 transition-colors"
                  >
                    Mahad Ghazipura
                  </a>
                </li>
                <li>
                  <a
                    href="https://x.com/BlueLoomVenture"
                    target="_blank" rel="noopener noreferrer"
                    className="text-[13px] text-slate-500 hover:text-teal-600 transition-colors"
                  >
                    Twitter / X
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="text-[13px] text-slate-500 hover:text-teal-600 transition-colors"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>

          </div>

          <div className="pt-8 border-t border-slate-200 flex flex-col sm:flex-row justify-between items-center gap-3 text-[11px] text-slate-400">
            <span>© 2026 BlueLoom Ventures LLC. All rights reserved.</span>
            <div className="flex gap-5">
              <a href="#" className="hover:text-slate-600 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-slate-600 transition-colors">Terms of Service</a>
            </div>
          </div>

        </div>
      </footer>

    </div>
  );
}
