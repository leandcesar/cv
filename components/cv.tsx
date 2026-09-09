import { ArrowUpRight } from "lucide-react";
import { PDFDownloadButton } from "@/components/pdf";
import { CopyEmail } from "@/components/copy-email";
import type { Content } from "@/types/content";
import type { Paragraph, Section } from "@/types/section";
import type { UI } from "@/locales/ui";

export function Project({ project }: { project: Paragraph }) {
  return <article className="project">
    <h3><a href={project.titleUrl}>{project.title}<ArrowUpRight size={16} aria-hidden="true" /></a></h3>
    <p className="muted">{project.description}</p>
  </article>;
}

function Period({ paragraph }: { paragraph: Paragraph }) {
  if (!paragraph.period) return null;
  const [start, end] = paragraph.period.split(" - ");
  return <p className="period">
    {paragraph.startDate ? <time dateTime={paragraph.startDate}>{start}</time> : start}
    {end && <> — {paragraph.endDate ? <time dateTime={paragraph.endDate}>{end}</time> : end}</>}
  </p>;
}

function Experience({ section }: { section: Section }) {
  const groups = section.paragraph.reduce<{ company: Paragraph; roles: Paragraph[] }[]>((result, paragraph) => {
    if (paragraph.title || !result.length) result.push({ company: paragraph, roles: [paragraph] });
    else result[result.length - 1].roles.push(paragraph);
    return result;
  }, []);
  return <ol className="experience-list">
    {groups.map(({ company, roles }) => <li key={company.title} className="employer">
      <h3 className="company-name"><a href={company.titleUrl}>{company.title}<ArrowUpRight size={14} aria-hidden="true" /></a></h3>
      <ol className="role-list">
        {roles.map((role) => <li key={`${role.subtitle}-${role.period}`} className="role">
          <div className="entry-heading"><h4>{role.subtitle}</h4><Period paragraph={role} /></div>
          {role.description && <p className="description">{role.description}</p>}
        </li>)}
      </ol>
    </li>)}
  </ol>;
}

function Skills({ section, ui }: { section: Section; ui: UI }) {
  const skills = section.paragraph.flatMap((paragraph) => paragraph.list ?? []);
  const groups = [
    { label: ui.skillDevelopment, matches: (skill: string) => ["Backend", "Python", "Golang", "APIs Restful", "GraphQL"].includes(skill) },
    { label: ui.skillAI, matches: (skill: string) => ["Inteligência Artificial", "Artificial Intelligence", "Automações", "Automations", "LLM", "Chatbots", "n8n", "LiteLLM", "OpenRouter", "OpenAI", "Gemini", "Make"].includes(skill) },
    { label: ui.skillData, matches: (skill: string) => ["MariaDB", "MySQL", "Postgres", "Redis", "RabbitMQ", "MongoDB"].includes(skill) },
  ];
  const assigned = new Set(groups.flatMap((group) => skills.filter(group.matches)));
  return <div className="skills-grid">
    {[...groups.map((group) => ({ label: group.label, skills: skills.filter(group.matches) })),
    { label: ui.skillCloud, skills: skills.filter((skill) => !assigned.has(skill)) }].map((group) =>
      <div key={group.label} className="skill-group"><h3>{group.label}</h3>
        <ul className="inline-list">{group.skills.map((skill) => <li key={skill}>{skill}</li>)}</ul>
      </div>)}
  </div>;
}

function ResumeSection({ section, ui }: { section: Section; ui: UI }) {
  return <section id={section.id} aria-labelledby={`${section.id}-title`} className="resume-section">
    <h2 id={`${section.id}-title`} className="section-label">{section.section}</h2>
    <div className="section-body">
      {section.id === "experience" ? <Experience section={section} />
        : section.id === "skills" ? <Skills section={section} ui={ui} />
          : section.id === "projects" ? <div className="projects-grid">{section.paragraph.map((project) => <Project key={project.title} project={project} />)}</div>
            : section.paragraph.map((paragraph, index) => <div className="entry" key={paragraph.title ?? index}>
              {paragraph.title && <h3>{paragraph.titleUrl ? <a href={paragraph.titleUrl}>{paragraph.title}<ArrowUpRight size={14} aria-hidden="true" /></a> : paragraph.title}</h3>}
              {paragraph.subtitle && <p className="entry-subtitle">{paragraph.subtitle}</p>}
              <Period paragraph={paragraph} />
              {paragraph.description && <p className="description">{paragraph.description}</p>}
              {paragraph.list && <ul className="plain-list">{paragraph.list.map((item) => <li key={item}>{item}</li>)}</ul>}
            </div>)}
    </div>
  </section>;
}

export default function Resume({ content, ui }: { content: Content; ui: UI }) {
  const order: Section["id"][] = ["about", "experience", "education", "languages", "projects", "skills", "volunteering"];
  const sections = order.flatMap((id) => content.sections.filter((section) => section.id === id));
  return <main id="content" tabIndex={-1} className="shell resume">
    <header className="resume-header">
      <h1>{content.header?.title}</h1>
      <p className="headline">{ui.headline}</p>
      <address className="resume-contact">
        {content.actions.filter((action) => ["Email", "Linkedin", "Github"].includes(action.type)).map((action) =>
          action.type === "Email" && action.url ? <span key={action.type} className="resume-email">
            <a href={action.url}>{action.url.replace(/^mailto:/, "")}</a>
            <CopyEmail email={action.url.replace(/^mailto:/, "")}
              copyLabel={ui.copyEmail} copiedLabel={ui.emailCopied} errorLabel={ui.emailCopyError} />
          </span>
            : <a key={action.type} href={action.url}>{action.url?.replace(/^https:\/\//, "")}<ArrowUpRight size={14} aria-hidden="true" /></a>)}
      </address>
      <PDFDownloadButton label={ui.pdf} fallback={ui.printFallback} />
    </header>
    <nav className="contents-nav no-print" aria-label={ui.contents}>
      {sections.filter((section) => section.id !== "about").map((section) => <a href={`#${section.id}`} key={section.id}>{section.section}</a>)}
    </nav>
    <div id="cv">{sections.map((section) => <ResumeSection key={section.id} section={section} ui={ui} />)}</div>
    <a href="#top" className="back-top no-print">{ui.backTop} ↑</a>
  </main>;
}
