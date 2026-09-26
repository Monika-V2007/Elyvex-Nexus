import React from "react";
import { Metadata } from "next";
import { getDictionary } from "@/lib/i18n";
import { getFAQs } from "@/lib/services/faqs.service";
import { SectionHeading } from "@/components/common/SectionHeading";
import { FAQAccordion } from "@/components/faq/FAQAccordion";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "FAQ | Elyvex Nexus",
    description:
      "Frequently asked questions regarding Elyvex Nexus, course registration, certificates, and the Project Lab.",
  };
}

export default async function FAQPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = getDictionary(locale);
  const faqs = await getFAQs();

  return (
    <div className="py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <SectionHeading
          badge={dict?.faq?.badge || "Clarity & Help"}
          title={dict?.faq?.title || "Frequently Asked Questions"}
          subtitle={
            dict?.faq?.subtitle ||
            "Everything you need to know about Elyvex Nexus, our courses, the Project Lab, and verification."
          }
        />

        <FAQAccordion items={faqs} />
      </div>
    </div>
  );
}
