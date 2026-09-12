import { notFound } from "next/navigation";
import Resume from "@/components/cv";
import { SiteFooter, SiteHeader } from "@/components/site-shell";
import { StructuredData } from "@/components/structured-data";
import { getContent } from "@/locales";
import { isLocale } from "@/lib/i18n";
import { pageMetadata } from "@/lib/site";

type Props = { params: Promise<{ locale: string }> };
export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return await pageMetadata(locale, true);
}

export default async function ResumePage({ params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const content = await getContent(locale);
  const ui = content.ui;
  return <div className="resume-page scroll-fade-y">
    <StructuredData content={content} locale={locale} resume />
    <SiteHeader content={content} locale={locale} ui={ui} resume />
    <Resume content={content} ui={ui} />
    <SiteFooter content={content} ui={ui} />
  </div>;
}
