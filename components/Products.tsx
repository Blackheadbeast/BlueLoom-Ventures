import {
  Code,
  BarChart3,
  Server,
} from 'lucide-react';
import { Github } from 'lucide-react';

export default function Products() {
  const products = [
    {
      name: 'NightDesk',
      description: 'Shift-based task management. For teams that work around the clock.',
      icon: Code,
      github: 'https://github.com/blueloom/nightdesk',
    },
    {
      name: 'ClubCheck',
      description: 'Event verification and attendance. Real-time, zero friction.',
      icon: BarChart3,
      github: 'https://github.com/blueloom/clubcheck',
    },
    {
      name: 'NOVYX',
      description: 'Advanced system monitoring. Instant alerts, actionable insights.',
      icon: Server,
      github: 'https://github.com/blueloom/novyx',
    },
  ];

  return (
    <section id="products" className="relative py-20 sm:py-24 bg-black border-t border-white/5 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-cyan-500 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Our Products
          </h2>
          <p className="text-gray-400">
            Powerful tools, purposefully built.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {products.map((product, idx) => {
            const Icon = product.icon;
            return (
              <div
                key={idx}
                className="group relative rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-8 hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 backdrop-blur-sm overflow-hidden"
              >
                {/* Hover glow */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl opacity-0 group-hover:opacity-5 transition-opacity duration-300 -z-10" />

                {/* Content */}
                <div className="relative">
                  <div className="mb-4 inline-block p-3 rounded-lg bg-blue-500/10 group-hover:bg-blue-500/20 transition-colors">
                    <Icon className="w-6 h-6 text-blue-400" />
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2">
                    {product.name}
                  </h3>

                  <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                    {product.description}
                  </p>

                  <a
                    href={product.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-white/20 hover:border-blue-500/50 text-gray-300 hover:text-white text-sm font-medium transition-all hover:bg-white/5"
                  >
                    <Github className="w-4 h-4" />
                    View on GitHub
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
