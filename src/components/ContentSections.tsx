import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const SectionHead = ({ title, subtitle }: { title: string; subtitle: string }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <div ref={ref} className="text-center mb-14">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(38px, 6vw, 68px)",
          fontWeight: 700,
          letterSpacing: "-0.025em",
        }}
        className="mb-2.5"
      >
        {title}
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="text-muted-foreground italic text-[16px]"
        style={{ fontFamily: "var(--font-display)", fontWeight: 300 }}
      >
        {subtitle}
      </motion.p>
    </div>
  );
};

const projects = [
  { icon: "👩‍⚕️", title: "HealthiHer", desc: "A women-centric health platform providing awareness, wellness resources, and a meditation app.", lang: "CSS · JS", link: "https://github.com/priya-srivastava" },
  { icon: "🔐", title: "unipass", desc: "Node.js CLI password generator. Create strong, unique passwords right from your terminal.", lang: "JavaScript", link: "https://github.com/priya-srivastava" },
  { icon: "🎙️", title: "COVID Voice Assistant", desc: "Python voice assistant answering COVID-19 case count questions in real time.", lang: "Python", link: "https://github.com/priya-srivastava" },
];

const writings = [
  { cat: "Engineering · LLMs", title: "How I built an AI question generator before it was cool", excerpt: "The architecture decisions, the failures, and what I'd do differently building an LLM pipeline in 2023." },
  { cat: "Product", title: "What being a product-minded engineer actually means", excerpt: "It's not about Figma or sitting in PM meetings. It's about asking \"should this exist?\" before \"how do I build it?\"" },
  { cat: "Open Source", title: "My GSoC journey: from first PR to shipping production code", excerpt: "What the summer of code actually taught me about software, community, and learning in public." },
];

const year=new Date().getFullYear()

const talks = [
  { title: "Building AI-Powered Assessment Tools at Scale", event: "Engineering Deep Dive · HackerRank Internal", yr: "2023" },
  { title: "Open Source Health Metrics with Augur", event: "CHAOSS Community Call · GSoC Demo Day", yr: "2022" },
  { title: "Contributing to Open Source: From Zero to GSoC", event: "GirlScript Summer of Code · Community Session", yr: "2021" },
  { title: "More coming soon —", event: "Got a meetup, podcast, or conf? Let's talk.", yr: year, dim: true },
];

const BuildingSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <section id="building" className="pb-[120px]">
      <div className="w-full max-w-[1100px] mx-auto px-12 max-md:px-6">
        <SectionHead title="Building" subtitle="Things I make on the side" />
        <div ref={ref} className="grid grid-cols-3 max-md:grid-cols-1 gap-3.5">
          {projects.map((p, i) => (
            <motion.a
              key={p.title}
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-xl border border-border p-[26px] flex flex-col gap-2.5 no-underline hover:border-[hsl(var(--border-hover))] transition-colors cursor-none"
              style={{ background: "hsl(var(--card))" }}
              data-hover
            >
              <span className="text-lg">{p.icon}</span>
              <span style={{ fontFamily: "var(--font-display)", fontSize: "18px", fontWeight: 600, letterSpacing: "-0.01em" }}>{p.title}</span>
              <span className="text-[13.5px] font-light text-muted-foreground leading-[1.72] flex-1">{p.desc}</span>
              <div className="flex justify-between items-center mt-1.5 text-[11.5px]">
                <span style={{ color: "hsl(var(--text-dim))" }}>{p.lang}</span>
                <span className="text-muted-foreground hover:text-foreground transition-colors">GitHub ↗</span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

const WritingSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <section id="writing" className="pb-[120px]">
      <div className="w-full max-w-[1100px] mx-auto px-12 max-md:px-6">
        <SectionHead title="Writing" subtitle="Thinking out loud" />
        <div ref={ref} className="grid grid-cols-3 max-md:grid-cols-1 gap-3.5 mb-7">
          {writings.map((w, i) => (
            <motion.a
              key={w.title}
              href="#"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-xl border border-border p-[26px] no-underline flex flex-col gap-2.5 hover:border-[hsl(var(--border-hover))] transition-colors cursor-none"
              style={{ background: "hsl(var(--card))" }}
              data-hover
            >
              <span className="text-[10.5px] uppercase tracking-[0.08em] text-muted-foreground">{w.cat}</span>
              <span style={{ fontFamily: "var(--font-display)", fontSize: "18px", fontWeight: 500, lineHeight: 1.3 }} className="flex-1">{w.title}</span>
              <span className="text-[13.5px] font-light text-muted-foreground leading-[1.7]">{w.excerpt}</span>
            </motion.a>
          ))}
        </div>
        <div className="text-center mt-2">
          <a href="https://hashnode.com" target="_blank" rel="noopener noreferrer" className="text-[13.5px] text-muted-foreground no-underline border-b border-border pb-[2px] hover:text-foreground hover:border-foreground transition-colors cursor-none">
            Read all writing on Hashnode ↗
          </a>
        </div>
      </div>
    </section>
  );
};

const TalksSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <section id="talks" className="pb-[120px]">
      <div className="w-full max-w-[1100px] mx-auto px-12 max-md:px-6">
        <SectionHead title="Talks" subtitle="Sharing what I've learned" />
        <div ref={ref} className="border border-border rounded-xl overflow-hidden">
          {talks.map((t, i) => (
            <motion.div
              key={t.title}
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: t.dim ? 0.35 : 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`px-8 py-[26px] grid grid-cols-[1fr_auto] items-center gap-6 border-b border-border last:border-b-0 hover:bg-[hsl(var(--card-hover))] transition-colors`}
              style={{ background: "hsl(var(--card))" }}
            >
              <div>
                <div style={{ fontFamily: "var(--font-display)", fontSize: "17px", fontWeight: 500 }} className="mb-[3px]">{t.title}</div>
                <div className="text-[12.5px] text-muted-foreground">{t.event}</div>
              </div>
              <span className="text-[12.5px] whitespace-nowrap" style={{ color: "hsl(var(--text-dim))" }}>{t.yr}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FooterSection = () => (
  <footer className="border-t border-border py-24">
    <div className="w-full max-w-[1100px] mx-auto px-12 max-md:px-6 grid grid-cols-2 max-md:grid-cols-1 gap-12 items-end">
      <div>
        <h2
          className="mb-[18px]"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(36px, 5vw, 62px)",
            fontWeight: 700,
            letterSpacing: "-0.025em",
            lineHeight: 1.05,
          }}
        >
          Let's build<br />something<br />together.
        </h2>
        <p className="text-[14.5px] font-light text-muted-foreground max-w-[380px] leading-[1.8]">
          I'm open to interesting problems, collaborations, and conversations. Especially about AI, product, and systems that have to scale.
        </p>
        <a
          href="mailto:shivikapriya730@gmail.com"
          className="inline-flex items-center gap-1.5 mt-6 text-[15px] no-underline border-b border-border pb-[3px] hover:border-foreground transition-colors cursor-none"
        >
          shivikapriya730@gmail.com ↗
        </a>
      </div>
      <div className="flex flex-col items-end max-md:items-start gap-7">
        <div className="flex flex-col items-end max-md:items-start gap-2.5">
          {[
            { label: "GitHub", href: "https://github.com/Priya730" },
            { label: "LinkedIn", href: "https://linkedin.com/in/priyasrivastava730" },
            { label: "Twitter / X", href: "https://twitter.com/shivikapriya" },
            { label: "Hashnode", href: "https://priyasrivastava.hashnode.dev/" },
          ].map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[13.5px] text-muted-foreground no-underline hover:text-foreground transition-colors flex items-center gap-1.5 cursor-none"
            >
              {s.label} ↗
            </a>
          ))}
        </div>
        <span className="text-[12px]" style={{ color: "hsl(var(--text-dim))" }}>© {new Date().getFullYear()} Priya Srivastava</span>
      </div>
    </div>
  </footer>
);

export { BuildingSection, WritingSection, TalksSection, FooterSection };
