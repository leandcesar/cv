import type { MetadataRoute } from "next";
import { locales } from "@/lib/i18n";
import { siteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return locales.map((locale) => ({
    url: `${siteUrl}/${locale}`,
    alternates: { languages: {
      "pt-BR": `${siteUrl}/pt`, en: `${siteUrl}/en`, "x-default": `${siteUrl}/pt`,
    } },
  }));
}
