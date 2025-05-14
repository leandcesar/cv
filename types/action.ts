export type ActionType =
  | "Email"
  | "Facebook"
  | "Github"
  | "Instagram"
  | "Language"
  | "Linkedin"
  | "PDF"
  | "Theme"
  | "Threads"
  | "X";

export type Action = {
  type: ActionType;
  section: string;
  name?: string;
  url?: string;
  keywords?: string;
}
