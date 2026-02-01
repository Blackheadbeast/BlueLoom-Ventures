export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black pt-20 pb-20">
      {/* Abstract Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Radial gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-950/20 via-black to-black" />

        {/* Animated circuit lines and nodes */}
        <svg className="absolute inset-0 w-full h-full opacity-30" preserveAspectRatio="none">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(79, 172, 254, 0.1)" strokeWidth="0.5" />
            </pattern>
            <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#2F7CF6" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#22D3EE" stopOpacity="0.1" />
            </linearGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
          <line x1="10%" y1="20%" x2="30%" y2="40%" stroke="url(#lineGrad)" strokeWidth="1" />
          <line x1="60%" y1="10%" x2="85%" y2="35%" stroke="url(#lineGrad)" strokeWidth="1" />
          <line x1="20%" y1="70%" x2="50%" y2="90%" stroke="url(#lineGrad)" strokeWidth="1" />
          <circle cx="15%" cy="25%" r="3" fill="#2F7CF6" opacity="0.6" />
          <circle cx="85%" cy="30%" r="2.5" fill="#22D3EE" opacity="0.5" />
          <circle cx="40%" cy="85%" r="2" fill="#7C3AED" opacity="0.4" />
        </svg>

        {/* Glow effects */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          Automation.
          <br />
          <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Simplified.
          </span>
        </h1>

        <p className="text-lg sm:text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
          Software that works while you don't. Build reliable systems without the complexity.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#products"
            className="px-8 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold transition-all transform hover:scale-105"
          >
            Explore Products
          </a>
          <a
            href="#contact"
            className="px-8 py-3 rounded-lg border border-white/20 hover:border-white/40 text-white font-semibold transition-all hover:bg-white/5"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}
