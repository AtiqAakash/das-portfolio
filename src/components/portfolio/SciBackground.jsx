import React from "react";

// Abstract "t-SNE-like" scatter + flow-cytometry gate as a subtle background decoration
export default function SciBackground({ className = "", variant = "tsne" }) {
  if (variant === "tsne") {
    // Pseudo-clustered points
    const clusters = [
      { cx: 120, cy: 140, n: 40, color: "#00D4FF" },
      { cx: 260, cy: 90, n: 35, color: "#6FA8FF" },
      { cx: 340, cy: 220, n: 45, color: "#00D4FF" },
      { cx: 180, cy: 260, n: 30, color: "#B8E3FF" },
    ];
    const points = clusters.flatMap((c, ci) =>
      Array.from({ length: c.n }).map((_, i) => {
        const angle = Math.random() * Math.PI * 2;
        const r = Math.random() * 45;
        return {
          x: c.cx + Math.cos(angle) * r,
          y: c.cy + Math.sin(angle) * r,
          s: 1.2 + Math.random() * 2,
          c: c.color,
          k: `${ci}-${i}`,
        };
      })
    );
    return (
      <svg
        viewBox="0 0 480 340"
        className={className}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {points.map((p) => (
          <circle key={p.k} cx={p.x} cy={p.y} r={p.s} fill={p.c} opacity="0.55" />
        ))}
      </svg>
    );
  }

  if (variant === "killing") {
    // Fake killing-assay sigmoid curves
    return (
      <svg viewBox="0 0 400 200" className={className} fill="none">
        <g stroke="#00D4FF" strokeWidth="1.5" opacity="0.8">
          <path d="M10 180 C 80 178, 120 170, 160 140 S 240 40, 300 25 L 390 20" />
        </g>
        <g stroke="#6FA8FF" strokeWidth="1.5" opacity="0.6">
          <path d="M10 180 C 100 178, 150 175, 200 150 S 280 60, 340 40 L 390 35" />
        </g>
        <g stroke="#ffffff" strokeWidth="1" opacity="0.15" strokeDasharray="2 4">
          <line x1="10" y1="10" x2="10" y2="190" />
          <line x1="10" y1="190" x2="390" y2="190" />
        </g>
      </svg>
    );
  }

  return null;
}