import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import FlowDiagram from "./FlowDiagram";
import MigrationDiagram from "./MigrationDiagram"
import integrityGif from "../../assets/OD.gif"
import { preview } from "vite";

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

const workItems = [
  {
    id: "integrity",
    meta: "HackerRank · 2025–26 · Integrity Team · SDE II",
    title: "Object Detection in Assessment Integrity",
    insight: "Built a Go SQS consumer pipeline that converts webcam image detections into integrity decisions",
    tags: ["Trust ↑", "AI", "AWS SQS", "Oncall", "Golang", "Backend"],
    greenTag: "Phone detected → flagged in assessment",
    cols: [
      { label: "The problem", content: <><li>In remote assessments, mobile phones are one of the most common cheating vector for external help.</li> <li> <strong className="font-medium text-foreground">Webcam feeds existed, but detecting these behaviors reliably was hard.</strong></li><li> Raw detections were noisy and not directly usable in deciding whether an attempt could be trusted.</li></> },
      {
        label: "What I built", content: <><strong className="font-medium text-foreground">Built object detection for webcam images and the backend flow in Go.</strong>

          <ul>Worked on:</ul>

          <li>processing images via SQS queue and consumer</li>
          <li>detecting objects like phones and tablets</li>
          <li>handling precision vs recall tradeoffs</li>
          <li>defining what counts as cheating vs noise</li>
          <li>integrating signals into the attempt state machine</li>

          <li>Used LLMs where rule-based checks weren’t sufficient.</li></>
      },
      { label: "What changed", content: <><li>Cheating became <strong className="font-medium text-foreground">measurably harder</strong>.</li> <li>Companies could trust the results.</li> <li>Phone usage and similar behaviors became detectable and usable signals in the integrity system.</li></> },
    ],
    visual: {
      type: "gif",
      content: integrityGif, // OR <FlowDiagram />
    },
    diagramLabel: "System sketch",
    preview: {
      gif: integrityGif,
      url: "https://support.hackerrank.com/articles/2321596225-january-2026-release-notes#object-detection-in-webcam-feed-ai-add-on",
      caption: "Real-time phone detection during assessment"
    }
  },
  {
    id: "ai-content",
    meta: "HackerRank · 2023 · Fullstack + LLMs + Infra",
    title: "AI Content Engine",
    insight: "Making AI-generated questions\ntrust\u00ADworthy enough to ship",
    tags: ["End-to-end ownership", "LLMs", "Vector Search", "Next.js", "NestJS", "PostgreSQL", "RBAC"],
    greenTag: "Days \u2192 Minutes",
    cols: [
      { label: "The problem", content: <>Creating assessment questions was slow and <strong className="font-medium text-foreground">bottlenecked by humans</strong>. HackerRank's content team couldn't keep up.</> },
      { label: "What I built", content: <>A platform that generates coding, database, MCQ, and repo questions <strong className="font-medium text-foreground">in bulk</strong>. Each question is validated by an <strong className="font-medium text-foreground">LLM-as-judge</strong> and deduplicated by vector search before reaching humans.</> },
      { label: "What changed", content: <>Question creation: <strong className="font-medium text-foreground">days → minutes</strong>. The content team stopped doing volume work. The platform could finally scale to meet demand.</> },
    ],
    visual: {
      type: "diagram",
      content: <FlowDiagram />
    },
    // diagram: <FlowDiagram />,
    // diagramLabel: "System sketch",
    preview: {
      url: "https://support.hackerrank.com/articles/8074371720-january-2025-release-notes#content-quality-improvements"
    }
  },
  {
    id: "ide-migration",
    meta: "HackerRank · 2022–23 ·  Skills Infra Team · Intern",
title: "Theia to VS Code Migration for Assessments",
insight: "Enabled 100% traffic migration to VS Code and added observability across 50+ stacks",
tags: ["Candidate DX ↑", "Docker", "Platform Infra", "Oncall", "Observability"],
greenTag: "100% traffic → VS Code · ~68K attempts/month",
cols: [
  { 
    label: "The problem", 
    content: <>
      <li>Candidates used Theia IDE for frontend, backend, and full-stack assessments.</li>
      <li><strong className="font-medium text-foreground">Theia struggled to match the experience of VS Code.</strong></li>
      <li>Debugging issues during interviews was difficult due to limited observability.</li>
    </> 
  },
  {
    label: "What I worked on", 
    content: <>
      <strong className="font-medium text-foreground">Supported the migration from Theia to VS Code at the infra layer.</strong>

      <ul>Worked on:</ul>

      <li>building and maintaining Docker-based execution environments</li>
      <li>ensuring consistency across <strong className="font-medium text-foreground">50+ stacks</strong></li>
      <li>integrating New Relic into base images for observability</li>
      <li>migrating from Logz to <strong className="font-medium text-foreground">New Relic</strong> for unified monitoring</li>
      <li>creating dashboards to support oncall debugging</li>
      <li>serving as oncall engineer during rollout</li>
    </>
  },
  { 
    label: "What changed", 
    content: <>
      <li><strong className="font-medium text-foreground">100% of traffic</strong> moved to VS Code (~68K attempts/month).</li>
      <li>Candidates got a <strong className="font-medium text-foreground">familiar, feature-rich IDE</strong>.</li>
      <li>Granular monitoring made issues easier to detect and debug.</li>
      <li>Support improved with a <strong className="font-medium text-foreground">single observability platform</strong>.</li>
    </> 
  },
],
    visual: {
      type: "diagram",
      content: <MigrationDiagram />
    },
    diagramLabel: "Migration path",
    preview: {
      gif: integrityGif,
      url: "https://support.hackerrank.com/articles/2321596225-january-2026-release-notes#object-detection-in-webcam-feed-ai-add-on",
      caption: "Real-time phone detection during assessment"
    }
  },
];

