import { ArrowUpRight } from "lucide-react";
import { SiteControls } from "@/components/site-controls";
import type { Content } from "@/types/content";
import type { Locale } from "@/lib/i18n";
import type { UI } from "@/types/content";

export function SiteHeader({ locale, ui, content }: { locale: Locale; ui: UI; content: Content }) {
  return <>
    <a href="#content" className="skip-link">{ui.skip}</a>
    <header className="site-header shell no-print" id="top">
      <nav aria-label={ui.navigation} className="primary-nav">
        <a href={`/${locale}`} aria-current="page">{ui.home}</a>
        <a href="#resume">{ui.resume}</a>
      </nav>
      <SiteControls locale={locale} ui={ui} profiles={content.actions.filter((action) => Boolean(action.url))} />
    </header>
  </>;
}

export function SiteFooter({ content, ui }: { content: Content; ui: UI }) {
  return <footer className="site-footer shell no-print">
    <span>{content.footer?.text}</span>
    <a href={content.footer?.url}>{ui.source}<ArrowUpRight size={14} aria-hidden="true" /></a>
  </footer>;
}
