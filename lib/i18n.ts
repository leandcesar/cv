export const locales = ["pt", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "pt";
export const languageTags = { pt: "pt-BR", en: "en" } as const;

export function isLocale(value: string): value is Locale {
  return locales.some((locale) => locale === value);
}
