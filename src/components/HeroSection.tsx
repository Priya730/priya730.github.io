import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import heroPhoto from '../../assets/profile.jpeg'

const tickerItems = [
  "Problem-first thinking", "LLMs", "Backend Systems", "Product Engineering",
  "Node.js", "PostgreSQL", "Ruby on Rails", "Computer Vision", "Open Source",
  "GSoC '22", "Oncall Engineer", "AWS", "Vector Search", "React",
];

const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const emojis = ["✦", "⚡", "◆", "→", "✧"];
    let lastSpawn = 0;

    const handleMove = (e: MouseEvent) => {
      const now = Date.now();
      if (now - lastSpawn < 300) return;
      lastSpawn = now;

      const rect = container.getBoundingClientRect();
      if (
        e.clientX < rect.left || e.clientX > rect.right ||
        e.clientY < rect.top || e.clientY > rect.bottom
      ) return;

      const particle = document.createElement("span");
      particle.className = "emoji-particle";
      particle.textContent = emojis[Math.floor(Math.random() * emojis.length)];
      particle.style.left = e.clientX + "px";
      particle.style.top = e.clientY + "px";
      particle.style.fontSize = Math.random() * 10 + 12 + "px";
      particle.style.color = `hsl(var(--muted-foreground))`;
      document.body.appendChild(particle);
      setTimeout(() => particle.remove(), 1200);
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <section
      id="hero"
      ref={containerRef}
      className="min-h-screen flex items-center relative"
      style={{ padding: "100px 0 80px" }}
    >
      {/* Grid bg */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="w-full max-w-[1100px] mx-auto px-12 max-md:px-6 relative z-10">
        <div className="grid grid-cols-[1fr_400px] gap-10 items-center max-md:grid-cols-1">
          {/* Text side */}
          <div>
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.05, duration: 0.6 }}
              className="flex items-center gap-2.5 mb-7 text-[12px] uppercase tracking-[0.13em] text-muted-foreground"
            >
              <span className="w-6 h-px bg-muted" />
              SDE II · HackerRank · GSoC '22
            </motion.div>

            {/* Name */}
            <motion.h1
              className="relative mb-7"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(60px, 9vw, 118px)",
                fontWeight: 900,
                lineHeight: 0.93,
                letterSpacing: "-0.03em",
              }}
            >
              {"Priya".split("").map((char, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 + i * 0.04, duration: 0.6 }}
                  className="inline-block"
                >
                  {char}
                </motion.span>
              ))}
              <br />
              {"Srivastava".split("").map((char, i) => (
                <motion.span
                  key={`s${i}`}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + i * 0.04, duration: 0.6 }}
                  className="inline-block"
                >
                  {char}
                </motion.span>
              ))}

              <svg
                className="hand-underline absolute -bottom-2 left-0 max-md:left-1/2 max-md:-translate-x-1/2"
                width="280"
                height="12"
                viewBox="0 0 280 12"
                fill="none"
              >
                <path
                  d="M2 8 C 40 2, 80 10, 140 6 C 200 2, 240 10, 278 4"
                  stroke="hsl(var(--muted-foreground))"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </motion.h1>

            {/* Tagline */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.28, duration: 0.8 }}
              className="mb-9"
            >
              <span
                className="block mb-1.5"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(19px, 2.2vw, 24px)",
                  fontWeight: 600,
                  fontStyle: "italic",
                }}
              >
                I figure out which problem is worth solving
              </span>
              <span className="block text-[16px] font-light text-muted-foreground leading-[1.7] max-w-[460px]">
                then close the gap to working software.
              </span>
            </motion.div>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="flex items-center gap-3 flex-wrap"
            >
              <a
                href="#work"
className="inline-flex items-center gap-1.5 px-[22px] py-[10px] rounded-full text-[14px] bg-foreground text-background border border-foreground hover:opacity-90 transition-all cursor-none"              >
                See the work
              </a>
              <a
                href="mailto:shivikapriya730@gmail.com"
                className="inline-flex items-center gap-1.5 px-[22px] py-[10px] rounded-full text-[14px] border border-border text-muted-foreground hover:border-[hsl(var(--border-hover))] hover:text-foreground transition-all cursor-none"
              >
                Get in touch
              </a>
            </motion.div>
          </div>

          {/* Photo side */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.9 }}
          >
            <div
            className="rounded-[16px] overflow-hidden w-[300px] h-[350px] max-md:w-[220px] max-md:h-[280px] relative border border-border"
              style={{
                background:
                  "linear-gradient(160deg, hsl(30 20% 8%) 0%, hsl(25 30% 12%) 60%, hsl(20 10% 5%) 100%)",
              }}
            >
              <img src= {heroPhoto} className="rounded-[16px] overflow-hidden w-[300px] h-[350px] max-md:w-[220px] max-md:h-[280px] relative border border-border absolute inset-0 flex items-center justify-center text-[12px] italic text-muted-foreground"/>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Ticker */}
      <div
        className="absolute bottom-8 left-0 right-0 overflow-hidden"
        style={{
          maskImage: "linear-gradient(90deg, transparent, black 8%, black 92%, transparent)",
          WebkitMaskImage: "linear-gradient(90deg, transparent, black 8%, black 92%, transparent)",
        }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.7 }}
          className="ticker-track"
        >
          {[0, 1].map((set) => (
            <div key={set} className="flex items-center whitespace-nowrap">
              {tickerItems.map((item, i) => (
                <span key={`${set}-${i}`} className="flex items-center">
                  <span className="text-[13px] uppercase tracking-[0.11em] px-4" style={{ color: "hsl(var(--text-dim))" }}>
                    {item}
                  </span>
                  <span className="text-[9px] opacity-40" style={{ color: "hsl(var(--text-dim))" }}>·</span>
                </span>
              ))}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
