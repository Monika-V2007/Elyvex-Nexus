import React from "react";
import { Metadata } from "next";
import { SectionHeading } from "@/components/common/SectionHeading";

export const metadata: Metadata = {
  title: "Cookie Policy | Elyvex Nexus",
  description: "Explanation of cookie usage and privacy controls on Elyvex Nexus.",
};

export default function CookiePolicyPage() {
  return (
    <div className="py-12 md:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <SectionHeading
          badge="Legal & Compliance"
          title="Cookie Policy"
          subtitle="How cookies and local storage tokens are used on the Elyvex Nexus corporate portal."
          align="left"
        />

        <article className="prose prose-slate dark:prose-invert max-w-none text-slate-700 dark:text-slate-300 text-sm leading-relaxed space-y-6">
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">
              1. What Are Cookies?
            </h2>
            <p>
              Cookies are small data files placed on your browser to remember essential preferences, such as selected language (English, Tamil, Hindi) and theme choices.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">
              2. Categories of Cookies Used
            </h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>Strictly Essential:</strong> Preserving locale, authentication session tokens for future modules, and security parameters.
              </li>
              <li>
                <strong>Preference Cookies:</strong> Remembering your chosen interface language.
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">
              3. Managing Your Choices
            </h2>
            <p>
              You can control cookie preferences directly through our consent banner or via your browser settings at any time.
            </p>
          </section>
        </article>
      </div>
    </div>
  );
}
