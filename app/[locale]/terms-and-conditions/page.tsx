import React from "react";
import { Metadata } from "next";
import { SectionHeading } from "@/components/common/SectionHeading";

export const metadata: Metadata = {
  title: "Terms & Conditions | Elyvex Nexus",
  description: "Terms and conditions governing the use of the Elyvex Nexus official website.",
};

export default function TermsAndConditionsPage() {
  return (
    <div className="py-12 md:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <SectionHeading
          badge="Legal & Compliance"
          title="Terms & Conditions"
          subtitle="Operating terms and mutual standards for accessing Elyvex Nexus educational platforms."
          align="left"
        />

        <article className="prose prose-slate dark:prose-invert max-w-none text-slate-700 dark:text-slate-300 text-sm leading-relaxed space-y-6">
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing the Elyvex Nexus corporate portal or enrolling in structured courses, you agree to comply with these terms, our code of conduct, and project integrity standards.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">
              2. Intellectual Property & Curricular Resources
            </h2>
            <p>
              Curricula, notes, exercises, and proprietary guides published by Elyvex Nexus are provided for educational enrichment. You may not re-license, sell, or commercialize our materials without express written authorization.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">
              3. Realistic Outcomes & Disclaimer
            </h2>
            <p>
              Elyvex Nexus provides practical training, feedback, and verifiable project assessments. We do not make misleading claims of guaranteed job placements, salaries, or government accreditations. Student growth is dependent on individual commitment, problem-solving effort, and consistent code practice.
            </p>
          </section>
        </article>
      </div>
    </div>
  );
}
