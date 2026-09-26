import React from "react";
import Link from "next/link";
import { Compass } from "lucide-react";

export default function RootNotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center py-16 px-4 bg-slate-950 text-white">
      <div className="max-w-md w-full text-center space-y-6">
        <div className="w-16 h-16 rounded-2xl bg-sky-950/60 text-sky-400 mx-auto flex items-center justify-center border border-sky-800">
          <Compass className="w-8 h-8" />
        </div>

        <div className="space-y-2">
          <span className="text-xs font-mono font-bold text-sky-400 tracking-wider">
            ERROR 404
          </span>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white">
            Looks like this page took a different route.
          </h1>
          <p className="text-sm text-slate-400">
            The page you requested could not be located.
          </p>
        </div>

        <div className="pt-2 flex justify-center gap-3">
          <Link
            href="/en"
            className="px-5 py-2.5 rounded-xl text-sm font-semibold bg-sky-600 hover:bg-sky-500 text-white transition-colors"
          >
            Go to Homepage
          </Link>
          <Link
            href="/en/courses"
            className="px-5 py-2.5 rounded-xl text-sm font-semibold border border-slate-700 hover:bg-slate-900 text-slate-200 transition-colors"
          >
            Explore Courses
          </Link>
        </div>
      </div>
    </div>
  );
}
