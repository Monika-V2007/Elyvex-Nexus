"use client";

import React, { useState, useMemo } from "react";
import { Course } from "@/types";
import { CourseCard } from "./CourseCard";
import { Search, Filter, SlidersHorizontal } from "lucide-react";

interface CourseCatalogProps {
  courses: Course[];
  locale: string;
  dict: any;
}

export function CourseCatalog({ courses, locale, dict }: CourseCatalogProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [selectedLevel, setSelectedLevel] = useState<string>("All");

  const categories = useMemo(() => {
    const cats = Array.from(new Set(courses.map((c) => c.category)));
    return ["All", ...cats];
  }, [courses]);

  const levels = ["All", "Beginner", "Intermediate", "All Levels"];

  const filteredCourses = useMemo(() => {
    return courses.filter((course) => {
      const matchesSearch =
        course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.shortDescription.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.skills.some((s) =>
          s.toLowerCase().includes(searchTerm.toLowerCase())
        );

      const matchesCategory =
        selectedCategory === "All" || course.category === selectedCategory;

      const matchesLevel =
        selectedLevel === "All" || course.level.includes(selectedLevel);

      return matchesSearch && matchesCategory && matchesLevel;
    });
  }, [courses, searchTerm, selectedCategory, selectedLevel]);

  return (
    <div className="space-y-8">
      {/* Search and Filter Control Bar */}
      <div className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-[#0a1024] border border-slate-200/90 dark:border-white/10 shadow-xs flex flex-col md:flex-row gap-4 items-center justify-between">
        {/* Search input */}
        <div className="relative w-full md:w-80">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder={
              dict?.courses?.searchPlaceholder ||
              "Search by course title, skill, or tool..."
            }
            className="w-full pl-10 pr-4 py-2 text-xs sm:text-sm rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-sky-500 placeholder:text-slate-400"
          />
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
          {/* Category Dropdown */}
          <div className="flex items-center gap-1.5 text-xs text-slate-500">
            <Filter className="w-3.5 h-3.5" />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-3 py-2 rounded-xl text-xs font-medium border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-sky-500"
            >
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat === "All" ? "All Categories" : cat}
                </option>
              ))}
            </select>
          </div>

          {/* Level Dropdown */}
          <div className="flex items-center gap-1.5 text-xs text-slate-500">
            <SlidersHorizontal className="w-3.5 h-3.5" />
            <select
              value={selectedLevel}
              onChange={(e) => setSelectedLevel(e.target.value)}
              className="px-3 py-2 rounded-xl text-xs font-medium border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-sky-500"
            >
              {levels.map((lvl) => (
                <option key={lvl} value={lvl}>
                  {lvl === "All" ? "All Levels" : lvl}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Results Count */}
      <div className="text-xs text-slate-500 font-medium">
        Showing {filteredCourses.length} {filteredCourses.length === 1 ? "course" : "courses"}
      </div>

      {/* Courses Grid */}
      {filteredCourses.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredCourses.map((course) => (
            <CourseCard
              key={course.id}
              course={course}
              locale={locale}
              viewCourseText={dict?.courses?.viewCourse || "View Course"}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 p-8 rounded-2xl bg-white dark:bg-[#0a1024] border border-slate-200/90 dark:border-white/10">
          <p className="text-base font-semibold text-slate-700 dark:text-slate-300">
            No courses found matching your criteria.
          </p>
          <p className="text-xs text-slate-500 mt-1">
            Try adjusting your search query or reset the category filter.
          </p>
          <button
            onClick={() => {
              setSearchTerm("");
              setSelectedCategory("All");
              setSelectedLevel("All");
            }}
            className="mt-4 px-4 py-2 text-xs font-semibold text-sky-600 dark:text-sky-400 hover:underline"
          >
            Clear Filters
          </button>
        </div>
      )}
    </div>
  );
}
