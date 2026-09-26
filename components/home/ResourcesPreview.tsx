import React from "react";
import Link from "next/link";
import { Resource } from "@/types";
import { SectionHeading } from "../common/SectionHeading";
import { ResourceCard } from "../resources/ResourceCard";
import { Button } from "../common/Button";
import { ArrowRight } from "lucide-react";

interface ResourcesPreviewProps {
  resources: Resource[];
  locale: string;
  dict: any;
}

export function ResourcesPreview({
  resources,
  locale,
  dict,
}: ResourcesPreviewProps) {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <SectionHeading
            badge={dict?.resources?.badge || "Open Knowledge"}
            title={dict?.resources?.title || "Curated Technical Resources"}
            subtitle={
              dict?.resources?.subtitle ||
              "SEO-friendly guides, programming notes, and technical cheat-sheets built for fast learning and reference."
            }
            align="left"
            className="mb-0 max-w-2xl"
          />

          <Button
            href={`/${locale}/resources`}
            variant="outline"
            size="md"
            icon={<ArrowRight className="w-4 h-4" />}
            className="self-start md:self-auto shrink-0 font-semibold"
          >
            {dict?.common?.learnMore || "View All Resources"}
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {resources.slice(0, 3).map((resource) => (
            <ResourceCard
              key={resource.id}
              resource={resource}
              locale={locale}
              readText={dict?.resources?.readResource || "Read Resource"}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
