import "server-only";
import type { Locale } from "@/lib/i18n";

const dictionaries = {
  pt: () => import("./pt").then((module) => module.pt),
  en: () => import("./en").then((module) => module.en),
};

export function getContent(locale: Locale) {
  return dictionaries[locale]();
}
