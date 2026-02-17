import { useState, useEffect, useRef } from "react";

const STATS = [
  { value: "50+", label: "Projects Delivered", icon: "🏆" },
  { value: "30+", label: "Happy Clients", icon: "🤝" },
  { value: "3+", label: "Years Experience", icon: "⚡" },
];

const BOTTOM_STATS = [
  { value: "100%", label: "Client Satisfaction" },
  { value: "24/7", label: "Support Available" },
  { value: "2–5", label: "Days Avg. Delivery" },
  { value: "∞", label: "Creative Ideas" },
];

const TAGS = [
  { label: "Result-Driven",   tw: "text-orange-400 border-orange-400/25 bg-orange-400/10", dot: "bg-orange-400" },
  { label: "Fast Turnaround", tw: "text-sky-400    border-sky-400/25    bg-sky-400/10",    dot: "bg-sky-400"    },
  { label: "Growth Focused",  tw: "text-violet-400 border-violet-400/25 bg-violet-400/10", dot: "bg-violet-400" },
];

function useCounter(target, duration = 1800) {
  const [count, setCount] = useState(0);
  const started = useRef(false);
  const ref = useRef();
  useEffect(() => {
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        const numeric = parseInt(target.replace(/\D/g, ""));
        const suffix = target.replace(/[\d]/g, "");
        if (!numeric) { setCount(target); return; }
        let start = 0;
        const step = Math.ceil(numeric / (duration / 16));
        const timer = setInterval(() => {
          start += step;
          if (start >= numeric) { setCount(numeric + suffix); clearInterval(timer); }
          else setCount(start + suffix);
        }, 16);
      }
    }, { threshold: 0.4 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [target, duration]);
  return [count, ref];
}

function StatCard({ stat }) {
  const [count, ref] = useCounter(stat.value);
  return (
    <div ref={ref} className="bg-[#141419] border border-white/[0.06] rounded-[18px] p-6 text-center transition-all duration-300 hover:border-orange-500/30 hover:-translate-y-1 cursor-default">
      <span className="text-2xl block mb-2.5">{stat.icon}</span>
      <div className="font-extrabold text-3xl leading-none mb-1.5 bg-gradient-to-br from-orange-400 to-violet-500 bg-clip-text text-transparent">
        {count || stat.value}
      </div>
      <div className="text-[11px] text-white/40 uppercase tracking-widest font-semibold">{stat.label}</div>
    </div>
  );
}

