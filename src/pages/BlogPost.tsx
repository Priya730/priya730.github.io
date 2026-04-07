import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import { getPostBySlug } from "@/lib/blog";
import CustomCursor from "@/components/CustomCursor";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getPostBySlug(slug) : undefined;

  if (!post) return <Navigate to="/blog" replace />;

  return (
    <>
      <CustomCursor />
      <div className="min-h-screen" style={{ background: "hsl(var(--background))", color: "hsl(var(--foreground))" }}>
        {/* Header */}
        <header className="w-full max-w-[720px] mx-auto px-12 max-md:px-6 pt-28 pb-10">
          <Link
            to="/blog"
            className="inline-flex items-center gap-1.5 text-[13px] text-muted-foreground no-underline hover:text-foreground transition-colors mb-10 cursor-none"
          >
            ← All posts
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-[11px] uppercase tracking-[0.1em] text-muted-foreground mb-4 flex items-center gap-3">
              <span>{post.category}</span>
              {post.date && (
                <>
                  <span className="w-1 h-1 rounded-full bg-muted-foreground opacity-40" />
                  <span>
                    {new Date(post.date).toLocaleDateString("en-US", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </span>
                </>
              )}
            </div>
            <h1
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(30px, 4.5vw, 48px)",
                fontWeight: 700,
                letterSpacing: "-0.025em",
                lineHeight: 1.1,
              }}
              className="mb-4"
            >
              {post.title}
            </h1>
            <p className="text-[16px] text-muted-foreground font-light leading-[1.7] max-w-[560px]">
              {post.excerpt}
            </p>
          </motion.div>
        </header>

        <div className="w-full max-w-[720px] mx-auto px-12 max-md:px-6 border-t border-border" />

        {/* Content */}
        <motion.article
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="w-full max-w-[720px] mx-auto px-12 max-md:px-6 pt-12 pb-24 prose-custom"
        >
          <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeSlug]}>
            {post.content}
          </ReactMarkdown>
        </motion.article>

        {/* Footer nav */}
        <div className="w-full max-w-[720px] mx-auto px-12 max-md:px-6 pb-20 border-t border-border pt-10">
          <Link
            to="/blog"
            className="inline-flex items-center gap-1.5 text-[14px] text-muted-foreground no-underline hover:text-foreground transition-colors cursor-none"
          >
            ← Back to all posts
          </Link>
        </div>
      </div>
    </>
  );
};

export default BlogPost;
