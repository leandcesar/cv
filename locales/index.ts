import "server-only";
import type { Locale } from "@/lib/i18n";
import type { LocalizedContent } from "@/types/content";

const dictionaries = {
  pt: () => import("./pt").then((module) => module.pt),
  en: () => import("./en").then((module) => module.en),
};

export function getContent(locale: Locale): Promise<LocalizedContent> {
  return dictionaries[locale]();
}
