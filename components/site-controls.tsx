"use client";

import { useEffect } from "react";
import { useTheme } from "next-themes";
import { Languages, Moon, Sun } from "lucide-react";
import { CommandPalette, type CommandAction } from "@/components/kbar";
import type { Action } from "@/types/action";
import type { Locale } from "@/lib/i18n";
import type { UI } from "@/types/content";

export function SiteControls({ locale, resume, ui, profiles }: { locale: Locale; resume: boolean; ui: UI; profiles: Action[] }) {
  const { resolvedTheme, setTheme } = useTheme();
  const otherLocale = locale === "pt" ? "en" : "pt";
  const languageName = otherLocale === "en" ? "English" : "Português";
  const languageHref = `/${otherLocale}${resume ? "/cv" : ""}`;

  useEffect(() => {
    if (!resume || new URLSearchParams(window.location.search).get("print") !== "1") return;
    const timer = window.setTimeout(() => {
      window.history.replaceState(null, "", `${window.location.pathname}${window.location.hash}`);
      window.print();
    }, 150);
    return () => window.clearTimeout(timer);
  }, [resume]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.isComposing || event.repeat || event.altKey) return;
      if (document.querySelector("dialog[open]")) return;
      const target = event.target;
      if (target instanceof HTMLElement && target.closest("input, textarea, select, [contenteditable='true']")) return;
      const key = event.key.toLowerCase();
      if (!resume && (event.ctrlKey || event.metaKey) && !event.shiftKey && key === "p") {
        event.preventDefault();
        window.location.assign(`/${locale}/cv?print=1`);
        return;
      }
      if (!event.shiftKey || event.ctrlKey || event.metaKey) return;
      if (key !== "l" && key !== "t") return;
      event.preventDefault();
      if (key === "l") window.location.assign(languageHref);
      else setTheme(resolvedTheme === "dark" ? "light" : "dark");
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [languageHref, locale, resolvedTheme, resume, setTheme]);

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
    <a className="utility-button language-link" href={languageHref} hrefLang={otherLocale === "pt" ? "pt-BR" : "en"} lang={otherLocale === "pt" ? "pt-BR" : "en"} aria-keyshortcuts="Shift+l" aria-describedby="language-shortcut">
      <Languages size={16} aria-hidden="true" />
      {languageName}
      <kbd aria-hidden="true">Shift L</kbd>
    </a>
    <span id="language-shortcut" className="sr-only">Shift + L</span>
    <button type="button" className="utility-button theme-toggle" onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")} aria-keyshortcuts="Shift+t" aria-describedby="theme-shortcut">
      <Moon size={16} className="theme-moon" aria-hidden="true" /><Sun size={16} className="theme-sun" aria-hidden="true" />
      <span>{ui.theme}</span>
      <kbd aria-hidden="true">Shift T</kbd>
    </button>
    <span id="theme-shortcut" className="sr-only">Shift + T</span>
    <CommandPalette actions={actions} ui={ui} />
  </div>;
}
