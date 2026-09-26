import React from "react";
import { Metadata } from "next";
import { SectionHeading } from "@/components/common/SectionHeading";

export const metadata: Metadata = {
  title: "Privacy Policy | Elyvex Nexus",
  description: "Official Privacy Policy of Elyvex Nexus.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="py-12 md:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <SectionHeading
          badge="Legal & Compliance"
          title="Privacy Policy"
          subtitle="How Elyvex Nexus collects, uses, and safeguards information across our digital platforms."
          align="left"
        />

        <div className="p-4 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 text-xs text-amber-800 dark:text-amber-200">
          <strong>Notice:</strong> This document contains standard corporate privacy provisions for Elyvex Nexus. Formal statutory registrations and regulatory entity identifiers will be inserted upon complete corporate filing.
        </div>

        <article className="prose prose-slate dark:prose-invert max-w-none text-slate-700 dark:text-slate-300 text-sm leading-relaxed space-y-6">
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">
              1. Information We Collect
            </h2>
            <p>
              Elyvex Nexus collects information that you voluntarily provide to us when submitting inquiries through our contact forms, applying for course cohorts, or accessing open learning resources. This includes full name, email address, inquiry context, and optional student background details.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">
              2. Use of Information
            </h2>
            <p>
              Information collected is strictly utilized to process course applications, answer administrative questions, provide notifications about upcoming cohort schedules, and maintain the integrity of project-based completion certificates.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">
              3. Data Protection and Storage
            </h2>
            <p>
              We implement industry-standard security measures including encrypted HTTPS communication, parameterized database queries, and role-based access control. We do not sell or rent personal information to third parties.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">
              4. Contact for Privacy Inquiries
            </h2>
            <p>
              For privacy requests or inquiries regarding your data, contact us at:{" "}
              <span className="font-mono text-sky-500">contact@elyvexnexus.com</span>.
            </p>
          </section>
        </article>
      </div>
    </div>
  );
}
