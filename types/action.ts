export type ActionType =
  | "Email"
  | "Facebook"
  | "Github"
  | "Instagram"
  | "Language"
  | "Linkedin"
  | "PDF"
  | "Resume"
  | "Theme"
  | "Threads"
  | "X";

export type Action = {
  type: ActionType;
  section: string;
  name?: string;
  url?: string;
  keywords?: string;
};
