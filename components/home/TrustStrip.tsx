import React from "react";
import {
  Code,
  FolderGit2,
  BrainCircuit,
  Building2,
  Award,
  Sparkles,
} from "lucide-react";

interface TrustStripProps {
  dict: any;
}

export function TrustStrip({ dict }: TrustStripProps) {
  const items = [
    {
      icon: <Code className="w-5 h-5 text-sky-500" />,
      label: dict?.trust?.practical || "Practical Learning",
    },
    {
      icon: <FolderGit2 className="w-5 h-5 text-indigo-500" />,
      label: dict?.trust?.projects || "Real Projects",
    },
    {
      icon: <BrainCircuit className="w-5 h-5 text-cyan-500" />,
      label: dict?.trust?.skills || "Skill Development",
    },
    {
      icon: <Building2 className="w-5 h-5 text-blue-500" />,
      label: dict?.trust?.industry || "Industry-Oriented Practice",
    },
    {
      icon: <Award className="w-5 h-5 text-emerald-500" />,
      label: dict?.trust?.certificates || "Certificates",
    },
    {
      icon: <Sparkles className="w-5 h-5 text-amber-500" />,
      label: dict?.trust?.future || "Future Opportunities",
    },
  ];

  return (
    <section className="w-full border-y border-slate-200/80 dark:border-white/10 bg-slate-50/80 dark:bg-[#070b1a]/60 backdrop-blur-xs py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-4 items-center justify-between">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3 justify-center sm:justify-start group"
            >
              <div className="p-2 rounded-xl bg-white dark:bg-slate-800/80 border border-slate-200/60 dark:border-slate-700/60 shadow-xs group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <span className="text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300 tracking-tight">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
