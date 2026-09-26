import { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { supportedLocales } from "@/lib/i18n";
import { getAllCourses } from "@/lib/services/courses.service";
import { getAllResources } from "@/lib/services/resources.service";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = siteConfig.url;
  const courses = await getAllCourses();
  const resources = await getAllResources();

  const routes = [
    "",
    "/about",
    "/courses",
    "/resources",
    "/project-lab",
    "/team",
    "/announcements",
    "/faq",
    "/contact",
    "/privacy-policy",
    "/terms-and-conditions",
    "/cookie-policy",
  ];

  const sitemapEntries: MetadataRoute.Sitemap = [];

  for (const locale of supportedLocales) {
    // Static routes
    for (const route of routes) {
      sitemapEntries.push({
        url: `${baseUrl}/${locale}${route}`,
        lastModified: new Date(),
        changeFrequency: route === "" ? "daily" : "weekly",
        priority: route === "" ? 1.0 : 0.8,
      });
    }

    // Courses detail
    for (const course of courses) {
      sitemapEntries.push({
        url: `${baseUrl}/${locale}/courses/${course.slug}`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: 0.85,
      });
    }

    // Resources detail
    for (const resource of resources) {
      sitemapEntries.push({
        url: `${baseUrl}/${locale}/resources/${resource.slug}`,
        lastModified: new Date(resource.publishedDate),
        changeFrequency: "monthly",
        priority: 0.75,
      });
    }
  }

  return sitemapEntries;
}
