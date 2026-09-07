import { GeistSans } from "geist/font/sans";
import { ThemeProvider } from "next-themes";
import type React from "react";

import "@/app/globals.css";
export { metadata } from "@/locales";

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
