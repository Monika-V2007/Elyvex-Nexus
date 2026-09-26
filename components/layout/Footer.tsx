import React from "react";
import Link from "next/link";
import { SupportedLocale } from "@/types";
import { footerNav } from "@/config/navigation";
import { externalLinks } from "@/config/links";
import { BrandLogo } from "../common/BrandLogo";
import { LanguageSwitcher } from "../common/LanguageSwitcher";
import {
  LinkedInIcon,
  YouTubeIcon,
  InstagramIcon,
  FacebookIcon,
} from "../common/SocialIcons";
import { ArrowUpRight, ShieldCheck } from "lucide-react";

interface FooterProps {
  locale: SupportedLocale;
  dict: any;
}

export function Footer({ locale, dict }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const getTranslatedTitle = (key: string) => {
    const parts = key.split(".");
    return parts.reduce((o, i) => (o ? o[i] : null), dict) || key;
  };

  return (
    <footer className="w-full border-t border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-[#04060f] text-slate-600 dark:text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Col 1: Brand & Tagline */}
          <div className="lg:col-span-2 space-y-4">
            <BrandLogo locale={locale} showTagline={true} />
            <p className="text-sm leading-relaxed max-w-sm text-slate-600 dark:text-slate-400">
              {dict?.footer?.description ||
                "Elyvex Nexus is an education-focused technology company dedicated to practical skills, hands-on projects, recognized certifications, and future career opportunities."}
            </p>
            <div className="pt-2 flex items-center gap-2">
              <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                Language:
              </span>
              <LanguageSwitcher currentLocale={locale} variant="footer" />
            </div>
          </div>

          {/* Col 2: Company */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-4">
              {dict?.footer?.colCompany || "Company"}
            </h3>
            <ul className="space-y-2.5 text-sm">
              {footerNav.company.map((item) => (
                <li key={item.href}>
                  <Link
                    href={`/${locale}${item.href === "/" ? "" : item.href}`}
                    className="hover:text-sky-600 dark:hover:text-sky-400 transition-colors"
                  >
                    {getTranslatedTitle(item.titleKey)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Learning */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-4">
              {dict?.footer?.colLearning || "Learning"}
            </h3>
            <ul className="space-y-2.5 text-sm">
              {footerNav.learning.map((item) => (
                <li key={item.href}>
                  <Link
                    href={`/${locale}${item.href}`}
                    className="hover:text-sky-600 dark:hover:text-sky-400 transition-colors flex items-center gap-1"
                  >
                    <span>{getTranslatedTitle(item.titleKey)}</span>
                    {item.href.includes("verify") && (
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                    )}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href={`/${locale}/passport/STU-2026-042`}
                  className="hover:text-sky-600 dark:hover:text-sky-400 transition-colors"
                >
                  Student Passport Demo
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Support & Legal */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-4">
              {dict?.footer?.colSupport || "Support & Legal"}
            </h3>
            <ul className="space-y-2.5 text-sm">
              {footerNav.support.map((item) => (
                <li key={item.href}>
                  <Link
                    href={`/${locale}${item.href}`}
                    className="hover:text-sky-600 dark:hover:text-sky-400 transition-colors"
                  >
                    {getTranslatedTitle(item.titleKey)}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Social Links */}
            <div className="mt-6">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-3">
                {dict?.footer?.colSocial || "Connect"}
              </h4>
              <div className="flex items-center gap-3">
                <a
                  href={externalLinks.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-slate-200/70 dark:bg-slate-800/80 text-slate-600 dark:text-slate-300 hover:text-sky-600 dark:hover:text-sky-400 transition-colors"
                  aria-label="Elyvex Nexus LinkedIn"
                >
                  <LinkedInIcon size={16} />
                </a>
                <a
                  href={externalLinks.social.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-slate-200/70 dark:bg-slate-800/80 text-slate-600 dark:text-slate-300 hover:text-red-500 transition-colors"
                  aria-label="Elyvex Nexus YouTube"
                >
                  <YouTubeIcon size={16} />
                </a>
                <a
                  href={externalLinks.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-slate-200/70 dark:bg-slate-800/80 text-slate-600 dark:text-slate-300 hover:text-pink-500 transition-colors"
                  aria-label="Elyvex Nexus Instagram"
                >
                  <InstagramIcon size={16} />
                </a>
                <a
                  href={externalLinks.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-slate-200/70 dark:bg-slate-800/80 text-slate-600 dark:text-slate-300 hover:text-blue-600 transition-colors"
                  aria-label="Elyvex Nexus Facebook"
                >
                  <FacebookIcon size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-200 dark:border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {currentYear} Elyvex Nexus. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="inline-flex items-center gap-1.5 text-slate-500">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Official Corporate Portal
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
