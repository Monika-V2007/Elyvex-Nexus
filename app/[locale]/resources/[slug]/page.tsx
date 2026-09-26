import React from "react";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import Link from "next/link";
import { getResourceBySlug, getAllResources } from "@/lib/services/resources.service";
import { formatDate } from "@/lib/utils";
import { Clock, Calendar, ArrowLeft, Tag, Share2, BookOpen } from "lucide-react";

export async function generateStaticParams() {
  const resources = await getAllResources();
  return resources.map((r) => ({
    slug: r.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const resource = await getResourceBySlug(slug);

  if (!resource) {
    return {
      title: "Resource Not Found | Elyvex Nexus",
    };
  }

  return {
    title: `${resource.title} | Elyvex Nexus Resources`,
    description: resource.description,
    openGraph: {
      title: `${resource.title} | Elyvex Nexus`,
      description: resource.description,
      type: "article",
      publishedTime: resource.publishedDate,
    },
  };
}

export default async function ResourceDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const resource = await getResourceBySlug(slug);

  if (!resource) {
    notFound();
  }

  // Schema.org TechArticle Structured Data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: resource.title,
    description: resource.description,
    datePublished: resource.publishedDate,
    author: {
      "@type": "Organization",
      name: resource.author || "Elyvex Nexus Engineering Team",
    },
    publisher: {
      "@type": "Organization",
      name: "Elyvex Nexus",
      url: "https://elyvexnexus.com",
    },
  };

  return (
    <div className="py-12 md:py-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Back navigation & Breadcrumb */}
        <div className="flex items-center justify-between">
          <Link
            href={`/${locale}/resources`}
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-slate-500 hover:text-sky-600 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Resources</span>
          </Link>
          <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-sky-50 dark:bg-sky-950/60 text-sky-600 dark:text-sky-400 border border-sky-200/60 dark:border-sky-800/60">
            {resource.category}
          </span>
        </div>

        {/* Article Header */}
        <header className="space-y-4 border-b border-slate-200 dark:border-white/10 pb-8">
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
            {resource.title}
          </h1>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
            {resource.description}
          </p>

          <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-slate-500 dark:text-slate-400 pt-2">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              {formatDate(resource.publishedDate, locale)}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              {resource.readingTime || "5 min read"}
            </span>
            <span>By {resource.author || "Elyvex Engineering Team"}</span>
          </div>

          {resource.tags && resource.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 pt-2">
              {resource.tags.map((t, idx) => (
                <span
                  key={idx}
                  className="text-xs px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-medium"
                >
                  #{t}
                </span>
              ))}
            </div>
          )}
        </header>

        {/* Article Body */}
        <article className="prose prose-slate dark:prose-invert max-w-none text-slate-700 dark:text-slate-300 leading-relaxed space-y-6 text-sm sm:text-base">
          <div className="p-5 rounded-2xl bg-sky-50 dark:bg-sky-950/30 border border-sky-200/60 dark:border-sky-900/40 text-xs sm:text-sm text-sky-900 dark:text-sky-200 flex items-start gap-3">
            <BookOpen className="w-5 h-5 text-sky-500 shrink-0 mt-0.5" />
            <p>
              This is a structured open resource published by Elyvex Nexus for students and software engineering learners. It is designed to reinforce concepts taught in our hands-on cohorts.
            </p>
          </div>

          <div className="whitespace-pre-line leading-relaxed font-sans space-y-4">
            {resource.content}
          </div>
        </article>

        {/* Footer info & CTA */}
        <footer className="mt-12 pt-8 border-t border-slate-200 dark:border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500">
            Published for educational reference by Elyvex Nexus.
          </p>
          <Link
            href={`/${locale}/courses`}
            className="text-xs font-semibold text-sky-600 dark:text-sky-400 hover:underline"
          >
            Explore related courses & workshops →
          </Link>
        </footer>
      </div>
    </div>
  );
}
