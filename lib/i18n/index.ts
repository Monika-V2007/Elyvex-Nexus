import { SupportedLocale } from "@/types";
import en from "@/messages/en.json";
import ta from "@/messages/ta.json";
import hi from "@/messages/hi.json";

export const defaultLocale: SupportedLocale = "en";
export const supportedLocales: SupportedLocale[] = ["en", "ta", "hi"];

export const localeNames: Record<
  SupportedLocale,
  { label: string; nativeName: string; short: string }
> = {
  en: { label: "English", nativeName: "English", short: "EN" },
  ta: { label: "Tamil", nativeName: "தமிழ்", short: "தமிழ்" },
  hi: { label: "Hindi", nativeName: "हिन्दी", short: "हिन्दी" },
};

const dictionaries: Record<SupportedLocale, typeof en> = {
  en,
  ta,
  hi,
};

export function getDictionary(locale: string) {
  const validLocale = (
    supportedLocales.includes(locale as SupportedLocale)
      ? locale
      : defaultLocale
  ) as SupportedLocale;

  return dictionaries[validLocale] || dictionaries.en;
}
