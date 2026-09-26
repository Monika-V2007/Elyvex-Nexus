import { Announcement } from "@/types";
import { supabase, isSupabaseConfigured } from "../db/supabase";

const defaultAnnouncements: Announcement[] = [
  {
    id: "a1",
    slug: "elyvex-project-lab-announcement",
    title: "Introducing the Elyvex Project Lab Architecture",
    summary:
      "A sneak peek into our upcoming interactive coding and project environment designed for hands-on technical problem solving.",
    content: `We are proud to announce the architectural roadmap of the **Elyvex Project Lab**.

Designed to empower students with genuine engineering confidence, the Project Lab will feature:
- Multi-language sandbox execution (Python, JavaScript, Java, C++)
- Automated test suites evaluating code correctness and efficiency
- Real milestone projects with git commit workflows
- Transparent achievement badges and verifiable student passport records.

Stay tuned as we prepare for student beta cohorts.`,
    date: "2026-09-01",
    category: "Initiative",
    status: "published",
    featured: true,
  },
  {
    id: "a2",
    slug: "upcoming-fall-2026-cohorts",
    title: "Upcoming Fall 2026 Structured Learning Cohorts",
    summary:
      "Registrations will open shortly for our new cohorts in Full Stack Web Development and Python Software Engineering.",
    content: `Our Fall 2026 programs are designed to accommodate university semesters while providing intensive, hands-on weekend workshops, daily coding challenges, and dedicated mentor code reviews.

Key highlights:
- Small batch sizes ensuring personalized feedback
- Industry-aligned curriculum updated with Next.js 15, React 19, and cloud architectures
- Comprehensive portfolio projects ready for internship showcases.`,
    date: "2026-08-20",
    category: "Courses",
    status: "published",
    featured: false,
  },
];

export async function getAnnouncements(): Promise<Announcement[]> {
  if (isSupabaseConfigured() && supabase) {
    try {
      const { data, error } = await supabase
        .from("announcements")
        .select("*")
        .eq("status", "published")
        .order("created_at", { ascending: false });

      if (!error && data && data.length > 0) {
        return data as Announcement[];
      }
    } catch {
      // Fallback
    }
  }
  return defaultAnnouncements;
}

export async function getAnnouncementBySlug(slug: string): Promise<Announcement | null> {
  const all = await getAnnouncements();
  return all.find((a) => a.slug === slug) || null;
}
