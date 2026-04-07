import { useEffect, useState, useCallback } from "react";

const Navbar = () => {
  const [active, setActive] = useState("index");
  const [isDark, setIsDark] = useState(true);

  const toggleTheme = useCallback((e: React.MouseEvent) => {
    const x = e.clientX;
    const y = e.clientY;
    const size = Math.max(window.innerWidth, window.innerHeight) * 2.5;

    const ripple = document.createElement("div");
    ripple.className = "theme-ripple";
    ripple.style.left = x + "px";
    ripple.style.top = y + "px";
    ripple.style.width = size + "px";
    ripple.style.height = size + "px";
    ripple.style.marginLeft = -size / 2 + "px";
    ripple.style.marginTop = -size / 2 + "px";
    ripple.style.background = isDark
      ? "hsl(40, 14%, 95%)"
      : "hsl(0, 0%, 6%)";
    document.body.appendChild(ripple);
    setTimeout(() => ripple.remove(), 1400);

    setIsDark((prev) => {
      const next = !prev;
      document.body.classList.toggle("light", !next);
      return next;
    });
  }, [isDark]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "about", "work", "gsoc", "building", "writing", "talks"];
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom > 200) {
            setActive(id === "hero" ? "index" : id);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { id: "index", href: "#hero", label: "Index" },
    { id: "work", href: "#work", label: "Work" },
    { id: "writing", href: "#writing", label: "Writing" },
    { id: "building", href: "#building", label: "Now" },
  ];

  return (
    <nav
      className="fixed top-[22px] left-1/2 -translate-x-1/2 z-[800] flex items-center gap-[3px] border border-border rounded-full px-[7px] py-[5px]"
      style={{
        background: "hsla(0,0%,6%,0.88)",
        backdropFilter: "blur(24px)",
        WebkitBackdropFilter: "blur(24px)",
      }}
    >
      <div
        className="w-8 h-8 rounded-full border border-border grid place-items-center shrink-0 mr-[2px]"
        style={{
          background: "hsl(var(--card))",
          fontFamily: "var(--font-display)",
          fontSize: "13px",
          fontWeight: 600,
        }}
      >
        P
      </div>
      <ul className="flex items-center gap-[1px] list-none">
        {links.map((l) => (
          <li key={l.id}>
            <a
              href={l.href}
              className={`block px-[13px] py-[5px] rounded-full text-[13.5px] font-normal no-underline transition-colors duration-200 ${
                active === l.id
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
              style={
                active === l.id
                  ? { background: "rgba(255,255,255,0.07)" }
                  : {}
              }
              onClick={() => setActive(l.id)}
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>
      <button
        onClick={toggleTheme}
        className="w-8 h-8 rounded-full border border-border grid place-items-center ml-[2px] text-muted-foreground hover:text-foreground transition-colors cursor-none"
        style={{ background: "hsl(var(--card))" }}
        aria-label="Toggle theme"
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          {isDark ? (
            <circle cx="12" cy="12" r="5" />
          ) : (
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
          )}
        </svg>
      </button>
    </nav>
  );
};

export default Navbar;
