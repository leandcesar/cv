import { en } from "@/locales/en";
import { pt } from "@/locales/pt";

export const contents = {
  default: pt,
  pt,
  en,
};

export type Locale = keyof typeof contents;
