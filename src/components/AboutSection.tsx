import { useRef } from "react";
import { color, motion, useInView } from "framer-motion";
import profile from '../../assets/talk.webp'


const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-[120px]">
      <div className="w-full max-w-[1200px] mx-auto px-12 max-md:px-6" ref={ref}>
        <div className="grid grid-cols-2 gap-5 items-start max-md:grid-cols-1">
          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.1 }}
            className="rounded-[14px] overflow-hidden aspect-[3/4] relative group"
          >
            <div className="absolute inset-0 flex items-center justify-center text-[12px] italic text-muted-foreground">
              <img className=" rounded-[14px] absolute inset-0 flex items-center justify-center text-[12px] italic text-muted-foreground" src={profile} alt="Hi!" />
            </div>
          </motion.div>

          {/* Bio card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.25 }}
            className="rounded-[16px] border border-border p-10"
            style={{ background: "hsl(var(--card))" }}
          >
            <p className="text-[16px] font-light leading-[1.85] mb-[18px]">
              I'm a fullstack product engineer, heavier on the backend. I've worked on AI content systems, IDE infrastructure, and integrity platforms at {" "}
              <a
                href="https://www.hackerrank.com"
                target="_blank"
                rel="noopener noreferrer"
                className="border-b border-border hover:border-foreground transition-colors no-underline font-bold"
                style={{color: "rgb(22 163 74"}}
              >
                HackerRank ↗
              </a>{" "}
              , each starting from a problem and ending with a shipped outcome.
            </p>
                        <p className="text-[16px] font-light leading-[1.85] mb-[18px]">
  I started coding as a hobby. Over time, it led me through open source, GSoC in 2022,
  and now to building production systems at HackerRank since 2023 that are used by thousands of companies. Somewhere along the way, my mindset shifted. I stopped asking "how do I build this?" and began asking{" "}
  <em className="not-italic font-medium">"why should this exist at all?"</em>
</p>
            <p className="text-[16px] font-light leading-[1.85]">
              In the new era of software, I think the engineers who matter aren't the
              ones who code fastest. They're the ones who know{" "}
              <em className="not-italic font-medium">what to build and why</em> and
              can direct every tool, including AI, toward that answer.
            </p>

            {/* Signature */}
            <div className="mt-8 pt-6 border-t border-border">
              <div
                className="text-[28px] italic mb-1"
                style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
              >
                Priya
              </div>
              <div className="text-[12px] text-muted-foreground leading-[1.7]">
                India ·{new Date().getFullYear()}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