const CaseCard = ({ item, index }: { item: typeof workItems[0]; index: number }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`rounded-[16px] border border-border overflow-hidden transition-colors ${open ? "" : "hover:border-[hsl(var(--border-hover))]"}`}
    >
      {/* Header */}
      <div
        className="group p-8 px-9 grid grid-cols-[1fr_auto] gap-5 items-start cursor-pointer max-md:px-6" data-cursor-label="See how it works"
        onClick={() => setOpen(!open)}
      >
        <div className="relative">
          <div className="flex items-center gap-2 mb-2.5">
            <span className="w-[18px] h-px" style={{ background: "hsl(var(--text-dim))" }} />
            <span className="text-[11px] uppercase tracking-[0.12em] text-muted-foreground">
              {item.meta}
            </span>
          </div>
          <h3
            className="mb-3.5 whitespace-pre-line"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(20px, 2.6vw, 30px)",
              fontWeight: 700,
              letterSpacing: "-0.02em",
              lineHeight: 1.15,
            }}
          >
            {item.title}
          </h3>
          <div
            className="text-muted-foreground leading-[1.65] max-w-[800px] border-l border-border pl-4 "
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(14px, 1.5vw, 17px)",
              fontWeight: 300,
              fontStyle: "italic",
            }}
          >
            {item.insight}
          </div>
          <div className="flex flex-wrap gap-1.5 mt-5">
            {item.tags.map((tag) => (
              <span
                key={tag}
                className="text-[10px] px-[9px] py-[3px] border border-border rounded-full text-muted-foreground uppercase tracking-[0.05em]"
              >
                {tag}
              </span>
            ))}
            {item.greenTag && (
              <span
                className="text-[10px] px-[9px] py-[3px] rounded-full uppercase tracking-[0.05em]"
                style={{ border: "1px solid rgba(74,222,128,0.2)", color: "rgba(74,222,128,0.65)" }}
              >
                {item.greenTag}
              </span>
            )}
          </div>
        </div>
        <svg
          className={`mt-1 transition-all duration-300 shrink-0 ${open
            ? "rotate-180"
            : "group-hover:translate-y-0.5 group-hover:opacity-80"
            }`} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"
          style={{ color: "hsl(var(--foreground))" }}
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </div>

      {/*visual*/}
      {item.visual && (
        <div className="px-9 pb-6 max-md:px-6">
          <div className="rounded-[12px] overflow-hidden border border-border">

            {item.visual.type === "gif" ? (
              <a
                href={item.preview.url}
                target="_blank"
                rel="noreferrer"
                className="block group"
              >
                <img
                  src={item.visual.content}
                  className="w-full max-h-[360px] object-cover opacity-90 hover:opacity-100 transition duration-500"
                />
              </a>
            ) : (
              <div className="p-4">
                {item.visual.content}
              </div>
            )}

          </div>
        </div>
      )}

      {/* Expandable body */}
      <div
        className="overflow-hidden transition-all duration-500"
        style={{
          maxHeight: open ? "900px" : "0px",
          transitionTimingFunction: "var(--ease)",
        }}
      >
        {/* Three columns */}
        <div className="grid grid-cols-3 max-md:grid-cols-1 border-t border-border">
          {item.cols.map((col, ci) => (
            <div
              key={ci}
              className={`p-7 max-md:p-6 ${ci < item.cols.length - 1 ? "border-r max-md:border-r-0 max-md:border-b" : ""} border-border`}
            >
              <div className="text-[10px] uppercase tracking-[0.13em] text-muted-foreground mb-3">
                {col.label}
              </div>
              <p className="text-[15px] font-light leading-[1.7]" style={{ color: "hsl(var(--foreground) / 0.7)" }}>
                {col.content}
              </p>
            </div>
          ))}
        </div>

        {/* Diagram */}
        {item.diagram && (
          <div className="border-t border-border px-9 py-6 max-md:px-6" style={{ background: "hsl(var(--background) / 0.3)" }}>
            <div className="text-[10px] uppercase tracking-[0.12em] text-muted-foreground mb-4">
              {item.diagramLabel}
            </div>
            <div className="overflow-x-auto">
              {item.diagram}
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
};

const WorkSection = () => (
  <section id="work" className="pb-[120px]">
    <div className="w-full max-w-[1100px] mx-auto px-12 max-md:px-6">
      <SectionHead title="Work" subtitle="Highlights from the journey so far" />
      <div className="flex flex-col gap-3.5">
        {workItems.map((item, i) => (
          <CaseCard key={item.id} item={item} index={i} />
        ))}
      </div>
    </div>
  </section>
);

export default WorkSection;
