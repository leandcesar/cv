import { ActionType } from "@/types/action";

export type Paragraph = {
  title?: string;
  titleUrl?: string;
  subtitle?: string;
  subtitleUrl?: string;
  description?: string;
  list?: string[];
  period?: string;
}

export type Section = {
  section: string;
  paragraph: Paragraph[];
  shortcut?: ActionType;
}
