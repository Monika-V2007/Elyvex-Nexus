export interface NavItem {
  titleKey: string;
  href: string;
  external?: boolean;
}

export const mainNav: NavItem[] = [
  { titleKey: "nav.home", href: "/" },
  { titleKey: "nav.about", href: "/about" },
  { titleKey: "nav.courses", href: "/courses" },
  { titleKey: "nav.resources", href: "/resources" },
  { titleKey: "nav.projectLab", href: "/project-lab" },
  { titleKey: "nav.whyUs", href: "/#why-elyvex" },
  { titleKey: "nav.team", href: "/team" },
  { titleKey: "nav.contact", href: "/contact" },
];

export const footerNav = {
  company: [
    { titleKey: "nav.about", href: "/about" },
    { titleKey: "nav.team", href: "/team" },
    { titleKey: "nav.whyUs", href: "/#why-elyvex" },
    { titleKey: "nav.announcements", href: "/announcements" },
    { titleKey: "nav.contact", href: "/contact" },
  ],
  learning: [
    { titleKey: "nav.courses", href: "/courses" },
    { titleKey: "nav.resources", href: "/resources" },
    { titleKey: "nav.projectLab", href: "/project-lab" },
    { titleKey: "nav.verifyCert", href: "/verify/DEMO-2026-001" },
  ],
  support: [
    { titleKey: "nav.faq", href: "/faq" },
    { titleKey: "nav.contact", href: "/contact" },
    { titleKey: "legal.privacy", href: "/privacy-policy" },
    { titleKey: "legal.terms", href: "/terms-and-conditions" },
    { titleKey: "legal.cookie", href: "/cookie-policy" },
  ],
};
