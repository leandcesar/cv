"use client";

import { useTheme } from "next-themes";
import { Languages, Moon, Sun } from "lucide-react";
import { CommandPalette, type CommandAction } from "@/components/kbar";
import type { Action } from "@/types/action";
import type { Locale } from "@/lib/i18n";
import type { UI } from "@/locales/ui";

export function SiteControls({ locale, resume, ui, profiles }: { locale: Locale; resume: boolean; ui: UI; profiles: Action[] }) {
  const { resolvedTheme, setTheme } = useTheme();
  const otherLocale = locale === "pt" ? "en" : "pt";
  const languageName = otherLocale === "en" ? "English" : "Português";
  const languageHref = `/${otherLocale}${resume ? "/cv" : ""}`;
  const actions: CommandAction[] = [
    { id: "home", name: ui.home, section: ui.navigationGroup, href: `/${locale}`, keywords: "home inicio" },
    { id: "resume", name: ui.viewResume, section: ui.navigationGroup, href: `/${locale}/cv`, keywords: "cv curriculum currículo resume" },
    {
      id: "pdf", name: ui.pdf, section: ui.navigationGroup, keywords: "pdf download imprimir print",
      ...(resume ? { perform: () => requestAnimationFrame(() => window.print()) } : { href: `/${locale}/cv#pdf` })
    },
    ...profiles.map((action) => ({
      id: action.type, name: action.type === "Email" ? "E-mail" : action.type === "Github" ? "GitHub" : action.type === "Linkedin" ? "LinkedIn" : action.type,
      section: ui.profilesGroup, href: action.url, keywords: action.keywords
    })),
    { id: "language", name: languageName, section: ui.settingsGroup, href: languageHref, keywords: "idioma language ingles portugues english" },
    { id: "light", name: ui.light, section: ui.settingsGroup, perform: () => setTheme("light"), keywords: "theme tema light claro" },
    { id: "dark", name: ui.dark, section: ui.settingsGroup, perform: () => setTheme("dark"), keywords: "theme tema dark escuro" },
  ];
  return <div className="site-controls no-print" role="group" aria-label={ui.preferences}>
    <a className="utility-button language-link" href={languageHref} hrefLang={otherLocale === "pt" ? "pt-BR" : "en"} lang={otherLocale === "pt" ? "pt-BR" : "en"}>
      <Languages size={16} aria-hidden="true" />
      {languageName}
    </a>
    <button type="button" className="utility-button" onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}>
      <Moon size={16} className="theme-moon" aria-hidden="true" /><Sun size={16} className="theme-sun" aria-hidden="true" />
      <span>{ui.theme}</span>
    </button>
    <CommandPalette actions={actions} ui={ui} />
  </div>;
}
