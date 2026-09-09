import type { MetadataRoute } from "next";
import { locales } from "@/lib/i18n";
import { siteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/cv"].flatMap((suffix) => locales.map((locale) => ({
    url: `${siteUrl}/${locale}${suffix}`,
    alternates: { languages: {
      "pt-BR": `${siteUrl}/pt${suffix}`, en: `${siteUrl}/en${suffix}`, "x-default": `${siteUrl}/pt${suffix}`,
    } },
  })));
}
