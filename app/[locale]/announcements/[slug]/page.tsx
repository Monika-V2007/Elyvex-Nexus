import React from "react";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import Link from "next/link";
import { getAnnouncementBySlug, getAnnouncements } from "@/lib/services/announcements.service";
import { formatDate } from "@/lib/utils";
import { ArrowLeft, Calendar, Tag, BellRing } from "lucide-react";

export async function generateStaticParams() {
  const all = await getAnnouncements();
  return all.map((a) => ({
    slug: a.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const announcement = await getAnnouncementBySlug(slug);

  if (!announcement) {
    return {
      title: "Announcement Not Found | Elyvex Nexus",
    };
  }

  return {
    title: `${announcement.title} | Elyvex Nexus Announcements`,
    description: announcement.summary,
  };
}

export default async function AnnouncementDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const announcement = await getAnnouncementBySlug(slug);

  if (!announcement) {
    notFound();
  }

  return (
    <div className="py-12 md:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <Link
          href={`/${locale}/announcements`}
          className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-slate-500 hover:text-sky-600 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Announcements</span>
        </Link>

        <header className="space-y-4 border-b border-slate-200 dark:border-white/10 pb-8">
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-sky-50 dark:bg-sky-950/60 text-sky-600 dark:text-sky-400 border border-sky-200/60 dark:border-sky-800/60">
              {announcement.category}
            </span>
            <span className="flex items-center gap-1.5 text-xs text-slate-500">
              <Calendar className="w-3.5 h-3.5" />
              {formatDate(announcement.date, locale)}
            </span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
            {announcement.title}
          </h1>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
            {announcement.summary}
          </p>
        </header>

        <article className="prose prose-slate dark:prose-invert max-w-none text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed whitespace-pre-line space-y-4">
          {announcement.content}
        </article>

        <footer className="pt-8 border-t border-slate-200 dark:border-white/10">
          <p className="text-xs text-slate-500">
            Official Announcement published by Elyvex Nexus Communications.
          </p>
        </footer>
      </div>
    </div>
  );
}
