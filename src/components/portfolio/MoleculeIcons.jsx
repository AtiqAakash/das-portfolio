import React from "react";

export function AntibodyIcon({ className = "w-10 h-10", stroke = "currentColor" }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" className={className}>
      <g stroke={stroke} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M32 34 L20 14" />
        <path d="M32 34 L44 14" />
        <path d="M32 34 L32 56" />
        <circle cx="20" cy="12" r="3" />
        <circle cx="44" cy="12" r="3" />
        <circle cx="32" cy="56" r="3" />
        <path d="M26 24 L38 24" opacity="0.5" />
      </g>
    </svg>
  );
}

export function CarTIcon({ className = "w-10 h-10", stroke = "currentColor" }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" className={className}>
      <g stroke={stroke} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="32" cy="36" r="18" />
        <path d="M22 22 L18 10" />
        <path d="M32 20 L32 8" />
        <path d="M42 22 L46 10" />
        <circle cx="18" cy="8" r="2.5" />
        <circle cx="32" cy="6" r="2.5" />
        <circle cx="46" cy="8" r="2.5" />
        <path d="M24 40 Q32 48 40 40" opacity="0.5" />
      </g>
    </svg>
  );
}

export function HelixIcon({ className = "w-10 h-10", stroke = "currentColor" }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" className={className}>
      <g stroke={stroke} strokeWidth="2" strokeLinecap="round">
        <path d="M20 8 C 44 20, 44 28, 20 40 C 44 52, 44 60, 20 60" fill="none" />
        <path d="M44 8 C 20 20, 20 28, 44 40 C 20 52, 20 60, 44 60" fill="none" />
        <line x1="22" y1="16" x2="42" y2="16" opacity="0.6" />
        <line x1="26" y1="24" x2="38" y2="24" opacity="0.6" />
        <line x1="26" y1="32" x2="38" y2="32" opacity="0.6" />
        <line x1="22" y1="40" x2="42" y2="40" opacity="0.6" />
        <line x1="26" y1="48" x2="38" y2="48" opacity="0.6" />
        <line x1="22" y1="56" x2="42" y2="56" opacity="0.6" />
      </g>
    </svg>
  );
}

export function FlowCytometerIcon({ className = "w-10 h-10", stroke = "currentColor" }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" className={className}>
      <g stroke={stroke} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="10" y="10" width="44" height="44" rx="2" />
        <path d="M10 38 L26 28 L38 34 L54 18" />
        <circle cx="26" cy="28" r="1.5" fill={stroke} />
        <circle cx="38" cy="34" r="1.5" fill={stroke} />
        <circle cx="18" cy="48" r="1" fill={stroke} />
        <circle cx="44" cy="44" r="1" fill={stroke} />
        <circle cx="50" cy="46" r="1" fill={stroke} />
      </g>
    </svg>
  );
}