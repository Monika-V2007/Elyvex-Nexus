import React from "react";

export default function Loading() {
  return (
    <div className="py-12 md:py-20 animate-pulse">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Skeleton Header */}
        <div className="max-w-2xl mx-auto text-center space-y-4">
          <div className="h-6 w-32 bg-slate-200 dark:bg-slate-800 rounded-full mx-auto" />
          <div className="h-10 w-3/4 bg-slate-200 dark:bg-slate-800 rounded-2xl mx-auto" />
          <div className="h-4 w-full bg-slate-200 dark:bg-slate-800 rounded-lg mx-auto" />
        </div>

        {/* Skeleton Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div
              key={i}
              className="p-6 rounded-2xl bg-white dark:bg-[#0a1024] border border-slate-200 dark:border-white/5 space-y-4 shadow-xs"
            >
              <div className="flex justify-between items-center">
                <div className="h-5 w-20 bg-slate-200 dark:bg-slate-800 rounded-md" />
                <div className="h-4 w-16 bg-slate-200 dark:bg-slate-800 rounded-md" />
              </div>
              <div className="h-6 w-3/4 bg-slate-200 dark:bg-slate-800 rounded-lg" />
              <div className="space-y-2">
                <div className="h-3 w-full bg-slate-200 dark:bg-slate-800 rounded-sm" />
                <div className="h-3 w-5/6 bg-slate-200 dark:bg-slate-800 rounded-sm" />
              </div>
              <div className="h-10 w-full bg-slate-200 dark:bg-slate-800 rounded-xl mt-4" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
