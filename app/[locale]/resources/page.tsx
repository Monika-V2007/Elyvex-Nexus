import React from "react";
import { Metadata } from "next";
import { getDictionary } from "@/lib/i18n";
import { getAllResources } from "@/lib/services/resources.service";
import { SectionHeading } from "@/components/common/SectionHeading";
import { ResourceCard } from "@/components/resources/ResourceCard";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Learning Resources | Elyvex Nexus",
    description:
      "Access open technical guides, programming notes, and modern software engineering documentation from Elyvex Nexus.",
  };
}

export default async function ResourcesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = getDictionary(locale);
  const resources = await getAllResources();

  return (
    <div className="py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <SectionHeading
          badge={dict?.resources?.badge || "Open Knowledge"}
          title={dict?.resources?.title || "Technical Resources & Guides"}
          subtitle={
            dict?.resources?.subtitle ||
            "Curated notes, code architectural breakdowns, and cheat-sheets built for fast learning and permanent reference."
          }
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {resources.map((resource) => (
            <ResourceCard
              key={resource.id}
              resource={resource}
              locale={locale}
              readText={dict?.resources?.readResource || "Read Resource"}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
