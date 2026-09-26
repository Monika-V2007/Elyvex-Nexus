import React from "react";
import { Metadata } from "next";
import { getDictionary } from "@/lib/i18n";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Button } from "@/components/common/Button";
import {
  Lightbulb,
  Target,
  Compass,
  CheckCircle2,
  Workflow,
  Sparkles,
  ArrowRight,
  Shield,
  Users,
  TrendingUp,
} from "lucide-react";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "About Elyvex Nexus | Practical Learning & Technology",
    description:
      "Learn about Elyvex Nexus, our mission to transform technical education through hands-on projects, practical skill building, and future readiness.",
  };
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = getDictionary(locale);

  const values = [
    {
      title: "Learning",
      desc: "Instilling deep curiosity, intellectual rigor, and an enthusiasm for continuous understanding.",
      icon: <Lightbulb className="w-5 h-5 text-sky-500" />,
    },
    {
      title: "Innovation",
      desc: "Challenging outdated, rote educational practices with modern, interactive engineering tools.",
      icon: <Sparkles className="w-5 h-5 text-indigo-500" />,
    },
    {
      title: "Integrity",
      desc: "Truth in education: realistic timelines, authentic project requirements, and verifiable credentials.",
      icon: <Shield className="w-5 h-5 text-emerald-500" />,
    },
    {
      title: "Growth",
      desc: "Fostering resilience, debugging discipline, and incremental mastery of complex systems.",
      icon: <TrendingUp className="w-5 h-5 text-cyan-500" />,
    },
    {
      title: "Collaboration",
      desc: "Cultivating teamwork, code reviews, and constructive feedback modeled on real software teams.",
      icon: <Users className="w-5 h-5 text-blue-500" />,
    },
    {
      title: "Accessibility",
      desc: "Delivering world-class technical education without arbitrary barriers or inflated costs.",
      icon: <Target className="w-5 h-5 text-amber-500" />,
    },
  ];

  const ecosystemSteps = [
    { title: "Official Website", status: "Active", desc: "Corporate gateway, course catalogs, and technical resources" },
    { title: "Courses", status: "Active", desc: "Structured cohorts and comprehensive curricula" },
    { title: "Learning Platform", status: "Future Integration", desc: "learn.elyvexnexus.com - Student course management" },
    { title: "Project Lab", status: "Under Development", desc: "lab.elyvexnexus.com - Interactive coding sandbox & problems" },
    { title: "Projects & Assessments", status: "Planned", desc: "Real repository reviews and milestone tracking" },
    { title: "Certificates", status: "Architecture Ready", desc: "Publicly verifiable digital credentials" },
    { title: "Student Passport", status: "Architecture Ready", desc: "Comprehensive portfolio of verified capabilities" },
    { title: "Future Opportunities", status: "Vision", desc: "Internship referrals and industry partner connections" },
  ];

  return (
    <div className="py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20 sm:space-y-28">
        {/* Header / Hero */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide bg-sky-50 dark:bg-sky-950/60 text-sky-600 dark:text-sky-400 border border-sky-200/80 dark:border-sky-800/60">
            About Our Company
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
            Building Practical Competency For Tomorrow's Engineers
          </h1>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
            Elyvex Nexus was founded on a simple realization: textbook memorization alone does not prepare students for the demands of modern technology industries.
          </p>
        </div>

        {/* Section 1: Our Story */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 space-y-5">
            <span className="text-xs font-bold uppercase tracking-wider text-sky-500">
              Origin & Motivation
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
              Our Story
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              Every year, thousands of students graduate with theoretical computer science qualifications but struggle to deploy a simple web application, configure an API, or navigate a production codebase.
            </p>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              Elyvex Nexus was created to bridge this persistent divide. By emphasizing immediate code application, version control discipline, and authentic problem-solving, we help learners build real software engineering confidence.
            </p>
          </div>
          <div className="lg:col-span-6">
            <div className="p-8 rounded-3xl bg-slate-900 text-white border border-slate-800 shadow-xl space-y-6">
              <div className="flex items-center gap-3">
                <Compass className="w-6 h-6 text-sky-400" />
                <h3 className="text-lg font-bold text-white">The Elyvex Core Commitment</h3>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed">
                We make no inflated promises of overnight mastery or instant job placements. Instead, we promise technical rigor, structured guidance, and a standard of craftsmanship that produces undeniable student competence.
              </p>
              <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                <span>Education Initiative</span>
                <span className="text-sky-400 font-semibold">Tamil Nadu, India</span>
              </div>
            </div>
          </div>
        </div>

        {/* Section 2: Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 rounded-3xl bg-white dark:bg-[#0a1024] border border-slate-200/90 dark:border-white/10 shadow-xs space-y-4">
            <div className="p-3 rounded-xl bg-sky-50 dark:bg-sky-950/60 text-sky-500 w-fit">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
              Our Mission
            </h3>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              Help students develop practical technical skills and confidence through structured learning, hands-on development experience, and transparent milestone evaluation.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white dark:bg-[#0a1024] border border-slate-200/90 dark:border-white/10 shadow-xs space-y-4">
            <div className="p-3 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-500 w-fit">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
              Our Vision
            </h3>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              Build a comprehensive learning ecosystem where students can learn, practice, create, demonstrate verifiable skills, and prepare for future career and internship opportunities.
            </p>
          </div>
        </div>

        {/* Section 3: Our Core Values */}
        <div>
          <SectionHeading
            badge="Foundational Principles"
            title="Our Values"
            subtitle="The fundamental standards guiding every course, tool, and student interaction across Elyvex Nexus."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl bg-white dark:bg-[#0a1024] border border-slate-200/90 dark:border-white/10 shadow-xs space-y-3"
              >
                <div className="p-2.5 rounded-lg bg-slate-100 dark:bg-slate-800/80 w-fit">
                  {v.icon}
                </div>
                <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                  {v.title}
                </h4>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Section 4: Our Future Ecosystem */}
        <div className="p-8 sm:p-12 rounded-3xl bg-slate-900 text-white border border-slate-800 space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide bg-sky-500/10 text-sky-400 border border-sky-500/20">
              Architectural Roadmap
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
              The Elyvex Ecosystem
            </h2>
            <p className="text-sm sm:text-base text-slate-300">
              The official corporate website acts as the central anchor for our expanding suite of educational platforms.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {ecosystemSteps.map((step, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-slate-950/70 border border-slate-800 space-y-3 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-xs mb-2">
                    <span className="font-mono text-slate-400">0{idx + 1}</span>
                    <span
                      className={`px-2 py-0.5 rounded-full text-[10px] font-semibold ${
                        step.status === "Active"
                          ? "bg-emerald-500/20 text-emerald-400"
                          : step.status === "Under Development"
                          ? "bg-amber-500/20 text-amber-400"
                          : "bg-sky-500/20 text-sky-300"
                      }`}
                    >
                      {step.status}
                    </span>
                  </div>
                  <h4 className="text-base font-bold text-white">{step.title}</h4>
                  <p className="text-xs text-slate-400 mt-1.5">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center space-y-4 pt-4">
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
            Ready to explore our learning programs?
          </h3>
          <div className="flex justify-center gap-3">
            <Button
              href={`/${locale}/courses`}
              variant="primary"
              size="md"
              icon={<ArrowRight className="w-4 h-4" />}
            >
              Explore Courses
            </Button>
            <Button
              href={`/${locale}/contact`}
              variant="outline"
              size="md"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
