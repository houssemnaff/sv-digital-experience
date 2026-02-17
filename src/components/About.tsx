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
  { label: "Result-Driven", color: "#FF6B35" },
  { label: "Fast Turnaround", color: "#00C2FF" },
  { label: "Growth Focused", color: "#A259FF" },
];

// Animated counter hook
function useCounter(target, duration = 1800) {
  const [count, setCount] = useState(0);
  const started = useRef(false);
  const ref = useRef();

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
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
      },
      { threshold: 0.4 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [target, duration]);

  return [count, ref];
}

function StatCard({ stat, index }) {
  const [count, ref] = useCounter(stat.value);
  return (
    <div
      ref={ref}
      className="stat-card"
      style={{ animationDelay: `${0.1 * index}s` }}
    >
      <span className="stat-icon">{stat.icon}</span>
      <div className="stat-value">{count || stat.value}</div>
      <div className="stat-label">{stat.label}</div>
    </div>
  );
}

const About = () => {
  return (
    <section id="about" className="about-section">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@400;600;700;800&family=DM+Sans:ital,wght@0,300;0,400;1,300&display=swap');

        .about-section {
          font-family: 'DM Sans', sans-serif;
          background: #0A0A0F;
          color: #E8E4DC;
          padding: 100px 24px;
          position: relative;
          overflow: hidden;
        }

        /* Noise texture overlay */
        .about-section::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.05'/%3E%3C/svg%3E");
          opacity: 0.4;
          pointer-events: none;
          z-index: 0;
        }

        /* Ambient light blob */
        .ambient-blob {
          position: absolute;
          border-radius: 50%;
          filter: blur(100px);
          opacity: 0.12;
          pointer-events: none;
          z-index: 0;
        }
        .blob-1 {
          width: 500px; height: 500px;
          background: #FF6B35;
          top: -100px; right: -100px;
        }
        .blob-2 {
          width: 400px; height: 400px;
          background: #00C2FF;
          bottom: -80px; left: -80px;
        }

        .about-inner {
          position: relative;
          z-index: 1;
          max-width: 1200px;
          margin: 0 auto;
        }

        /* ── HEADER ZONE ── */
        .about-header {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 40px;
          margin-bottom: 72px;
          flex-wrap: wrap;
        }

        .eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #FF6B35;
          margin-bottom: 20px;
        }
        .eyebrow-dot {
          width: 6px; height: 6px;
          background: #FF6B35;
          border-radius: 50%;
          animation: blink 2s ease-in-out infinite;
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.2; }
        }

        .about-title {
          font-family: 'Bricolage Grotesque', sans-serif;
          font-size: clamp(44px, 6vw, 80px);
          font-weight: 800;
          line-height: 1.0;
          letter-spacing: -0.03em;
          margin: 0;
        }
        .title-plain { color: #E8E4DC; }
        .title-accent {
          display: block;
          background: linear-gradient(135deg, #FF6B35 0%, #FF3CAC 50%, #A259FF 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .title-outline {
          display: block;
          -webkit-text-stroke: 1.5px rgba(232,228,220,0.25);
          -webkit-text-fill-color: transparent;
        }

        .about-lead {
          max-width: 420px;
          align-self: flex-end;
        }
        .about-lead p {
          font-size: 17px;
          line-height: 1.75;
          color: rgba(232,228,220,0.65);
          margin: 0 0 20px;
          font-weight: 300;
        }
        .about-lead p strong {
          color: #E8E4DC;
          font-weight: 600;
        }

        /* Tags */
        .tag-row {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-top: 8px;
        }
        .tag {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          padding: 7px 16px;
          border-radius: 100px;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.04em;
          border: 1px solid;
          transition: transform 0.2s, box-shadow 0.2s;
          cursor: default;
        }
        .tag:hover {
          transform: translateY(-2px);
        }
        .tag-dot {
          width: 5px; height: 5px;
          border-radius: 50%;
        }

        /* ── GRID ── */
        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr; }
          .about-header { flex-direction: column; }
        }

        /* ── IMAGE CARD ── */
        .image-card {
          position: relative;
          border-radius: 24px;
          overflow: hidden;
          background: #141419;
          border: 1px solid rgba(255,255,255,0.06);
          aspect-ratio: 4/5;
        }

        .img-bg {
          width: 100%; height: 100%;
          object-fit: cover;
          opacity: 0.85;
          transition: opacity 0.5s;
        }
        .image-card:hover .img-bg { opacity: 1; }

        .image-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to top,
            rgba(10,10,15,0.95) 0%,
            rgba(10,10,15,0.3) 50%,
            transparent 100%
          );
        }

        .image-badge {
          position: absolute;
          top: 20px;
          left: 20px;
          background: rgba(255,107,53,0.95);
          color: white;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          padding: 6px 14px;
          border-radius: 100px;
          backdrop-filter: blur(8px);
        }

        .image-footer {
          position: absolute;
          bottom: 24px;
          left: 24px;
          right: 24px;
        }
        .image-footer h3 {
          font-family: 'Bricolage Grotesque', sans-serif;
          font-size: 22px;
          font-weight: 700;
          margin: 0 0 6px;
          color: #E8E4DC;
        }
        .image-footer p {
          font-size: 13px;
          color: rgba(232,228,220,0.55);
          margin: 0;
          font-weight: 300;
        }

        .location-pill {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: rgba(255,255,255,0.08);
          border: 1px solid rgba(255,255,255,0.12);
          backdrop-filter: blur(8px);
          border-radius: 100px;
          padding: 5px 12px;
          font-size: 12px;
          color: rgba(232,228,220,0.7);
          margin-bottom: 12px;
        }

        /* ── RIGHT COLUMN ── */
        .right-col {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        /* Stats */
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 12px;
        }
        .stat-card {
          background: #141419;
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 18px;
          padding: 24px 16px;
          text-align: center;
          transition: border-color 0.3s, transform 0.3s;
          animation: fadeUp 0.6s ease both;
          cursor: default;
        }
        .stat-card:hover {
          border-color: rgba(255,107,53,0.3);
          transform: translateY(-4px);
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .stat-icon { font-size: 24px; display: block; margin-bottom: 10px; }
        .stat-value {
          font-family: 'Bricolage Grotesque', sans-serif;
          font-size: 32px;
          font-weight: 800;
          background: linear-gradient(135deg, #FF6B35, #A259FF);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          line-height: 1;
          margin-bottom: 6px;
        }
        .stat-label {
          font-size: 11px;
          color: rgba(232,228,220,0.45);
          text-transform: uppercase;
          letter-spacing: 0.08em;
          font-weight: 600;
        }

        /* Mission card */
        .mission-card {
          background: linear-gradient(135deg, rgba(255,107,53,0.08), rgba(162,89,255,0.08));
          border: 1px solid rgba(255,107,53,0.2);
          border-radius: 20px;
          padding: 28px;
          position: relative;
          overflow: hidden;
        }
        .mission-card::after {
          content: '"';
          position: absolute;
          right: 20px;
          top: -10px;
          font-size: 120px;
          font-family: 'Bricolage Grotesque', sans-serif;
          font-weight: 800;
          color: rgba(255,107,53,0.06);
          line-height: 1;
          pointer-events: none;
        }
        .mission-label {
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #FF6B35;
          margin-bottom: 12px;
        }
        .mission-text {
          font-family: 'Bricolage Grotesque', sans-serif;
          font-size: 19px;
          font-weight: 600;
          line-height: 1.5;
          color: #E8E4DC;
          margin: 0;
        }

        /* Bottom bar */
        .bottom-bar {
          margin-top: 20px;
          background: #141419;
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 20px;
          padding: 28px;
        }
        .bottom-bar-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }
        @media (max-width: 600px) {
          .bottom-bar-grid { grid-template-columns: repeat(2, 1fr); }
          .stats-grid { grid-template-columns: 1fr; }
        }
        .bottom-stat {
          text-align: center;
          padding: 8px;
          border-radius: 12px;
          transition: background 0.25s;
          cursor: default;
        }
        .bottom-stat:hover { background: rgba(255,255,255,0.04); }
        .bottom-stat-value {
          font-family: 'Bricolage Grotesque', sans-serif;
          font-size: 28px;
          font-weight: 800;
          color: #E8E4DC;
          line-height: 1.1;
          margin-bottom: 4px;
        }
        .bottom-stat-label {
          font-size: 11px;
          color: rgba(232,228,220,0.4);
          text-transform: uppercase;
          letter-spacing: 0.1em;
          font-weight: 600;
        }
        .bottom-divider {
          width: 1px;
          background: rgba(255,255,255,0.06);
          border: none;
          align-self: stretch;
          margin: 0;
        }

        /* ── Creative SVG illustration ── */
        .svg-card {
          background: #141419;
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 20px;
          padding: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 24px;
          overflow: hidden;
          position: relative;
        }
        .svg-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse at 30% 50%, rgba(255,107,53,0.06) 0%, transparent 70%);
        }

        .avatar-stack {
          display: flex;
          align-items: center;
        }
        .avatar {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          border: 2px solid #0A0A0F;
          margin-left: -12px;
          overflow: hidden;
          flex-shrink: 0;
        }
        .avatar:first-child { margin-left: 0; }
        .avatar img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .avatar-fallback {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 16px;
          font-weight: 700;
          font-family: 'Bricolage Grotesque', sans-serif;
        }

        .social-proof {
          position: relative;
          z-index: 1;
        }
        .social-proof strong {
          display: block;
          font-family: 'Bricolage Grotesque', sans-serif;
          font-size: 18px;
          font-weight: 700;
          color: #E8E4DC;
          margin-bottom: 4px;
        }
        .social-proof span {
          font-size: 13px;
          color: rgba(232,228,220,0.5);
        }
        .stars {
          color: #FF6B35;
          font-size: 14px;
          letter-spacing: 2px;
        }

        /* CTA row */
        .cta-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          flex-wrap: wrap;
        }
        .cta-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 14px 28px;
          background: linear-gradient(135deg, #FF6B35, #FF3CAC);
          color: white;
          font-family: 'Bricolage Grotesque', sans-serif;
          font-size: 15px;
          font-weight: 700;
          border-radius: 100px;
          border: none;
          cursor: pointer;
          transition: transform 0.2s, box-shadow 0.2s;
          text-decoration: none;
          box-shadow: 0 8px 32px rgba(255,107,53,0.25);
        }
        .cta-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 40px rgba(255,107,53,0.4);
        }
        .cta-btn svg {
          transition: transform 0.2s;
        }
        .cta-btn:hover svg {
          transform: translateX(3px);
        }
        .cta-note {
          font-size: 13px;
          color: rgba(232,228,220,0.4);
          font-weight: 300;
        }
        .cta-note strong {
          color: rgba(232,228,220,0.7);
        }
      `}</style>

      <div className="ambient-blob blob-1" />
      <div className="ambient-blob blob-2" />

      <div className="about-inner">
        {/* ── Header ── */}
        <div className="about-header">
          <div>
            <div className="eyebrow">
              <span className="eyebrow-dot" />
              About SV Digital Studio
            </div>
            <h2 className="about-title">
              <span className="title-plain">A Creative</span>
              <span className="title-accent">Studio That</span>
              <span className="title-outline">Means Business</span>
            </h2>
          </div>

          <div className="about-lead">
            <p>
              <strong>SV Digital Studio</strong> is a Tunisian creative agency specializing in digital
              marketing, content creation, and web design. We partner with brands, entrepreneurs,
              and businesses to build powerful online presences that convert visitors into
              loyal customers.
            </p>
            <p>
              Our team blends <strong>creative storytelling</strong> with{" "}
              <strong>performance marketing strategies</strong>, ensuring every pixel and every
              campaign serves your growth objectives.
            </p>
            <div className="tag-row">
              {TAGS.map((t) => (
                <span
                  key={t.label}
                  className="tag"
                  style={{
                    color: t.color,
                    borderColor: t.color + "40",
                    background: t.color + "10",
                  }}
                >
                  <span className="tag-dot" style={{ background: t.color }} />
                  {t.label}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* ── Main grid ── */}
        <div className="about-grid">
          {/* Left: image */}
          <div className="image-card">
            <img
              className="img-bg"
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
              alt="SV Digital Studio team collaborating"
            />
            <div className="image-overlay" />

            <div className="image-badge">🇹🇳 Tunisia Based</div>

            <div className="image-footer">
              <div className="location-pill">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
                Tunis, Tunisia
              </div>
              <h3>Where Creativity Meets Strategy</h3>
              <p>Delivering world-class digital solutions since 2021</p>
            </div>
          </div>

          {/* Right column */}
          <div className="right-col">
            {/* Stats */}
            <div className="stats-grid">
              {STATS.map((s, i) => (
                <StatCard key={s.label} stat={s} index={i} />
              ))}
            </div>

            {/* Mission quote */}
            <div className="mission-card">
              <div className="mission-label">Our Mission</div>
              <p className="mission-text">
                "We don't just build brands — we craft experiences that make your audience
                stop, look, and take action."
              </p>
            </div>

            {/* Social proof */}
            <div className="svg-card">
              <div className="avatar-stack">
                {[
                  { bg: "#FF6B35", text: "A", img: "https://i.pravatar.cc/100?img=1" },
                  { bg: "#A259FF", text: "B", img: "https://i.pravatar.cc/100?img=2" },
                  { bg: "#00C2FF", text: "C", img: "https://i.pravatar.cc/100?img=3" },
                  { bg: "#FF3CAC", text: "D", img: "https://i.pravatar.cc/100?img=4" },
                ].map((av, i) => (
                  <div className="avatar" key={i}>
                    <img src={av.img} alt="client" onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }} />
                    <div className="avatar-fallback" style={{ background: av.bg, color: 'white', display: 'none' }}>
                      {av.text}
                    </div>
                  </div>
                ))}
                <div className="avatar">
                  <div className="avatar-fallback" style={{ background: 'rgba(255,255,255,0.08)', color: 'rgba(232,228,220,0.6)', fontSize: '11px' }}>
                    30+
                  </div>
                </div>
              </div>
              <div className="social-proof">
                <div className="stars">★★★★★</div>
                <strong>Trusted by 30+ clients</strong>
                <span>From startups to established brands</span>
              </div>
            </div>

            {/* CTA */}
            <div className="cta-row">
              <a href="#contact" className="cta-btn">
                Start a Project
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </a>
              <span className="cta-note">
                <strong>Free consultation</strong> — no commitment needed
              </span>
            </div>
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div className="bottom-bar">
          <div className="bottom-bar-grid">
            {BOTTOM_STATS.map((s, i) => (
              <div className="bottom-stat" key={s.label}>
                <div className="bottom-stat-value">{s.value}</div>
                <div className="bottom-stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;