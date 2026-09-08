import type { Action } from "./action";
import type { Section } from "./section";

export interface Content {
  header?: { title: string; subtitle: string };
  resumeButton: string;
  homeButton: string;
  sections: Section[];
  footer?: { text: string; url: string };
  actions: Action[];
}