const About = () => (
  <section id="about" className="relative font-sans bg-[#0A0A0F] text-[#E8E4DC] py-24 px-6 overflow-hidden">

    {/* Ambient blobs */}
    <div className="absolute w-[500px] h-[500px] rounded-full bg-orange-500 opacity-[0.12] blur-[100px] -top-24 -right-24 pointer-events-none z-0" />
    <div className="absolute w-[400px] h-[400px] rounded-full bg-sky-500 opacity-[0.12] blur-[100px] -bottom-20 -left-20 pointer-events-none z-0" />

    <div className="relative z-10 max-w-[1200px] mx-auto">

      {/* Header */}
      <div className="flex items-start justify-between gap-10 mb-[72px] flex-wrap">
        <div>
          <div className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.2em] uppercase text-orange-400 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse" />
            About SV Digital Studio
          </div>
          <h2 className="text-[clamp(44px,6vw,80px)] font-extrabold leading-none tracking-[-0.03em] m-0">
            <span className="text-[#E8E4DC]">A Creative</span>
            <span className="block bg-gradient-to-br from-orange-400 via-pink-400 to-violet-500 bg-clip-text text-transparent">Studio That</span>
            <span className="block" style={{ WebkitTextStroke: "1.5px rgba(232,228,220,0.25)", WebkitTextFillColor: "transparent" }}>Means Business</span>
          </h2>
        </div>

        <div className="max-w-[420px] self-end">
          <p className="text-[17px] leading-[1.75] text-[#E8E4DC]/65 mb-5 font-light">
            <strong className="text-[#E8E4DC] font-semibold">SV Digital Studio</strong> is a Tunisian creative agency specializing in digital marketing, content creation, and web design. We partner with brands, entrepreneurs, and businesses to build powerful online presences that convert visitors into loyal customers.
          </p>
          <p className="text-[17px] leading-[1.75] text-[#E8E4DC]/65 font-light mb-2">
            Our team blends <strong className="text-[#E8E4DC] font-semibold">creative storytelling</strong> with <strong className="text-[#E8E4DC] font-semibold">performance marketing strategies</strong>, ensuring every pixel and every campaign serves your growth objectives.
          </p>
          <div className="flex flex-wrap gap-2.5 mt-2">
            {TAGS.map((t) => (
              <span key={t.label} className={`inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold tracking-[0.04em] border transition-transform duration-200 hover:-translate-y-0.5 cursor-default ${t.tw}`}>
                <span className={`w-1 h-1 rounded-full ${t.dot}`} />
                {t.label}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Main grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

        {/* Image card */}
        <div className="relative rounded-3xl overflow-hidden bg-[#141419] border border-white/[0.06]" style={{ aspectRatio: "4/5" }}>
          <img className="w-full h-full object-cover opacity-[0.85] transition-opacity duration-500 hover:opacity-100" src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80" alt="SV Digital Studio team" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0F]/95 via-[#0A0A0F]/30 to-transparent" />
          <div className="absolute top-5 left-5 bg-orange-500 text-white text-[11px] font-bold tracking-[0.1em] uppercase px-3.5 py-1.5 rounded-full">🇹🇳 Tunisia Based</div>
          <div className="absolute bottom-6 left-6 right-6">
            <div className="inline-flex items-center gap-1.5 bg-white/[0.08] border border-white/[0.12] backdrop-blur-md rounded-full px-3 py-1 text-xs text-[#E8E4DC]/70 mb-3">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
              Tunis, Tunisia
            </div>
            <h3 className="text-[22px] font-bold text-[#E8E4DC] m-0 mb-1.5">Where Creativity Meets Strategy</h3>
            <p className="text-[13px] text-[#E8E4DC]/55 m-0 font-light">Delivering world-class digital solutions since 2021</p>
          </div>
        </div>

        {/* Right column */}
        <div className="flex flex-col gap-4">

          {/* Stats */}
          <div className="grid grid-cols-3 gap-3">
            {STATS.map((s) => <StatCard key={s.label} stat={s} />)}
          </div>

          {/* Mission */}
          <div className="relative rounded-2xl p-7 overflow-hidden bg-gradient-to-br from-orange-500/[0.08] to-violet-500/[0.08] border border-orange-500/20">
            <div className="absolute right-5 -top-2 text-[120px] font-extrabold text-orange-500/[0.06] leading-none pointer-events-none select-none">"</div>
            <div className="text-[10px] font-bold tracking-[0.2em] uppercase text-orange-400 mb-3">Our Mission</div>
            <p className="text-[19px] font-semibold leading-relaxed text-[#E8E4DC] m-0">
              "We don't just build brands — we craft experiences that make your audience stop, look, and take action."
            </p>
          </div>

          {/* Social proof */}
          <div className="relative rounded-2xl p-7 bg-[#141419] border border-white/[0.06] flex items-center gap-6 overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_50%,rgba(255,107,53,0.06)_0%,transparent_70%)]" />
            <div className="flex items-center relative z-10">
              {["https://i.pravatar.cc/100?img=1","https://i.pravatar.cc/100?img=2","https://i.pravatar.cc/100?img=3","https://i.pravatar.cc/100?img=4"].map((src, i) => (
                <div key={i} className="w-11 h-11 rounded-full border-2 border-[#0A0A0F] overflow-hidden flex-shrink-0" style={{ marginLeft: i === 0 ? 0 : "-12px" }}>
                  <img src={src} alt="client" className="w-full h-full object-cover" />
                </div>
              ))}
              <div className="w-11 h-11 rounded-full border-2 border-[#0A0A0F] bg-white/[0.08] flex items-center justify-center text-[11px] font-bold text-[#E8E4DC]/60 flex-shrink-0" style={{ marginLeft: "-12px" }}>30+</div>
            </div>
            <div className="relative z-10">
              <div className="text-orange-400 text-sm tracking-widest mb-1">★★★★★</div>
              <strong className="block text-[18px] font-bold text-[#E8E4DC] mb-1">Trusted by 30+ clients</strong>
              <span className="text-[13px] text-[#E8E4DC]/50">From startups to established brands</span>
            </div>
          </div>

          {/* CTA */}
          <div className="flex items-center justify-between gap-4 flex-wrap">
            <a href="#contact" className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-gradient-to-r from-orange-500 to-pink-500 text-white text-[15px] font-bold rounded-full cursor-pointer no-underline transition-all duration-200 hover:-translate-y-0.5 shadow-[0_8px_32px_rgba(255,107,53,0.25)] hover:shadow-[0_12px_40px_rgba(255,107,53,0.4)]">
              Start a Project
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
            <span className="text-[13px] text-[#E8E4DC]/40 font-light">
              <strong className="text-[#E8E4DC]/70 font-semibold">Free consultation</strong> — no commitment needed
            </span>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mt-5 bg-[#141419] border border-white/[0.06] rounded-2xl p-7">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-5">
          {BOTTOM_STATS.map((s) => (
            <div key={s.label} className="text-center px-2 py-2 rounded-xl cursor-default transition-colors duration-200 hover:bg-white/[0.04]">
              <div className="text-[28px] font-extrabold text-[#E8E4DC] leading-none mb-1">{s.value}</div>
              <div className="text-[11px] text-[#E8E4DC]/40 uppercase tracking-widest font-semibold">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

    </div>
  </section>
);

export default About;