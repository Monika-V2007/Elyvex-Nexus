"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Cookie, X } from "lucide-react";

interface CookieConsentProps {
  locale: string;
}

export function CookieConsent({ locale }: CookieConsentProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("elyvex_cookie_consent");
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("elyvex_cookie_consent", "accepted");
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem("elyvex_cookie_consent", "declined");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <aside
      aria-label="Cookie consent banner"
      className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:max-w-md z-50 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border border-slate-200 dark:border-slate-800 rounded-2xl p-5 shadow-2xl transition-all duration-300 animate-in slide-in-from-bottom-5"
    >
      <div className="flex items-start gap-3.5">
        <div className="p-2 rounded-xl bg-sky-50 dark:bg-sky-950/60 text-sky-500 shrink-0">
          <Cookie className="w-5 h-5" />
        </div>
        <div className="flex-1 text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
          <p className="font-semibold text-slate-900 dark:text-white text-sm mb-1">
            Privacy & Cookie Preferences
          </p>
          <p>
            Elyvex Nexus uses essential cookies for language and layout preferences. We do not sell user data. See our{" "}
            <Link
              href={`/${locale}/cookie-policy`}
              className="text-sky-600 dark:text-sky-400 underline hover:no-underline font-medium"
            >
              Cookie Policy
            </Link>{" "}
            for details.
          </p>
          <div className="flex items-center gap-2.5 mt-3.5">
            <button
              onClick={handleAccept}
              className="px-3.5 py-1.5 text-xs font-semibold rounded-lg bg-sky-600 hover:bg-sky-500 text-white transition-colors"
            >
              Accept All
            </button>
            <button
              onClick={handleDecline}
              className="px-3 py-1.5 text-xs font-medium rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              Essential Only
            </button>
          </div>
        </div>
        <button
          onClick={handleDecline}
          aria-label="Close"
          className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </aside>
  );
}
