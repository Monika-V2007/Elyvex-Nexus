import React from "react";
import { SectionHeading } from "../common/SectionHeading";
import {
  Code,
  Rocket,
  Target,
  Compass,
  TrendingUp,
  Briefcase,
} from "lucide-react";

interface WhyElyvexProps {
  dict: any;
}

export function WhyElyvex({ dict }: WhyElyvexProps) {
  const cards = [
    {
      icon: <Code className="w-6 h-6 text-sky-500" />,
      title: dict?.whyUs?.cards?.practical?.title || "Practical First",
      desc:
        dict?.whyUs?.cards?.practical?.desc ||
        "Students apply every concept directly in code, tools, and environments from day one.",
    },
    {
      icon: <Rocket className="w-6 h-6 text-indigo-500" />,
      title: dict?.whyUs?.cards?.project?.title || "Project Driven",
      desc:
        dict?.whyUs?.cards?.project?.desc ||
        "Every track culminates in deployable, portfolio-grade projects with real utility.",
    },
    {
      icon: <Target className="w-6 h-6 text-cyan-500" />,
      title: dict?.whyUs?.cards?.skill?.title || "Skill Focused",
      desc:
        dict?.whyUs?.cards?.skill?.desc ||
        "We prioritize foundational and in-demand technical problem-solving capabilities.",
    },
    {
      icon: <Compass className="w-6 h-6 text-blue-500" />,
      title: dict?.whyUs?.cards?.structured?.title || "Structured Learning",
      desc:
        dict?.whyUs?.cards?.structured?.desc ||
        "Clear, progressive roadmaps that eliminate confusion and maintain momentum.",
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-emerald-500" />,
      title: dict?.whyUs?.cards?.growth?.title || "Continuous Growth",
      desc:
        dict?.whyUs?.cards?.growth?.desc ||
        "Encouraging curiosity, debugging discipline, and consistent self-improvement.",
    },
    {
      icon: <Briefcase className="w-6 h-6 text-amber-500" />,
      title: dict?.whyUs?.cards?.career?.title || "Career Preparation",
      desc:
        dict?.whyUs?.cards?.career?.desc ||
        "Equipping learners with genuine competency and readiness for internships and industry roles.",
    },
  ];

  return (
    <section id="why-elyvex" className="py-16 md:py-24 bg-slate-50/50 dark:bg-[#070b1a]/50 border-t border-slate-200/80 dark:border-white/5 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge={dict?.whyUs?.badge || "Our Values & Methodology"}
          title={dict?.whyUs?.title || "Why Elyvex Nexus"}
          subtitle={
            dict?.whyUs?.subtitle ||
            "Built with high standards of technical rigor, clarity, and dedication to genuine student capability."
          }
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="p-7 rounded-2xl bg-white dark:bg-[#0a1024] border border-slate-200/90 dark:border-white/10 shadow-xs hover:border-sky-500/40 transition-colors duration-200 flex flex-col justify-start"
            >
              <div className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800/80 w-fit mb-5">
                {card.icon}
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-2.5">
                {card.title}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
