import React from "react";
import { Metadata } from "next";
import { getDictionary } from "@/lib/i18n";
import { getTeamMembers } from "@/lib/services/team.service";
import { SectionHeading } from "@/components/common/SectionHeading";
import { LinkedInIcon } from "@/components/common/SocialIcons";
import { User } from "lucide-react";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Team | Elyvex Nexus",
    description:
      "Meet the founding team and technical leadership behind Elyvex Nexus.",
  };
}

export default async function TeamPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = getDictionary(locale);
  const team = await getTeamMembers();

  return (
    <div className="py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <SectionHeading
          badge={dict?.team?.badge || "Leadership & Vision"}
          title={dict?.team?.title || "Our Founding Team"}
          subtitle={
            dict?.team?.subtitle ||
            "Passionate technologists, educators, and leaders dedicated to building practical EdTech infrastructure."
          }
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member) => (
            <div
              key={member.id}
              className="p-7 rounded-3xl bg-white dark:bg-[#0a1024] border border-slate-200/90 dark:border-white/10 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Visual Avatar Placeholder with clean typography */}
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-sky-600 via-indigo-600 to-cyan-500 p-[1.5px]">
                  <div className="w-full h-full bg-slate-900 rounded-[14px] flex items-center justify-center text-sky-400">
                    <User className="w-8 h-8" />
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    {member.name}
                  </h3>
                  <p className="text-xs font-semibold text-sky-600 dark:text-sky-400 mt-0.5">
                    {member.role}
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                  {member.bio}
                </p>
              </div>

              {/* Social Link */}
              {member.linkedinUrl && (
                <div className="pt-6 mt-6 border-t border-slate-100 dark:border-white/5 flex items-center justify-between">
                  <a
                    href={member.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 dark:text-slate-400 hover:text-sky-600 dark:hover:text-sky-400 transition-colors"
                  >
                    <LinkedInIcon size={16} className="text-sky-500" />
                    <span>Connect on LinkedIn</span>
                  </a>
                  <span className="text-[10px] font-mono text-slate-400">
                    Elyvex Nexus
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
