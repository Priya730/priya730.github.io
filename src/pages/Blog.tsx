import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { getAllPosts } from "@/lib/blog";
import CustomCursor from "@/components/CustomCursor";

const Blog = () => {
  const posts = getAllPosts();

  return (
    <>
      <CustomCursor />
      <div className="min-h-screen" style={{ background: "hsl(var(--background))", color: "hsl(var(--foreground))" }}>
        {/* Header */}
        <header className="w-full max-w-[820px] mx-auto px-12 max-md:px-6 pt-28 pb-16">
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-[13px] text-muted-foreground no-underline hover:text-foreground transition-colors mb-10 cursor-none"
          >
            ← Back to home
          </Link>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(36px, 5vw, 56px)",
              fontWeight: 700,
              letterSpacing: "-0.025em",
              lineHeight: 1.1,
            }}
            className="mb-3"
          >
            Writing
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="text-[16px] text-muted-foreground font-light leading-[1.7] max-w-[500px]"
            style={{ fontFamily: "var(--font-display)", fontStyle: "italic" }}
          >
            Ideas I've been turning over  on engineering, AI, open source, and building things that matter.
          </motion.p>
        </header>

        {/* Post list */}
        <main className="w-full max-w-[820px] mx-auto px-12 max-md:px-6 pb-24">
          <div className="flex flex-col">
            {posts.map((post, i) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
              >
                <Link
                  to={`/blog/${post.slug}`}
                  className="py-7 border-b border-border first:border-t grid grid-cols-[1fr_auto] gap-7 items-center no-underline group cursor-none block"
                >
                  <div>
                    <div className="text-[11px] uppercase tracking-[0.1em] text-muted-foreground mb-1.5">
                      {post.category}
                      {post.date && (
                        <span className="ml-3 opacity-60">
                          {new Date(post.date).toLocaleDateString("en-US", { month: "short", year: "numeric" })}
                        </span>
                      )}
                    </div>
                    <div
                      className="group-hover:opacity-60 transition-opacity text-foreground"
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "clamp(18px, 2vw, 24px)",
                        fontWeight: 500,
                        lineHeight: 1.25,
                      }}
                    >
                      {post.title}
                    </div>
                    <div className="text-[14px] font-light text-muted-foreground leading-[1.7] mt-2 max-w-[540px]">
                      {post.excerpt}
                    </div>
                  </div>
                  <svg
                    className="transition-transform duration-300 group-hover:translate-x-[3px] group-hover:-translate-y-[3px] shrink-0"
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
                </Link>
              </motion.div>
            ))}
          </div>

          {posts.length === 0 && (
            <p className="text-muted-foreground text-center py-20 text-[15px]">
              No posts yet. Add markdown files to <code className="text-[13px] px-1.5 py-0.5 rounded bg-card border border-border">src/content/blog/</code> to get started.
            </p>
          )}
        </main>
      </div>
    </>
  );
};

export default Blog;
