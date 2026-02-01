import {
  Cpu,
  Database,
  Cloud,
  MessageCircle,
} from 'lucide-react';

export default function Technology() {
  const techs = [
    { name: 'Next.js', icon: Cpu },
    { name: 'Node.js', icon: Database },
    { name: 'Supabase', icon: Cloud },
    { name: 'Railway', icon: Cloud },
    { name: 'Twilio', icon: MessageCircle },
  ];

  return (
    <section id="technology" className="relative py-20 sm:py-24 bg-black border-t border-white/5 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-purple-600 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Technology
          </h2>
          <p className="text-gray-400">
            Built on proven, battle-tested infrastructure.
          </p>
        </div>

        {/* Tech Stack */}
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
          {techs.map((tech, idx) => {
            const Icon = tech.icon;
            return (
              <div
                key={idx}
                className="group flex items-center gap-2 px-4 sm:px-6 py-3 rounded-full border border-white/10 bg-gradient-to-r from-white/5 to-white/[0.02] hover:border-blue-500/50 hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
              >
                <Icon className="w-4 h-4 text-gray-400 group-hover:text-blue-400 transition-colors" />
                <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
                  {tech.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
