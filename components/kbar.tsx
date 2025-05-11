"use client";

import {
  KBarProvider,
  KBarPortal,
  KBarPositioner,
  KBarSearch,
  KBarAnimator,
  KBarResults,
  useKBar,
  useMatches,
} from "kbar";

export { KBarProvider };

export function KBarCommand() {
  const { query } = useKBar();
  return (
    <div className="fixed bottom-4 right-4 flex items-center">
      <button
        onClick={() => query.toggle()}
        className="kbar-button p-3 rounded-full text-foreground shadow-md hover:opacity-90 transition-all duration-300"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-command"
        >
          <path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path>
        </svg>
      </button>
    </div>
  );
}

export function KBarCommandResults() {
  const { results } = useMatches();

  return (
    <KBarPortal>
      <KBarPositioner className="z-50 bg-black/50 fixed inset-0">
        <KBarAnimator className="max-w-xl w-full bg-background rounded-lg overflow-hidden shadow-xl">
          <KBarSearch
            className="py-3 px-4 text-base w-full box-border outline-none border-none bg-transparent text-foreground"
            defaultPlaceholder=""
          />
          <KBarResults
            items={results}
            onRender={({ item, active }) =>
              typeof item === "string" ? (
                <div className="px-4 py-2 text-xs uppercase text-muted-foreground">
                  {item}
                </div>
              ) : (
                <div
                  className={`px-4 py-2 flex items-center justify-between cursor-pointer ${
                    active ? "bg-accent" : "bg-transparent"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    {item.icon && <span className="text-lg">{item.icon}</span>}
                    <span>{item.name}</span>
                  </div>
                  {item.shortcut && (
                    <div className="flex gap-1">
                      {item.shortcut.map((shortcut) => (
                        <kbd
                          key={shortcut}
                          className="px-2 py-1 text-xs rounded bg-muted"
                        >
                          {shortcut}
                        </kbd>
                      ))}
                    </div>
                  )}
                </div>
              )
            }
          />
        </KBarAnimator>
      </KBarPositioner>
    </KBarPortal>
  );
}
