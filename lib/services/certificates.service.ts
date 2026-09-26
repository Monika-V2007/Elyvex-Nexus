import { CertificateRecord, StudentPassportRecord } from "@/types";
import { supabase, isSupabaseConfigured } from "../db/supabase";

const mockCertificates: Record<string, CertificateRecord> = {
  "DEMO-2026-001": {
    certificateId: "DEMO-2026-001",
    studentName: "Verified Candidate",
    courseTitle: "Full Stack Web Development",
    issueDate: "2026-09-15",
    completionStatus: "Completed",
    verificationStatus: "Verified",
    gradeOrScore: "Distinction (94%)",
    skillsAcquired: [
      "TypeScript",
      "React 19",
      "Next.js App Router",
      "PostgreSQL Schema Design",
      "Tailwind CSS",
      "Git & GitHub Workflows",
    ],
  },
};

const mockPassports: Record<string, StudentPassportRecord> = {
  "STU-2026-042": {
    studentId: "STU-2026-042",
    name: "A. Candidate",
    headline: "Aspiring Full Stack Engineer & Open Source Contributor",
    completedCourses: [
      {
        courseTitle: "Full Stack Web Development",
        completionDate: "2026-09-15",
        certificateId: "DEMO-2026-001",
      },
    ],
    verifiedSkills: [
      "TypeScript",
      "Next.js",
      "PostgreSQL",
      "Tailwind CSS",
      "Git Workflow",
    ],
    projectsBuilt: [
      {
        name: "Enterprise Workflow Manager",
        description:
          "A production-like project management dashboard with real-time status and database indexes.",
        githubUrl: "https://github.com/elyvex-nexus",
        demoUrl: "https://elyvexnexus.com",
      },
    ],
    labBadges: [
      {
        name: "100 Problems Solved",
        icon: "award",
        date: "2026-09-10",
      },
      {
        name: "Clean Code Reviewer",
        icon: "shield-check",
        date: "2026-09-14",
      },
    ],
  },
};

export async function verifyCertificate(
  certificateId: string
): Promise<CertificateRecord | null> {
  const normalizedId = certificateId.trim().toUpperCase();

  if (isSupabaseConfigured() && supabase) {
    try {
      const { data, error } = await supabase
        .from("certificates")
        .select("*")
        .eq("certificate_id", normalizedId)
        .single();

      if (!error && data) {
        return {
          certificateId: data.certificate_id,
          studentName: data.student_name,
          courseTitle: data.course_title,
          issueDate: data.issue_date,
          completionStatus: data.completion_status,
          verificationStatus: data.verification_status,
          skillsAcquired: data.skills_acquired || [],
        };
      }
    } catch {
      // Fallback
    }
  }

  return mockCertificates[normalizedId] || null;
}

export async function getStudentPassport(
  studentId: string
): Promise<StudentPassportRecord | null> {
  const normalizedId = studentId.trim().toUpperCase();
  return mockPassports[normalizedId] || null;
}
