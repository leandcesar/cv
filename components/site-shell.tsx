import { ActionIcon, actionLabel } from "@/components/action-icon";
import { SiteControls } from "@/components/site-controls";
import type { Content } from "@/types/content";
import type { Locale } from "@/lib/i18n";
import type { UI } from "@/types/content";

export function SiteHeader({ locale, ui, content }: { locale: Locale; ui: UI; content: Content }) {
  return <>
    <a href="#content" className="skip-link">{ui.skip}</a>
    <header className="site-header shell no-print" id="top">
      <nav aria-label={ui.navigation} className="primary-nav">
        <a href="#resume" className="site-link">{ui.resume}</a>
      </nav>
      <SiteControls locale={locale} ui={ui} profiles={content.actions.filter((action) => Boolean(action.url))} />
    </header>
  </>;
}

export function SiteFooter({ content, ui }: { content: Content; ui: UI }) {
  const socialActions = content.actions.filter((action) => action.url && ["Facebook", "Github", "Instagram", "Linkedin", "Threads", "X"].includes(action.type));

  return <footer className="site-footer shell no-print">
    <span className="footer-copyright">{content.footer?.text}</span>
    <nav className="footer-socials" aria-label={ui.profilesGroup}>
      {socialActions.map((action) => <a key={action.type} className="footer-social-link" href={action.url} aria-label={actionLabel(action.type)}>
        <ActionIcon type={action.type} size={18} />
      </a>)}
    </nav>
  </footer>;
}
