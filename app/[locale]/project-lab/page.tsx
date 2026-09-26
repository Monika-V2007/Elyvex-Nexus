import React from "react";
import { Metadata } from "next";
import { getDictionary } from "@/lib/i18n";
import { externalLinks } from "@/config/links";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Button } from "@/components/common/Button";
import {
  Terminal,
  Code2,
  Trophy,
  Cpu,
  GitBranch,
  Bot,
  CheckCircle2,
  ArrowRight,
  Sparkles,
} from "lucide-react";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Elyvex Project Lab | Practice. Solve. Build.",
    description:
      "Interactive coding environment where students practice programming challenges, solve real-world problems, build portfolio projects, and earn badges.",
  };
}

export default async function ProjectLabPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = getDictionary(locale);

  const labUrl = externalLinks.projectLab.startsWith("http")
    ? externalLinks.projectLab
    : `/${locale}/contact?inquiry=Project+Lab+Access`;

  const isExternal = externalLinks.projectLab.startsWith("http");

  const capabilities = [
    {
      icon: <Terminal className="w-6 h-6 text-sky-400" />,
      title: "Multi-Language Sandbox",
      desc: "Instant code execution environments supporting Python 3, modern JavaScript/Node.js, Java, and C++ with standard I/O testing.",
    },
    {
      icon: <Code2 className="w-6 h-6 text-indigo-400" />,
      title: "Curated Problem Ladders",
      desc: "Progressive coding challenges categorized by data structures, algorithmic complexity, and real engineering scenarios.",
    },
    {
      icon: <GitBranch className="w-6 h-6 text-emerald-400" />,
      title: "Milestone-Based Git Projects",
      desc: "Simulated repository pull requests, code reviews, and commit hygiene assessments modeled on modern engineering teams.",
    },
    {
      icon: <Trophy className="w-6 h-6 text-amber-400" />,
      title: "Performance Badges & Passport",
      desc: "Earn tamper-proof skill badges for solving complex problems, writing clean code, and achieving consistency streaks.",
    },
    {
      icon: <Bot className="w-6 h-6 text-purple-400" />,
      title: "AI-Guided Hint Assistance",
      desc: "Smart contextual hints and debugging suggestions that guide students toward the answer without spoiling the solution.",
    },
    {
      icon: <Cpu className="w-6 h-6 text-cyan-400" />,
      title: "Automated Test Bench",
      desc: "Evaluate edge cases, memory limits, and runtime performance against production test fixtures.",
    },
  ];

  return (
    <div className="py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-24">
        {/* Header Hero */}
        <div className="text-center max-w-3xl mx-auto space-y-5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide bg-sky-50 dark:bg-sky-950/60 text-sky-600 dark:text-sky-400 border border-sky-200/80 dark:border-sky-800/60">
            <Terminal className="w-3.5 h-3.5" />
            <span>Interactive Environment</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
            Practice. Solve. Build.
          </h1>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
            The Elyvex Project Lab will provide an interactive environment where students can practice coding, solve programming problems, work on projects, track performance, and improve their technical problem-solving abilities.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Button
              href={labUrl}
              external={isExternal}
              variant="primary"
              size="lg"
              icon={<ArrowRight className="w-4 h-4" />}
            >
              Explore Project Lab
            </Button>
            <Button
              href={`/${locale}/courses`}
              variant="outline"
              size="lg"
            >
              View Associated Courses
            </Button>
          </div>
        </div>

        {/* Feature Grid */}
        <div>
          <SectionHeading
            badge="Lab Core Features"
            title="Engineered For Real Software Mastery"
            subtitle="Explore how the Project Lab transforms abstract technical concepts into muscle memory."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {capabilities.map((cap, idx) => (
              <div
                key={idx}
                className="p-7 rounded-2xl bg-white dark:bg-[#0a1024] border border-slate-200/90 dark:border-white/10 shadow-xs space-y-3"
              >
                <div className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800/80 w-fit">
                  {cap.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  {cap.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {cap.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Preview of Code Execution Sandbox (Simulation) */}
        <div className="p-8 sm:p-12 rounded-3xl bg-slate-950 text-white border border-slate-800 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-slate-800 gap-4">
            <div>
              <span className="text-xs font-mono text-sky-400">
                SANDBOX PREVIEW // LAB.ELYVEXNEXUS.COM
              </span>
              <h3 className="text-xl font-bold text-white mt-1">
                Multi-Language Test Suite Interface
              </h3>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs px-2.5 py-1 rounded-md bg-slate-800 text-slate-300">
                Python 3.12
              </span>
              <span className="text-xs px-2.5 py-1 rounded-md bg-emerald-500/20 text-emerald-400">
                Tests Passing (14/14)
              </span>
            </div>
          </div>

          <div className="font-mono text-xs text-slate-300 bg-slate-900 p-6 rounded-2xl border border-slate-800 space-y-2 overflow-x-auto">
            <p className="text-slate-500">
              # Elyvex Milestone 04: Asynchronous Queue Worker
            </p>
            <p className="text-indigo-400">import asyncio</p>
            <p className="text-indigo-400">from dataclasses import dataclass</p>
            <p className="pt-2 text-sky-300">@dataclass</p>
            <p>class JobPayload:</p>
            <p className="pl-4">id: str</p>
            <p className="pl-4">task_name: str</p>
            <p className="pt-2">async def process_queue(queue: asyncio.Queue):</p>
            <p className="pl-4">while not queue.empty():</p>
            <p className="pl-8">job = await queue.get()</p>
            <p className="pl-8 text-emerald-400">
              # Validated logic passing all concurrency stress tests
            </p>
            <p className="pl-8">queue.task_done()</p>
          </div>

          <p className="text-xs text-slate-400 text-center">
            * The full interactive sandbox backend is hosted at the configurable domain{" "}
            <span className="font-mono text-sky-400">lab.elyvexnexus.com</span>.
          </p>
        </div>
      </div>
    </div>
  );
}
