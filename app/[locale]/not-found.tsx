import React from "react";
import Link from "next/link";
import { Button } from "@/components/common/Button";
import { Compass, Home, BookOpen } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center py-16 px-4">
      <div className="max-w-md w-full text-center space-y-6">
        <div className="w-16 h-16 rounded-2xl bg-sky-50 dark:bg-sky-950/60 text-sky-500 mx-auto flex items-center justify-center border border-sky-200/80 dark:border-sky-800/60">
          <Compass className="w-8 h-8 animate-spin-slow" />
        </div>

        <div className="space-y-2">
          <span className="text-xs font-mono font-bold text-sky-500 tracking-wider">
            ERROR 404
          </span>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
            Looks like this page took a different route.
          </h1>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            The link you followed may be broken or the page might have been relocated within the Elyvex Nexus ecosystem.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <Button
            href="/en"
            variant="primary"
            size="md"
            icon={<Home className="w-4 h-4" />}
            className="w-full sm:w-auto"
          >
            Go Home
          </Button>
          <Button
            href="/en/courses"
            variant="outline"
            size="md"
            icon={<BookOpen className="w-4 h-4" />}
            className="w-full sm:w-auto"
          >
            Explore Courses
          </Button>
        </div>
      </div>
    </div>
  );
}
