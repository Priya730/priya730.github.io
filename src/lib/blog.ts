// Blog utilities  reads markdown files from src/content/blog/
// Uses Vite's import.meta.glob to load all .md files at build time

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  content: string;
}

function parseFrontmatter(raw: string): { meta: Record<string, string>; content: string } {
  const match = raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!match) return { meta: {}, content: raw };

  const meta: Record<string, string> = {};
  for (const line of match[1].split("\n")) {
    const idx = line.indexOf(":");
    if (idx > 0) {
      const key = line.slice(0, idx).trim();
      let val = line.slice(idx + 1).trim();
      if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
        val = val.slice(1, -1);
      }
      meta[key] = val;
    }
  }
  return { meta, content: match[2].trim() };
}

// Vite glob import  eagerly loads all markdown as raw strings
const modules = import.meta.glob("/src/content/blog/*.md", { eager: true, query: "?raw", import: "default" }) as Record<string, string>;

let _posts: BlogPost[] | null = null;

export function getAllPosts(): BlogPost[] {
  if (_posts) return _posts;

  _posts = Object.entries(modules)
    .map(([path, raw]) => {
      const slug = path.split("/").pop()!.replace(/\.md$/, "");
      const { meta, content } = parseFrontmatter(raw);
      return {
        slug,
        title: meta.title || slug,
        date: meta.date || "",
        category: meta.category || "",
        excerpt: meta.excerpt || "",
        content,
      };
    })
    .sort((a, b) => (b.date > a.date ? 1 : -1));

  return _posts;
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return getAllPosts().find((p) => p.slug === slug);
}
