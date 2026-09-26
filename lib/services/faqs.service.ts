import { FAQItem } from "@/types";
import { supabase, isSupabaseConfigured } from "../db/supabase";

const defaultFAQs: FAQItem[] = [
  {
    id: "f1",
    question: "What is Elyvex Nexus?",
    answer:
      "Elyvex Nexus is an education-focused technology company designed to help students master practical technical skills, build production-grade projects, strengthen problem-solving abilities, earn recognized certificates, and prepare for future career and internship opportunities.",
    category: "General",
    order: 1,
    status: "published",
  },
  {
    id: "f2",
    question: "Who can join Elyvex Nexus courses?",
    answer:
      "Our programs are open to college students, engineering undergraduates, and self-directed learners who want to move beyond purely theoretical exam preparation and gain real-world software capability.",
    category: "General",
    order: 2,
    status: "published",
  },
  {
    id: "f3",
    question: "What courses are currently available?",
    answer:
      "We offer structured programs in Full Stack Web Development, Python Programming & Problem Solving, Java Software Engineering, Data Analytics & Visualization, AI & Machine Learning Fundamentals, and Cloud Computing Basics.",
    category: "Courses",
    order: 3,
    status: "published",
  },
  {
    id: "f4",
    question: "Are real projects included in the curriculum?",
    answer:
      "Yes. Every track at Elyvex Nexus is project-driven. You will design, build, test, and deploy applications using git version control and modern tooling.",
    category: "Courses",
    order: 4,
    status: "published",
  },
  {
    id: "f5",
    question: "What is the Elyvex Project Lab?",
    answer:
      "The Project Lab is our upcoming interactive environment where learners can practice programming challenges, submit code solutions, track performance milestones, and earn verifiable skill badges.",
    category: "Project Lab",
    order: 5,
    status: "published",
  },
  {
    id: "f6",
    question: "Will students receive certificates upon completion?",
    answer:
      "Yes. Learners who successfully complete all course requirements, milestone submissions, and technical assessments receive recognized certificates verifiable online via our official verification portal.",
    category: "Certificates",
    order: 6,
    status: "published",
  },
  {
    id: "f7",
    question: "How does course registration work?",
    answer:
      "You can select your preferred course on this website and click 'Register for Course'. This directs you to our registration portal where you can view upcoming cohort schedules and complete your onboarding.",
    category: "Courses",
    order: 7,
    status: "published",
  },
  {
    id: "f8",
    question: "Are learning resources freely accessible?",
    answer:
      "Yes. Our Resources library provides open technical guides, programming notes, and architectural breakdowns accessible to all students without paywalls.",
    category: "General",
    order: 8,
    status: "published",
  },
  {
    id: "f9",
    question: "How can I contact Elyvex Nexus for inquiries or institutional collaborations?",
    answer:
      "You can submit a message through our Contact page form or email us directly at contact@elyvexnexus.com. Our team responds within 24-48 business hours.",
    category: "Contact",
    order: 9,
    status: "published",
  },
];

export async function getFAQs(): Promise<FAQItem[]> {
  if (isSupabaseConfigured() && supabase) {
    try {
      const { data, error } = await supabase
        .from("faqs")
        .select("*")
        .eq("status", "published")
        .order("display_order", { ascending: true });

      if (!error && data && data.length > 0) {
        return data as FAQItem[];
      }
    } catch {
      // Graceful fallback
    }
  }
  return defaultFAQs;
}
