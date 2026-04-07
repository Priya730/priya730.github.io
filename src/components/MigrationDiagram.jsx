const MigrationDiagram = () => (
  <svg
    viewBox="0 0 720 110"
    className="w-full"
    style={{ maxWidth: 720 }}
  >
    <defs>
      <marker
        id="ah2"
        markerWidth="8"
        markerHeight="6"
        refX="8"
        refY="3"
        orient="auto"
      >
        <path d="M0,0 L8,3 L0,6" fill="hsl(var(--text-dim))" />
      </marker>
    </defs>

    {/* Theia */}
    <rect x="0" y="12" width="120" height="32" rx="6"
      fill="none" stroke="hsl(var(--border))" strokeWidth="1" />
    <text x="60" y="32" textAnchor="middle"
      fill="hsl(var(--muted-foreground))" fontSize="11" fontFamily="var(--font-body)">
      Theia IDE
    </text>

    {/* Arrow */}
    <line x1="125" y1="28" x2="230" y2="28"
      stroke="hsl(var(--text-dim))" strokeWidth="1" markerEnd="url(#ah2)" />

    {/* VS Code */}
    <rect x="235" y="12" width="160" height="32" rx="6"
      fill="none" stroke="hsl(var(--border))" strokeWidth="1" />
    <text x="315" y="32" textAnchor="middle"
      fill="hsl(var(--muted-foreground))" fontSize="11" fontFamily="var(--font-body)">
      VS Code (Assessments)
    </text>

    {/* Arrow */}
    <line x1="400" y1="28" x2="470" y2="28"
      stroke="hsl(var(--text-dim))" strokeWidth="1" markerEnd="url(#ah2)" />

    {/* Capabilities */}
    <text x="490" y="24"
      fill="hsl(var(--muted-foreground))" fontSize="10" fontFamily="var(--font-body)">
      Familiar IDE
    </text>
    <text x="490" y="40"
      fill="hsl(var(--muted-foreground))" fontSize="10" fontFamily="var(--font-body)">
      LSP + Debug
    </text>

    {/* Scale */}
    <text x="235" y="60"
      fill="hsl(var(--muted-foreground))" fontSize="10" fontFamily="var(--font-body)">
      50+ stacks · ~68K attempts / month
    </text>

    {/* Observability Layer */}
    <rect x="235" y="70" width="160" height="26" rx="6"
      fill="none" stroke="hsl(var(--border))" strokeDasharray="4 3" />
    <text x="315" y="87" textAnchor="middle"
      fill="hsl(var(--muted-foreground))" fontSize="10" fontFamily="var(--font-body)">
      New Relic (observability)
    </text>

    {/* Outcome */}
    <text x="490" y="90"
      fill="hsl(var(--foreground))" fontSize="10"
      fontFamily="var(--font-body)" fontWeight="500">
      100% traffic migrated · Candidate DX ↑ · Support ↑
    </text>
  </svg>
);

export default MigrationDiagram;