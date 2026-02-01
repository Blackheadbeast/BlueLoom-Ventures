import {
  Zap,
  Workflow,
  Cable,
} from 'lucide-react';

export default function WhyBlueloom() {
  const features = [
    {
      icon: Zap,
      title: 'Reliable Systems',
      description: 'Built for stability. No surprises, no downtime.',
    },
    {
      icon: Workflow,
      title: 'Workflow Automation',
      description: 'Streamline processes. Let machines handle the routine.',
    },
    {
      icon: Cable,
      title: 'Clean Integrations',
      description: 'Works with what you have. No vendor lock-in.',
    },
  ];

  return (
    <section className="relative py-20 sm:py-24 bg-black border-t border-white/5 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 right-1/4 w-72 h-72 bg-blue-600 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Why Blueloom?
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            We build automation-first SaaS tools for teams that value simplicity over complexity.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div
                key={idx}
                className="group p-6 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] hover:border-blue-500/50 hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
              >
                <div className="mb-4 inline-block p-3 rounded-lg bg-blue-500/10 group-hover:bg-blue-500/20 transition-colors">
                  <Icon className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
