import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import profile from '../../assets/talk.webp'


const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  

  return (
    <section id="about" className="min-h-screen flex items-center py-[120px]">
      <div className="w-full max-w-[1100px] mx-auto px-12 max-md:px-6" ref={ref}>
        {/* Creative layout: overlapping card on image */}
        <div className="relative grid grid-cols-[1.1fr_1fr] gap-0 max-md:grid-cols-1 max-md:gap-6">
          {/* Photo side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative"
          >
            <div
              className="rounded-[14px] overflow-hidden aspect-[3/4] relative"
            >
              <img className=" rounded-[14px] absolute inset-0 flex items-center justify-center text-[12px] italic text-muted-foreground" src={profile} alt="Hi!" />
            </div>

            {/* Floating fun facts */}
            {/* <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="absolute top-8 -right-3 px-3 py-2 rounded-lg border border-border text-[11px] text-muted-foreground max-md:hidden z-10"
              style={{ background: "hsl(var(--card))" }}
            >
              ☕ chai &gt; coffee
            </motion.div> */}
          </motion.div>

          {/* Bio card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="relative -ml-12 mt-12 max-md:ml-0 max-md:mt-0 z-10"
          >
            <div
              className="rounded-[14px] border border-border p-10"
              style={{ background: "hsl(var(--card))" }}
            >
              <p className="text-[15.5px] font-light leading-[1.82] mb-[18px]">
                I'm a fullstack engineer who thinks more about the{" "}
                <em className="not-italic font-medium">why</em> than the{" "}
                <em className="not-italic font-medium">how</em>. I care about
                products that feel inevitable — where the engineering disappears
                and only the experience remains.
              </p>
              <p className="text-[15.5px] font-light leading-[1.82] mb-[18px]">
                I've spent the last few years at{" "}
                <a
                  href="https://www.hackerrank.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-b border-border hover:border-foreground transition-colors no-underline"
                >
                  HackerRank ↗
                </a>
                , building across the full stack — from{" "}
                <em className="not-italic font-medium">
                  AI-powered content platforms
                </em>{" "}
                to IDE infrastructure to integrity systems.
              </p>
              <p className="text-[15.5px] font-light leading-[1.82] mb-[18px]">
                In 2022, I was part of{" "}
                <em className="not-italic font-medium">
                  Google Summer of Code
                </em>{" "}
                with CHAOSS under the Linux Foundation, contributing to
                open-source health metrics.
              </p>
              <p className="text-[15.5px] font-light leading-[1.82]">
                Off the terminal, I'm reading — business post-mortems, startup
                memoirs, mysteries, and the occasional Harry Potter reread.
              </p>

              <div className="mt-8 pt-6 border-t border-border">
                <div
                  className="text-[30px] italic mb-1.5"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 400,
                  }}
                >
                  Priya
                </div>
                <div className="text-[12.5px] text-muted-foreground leading-[1.7]">
                  India ·{new Date().getFullYear()}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
