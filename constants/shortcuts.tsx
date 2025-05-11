export const Shortcuts = {
  github: ["G", "H"],
  email: ["E"],
  facebook: ["F", "B"],
  instagram: ["I", "G"],
  linkedin: ["I", "N"],
  threads: ["@"],
  x: ["X"],
  theme: ["T"],
  language: ["L"],
  kbar: ["ctrl", "K"],
};

export function Key({ children }: { children: React.ReactNode }) {
  return (
    <kbd className="px-2 py-1 text-xs rounded bg-muted text-muted-foreground">
      {children}
    </kbd>
  );
}

export function Keys({ keys }: { keys: string[] }) {
  return (
    <>
      {keys.map((key, idx) => (
        <span key={idx}>
          <Key>{key}</Key>
          {idx < keys.length - 1 && " "}
        </span>
      ))}
    </>
  );
}
