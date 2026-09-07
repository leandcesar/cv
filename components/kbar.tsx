"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type KeyboardEvent as ReactKeyboardEvent,
  type ReactNode,
} from "react";
import { createPortal } from "react-dom";
import { formatShortcut } from "@/constants/shortcuts";

export type CommandAction = {
  id: string;
  name: string;
  section: string;
  shortcut?: string[];
  keywords?: string;
  icon?: ReactNode;
  perform?: () => void | Promise<void>;
};

type CommandPaletteContextValue = {
  actions: CommandAction[];
  isOpen: boolean;
  toggle: () => void;
  close: () => void;
  registerActions: (actions: CommandAction[]) => void;
};

const CommandPaletteContext = createContext<CommandPaletteContextValue | null>(
  null
);

export function KBarProvider({ children }: { children: ReactNode }) {
  const [actions, setActions] = useState<CommandAction[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const shortcutSequence = useRef<string[]>([]);
  const shortcutTimeout = useRef<number | undefined>(undefined);

  useEffect(() => {
    const handleKeyDown = (event: globalThis.KeyboardEvent) => {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setIsOpen((open) => !open);
      }

      if (event.key === "Escape") {
        setIsOpen(false);
        shortcutSequence.current = [];
        return;
      }

      const target = event.target;
      if (
        target instanceof HTMLInputElement ||
        target instanceof HTMLTextAreaElement ||
        (target instanceof HTMLElement && target.isContentEditable)
      ) {
        return;
      }

      if (event.ctrlKey || event.metaKey || event.altKey) return;

      const sequence = [
        ...shortcutSequence.current,
        event.key.toLowerCase(),
      ];
      const matchingActions = actions.filter((action) =>
        action.shortcut?.every(
          (shortcut, index) => shortcut.toLowerCase() === sequence[index]
        ) && action.shortcut.length >= sequence.length
      );

      if (matchingActions.length === 0) {
        shortcutSequence.current = [];
        return;
      }

      const action = matchingActions.find(
        (candidate) => candidate.shortcut?.length === sequence.length
      );

      event.preventDefault();
      if (action) {
        shortcutSequence.current = [];
        if (shortcutTimeout.current !== undefined) {
          window.clearTimeout(shortcutTimeout.current);
        }
        setIsOpen(false);
        void action.perform?.();
        return;
      }

      shortcutSequence.current = sequence;
      if (shortcutTimeout.current !== undefined) {
        window.clearTimeout(shortcutTimeout.current);
      }
      shortcutTimeout.current = window.setTimeout(() => {
        shortcutSequence.current = [];
      }, 1000);
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      if (shortcutTimeout.current !== undefined) {
        window.clearTimeout(shortcutTimeout.current);
      }
    };
  }, [actions]);

  const value = useMemo(
    () => ({
      actions,
      isOpen,
      toggle: () => setIsOpen((open) => !open),
      close: () => setIsOpen(false),
      registerActions: setActions,
    }),
    [actions, isOpen]
  );

  return (
    <CommandPaletteContext.Provider value={value}>
      {children}
    </CommandPaletteContext.Provider>
  );
}

function useCommandPalette() {
  const context = useContext(CommandPaletteContext);
  if (!context) {
    throw new Error("Command palette components must be inside KBarProvider");
  }
  return context;
}

export function useRegisterActions(actions: CommandAction[]) {
  const { registerActions } = useCommandPalette();

  useEffect(() => {
    registerActions(actions);
  }, [actions, registerActions]);
}

export function KBarCommand() {
  const { toggle } = useCommandPalette();
  return (
    <div className="fixed bottom-4 right-4 flex items-center hide-for-pdf">
      <button
        onClick={toggle}
        aria-label="Open command palette"
        className="button p-3 rounded-full text-foreground shadow-md hover:opacity-90 transition-all duration-300"
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
  const { actions, isOpen, close } = useCommandPalette();
  const [search, setSearch] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const searchRef = useRef<HTMLInputElement>(null);

  const filteredActions = useMemo(() => {
    const query = search.trim().toLowerCase();
    if (!query) return actions;

    return actions.filter((action) =>
      `${action.name} ${action.keywords ?? ""}`.toLowerCase().includes(query)
    );
  }, [actions, search]);

  useEffect(() => {
    if (isOpen) {
      setSearch("");
      setActiveIndex(0);
      searchRef.current?.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    setActiveIndex((index) =>
      filteredActions.length === 0
        ? 0
        : Math.min(index, filteredActions.length - 1)
    );
  }, [filteredActions.length]);

  if (!isOpen || typeof document === "undefined") return null;

  const runAction = (action: CommandAction) => {
    close();
    void action.perform?.();
  };

  const handleSearchKeyDown = (
    event: ReactKeyboardEvent<HTMLInputElement>
  ) => {
    if (event.key === "ArrowDown") {
      event.preventDefault();
      setActiveIndex((index) =>
        filteredActions.length === 0
          ? 0
          : (index + 1) % filteredActions.length
      );
    }

    if (event.key === "ArrowUp") {
      event.preventDefault();
      setActiveIndex((index) =>
        filteredActions.length === 0
          ? 0
          : (index - 1 + filteredActions.length) % filteredActions.length
      );
    }

    if (event.key === "Enter" && filteredActions[activeIndex]) {
      event.preventDefault();
      runAction(filteredActions[activeIndex]);
    }
  };

  return createPortal(
    <div
      className="z-50 bg-black/50 fixed inset-0 flex items-center justify-center"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) close();
      }}
    >
      <div className="max-w-xl w-full bg-background rounded-lg overflow-hidden shadow-xl">
        <input
          ref={searchRef}
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          onKeyDown={handleSearchKeyDown}
          aria-label="Search commands"
          className="py-3 px-4 text-base w-full box-border outline-none border-none bg-transparent text-foreground"
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="off"
          spellCheck={false}
          data-bwignore="true"
          data-1p-ignore="true"
          data-lpignore="true"
        />
        <div role="listbox">
          {filteredActions.map((action, index) => (
            <div key={action.id}>
              {(index === 0 || filteredActions[index - 1].section !== action.section) && (
                <div className="px-4 py-2 text-xs uppercase text-muted-foreground">
                  {action.section}
                </div>
              )}
              <button
                type="button"
                role="option"
                aria-selected={activeIndex === index}
                onClick={() => runAction(action)}
                className={`px-4 py-2 flex items-center justify-between cursor-pointer w-full text-left border-0 ${activeIndex === index ? "bg-accent" : "bg-transparent"
                  }`}
              >
                <span className="flex items-center gap-2">
                  {action.icon && <span className="text-lg">{action.icon}</span>}
                  <span>{action.name}</span>
                </span>
                {action.shortcut && (
                  <span className="flex gap-1">
                    {action.shortcut.map((shortcut, shortcutIndex) => (
                      <kbd
                        key={`${shortcut}-${shortcutIndex}`}
                        className="px-2 py-1 text-xs rounded bg-muted"
                      >
                        {formatShortcut(shortcut)}
                      </kbd>
                    ))}
                  </span>
                )}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>,
    document.body
  );
}
