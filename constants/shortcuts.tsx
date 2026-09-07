import type { ActionType } from "@/types/action";
import type { ReactNode } from "react";

export const Shortcuts = {
  Github: ["g"],
  Email: ["e"],
  Facebook: ["f", "b"],
  Instagram: ["i", "g"],
  Linkedin: ["i", "n"],
  Threads: ["@"],
  X: ["x"],
  Theme: ["t"],
  Language: ["l"],
  Kbar: ["ctrl", "k"],
  PDF: ["d"],
} satisfies Record<ActionType, string[]> & { Kbar: string[] };

const shortcutLabels: Record<string, string> = {
  ctrl: "Ctrl",
  alt: "Alt",
  shift: "Shift",
  enter: "Enter",
  esc: "Esc",
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
