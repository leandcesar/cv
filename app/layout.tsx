import { GeistSans } from "geist/font/sans";
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import type React from "react";

import "@/app/globals.css";
import { contents } from "@/locales";

const content = contents["default"];

export const metadata: Metadata = {
  title: `${content.name} – ${content.role}`,
  description: content.description,
  keywords: content.keywords,
  authors: { name: content.name },
  creator: content.name,
  metadataBase: new URL(content.site),
  icons: { icon: "/favicon.ico" },
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={`${GeistSans.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange={false}
          storageKey="resume-theme"
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
