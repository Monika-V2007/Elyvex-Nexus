import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(dateString: string, locale: string = "en"): string {
  try {
    const date = new Date(dateString);
    return date.toLocaleDateString(locale === "ta" ? "ta-IN" : locale === "hi" ? "hi-IN" : "en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  } catch {
    return dateString;
  }
}
