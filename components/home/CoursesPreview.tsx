import React from "react";
import Link from "next/link";
import { Course } from "@/types";
import { SectionHeading } from "../common/SectionHeading";
import { CourseCard } from "../courses/CourseCard";
import { Button } from "../common/Button";
import { ArrowRight } from "lucide-react";

interface CoursesPreviewProps {
  courses: Course[];
  locale: string;
  dict: any;
}

export function CoursesPreview({ courses, locale, dict }: CoursesPreviewProps) {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <SectionHeading
            badge={dict?.courses?.badge || "Structured Programs"}
            title={dict?.courses?.title || "Featured Learning Programs"}
            subtitle={
              dict?.courses?.subtitle ||
              "Carefully designed courses focused on practical software craftsmanship, modern engineering, and problem solving."
            }
            align="left"
            className="mb-0 max-w-2xl"
          />

          <Button
            href={`/${locale}/courses`}
            variant="outline"
            size="md"
            icon={<ArrowRight className="w-4 h-4" />}
            className="self-start md:self-auto shrink-0 font-semibold"
          >
            {dict?.courses?.viewAll || "View All Courses"}
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {courses.slice(0, 3).map((course) => (
            <CourseCard
              key={course.id}
              course={course}
              locale={locale}
              viewCourseText={dict?.courses?.viewCourse || "View Course"}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
