import { useEffect, useRef, useState } from "react";

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [cursorLabel, setCursorLabel] = useState<string | null>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    const move = (e: MouseEvent) => {
      cursor.style.left = e.clientX + "px";
      cursor.style.top = e.clientY + "px";
    };

    const handleOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // "Try it out" label on external links
      const linkEl = target.closest("a[href^='http'], a[target='_blank'], [data-cursor-label]");
      if (linkEl) {
        const label = linkEl.getAttribute("data-cursor-label") || "Try it out ↗";
        setCursorLabel(label);
        setIsHovering(true);
        return;
      }
      if (target.closest("a, button, [data-hover]")) {
        setIsHovering(true);
        setCursorLabel(null);
      }
    };

    const handleOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest("a, button, [data-hover], [data-cursor-label]")) {
        setIsHovering(false);
        setCursorLabel(null);
      }
    };

    window.addEventListener("mousemove", move);
    document.addEventListener("mouseover", handleOver);
    document.addEventListener("mouseout", handleOut);
    return () => {
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseover", handleOver);
      document.removeEventListener("mouseout", handleOut);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      id="custom-cursor"
      className={isHovering ? "big" : ""}
      style={{ position: "fixed", pointerEvents: "none" }}
    >
      {cursorLabel && (
        <span
          className="cursor-label"
          style={{
            position: "absolute",
            top: "50%",
            left: "calc(100% + 8px)",
            transform: "translateY(-50%)",
            whiteSpace: "nowrap",
            fontSize: "12px",
            fontWeight: 500,
            padding: "4px 10px",
            borderRadius: "6px",
            background: "hsl(var(--foreground))",
            color: "hsl(var(--background))",
            pointerEvents: "none",
            mixBlendMode: "normal",
          }}
        >
          {cursorLabel}
        </span>
      )}
    </div>
  );
};

export default CustomCursor;
