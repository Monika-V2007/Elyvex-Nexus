import React from "react";
import { SectionHeading } from "../common/SectionHeading";
import {
  Compass,
  BookOpen,
  Terminal,
  Hammer,
  ClipboardCheck,
  Award,
  Sparkles,
  ArrowRight,
} from "lucide-react";

interface LearningJourneyProps {
  dict: any;
}

export function LearningJourney({ dict }: LearningJourneyProps) {
  const steps = [
    {
      num: "01",
      icon: <Compass className="w-5 h-5 text-sky-400" />,
      title: dict?.learningJourney?.steps?.[0]?.title || "Discover",
      desc:
        dict?.learningJourney?.steps?.[0]?.desc ||
        "Explore modern technology domains and find your ideal learning path.",
    },
    {
      num: "02",
      icon: <BookOpen className="w-5 h-5 text-indigo-400" />,
      title: dict?.learningJourney?.steps?.[1]?.title || "Learn",
      desc:
        dict?.learningJourney?.steps?.[1]?.desc ||
        "Grasp foundational concepts through clear, structured lessons.",
    },
    {
      num: "03",
      icon: <Terminal className="w-5 h-5 text-cyan-400" />,
      title: dict?.learningJourney?.steps?.[2]?.title || "Practice",
      desc:
        dict?.learningJourney?.steps?.[2]?.desc ||
        "Solve focused programming challenges and build muscle memory.",
    },
    {
      num: "04",
      icon: <Hammer className="w-5 h-5 text-blue-400" />,
      title: dict?.learningJourney?.steps?.[3]?.title || "Build",
      desc:
        dict?.learningJourney?.steps?.[3]?.desc ||
        "Develop end-to-end applications solving authentic real-world problems.",
    },
    {
      num: "05",
      icon: <ClipboardCheck className="w-5 h-5 text-purple-400" />,
      title: dict?.learningJourney?.steps?.[4]?.title || "Evaluate",
      desc:
        dict?.learningJourney?.steps?.[4]?.desc ||
        "Receive code reviews, feedback, and performance assessments.",
    },
    {
      num: "06",
      icon: <Award className="w-5 h-5 text-emerald-400" />,
      title: dict?.learningJourney?.steps?.[5]?.title || "Certify",
      desc:
        dict?.learningJourney?.steps?.[5]?.desc ||
        "Earn verifiable credentials reflecting project completion.",
    },
    {
      num: "07",
      icon: <Sparkles className="w-5 h-5 text-amber-400" />,
      title: dict?.learningJourney?.steps?.[6]?.title || "Grow",
      desc:
        dict?.learningJourney?.steps?.[6]?.desc ||
        "Transition into internships, open source, and advanced career milestones.",
    },
  ];

  return (
    <section className="py-16 md:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge={dict?.learningJourney?.badge || "The Roadmap"}
          title={dict?.learningJourney?.title || "The Elyvex Learning Journey"}
          subtitle={
            dict?.learningJourney?.subtitle ||
            "A transparent step-by-step framework taking learners from discovery to demonstrated mastery."
          }
        />

        {/* Desktop Journey Grid / Horizontal Sequence */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-4 relative">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="relative p-5 rounded-2xl bg-white dark:bg-[#0a1024] border border-slate-200/90 dark:border-white/10 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-bold text-sky-600 dark:text-sky-400">
                    {step.num}
                  </span>
                  <div className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800/80 group-hover:scale-110 transition-transform">
                    {step.icon}
                  </div>
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  {step.desc}
                </p>
              </div>

              {/* Progress connector indicator */}
              <div className="mt-4 pt-3 border-t border-slate-100 dark:border-white/5 flex items-center justify-between text-[11px] font-medium text-slate-400">
                <span>Stage {idx + 1}</span>
                {idx < steps.length - 1 && (
                  <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:translate-x-1 transition-transform" />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
