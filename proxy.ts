import { NextRequest, NextResponse } from "next/server";
import { defaultLocale, supportedLocales } from "./lib/i18n";

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Ignore static assets, api routes, and seo files
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/images") ||
    pathname.startsWith("/icons") ||
    pathname === "/favicon.ico" ||
    pathname === "/robots.txt" ||
    pathname === "/sitemap.xml"
  ) {
    return NextResponse.next();
  }

  // Check if pathname has a supported locale
  const pathnameHasLocale = supportedLocales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) {
    return NextResponse.next();
  }

  // If root or path without locale, redirect to default locale (/en/...)
  const locale = defaultLocale;
  const newUrl = new URL(`/${locale}${pathname === "/" ? "" : pathname}`, request.url);
  newUrl.search = request.nextUrl.search;
  return NextResponse.redirect(newUrl);
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|images|icons|robots.txt|sitemap.xml).*)"],
};
