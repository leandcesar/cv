import type { Metadata } from "next";
import { languageTags, type Locale } from "@/lib/i18n";
import { getUI } from "@/locales/ui";

// This is the published canonical origin, shared by metadata, sitemap and JSON-LD.
export const siteUrl = "https://leandcesar.vercel.app";
export const personName = "Leandro César";

export function pageMetadata(locale: Locale, resume = false): Metadata {
  const ui = getUI(locale);
  const path = `/${locale}${resume ? "/cv" : ""}`;
  const suffix = resume ? "/cv" : "";
  const title = resume
    ? `${ui.resume} · ${personName} — ${locale === "pt" ? "Líder Técnico" : "Tech Lead"}`
    : `${personName} — ${locale === "pt" ? "Liderança técnica, backend e IA" : "Leadership, backend & AI"}`;
  const description = locale === "pt"
    ? `${resume ? "Currículo de" : "Conheça"} Leandro César, Líder Técnico na Cloudia. Experiência em backend, inteligência artificial, automações e AWS. Projetos, formação e contato.`
    : `${resume ? "Resume of" : "Meet"} Leandro César, Tech Lead at Cloudia. Experience in backend development, AI, automation and AWS. Projects, education and contact.`;
  const image = { url: `${siteUrl}/${locale}/opengraph-image`, width: 1200, height: 630, alt: `${personName} — ${ui.headline}` };
  return {
    title, description,
    alternates: {
      canonical: path,
      languages: { "pt-BR": `/pt${suffix}`, en: `/en${suffix}`, "x-default": `/pt${suffix}` },
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
