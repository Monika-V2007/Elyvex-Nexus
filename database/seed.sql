-- ====================================================================
-- ELYVEX NEXUS — OFFICIAL SEED DATA
-- ====================================================================

-- 1. Courses
INSERT INTO courses (slug, title, category_name, short_description, description, duration, level, skills, tools, trainer_name, trainer_role, has_project, has_certificate, featured, status)
VALUES
(
  'full-stack-web-development',
  'Full Stack Web Development',
  'Web Development',
  'Master modern frontend and backend development with hands-on full-stack projects, REST APIs, and modern deployment.',
  'A comprehensive curriculum designed to take students from foundational HTML/CSS/JavaScript through React, Next.js, Node.js, and PostgreSQL. Students build end-to-end applications with secure authentication, API design, database schemas, and cloud deployment.',
  '12 Weeks',
  'Beginner to Intermediate',
  ARRAY['JavaScript', 'TypeScript', 'React', 'Next.js', 'Node.js', 'PostgreSQL', 'Tailwind CSS', 'Git'],
  ARRAY['VS Code', 'Git', 'GitHub', 'Vercel', 'Postman', 'Supabase'],
  'Elyvex Technical Faculty',
  'Lead Web Architect',
  true,
  true,
  true,
  'published'
),
(
  'python-programming',
  'Python Programming & Problem Solving',
  'Programming',
  'Build core programming fundamentals, data structures, and automation scripts through practical problem solving.',
  'Focuses on algorithmic thinking, clean code structure, data handling, and building real Python utilities. Ideal for computer science students seeking to establish a strong programming foundation before advancing to data science or backend roles.',
  '8 Weeks',
  'Beginner',
  ARRAY['Python', 'Data Structures', 'Algorithms', 'OOP', 'File Handling', 'Unit Testing'],
  ARRAY['Python 3', 'PyCharm', 'VS Code', 'GitHub'],
  'Elyvex Technical Faculty',
  'Senior Software Engineer',
  true,
  true,
  true,
  'published'
),
(
  'java-programming',
  'Java Programming & Software Engineering',
  'Programming',
  'Master object-oriented programming, design patterns, collections framework, and clean code principles in Java.',
  'Structured for students preparing for enterprise software roles and engineering problem solving. Covers Java syntax, OOP hierarchies, multithreading, exception architecture, and industry design patterns.',
  '10 Weeks',
  'Intermediate',
  ARRAY['Java', 'OOP', 'Data Structures', 'Collections', 'Design Patterns', 'JUnit'],
  ARRAY['IntelliJ IDEA', 'Maven', 'Git'],
  'Elyvex Technical Faculty',
  'Enterprise Software Specialist',
  true,
  true,
  false,
  'published'
),
(
  'data-analytics',
  'Data Analytics & Visualization',
  'Data Science',
  'Analyze real-world datasets, build insightful dashboards, and make data-driven decisions using SQL and Python.',
  'Covers exploratory data analysis, SQL querying, data cleaning with Pandas, statistical fundamentals, and building visual dashboards. Students work on actual business datasets.',
  '10 Weeks',
  'Beginner to Intermediate',
  ARRAY['SQL', 'Python', 'Pandas', 'NumPy', 'Data Visualization', 'Business Analytics'],
  ARRAY['Jupyter Notebooks', 'PostgreSQL', 'Power BI / Metabase'],
  'Elyvex Technical Faculty',
  'Data Analyst & Researcher',
  true,
  true,
  true,
  'published'
),
(
  'ai-machine-learning',
  'AI & Machine Learning Fundamentals',
  'Artificial Intelligence',
  'Understand fundamental machine learning models, supervised learning, and neural network foundations.',
  'A practical introduction to modern AI concepts without overwhelming mathematical jargon. Learn data preparation, feature engineering, regression, classification, and evaluating predictive models.',
  '12 Weeks',
  'Intermediate',
  ARRAY['Machine Learning', 'Scikit-Learn', 'Feature Engineering', 'Model Evaluation', 'Python'],
  ARRAY['Google Colab', 'Jupyter', 'Hugging Face'],
  'Elyvex Technical Faculty',
  'AI Research Fellow',
  true,
  true,
  false,
  'published'
),
(
  'cloud-fundamentals',
  'Cloud Fundamentals & DevOps Basics',
  'Cloud & DevOps',
  'Learn cloud computing concepts, containerization with Docker, and CI/CD deployment pipelines.',
  'Equips students with the infrastructure knowledge required for modern software teams: virtualization, cloud hosting, Docker containers, environment configuration, and automated build workflows.',
  '6 Weeks',
  'Beginner to Intermediate',
  ARRAY['Cloud Computing', 'Docker', 'CI/CD', 'Linux Basics', 'Networking Fundamentals'],
  ARRAY['Docker', 'GitHub Actions', 'AWS / Vercel'],
  'Elyvex Technical Faculty',
  'DevOps Practitioner',
  true,
  true,
  false,
  'published'
);

