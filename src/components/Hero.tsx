import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle, Sparkles } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background with parallax effect */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Creative studio workspace"
          className="w-full h-full object-cover scale-105 animate-subtle-zoom"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/60 via-background/80 to-blue-900/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
      </div>

      {/* Enhanced animated grid overlay */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(to right, rgba(139, 92, 246, 0.1) 1px, transparent 1px),
                           linear-gradient(to bottom, rgba(139, 92, 246, 0.1) 1px, transparent 1px)`,
          backgroundSize: '80px 80px',
          animation: 'grid-flow 20s linear infinite'
        }} />
      </div>

      {/* Multiple glow accents for depth */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-purple-500/20 blur-[150px] animate-glow-pulse" />
      <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] rounded-full bg-blue-500/20 blur-[120px] animate-glow-pulse" style={{ animationDelay: "1s" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-electric/10 blur-[180px] animate-glow-pulse" style={{ animationDelay: "2s" }} />

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${5 + Math.random() * 10}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* Enhanced badge with glow */}
        <div className="inline-block mb-8 px-5 py-2 rounded-full border-2 border-purple-500/40 bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-purple-500/10 backdrop-blur-sm opacity-0 animate-fade-up shadow-lg shadow-purple-500/20" style={{ animationDelay: "0.1s" }}>
          <span className="flex items-center gap-2 text-sm font-semibold tracking-wider uppercase">
            <Sparkles className="w-4 h-4 text-purple-400 animate-pulse" />
            <span className="bg-gradient-to-r from-purple-300 via-blue-300 to-purple-300 bg-clip-text text-transparent">
              Digital Marketing & Creative Studio — Tunisia
            </span>
            <Sparkles className="w-4 h-4 text-purple-400 animate-pulse" />
          </span>
        </div>

        {/* Enhanced headline with better gradient */}
        <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold leading-[1.1] tracking-tight mb-8 opacity-0 animate-fade-up" style={{ animationDelay: "0.25s" }}>
          <span className="block mb-2">We Build Digital</span>
          <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(168,85,247,0.5)]">
            Experiences That Convert
          </span>
        </h1>

        {/* Enhanced description */}
        <p className="max-w-3xl mx-auto text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed opacity-0 animate-fade-up font-light" style={{ animationDelay: "0.4s" }}>
          Creative content, digital marketing & web design solutions crafted to
          <span className="text-purple-300 font-medium"> elevate your brand</span> and drive real results.
        </p>

        {/* Enhanced CTA buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 opacity-0 animate-fade-up" style={{ animationDelay: "0.55s" }}>
          <Button 
            variant="gold" 
            size="lg" 
            className="text-lg px-10 py-6 rounded-full shadow-2xl shadow-purple-500/30 hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105 group" 
            asChild
          >
            <a href="#contact">
              Get a Quote 
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </a>
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="text-lg px-10 py-6 rounded-full bg-white/5 border-2 border-white/20 backdrop-blur-sm hover:bg-white/10 hover:border-white/40 transition-all duration-300 hover:scale-105 group" 
            asChild
          >
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="mr-2 group-hover:rotate-12 transition-transform" size={20} /> 
              DM for Business
            </a>
          </Button>
        </div>

        {/* Stats or trust indicators */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-8 md:gap-12 opacity-0 animate-fade-up text-sm text-gray-400" style={{ animationDelay: "0.7s" }}>
          <div className="flex flex-col items-center">
            <span className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">500+</span>
            <span className="mt-1">Projects Delivered</span>
          </div>
          <div className="hidden sm:block w-px h-12 bg-white/20" />
          <div className="flex flex-col items-center">
            <span className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">98%</span>
            <span className="mt-1">Client Satisfaction</span>
          </div>
          <div className="hidden sm:block w-px h-12 bg-white/20" />
          <div className="flex flex-col items-center">
            <span className="text-3xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">5+</span>
            <span className="mt-1">Years Experience</span>
          </div>
        </div>
      </div>

      {/* Enhanced bottom fade with glow */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background via-background/50 to-transparent" />
      
      <style jsx>{`
        @keyframes subtle-zoom {
          0%, 100% { transform: scale(1.05); }
          50% { transform: scale(1.08); }
        }
        @keyframes grid-flow {
          0% { transform: translateY(0); }
          100% { transform: translateY(80px); }
        }
        @keyframes float {
          0%, 100% { 
            transform: translateY(0) translateX(0);
            opacity: 0;
          }
          10% { opacity: 0.3; }
          50% { 
            transform: translateY(-100px) translateX(50px);
            opacity: 0.6;
          }
          90% { opacity: 0.3; }
        }
      `}</style>
    </section>
  );
};

export default Hero;