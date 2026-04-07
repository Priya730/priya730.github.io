const FlowDiagram = () => (
  <svg
    viewBox="0 0 660 160"
    width="100%"
    style={{ maxWidth: "660px", fontFamily: "'DM Sans', sans-serif" }}
  >
    <defs>
      <marker id="a1" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto">
        <path d="M0,0 L0,6 L7,3 z" fill="#2a2a2a" />
      </marker>
      <marker id="a2" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto">
        <path d="M0,0 L0,6 L7,3 z" fill="#1a3a24" />
      </marker>
    </defs>

    <rect x="8" y="61" width="100" height="34" rx="6" fill="none" stroke="#222" strokeWidth="1.4" />
    <text x="58" y="82" textAnchor="middle" fill="#555" fontSize="12">Prompt</text>

    <line x1="110" y1="78" x2="148" y2="78" stroke="#222" strokeWidth="1.2" markerEnd="url(#a1)" />

    <rect x="150" y="61" width="110" height="34" rx="6" fill="none" stroke="#222" strokeWidth="1.4" />
    <text x="205" y="82" textAnchor="middle" fill="#555" fontSize="12">Refine + Generate</text>

    <line x1="262" y1="78" x2="300" y2="78" stroke="#222" strokeWidth="1.2" markerEnd="url(#a1)" />

    <rect x="302" y="61" width="90" height="34" rx="6" fill="none" stroke="#303030" strokeWidth="1.4" />
    <text x="347" y="82" textAnchor="middle" fill="#666" fontSize="12">LLM Judge</text>

    {/* pass fail */}
    <line
      x1="393"
      y1="68"
      x2="440"
      y2="40"
      stroke="#222"
      strokeWidth="1.1"
      strokeDasharray="4,3"
      markerEnd="url(#a1)"
    />
    <text x="436" y="35" fill="#333" fontSize="10.5">fail → retry</text>

    <line
      x1="393"
      y1="88"
      x2="440"
      y2="108"
      stroke="#1a3a24"
      strokeWidth="1.2"
      markerEnd="url(#a2)"
    />

    <rect x="442" y="95" width="96" height="30" rx="6" fill="none" stroke="#1a3a24" strokeWidth="1.4" />
    <text x="490" y="114" textAnchor="middle" fill="rgba(74,222,128,.7)" fontSize="12">
      Vector Dedup
    </text>

    <line x1="540" y1="110" x2="578" y2="110" stroke="#1a3a24" strokeWidth="1.2" markerEnd="url(#a2)" />

    <rect x="580" y="95" width="72" height="30" rx="6" fill="none" stroke="#1a3a24" strokeWidth="1.4" />
    <text x="616" y="114" textAnchor="middle" fill="rgba(74,222,128,.7)" fontSize="11.5">
      ✓ Bank
    </text>
  </svg>
);

export default FlowDiagram;