-- 2. Team Members
INSERT INTO team_members (name, role, bio, photo_url, linkedin_url, display_order, status)
VALUES
(
  'Executive Leadership',
  'Chief Executive Officer (CEO)',
  'Directing strategic vision, ecosystem growth, and educational partnerships to bridge technical learning with real industry capability.',
  '/images/team/placeholder-ceo.jpg',
  'https://linkedin.com/company/elyvex-nexus',
  1,
  'published'
),
(
  'Technical Architecture',
  'Chief Technology Officer (CTO)',
  'Leading software systems, Project Lab infrastructure, platform scalability, and modern curriculum technology standards.',
  '/images/team/placeholder-cto.jpg',
  'https://linkedin.com/company/elyvex-nexus',
  2,
  'published'
),
(
  'Operations & Delivery',
  'Chief Operating Officer (COO)',
  'Overseeing operational excellence, course delivery schedules, student milestone success, and resource allocation.',
  '/images/team/placeholder-coo.jpg',
  'https://linkedin.com/company/elyvex-nexus',
  3,
  'published'
),
(
  'Brand & Outreach',
  'Chief Marketing Officer (CMO)',
  'Driving student engagement, institutional awareness, community growth, and authentic communication of Elyvex programs.',
  '/images/team/placeholder-cmo.jpg',
  'https://linkedin.com/company/elyvex-nexus',
  4,
  'published'
),
(
  'Strategic Growth',
  'Chief Business Officer (CBO)',
  'Developing corporate partnerships, internship pathways, college network relationships, and future ecosystem expansion.',
  '/images/team/placeholder-cbo.jpg',
  'https://linkedin.com/company/elyvex-nexus',
  5,
  'published'
);

-- 3. FAQs
INSERT INTO faqs (question, answer, category, display_order, status)
VALUES
(
  'What is Elyvex Nexus?',
  'Elyvex Nexus is an education-focused technology company designed to help students master practical technical skills, build production-grade projects, strengthen problem-solving abilities, earn recognized certificates, and prepare for future career and internship opportunities.',
  'General',
  1,
  'published'
),
(
  'Who can join Elyvex Nexus courses?',
  'Our programs are structured for college students, engineering graduates, and self-directed learners who want to move beyond theoretical exams and build tangible software capabilities.',
  'General',
  2,
  'published'
),
(
  'What courses are currently available?',
  'We offer structured curricula in Full Stack Web Development, Python Programming, Java Software Engineering, Data Analytics, AI & Machine Learning Fundamentals, and Cloud Basics.',
  'Courses',
  3,
  'published'
),
(
  'Are real projects included in the curriculum?',
  'Yes. Every course at Elyvex Nexus is project-driven. You will build end-to-end applications with version control, database schemas, and actual deployment.',
  'Courses',
  4,
  'published'
),
(
  'What is the Elyvex Project Lab?',
  'The Project Lab is an interactive environment currently under development that enables students to practice programming problems, run code, complete project milestones, and earn achievement badges.',
  'Project Lab',
  5,
  'published'
),
(
  'Will students receive certificates upon completion?',
  'Yes. Recognized certificates are awarded to learners who successfully fulfill course criteria, submit their milestone projects, and pass assessments. Certificates are publicly verifiable through our verification portal.',
  'Certificates',
  6,
  'published'
),
(
  'How does course registration work?',
  'You can browse our course listings on this official website and click "Register for Course". This routes to our dedicated registration platform where you can review upcoming batches.',
  'Courses',
  7,
  'published'
),
(
  'Are learning resources freely accessible?',
  'Yes. We maintain a curated library of open technical guides, programming notes, and architectural resources on our Resources section.',
  'General',
  8,
  'published'
),
(
  'How can I contact Elyvex Nexus for inquiries or institutional collaborations?',
  'You can reach us through the official contact form on this website or by sending an email to contact@elyvexnexus.com.',
  'Contact',
  9,
  'published'
);

-- 4. Demo Certificate for testing verification architecture
INSERT INTO certificates (certificate_id, student_name, course_title, issue_date, completion_status, verification_status, skills_acquired)
VALUES
(
  'DEMO-2026-001',
  'Verified Candidate',
  'Full Stack Web Development',
  '2026-09-15',
  'Completed',
  'Verified',
  ARRAY['React', 'Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'REST APIs', 'Git']
);
