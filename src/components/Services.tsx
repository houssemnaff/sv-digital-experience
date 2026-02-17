import { Paintbrush, Globe, Camera, Film, Megaphone, Palette, ArrowRight, Sparkles } from "lucide-react";

const services = [
  {
    icon: Paintbrush,
    title: "Content Creation",
    description: "Scroll-stopping visuals and copy that resonate with your audience and drive engagement.",
    gradient: "from-purple-500 to-pink-500",
    bgGradient: "from-purple-500/10 to-pink-500/10",
    glowColor: "rgba(168, 85, 247, 0.4)",
  },
  {
    icon: Globe,
    title: "Web Design",
    description: "High-converting websites that look stunning, load fast, and reflect your brand identity.",
    gradient: "from-blue-500 to-cyan-500",
    bgGradient: "from-blue-500/10 to-cyan-500/10",
    glowColor: "rgba(59, 130, 246, 0.4)",
  },
  {
    icon: Camera,
    title: "Photo & Video",
    description: "Professional photography and cinematic video production tailored for your brand story.",
    gradient: "from-pink-500 to-rose-500",
    bgGradient: "from-pink-500/10 to-rose-500/10",
    glowColor: "rgba(236, 72, 153, 0.4)",
  },
  {
    icon: Film,
    title: "Reels & Social Media",
    description: "Trending reels and social content designed to maximize reach and build loyal communities.",
    gradient: "from-violet-500 to-purple-500",
    bgGradient: "from-violet-500/10 to-purple-500/10",
    glowColor: "rgba(139, 92, 246, 0.4)",
  },
  {
    icon: Megaphone,
    title: "Digital Marketing",
    description: "Data-driven campaigns across platforms to grow your audience and increase conversions.",
    gradient: "from-cyan-500 to-blue-500",
    bgGradient: "from-cyan-500/10 to-blue-500/10",
    glowColor: "rgba(34, 211, 238, 0.4)",
  },
  {
    icon: Palette,
    title: "Branding",
    description: "Complete brand identity systems — logos, guidelines, and visual language that stand out.",
    gradient: "from-orange-500 to-pink-500",
    bgGradient: "from-orange-500/10 to-pink-500/10",
    glowColor: "rgba(249, 115, 22, 0.4)",
  },
];

const Services = () => {
  return (
    <section id="services" className="relative section-padding bg-gradient-dark overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(139, 92, 246, 0.15) 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Animated background blobs */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px] animate-blob" />
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] animate-blob" style={{ animationDelay: "2s" }} />
      <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-pink-500/10 rounded-full blur-[120px] animate-blob" style={{ animationDelay: "4s" }} />

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float-slow ${8 + Math.random() * 12}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Enhanced header */}
        <div className="text-center mb-20">
          <div className="inline-block mb-6 opacity-0 animate-fade-up">
            <div className="relative px-6 py-2 rounded-full border-2 border-purple-500/40 bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-purple-500/10 backdrop-blur-sm">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 blur-lg animate-pulse" />
              <span className="relative flex items-center gap-2 text-sm font-bold tracking-widest uppercase">
                <Sparkles className="w-4 h-4 text-purple-400" />
                <span className="bg-gradient-to-r from-purple-300 to-blue-300 bg-clip-text text-transparent">
                  What We Do
                </span>
              </span>
            </div>
          </div>

          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 opacity-0 animate-fade-up" style={{ animationDelay: "0.15s" }}>
            Services Built for{" "}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                Growth
              </span>
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 rounded-full" />
            </span>
          </h2>
          
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed opacity-0 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            From concept to execution, we craft every detail to help your brand stand out in the digital space.
          </p>
        </div>

        {/* Enhanced services grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <div
              key={service.title}
              className="group relative opacity-0 animate-fade-up"
              style={{ animationDelay: `${0.45 + i * 0.1}s` }}
            >
              {/* Card glow effect */}
              <div 
                className="absolute -inset-0.5 bg-gradient-to-r opacity-0 group-hover:opacity-100 rounded-2xl blur-xl transition-all duration-500"
                style={{
                  background: `linear-gradient(135deg, ${service.glowColor}, transparent)`
                }}
              />
              
              {/* Main card */}
              <div className="relative h-full p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 backdrop-blur-sm hover:border-white/20 transition-all duration-500 group-hover:scale-[1.02] group-hover:-translate-y-2 overflow-hidden">
                {/* Hover gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                {/* Shine effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent" />
                </div>

                {/* Animated corner accents */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-white/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-white/10 to-transparent rounded-tr-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon container */}
                  <div className="relative mb-6">
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.gradient} p-0.5 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                      <div className="w-full h-full rounded-xl bg-background/90 flex items-center justify-center">
                        <service.icon className={`bg-gradient-to-br ${service.gradient} bg-clip-text text-transparent`} size={28} strokeWidth={2} />
                      </div>
                    </div>
                    
                    {/* Icon glow */}
                    <div 
                      className={`absolute inset-0 bg-gradient-to-br ${service.gradient} rounded-xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500`}
                    />
                  </div>

                  {/* Title */}
                  <h3 className="font-display text-xl font-bold mb-3 group-hover:text-white transition-colors duration-300">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-gray-400 leading-relaxed mb-4 group-hover:text-gray-300 transition-colors duration-300">
                    {service.description}
                  </p>

                  {/* Learn more link */}
                  <div className="flex items-center gap-2 text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                    <span className={`bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`}>
                      Learn more
                    </span>
                    <ArrowRight className={`w-4 h-4 bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent group-hover:translate-x-1 transition-transform duration-300`} />
                  </div>
                </div>

                {/* Floating number badge */}
                <div className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-xs font-bold text-gray-500 group-hover:text-white group-hover:border-white/30 transition-all duration-300">
                  {String(i + 1).padStart(2, '0')}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center opacity-0 animate-fade-up" style={{ animationDelay: "1.05s" }}>
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-8 rounded-2xl bg-gradient-to-br from-purple-500/10 via-blue-500/10 to-pink-500/10 border border-white/10 backdrop-blur-sm">
            <div className="flex-1 text-left">
              <h3 className="font-display text-xl font-bold mb-2">Ready to elevate your brand?</h3>
              <p className="text-sm text-gray-400">Let's discuss how we can help you achieve your goals.</p>
            </div>
            <button className="group px-8 py-4 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 font-semibold transition-all duration-300 hover:scale-105 shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50">
              <span className="flex items-center gap-2">
                Get Started
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }

        @keyframes float-slow {
          0%, 100% { 
            transform: translateY(0) translateX(0);
            opacity: 0.2;
          }
          50% { 
            transform: translateY(-100px) translateX(50px);
            opacity: 0.5;
          }
        }

        .animate-blob {
          animation: blob 7s infinite;
        }
      `}</style>
    </section>
  );
};

export default Services;