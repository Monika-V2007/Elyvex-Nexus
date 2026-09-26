"use client";

import React, { useState, useRef, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { SupportedLocale } from "@/types";
import { supportedLocales, localeNames } from "@/lib/i18n";
import { Globe, ChevronDown, Check } from "lucide-react";

interface LanguageSwitcherProps {
  currentLocale: SupportedLocale;
  variant?: "header" | "footer";
}

export function LanguageSwitcher({
  currentLocale,
  variant = "header",
}: LanguageSwitcherProps) {
  const pathname = usePathname();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Compute route for each target locale, preserving current subpath
  const handleSelectLocale = (newLocale: SupportedLocale) => {
    if (newLocale === currentLocale) {
      setIsOpen(false);
      return;
    }

    let targetPath = pathname;
    for (const loc of supportedLocales) {
      if (targetPath.startsWith(`/${loc}/`)) {
        targetPath = targetPath.replace(`/${loc}/`, `/${newLocale}/`);
        break;
      } else if (targetPath === `/${loc}`) {
        targetPath = `/${newLocale}`;
        break;
      }
    }

    setIsOpen(false);
    router.push(targetPath);
  };

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-haspopup="true"
        aria-expanded={isOpen}
        aria-label="Select language"
        className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg border transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-sky-500 ${
          variant === "header"
            ? "border-slate-200 dark:border-slate-800 bg-white/60 dark:bg-slate-900/60 backdrop-blur-md text-slate-700 dark:text-slate-200 hover:border-slate-300 dark:hover:border-slate-700 shadow-xs"
            : "border-slate-300 dark:border-slate-800 bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:text-white"
        }`}
      >
        <Globe className="w-3.5 h-3.5 text-sky-500 dark:text-sky-400" />
        <span>{localeNames[currentLocale]?.nativeName || "English"}</span>
        <ChevronDown
          className={`w-3.5 h-3.5 opacity-60 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {isOpen && (
        <div
          role="menu"
          aria-orientation="vertical"
          className="absolute right-0 mt-1.5 w-36 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xl py-1 z-50 animate-in fade-in zoom-in-95 duration-150"
        >
          {supportedLocales.map((loc) => {
            const isSelected = loc === currentLocale;
            return (
              <button
                key={loc}
                type="button"
                role="menuitem"
                onClick={() => handleSelectLocale(loc)}
                className={`w-full text-left px-3 py-2 text-xs flex items-center justify-between transition-colors ${
                  isSelected
                    ? "bg-sky-50 dark:bg-sky-950/50 text-sky-600 dark:text-sky-400 font-semibold"
                    : "text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/60"
                }`}
              >
                <span>{localeNames[loc].nativeName}</span>
                {isSelected && <Check className="w-3.5 h-3.5 text-sky-500" />}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
