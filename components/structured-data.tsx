import { siteUrl, languageTag, personName } from "@/lib/site";
import type { Locale } from "@/lib/i18n";
import type { Content } from "@/types/content";

export function StructuredData({ content, locale, resume = false }: { content: Content; locale: Locale; resume?: boolean }) {
  const url = `${siteUrl}/${locale}${resume ? "/cv" : ""}`;
  const currentRole = content.sections.find((section) => section.id === "experience")?.paragraph[0];
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person", "@id": `${siteUrl}/#person`, name: personName, url: `${siteUrl}/${locale}`,
        image: `${siteUrl}/favicon-2560x2560.png`, jobTitle: currentRole?.subtitle,
        description: content.sections.find((section) => section.id === "about")?.paragraph[0].description,
        sameAs: content.actions.filter((action) => action.url?.startsWith("https://")).map((action) => action.url),
      },
      {
        "@type": "WebSite", "@id": `${siteUrl}/#website`, url: siteUrl, name: personName,
        inLanguage: ["pt-BR", "en"], publisher: { "@id": `${siteUrl}/#person` }
      },
      {
        "@type": "ProfilePage", "@id": `${url}#webpage`, url,
        name: `${personName}${resume ? locale === "pt" ? " — Currículo" : " — Resume" : ""}`,
        inLanguage: languageTag(locale), isPartOf: { "@id": `${siteUrl}/#website` },
        mainEntity: { "@id": `${siteUrl}/#person` },
      },
    ],
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }} />;
}
