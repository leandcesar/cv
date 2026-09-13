import type { Brand } from "@/lib/brands";

export type Paragraph = {
  title?: string;
  titleUrl?: string;
  brand?: Brand;
  subtitle?: string;
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
};
