import React from "react";
import { Metadata } from "next";
import { getDictionary } from "@/lib/i18n";
import { getAllCourses } from "@/lib/services/courses.service";
import { SectionHeading } from "@/components/common/SectionHeading";
import { CourseCatalog } from "@/components/courses/CourseCatalog";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Courses | Elyvex Nexus",
    description:
      "Explore structured, practical learning programs in Full Stack Web Development, Python, Java, Data Analytics, AI, and Cloud.",
  };
}

export default async function CoursesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = getDictionary(locale);
  const courses = await getAllCourses();

  return (
    <div className="py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <SectionHeading
          badge={dict?.courses?.badge || "Structured Programs"}
          title={dict?.courses?.title || "Structured Technical Courses"}
          subtitle={
            dict?.courses?.subtitle ||
            "Every course is engineered for practical software capability, production-quality project delivery, and verifiable skill development."
          }
        />

        <CourseCatalog courses={courses} locale={locale} dict={dict} />
      </div>
    </div>
  );
}
