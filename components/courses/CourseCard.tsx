import React from "react";
import Link from "next/link";
import { Course } from "@/types";
import { Clock, BarChart, Check, FolderGit2, Award, ArrowUpRight } from "lucide-react";

interface CourseCardProps {
  course: Course;
  locale: string;
  viewCourseText?: string;
}

export function CourseCard({
  course,
  locale,
  viewCourseText = "View Course",
}: CourseCardProps) {
  return (
    <div className="group relative rounded-2xl bg-white dark:bg-[#0a1024] border border-slate-200/90 dark:border-white/10 shadow-xs hover:shadow-xl hover:border-sky-500/40 transition-all duration-300 flex flex-col justify-between overflow-hidden">
      {/* Top Banner accent */}
      <div className="h-1.5 w-full bg-gradient-to-r from-sky-500 to-indigo-500" />

      <div className="p-6 sm:p-7 space-y-4">
        {/* Category & Level Header */}
        <div className="flex items-center justify-between gap-2 text-xs">
          <span className="font-semibold px-2.5 py-1 rounded-md bg-sky-50 dark:bg-sky-950/60 text-sky-600 dark:text-sky-400 border border-sky-200/60 dark:border-sky-800/60">
            {course.category}
          </span>
          <span className="text-slate-500 dark:text-slate-400 flex items-center gap-1 font-medium">
            <BarChart className="w-3.5 h-3.5" />
            {course.level}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
          <Link href={`/${locale}/courses/${course.slug}`}>
            {course.title}
          </Link>
        </h3>

        {/* Short Description */}
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 line-clamp-2 leading-relaxed">
          {course.shortDescription}
        </p>

        {/* Duration & Indicators */}
        <div className="pt-2 flex flex-wrap items-center gap-3 text-xs text-slate-600 dark:text-slate-400 border-t border-slate-100 dark:border-white/5">
          <span className="flex items-center gap-1 font-medium">
            <Clock className="w-3.5 h-3.5 text-sky-500" />
            {course.duration}
          </span>
          {course.hasProject && (
            <span className="flex items-center gap-1 font-medium text-indigo-600 dark:text-indigo-400">
              <FolderGit2 className="w-3.5 h-3.5" />
              Real Projects
            </span>
          )}
          {course.hasCertificate && (
            <span className="flex items-center gap-1 font-medium text-emerald-600 dark:text-emerald-400">
              <Award className="w-3.5 h-3.5" />
              Certificate
            </span>
          )}
        </div>

        {/* Skills Tag Cloud */}
        <div className="flex flex-wrap gap-1.5 pt-1">
          {course.skills.slice(0, 4).map((skill, idx) => (
            <span
              key={idx}
              className="text-[11px] font-medium px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300"
            >
              {skill}
            </span>
          ))}
          {course.skills.length > 4 && (
            <span className="text-[11px] font-medium px-1.5 py-0.5 text-slate-400">
              +{course.skills.length - 4} more
            </span>
          )}
        </div>
      </div>

      {/* Card Action Footer */}
      <div className="p-6 sm:p-7 pt-0 border-t border-slate-100 dark:border-white/5 mt-4">
        <Link
          href={`/${locale}/courses/${course.slug}`}
          className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold bg-slate-100 dark:bg-slate-800/80 hover:bg-sky-600 hover:text-white dark:hover:bg-sky-600 text-slate-800 dark:text-slate-200 transition-all duration-200"
        >
          <span>{viewCourseText}</span>
          <ArrowUpRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
