import type { ActionType } from "@/types/action";

export type Paragraph = {
  title?: string;
  titleUrl?: string;
  subtitle?: string;
  subtitleUrl?: string;
  description?: string;
  list?: string[];
  period?: string;
  startDate?: string;
  endDate?: string;
};

export type Section = {
  id: "about" | "contact" | "experience" | "education" | "languages" | "projects" | "volunteering" | "skills";
  section: string;
  paragraph: Paragraph[];
  shortcut?: ActionType;
};
