export type ActionType =
  | "Theme"
  | "Language"
  | "Github"
  | "Email"
  | "Facebook"
  | "Instagram"
  | "Linkedin"
  | "Threads"
  | "X";

export interface Content {
  name: string;
  role: string;
  description: string;
  site: string;
  keywords: string[];
  about: {
    label: string;
    value: string;
  };
  experiences: {
    label: string;
    value: {
      title: string;
      description: string;
      period: string;
      company: string;
      url?: string;
    }[];
  };
  education: {
    label: string;
    value: {
      title: string;
      description: string;
      period: string;
      institution: string;
      url?: string;
    }[];
  };
  projects: {
    label: string;
    value: {
      title: string;
      description: string;
      url?: string;
    }[];
  };
  skills: {
    label: string;
    value: string[];
  };
  languages: {
    label: string;
    value: {
      language: string;
      level: string;
    }[];
  };
  contact: {
    label: string;
    value: string;
  };
  source: {
    label: string;
    value: string;
  };
  actions: {
    label: string;
    value: {
      type: ActionType;
      section: string;
      keywords?: string;
      name?: string;
      url?: string;
    }[];
  };
}
