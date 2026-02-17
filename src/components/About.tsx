import { Award, Users, Zap, Sparkles, TrendingUp, Target, Rocket } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="relative section-padding overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-purple-950/5 to-background" />
      
      {/* Animated grid background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(to right, rgba(139, 92, 246, 0.1) 1px, transparent 1px),
                           linear-gradient(to bottom, rgba(139, 92, 246, 0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }} />
      </div>

      {/* Glow effects */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px] animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] animate-pulse-slow" style={{ animationDelay: "1.5s" }} />

      {/* Floating shapes */}
      <div className="absolute top-20 right-20 w-32 h-32 border-2 border-purple-500/20 rounded-full animate-float-slow" />
      <div className="absolute bottom-20 left-20 w-24 h-24 border-2 border-blue-500/20 rotate-45 animate-float-slow" style={{ animationDelay: "1s" }} />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-block opacity-0 animate-fade-up">
              <div className="relative px-5 py-2 rounded-full border-2 border-purple-500/40 bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-purple-500/10 backdrop-blur-sm">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 blur-lg animate-pulse" />
                <span className="relative flex items-center gap-2 text-sm font-bold tracking-widest uppercase">
                  <Sparkles className="w-4 h-4 text-purple-400" />
                  <span className="bg-gradient-to-r from-purple-300 to-blue-300 bg-clip-text text-transparent">
                    About Us
                  </span>
                </span>
              </div>
            </div>

            {/* Heading */}
            <div className="opacity-0 animate-fade-up" style={{ animationDelay: "0.15s" }}>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-4">
                <span className="block mb-2">A Creative Studio</span>
                <span className="block">That{" "}
                  <span className="relative inline-block">
                    <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                      Means Business
                    </span>
                    <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 rounded-full" />
                  </span>
                </span>
              </h2>
            </div>

            {/* Description */}
            <div className="space-y-5 opacity-0 animate-fade-up" style={{ animationDelay: "0.3s" }}>
              <p className="text-lg text-gray-300 leading-relaxed">
                <span className="font-semibold text-purple-300">SV Digital Studio</span> is a Tunisian creative agency specializing in digital marketing,
                content creation, and web design. We partner with brands, entrepreneurs, and
                businesses to build powerful online presences that{" "}
                <span className="relative inline-block">
                  <span className="text-blue-300 font-semibold">convert visitors into loyal customers</span>
                  <span className="absolute -bottom-0.5 left-0 w-full h-0.5 bg-gradient-to-r from-blue-400 to-purple-400" />
                </span>.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Our team blends{" "}
                <span className="text-pink-300 font-semibold">creative storytelling</span> with{" "}
                <span className="text-purple-300 font-semibold">performance marketing strategies</span>,
                ensuring every pixel and every campaign serves your growth objectives.
              </p>
            </div>

            {/* Feature highlights */}
            <div className="flex flex-wrap gap-3 opacity-0 animate-fade-up" style={{ animationDelay: "0.45s" }}>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/30 backdrop-blur-sm">
                <Target className="w-4 h-4 text-purple-400" />
                <span className="text-sm font-medium text-purple-200">Result-Driven</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 backdrop-blur-sm">
                <Rocket className="w-4 h-4 text-blue-400" />
                <span className="text-sm font-medium text-blue-200">Fast Turnaround</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-pink-500/10 border border-pink-500/30 backdrop-blur-sm">
                <TrendingUp className="w-4 h-4 text-pink-400" />
                <span className="text-sm font-medium text-pink-200">Growth Focused</span>
              </div>
            </div>
          </div>

          {/* Enhanced Stats */}
          <div className="relative">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 rounded-3xl blur-3xl" />
            
            <div className="relative space-y-6">
              {[
                { 
                  icon: Award, 
                  stat: "50+", 
                  label: "Projects Delivered",
                  gradient: "from-purple-500 to-pink-500",
                  bgGradient: "from-purple-500/10 to-pink-500/10",
                  delay: "0.6s"
                },
                { 
                  icon: Users, 
                  stat: "30+", 
                  label: "Happy Clients",
                  gradient: "from-blue-500 to-cyan-500",
                  bgGradient: "from-blue-500/10 to-cyan-500/10",
                  delay: "0.75s"
                },
                { 
                  icon: Zap, 
                  stat: "3+", 
                  label: "Years of Experience",
                  gradient: "from-pink-500 to-purple-500",
                  bgGradient: "from-pink-500/10 to-purple-500/10",
                  delay: "0.9s"
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="group relative opacity-0 animate-fade-up"
                  style={{ animationDelay: item.delay }}
                >
                  {/* Card glow effect */}
                  <div className={`absolute -inset-0.5 bg-gradient-to-r ${item.gradient} opacity-0 group-hover:opacity-30 rounded-2xl blur-xl transition-all duration-500`} />
                  
                  {/* Main card */}
                  <div className="relative flex items-center gap-6 p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 backdrop-blur-sm hover:border-white/20 transition-all duration-500 group-hover:scale-[1.02] overflow-hidden">
                    {/* Hover gradient overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${item.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                    
                    {/* Animated corner accent */}
                    <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-white/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* Icon container */}
                    <div className="relative shrink-0">
                      <div className={`w-20 h-20 rounded-xl bg-gradient-to-br ${item.gradient} p-0.5 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                        <div className="w-full h-full rounded-xl bg-background/90 flex items-center justify-center">
                          <item.icon className={`bg-gradient-to-br ${item.gradient} bg-clip-text text-transparent`} size={32} strokeWidth={2} />
                        </div>
                      </div>
                      
                      {/* Icon glow */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} rounded-xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500`} />
                    </div>

                    {/* Content */}
                    <div className="relative z-10 flex-1">
                      <div className={`font-display text-4xl md:text-5xl font-extrabold mb-1 bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent`}>
                        {item.stat}
                      </div>
                      <div className="text-base font-medium text-gray-300 group-hover:text-white transition-colors duration-300">
                        {item.label}
                      </div>
                    </div>

                    {/* Floating sparkle */}
                    <Sparkles className={`absolute top-4 right-4 w-5 h-5 bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:rotate-12`} />
                  </div>
                </div>
              ))}

              {/* Bottom decoration card */}
              <div className="relative p-6 rounded-2xl bg-gradient-to-br from-purple-500/10 via-blue-500/10 to-pink-500/10 border border-white/10 backdrop-blur-sm opacity-0 animate-fade-up" style={{ animationDelay: "1.05s" }}>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm font-semibold text-purple-300 mb-1">Ready to grow?</div>
                    <div className="text-xs text-gray-400">Let's create something amazing together</div>
                  </div>
                  <div className="flex gap-2">
                    <div className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
                    <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" style={{ animationDelay: "0.2s" }} />
                    <div className="w-2 h-2 rounded-full bg-pink-400 animate-pulse" style={{ animationDelay: "0.4s" }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom stats bar */}
        <div className="mt-20 opacity-0 animate-fade-up" style={{ animationDelay: "1.2s" }}>
          <div className="p-8 rounded-2xl bg-gradient-to-r from-purple-500/5 via-blue-500/5 to-pink-500/5 border border-white/10 backdrop-blur-sm">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { value: "100%", label: "Client Satisfaction" },
                { value: "24/7", label: "Support Available" },
                { value: "2-5", label: "Days Avg. Delivery" },
                { value: "∞", label: "Creative Ideas" },
              ].map((item, i) => (
                <div key={item.label} className="text-center group cursor-default">
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                    {item.value}
                  </div>
                  <div className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 0.5;
            transform: scale(1.05);
          }
        }

        @keyframes float-slow {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
            opacity: 0.3;
          }
          50% {
            transform: translateY(-20px) rotate(5deg);
            opacity: 0.5;
          }
        }

        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }

        .animate-float-slow {
          animation: float-slow 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default About;