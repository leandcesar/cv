import { ArrowUpRight } from "lucide-react";
import { SiteControls } from "@/components/site-controls";
import type { Content } from "@/types/content";
import type { Locale } from "@/lib/i18n";
import type { UI } from "@/types/content";

export function SiteHeader({ locale, resume = false, ui, content }: { locale: Locale; resume?: boolean; ui: UI; content: Content }) {
  return <>
    <a href="#content" className="skip-link">{ui.skip}</a>
    <header className="site-header shell no-print" id="top">
      <nav aria-label={ui.navigation} className="primary-nav">
        <a href={`/${locale}`} aria-current={!resume ? "page" : undefined}>{ui.home}</a>
        <a href={`/${locale}/cv`} aria-current={resume ? "page" : undefined}>{ui.resume}</a>
      </nav>
      <SiteControls locale={locale} resume={resume} ui={ui} profiles={content.actions.filter((action) => Boolean(action.url))} />
    </header>
  </>;
}

export function ProfileLinks({ content, ui, all = false }: { content: Content; ui: UI; all?: boolean }) {
  const profiles = content.actions.filter((action) => action.url && (all || ["Email", "Linkedin", "Github"].includes(action.type)));
  return <nav className="profile-links" aria-label={ui.profiles}>
    {profiles.map((action) => <a key={action.type} href={action.url}>
      {action.type === "Email" ? "E-mail" : action.type === "Github" ? "GitHub" : action.type === "Linkedin" ? "LinkedIn" : action.type}
      <ArrowUpRight size={14} aria-hidden="true" />
    </a>)}
  </nav>;
}

export function SiteFooter({ content, ui }: { content: Content; ui: UI }) {
  return <footer className="site-footer shell no-print">
    <span>{content.footer?.text}</span>
    <a href={content.footer?.url}>{ui.source}<ArrowUpRight size={14} aria-hidden="true" /></a>
  </footer>;
}
