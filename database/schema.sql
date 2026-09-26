-- ====================================================================
-- ELYVEX NEXUS — OFFICIAL CORPORATE DATABASE SCHEMA (PostgreSQL / Supabase)
-- ====================================================================

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 1. Site Settings (CMS / Global Key-Value & Configurations)
CREATE TABLE IF NOT EXISTS site_settings (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    setting_key VARCHAR(100) UNIQUE NOT NULL,
    setting_value JSONB NOT NULL,
    description TEXT,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 2. Pages & Layout Structure
CREATE TABLE IF NOT EXISTS pages (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    slug VARCHAR(100) UNIQUE NOT NULL,
    title VARCHAR(255) NOT NULL,
    meta_title VARCHAR(255),
    meta_description TEXT,
    status VARCHAR(20) DEFAULT 'published' CHECK (status IN ('draft', 'published', 'archived')),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS page_sections (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    page_id UUID REFERENCES pages(id) ON DELETE CASCADE,
    section_key VARCHAR(100) NOT NULL,
    section_order INT DEFAULT 0,
    content JSONB NOT NULL,
    is_active BOOLEAN DEFAULT TRUE,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 3. Course Categories & Courses
CREATE TABLE IF NOT EXISTS course_categories (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    slug VARCHAR(100) UNIQUE NOT NULL,
    name VARCHAR(150) NOT NULL,
    description TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS courses (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    slug VARCHAR(150) UNIQUE NOT NULL,
    title VARCHAR(255) NOT NULL,
    category_id UUID REFERENCES course_categories(id) ON DELETE SET NULL,
    category_name VARCHAR(100) NOT NULL,
    short_description TEXT NOT NULL,
    description TEXT NOT NULL,
    duration VARCHAR(50) NOT NULL,
    level VARCHAR(50) NOT NULL CHECK (level IN ('Beginner', 'Intermediate', 'Advanced', 'All Levels')),
    skills TEXT[] DEFAULT '{}',
    tools TEXT[] DEFAULT '{}',
    trainer_name VARCHAR(150) NOT NULL,
    trainer_role VARCHAR(150),
    has_project BOOLEAN DEFAULT TRUE,
    has_certificate BOOLEAN DEFAULT TRUE,
    syllabus JSONB DEFAULT '[]',
    projects JSONB DEFAULT '[]',
    prerequisites TEXT[] DEFAULT '{}',
    featured BOOLEAN DEFAULT FALSE,
    status VARCHAR(20) DEFAULT 'published' CHECK (status IN ('draft', 'published', 'archived')),
    published_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 4. Resource Categories & SEO Resources
CREATE TABLE IF NOT EXISTS resource_categories (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    slug VARCHAR(100) UNIQUE NOT NULL,
    name VARCHAR(150) NOT NULL,
    description TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS resources (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    slug VARCHAR(150) UNIQUE NOT NULL,
    title VARCHAR(255) NOT NULL,
    category_id UUID REFERENCES resource_categories(id) ON DELETE SET NULL,
    category_name VARCHAR(100) NOT NULL,
    description TEXT NOT NULL,
    content TEXT NOT NULL,
    language VARCHAR(50) DEFAULT 'English',
    reading_time VARCHAR(30) DEFAULT '5 min read',
    tags TEXT[] DEFAULT '{}',
    author VARCHAR(150) DEFAULT 'Elyvex Technical Team',
    status VARCHAR(20) DEFAULT 'published' CHECK (status IN ('draft', 'published', 'archived')),
    published_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 5. Team Members
CREATE TABLE IF NOT EXISTS team_members (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(150) NOT NULL,
    role VARCHAR(150) NOT NULL,
    bio TEXT NOT NULL,
    photo_url TEXT,
    linkedin_url TEXT,
    twitter_url TEXT,
    github_url TEXT,
    display_order INT DEFAULT 0,
    status VARCHAR(20) DEFAULT 'published' CHECK (status IN ('draft', 'published', 'archived')),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 6. FAQs
CREATE TABLE IF NOT EXISTS faqs (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    question TEXT NOT NULL,
    answer TEXT NOT NULL,
    category VARCHAR(50) DEFAULT 'General' CHECK (category IN ('General', 'Courses', 'Project Lab', 'Certificates', 'Contact')),
    display_order INT DEFAULT 0,
    status VARCHAR(20) DEFAULT 'published' CHECK (status IN ('draft', 'published', 'archived')),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 7. Announcements
CREATE TABLE IF NOT EXISTS announcements (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    slug VARCHAR(150) UNIQUE NOT NULL,
    title VARCHAR(255) NOT NULL,
    summary TEXT NOT NULL,
    content TEXT NOT NULL,
    image_url TEXT,
    category VARCHAR(100) DEFAULT 'Update',
    featured BOOLEAN DEFAULT FALSE,
    status VARCHAR(20) DEFAULT 'published' CHECK (status IN ('draft', 'published', 'archived')),
    published_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 8. Contact Messages (Form Submissions)
CREATE TABLE IF NOT EXISTS contact_messages (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(150) NOT NULL,
    email VARCHAR(255) NOT NULL,
    subject VARCHAR(255) NOT NULL,
    message TEXT NOT NULL,
    is_read BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 9. Future Integration: Certificates
CREATE TABLE IF NOT EXISTS certificates (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    certificate_id VARCHAR(100) UNIQUE NOT NULL,
    student_name VARCHAR(150) NOT NULL,
    course_title VARCHAR(255) NOT NULL,
    issue_date DATE NOT NULL,
    completion_status VARCHAR(50) DEFAULT 'Completed',
    verification_status VARCHAR(50) DEFAULT 'Verified',
    skills_acquired TEXT[] DEFAULT '{}',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- INDEXES FOR HIGH-PERFORMANCE SEARCH & RETRIEVAL
CREATE INDEX IF NOT EXISTS idx_courses_slug ON courses(slug);
CREATE INDEX IF NOT EXISTS idx_courses_status ON courses(status);
CREATE INDEX IF NOT EXISTS idx_courses_category ON courses(category_name);
CREATE INDEX IF NOT EXISTS idx_resources_slug ON resources(slug);
CREATE INDEX IF NOT EXISTS idx_resources_status ON resources(status);
CREATE INDEX IF NOT EXISTS idx_announcements_slug ON announcements(slug);
CREATE INDEX IF NOT EXISTS idx_announcements_status ON announcements(status);
CREATE INDEX IF NOT EXISTS idx_faqs_status ON faqs(status);
CREATE INDEX IF NOT EXISTS idx_certificates_cert_id ON certificates(certificate_id);

-- ROW LEVEL SECURITY (RLS) POLICIES
ALTER TABLE courses ENABLE ROW LEVEL SECURITY;
ALTER TABLE resources ENABLE ROW LEVEL SECURITY;
ALTER TABLE team_members ENABLE ROW LEVEL SECURITY;
ALTER TABLE faqs ENABLE ROW LEVEL SECURITY;
ALTER TABLE announcements ENABLE ROW LEVEL SECURITY;
ALTER TABLE certificates ENABLE ROW LEVEL SECURITY;

-- Allow public read access to published items
CREATE POLICY "Public can view published courses" ON courses FOR SELECT USING (status = 'published');
CREATE POLICY "Public can view published resources" ON resources FOR SELECT USING (status = 'published');
CREATE POLICY "Public can view published team members" ON team_members FOR SELECT USING (status = 'published');
CREATE POLICY "Public can view published faqs" ON faqs FOR SELECT USING (status = 'published');
CREATE POLICY "Public can view published announcements" ON announcements FOR SELECT USING (status = 'published');
CREATE POLICY "Public can verify valid certificates" ON certificates FOR SELECT USING (true);
