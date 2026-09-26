import { TeamMember } from "@/types";
import { supabase, isSupabaseConfigured } from "../db/supabase";

const defaultTeam: TeamMember[] = [
  {
    id: "tm1",
    name: "Founding Leadership",
    role: "Chief Executive Officer (CEO)",
    bio: "Focuses on strategic vision, ecosystem expansion, and building academic-industry partnerships to empower students with genuine engineering capabilities.",
    photoUrl: "/images/team/placeholder-ceo.jpg",
    linkedinUrl: "https://linkedin.com/company/elyvex-nexus",
    order: 1,
    status: "published",
  },
  {
    id: "tm2",
    name: "Engineering Leadership",
    role: "Chief Technology Officer (CTO)",
    bio: "Directs technical architecture, curriculum engineering standards, Project Lab interactive sandbox infrastructure, and scalable cloud systems.",
    photoUrl: "/images/team/placeholder-cto.jpg",
    linkedinUrl: "https://linkedin.com/company/elyvex-nexus",
    order: 2,
    status: "published",
  },
  {
    id: "tm3",
    name: "Operations & Delivery",
    role: "Chief Operating Officer (COO)",
    bio: "Manages operational frameworks, curriculum delivery schedules, student learning milestones, and cross-functional team execution.",
    photoUrl: "/images/team/placeholder-coo.jpg",
    linkedinUrl: "https://linkedin.com/company/elyvex-nexus",
    order: 3,
    status: "published",
  },
  {
    id: "tm4",
    name: "Brand & Community",
    role: "Chief Marketing Officer (CMO)",
    bio: "Leads institutional relationships, community outreach, authentic brand communication, and student engagement initiatives.",
    photoUrl: "/images/team/placeholder-cmo.jpg",
    linkedinUrl: "https://linkedin.com/company/elyvex-nexus",
    order: 4,
    status: "published",
  },
  {
    id: "tm5",
    name: "Growth & Partnerships",
    role: "Chief Business Officer (CBO)",
    bio: "Develops institutional alliances, internship bridges, corporate hiring network relationships, and future ecosystem opportunities.",
    photoUrl: "/images/team/placeholder-cbo.jpg",
    linkedinUrl: "https://linkedin.com/company/elyvex-nexus",
    order: 5,
    status: "published",
  },
];

export async function getTeamMembers(): Promise<TeamMember[]> {
  if (isSupabaseConfigured() && supabase) {
    try {
      const { data, error } = await supabase
        .from("team_members")
        .select("*")
        .eq("status", "published")
        .order("display_order", { ascending: true });

      if (!error && data && data.length > 0) {
        return data as TeamMember[];
      }
    } catch {
      // Graceful fallback
    }
  }
  return defaultTeam;
}
