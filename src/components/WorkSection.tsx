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

const workItems = [
  {
    n: "01",
    org: "HackerRank",
    yr: "2023",
    title: "AI Content Engine",
    desc: "Before AI-generated content was mainstream, I built a full-stack platform that automated the most painful part of technical hiring — question creation. The system generated coding, database, MCQ, and code-repo questions at scale, with LLM-as-judge validation, vector search for duplicate detection, RBAC, authentication, and prompt refinement pipelines.",
    tags: ["LLMs", "Vector Search", "React", "Node.js", "PostgreSQL", "Infra & Deployment", "Product Design", "RBAC"],
  },
  {
    n: "02",
    org: "HackerRank · Projects Team",
    yr: "2022–23",
    title: "VS Code IDE Migration",
    desc: "Developer experience is invisible when it works. I migrated HackerRank's Projects IDE from Theia to VS Code — the coding environment used by thousands of engineers tackling real-world fullstack, DevOps, and data science assessments. Handled LSP integration, debugging pipeline work, and served as oncall engineer for platform stability.",
    tags: ["VS Code Extension API", "Theia → VS Code", "LSP", "Platform Infra", "DevEx", "Oncall"],
  },
  {
    n: "03",
    org: "HackerRank · Integrity Team",
    yr: "2024–25",
    title: "Assessment Integrity Platform",
    desc: "Trust is the product. On the Integrity team as SDE2, I built object detection to flag mobile phone usage during live proctored sessions. I also designed an image retention system that auto-purges webcam captures from S3 on customer-defined schedules, shaped by per-company legal and regional compliance requirements.",
    tags: ["Computer Vision", "Object Detection", "AWS S3", "Compliance Systems", "Proctoring", "SDE2"],
  },
  {
    n: "04",
    org: "Google Summer of Code · CHAOSS",
    yr: "2022",
    title: "Open Source Health Metrics",
    desc: "Selected for GSoC 2022 with CHAOSS — an open-source project under the Linux Foundation focused on community health analytics. Contributed to Augur, building metrics pipelines that help maintainers understand the sustainability and health of their communities.",
    tags: ["Python", "Data Pipelines", "Open Source", "GSoC", "Linux Foundation"],
  },
];

const WorkSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="work" className="py-[120px]">
      <div className="w-full max-w-[1100px] mx-auto px-12 max-md:px-6">
        <SectionHead title="Featured Work" subtitle="Highlights from the journey so far" />
        <div ref={ref} className="flex flex-col gap-4">
          {workItems.map((item, i) => (
            <motion.div
              key={item.n}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-[14px] border border-border p-9 px-10 grid grid-cols-[52px_1fr_24px] max-md:grid-cols-[40px_1fr] gap-7 items-start hover:border-[hsl(var(--border-hover))] transition-colors cursor-none group"
              style={{ background: "hsl(var(--card))" }}
              data-hover
            >
              <span
                className="text-[12px] italic pt-[5px]"
                style={{ fontFamily: "var(--font-display)", color: "hsl(var(--text-dim))" }}
              >
                {item.n}
              </span>
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[11px] uppercase tracking-[0.08em] text-muted-foreground">{item.org}</span>
                  <span className="text-[11px]" style={{ color: "hsl(var(--text-dim))" }}>· {item.yr}</span>
                </div>
                <h3
                  className="mb-3.5"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(20px, 2.8vw, 30px)",
                    fontWeight: 600,
                    letterSpacing: "-0.01em",
                    lineHeight: 1.2,
                  }}
                >
                  {item.title}
                </h3>
                <p className="text-[14.5px] font-light text-muted-foreground leading-[1.8] max-w-[620px]">
                  {item.desc}
                </p>
                <div className="flex flex-wrap gap-1.5 mt-5">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10.5px] px-[9px] py-[3px] border border-border rounded-full text-muted-foreground uppercase tracking-[0.04em]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <svg
                className="max-md:hidden mt-1 transition-transform duration-300 group-hover:translate-x-[3px] group-hover:-translate-y-[3px]"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                style={{ color: "hsl(var(--text-dim))" }}
              >
                <path d="M7 17L17 7M17 7H7M17 7v10" />
              </svg>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
