import React from "react";
import { Metadata } from "next";
import { getDictionary } from "@/lib/i18n";
import { siteConfig } from "@/config/site";
import { externalLinks } from "@/config/links";
import { SectionHeading } from "@/components/common/SectionHeading";
import { ContactForm } from "@/components/contact/ContactForm";
import {
  LinkedInIcon,
  YouTubeIcon,
  InstagramIcon,
  FacebookIcon,
} from "@/components/common/SocialIcons";
import { Mail, MapPin, ShieldCheck } from "lucide-react";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Contact Us | Elyvex Nexus",
    description:
      "Get in touch with the Elyvex Nexus team for admissions, courses, partnership opportunities, or general technical inquiries.",
  };
}

export default async function ContactPage({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ inquiry?: string }>;
}) {
  const { locale } = await params;
  const { inquiry } = await searchParams;
  const dict = getDictionary(locale);

  return (
    <div className="py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <SectionHeading
          badge={dict?.contact?.badge || "Get in Touch"}
          title={dict?.contact?.title || "Contact Elyvex Nexus"}
          subtitle={
            dict?.contact?.subtitle ||
            "Have questions about our programs, partnerships, or upcoming courses? Reach out to our team."
          }
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Form */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#0a1024] border border-slate-200/90 dark:border-white/10 shadow-xl">
            <ContactForm
              dict={dict}
              defaultSubject={inquiry ? `Inquiry regarding: ${inquiry}` : ""}
            />
          </div>

          {/* Right Column: Contact Information & Placeholders */}
          <div className="lg:col-span-5 space-y-6">
            {/* Email Card */}
            <div className="p-6 rounded-2xl bg-white dark:bg-[#0a1024] border border-slate-200/90 dark:border-white/10 space-y-2">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-sky-50 dark:bg-sky-950/60 text-sky-500">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                    {dict?.contact?.info?.emailTitle || "Official Email"}
                  </h3>
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="text-xs sm:text-sm text-sky-600 dark:text-sky-400 hover:underline font-mono"
                  >
                    {siteConfig.contact.email}
                  </a>
                </div>
              </div>
            </div>

            {/* Location Card */}
            <div className="p-6 rounded-2xl bg-white dark:bg-[#0a1024] border border-slate-200/90 dark:border-white/10 space-y-2">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-500">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                    {dict?.contact?.info?.locationTitle || "Location"}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                    {siteConfig.contact.location}
                  </p>
                </div>
              </div>
            </div>

            {/* Social Channels */}
            <div className="p-6 rounded-2xl bg-white dark:bg-[#0a1024] border border-slate-200/90 dark:border-white/10 space-y-4">
              <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                {dict?.contact?.info?.socialTitle || "Connect With Us"}
              </h3>
              <div className="grid grid-cols-2 gap-3">
                <a
                  href={externalLinks.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900 hover:bg-sky-50 dark:hover:bg-sky-950/50 text-slate-700 dark:text-slate-200 hover:text-sky-600 transition-colors flex items-center gap-2.5 text-xs font-semibold"
                >
                  <LinkedInIcon size={16} />
                  <span>LinkedIn</span>
                </a>
                <a
                  href={externalLinks.social.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900 hover:bg-red-50 dark:hover:bg-red-950/50 text-slate-700 dark:text-slate-200 hover:text-red-500 transition-colors flex items-center gap-2.5 text-xs font-semibold"
                >
                  <YouTubeIcon size={16} />
                  <span>YouTube</span>
                </a>
                <a
                  href={externalLinks.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900 hover:bg-pink-50 dark:hover:bg-pink-950/50 text-slate-700 dark:text-slate-200 hover:text-pink-500 transition-colors flex items-center gap-2.5 text-xs font-semibold"
                >
                  <InstagramIcon size={16} />
                  <span>Instagram</span>
                </a>
                <a
                  href={externalLinks.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900 hover:bg-blue-50 dark:hover:bg-blue-950/50 text-slate-700 dark:text-slate-200 hover:text-blue-500 transition-colors flex items-center gap-2.5 text-xs font-semibold"
                >
                  <FacebookIcon size={16} />
                  <span>Facebook</span>
                </a>
              </div>
            </div>

            {/* Note about official placeholders */}
            <div className="p-4 rounded-xl bg-slate-100 dark:bg-slate-900/60 border border-slate-200/80 dark:border-white/5 text-[11px] text-slate-500 leading-relaxed flex items-start gap-2">
              <ShieldCheck className="w-4 h-4 text-sky-500 shrink-0 mt-0.5" />
              <span>
                Elyvex Nexus respects user privacy. Inquiries submitted via this form are routed to official admissions and administrative personnel.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
