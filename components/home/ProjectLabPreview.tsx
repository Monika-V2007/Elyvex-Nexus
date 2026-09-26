import React from "react";
import Link from "next/link";
import { Button } from "../common/Button";
import { externalLinks } from "@/config/links";
import {
  Terminal,
  Code2,
  CheckCircle,
  Trophy,
  Cpu,
  ArrowRight,
  Sparkles,
} from "lucide-react";

interface ProjectLabPreviewProps {
  locale: string;
  dict: any;
}

export function ProjectLabPreview({ locale, dict }: ProjectLabPreviewProps) {
  const labUrl = externalLinks.projectLab.startsWith("http")
    ? externalLinks.projectLab
    : `/${locale}/project-lab`;

  const isExternal = externalLinks.projectLab.startsWith("http");

  const features = dict?.projectLab?.features || [
    "Multi-language coding sandbox (Python, JavaScript, Java, C++)",
    "Progressive problem sets from algorithmic fundamentals to system tasks",
    "Milestone-based project workflows with git version control",
    "Transparent performance tracking, badges, and learning analytics",
    "AI-guided hints and contextual debugging assistance",
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-slate-900 to-slate-950 text-white border-t border-slate-800 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide bg-sky-500/10 text-sky-400 border border-sky-500/20">
              <Terminal className="w-3.5 h-3.5" />
              <span>{dict?.projectLab?.badge || "Interactive Environment"}</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              {dict?.projectLab?.title || "Practice. Solve. Build."}
            </h2>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              {dict?.projectLab?.subtitle ||
                "The Elyvex Project Lab will provide an interactive environment where students can practice coding, solve programming problems, work on projects, track performance, and improve their technical problem-solving abilities."}
            </p>

            <ul className="space-y-3 pt-2">
              {features.map((feat: string, idx: number) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base text-slate-200">
                    {feat}
                  </span>
                </li>
              ))}
            </ul>

            <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
              <Button
                href={labUrl}
                external={isExternal}
                variant="primary"
                size="lg"
                icon={<ArrowRight className="w-4 h-4" />}
                className="w-full sm:w-auto"
              >
                {dict?.projectLab?.cta || "Explore Project Lab"}
              </Button>
            </div>
          </div>

          {/* Right Simulated Lab Interactive Preview Card */}
          <div className="lg:col-span-5">
            <div className="rounded-3xl p-6 bg-slate-900/90 border border-slate-700 shadow-2xl space-y-5">
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <span className="text-xs font-mono text-slate-400 flex items-center gap-2">
                  <Code2 className="w-4 h-4 text-sky-400" />
                  lab.elyvexnexus.com
                </span>
                <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400">
                  Interactive Sandbox
                </span>
              </div>

              {/* Code snippet simulation */}
              <div className="p-4 rounded-xl bg-slate-950 font-mono text-xs text-slate-300 space-y-1.5 border border-slate-800/80">
                <p className="text-slate-500">// Problem: Two Sum with Hash Map</p>
                <p>
                  <span className="text-indigo-400">def</span>{" "}
                  <span className="text-sky-300">solve_two_sum</span>(nums, target):
                </p>
                <p className="pl-4">lookup = {"{}"}</p>
                <p className="pl-4">
                  <span className="text-indigo-400">for</span> i, n{" "}
                  <span className="text-indigo-400">in</span> enumerate(nums):
                </p>
                <p className="pl-8">diff = target - n</p>
                <p className="pl-8">
                  <span className="text-indigo-400">if</span> diff{" "}
                  <span className="text-indigo-400">in</span> lookup:
                </p>
                <p className="pl-12 text-emerald-400">
                  <span className="text-indigo-400">return</span> [lookup[diff], i]
                </p>
                <p className="pl-8">lookup[n] = i</p>
              </div>

              {/* Badges preview */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="p-3 rounded-xl bg-slate-800/60 border border-slate-700/60 flex items-center gap-3">
                  <Trophy className="w-5 h-5 text-amber-400 shrink-0" />
                  <div>
                    <p className="text-xs font-semibold text-white">Algorithms</p>
                    <p className="text-[10px] text-slate-400">50+ Tests Passed</p>
                  </div>
                </div>
                <div className="p-3 rounded-xl bg-slate-800/60 border border-slate-700/60 flex items-center gap-3">
                  <Cpu className="w-5 h-5 text-sky-400 shrink-0" />
                  <div>
                    <p className="text-xs font-semibold text-white">Real Projects</p>
                    <p className="text-[10px] text-slate-400">Git Integrated</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
