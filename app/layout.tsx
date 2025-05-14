import { GeistSans } from "geist/font/sans";
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import type React from "react";

import "@/app/globals.css";
import { contents } from "@/locales";

const content = contents["default"];

export const metadata: Metadata = content.metadata;

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
          storageKey="cv-theme"
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
