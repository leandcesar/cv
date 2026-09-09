"use client";

import { Printer } from "lucide-react";

export function PDFDownloadButton({ label, fallback }: { label: string; fallback: string }) {
  return <div id="pdf" className="pdf-control no-print" tabIndex={-1}>
    <button type="button" className="button button-secondary pdf-button" aria-describedby="pdf-shortcut" aria-keyshortcuts="Control+p" onClick={() => window.print()}>
      <Printer size={16} aria-hidden="true" />{label}
    </button>
    <span id="pdf-shortcut" className="sr-only">Ctrl + P</span>
    <noscript><p className="small">{fallback}</p></noscript>
  </div>;
}
