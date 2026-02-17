import { ExternalLink, Play, Sparkles, ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Luxe Cosmetics Rebrand",
    category: "Branding & Web Design",
    gradient: "from-purple-500 to-pink-500",
    bgGradient: "from-purple-500/20 to-pink-500/20",
    description: "Complete brand transformation with modern identity",
    metrics: "+150% engagement",
    image: "/path-to-your-image.jpg", // Add your image path here
  },
  {
    title: "Alliance biomedical ",
    category: "Reels & Social Media",
    gradient: "from-blue-500 to-cyan-500",
    bgGradient: "from-blue-500/20 to-cyan-500/20",
    description: "Viral social media strategy & content creation",
    metrics: "2M+ views",
    image: "src/assets/alliance.png", // Add your image path here
  },
  {
    title: "Artisan Café Launch",
    category: "Photo & Video Production",
    gradient: "from-pink-500 to-orange-500",
    bgGradient: "from-pink-500/20 to-orange-500/20",
    description: "Cinematic brand story & visual content",
    metrics: "+200% footfall",
    image: "/path-to-your-image.jpg", // Add your image path here
  },
  {
    title: "TechVault E-Commerce",
    category: "Web Design & Marketing",
    gradient: "from-cyan-500 to-purple-500",
    bgGradient: "from-cyan-500/20 to-purple-500/20",
    description: "High-converting online store & campaigns",
    metrics: "+180% sales",
    image: "/path-to-your-image.jpg", // Add your image path here
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="relative section-padding bg-gradient-dark overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(139, 92, 246, 0.15) 1px, transparent 0)`,
          backgroundSize: '60px 60px'
        }} />
      </div>

      {/* Animated background blobs */}
      <div className="absolute top-1/4 right-10 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[150px] animate-blob" />
      <div className="absolute bottom-1/4 left-10 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[150px] animate-blob" style={{ animationDelay: "3s" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-pink-500/10 rounded-full blur-[180px] animate-blob" style={{ animationDelay: "1.5s" }} />

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: i % 3 === 0 ? 'rgba(139, 92, 246, 0.3)' : i % 3 === 1 ? 'rgba(59, 130, 246, 0.3)' : 'rgba(236, 72, 153, 0.3)',
              animation: `float-particle ${8 + Math.random() * 12}s ease-in-out infinite`,
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
                  Our Work
                </span>
              </span>
            </div>
          </div>

          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 opacity-0 animate-fade-up" style={{ animationDelay: "0.15s" }}>
            Selected{" "}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                Projects
              </span>
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 rounded-full" />
            </span>
          </h2>
          
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed opacity-0 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            A glimpse into the brands we've helped grow through creative strategy and digital execution.
          </p>
        </div>

        {/* Enhanced projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <div
              key={project.title}
              className="group relative opacity-0 animate-fade-up"
              style={{ animationDelay: `${0.45 + i * 0.12}s` }}
            >
              {/* Card glow effect */}
              <div className={`absolute -inset-1 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-30 rounded-3xl blur-2xl transition-all duration-700`} />
              
              {/* Main card */}
              <div className="relative overflow-hidden rounded-2xl border border-white/10 backdrop-blur-sm hover:border-white/20 transition-all duration-500 cursor-pointer group-hover:scale-[1.02]">
                {/* Background with image */}
                <div className="aspect-[16/10] relative overflow-hidden bg-gray-900">
                  {/* Project Image */}
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Image overlay gradients */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.bgGradient} mix-blend-overlay opacity-60 group-hover:opacity-80 transition-opacity duration-500`} />
                  
                  {/* Animated vignette */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                    <div className="absolute inset-0" style={{
                      background: `radial-gradient(circle at 50% 50%, transparent 40%, rgba(0,0,0,0.6) 100%)`
                    }} />
                  </div>

                  {/* Animated grid pattern overlay */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500">
                    <div className="absolute inset-0" style={{
                      backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
                                       linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                      backgroundSize: '40px 40px',
                      transform: 'perspective(500px) rotateX(60deg)',
                      transformOrigin: 'center bottom'
                    }} />
                  </div>

                  {/* Hover shine effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent" />
                  </div>

                  {/* Color filter overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-20 mix-blend-color transition-opacity duration-700`} />

                  {/* Floating play button for video projects */}
                  {project.category.includes("Video") && (
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:scale-110">
                      <div className="relative">
                        <div className="absolute inset-0 bg-white/30 rounded-full blur-xl animate-pulse" />
                        <div className="relative w-20 h-20 rounded-full bg-white/95 backdrop-blur-sm flex items-center justify-center shadow-2xl">
                          <Play className="w-8 h-8 text-gray-900 ml-1" fill="currentColor" />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Content container */}
                  <div className="absolute inset-0 flex flex-col justify-between p-8">
                    {/* Top section */}
                    <div className="flex items-center justify-between">
                      <div className={`px-4 py-2 rounded-full bg-black/40 backdrop-blur-md border border-white/20 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500`}>
                        <span className="text-xs font-bold tracking-wider uppercase text-white">
                          {project.category}
                        </span>
                      </div>
                      <div className="w-10 h-10 rounded-full bg-black/40 backdrop-blur-md border border-white/20 flex items-center justify-center transform -translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-75 hover:bg-white/20">
                        <ExternalLink className="w-5 h-5 text-white" />
                      </div>
                    </div>

                    {/* Bottom content */}
                    <div className="relative z-10">
                      <h3 className="font-display text-2xl md:text-3xl font-bold text-white mb-3 drop-shadow-2xl transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                        {project.title}
                      </h3>
                      <p className="text-sm text-white/90 mb-4 drop-shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100 transform translate-y-2 group-hover:translate-y-0">
                        {project.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className={`px-4 py-2 rounded-full bg-gradient-to-r ${project.gradient} text-white text-sm font-bold shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-500 delay-150 transform translate-y-2 group-hover:translate-y-0`}>
                          {project.metrics}
                        </div>
                        <div className="flex items-center gap-2 text-white opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200 group-hover:gap-3 transform translate-y-2 group-hover:translate-y-0">
                          <span className="text-sm font-medium drop-shadow-lg">View Project</span>
                          <ArrowUpRight className="w-5 h-5 drop-shadow-lg" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Corner accent */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ clipPath: 'polygon(100% 0, 100% 100%, 0 0)' }} />
                  
                  {/* Bottom corner accent */}
                  <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ clipPath: 'polygon(0 100%, 100% 100%, 0 0)' }} />
                </div>

                {/* Bottom glow line */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center opacity-0 animate-fade-up" style={{ animationDelay: "0.95s" }}>
          <div className="inline-flex flex-col items-center gap-6 p-10 rounded-3xl bg-gradient-to-br from-purple-500/10 via-blue-500/10 to-pink-500/10 border border-white/10 backdrop-blur-sm max-w-3xl">
            <div className="flex items-center gap-3 px-5 py-2 rounded-full bg-white/5 border border-white/10">
              <Sparkles className="w-5 h-5 text-purple-400 animate-pulse" />
              <span className="text-sm font-semibold text-gray-300">Have a project in mind?</span>
            </div>
            <h3 className="font-display text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-300 via-pink-300 to-blue-300 bg-clip-text text-transparent">
              Let's Create Something Amazing
            </h3>
            <p className="text-gray-400 max-w-xl">
              Every great project starts with a conversation. Share your vision and let's turn it into reality.
            </p>
            <button className="group mt-2 px-10 py-5 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 hover:from-purple-600 hover:via-pink-600 hover:to-blue-600 font-bold text-lg transition-all duration-300 hover:scale-105 shadow-2xl shadow-purple-500/30 hover:shadow-purple-500/50 relative overflow-hidden">
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              <span className="relative flex items-center gap-2">
                Start Your Project
                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </span>
            </button>
            
            {/* Trust indicators */}
            <div className="flex items-center gap-8 mt-4 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span>Free Consultation</span>
              </div>
              <div className="w-px h-4 bg-white/20" />
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                <span>Fast Response</span>
              </div>
              <div className="w-px h-4 bg-white/20" />
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
                <span>Flexible Pricing</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(40px, -60px) scale(1.15);
          }
          66% {
            transform: translate(-30px, 30px) scale(0.9);
          }
        }

        @keyframes float-particle {
          0%, 100% { 
            transform: translateY(0) translateX(0);
            opacity: 0.2;
          }
          50% { 
            transform: translateY(-100px) translateX(60px);
            opacity: 0.6;
          }
        }

        .animate-blob {
          animation: blob 8s infinite;
        }
      `}</style>
    </section>
  );
};

export default Portfolio;