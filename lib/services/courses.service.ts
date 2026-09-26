import { Course } from "@/types";
import { supabase, isSupabaseConfigured } from "../db/supabase";

const defaultCourses: Course[] = [
  {
    id: "c1",
    slug: "full-stack-web-development",
    title: "Full Stack Web Development",
    category: "Web Development",
    shortDescription:
      "Master modern frontend and backend development with hands-on full-stack projects, REST APIs, and modern deployment.",
    description:
      "A comprehensive curriculum designed to take students from foundational HTML/CSS/JavaScript through React, Next.js, Node.js, and PostgreSQL. Students build end-to-end applications with secure authentication, API design, database schemas, and cloud deployment.",
    duration: "12 Weeks",
    level: "Intermediate",
    skills: ["JavaScript", "TypeScript", "React", "Next.js", "Node.js", "PostgreSQL", "Tailwind CSS", "Git"],
    tools: ["VS Code", "Git", "GitHub", "Vercel", "Postman", "Supabase"],
    trainerName: "Elyvex Technical Faculty",
    trainerRole: "Lead Web Architect",
    hasProject: true,
    hasCertificate: true,
    featured: true,
    status: "published",
    prerequisites: ["Basic computer literacy", "Curiosity to write code"],
    syllabus: [
      {
        moduleNumber: 1,
        title: "Frontend Foundations & Modern JavaScript",
        topics: ["HTML5 Semantic Architecture", "CSS Grid & Modern Flexbox", "ES6+ Modern JavaScript", "DOM & Async Programming"],
      },
      {
        moduleNumber: 2,
        title: "Modern React & Component Engineering",
        topics: ["React 19 Hooks & State", "Component Composition", "Tailwind CSS Integration", "Client-Side Routing"],
      },
      {
        moduleNumber: 3,
        title: "Full-Stack Next.js & Server Architecture",
        topics: ["App Router & Server Components", "Server Actions & API Routes", "Data Fetching Strategies", "SEO & OpenGraph"],
      },
      {
        moduleNumber: 4,
        title: "Database Modeling & Cloud Deployment",
        topics: ["PostgreSQL Schema Design", "Supabase Authentication & RLS", "Production Build & Optimization", "Vercel Deployment"],
      },
    ],
    projects: [
      {
        title: "Production SaaS Dashboard",
        description: "Full-stack application with user authentication, database CRUD, and live analytics charts.",
      },
      {
        title: "Collaborative Project Hub",
        description: "Team task tracker with role-based access control and responsive interface.",
      },
    ],
  },
  {
    id: "c2",
    slug: "python-programming",
    title: "Python Programming & Problem Solving",
    category: "Programming",
    shortDescription:
      "Build core programming fundamentals, data structures, and automation scripts through practical problem solving.",
    description:
      "Focuses on algorithmic thinking, clean code structure, data handling, and building real Python utilities. Ideal for computer science students seeking to establish a strong programming foundation before advancing to data science or backend roles.",
    duration: "8 Weeks",
    level: "Beginner",
    skills: ["Python", "Data Structures", "Algorithms", "OOP", "File Handling", "Unit Testing"],
    tools: ["Python 3", "PyCharm", "VS Code", "GitHub"],
    trainerName: "Elyvex Technical Faculty",
    trainerRole: "Senior Software Engineer",
    hasProject: true,
    hasCertificate: true,
    featured: true,
    status: "published",
    prerequisites: ["No prior programming experience required"],
    syllabus: [
      {
        moduleNumber: 1,
        title: "Python Syntax & Control Flow",
        topics: ["Variables, Data Types, and Operators", "Conditionals and Loops", "Functions & Scope"],
      },
      {
        moduleNumber: 2,
        title: "Core Data Structures & Collections",
        topics: ["Lists, Tuples, Dictionaries, Sets", "List Comprehensions", "String Manipulation & RegEx"],
      },
      {
        moduleNumber: 3,
        title: "Object-Oriented Programming (OOP)",
        topics: ["Classes & Objects", "Inheritance & Polymorphism", "Encapsulation & Clean Code"],
      },
      {
        moduleNumber: 4,
        title: "File Operations & Automation Projects",
        topics: ["JSON & CSV Processing", "Error Handling & Logging", "Building CLI Utilities"],
      },
    ],
    projects: [
      {
        title: "Automated Data Ingestion CLI",
        description: "Command-line tool that parses, validates, and reports analytics on structured data files.",
      },
    ],
  },
  {
    id: "c3",
    slug: "java-programming",
    title: "Java Programming & Software Engineering",
    category: "Programming",
    shortDescription:
      "Master object-oriented programming, design patterns, collections framework, and clean code principles in Java.",
    description:
      "Structured for students preparing for enterprise software roles and engineering problem solving. Covers Java syntax, OOP hierarchies, multithreading, exception architecture, and industry design patterns.",
    duration: "10 Weeks",
    level: "Intermediate",
    skills: ["Java", "OOP", "Data Structures", "Collections", "Design Patterns", "JUnit"],
    tools: ["IntelliJ IDEA", "Maven", "Git"],
    trainerName: "Elyvex Technical Faculty",
    trainerRole: "Enterprise Software Specialist",
    hasProject: true,
    hasCertificate: true,
    featured: false,
    status: "published",
    prerequisites: ["Basic understanding of programming concepts"],
    syllabus: [
      {
        moduleNumber: 1,
        title: "Core Java & JVM Mechanics",
        topics: ["Java Type System & JVM", "Object Lifecycle", "Access Modifiers & Encapsulation"],
      },
      {
        moduleNumber: 2,
        title: "Advanced OOP & Interfaces",
        topics: ["Abstract Classes vs Interfaces", "Polymorphism & Dynamic Dispatch", "SOLID Principles"],
      },
      {
        moduleNumber: 3,
        title: "Collections & Streams API",
        topics: ["Lists, Sets, Maps Internals", "Generics", "Java 8+ Streams & Lambdas"],
      },
      {
        moduleNumber: 4,
        title: "Multithreading & Enterprise Patterns",
        topics: ["Thread Safety & Synchronization", "Factory & Singleton Patterns", "JUnit 5 Testing"],
      },
    ],
    projects: [
      {
        title: "Banking Transaction Simulator",
        description: "Concurrent banking engine with account transactions, audit logging, and unit test suite.",
      },
    ],
  },
  {
    id: "c4",
    slug: "data-analytics",
    title: "Data Analytics & Visualization",
    category: "Data Science",
    shortDescription:
      "Analyze real-world datasets, build insightful dashboards, and make data-driven decisions using SQL and Python.",
    description:
      "Covers exploratory data analysis, SQL querying, data cleaning with Pandas, statistical fundamentals, and building visual dashboards. Students work on actual business datasets.",
    duration: "10 Weeks",
    level: "Beginner to Intermediate",
    skills: ["SQL", "Python", "Pandas", "NumPy", "Data Visualization", "Business Analytics"],
    tools: ["Jupyter Notebooks", "PostgreSQL", "Power BI / Metabase"],
    trainerName: "Elyvex Technical Faculty",
    trainerRole: "Data Analyst & Researcher",
    hasProject: true,
    hasCertificate: true,
    featured: true,
    status: "published",
    prerequisites: ["Basic mathematics and spreadsheet familiarity"],
    syllabus: [
      {
        moduleNumber: 1,
        title: "Relational Databases & SQL Queries",
        topics: ["SELECT, WHERE, JOINs, GROUP BY", "Subqueries & Window Functions", "Schema Aggregations"],
      },
      {
        moduleNumber: 2,
        title: "Python for Data Analysis (Pandas/NumPy)",
        topics: ["DataFrames & Series", "Handling Missing Data", "Data Wrangling & Merging"],
      },
      {
        moduleNumber: 3,
        title: "Data Visualization & Dashboards",
        topics: ["Chart Selection & Best Practices", "Matplotlib & Seaborn", "Interactive Dashboards"],
      },
      {
        moduleNumber: 4,
        title: "Business Case Studies & Reporting",
        topics: ["Customer Retention Analysis", "Sales Performance KPIs", "Communicating Insights"],
      },
    ],
    projects: [
      {
        title: "E-Commerce Performance Insights Report",
        description: "End-to-end data cleaning, SQL cohort analysis, and visual dashboard presentation.",
      },
    ],
  },
  {
    id: "c5",
    slug: "ai-machine-learning",
    title: "AI & Machine Learning Fundamentals",
    category: "Artificial Intelligence",
    shortDescription:
      "Understand fundamental machine learning models, supervised learning, and neural network foundations.",
    description:
      "A practical introduction to modern AI concepts without overwhelming mathematical jargon. Learn data preparation, feature engineering, regression, classification, and evaluating predictive models.",
    duration: "12 Weeks",
    level: "Intermediate",
    skills: ["Machine Learning", "Scikit-Learn", "Feature Engineering", "Model Evaluation", "Python"],
    tools: ["Google Colab", "Jupyter", "Hugging Face"],
    trainerName: "Elyvex Technical Faculty",
    trainerRole: "AI Research Fellow",
    hasProject: true,
    hasCertificate: true,
    featured: false,
    status: "published",
    prerequisites: ["Intermediate Python and basic linear algebra"],
    syllabus: [
      {
        moduleNumber: 1,
        title: "Foundations of Machine Learning",
        topics: ["Supervised vs Unsupervised Learning", "Training, Validation, and Testing", "Loss Functions"],
      },
      {
        moduleNumber: 2,
        title: "Classic Algorithms with Scikit-Learn",
        topics: ["Linear & Logistic Regression", "Decision Trees & Random Forests", "K-Means Clustering"],
      },
      {
        moduleNumber: 3,
        title: "Feature Engineering & Model Tuning",
        topics: ["Data Preprocessing & Normalization", "Hyperparameter Optimization", "Cross-Validation"],
      },
      {
        moduleNumber: 4,
        title: "Modern AI & Transformer Overview",
        topics: ["Neural Network Basics", "Pretrained Models & APIs", "Ethical AI Considerations"],
      },
    ],
    projects: [
      {
        title: "Predictive Housing Valuation Model",
        description: "Trained regression model with feature selection, cross-validation, and deployment interface.",
      },
    ],
  },
  {
    id: "c6",
    slug: "cloud-fundamentals",
    title: "Cloud Fundamentals & DevOps Basics",
    category: "Cloud & DevOps",
    shortDescription:
      "Learn cloud computing concepts, containerization with Docker, and CI/CD deployment pipelines.",
    description:
      "Equips students with the infrastructure knowledge required for modern software teams: virtualization, cloud hosting, Docker containers, environment configuration, and automated build workflows.",
    duration: "6 Weeks",
    level: "Beginner",
    skills: ["Cloud Computing", "Docker", "CI/CD", "Linux Basics", "Networking Fundamentals"],
    tools: ["Docker", "GitHub Actions", "AWS / Vercel"],
    trainerName: "Elyvex Technical Faculty",
    trainerRole: "DevOps Practitioner",
    hasProject: true,
    hasCertificate: true,
    featured: false,
    status: "published",
    prerequisites: ["Basic command line familiarity"],
    syllabus: [
      {
        moduleNumber: 1,
        title: "Linux Command Line & Networking",
        topics: ["Essential Bash Commands", "Permissions & File Systems", "HTTP, DNS, and Ports"],
      },
      {
        moduleNumber: 2,
        title: "Containerization with Docker",
        topics: ["Images & Containers", "Writing Dockerfiles", "Docker Compose Multi-Container Apps"],
      },
      {
        moduleNumber: 3,
        title: "Continuous Integration & Deployment (CI/CD)",
        topics: ["Automating Tests with GitHub Actions", "Build Artifacts", "Environment Secrets"],
      },
      {
        moduleNumber: 4,
        title: "Cloud Infrastructure Overview",
        topics: ["Compute, Storage, & Networking", "Serverless Architecture", "Monitoring & Logs"],
      },
    ],
    projects: [
      {
        title: "Automated Microservice Pipeline",
        description: "Containerized web service automatically tested and built through GitHub Actions.",
      },
    ],
  },
];

export async function getAllCourses(): Promise<Course[]> {
  if (isSupabaseConfigured() && supabase) {
    try {
      const { data, error } = await supabase
        .from("courses")
        .select("*")
        .eq("status", "published")
        .order("created_at", { ascending: false });

      if (!error && data && data.length > 0) {
        return data as Course[];
      }
    } catch {
      // Fallback seamlessly to mock data
    }
  }
  return defaultCourses;
}

export async function getFeaturedCourses(): Promise<Course[]> {
  const all = await getAllCourses();
  return all.filter((c) => c.featured);
}

export async function getCourseBySlug(slug: string): Promise<Course | null> {
  const all = await getAllCourses();
  const course = all.find((c) => c.slug === slug);
  return course || null;
}

export async function getCourseCategories(): Promise<string[]> {
  const all = await getAllCourses();
  const categories = Array.from(new Set(all.map((c) => c.category)));
  return categories;
}
