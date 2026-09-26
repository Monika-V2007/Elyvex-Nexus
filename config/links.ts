export const externalLinks = {
  // Configurable external platform URLs
  courseRegistration:
    process.env.NEXT_PUBLIC_COURSE_REGISTRATION_URL || "/courses",
  projectLab: process.env.NEXT_PUBLIC_PROJECT_LAB_URL || "/project-lab",
  adminPortal: "https://admin.elyvexnexus.com", // Future Admin Portal

  // Social Links (using placeholders where official URLs are not yet active)
  social: {
    linkedin:
      process.env.NEXT_PUBLIC_LINKEDIN_URL ||
      "https://linkedin.com/company/elyvex-nexus",
    youtube:
      process.env.NEXT_PUBLIC_YOUTUBE_URL || "https://youtube.com/@elyvexnexus",
    instagram:
      process.env.NEXT_PUBLIC_INSTAGRAM_URL ||
      "https://instagram.com/elyvexnexus",
    facebook:
      process.env.NEXT_PUBLIC_FACEBOOK_URL ||
      "https://facebook.com/elyvexnexus",
    github: "https://github.com/elyvex-nexus",
  },
};
