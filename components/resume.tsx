"use client";

import { Action, useRegisterActions } from "kbar";
import { useTheme } from "next-themes";
import { useEffect, useMemo, useState, useCallback } from "react";

import {
  KBarProvider,
  KBarCommand,
  KBarCommandResults,
} from "@/components/kbar";
import { Icons } from "@/constants/icons";
import { Keys, Shortcuts } from "@/constants/shortcuts";
import { Locale, contents } from "@/locales";
import { Content } from "@/types/content";

export default function Resume() {
  return (
    <KBarProvider>
      <ResumeContent />
    </KBarProvider>
  );
}

function ResumeContent() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [locale, setLocale] = useState<Locale>("pt");
  const content = contents[locale];

  const toggleTheme = useCallback(() => {
    setTheme(theme === "dark" ? "light" : "dark");
  }, [theme, setTheme]);

  const toggleLanguage = useCallback(() => {
    const locales = Object.keys(contents).filter(
      (l) => l !== "default"
    ) as Locale[];
    setLocale((prev) => {
      const currentIndex = locales.indexOf(prev);
      const nextIndex = (currentIndex + 1) % locales.length;
      return locales[nextIndex];
    });
  }, []);

  const actions = useMemo<Action[]>(() => {
    return content.actions.value.map((action) => ({
      id: action.type,
      name: action.name ?? action.type,
      section: action.section,
      shortcut: Shortcuts[action.type.toLowerCase() as keyof typeof Shortcuts],
      keywords: action.keywords,
      icon: Icons[action.type.toLowerCase() as keyof typeof Icons],
      perform:
        action.type === "Theme"
          ? toggleTheme
          : action.type === "Language"
          ? toggleLanguage
          : () => window.open(action.url, "_blank"),
    }));
  }, [content, toggleTheme, toggleLanguage]);

  useEffect(() => setMounted(true), []);

  useRegisterActions(actions, [actions]);

  if (!mounted) return null;

  return (
    <main className="min-h-screen max-w-2xl mx-auto px-4 py-12 md:py-20">
      <KBarCommand />
      <KBarCommandResults />
      <Header content={content} />
      <About content={content} />
      <Experiences content={content} />
      <Education content={content} />
      <Projects content={content} />
      <Skills content={content} />
      <Languages content={content} />
      <Contact content={content} />
      <Footer content={content} />
    </main>
  );
}

function Header({ content }: { content: Content }) {
  return (
    <div className="mb-14">
      <header>
        <h1 className="text-4xl text-center font-light mb-2">{content.name}</h1>
        <p className="text-xl text-center text-muted-foreground font-light mb-4">
          {content.role}
        </p>
        <p className="text-center text-muted-foreground mb-4">
          {content.actions.label} <Keys keys={Shortcuts.kbar} />
        </p>
      </header>
    </div>
  );
}

function About({ content }: { content: Content }) {
  return (
    <section className="mb-10">
      <h2 className="text-2xl font-light mb-4 text-primary">
        {content.about.label}
      </h2>
      {content.about.value.split("\n").map((line, index) => (
        <p key={index} className="text-muted-foreground leading-relaxed mb-4">
          {line}
        </p>
      ))}
    </section>
  );
}

function Experiences({ content }: { content: Content }) {
  return (
    <section className="mb-10">
      <h2 className="text-2xl font-light mb-4 text-primary">
        {content.experiences.label} <Keys keys={Shortcuts.linkedin} />
      </h2>
      {content.experiences.value.map((experience, index) => (
        <Experience
          key={index}
          title={experience.title}
          company={experience.company}
          period={experience.period}
          description={experience.description}
          url={experience.url}
        />
      ))}
    </section>
  );
}

function Experience({
  title,
  company,
  period,
  description,
  url,
}: {
  title: string;
  company: string;
  period: string;
  description: string | undefined;
  url: string | undefined;
}) {
  return (
    <div className="mb-4">
      <h3 className="text-xl font-medium">{title}</h3>
      <p className="grid grid-cols-2 text-muted-foreground mb-2">
        {url ? (
          <a href={url} target="_blank" rel="noopener noreferrer">
            {company}
          </a>
        ) : (
          company
        )}
        {period}
      </p>
      <p className="text-muted-foreground leading-relaxed">{description}</p>
    </div>
  );
}

function Education({ content }: { content: Content }) {
  return (
    <section className="mb-10">
      <h2 className="text-2xl font-light mb-4 text-primary">
        {content.education.label}
      </h2>
      {content.education.value.map((course, index) => (
        <Course
          key={index}
          title={course.title}
          institution={course.institution}
          period={course.period}
          description={course.description}
          url={course.url}
        />
      ))}
    </section>
  );
}

function Course({
  title,
  institution,
  period,
  description,
  url,
}: {
  title: string;
  institution: string;
  period: string;
  description: string | undefined;
  url: string | undefined;
}) {
  return (
    <div className="mb-4">
      <h3 className="text-xl font-medium">{title}</h3>
      <p className="grid grid-cols-2 text-muted-foreground mb-2">
        {url ? (
          <a href={url} target="_blank" rel="noopener noreferrer">
            {institution}
          </a>
        ) : (
          institution
        )}
        {period}
      </p>
      <p className="text-muted-foreground leading-relaxed">{description}</p>
    </div>
  );
}

function Projects({ content }: { content: Content }) {
  return (
    <section className="mb-10">
      <h2 className="text-2xl font-light mb-4 text-primary">
        {content.projects.label} <Keys keys={Shortcuts.github} />
      </h2>
      {content.projects.value.map((project, index) => (
        <Project
          key={index}
          title={project.title}
          description={project.description}
          url={project.url}
        />
      ))}
    </section>
  );
}

function Project({
  title,
  description,
  url,
}: {
  title: string;
  description: string | undefined;
  url: string | undefined;
}) {
  return (
    <div className="mb-4">
      <h3 className="text-xl font-medium">
        {url ? (
          <a href={url} target="_blank" rel="noopener noreferrer">
            {title}
          </a>
        ) : (
          title
        )}
      </h3>
      <p className="text-muted-foreground leading-relaxed">{description}</p>
    </div>
  );
}

function Skills({ content }: { content: Content }) {
  return (
    <section className="mb-10">
      <h2 className="text-2xl font-light mb-4 text-primary">
        {content.skills.label}
      </h2>
      <ul className="grid grid-cols-2 md text-muted-foreground">
        {content.skills.value.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </section>
  );
}

function Languages({ content }: { content: Content }) {
  return (
    <section className="mb-10">
      <h2 className="text-2xl font-light mb-4 text-primary">
        {content.languages.label} <Keys keys={Shortcuts.language} />
      </h2>
      <ul className="grid grid-cols-2 md text-muted-foreground">
        {content.languages.value.map((language, index) => (
          <li key={index}>
            {language.language} - {language.level}
          </li>
        ))}
      </ul>
    </section>
  );
}

function Contact({ content }: { content: Content }) {
  return (
    <section>
      <h2 className="text-2xl font-light mb-4 text-primary">
        {content.contact.label} <Keys keys={Shortcuts.email} />
      </h2>
      <p className="text-muted-foreground mb-2">{content.contact.value}</p>
    </section>
  );
}

function Footer({ content }: { content: Content }) {
  return (
    <section className="mt-20">
      <p className="text-sm text-muted-foreground text-center">
        {new Date().getFullYear()} © {content.name}.{" "}
        <a
          href={content.source.value}
          target="_blank"
          rel="noopener noreferrer"
        >
          {content.source.label}
        </a>
        .
      </p>
    </section>
  );
}
