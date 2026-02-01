import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-white/5 py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center text-white font-bold text-sm">
                B
              </div>
              <span className="text-white font-semibold">Blueloom Ventures</span>
            </div>
            <p className="text-gray-400 text-sm">
              Automation-first software for modern teams.
            </p>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-white font-semibold mb-4">Products</h4>
            <ul className="space-y-2">
              <li>
                <a href="#products" className="text-gray-400 hover:text-white text-sm transition-colors">
                  NightDesk
                </a>
              </li>
              <li>
                <a href="#products" className="text-gray-400 hover:text-white text-sm transition-colors">
                  ClubCheck
                </a>
              </li>
              <li>
                <a href="#products" className="text-gray-400 hover:text-white text-sm transition-colors">
                  NOVYX
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <a href="#technology" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Technology
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-white font-semibold mb-4">Connect</h4>
            <div className="flex gap-3">
              <a
                href="https://github.com/blueloom"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg border border-white/10 hover:border-blue-500/50 text-gray-400 hover:text-blue-400 transition-all hover:bg-white/5"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com/company/blueloom"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg border border-white/10 hover:border-blue-500/50 text-gray-400 hover:text-blue-400 transition-all hover:bg-white/5"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="mailto:hello@blueloom.dev"
                className="p-2 rounded-lg border border-white/10 hover:border-blue-500/50 text-gray-400 hover:text-blue-400 transition-all hover:bg-white/5"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/5 pt-8">
          <p className="text-gray-400 text-sm text-center">
            © {currentYear} Blueloom Ventures. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
