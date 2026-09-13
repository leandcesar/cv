import type { Metadata } from "next";
import { languageTags, type Locale } from "@/lib/i18n";
import { getContent } from "@/locales";

// This is the published canonical origin, shared by metadata, sitemap and JSON-LD.
export const siteUrl = "https://leandcesar.vercel.app";
export const personName = "Leandro César";

export async function pageMetadata(locale: Locale): Promise<Metadata> {
  const { ui } = await getContent(locale);
  const path = `/${locale}`;
  const title = `${personName} — ${locale === "pt" ? "Tech Lead e Engenheiro" : "Tech Lead & Engineer"}`;
  const description = locale === "pt"
    ? `Conheça Leandro César, Líder Técnico na Cloudia. Experiência em backend, inteligência artificial, automações e AWS. Projetos, formação e contato.`
    : `Meet Leandro César, Tech Lead at Cloudia. Experience in backend development, AI, automation and AWS. Projects, education and contact.`;
  const image = { url: `${siteUrl}/${locale}/opengraph-image`, width: 1200, height: 630, alt: `${personName} — ${ui.headline}` };
  return {
    title, description,
    alternates: {
      canonical: path,
      languages: { "pt-BR": "/pt", en: "/en", "x-default": "/pt" },
    },
    openGraph: {
      type: "profile", title, description, url: `${siteUrl}${path}`, siteName: personName,
      locale: locale === "pt" ? "pt_BR" : "en_US",
      alternateLocale: locale === "pt" ? "en_US" : "pt_BR",
      firstName: "Leandro", lastName: "César", images: [image],
    },
    twitter: { card: "summary_large_image", creator: "@leandcesar", title, description, images: [image] },
  };
}

export function languageTag(locale: Locale) {
  return languageTags[locale];
}
