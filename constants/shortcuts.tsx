import type { ActionType } from "@/types/action";
import { useEffect, useState, type ReactNode } from "react";

export const Shortcuts = {
  Github: ["g"],
  Email: ["e"],
  Facebook: [],
  Instagram: [],
  Linkedin: ["i", "n"],
  Threads: [],
  X: [],
  Theme: ["t"],
  Language: ["l"],
  Kbar: ["ctrl", "k"],
  PDF: ["d"],
  Resume: [],
} satisfies Record<ActionType, string[]> & { Kbar: string[] };

export const ShortcutAlternatives: Partial<Record<ActionType, string[][]>> = {
  Resume: [["arrowleft"], ["arrowright"]],
};

const shortcutLabels: Record<string, string> = {
  ctrl: "Ctrl",
  alt: "Alt",
  shift: "Shift",
  enter: "Enter",
  esc: "Esc",
  arrowleft: "←",
  arrowright: "→",
};

function detectMac() {
  if (typeof navigator === "undefined") return false;

  return /Macintosh|Mac OS X/.test(navigator.userAgent) ||
    navigator.platform === "MacIntel";
}

export function useIsMac() {
  const [isMac, setIsMac] = useState(false);

  useEffect(() => {
    setIsMac(detectMac());
  }, []);

  return isMac;
}

export function formatShortcut(key: string, isMac = false) {
  if (key.toLowerCase() === "ctrl" && isMac) return "⌘";

  return shortcutLabels[key.toLowerCase()] ?? key.toUpperCase();
}

export function Key({ children }: { children: ReactNode }) {
  return (
    <kbd className="px-2 py-1 text-xs rounded bg-muted text-muted-foreground hide-for-pdf">
      {children}
    </kbd>
  );
}

export function Keys({ keys }: { keys: string[] }) {
  const isMac = useIsMac();

  return (
    <>
      {keys.map((key, index) => (
        <span key={`${key}-${index}`}>
          <Key>{formatShortcut(key, isMac)}</Key>
          {index < keys.length - 1 && " "}
        </span>
      ))}
    </>
  );
}
