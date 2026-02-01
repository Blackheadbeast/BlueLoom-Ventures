'use client';

import { useState, useMemo, useEffect } from 'react';
import Image from 'next/image';

export default function BlueloomVentures() {
  const [scrollY, setScrollY] = useState(0);

  // Track scroll for parallax effects
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Generate stable particle positions (stars)
  const stars = useMemo(() => {
    return Array.from({ length: 50 }, (_, i) => ({
      id: i,
      top: `${(i * 7.3 + 13) % 100}%`,
      left: `${(i * 9.1 + 19) % 100}%`,
      size: (i % 3 === 0) ? 2 : 1, // Deterministic size based on index
      delay: `${(i * 0.2) % 5}s`,
      duration: `${3 + (i % 3)}s`,
    }));
  }, []);

  return (
    <div className="min-h-screen bg-navy-950 text-white overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-navy-950/70 backdrop-blur-xl border-b border-white/5 transition-all duration-500">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Image 
                src="/blueloom-logo.png" 
                alt="Blueloom Ventures" 
                width={40} 
                height={40}
                className="transition-transform duration-300 hover:scale-110"
                style={{ filter: 'drop-shadow(0 0 20px rgba(79, 124, 254, 0.3))' }}
              />
              <div>
                <div className="font-bold text-lg">Blueloom Ventures</div>
                <div className="text-xs text-white/60">Software Innovation Studio</div>
              </div>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#services" className="text-sm hover:text-blue-primary transition-all duration-300">
                Services
              </a>
              <a href="#capabilities" className="text-sm hover:text-blue-primary transition-all duration-300">
                Capabilities
              </a>
              <a href="#about" className="text-sm hover:text-blue-primary transition-all duration-300">
                About
              </a>
              <a href="#contact" className="px-6 py-2 bg-gradient-to-r from-blue-primary to-navy-700 rounded-full text-sm font-medium hover:shadow-lg hover:shadow-blue-primary/30 transition-all duration-300 hover:scale-105">
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section with Space Theme */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated space background */}
        <div className="absolute inset-0 bg-gradient-to-b from-navy-900 via-navy-950 to-black" />
        
        {/* Orbiting gradient circles */}
        <div 
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-primary/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDuration: '8s' }}
        />
        <div 
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDuration: '10s', animationDelay: '2s' }}
        />
        
        {/* Grid overlay */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(rgba(79, 124, 254, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(79, 124, 254, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '100px 100px',
            transform: `translateY(${scrollY * 0.5}px)`,
          }}
        />

        {/* Stars */}
        {stars.map((star) => (
          <div
            key={star.id}
            className="absolute bg-white rounded-full animate-pulse"
            style={{
              width: `${star.size}px`,
              height: `${star.size}px`,
              top: star.top,
              left: star.left,
              animationDelay: star.delay,
              animationDuration: star.duration,
              opacity: 0.6,
            }}
          />
        ))}

        {/* Content */}
        <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
          <div 
            className="mb-8 opacity-0 animate-[fadeInUp_1s_ease-out_0.2s_forwards]"
            style={{ animationFillMode: 'forwards' }}
          >
            <Image 
              src="/blueloom-logo.png" 
              alt="Blueloom" 
              width={120} 
              height={120}
              className="mx-auto mb-6"
              style={{ filter: 'drop-shadow(0 0 40px rgba(79, 124, 254, 0.4))' }}
            />
          </div>

          <div className="inline-block px-4 py-2 bg-blue-primary/10 border border-blue-primary/20 rounded-full mb-6 opacity-0 animate-[fadeInUp_1s_ease-out_0.4s_forwards]">
            <span className="text-blue-primary font-medium text-sm">Building the Future of Software</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight opacity-0 animate-[fadeInUp_1s_ease-out_0.6s_forwards]">
            We Build Software That
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-primary via-purple-400 to-blue-light">
              Transforms Businesses
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/70 max-w-3xl mx-auto mb-12 opacity-0 animate-[fadeInUp_1s_ease-out_0.8s_forwards]">
            Custom software development, AI integration, and intelligent automation for forward-thinking organizations.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-[fadeInUp_1s_ease-out_1s_forwards]">
            <a 
              href="#contact" 
              className="group px-8 py-4 bg-gradient-to-r from-blue-primary to-navy-700 rounded-full font-medium hover:shadow-2xl hover:shadow-blue-primary/50 transition-all duration-500 hover:scale-105"
            >
              <span className="flex items-center justify-center gap-2">
                Start Your Project
                <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
              </span>
            </a>
            <a 
              href="#capabilities" 
              className="px-8 py-4 border border-white/20 rounded-full font-medium hover:bg-white/5 hover:border-white/40 transition-all duration-500 backdrop-blur-sm"
            >
              Explore Capabilities
            </a>
          </div>

          {/* Trust indicators */}
          <div className="mt-16 flex flex-wrap justify-center items-center gap-8 text-sm text-white/50 opacity-0 animate-[fadeInUp_1s_ease-out_1.2s_forwards]">
            <div className="flex items-center gap-2 hover:text-white/80 transition-colors duration-300">
              <span className="text-blue-primary text-xl">✓</span>
              <span>5+ Years Experience</span>
            </div>
            <div className="flex items-center gap-2 hover:text-white/80 transition-colors duration-300">
              <span className="text-blue-primary text-xl">✓</span>
              <span>Modern Tech Stack</span>
            </div>
            <div className="flex items-center gap-2 hover:text-white/80 transition-colors duration-300">
              <span className="text-blue-primary text-xl">✓</span>
              <span>Rapid Development</span>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-2">
            <div className="w-1 h-3 bg-white/50 rounded-full" />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 px-6 relative bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 transition-all duration-700">
              What We Do
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              We transform ideas into production-ready software. From concept to deployment, we handle the entire development lifecycle.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="group bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/8 hover:border-blue-primary/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-primary/20">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-primary to-navy-700 rounded-xl flex items-center justify-center mb-6 text-3xl group-hover:scale-110 transition-transform duration-500">
                💻
              </div>
              <h3 className="text-2xl font-semibold mb-4">Custom Development</h3>
              <p className="text-white/70 leading-relaxed mb-4">
                Full-stack web applications built with cutting-edge technologies. We turn your vision into scalable, production-ready software.
              </p>
              <ul className="space-y-2 text-white/60 text-sm">
                <li className="flex items-center gap-2 hover:text-white/80 transition-colors duration-300">
                  <span className="text-blue-primary">→</span>
                  Web & Mobile Applications
                </li>
                <li className="flex items-center gap-2 hover:text-white/80 transition-colors duration-300">
                  <span className="text-blue-primary">→</span>
                  SaaS Platform Development
                </li>
                <li className="flex items-center gap-2 hover:text-white/80 transition-colors duration-300">
                  <span className="text-blue-primary">→</span>
                  API & Backend Systems
                </li>
              </ul>
            </div>

            {/* Service 2 */}
            <div className="group bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/8 hover:border-blue-primary/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-primary/20">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-primary to-navy-700 rounded-xl flex items-center justify-center mb-6 text-3xl group-hover:scale-110 transition-transform duration-500">
                🤖
              </div>
              <h3 className="text-2xl font-semibold mb-4">AI Integration</h3>
              <p className="text-white/70 leading-relaxed mb-4">
                Harness the power of artificial intelligence to automate workflows, analyze data, and make intelligent decisions.
              </p>
              <ul className="space-y-2 text-white/60 text-sm">
                <li className="flex items-center gap-2 hover:text-white/80 transition-colors duration-300">
                  <span className="text-blue-primary">→</span>
                  LLM & GPT Integration
                </li>
                <li className="flex items-center gap-2 hover:text-white/80 transition-colors duration-300">
                  <span className="text-blue-primary">→</span>
                  Intelligent Automation
                </li>
                <li className="flex items-center gap-2 hover:text-white/80 transition-colors duration-300">
                  <span className="text-blue-primary">→</span>
                  Machine Learning Models
                </li>
              </ul>
            </div>

            {/* Service 3 */}
            <div className="group bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/8 hover:border-blue-primary/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-primary/20">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-primary to-navy-700 rounded-xl flex items-center justify-center mb-6 text-3xl group-hover:scale-110 transition-transform duration-500">
                ⚡
              </div>
              <h3 className="text-2xl font-semibold mb-4">Process Automation</h3>
              <p className="text-white/70 leading-relaxed mb-4">
                Streamline operations and eliminate manual work with custom automation solutions tailored to your business.
              </p>
              <ul className="space-y-2 text-white/60 text-sm">
                <li className="flex items-center gap-2 hover:text-white/80 transition-colors duration-300">
                  <span className="text-blue-primary">→</span>
                  Workflow Automation
                </li>
                <li className="flex items-center gap-2 hover:text-white/80 transition-colors duration-300">
                  <span className="text-blue-primary">→</span>
                  System Integration
                </li>
                <li className="flex items-center gap-2 hover:text-white/80 transition-colors duration-300">
                  <span className="text-blue-primary">→</span>
                  Data Pipeline Development
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Section (Better than "Our Work") */}
      <section id="capabilities" className="py-32 px-6 relative bg-navy-950">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our Capabilities
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              From startups to enterprises, we've tackled challenges across industries and technologies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Capability Cards */}
            {[
              { icon: '🎯', title: 'Member Management', desc: 'Built intelligent verification systems with QR codes, real-time tracking, and automated notifications.' },
              { icon: '💬', title: 'Communication Systems', desc: 'Developed multi-channel messaging platforms with SMS, email, and push notification capabilities.' },
              { icon: '📊', title: 'Data Analytics', desc: 'Created dashboards and reporting tools that turn raw data into actionable business insights.' },
              { icon: '🔐', title: 'Authentication & Security', desc: 'Implemented enterprise-grade security with SSO, OAuth, and role-based access control.' },
              { icon: '☁️', title: 'Cloud Infrastructure', desc: 'Deployed scalable applications on AWS, Vercel, and other cloud platforms with 99.9% uptime.' },
              { icon: '🔄', title: 'API Development', desc: 'Built RESTful and GraphQL APIs that power mobile apps, third-party integrations, and microservices.' },
            ].map((capability, index) => (
              <div 
                key={index}
                className="group bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/8 hover:border-blue-primary/30 transition-all duration-500 hover:scale-105"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {capability.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{capability.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  {capability.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Case Study CTA */}
          <div className="mt-16 text-center">
            <div className="inline-block bg-gradient-to-r from-blue-primary/20 to-purple-500/20 border border-blue-primary/30 rounded-2xl p-8 max-w-2xl backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-4">Ready to Build Something Amazing?</h3>
              <p className="text-white/70 mb-6">
                Let's discuss your project and how we can help bring your vision to life.
              </p>
              <a 
                href="#contact" 
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-primary to-navy-700 rounded-full font-medium hover:shadow-lg hover:shadow-blue-primary/50 transition-all duration-300 hover:scale-105"
              >
                Schedule a Consultation
                <span>→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-6 bg-black">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              About Blueloom Ventures
            </h2>
            <div className="text-lg text-white/70 leading-relaxed space-y-6">
              <p>
                We're a software innovation studio that believes technology should solve problems, not create them. 
                Founded on principles of rapid experimentation and practical solutions, we build software that makes a real difference.
              </p>
              <p>
                Our approach combines modern development practices with deep technical expertise. We don't just write code — 
                we partner with businesses to understand their challenges and build solutions that drive measurable results.
              </p>
              <p>
                Whether you need a custom web application, AI integration, or process automation, we bring the technical 
                skill and business understanding to make your project successful.
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center group">
              <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-primary to-blue-light mb-2 group-hover:scale-110 transition-transform duration-300">5+</div>
              <div className="text-white/60 text-sm">Years Experience</div>
            </div>
            <div className="text-center group">
              <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-primary to-blue-light mb-2 group-hover:scale-110 transition-transform duration-300">100%</div>
              <div className="text-white/60 text-sm">Modern Stack</div>
            </div>
            <div className="text-center group col-span-2 md:col-span-1">
              <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-primary to-blue-light mb-2 group-hover:scale-110 transition-transform duration-300">∞</div>
              <div className="text-white/60 text-sm">Possibilities</div>
            </div>
          </div>

          {/* Process */}
          <div className="mt-20">
            <h3 className="text-2xl font-bold text-center mb-12">How We Work</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { num: '1', title: 'Discovery', desc: 'Understand your needs and define clear goals' },
                { num: '2', title: 'Design', desc: 'Plan architecture and user experience' },
                { num: '3', title: 'Build', desc: 'Rapid development with regular updates' },
                { num: '4', title: 'Launch', desc: 'Deploy, monitor, and iterate' },
              ].map((step) => (
                <div key={step.num} className="text-center group">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-primary/20 to-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-primary font-bold border border-blue-primary/30 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-blue-primary/30 transition-all duration-300">
                    {step.num}
                  </div>
                  <h4 className="font-semibold mb-2">{step.title}</h4>
                  <p className="text-sm text-white/60">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-32 px-6 bg-navy-950">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Technology We Use
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              We build with modern, proven technologies that ensure fast development, scalability, and reliability.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { icon: '⚛️', name: 'Next.js', desc: 'React Framework' },
              { icon: '🗄️', name: 'Supabase', desc: 'Database & Auth' },
              { icon: '🎨', name: 'Tailwind', desc: 'CSS Framework' },
              { icon: '🤖', name: 'AI/ML', desc: 'OpenAI, Claude' },
              { icon: '💬', name: 'Twilio', desc: 'Communications' },
              { icon: '☁️', name: 'Cloud', desc: 'Vercel, AWS' },
            ].map((tech, index) => (
              <div 
                key={index}
                className="group text-center p-6 bg-white/5 border border-white/10 rounded-xl hover:bg-white/8 hover:border-blue-primary/30 transition-all duration-500 hover:scale-105 hover:shadow-lg hover:shadow-blue-primary/20"
              >
                <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">{tech.icon}</div>
                <h3 className="font-semibold mb-1 text-sm">{tech.name}</h3>
                <p className="text-xs text-white/60">{tech.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6 bg-black">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Let's Build Together
            </h2>
            <p className="text-xl text-white/70">
              Have a project in mind? We'd love to hear about it. Tell us what you're looking to build and we'll get back to you within 24 hours.
            </p>
          </div>

          <form action="https://formspree.io/f/mkozrpkz" method="POST" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white placeholder:text-white/40 focus:outline-none focus:border-blue-primary focus:bg-white/8 transition-all duration-300"
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white placeholder:text-white/40 focus:outline-none focus:border-blue-primary focus:bg-white/8 transition-all duration-300"
              />
            </div>

            <input
              type="text"
              name="company"
              placeholder="Company (Optional)"
              className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white placeholder:text-white/40 focus:outline-none focus:border-blue-primary focus:bg-white/8 transition-all duration-300"
            />

            <textarea
              name="message"
              placeholder="Tell us about your project..."
              required
              rows={6}
              className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white placeholder:text-white/40 resize-none focus:outline-none focus:border-blue-primary focus:bg-white/8 transition-all duration-300"
            />

            <button
              type="submit"
              className="w-full px-8 py-4 bg-gradient-to-r from-blue-primary to-navy-700 rounded-full font-medium hover:shadow-2xl hover:shadow-blue-primary/50 transition-all duration-500 hover:scale-105"
            >
              Send Message
            </button>
          </form>

          <div className="mt-12 text-center space-y-4">
            <p className="text-white/60">
            
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/5 bg-navy-950">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            {/* Company Info */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <Image 
                  src="/blueloom-logo.png" 
                  alt="Blueloom Ventures" 
                  width={40} 
                  height={40}
                  style={{ filter: 'drop-shadow(0 0 15px rgba(79, 124, 254, 0.3))' }}
                />
                <div>
                  <div className="font-bold">Blueloom Ventures</div>
                  <div className="text-xs text-white/60">Software Innovation Studio</div>
                </div>
              </div>
              <p className="text-white/60 text-sm max-w-sm">
                Building intelligent software solutions that solve real problems for modern businesses.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <div className="space-y-2 text-sm">
                <a href="#about" className="block text-white/60 hover:text-white transition-colors duration-300">About Us</a>
                <a href="#services" className="block text-white/60 hover:text-white transition-colors duration-300">Services</a>
                <a href="#capabilities" className="block text-white/60 hover:text-white transition-colors duration-300">Capabilities</a>
                <a href="#contact" className="block text-white/60 hover:text-white transition-colors duration-300">Contact</a>
              </div>
            </div>

            {/* Connect */}
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <div className="space-y-2 text-sm">
                <a href="https://linkedin.com/company/blueloom-ventures" target="_blank" rel="noopener noreferrer" className="block text-white/60 hover:text-white transition-colors duration-300">LinkedIn</a>
                <a href="https://x.com/BlueLoomVenture" target="_blank" rel="noopener noreferrer" className="block text-white/60 hover:text-white transition-colors duration-300">Twitter/X</a>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-white/5">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/60">
              <div className="flex flex-wrap gap-4 justify-center">
                <span>© 2026 Blueloom Ventures LLC</span>
                <a href="#" className="hover:text-white transition-colors duration-300">Privacy Policy</a>
                <a href="#" className="hover:text-white transition-colors duration-300">Terms of Service</a>
              </div>
              <a href="mailto:contact@blueloom.ventures" className="hover:text-white transition-colors duration-300">
                contact@blueloom.ventures
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* CSS for animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}