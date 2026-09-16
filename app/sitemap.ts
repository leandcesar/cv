import type { MetadataRoute } from "next";
import { locales } from "@/lib/i18n";
import { siteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const visualPages = locales.map((locale) => ({
    url: `${siteUrl}/${locale}`,
    alternates: { languages: {
      "pt-BR": `${siteUrl}/pt`, en: `${siteUrl}/en`, "x-default": `${siteUrl}/pt`,
    } },
  }));
  const markdownPages = locales.map((locale) => ({
    url: `${siteUrl}/${locale}/md`,
    alternates: { languages: {
      "pt-BR": `${siteUrl}/pt/md`, en: `${siteUrl}/en/md`, "x-default": `${siteUrl}/pt/md`,
    } },
  }));
  return [...visualPages, ...markdownPages];
}
