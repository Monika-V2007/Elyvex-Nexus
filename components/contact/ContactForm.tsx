"use client";

import React, { useState } from "react";
import { contactFormSchema } from "@/lib/validation/contact";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

interface ContactFormProps {
  dict: any;
  defaultSubject?: string;
}

export function ContactForm({ dict, defaultSubject = "" }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: defaultSubject,
    message: "",
    honeypot: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );
  const [feedbackMessage, setFeedbackMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (errors[e.target.name]) {
      setErrors((prev) => ({ ...prev, [e.target.name]: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    // 1. Client-side Zod validation
    const result = contactFormSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.issues.forEach((issue) => {
        if (issue.path[0]) {
          fieldErrors[issue.path[0].toString()] = issue.message;
        }
      });
      setErrors(fieldErrors);
      return;
    }

    setStatus("loading");
    setFeedbackMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to submit message.");
      }

      setStatus("success");
      setFeedbackMessage(
        dict?.contact?.form?.success ||
          "Thank you! Your message has been received. Our team will get back to you shortly."
      );
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
        honeypot: "",
      });
    } catch (err: any) {
      setStatus("error");
      setFeedbackMessage(
        err.message ||
          dict?.contact?.form?.error ||
          "Failed to send message. Please check the fields or try again later."
      );
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Anti-spam Honeypot Field (Hidden) */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="website-hp">Leave this field blank</label>
        <input
          id="website-hp"
          type="text"
          name="honeypot"
          value={formData.honeypot}
          onChange={handleChange}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      {/* Name Input */}
      <div>
        <label
          htmlFor="name"
          className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5"
        >
          {dict?.contact?.form?.name || "Full Name"} *
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          value={formData.name}
          onChange={handleChange}
          placeholder={dict?.contact?.form?.namePlaceholder || "e.g., Alex Johnson"}
          className={`w-full px-4 py-2.5 text-xs sm:text-sm rounded-xl border bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-sky-500 transition-colors ${
            errors.name
              ? "border-rose-500 focus:ring-rose-500"
              : "border-slate-200 dark:border-slate-800"
          }`}
        />
        {errors.name && (
          <p className="text-[11px] text-rose-500 mt-1 font-medium">{errors.name}</p>
        )}
      </div>

      {/* Email Input */}
      <div>
        <label
          htmlFor="email"
          className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5"
        >
          {dict?.contact?.form?.email || "Email Address"} *
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          value={formData.email}
          onChange={handleChange}
          placeholder={dict?.contact?.form?.emailPlaceholder || "alex@example.com"}
          className={`w-full px-4 py-2.5 text-xs sm:text-sm rounded-xl border bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-sky-500 transition-colors ${
            errors.email
              ? "border-rose-500 focus:ring-rose-500"
              : "border-slate-200 dark:border-slate-800"
          }`}
        />
        {errors.email && (
          <p className="text-[11px] text-rose-500 mt-1 font-medium">{errors.email}</p>
        )}
      </div>

      {/* Subject Input */}
      <div>
        <label
          htmlFor="subject"
          className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5"
        >
          {dict?.contact?.form?.subject || "Subject"} *
        </label>
        <input
          id="subject"
          name="subject"
          type="text"
          required
          value={formData.subject}
          onChange={handleChange}
          placeholder={
            dict?.contact?.form?.subjectPlaceholder || "Inquiry regarding courses..."
          }
          className={`w-full px-4 py-2.5 text-xs sm:text-sm rounded-xl border bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-sky-500 transition-colors ${
            errors.subject
              ? "border-rose-500 focus:ring-rose-500"
              : "border-slate-200 dark:border-slate-800"
          }`}
        />
        {errors.subject && (
          <p className="text-[11px] text-rose-500 mt-1 font-medium">{errors.subject}</p>
        )}
      </div>

      {/* Message Textarea */}
      <div>
        <label
          htmlFor="message"
          className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5"
        >
          {dict?.contact?.form?.message || "Message"} *
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          value={formData.message}
          onChange={handleChange}
          placeholder={
            dict?.contact?.form?.messagePlaceholder || "Tell us how we can help you..."
          }
          className={`w-full px-4 py-2.5 text-xs sm:text-sm rounded-xl border bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-sky-500 transition-colors ${
            errors.message
              ? "border-rose-500 focus:ring-rose-500"
              : "border-slate-200 dark:border-slate-800"
          }`}
        />
        {errors.message && (
          <p className="text-[11px] text-rose-500 mt-1 font-medium">{errors.message}</p>
        )}
      </div>

      {/* Success / Error notification */}
      {status === "success" && (
        <div className="p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-800 text-xs sm:text-sm text-emerald-800 dark:text-emerald-200 flex items-center gap-2.5">
          <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
          <span>{feedbackMessage}</span>
        </div>
      )}

      {status === "error" && (
        <div className="p-4 rounded-xl bg-rose-50 dark:bg-rose-950/50 border border-rose-200 dark:border-rose-800 text-xs sm:text-sm text-rose-800 dark:text-rose-200 flex items-center gap-2.5">
          <AlertCircle className="w-5 h-5 text-rose-500 shrink-0" />
          <span>{feedbackMessage}</span>
        </div>
      )}

      {/* Submit Button */}
      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-semibold text-xs sm:text-sm bg-gradient-to-r from-sky-600 to-indigo-600 hover:from-sky-500 hover:to-indigo-500 text-white shadow-md shadow-sky-600/20 disabled:opacity-50 transition-all cursor-pointer"
      >
        {status === "loading" ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            <span>{dict?.contact?.form?.submitting || "Sending Message..."}</span>
          </>
        ) : (
          <>
            <span>{dict?.contact?.form?.submit || "Send Message"}</span>
            <Send className="w-4 h-4" />
          </>
        )}
      </button>
    </form>
  );
}
