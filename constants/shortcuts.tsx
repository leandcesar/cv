import type { ActionType } from "@/types/action";
import type { ReactNode } from "react";

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

export function formatShortcut(key: string) {
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
  return (
    <>
      {keys.map((key, index) => (
        <span key={`${key}-${index}`}>
          <Key>{formatShortcut(key)}</Key>
          {index < keys.length - 1 && " "}
        </span>
      ))}
    </>
  );
}
