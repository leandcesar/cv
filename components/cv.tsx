"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { useTheme } from "next-themes";
import { X as CloseIcon } from "lucide-react";
import {
  KBarProvider,
  KBarCommand,
  KBarCommandResults,
  useRegisterActions,
  type CommandAction,
} from "@/components/kbar";
import { PDFDownloadButton, handlePDFDownload } from "@/components/pdf";
import { Icons } from "@/constants/icons";
import {
  Keys,
  ShortcutAlternatives,
  Shortcuts,
} from "@/constants/shortcuts";
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
  const [showResume, setShowResume] = useState(false);
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
        name:
          action.type === "Resume" && showResume
            ? content.homeButton
            : action.name ?? action.type,
        section: action.section,
        shortcut: Shortcuts[action.type],
        shortcutAlternatives: ShortcutAlternatives[action.type],
        keywords: action.keywords,
        icon:
          action.type === "Resume" && showResume
            ? Icons.Home
            : action.type === "Theme" && theme !== "dark"
              ? Icons.Moon
              : Icons[action.type],
        perform:
          action.type === "Theme"
            ? toggleTheme
            : action.type === "Language"
              ? toggleLanguage
              : action.type === "PDF"
                ? handlePDFDownload
                : action.type === "Resume"
                  ? () => setShowResume((current) => !current)
                  : () => window.open(action.url, "_blank"),
      })),
    [content, showResume, theme, toggleTheme, toggleLanguage]
  );

  useRegisterActions(actions);

  return (
    <>
      <ThemeLanguageControls
        content={content}
        theme={theme}
        onToggleTheme={toggleTheme}
        onToggleLanguage={toggleLanguage}
      />
      {showResume ? (
        <Resume content={content} onHome={() => setShowResume(false)} />
      ) : (
        <main className="min-h-screen flex items-center justify-center px-4 py-12">
          <KBarCommand />
          <KBarCommandResults />
          <Landing content={content} onViewResume={() => setShowResume(true)} />
        </main>
      )}
    </>
  );
}

function ThemeLanguageControls({
  content,
  theme,
  onToggleTheme,
  onToggleLanguage,
}: {
  content: Content;
  theme?: string;
  onToggleTheme: () => void;
  onToggleLanguage: () => void;
}) {
  const themeAction = content.actions.find((action) => action.type === "Theme");
  const languageAction = content.actions.find(
    (action) => action.type === "Language"
  );

  return (
    <div className="fixed right-4 top-4 z-40 flex max-w-[calc(100vw-2rem)] items-center gap-2 hide-for-pdf">
      <button
        type="button"
        onClick={onToggleTheme}
        aria-label={themeAction?.name ?? "Toggle theme"}
        title={themeAction?.name ?? "Toggle theme"}
        className="button flex h-11 w-11 shrink-0 items-center justify-center rounded-full p-0 text-foreground [&>svg]:h-5 [&>svg]:w-5"
      >
        {theme === "dark" ? Icons.Theme : Icons.Moon}
      </button>
      <button
        type="button"
        onClick={onToggleLanguage}
        aria-label={languageAction?.name ?? "Toggle language"}
        title={languageAction?.name ?? "Toggle language"}
        className="button flex h-11 w-11 shrink-0 items-center justify-center rounded-full p-0 text-foreground [&>svg]:h-5 [&>svg]:w-5"
      >
        {Icons.Language}
      </button>
    </div>
  );
}

function Resume({
  content,
  onHome,
}: {
  content: Content;
  onHome: () => void;
}) {
  return (
    <main
      id="cv"
      className="min-h-screen max-w-2xl mx-auto px-4 py-12 md:py-20"
    >
      <div className="fixed left-4 top-4 z-40 flex items-center hide-for-pdf">
        <button
          type="button"
          onClick={onHome}
          aria-label={content.homeButton}
          title={content.homeButton}
          className="button flex h-11 w-11 shrink-0 items-center justify-center rounded-full p-0 text-foreground [&>svg]:h-5 [&>svg]:w-5"
        >
          {Icons.Home}
        </button>
      </div>
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

function Landing({
  content,
  onViewResume,
}: {
  content: Content;
  onViewResume: () => void;
}) {
  const [isPhotoOpen, setIsPhotoOpen] = useState(false);

  useEffect(() => {
    if (!isPhotoOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsPhotoOpen(false);
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isPhotoOpen]);

  return (
    <div className="w-full max-w-2xl text-center">
      <header>
        <button
          type="button"
          onClick={() => setIsPhotoOpen(true)}
          aria-label="Ampliar foto de Leandro César"
          className="mx-auto mb-8 block rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          <img
            src="/image-2560x2560.webp"
            alt="Leandro César"
            className="h-44 w-44 rounded-full object-cover ring-1 ring-border shadow-2xl md:h-48 md:w-48"
          />
        </button>
        <h1 className="text-4xl font-light mb-2">{content.header?.title}</h1>
        <p className="text-xl text-muted-foreground font-light mb-4">
          {content.header?.subtitle}
        </p>
        <p className="text-muted-foreground mb-10 hide-for-pdf">
          <Keys keys={Shortcuts.Kbar} />
        </p>
      </header>

      <Navigation content={content} onGoHome={onViewResume} />

      {isPhotoOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Foto ampliada de Leandro César"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setIsPhotoOpen(false);
          }}
        >
          <div className="relative">
            <img
              src="/image-2560x2560.webp"
              alt="Leandro César"
              className="aspect-square max-h-[min(80vh,720px)] max-w-[min(90vw,720px)] rounded-lg object-cover shadow-2xl"
            />
            <button
              type="button"
              onClick={() => setIsPhotoOpen(false)}
              aria-label="Fechar foto ampliada"
              className="button absolute right-3 top-3 rounded-full p-2 text-foreground"
            >
              <CloseIcon className="h-5 w-5" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

function Navigation({
  content,
  isResume = false,
  onGoHome,
}: {
  content: Content;
  isResume?: boolean;
  onGoHome: () => void;
}) {
  const socialActions = content.actions.filter(
    (action) =>
      action.url &&
      ["Linkedin", "Github", ...(!isResume ? ["Email"] : [])].includes(
        action.type
      )
  );

  return (
    <nav
      aria-label="Navegação e redes sociais"
      className="mx-auto mb-14 flex w-full max-w-[228px] flex-wrap justify-center gap-3 hide-for-pdf"
    >
      <button
        type="button"
        onClick={onGoHome}
        aria-label={isResume ? content.homeButton : content.resumeButton}
        title={isResume ? content.homeButton : content.resumeButton}
        className="button flex h-12 w-12 items-center justify-center rounded-xl text-foreground [&>svg]:h-5 [&>svg]:w-5"
      >
        {isResume ? Icons.Home : Icons.Resume}
      </button>
      {socialActions.map((action) => (
        <a
          key={action.type}
          href={action.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={action.type}
          className="button flex h-12 w-12 items-center justify-center rounded-xl text-foreground [&>svg]:h-5 [&>svg]:w-5"
        >
          {Icons[action.type]}
        </a>
      ))}
    </nav>
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
