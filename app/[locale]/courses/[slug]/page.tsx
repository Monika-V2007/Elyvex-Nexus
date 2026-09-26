import React from "react";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import Link from "next/link";
import { getDictionary } from "@/lib/i18n";
import { getCourseBySlug, getAllCourses } from "@/lib/services/courses.service";
import { externalLinks } from "@/config/links";
import { Button } from "@/components/common/Button";
import {
  Clock,
  BarChart,
  User,
  CheckCircle,
  FolderGit2,
  Award,
  BookOpen,
  ArrowRight,
  ShieldCheck,
  Code2,
  HelpCircle,
} from "lucide-react";

export async function generateStaticParams() {
  const courses = await getAllCourses();
  return courses.map((course) => ({
    slug: course.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const course = await getCourseBySlug(slug);

  if (!course) {
    return {
      title: "Course Not Found | Elyvex Nexus",
    };
  }

  return {
    title: `${course.title} | Elyvex Nexus`,
    description: course.shortDescription,
    openGraph: {
      title: `${course.title} | Elyvex Nexus`,
      description: course.shortDescription,
    },
  };
}

export default async function CourseDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const dict = getDictionary(locale);
  const course = await getCourseBySlug(slug);

  if (!course) {
    notFound();
  }

  const registrationUrl = externalLinks.courseRegistration.startsWith("http")
    ? externalLinks.courseRegistration
    : `/${locale}/contact?inquiry=${encodeURIComponent(course.title)}`;

  const isExternalReg = externalLinks.courseRegistration.startsWith("http");

  // Schema.org Course Structured Data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: course.title,
    description: course.shortDescription,
    provider: {
      "@type": "Organization",
      name: "Elyvex Nexus",
      sameAs: "https://elyvexnexus.com",
    },
    educationalCredentialAwarded: course.hasCertificate
      ? "Course Completion Certificate"
      : undefined,
  };

  return (
    <div className="py-12 md:py-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Breadcrumb */}
        <nav
          aria-label="Breadcrumb"
          className="flex items-center gap-2 text-xs text-slate-500 font-medium"
        >
          <Link href={`/${locale}`} className="hover:text-sky-500">
            Home
          </Link>
          <span>/</span>
          <Link href={`/${locale}/courses`} className="hover:text-sky-500">
            Courses
          </Link>
          <span>/</span>
          <span className="text-slate-800 dark:text-slate-300 font-semibold truncate">
            {course.title}
          </span>
        </nav>

        {/* Hero Header of Course */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-8 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-sky-50 dark:bg-sky-950/60 text-sky-600 dark:text-sky-400 border border-sky-200/80 dark:border-sky-800/60">
              {course.category}
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
              {course.title}
            </h1>

            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
              {course.description}
            </p>

            {/* Quick Metadata Bar */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
              <span className="flex items-center gap-1.5 font-medium">
                <Clock className="w-4 h-4 text-sky-500" />
                {course.duration}
              </span>
              <span className="flex items-center gap-1.5 font-medium">
                <BarChart className="w-4 h-4 text-indigo-500" />
                {course.level}
              </span>
              <span className="flex items-center gap-1.5 font-medium">
                <User className="w-4 h-4 text-slate-400" />
                {course.trainerName}
              </span>
            </div>
          </div>

          {/* Action Sidebar / Card */}
          <div className="lg:col-span-4">
            <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#0a1024] border border-slate-200/90 dark:border-white/10 shadow-xl space-y-6">
              <div className="space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Program Enrollment
                </span>
                <p className="text-sm text-slate-600 dark:text-slate-300">
                  Direct enrollment for upcoming structured cohorts with mentor code reviews.
                </p>
              </div>

              <Button
                href={registrationUrl}
                external={isExternalReg}
                variant="primary"
                size="lg"
                className="w-full text-center font-bold"
                icon={<ArrowRight className="w-4 h-4" />}
              >
                {dict?.courses?.registerCta || "Register for Course"}
              </Button>

              <div className="space-y-3 pt-4 border-t border-slate-100 dark:border-white/5 text-xs text-slate-600 dark:text-slate-400">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Hands-on milestone project reviews</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Direct GitHub repository assignments</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Tamper-proof verifiable completion certificate</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Technologies & Tools */}
        <div className="p-8 rounded-3xl bg-slate-50 dark:bg-[#080d20] border border-slate-200/90 dark:border-white/10 space-y-6">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <Code2 className="w-5 h-5 text-sky-500" />
            Skills & Tooling Mastered
          </h2>

          <div className="space-y-4">
            <div>
              <span className="text-xs font-semibold text-slate-500 block mb-2">
                Core Engineering Skills:
              </span>
              <div className="flex flex-wrap gap-2">
                {course.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-lg text-xs font-medium bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <span className="text-xs font-semibold text-slate-500 block mb-2">
                Development Tools:
              </span>
              <div className="flex flex-wrap gap-2">
                {course.tools.map((tool, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-lg text-xs font-medium bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Syllabus Section */}
        {course.syllabus && course.syllabus.length > 0 && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <BookOpen className="w-6 h-6 text-sky-500" />
              Course Syllabus & Modules
            </h2>

            <div className="space-y-4">
              {course.syllabus.map((mod) => (
                <div
                  key={mod.moduleNumber}
                  className="p-6 rounded-2xl bg-white dark:bg-[#0a1024] border border-slate-200/90 dark:border-white/10 space-y-3"
                >
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-lg bg-sky-50 dark:bg-sky-950/60 text-sky-600 dark:text-sky-400 font-bold text-xs flex items-center justify-center">
                      0{mod.moduleNumber}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                      {mod.title}
                    </h3>
                  </div>

                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 pl-11">
                    {mod.topics.map((t, idx) => (
                      <li
                        key={idx}
                        className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 flex items-center gap-2"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-sky-400 shrink-0" />
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Practical Projects Deliverables */}
        {course.projects && course.projects.length > 0 && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <FolderGit2 className="w-6 h-6 text-indigo-500" />
              Practical Projects Deliverables
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {course.projects.map((proj, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-white dark:bg-[#0a1024] border border-slate-200/90 dark:border-white/10 space-y-2"
                >
                  <h3 className="text-base font-bold text-slate-900 dark:text-white">
                    {proj.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {proj.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Certificate Information */}
        <div className="p-8 rounded-3xl bg-slate-900 text-white border border-slate-800 space-y-4">
          <div className="flex items-center gap-3">
            <Award className="w-6 h-6 text-emerald-400" />
            <h3 className="text-xl font-bold text-white">
              Course Completion Certificate
            </h3>
          </div>
          <p className="text-sm text-slate-300 leading-relaxed max-w-2xl">
            Upon successful submission of all milestone projects and satisfactory evaluation, students receive an official certificate from Elyvex Nexus. Certificates contain a unique ID and can be verified by employers online.
          </p>
          <div className="pt-2">
            <Link
              href={`/${locale}/verify/DEMO-2026-001`}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-400 hover:text-emerald-300 underline"
            >
              <ShieldCheck className="w-4 h-4" />
              <span>Preview Certificate Verification Portal</span>
            </Link>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="p-8 rounded-3xl text-center bg-gradient-to-r from-sky-900/30 to-indigo-900/30 border border-slate-200 dark:border-white/10 space-y-4">
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
            Ready to enroll in {course.title}?
          </h3>
          <p className="text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto">
            Join the upcoming cohort to start building production-ready projects and master modern engineering.
          </p>
          <div className="pt-2 flex justify-center">
            <Button
              href={registrationUrl}
              external={isExternalReg}
              variant="primary"
              size="lg"
              icon={<ArrowRight className="w-4 h-4" />}
            >
              {dict?.courses?.registerCta || "Register for Course"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
