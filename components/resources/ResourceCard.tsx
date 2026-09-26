import React from "react";
import Link from "next/link";
import { Resource } from "@/types";
import { formatDate } from "@/lib/utils";
import { BookOpen, Clock, ArrowRight, Tag } from "lucide-react";

interface ResourceCardProps {
  resource: Resource;
  locale: string;
  readText?: string;
}

export function ResourceCard({
  resource,
  locale,
  readText = "Read Resource",
}: ResourceCardProps) {
  return (
    <article className="group rounded-2xl bg-white dark:bg-[#0a1024] border border-slate-200/90 dark:border-white/10 shadow-xs hover:shadow-xl hover:border-sky-500/40 transition-all duration-300 p-6 sm:p-7 flex flex-col justify-between">
      <div className="space-y-3.5">
        <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
          <span className="font-semibold px-2.5 py-1 rounded-md bg-sky-50 dark:bg-sky-950/60 text-sky-600 dark:text-sky-400 border border-sky-200/60 dark:border-sky-800/60">
            {resource.category}
          </span>
          <span className="flex items-center gap-1 font-medium">
            <Clock className="w-3.5 h-3.5" />
            {resource.readingTime || "5 min read"}
          </span>
        </div>

        <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
          <Link href={`/${locale}/resources/${resource.slug}`}>
            {resource.title}
          </Link>
        </h3>

        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 line-clamp-3 leading-relaxed">
          {resource.description}
        </p>

        {resource.tags && resource.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 pt-2">
            {resource.tags.map((tag, idx) => (
              <span
                key={idx}
                className="text-[11px] font-medium px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}
      </div>

      <div className="pt-6 mt-6 border-t border-slate-100 dark:border-white/5 flex items-center justify-between">
        <span className="text-xs text-slate-400 font-medium">
          {formatDate(resource.publishedDate, locale)}
        </span>
        <Link
          href={`/${locale}/resources/${resource.slug}`}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-600 dark:text-sky-400 group-hover:gap-2 transition-all"
        >
          <span>{readText}</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </article>
  );
}
