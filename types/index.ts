export type PublishStatus = "draft" | "published" | "archived";
export type SupportedLocale = "en" | "ta" | "hi";

export interface Course {
  id: string;
  slug: string;
  title: string;
  category: string;
  shortDescription: string;
  description: string;
  duration: string;
  level: "Beginner" | "Intermediate" | "Advanced" | "Beginner to Intermediate" | "All Levels";
  skills: string[];
  tools: string[];
  trainerName: string;
  trainerRole?: string;
  hasProject: boolean;
  hasCertificate: boolean;
  status: PublishStatus;
  featured?: boolean;
  syllabus?: {
    moduleNumber: number;
    title: string;
    topics: string[];
  }[];
  prerequisites?: string[];
  projects?: {
    title: string;
    description: string;
  }[];
  createdAt?: string;
  updatedAt?: string;
}

export interface Resource {
  id: string;
  slug: string;
  title: string;
  category: string;
  description: string;
  content: string;
  language: string;
  publishedDate: string;
  status: PublishStatus;
  readingTime?: string;
  tags?: string[];
  author?: string;
  updatedAt?: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  photoUrl: string;
  linkedinUrl?: string;
  twitterUrl?: string;
  githubUrl?: string;
  order: number;
  status: PublishStatus;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: "General" | "Courses" | "Project Lab" | "Certificates" | "Contact";
  order: number;
  status: PublishStatus;
}

export interface Announcement {
  id: string;
  slug: string;
  title: string;
  summary: string;
  content: string;
  imageUrl?: string;
  date: string;
  category: string;
  status: PublishStatus;
  featured?: boolean;
}

export interface ContactMessage {
  id?: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  createdAt?: string;
}

export interface CertificateRecord {
  certificateId: string;
  studentName: string;
  courseTitle: string;
  issueDate: string;
  completionStatus: "Completed" | "In Review" | "Revoked";
  verificationStatus: "Verified" | "Not Found";
  gradeOrScore?: string;
  skillsAcquired: string[];
}

export interface StudentPassportRecord {
  studentId: string;
  name: string;
  headline: string;
  completedCourses: {
    courseTitle: string;
    completionDate: string;
    certificateId: string;
  }[];
  verifiedSkills: string[];
  projectsBuilt: {
    name: string;
    description: string;
    githubUrl?: string;
    demoUrl?: string;
  }[];
  labBadges: {
    name: string;
    icon: string;
    date: string;
  }[];
}
