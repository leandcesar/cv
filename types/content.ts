import type { Action } from "./action";
import type { Section } from "./section";

export interface Content {
  header?: { title: string; subtitle: string };
  resumeButton: string;
  homeButton: string;
  shortcutAlternativeLabel: string;
  sections: Section[];
  footer?: { text: string; url: string };
  actions: Action[];
}

export interface UI {
  home: string;
  resume: string;
  viewResume: string;
  skip: string;
  navigation: string;
  preferences: string;
  theme: string;
  light: string;
  dark: string;
  system: string;
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
  current: string;
  at: string;
  focus: string;
  selectedProjects: string;
  allProjects: string;
  contact: string;
  profiles: string;
  source: string;
  photo: string;
  photoTitle: string;
  pdf: string;
  printFallback: string;
  copyEmail: string;
  emailCopied: string;
  emailCopyError: string;
  contents: string;
  backTop: string;
  skillDevelopment: string;
  skillAI: string;
  skillCloud: string;
  skillData: string;
}

export interface LocalizedContent extends Content {
  ui: UI;
}
