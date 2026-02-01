'use client';

import { useState } from 'react';

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-white/5 bg-black/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center text-white font-bold text-lg">
              B
            </div>
            <span className="text-white font-semibold hidden sm:inline">Blueloom Ventures</span>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#products" className="text-gray-300 hover:text-white transition-colors">
              Products
            </a>
            <a href="#technology" className="text-gray-300 hover:text-white transition-colors">
              Technology
            </a>
            <a href="#contact" className="text-gray-300 hover:text-white transition-colors">
              Contact
            </a>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a
              href="#contact"
              className="px-6 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors"
            >
              Contact Us
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-gray-300 hover:text-white"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  mobileMenuOpen
                    ? 'M6 18L18 6M6 6l12 12'
                    : 'M4 6h16M4 12h16M4 18h16'
                }
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4 border-t border-white/5">
            <a
              href="#products"
              className="block px-4 py-2 text-gray-300 hover:text-white transition-colors"
            >
              Products
            </a>
            <a
              href="#technology"
              className="block px-4 py-2 text-gray-300 hover:text-white transition-colors"
            >
              Technology
            </a>
            <a
              href="#contact"
              className="block px-4 py-2 text-gray-300 hover:text-white transition-colors"
            >
              Contact
            </a>
            <a
              href="#contact"
              className="block mx-4 mt-4 px-4 py-2 rounded-lg bg-blue-600 text-white font-medium text-center"
            >
              Contact Us
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
