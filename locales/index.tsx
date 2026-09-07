import type { Metadata } from "next";

import { en } from "@/locales/en";
import { pt } from "@/locales/pt";
import type { Content } from "@/types/content";

export const locales = ["pt", "en"] as const;

export type Locale = (typeof locales)[number];

export const contents: Record<Locale, Content> = {
  pt,
  en,
};

export const metadata: Metadata = {
  title: "Leandro César",
  description:
    "Leandro César's CV. Tech lead, backend developer, specialist in automations and AI-powered solutions.",
  keywords: ["Leandro César"],
  authors: { name: "Leandro César" },
  creator: "Leandro César",
  metadataBase: new URL("https://github.com/leandcesar"),
  icons: { icon: "/favicon.ico" },
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
};
