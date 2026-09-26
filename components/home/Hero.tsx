"use client";

import React from "react";
import Link from "next/link";
import { Button } from "../common/Button";
import { ArrowRight, Code2, Sparkles, Terminal, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

interface HeroProps {
  locale: string;
  dict: any;
}

export function Hero({ locale, dict }: HeroProps) {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 md:pt-16 md:pb-24 lg:pt-20 lg:pb-32">
      {/* Subtle background ambient gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-sky-500/10 via-indigo-500/10 to-transparent blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Heading, Supporting Text, Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="lg:col-span-7 text-center lg:text-left space-y-6"
          >
            {/* Status / Category Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-sky-50 dark:bg-sky-950/60 text-sky-600 dark:text-sky-400 border border-sky-200/80 dark:border-sky-800/60 shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-sky-500" />
              <span>{dict?.hero?.badge || "Practical Tech Education & Innovation"}</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.12]">
              {dict?.hero?.title || "Empowering Skills. Building Futures."}
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg lg:text-xl text-slate-600 dark:text-slate-300 font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0">
              {dict?.hero?.subtitle ||
                "Elyvex Nexus is an education-focused technology initiative designed to help students learn practical skills, build real projects, strengthen problem-solving abilities, and prepare for future opportunities."}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
              <Button
                href={`/${locale}/courses`}
                size="lg"
                variant="primary"
                icon={<ArrowRight className="w-4 h-4" />}
                className="w-full sm:w-auto"
              >
                {dict?.hero?.primaryCta || "Explore Courses"}
              </Button>
              <Button
                href={`/${locale}/project-lab`}
                size="lg"
                variant="outline"
                className="w-full sm:w-auto bg-white/70 dark:bg-slate-900/60 backdrop-blur-xs"
              >
                {dict?.hero?.secondaryCta || "Explore Project Lab"}
              </Button>
            </div>

            {/* Value bullets */}
            <div className="pt-6 border-t border-slate-200/80 dark:border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-3 text-left">
              <div className="flex items-center gap-2 text-xs font-medium text-slate-700 dark:text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-sky-500 shrink-0" />
                <span>{dict?.trust?.practical || "Practical First"}</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-medium text-slate-700 dark:text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-indigo-500 shrink-0" />
                <span>{dict?.trust?.projects || "Real Projects"}</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-medium text-slate-700 dark:text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-cyan-500 shrink-0" />
                <span>{dict?.trust?.industry || "Industry Oriented"}</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-medium text-slate-700 dark:text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>{dict?.trust?.certificates || "Certificates"}</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Architectural Connected Ecosystem Network Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none rounded-3xl p-6 sm:p-8 bg-gradient-to-b from-slate-900/90 to-slate-950/95 border border-slate-800 shadow-2xl backdrop-blur-xl">
              {/* Header bar of visual container */}
              <div className="flex items-center justify-between pb-5 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <div className="text-[11px] font-mono text-slate-400 flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5 text-sky-400" />
                  <span>elyvex-nexus-system v1.0</span>
                </div>
              </div>

              {/* Connected Nodes Matrix (Authentic tech ecosystem, not sci-fi clutter) */}
              <div className="py-6 space-y-4">
                {/* Node 1: Courses & Foundation */}
                <div className="p-3.5 rounded-xl bg-slate-800/60 border border-slate-700/60 flex items-center justify-between hover:border-sky-500/50 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-sky-500/20 text-sky-400 flex items-center justify-center font-bold text-xs">
                      01
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white">Structured Curriculum</p>
                      <p className="text-xs text-slate-400">Full Stack, Python, Java, Cloud</p>
                    </div>
                  </div>
                  <span className="text-[11px] font-medium px-2 py-0.5 rounded-full bg-sky-500/20 text-sky-300">
                    Active
                  </span>
                </div>

                {/* Connecting branch line */}
                <div className="h-4 border-l-2 border-dashed border-sky-500/40 ml-8" />

                {/* Node 2: Project Lab */}
                <div className="p-3.5 rounded-xl bg-slate-800/60 border border-slate-700/60 flex items-center justify-between hover:border-indigo-500/50 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-indigo-500/20 text-indigo-400 flex items-center justify-center font-bold text-xs">
                      02
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white">Elyvex Project Lab</p>
                      <p className="text-xs text-slate-400">Coding Practice & Git Workflows</p>
                    </div>
                  </div>
                  <span className="text-[11px] font-medium px-2 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300">
                    Integrated
                  </span>
                </div>

                {/* Connecting branch line */}
                <div className="h-4 border-l-2 border-dashed border-indigo-500/40 ml-8" />

                {/* Node 3: Verifiable Proof */}
                <div className="p-3.5 rounded-xl bg-slate-800/60 border border-slate-700/60 flex items-center justify-between hover:border-emerald-500/50 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-xs">
                      03
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white">Verifiable Credentials</p>
                      <p className="text-xs text-slate-400">Project-Backed Certificates</p>
                    </div>
                  </div>
                  <span className="text-[11px] font-medium px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300">
                    Verified
                  </span>
                </div>
              </div>

              {/* Status footer inside visual */}
              <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                <span>Architecture</span>
                <span className="text-sky-400 font-mono">CMS & Cloud Ready</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
