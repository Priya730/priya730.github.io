import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { getAllPosts } from "@/lib/blog";


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
          fontSize: "clamp(34px, 5vw, 58px)",
          fontWeight: 700,
          letterSpacing: "-0.025em",
        }}
        className="mb-2"
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

/* ═══ GSoC Section ═══ */
const GSoCSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <section id="gsoc" className="pb-[120px]">
      <div className="w-full max-w-[1100px] mx-auto px-12 max-md:px-6">
        <SectionHead title="Open Source" subtitle="Where it started" />
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="rounded-[16px] border border-border p-10 max-md:p-7 grid grid-cols-[1fr_1fr] max-md:grid-cols-1 gap-10"
          style={{ background: "hsl(var(--card))" }}
        >
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="w-[18px] h-px" style={{ background: "hsl(var(--text-dim))" }} />
              <span className="text-[10px] uppercase tracking-[0.12em] text-muted-foreground">
                Google Summer of Code · CHAOSS · 2022
              </span>
            </div>
            <h3
              className="mb-4"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(22px, 3vw, 32px)",
                fontWeight: 700,
                letterSpacing: "-0.02em",
                lineHeight: 1.15,
              }}
            >
              From first PR to shipping production metrics
            </h3>
            <p className="text-[15.5px] font-light text-muted-foreground leading-[1.8] mb-4">
              Selected for GSoC 2022 with CHAOSS  an open-source project under the Linux Foundation
              focused on community health analytics. Contributed to Augur, building metrics pipelines
              that help maintainers understand the sustainability and health of their communities.
            </p>
            <div className="flex flex-wrap gap-1.5">
              {["Python", "Data Pipelines", "Open Source", "GSoC", "Linux Foundation"].map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] px-[9px] py-[3px] border border-border rounded-full text-muted-foreground uppercase tracking-[0.05em]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className="flex flex-col justify-center gap-5">
            <div className="border-l border-border pl-5">
              <div className="text-[9.5px] uppercase tracking-[0.12em] text-muted-foreground mb-2">The shift</div>
              <p className="text-[15px] font-light leading-[1.7]" style={{ color: "hsl(var(--foreground) / 0.7)" }}>
                GSoC taught me the difference between writing code and understanding systems.
                It was the first time I worked on something where the users were other developers 
                and the quality of my thinking mattered more than the volume of my output.
              </p>
            </div>
            <div className="border-l border-border pl-5">
              <div className="text-[9.5px] uppercase tracking-[0.12em] text-muted-foreground mb-2">The outcome</div>
              <p className="text-[15px] font-light leading-[1.7]" style={{ color: "hsl(var(--foreground) / 0.7)" }}>
                Contributed to community health metrics used by open-source maintainers worldwide.
                Spoke at CHAOSS community calls. Started thinking about software as craft.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

/* ═══ Now Section ═══ */
const nowCards = [
  {
    label: "Currently thinking about",
    title: "What does \"senior\" mean when AI can write the code?",
    body: "The engineers who matter next decade won't be judged by velocity. They'll be judged by judgment  knowing what to build, what to skip, and what to question.",
  },
  {
    label: "Currently reading",
    title: "The Hard Thing About Hard Things",
    body: "I read about startups the way other people watch sports. I want to understand the decisions behind the products. Also rereading Harry Potter. Some things are constants.",
  },
  {
    label: "Currently building",
    title: "This site  and the essays to fill it",
    body: "The site is the smallest part. The harder work is writing clearly about what I've learned  in public, with my name on it.",
  },
  {
    label: "Talks",
    title: "Open to speaking",
    body: "I've spoken at CHAOSS and GirlScript. Open to meetups, podcasts, and conferences  around product engineering, LLMs in production, and what open source teaches you about craft.",
    link: { label: "Invite me ↗", href: "mailto:shivikapriya730@gmail.com" },
  },
];

const BuildingSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <section id="building" className="pb-[120px]">
      <div className="w-full max-w-[1100px] mx-auto px-12 max-md:px-6">
        <SectionHead title="Now" subtitle="What I'm thinking about, reading, and working on" />
        <div ref={ref} className="grid grid-cols-2 max-md:grid-cols-1 gap-3.5">
          {nowCards.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-[14px] border border-border p-7 hover:border-[hsl(var(--border-hover))] hover:bg-[hsl(var(--card-hover))] transition-colors"
              style={{ background: "hsl(var(--card))" }}
            >
              <div className="text-[9.5px] uppercase tracking-[0.12em] text-muted-foreground mb-3">
                {c.label}
              </div>
              <div
                className="mb-2"
                style={{ fontFamily: "var(--font-display)", fontSize: "19px", fontWeight: 600, lineHeight: 1.25 }}
              >
                {c.title}
              </div>
              <p className="text-[14.5px] font-light text-muted-foreground leading-[1.75]">
                {c.body}
              </p>
              {c.link && (
                <a
                  href={c.link.href}
                  className="inline-block mt-3 text-[13px] text-muted-foreground no-underline border-b border-border pb-[2px] hover:text-foreground hover:border-foreground transition-colors cursor-none"
                >
                  {c.link.label}
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ═══ Writing ═══ */
const WritingSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const posts = getAllPosts().slice(0, 4);

  return (
    <section id="writing" className="pb-[120px]">
      <div className="w-full max-w-[1100px] mx-auto px-12 max-md:px-6">
        <SectionHead title="Writing" subtitle="Ideas I've been turning over" />
        <div ref={ref} className="flex flex-col">
          {posts.map((post, i) => (
            <Link
              to={`/blog/${post.slug}`}
              className="py-6 border-b border-border first:border-t grid grid-cols-[1fr_auto] gap-7 items-center no-underline group cursor-pointer block">
              <div>
                <div className="text-[10px] uppercase tracking-[0.1em] text-muted-foreground mb-1.5">{post.category}</div>
                <div
                  className="group-hover:opacity-60 transition-opacity text-foreground"
                  style={{ fontFamily: "var(--font-display)", fontSize: "clamp(17px, 2vw, 23px)", fontWeight: 500, lineHeight: 1.25 }}
                >
                  {post.title}
                </div>
                <div className="text-[14px] font-light text-muted-foreground leading-[1.7] mt-1.5 max-w-[520px]">
                  {post.excerpt}
                </div>
              </div>
              <svg
                className="transition-transform duration-300 group-hover:translate-x-[3px] group-hover:-translate-y-[3px] shrink-0"
                width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"
                style={{ color: "hsl(var(--text-dim))" }}
              >
                <path d="M7 17L17 7M17 7H7M17 7v10" />
              </svg>
            </Link>
          ))}
      </div>
      <div className="text-center mt-7">
        <a
          href="https://priyasrivastava.hashnode.dev"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[13px] text-muted-foreground no-underline border-b border-border pb-[2px] hover:text-foreground hover:border-foreground transition-colors cursor-none"
        >
          All writing on Hashnode ↗
        </a>
      </div>
    </div >
    </section >
  );
};

/* ═══ Talks ═══ */
type TalkItem = {
  title: string;
  event: string;
  yr: string;
  link?: string;
  embedSrc?: string;
  tweet?: boolean;
};

const talks: TalkItem[] = [
  {
    title: "Open Source at Google Developers GDSC Wow Ahmedabad",
    event: "Talk on open source and communities",
    yr: "Talk",
    tweet: true,
  },
  {
    title: "SheBuildsEco · Hacktoberfest talk",
    event: "YouTube link",
    yr: "Talk",
    embedSrc: "https://www.youtube.com/embed/Nw8n_BHiuCw?si=V4euWLH5x17qXLpy",
  },
  {
    title: "Content Creation with AI and LLMs as Judge",
    event: "HackerRank internal talk",
    yr: "Talk",
    link: "/blog/why-i-made-the-ai-audit-itself",
  },
];

const TwitterEmbed = () => {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const loadWidgets = () => {
      const twttr = (window as Window & {
        twttr?: { widgets?: { load?: (node?: HTMLElement | null) => void } };
      }).twttr;

      twttr?.widgets?.load?.(ref.current);
    };

    const existingScript = document.getElementById("twitter-widgets-js") as HTMLScriptElement | null;
    if (existingScript) {
      if ((window as Window & { twttr?: unknown }).twttr) {
        loadWidgets();
        return;
      }

      existingScript.addEventListener("load", loadWidgets, { once: true });
      return;
    }

    const script = document.createElement("script");
    script.id = "twitter-widgets-js";
    script.async = true;
    script.src = "https://platform.twitter.com/widgets.js";
    script.charset = "utf-8";
    script.onload = loadWidgets;
    document.body.appendChild(script);

    return () => {
      script.onload = null;
    };
  }, []);

  return (
    <div ref={ref} className="col-span-2 mt-5">
      <blockquote className="twitter-tweet">
        <p lang="en" dir="ltr">
          Thank you for having me{" "}
          <a href="https://twitter.com/GDSCWOW_Gujarat?ref_src=twsrc%5Etfw">@GDSCWOW_Gujarat</a> 😄 It was an amazing
          event ✨ <a href="https://t.co/ZRlUdR4snZ">https://t.co/ZRlUdR4snZ</a>
        </p>
        &mdash; Priya Srivastava 👩‍💻✨ (@shivikapriya){" "}
        <a href="https://twitter.com/shivikapriya/status/1647592728010825728?ref_src=twsrc%5Etfw">April 16, 2023</a>
      </blockquote>
    </div>
  );
};

const TalksSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const MotionLink = motion(Link);
  return (
    <section id="talks" className="pb-[120px]">
      <div className="w-full max-w-[1100px] mx-auto px-12 max-md:px-6">
        <SectionHead title="Talks" subtitle="Sharing what I've learned" />
        <div ref={ref} className="border border-border rounded-xl overflow-hidden">
          {talks.map((t, i) => (
            t.link && !t.link.startsWith("http") ? (
              <MotionLink
                key={t.title}
                to={t.link}
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="px-8 py-[26px] grid grid-cols-[1fr_auto] items-center gap-6 border-b border-border last:border-b-0 hover:bg-[hsl(var(--card-hover))] transition-colors no-underline cursor-pointer"
                style={{ background: "hsl(var(--card))" }}
              >
                <div>
                  <div style={{ fontFamily: "var(--font-display)", fontSize: "17px", fontWeight: 500 }} className="mb-[3px]">
                    {t.title}
                  </div>
                  <div className="text-[12.5px] text-muted-foreground">{t.event}</div>
                </div>
                <span className="text-[12.5px] whitespace-nowrap" style={{ color: "hsl(var(--text-dim))" }}>{t.yr}</span>
              </MotionLink>
            ) : (
              <motion.div
                key={t.title}
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="px-8 py-[26px] grid grid-cols-[1fr_auto] items-center gap-6 border-b border-border last:border-b-0 hover:bg-[hsl(var(--card-hover))] transition-colors"
                style={{ background: "hsl(var(--card))" }}
              >
                <div>
                  <div style={{ fontFamily: "var(--font-display)", fontSize: "17px", fontWeight: 500 }} className="mb-[3px]">
                    {t.link ? (
                      <a
                        href={t.link}
                        {...(t.link.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                        className="no-underline hover:opacity-70 transition-opacity"
                      >
                        {t.title}
                      </a>
                    ) : (
                      t.title
                    )}
                  </div>
                  <div className="text-[12.5px] text-muted-foreground">{t.event}</div>
                </div>
                <span className="text-[12.5px] whitespace-nowrap" style={{ color: "hsl(var(--text-dim))" }}>{t.yr}</span>
                {t.embedSrc && (
                  <div className="col-span-2 mt-5">
                    <div className="relative w-full overflow-hidden rounded-[12px] border border-border bg-black aspect-video">
                      <iframe
                        className="absolute inset-0 h-full w-full"
                        src={t.embedSrc}
                        title={t.title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                      />
                    </div>
                  </div>
                )}
                {t.tweet && <TwitterEmbed />}
              </motion.div>
            )
          ))}
        </div>
      </div>
    </section>
  );
};

/* ═══ Footer ═══ */
const FooterSection = () => (
  <footer className="border-t border-border py-24">
    <div className="w-full max-w-[1100px] mx-auto px-12 max-md:px-6 grid grid-cols-2 max-md:grid-cols-1 gap-12 items-end">
      <div>
        <h2
          className="mb-[18px]"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(32px, 4.5vw, 56px)",
            fontWeight: 700,
            letterSpacing: "-0.025em",
            lineHeight: 1.05,
          }}
        >
          Let's close<br />a gap together.
        </h2>
        <p className="text-[15px] font-light text-muted-foreground max-w-[360px] leading-[1.8]">
          Open to interesting problems, collaborations, and honest conversations. Especially about AI, product engineering, and systems that have to scale.
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
            { label: "Hashnode", href: "https://priyasrivastava.hashnode.dev" },
          ].map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[13.5px] text-muted-foreground no-underline hover:text-foreground transition-colors cursor-none"
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

export { GSoCSection, BuildingSection, WritingSection, TalksSection, FooterSection };
