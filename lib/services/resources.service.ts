import { Resource } from "@/types";
import { supabase, isSupabaseConfigured } from "../db/supabase";

const defaultResources: Resource[] = [
  {
    id: "r1",
    slug: "python-programming",
    title: "Essential Python Programming Principles & Data Structures",
    category: "Python",
    description:
      "A structured guide to Python syntax, idiomatic patterns, memory model, and choosing the right collection type.",
    readingTime: "7 min read",
    language: "English",
    publishedDate: "2026-08-10",
    status: "published",
    tags: ["Python", "Algorithms", "Clean Code"],
    author: "Elyvex Engineering Team",
    content: `## Why Python for Engineering Foundations

Python is revered for its readable syntax, but mastering production Python requires understanding its underlying runtime, data structures, and idiomatic conventions.

### 1. Variables and Dynamic Typing
Python variables are references to objects stored in memory. Understanding mutable versus immutable types prevents common bugs:
- **Immutable Types**: \`int\`, \`float\`, \`str\`, \`tuple\`, \`frozenset\`
- **Mutable Types**: \`list\`, \`dict\`, \`set\`

\`\`\`python
# Idiomatic list comprehension
squares = [x**2 for x in range(10) if x % 2 == 0]
print(squares) # [0, 4, 16, 36, 64]
\`\`\`

### 2. Time Complexity of Core Collections
Choosing the right structure drastically impacts performance:
- **List Lookup**: $O(n)$
- **Set Lookup**: $O(1)$ on average via hash tables
- **Dict Key Lookup**: $O(1)$ on average

Always prefer sets when checking membership repeatedly across large datasets.

### 3. Object-Oriented Principles
Use classes to bundle data and behavior cleanly:
\`\`\`python
class StudentTask:
    def __init__(self, task_id: str, title: str):
        self.task_id = task_id
        self.title = title
        self.completed = False

    def mark_done(self) -> None:
        self.completed = True
\`\`\`

Practical application and building real utilities reinforces these concepts far better than passive reading.`,
  },
  {
    id: "r2",
    slug: "javascript-arrays",
    title: "Mastering Modern JavaScript Arrays & Functional Methods",
    category: "Web Development",
    description:
      "Deep dive into JavaScript array transformation methods (map, filter, reduce), mutation rules, and performance implications.",
    readingTime: "6 min read",
    language: "English",
    publishedDate: "2026-08-18",
    status: "published",
    tags: ["JavaScript", "Frontend", "TypeScript"],
    author: "Elyvex Engineering Team",
    content: `## Modern JavaScript Array Manipulation

In modern React and Next.js applications, immutability is essential. Understanding non-mutating array methods enables predictable state management.

### 1. Transformation with \`.map()\`
The \`.map()\` method returns a new array without altering the original:

\`\`\`javascript
const courses = [
  { id: 1, title: 'Full Stack', active: true },
  { id: 2, title: 'Python', active: false },
];

const titles = courses.map(c => c.title);
\`\`\`

### 2. Filtering with \`.filter()\`
Filter elements based on boolean predicates:

\`\`\`javascript
const activeCourses = courses.filter(c => c.active);
\`\`\`

### 3. Powerful Reductions with \`.reduce()\`
Reduce accumulates an array into a single value, object, or map:

\`\`\`javascript
const counts = courses.reduce((acc, curr) => {
  acc[curr.active ? 'active' : 'inactive'] += 1;
  return acc;
}, { active: 0, inactive: 0 });
\`\`\`

### Mutation Traps to Avoid
Methods like \`.sort()\`, \`.reverse()\`, and \`.splice()\` mutate the array in-place. In modern environments, use \`.toSorted()\`, \`.toReversed()\`, and \`.toSpliced()\` for pure immutability.`,
  },
  {
    id: "r3",
    slug: "web-development-basics",
    title: "Modern Web Architecture: From Client Request to Database",
    category: "Architecture",
    description:
      "An architectural walkthrough explaining DNS resolution, HTTP/HTTPS lifecycle, Server Components, and database query optimization.",
    readingTime: "8 min read",
    language: "English",
    publishedDate: "2026-08-25",
    status: "published",
    tags: ["Web Architecture", "Next.js", "Networking"],
    author: "Elyvex Engineering Team",
    content: `## The Anatomy of a Modern Web Request

When a user visits a website, what happens behind the scenes? Understanding the entire pipeline distinguishes a junior developer from a professional software engineer.

### 1. DNS Resolution & TLS Handshake
1. The browser checks local DNS cache, then queries authoritative name servers.
2. An IP address is returned.
3. TCP 3-way handshake establishes the connection.
4. TLS negotiation encrypts the traffic using modern cipher suites.

### 2. Server Rendering vs Client Rendering
With frameworks like Next.js App Router:
- **Server Components (RSC)**: Render on the server, stream lightweight HTML + RSC payload to the client, requiring zero client-side JavaScript for static sections.
- **Client Components**: Hydrate on the browser to provide rich interactivity, form handling, and motion animations.

### 3. Database Layer & Connection Pooling
In serverless and edge environments, direct database connections can exhaust pool limits. Using connection poolers like Supabase Supavisor ensures resilient scalability during traffic spikes.`,
  },
];

export async function getAllResources(): Promise<Resource[]> {
  if (isSupabaseConfigured() && supabase) {
    try {
      const { data, error } = await supabase
        .from("resources")
        .select("*")
        .eq("status", "published")
        .order("created_at", { ascending: false });

      if (!error && data && data.length > 0) {
        return data as Resource[];
      }
    } catch {
      // Fallback seamlessly
    }
  }
  return defaultResources;
}

export async function getResourceBySlug(slug: string): Promise<Resource | null> {
  const all = await getAllResources();
  return all.find((r) => r.slug === slug) || null;
}
