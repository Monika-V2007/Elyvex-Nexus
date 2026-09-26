"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SupportedLocale } from "@/types";
import { mainNav } from "@/config/navigation";
import { BrandLogo } from "../common/BrandLogo";
import { LanguageSwitcher } from "../common/LanguageSwitcher";
import { Button } from "../common/Button";
import { Menu, X, ArrowUpRight } from "lucide-react";

interface NavbarProps {
  locale: SupportedLocale;
  dict: any;
}

export function Navbar({ locale, dict }: NavbarProps) {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const getTranslatedTitle = (key: string) => {
    const parts = key.split(".");
    return parts.reduce((o, i) => (o ? o[i] : null), dict) || key;
  };

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-white/85 dark:bg-[#050814]/85 backdrop-blur-md border-b border-slate-200/80 dark:border-white/10 shadow-xs"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Brand Logo */}
          <div className="shrink-0">
            <BrandLogo locale={locale} showTagline={false} />
          </div>

          {/* Desktop Navigation Links */}
          <nav
            aria-label="Main Navigation"
            className="hidden lg:flex items-center gap-1 xl:gap-2"
          >
            {mainNav.map((item) => {
              const fullHref = item.href.startsWith("#")
                ? `/${locale}${item.href}`
                : item.href === "/"
                ? `/${locale}`
                : `/${locale}${item.href}`;

              const isActive =
                item.href === "/"
                  ? pathname === `/${locale}`
                  : !item.href.startsWith("#") && pathname.startsWith(fullHref);

              return (
                <Link
                  key={item.href}
                  href={fullHref}
                  className={`px-3 py-1.5 rounded-lg text-xs xl:text-sm font-medium transition-colors ${
                    isActive
                      ? "text-sky-600 dark:text-sky-400 bg-sky-50 dark:bg-sky-950/50 font-semibold"
                      : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100/70 dark:hover:bg-slate-800/40"
                  }`}
                >
                  {getTranslatedTitle(item.titleKey)}
                </Link>
              );
            })}
          </nav>

          {/* Action CTAs & Language Switcher */}
          <div className="hidden lg:flex items-center gap-3">
            <LanguageSwitcher currentLocale={locale} variant="header" />
            <Button
              href={`/${locale}/courses`}
              size="sm"
              variant="primary"
              className="text-xs font-semibold shadow-xs"
              icon={<ArrowUpRight className="w-3.5 h-3.5" />}
            >
              {dict?.nav?.exploreCourses || "Explore Courses"}
            </Button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <LanguageSwitcher currentLocale={locale} variant="header" />
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-sky-500"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-slate-200 dark:border-white/10 bg-white dark:bg-[#080d1e] shadow-2xl px-4 pt-3 pb-6 space-y-2 animate-in slide-in-from-top-2 duration-200">
          <div className="space-y-1">
            {mainNav.map((item) => {
              const fullHref = item.href.startsWith("#")
                ? `/${locale}${item.href}`
                : item.href === "/"
                ? `/${locale}`
                : `/${locale}${item.href}`;

              const isActive =
                item.href === "/"
                  ? pathname === `/${locale}`
                  : !item.href.startsWith("#") && pathname.startsWith(fullHref);

              return (
                <Link
                  key={item.href}
                  href={fullHref}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                    isActive
                      ? "text-sky-600 dark:text-sky-400 bg-sky-50 dark:bg-sky-950/60 font-semibold"
                      : "text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800/60"
                  }`}
                >
                  {getTranslatedTitle(item.titleKey)}
                </Link>
              );
            })}
          </div>

          <div className="pt-4 border-t border-slate-200 dark:border-slate-800 space-y-2">
            <Button
              href={`/${locale}/courses`}
              variant="primary"
              size="md"
              className="w-full text-center"
              icon={<ArrowUpRight className="w-4 h-4" />}
            >
              {dict?.nav?.exploreCourses || "Explore Courses"}
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
