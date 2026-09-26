import React from "react";
import { Metadata } from "next";
import { getDictionary } from "@/lib/i18n";
import { getAllCourses, getFeaturedCourses } from "@/lib/services/courses.service";
import { getAllResources } from "@/lib/services/resources.service";
import { Hero } from "@/components/home/Hero";
import { TrustStrip } from "@/components/home/TrustStrip";
import { AboutPreview } from "@/components/home/AboutPreview";
import { Offerings } from "@/components/home/Offerings";
import { CoursesPreview } from "@/components/home/CoursesPreview";
import { WhyElyvex } from "@/components/home/WhyElyvex";
import { LearningJourney } from "@/components/home/LearningJourney";
import { ProjectLabPreview } from "@/components/home/ProjectLabPreview";
import { ResourcesPreview } from "@/components/home/ResourcesPreview";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const dict = getDictionary(locale);

  return {
    title: "Elyvex Nexus | Empowering Skills. Building Futures.",
    description: dict?.hero?.subtitle || "Empowering Skills. Building Futures.",
  };
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = getDictionary(locale);

  const featuredCourses = await getFeaturedCourses();
  const allResources = await getAllResources();

  return (
    <div className="flex flex-col">
      <Hero locale={locale} dict={dict} />
      <TrustStrip dict={dict} />
      <AboutPreview locale={locale} dict={dict} />
      <Offerings locale={locale} dict={dict} />
      <CoursesPreview courses={featuredCourses} locale={locale} dict={dict} />
      <WhyElyvex dict={dict} />
      <LearningJourney dict={dict} />
      <ProjectLabPreview locale={locale} dict={dict} />
      <ResourcesPreview resources={allResources} locale={locale} dict={dict} />
    </div>
  );
}
