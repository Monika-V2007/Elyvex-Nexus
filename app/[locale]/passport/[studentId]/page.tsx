import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { getStudentPassport } from "@/lib/services/certificates.service";
import { formatDate } from "@/lib/utils";
import {
  Award,
  CheckCircle2,
  FolderGit2,
  Trophy,
  ExternalLink,
  ShieldCheck,
  ArrowLeft,
  UserCheck,
} from "lucide-react";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ studentId: string }>;
}): Promise<Metadata> {
  const { studentId } = await params;
  return {
    title: `Student Passport: ${studentId} | Elyvex Nexus`,
    description: "Public verified student capability passport and project credentials.",
  };
}

export default async function StudentPassportPage({
  params,
}: {
  params: Promise<{ locale: string; studentId: string }>;
}) {
  const { locale, studentId } = await params;
  const passport = await getStudentPassport(studentId);

  return (
    <div className="py-12 md:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <Link
          href={`/${locale}`}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-sky-600 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Return Home</span>
        </Link>

        {passport ? (
          <div className="rounded-3xl bg-white dark:bg-[#0a1024] border border-slate-200/90 dark:border-white/10 shadow-2xl p-6 sm:p-10 space-y-8">
            {/* Header info */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100 dark:border-white/5">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-sky-600 to-indigo-600 text-white flex items-center justify-center font-bold text-xl shadow-md">
                  {passport.name.charAt(0)}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white">
                      {passport.name}
                    </h1>
                    <span className="p-1 rounded-full bg-emerald-500/10 text-emerald-500">
                      <UserCheck className="w-4 h-4" />
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                    {passport.headline}
                  </p>
                </div>
              </div>

              <div className="text-xs font-mono px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 w-fit">
                Passport ID: {passport.studentId}
              </div>
            </div>

            {/* Verified Skills */}
            <div className="space-y-3">
              <h2 className="text-sm font-bold uppercase tracking-wider text-slate-500">
                Verified Technical Competencies
              </h2>
              <div className="flex flex-wrap gap-2">
                {passport.verifiedSkills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-lg text-xs font-semibold bg-sky-50 dark:bg-sky-950/60 text-sky-600 dark:text-sky-400 border border-sky-200/60 dark:border-sky-800/60"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Completed Courses & Certifications */}
            <div className="space-y-4">
              <h2 className="text-sm font-bold uppercase tracking-wider text-slate-500">
                Completed Cohorts & Certifications
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {passport.completedCourses.map((c, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/80 dark:border-white/5 space-y-2 flex flex-col justify-between"
                  >
                    <div>
                      <span className="text-[10px] font-semibold text-emerald-500 flex items-center gap-1">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        Completed & Certified
                      </span>
                      <h3 className="text-base font-bold text-slate-900 dark:text-white mt-1">
                        {c.courseTitle}
                      </h3>
                      <p className="text-xs text-slate-500 mt-1">
                        Issued: {formatDate(c.completionDate, locale)}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-slate-200/60 dark:border-white/5">
                      <Link
                        href={`/${locale}/verify/${c.certificateId}`}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-600 dark:text-sky-400 hover:underline"
                      >
                        <ShieldCheck className="w-3.5 h-3.5" />
                        <span>Verify Credential #{c.certificateId}</span>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Real Projects Built */}
            <div className="space-y-4">
              <h2 className="text-sm font-bold uppercase tracking-wider text-slate-500">
                Verified Projects Delivered
              </h2>
              <div className="space-y-3">
                {passport.projectsBuilt.map((proj, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/80 dark:border-white/5 space-y-2"
                  >
                    <div className="flex items-center justify-between">
                      <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
                        <FolderGit2 className="w-4 h-4 text-indigo-500" />
                        {proj.name}
                      </h3>
                      {proj.demoUrl && (
                        <a
                          href={proj.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs text-sky-600 dark:text-sky-400 hover:underline inline-flex items-center gap-1 font-medium"
                        >
                          <span>Live Demo</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      {proj.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Project Lab Badges */}
            <div className="space-y-3">
              <h2 className="text-sm font-bold uppercase tracking-wider text-slate-500">
                Project Lab Achievement Badges
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {passport.labBadges.map((badge, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-slate-100 dark:bg-slate-800/80 flex items-center gap-3"
                  >
                    <Trophy className="w-5 h-5 text-amber-500 shrink-0" />
                    <div>
                      <p className="text-xs font-bold text-slate-800 dark:text-slate-200">
                        {badge.name}
                      </p>
                      <p className="text-[10px] text-slate-400">{badge.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="p-8 rounded-3xl bg-white dark:bg-[#0a1024] text-center space-y-3 border border-slate-200 dark:border-white/10">
            <h1 className="text-xl font-bold">Student Record Not Found</h1>
            <p className="text-xs text-slate-500">
              No public passport is registered for ID {studentId}.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
