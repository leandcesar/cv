import type { Content, LocalizedContent } from "@/types/content";
import type { Paragraph, Section } from "@/types/section";

const sectionOrder: Section["id"][] = ["about", "contact", "experience", "education", "languages", "projects", "skills", "volunteering"];

function link(label: string, url?: string) {
  return url ? `[${label}](${url})` : label;
}

function period(paragraph: Paragraph) {
  return paragraph.period ? ` · ${paragraph.period}` : "";
}

function renderEntry(paragraph: Paragraph) {
  const lines: string[] = [];
  if (paragraph.title) lines.push(`### ${link(paragraph.title, paragraph.titleUrl)}`);
  if (paragraph.subtitle || paragraph.period) {
    lines.push(`**${paragraph.subtitle ?? ""}**${period(paragraph)}`.trim());
  }
  if (paragraph.description) lines.push(paragraph.description);
  if (paragraph.list) lines.push(...paragraph.list.map((item) => `- ${item}`));
  return lines.join("\n\n");
}

function renderExperience(section: Section) {
  const groups = section.paragraph.reduce<{ company: Paragraph; roles: Paragraph[] }[]>((result, paragraph) => {
    if (paragraph.title || !result.length) result.push({ company: paragraph, roles: [paragraph] });
    else result[result.length - 1].roles.push(paragraph);
    return result;
  }, []);

  return groups.map(({ company, roles }) => {
    const lines = [`### ${link(company.title ?? "", company.titleUrl)}`];
    lines.push(...roles.map((role) => `**${role.subtitle ?? ""}**${period(role)}${role.description ? `\n\n${role.description}` : ""}`.trim()));
    return lines.join("\n\n");
  }).join("\n\n");
}

function renderSection(section: Section) {
  const body = section.id === "experience"
    ? renderExperience(section)
    : section.paragraph.map(renderEntry).join("\n\n");
  return `## ${section.section}\n\n${body}`;
}

function renderLinks(content: Content) {
  const links = content.actions
    .filter((action) => action.url && ["Email", "Linkedin", "Github", "Instagram", "X"].includes(action.type))
    .map((action) => {
      const label = action.type === "Email" ? "Email" : action.type === "Linkedin" ? "LinkedIn" : action.type;
      return `- ${link(label, action.url)}`;
    });
  return links.length ? `## Links\n\n${links.join("\n")}` : "";
}

export function contentToMarkdown(content: LocalizedContent): string {
  const title = content.header?.title ?? "";
  const { headline, specialization } = content.ui;
  const sections = sectionOrder
    .map((id) => content.sections.find((section) => section.id === id))
    .filter((section): section is Section => Boolean(section))
    .map(renderSection);

  return [
    `# ${title}`,
    headline,
    specialization,
    ...sections,
    renderLinks(content),
  ].filter(Boolean).join("\n\n") + "\n";
}
