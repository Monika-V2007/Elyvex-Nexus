import React from "react";
import Link from "next/link";

interface BrandLogoProps {
  locale?: string;
  className?: string;
  showTagline?: boolean;
}

export function BrandLogo({
  locale = "en",
  className = "",
  showTagline = false,
}: BrandLogoProps) {
  return (
    <Link
      href={`/${locale}`}
      className={`inline-flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 rounded-lg p-1 transition-transform ${className}`}
      aria-label="Elyvex Nexus Home"
    >
      {/* Precision Nexus Geometric Icon */}
      <div className="relative w-9 h-9 rounded-xl bg-gradient-to-tr from-sky-600 via-indigo-600 to-cyan-400 p-[1.5px] shadow-sm shadow-sky-500/20 group-hover:shadow-sky-500/30 transition-all duration-300">
        <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center overflow-hidden">
          <svg
            className="w-5 h-5 text-sky-400 group-hover:scale-110 transition-transform duration-300"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {/* Connected Nexus Nodes */}
            <circle cx="12" cy="12" r="3" className="fill-sky-400/20" />
            <circle cx="5" cy="7" r="2" />
            <circle cx="19" cy="7" r="2" />
            <circle cx="5" cy="17" r="2" />
            <circle cx="19" cy="17" r="2" />
            <path d="M7 8l3 3m4 2l3 3M7 16l3-3m4-2l3-3" />
          </svg>
        </div>
      </div>

      <div className="flex flex-col">
        <span className="font-bold text-lg tracking-tight text-slate-900 dark:text-white flex items-center gap-1.5 font-sans">
          <span>Elyvex</span>
          <span className="text-sky-600 dark:text-sky-400 font-semibold">Nexus</span>
        </span>
        {showTagline && (
          <span className="text-[10px] tracking-wider uppercase text-slate-500 dark:text-slate-400 -mt-1 font-medium">
            Empowering Skills
          </span>
        )}
      </div>
    </Link>
  );
}
