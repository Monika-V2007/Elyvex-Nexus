import React from "react";
import { notFound } from "next/navigation";
import { supportedLocales, defaultLocale, getDictionary } from "@/lib/i18n";
import { SupportedLocale } from "@/types";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CookieConsent } from "@/components/common/CookieConsent";

export function generateStaticParams() {
  return supportedLocales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!supportedLocales.includes(locale as SupportedLocale)) {
    notFound();
  }

  const dict = getDictionary(locale);

  return (
    <>
      <Navbar locale={locale as SupportedLocale} dict={dict} />
      <main className="flex-1">{children}</main>
      <Footer locale={locale as SupportedLocale} dict={dict} />
      <CookieConsent locale={locale} />
    </>
  );
}
