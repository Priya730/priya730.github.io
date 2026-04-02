import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import heroPhoto from '../../assets/profile.jpeg'

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
        e.clientX < rect.left ||
        e.clientX > rect.right ||
        e.clientY < rect.top ||
        e.clientY > rect.bottom
      )
        return;

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
      className="min-h-screen flex flex-col items-center justify-center relative px-10"
    >
      {/* Subtle grid bg */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Hero content: Name + Photo side by side */}
      <div className="relative z-10 flex items-center gap-12 max-md:flex-col max-md:text-center">
        {/* Text side */}
        <div className="flex flex-col items-start max-md:items-center">
          <motion.h1
            className="relative mb-7"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(52px, 8vw, 120px)",
              fontWeight: 700,
              lineHeight: 0.92,
              letterSpacing: "-0.025em",
            }}
          >
            {"I'm Priya".split("").map((char, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 + i * 0.04, duration: 0.6 }}
                className="inline-block"
                style={char === " " ? { width: "0.3em" } : {}}
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
                transition={{ delay: 0.5 + i * 0.04, duration: 0.6 }}
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

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.7 }}
            className="text-muted-foreground italic"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(16px, 2vw, 22px)",
              fontWeight: 300,
              letterSpacing: "0.01em",
            }}
          >
            an engineer who builds products, not just code.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.6 }}
            className="flex gap-3 mt-10"
          >
            <a
              href="#work"
              className="inline-flex items-center gap-1.5 px-[22px] py-[10px] rounded-full text-[13px] border border-border text-muted-foreground hover:border-[hsl(var(--border-hover))] hover:text-foreground transition-all cursor-none"
            >
              View My Work
            </a>
            <a
              href="mailto:shivikapriya730@gmail.com"
              className="inline-flex items-center gap-1.5 px-[22px] py-[10px] rounded-full text-[13px] bg-foreground text-background border border-foreground hover:opacity-90 transition-all cursor-none"
            >
              Get In Touch
            </a>
          </motion.div>
        </div>

        {/* Photo side */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="shrink-0"
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

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-2 text-[12px] tracking-[0.06em] text-muted-foreground"
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ animation: "dip 2.2s ease infinite" }}>
          <path d="M12 5v14M19 12l-7 7-7-7" />
        </svg>
        scroll to explore
      </motion.div>
    </section>
  );
};

export default HeroSection;
