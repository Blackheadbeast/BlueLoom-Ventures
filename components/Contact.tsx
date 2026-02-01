'use client';

import { useState } from 'react';
import { Mail, Linkedin, Github } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    
    // Show success message for 3 seconds
    setTimeout(() => {
      setSubmitted(false);
    }, 3000);
  };

  return (
    <section id="contact" className="relative py-20 sm:py-24 bg-black border-t border-white/5 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-blue-600 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-purple-600 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 text-center">
          Get in Touch
        </h2>
        <p className="text-gray-400 text-center mb-12">
          Have questions? We'd love to hear from you.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Left side - Info */}
          <div className="flex flex-col justify-center">
            <p className="text-gray-300 mb-8 leading-relaxed">
              Whether you're looking to automate workflows, integrate with existing tools, or explore our products, we're here to help.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-lg bg-blue-500/10">
                  <Mail className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <a href="mailto:hello@blueloom.dev" className="text-white hover:text-blue-400 transition-colors">
                    hello@blueloom.dev
                  </a>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 mt-8">
              <a
                href="https://github.com/blueloom"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg border border-white/10 hover:border-blue-500/50 text-gray-400 hover:text-blue-400 transition-all hover:bg-white/5"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/company/blueloom"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg border border-white/10 hover:border-blue-500/50 text-gray-400 hover:text-blue-400 transition-all hover:bg-white/5"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Right side - Form */}
          <div className="p-8 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 hover:border-white/20 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-white placeholder-gray-500 transition-all outline-none"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 hover:border-white/20 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-white placeholder-gray-500 transition-all outline-none"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 hover:border-white/20 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-white placeholder-gray-500 transition-all outline-none resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold transition-all transform hover:scale-105"
              >
                Send Message
              </button>

              {submitted && (
                <div className="p-4 rounded-lg bg-green-500/10 border border-green-500/20">
                  <p className="text-green-400 text-sm font-medium">
                    Message sent! We'll get back to you soon.
                  </p>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
