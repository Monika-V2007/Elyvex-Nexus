import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { getDictionary } from "@/lib/i18n";
import { getAnnouncements } from "@/lib/services/announcements.service";
import { formatDate } from "@/lib/utils";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Calendar, ArrowRight, BellRing } from "lucide-react";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Announcements & Updates | Elyvex Nexus",
    description:
      "Stay updated with official news, upcoming cohort dates, and technology releases from Elyvex Nexus.",
  };
}

export default async function AnnouncementsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = getDictionary(locale);
  const announcements = await getAnnouncements();

  return (
    <div className="py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <SectionHeading
          badge={dict?.nav?.announcements || "Official News"}
          title="Announcements & Company Updates"
          subtitle="Stay informed about upcoming course registrations, platform milestones, and open webinars."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {announcements.map((item) => (
            <article
              key={item.id}
              className="p-7 rounded-3xl bg-white dark:bg-[#0a1024] border border-slate-200/90 dark:border-white/10 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs text-slate-500">
                  <span className="font-semibold px-2.5 py-1 rounded-md bg-sky-50 dark:bg-sky-950/60 text-sky-600 dark:text-sky-400 border border-sky-200/60 dark:border-sky-800/60">
                    {item.category}
                  </span>
                  <span className="flex items-center gap-1.5 font-medium">
                    <Calendar className="w-3.5 h-3.5" />
                    {formatDate(item.date, locale)}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 dark:text-white hover:text-sky-600 transition-colors">
                  <Link href={`/${locale}/announcements/${item.slug}`}>
                    {item.title}
                  </Link>
                </h3>

                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                  {item.summary}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 dark:border-white/5">
                <Link
                  href={`/${locale}/announcements/${item.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-600 dark:text-sky-400 hover:gap-2 transition-all"
                >
                  <span>Read Full Update</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
