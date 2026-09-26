"use client";

import React, { useState } from "react";
import { FAQItem } from "@/types";
import { ChevronDown, HelpCircle } from "lucide-react";

interface FAQAccordionProps {
  items: FAQItem[];
}

export function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First one open by default

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4 max-w-3xl mx-auto">
      {items.map((item, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div
            key={item.id}
            className="rounded-2xl border border-slate-200/90 dark:border-white/10 bg-white dark:bg-[#0a1024] overflow-hidden transition-all duration-200 shadow-xs"
          >
            <button
              type="button"
              onClick={() => toggle(idx)}
              aria-expanded={isOpen}
              className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
            >
              <span className="text-base sm:text-lg font-bold text-slate-900 dark:text-white flex items-center gap-3">
                <HelpCircle className="w-5 h-5 text-sky-500 shrink-0" />
                <span>{item.question}</span>
              </span>
              <ChevronDown
                className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                  isOpen ? "rotate-180 text-sky-500" : ""
                }`}
              />
            </button>

            {isOpen && (
              <div className="px-5 pb-6 sm:px-6 sm:pb-6 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed pl-12 border-t border-slate-100 dark:border-white/5 pt-4">
                {item.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
