import React from "react";
import Link from "next/link";
import { Button } from "../common/Button";
import { ArrowRight, CheckCircle2, Layers } from "lucide-react";

interface AboutPreviewProps {
  locale: string;
  dict: any;
}

export function AboutPreview({ locale, dict }: AboutPreviewProps) {
  const points: string[] = dict?.aboutPreview?.points || [
    "Structured, up-to-date curricula covering modern tech stacks",
    "Hands-on coding tasks, real repositories, and active builds",
    "Continuous performance feedback and milestone reviews",
    "Recognized certificates linked to verifiable project deliverables",
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Visual Presentation */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative rounded-3xl p-7 bg-gradient-to-tr from-sky-900/30 via-slate-900 to-indigo-950/40 border border-slate-200 dark:border-white/10 shadow-xl overflow-hidden">
              <div className="space-y-6">
                <div className="inline-flex p-3 rounded-2xl bg-sky-500/10 text-sky-400 border border-sky-500/20">
                  <Layers className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    Actionable Technical Competency
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    We bridge the gap between classroom textbooks and industrial engineering workflows. Every concept is tested through real repository commits and measurable milestones.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white/5 border border-white/5 space-y-3">
                  <div className="flex items-center justify-between text-xs text-slate-300 font-medium">
                    <span>Curriculum Design</span>
                    <span className="text-sky-400">Industry Aligned</span>
                  </div>
                  <div className="w-full bg-slate-800 rounded-full h-2 overflow-hidden">
                    <div className="bg-gradient-to-r from-sky-500 to-indigo-500 h-2 rounded-full w-full" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Text Description */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide bg-sky-50 dark:bg-sky-950/60 text-sky-600 dark:text-sky-400 border border-sky-200/80 dark:border-sky-800/60">
              {dict?.aboutPreview?.badge || "Our Philosophy"}
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
              {dict?.aboutPreview?.title || "Learning Beyond the Classroom"}
            </h2>

            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
              {dict?.aboutPreview?.description ||
                "Elyvex Nexus focuses on actionable, hands-on learning rather than purely theoretical memorization. Through industry-relevant modules, structured milestones, and continuous coding practice, we guide students from foundational understanding to real-world capability."}
            </p>

            <ul className="space-y-3 pt-2">
              {points.map((pt, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-sky-500 shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base text-slate-700 dark:text-slate-200 font-medium">
                    {pt}
                  </span>
                </li>
              ))}
            </ul>

            <div className="pt-4">
              <Button
                href={`/${locale}/about`}
                variant="outline"
                size="md"
                icon={<ArrowRight className="w-4 h-4" />}
                className="font-semibold"
              >
                {dict?.aboutPreview?.cta || "Discover Elyvex Nexus"}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
