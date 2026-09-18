import type { Action } from "./action";
import type { Section } from "./section";

export interface Content {
  header?: { title: string };
  resumeButton: string;
  sections: Section[];
  footer?: { text: string };
  actions: Action[];
}

export interface UI {
  resume: string;
  viewResume: string;
  skip: string;
  navigation: string;
  preferences: string;
  theme: string;
  light: string;
  dark: string;
  commands: string;
  search: string;
  searchLabel: string;
  results: string;
  noResults: string;
  navigate: string;
  open: string;
  close: string;
  or: string;
  navigationGroup: string;
  settingsGroup: string;
  profilesGroup: string;
  headline: string;
  specialization: string;
  photo: string;
  photoTitle: string;
  pdf: string;
  printFallback: string;
  copyEmail: string;
  emailCopied: string;
  emailCopyError: string;
  contents: string;
}

export interface LocalizedContent extends Content {
  ui: UI;
}
