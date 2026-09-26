import React from "react";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import Link from "next/link";
import { verifyCertificate } from "@/lib/services/certificates.service";
import { formatDate } from "@/lib/utils";
import { SectionHeading } from "@/components/common/SectionHeading";
import {
  ShieldCheck,
  Award,
  Calendar,
  CheckCircle2,
  FileCheck,
  AlertTriangle,
  ArrowLeft,
} from "lucide-react";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ certificateId: string }>;
}): Promise<Metadata> {
  const { certificateId } = await params;
  return {
    title: `Certificate Verification: ${certificateId} | Elyvex Nexus`,
    description: "Official credential verification portal for Elyvex Nexus course completions.",
  };
}

export default async function VerifyCertificatePage({
  params,
}: {
  params: Promise<{ locale: string; certificateId: string }>;
}) {
  const { locale, certificateId } = await params;
  const cert = await verifyCertificate(certificateId);

  return (
    <div className="py-12 md:py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <Link
          href={`/${locale}`}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-sky-600 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Return Home</span>
        </Link>

        {cert ? (
          <div className="rounded-3xl bg-white dark:bg-[#0a1024] border border-slate-200/90 dark:border-white/10 shadow-2xl overflow-hidden">
            {/* Top Security Banner */}
            <div className="p-6 sm:p-8 bg-gradient-to-r from-emerald-600 to-teal-600 text-white flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-2xl bg-white/20 backdrop-blur-xs">
                  <ShieldCheck className="w-8 h-8 text-white" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-emerald-100">
                    Official Authenticated Record
                  </span>
                  <h1 className="text-xl sm:text-2xl font-extrabold text-white">
                    Certificate Verified
                  </h1>
                </div>
              </div>
              <span className="text-xs font-mono font-bold bg-white/20 px-3 py-1 rounded-full">
                {cert.certificateId}
              </span>
            </div>

            {/* Certificate Details */}
            <div className="p-6 sm:p-8 space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <span className="text-xs font-semibold text-slate-400 block mb-1">
                    Candidate Name
                  </span>
                  <p className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                    {cert.studentName}
                  </p>
                </div>

                <div>
                  <span className="text-xs font-semibold text-slate-400 block mb-1">
                    Course Program
                  </span>
                  <p className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                    {cert.courseTitle}
                  </p>
                </div>

                <div>
                  <span className="text-xs font-semibold text-slate-400 block mb-1">
                    Issue Date
                  </span>
                  <p className="text-sm font-medium text-slate-700 dark:text-slate-300">
                    {formatDate(cert.issueDate, locale)}
                  </p>
                </div>

                <div>
                  <span className="text-xs font-semibold text-slate-400 block mb-1">
                    Completion Status
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    {cert.completionStatus}
                  </span>
                </div>
              </div>

              {/* Skills Verified */}
              {cert.skillsAcquired && cert.skillsAcquired.length > 0 && (
                <div className="pt-4 border-t border-slate-100 dark:border-white/5 space-y-2">
                  <span className="text-xs font-semibold text-slate-400 block">
                    Demonstrated Technical Competencies:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {cert.skillsAcquired.map((s, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-md text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Security Note */}
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 text-xs text-slate-500 leading-relaxed border border-slate-200/80 dark:border-white/5">
                This verification portal confirms that the above individual has successfully fulfilled the required project benchmarks, curriculum milestones, and code reviews under the Elyvex Nexus curriculum.
              </div>
            </div>
          </div>
        ) : (
          <div className="p-8 rounded-3xl bg-white dark:bg-[#0a1024] border border-slate-200/90 dark:border-white/10 text-center space-y-4 shadow-xl">
            <AlertTriangle className="w-12 h-12 text-amber-500 mx-auto" />
            <h1 className="text-2xl font-bold text-slate-900 dark:text-white">
              Certificate Record Not Found
            </h1>
            <p className="text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto">
              No active certificate was found with ID{" "}
              <span className="font-mono text-sky-500">{certificateId}</span>. Please verify the code or contact support@elyvexnexus.com.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
