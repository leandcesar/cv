"use client";

import { useCallback, useMemo, useState } from "react";
import { useTheme } from "next-themes";
import {
  KBarProvider,
  KBarCommand,
  KBarCommandResults,
  useRegisterActions,
  type CommandAction,
} from "@/components/kbar";
import { PDFDownloadButton, handlePDFDownload } from "@/components/pdf";
import { Icons } from "@/constants/icons";
import { Keys, Shortcuts } from "@/constants/shortcuts";
import { contents, locales, type Locale } from "@/locales";
import type { Content } from "@/types/content";
import type {
  Paragraph as ParagraphContent,
  Section as SectionContent,
} from "@/types/section";

export default function CV() {
  return (
    <KBarProvider>
      <CVContent />
    </KBarProvider>
  );
}

function CVContent() {
  const { theme, setTheme } = useTheme();
  const [locale, setLocale] = useState<Locale>("pt");
  const content = contents[locale];

  const toggleTheme = useCallback(() => {
    setTheme(theme === "dark" ? "light" : "dark");
  }, [theme, setTheme]);

  const toggleLanguage = useCallback(() => {
    setLocale((prev) => {
      const currentIndex = locales.indexOf(prev);
      return locales[(currentIndex + 1) % locales.length];
    });
  }, []);

  const actions = useMemo<CommandAction[]>(
    () =>
      content.actions.map((action) => ({
        id: action.type,
        name: action.name ?? action.type,
        section: action.section,
        shortcut: Shortcuts[action.type],
        keywords: action.keywords,
        icon: Icons[action.type],
        perform:
          action.type === "Theme"
            ? toggleTheme
            : action.type === "Language"
              ? toggleLanguage
              : action.type === "PDF"
                ? handlePDFDownload
                : () => window.open(action.url, "_blank"),
      })),
    [content, toggleTheme, toggleLanguage]
  );

  useRegisterActions(actions);

  return (
    <main
      id="cv"
      className="min-h-screen max-w-2xl mx-auto px-4 py-12 md:py-20"
    >
      <PDFDownloadButton />
      <KBarCommand />
      <KBarCommandResults />
      {content.header && <Header content={content} />}
      {content.sections.map((section) => (
        <Section
          key={section.section}
          section={section}
          keys={section.shortcut ? Shortcuts[section.shortcut] : undefined}
        />
      ))}
      {content.footer && <Footer content={content} />}
    </main>
  );
}

function Header({ content }: { content: Content }) {
  return (
    <div className="mb-14">
      <header>
        <h1 className="text-4xl text-center font-light mb-2">
          {content.header?.title}
        </h1>
        <p className="text-xl text-center text-muted-foreground font-light mb-4">
          {content.header?.subtitle}
        </p>
        <p className="text-center text-muted-foreground mb-4 hide-for-pdf">
          <Keys keys={Shortcuts.Kbar} />
        </p>
      </header>
    </div>
  );
}

function Section({
  section,
  keys,
}: {
  section: SectionContent;
  keys?: string[];
}) {
  return (
    <section className="mb-10">
      <h2 className="text-2xl font-light mb-4 text-primary">
        {section.section} {keys && <Keys keys={keys} />}
      </h2>
      {section.paragraph.map((paragraph, index) => (
        <Paragraph key={index} paragraph={paragraph} />
      ))}
    </section>
  );
}

function Paragraph({ paragraph }: { paragraph: ParagraphContent }) {
  return (
    <div className="mb-4">
      <h3 className="text-xl font-medium">
        {paragraph.titleUrl ? (
          <a
            href={paragraph.titleUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            {paragraph.title}
          </a>
        ) : (
          paragraph.title
        )}
      </h3>
      <p className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-x-4 text-muted-foreground mb-2">
        <span className="min-w-0 break-words">
          {paragraph.subtitleUrl ? (
            <a
              href={paragraph.subtitleUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {paragraph.subtitle}
            </a>
          ) : (
            paragraph.subtitle
          )}
        </span>
        {paragraph.period && (
          <span className="whitespace-nowrap text-right">
            {paragraph.period}
          </span>
        )}
      </p>
      <p className="text-muted-foreground leading-relaxed text-justify">
        {paragraph.description}
      </p>
      {paragraph.list && (
        <ul className="grid grid-cols-2 text-muted-foreground">
          {paragraph.list.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

function Footer({ content }: { content: Content }) {
  return (
    <section className="mt-20 hide-for-pdf">
      <p className="text-sm text-muted-foreground text-center">
        <a href={content.footer?.url} target="_blank" rel="noopener noreferrer">
          {content.footer?.text}
        </a>
      </p>
    </section>
  );
}
