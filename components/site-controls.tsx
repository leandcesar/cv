"use client";

import { useEffect } from "react";
import dynamic from "next/dynamic";
import { useTheme } from "next-themes";
import { Download, FileText, Github, Instagram, Languages, Linkedin, Mail, Moon, Sun, Twitter } from "lucide-react";
import type { CommandMenuAction } from "@/components/command-menu";
import type { Action } from "@/types/action";
import type { Locale } from "@/lib/i18n";
import type { UI } from "@/types/content";

const CommandMenu = dynamic(
  () => import("@/components/command-menu").then((module) => module.CommandMenu),
  {
    ssr: false,
    loading: () => <span className="utility-button command-trigger command-trigger-placeholder" aria-hidden="true" />,
  },
);

export function SiteControls({ locale, ui, profiles }: { locale: Locale; ui: UI; profiles: Action[] }) {
  const { resolvedTheme, setTheme } = useTheme();
  const otherLocale = locale === "pt" ? "en" : "pt";
  const languageName = otherLocale === "en" ? "English" : "Português";
  const languageHref = `/${otherLocale}`;

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.isComposing || event.repeat || event.altKey) return;
      if (document.querySelector("dialog[open]")) return;
      const target = event.target;
      if (target instanceof HTMLElement && target.closest("input, textarea, select, [contenteditable='true']")) return;
      const key = event.key.toLowerCase();
      if ((event.ctrlKey || event.metaKey) && !event.shiftKey && key === "p") {
        event.preventDefault();
        window.print();
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
  }, [languageHref, resolvedTheme, setTheme]);

  const actions: CommandMenuAction[] = [
    { id: "resume", name: ui.viewResume, section: ui.navigationGroup, icon: <FileText size={16} aria-hidden="true" />, href: "#resume", keywords: "cv curriculum currículo resume" },
    {
      id: "pdf", name: ui.pdf, section: ui.navigationGroup, icon: <Download size={16} aria-hidden="true" />, keywords: "pdf download imprimir print",
      perform: () => requestAnimationFrame(() => window.print())
    },
    ...profiles.map((action) => ({
      id: action.type, name: action.type === "Email" ? "E-mail" : action.type === "Github" ? "GitHub" : action.type === "Linkedin" ? "LinkedIn" : action.type === "X" ? "X / Twitter" : action.type,
      icon: action.type === "Email" ? <Mail size={16} aria-hidden="true" /> : action.type === "Github" ? <Github size={16} aria-hidden="true" /> : action.type === "Linkedin" ? <Linkedin size={16} aria-hidden="true" /> : action.type === "Instagram" ? <Instagram size={16} aria-hidden="true" /> : action.type === "X" ? <Twitter size={16} aria-hidden="true" /> : undefined,
      section: ui.profilesGroup, href: action.url, keywords: action.keywords
    })),
    { id: "language", name: languageName, section: ui.settingsGroup, icon: <Languages size={16} aria-hidden="true" />, href: languageHref, keywords: "idioma language ingles portugues english" },
    { id: "light", name: ui.light, section: ui.settingsGroup, icon: <Sun size={16} aria-hidden="true" />, perform: () => setTheme("light"), keywords: "theme tema light claro" },
    { id: "dark", name: ui.dark, section: ui.settingsGroup, icon: <Moon size={16} aria-hidden="true" />, perform: () => setTheme("dark"), keywords: "theme tema dark escuro" },
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
    <CommandMenu actions={actions} ui={ui} />
  </div>;
}
