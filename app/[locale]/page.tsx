import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { notFound } from "next/navigation";
import { getContent } from "@/locales";
import { getUI } from "@/locales/ui";
import { isLocale } from "@/lib/i18n";
import { pageMetadata } from "@/lib/site";
import { SiteFooter, SiteHeader } from "@/components/site-shell";
import { Portrait } from "@/components/portrait";
import { StructuredData } from "@/components/structured-data";

type Props = { params: Promise<{ locale: string }> };
export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return pageMetadata(locale);
}

export default async function Home({ params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const content = await getContent(locale);
  const ui = getUI(locale);
  const profileActions = content.actions.filter((action) => ["Email", "Linkedin", "Github"].includes(action.type) && action.url);
  return <>
    <StructuredData locale={locale} content={content} />
    <SiteHeader locale={locale} ui={ui} content={content} />
    <main id="content" tabIndex={-1} className="shell home">
      <section className="hero" aria-labelledby="intro-title">
        <Portrait label={ui.photo} title={ui.photoTitle} closeLabel={ui.close} />
        <div className="hero-copy">
          <h1 id="intro-title">{content.header?.title}</h1>
          <p className="headline">{ui.headline}</p>
          <div className="hero-actions">
            <a className="button button-primary" href={`/${locale}/cv`}>{content.resumeButton}<ArrowRight size={17} aria-hidden="true" /></a>
            {profileActions.map((action) => {
              const ProfileIcon = action.type === "Email" ? Mail : action.type === "Github" ? Github : Linkedin;
              const label = action.type === "Email" ? "E-mail" : action.type === "Github" ? "GitHub" : "LinkedIn";
              return <a className="button button-secondary social-button" key={action.type} href={action.url}
                aria-label={label} title={label}>
                <ProfileIcon size={17} aria-hidden="true" />
              </a>;
            })}
          </div>
        </div>
      </section>
    </main>
    <SiteFooter content={content} ui={ui} />
  </>;
}
