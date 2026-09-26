import React from "react";
import Link from "next/link";
import { SectionHeading } from "../common/SectionHeading";
import {
  GraduationCap,
  FolderGit2,
  Terminal,
  BookOpen,
  ClipboardCheck,
  Award,
  ArrowRight,
} from "lucide-react";

interface OfferingsProps {
  locale: string;
  dict: any;
}

export function Offerings({ locale, dict }: OfferingsProps) {
  const cards = [
    {
      icon: <GraduationCap className="w-6 h-6 text-sky-500" />,
      title: dict?.offerings?.cards?.courses?.title || "Courses",
      description:
        dict?.offerings?.cards?.courses?.description ||
        "Structured technical learning programs designed for students to master modern engineering stacks.",
      link: `/${locale}/courses`,
      cta: "Explore Courses",
    },
    {
      icon: <FolderGit2 className="w-6 h-6 text-indigo-500" />,
      title: dict?.offerings?.cards?.projects?.title || "Practical Projects",
      description:
        dict?.offerings?.cards?.projects?.description ||
        "Build production-grade applications with version control, automated testing, and cloud deployment.",
      link: `/${locale}/courses`,
      cta: "View Projects",
    },
    {
      icon: <Terminal className="w-6 h-6 text-cyan-500" />,
      title: dict?.offerings?.cards?.lab?.title || "Coding Practice",
      description:
        dict?.offerings?.cards?.lab?.description ||
        "Practice algorithmic and real-world programming problems through the interactive Elyvex Project Lab.",
      link: `/${locale}/project-lab`,
      cta: "Learn About Lab",
    },
    {
      icon: <BookOpen className="w-6 h-6 text-blue-500" />,
      title: dict?.offerings?.cards?.resources?.title || "Learning Resources",
      description:
        dict?.offerings?.cards?.resources?.description ||
        "Access structured educational notes, architectural guides, and open engineering cheat-sheets.",
      link: `/${locale}/resources`,
      cta: "Read Resources",
    },
    {
      icon: <ClipboardCheck className="w-6 h-6 text-emerald-500" />,
      title: dict?.offerings?.cards?.assessments?.title || "Assessments",
      description:
        dict?.offerings?.cards?.assessments?.description ||
        "Quizzes, milestone code reviews, hands-on tasks, and transparent performance tracking.",
      link: `/${locale}/about`,
      cta: "Our Approach",
    },
    {
      icon: <Award className="w-6 h-6 text-amber-500" />,
      title: dict?.offerings?.cards?.certificates?.title || "Certificates",
      description:
        dict?.offerings?.cards?.certificates?.description ||
        "Earn recognized course completion certificates based on rigorous project submission criteria.",
      link: `/${locale}/verify/DEMO-2026-001`,
      cta: "Verify System",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-slate-50/50 dark:bg-[#060a17]/50 border-t border-slate-200/80 dark:border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge={dict?.offerings?.badge || "Comprehensive Capabilities"}
          title={dict?.offerings?.title || "What We Provide"}
          subtitle={
            dict?.offerings?.subtitle ||
            "A complete, modular pathway engineered to bridge the gap between classroom theory and real engineering standards."
          }
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="group relative rounded-2xl p-7 bg-white dark:bg-[#0a1024] border border-slate-200/90 dark:border-white/10 shadow-xs hover:shadow-xl hover:border-sky-500/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800/80 w-fit mb-5 group-hover:scale-110 transition-transform">
                  {card.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2.5">
                  {card.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                  {card.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 dark:border-white/5">
                <Link
                  href={card.link}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-600 dark:text-sky-400 group-hover:gap-2 transition-all"
                >
                  <span>{card.cta}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
