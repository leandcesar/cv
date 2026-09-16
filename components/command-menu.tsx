"use client";

import { ChevronRight, Command, Search } from "lucide-react";
import { useCallback, useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import { createPortal } from "react-dom";
import { cn } from "@/lib/utils";

export type CommandMenuAction = {
  id: string;
  name: string;
  section?: string;
  keywords?: string;
  icon?: ReactNode;
  shortcut?: string[];
  hint?: string;
  badge?: string;
  crumb?: string;
  hidden?: boolean;
  disabled?: boolean;
  href?: string;
  perform?: () => void;
  children?: CommandMenuAction[];
};

const OPEN_EVENT = "kobra:open-command-menu";
const normalize = (value: string) => value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();

export function openCommandMenu(scope?: string) {
  window.dispatchEvent(new CustomEvent(OPEN_EVENT, { detail: { scope } }));
}

declare global {
  interface WindowEventMap {
    [OPEN_EVENT]: CustomEvent<{ scope?: string }>;
  }
}

function flatten(actions: CommandMenuAction[], query: string) {
  const words = normalize(query).trim().split(/\s+/).filter(Boolean);
  return actions.filter((action) => !action.hidden || words.length).filter((action) => {
    const haystack = normalize(`${action.name} ${action.keywords ?? ""} ${action.section ?? ""}`);
    return words.every((word) => haystack.includes(word));
  });
}

export function CommandMenu({ actions, ui, className }: { actions: CommandMenuAction[]; ui: {
  commands: string; search: string; searchLabel: string; results: string; noResults: string;
  navigate: string; open: string; close: string; or: string;
}; className?: string }) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);
  const [scope, setScope] = useState<CommandMenuAction | null>(null);
  const [isMac, setIsMac] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const resultsRef = useRef<HTMLDivElement>(null);

  const currentActions = scope?.children ?? actions;
  const filtered = useMemo(() => flatten(currentActions, query), [currentActions, query]);
  const groups = useMemo(() => [...new Set(filtered.map((action) => action.section).filter(Boolean))] as string[], [filtered]);
  const activeIndex = filtered.length ? Math.min(active, filtered.length - 1) : -1;

  const close = useCallback(() => {
    setOpen(false);
    setScope(null);
    requestAnimationFrame(() => triggerRef.current?.focus({ preventScroll: true }));
  }, []);

  const show = useCallback((nextScope?: string) => {
    const next = nextScope ? actions.find((action) => action.id === nextScope) ?? null : null;
    setScope(next);
    setQuery("");
    setActive(0);
    setOpen(true);
  }, [actions]);

  useEffect(() => {
    setIsMac(/Mac|iPhone|iPad/.test(navigator.platform));
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.isComposing || event.repeat || event.altKey || event.shiftKey) return;
      if (document.querySelector("dialog[open]")) return;
      if (!(event.ctrlKey || event.metaKey) || event.key.toLowerCase() !== "k") return;
      if (!open && event.target instanceof HTMLElement && event.target.closest("input, textarea, select, [contenteditable='true']")) return;
      event.preventDefault();
      if (open) close(); else show();
    };
    const onOpen = (event: WindowEventMap[typeof OPEN_EVENT]) => show(event.detail?.scope);
    document.addEventListener("keydown", onKeyDown);
    window.addEventListener(OPEN_EVENT, onOpen);
    return () => { document.removeEventListener("keydown", onKeyDown); window.removeEventListener(OPEN_EVENT, onOpen); };
  }, [close, open, show]);

  useEffect(() => { if (open) requestAnimationFrame(() => inputRef.current?.focus()); }, [open, scope]);
  useEffect(() => { resultsRef.current?.querySelector<HTMLElement>('[aria-selected="true"]')?.scrollIntoView({ block: "nearest" }); }, [activeIndex, open, query]);

  const run = (action: CommandMenuAction) => {
    if (action.children?.length) { setScope(action); setQuery(""); setActive(0); return; }
    close();
    if (action.href) window.location.assign(action.href); else action.perform?.();
  };

  const renderAction = (action: CommandMenuAction) => {
    const index = filtered.indexOf(action);
    return <button key={action.id} id={`command-${action.id}`} type="button" role="option" aria-selected={index === activeIndex}
      disabled={action.disabled} onMouseEnter={() => setActive(index)}
      onClick={() => run(action)} className={cn("flex min-h-11 w-full items-center justify-between gap-4 rounded-md border border-transparent px-3 py-2 text-left text-sm transition-colors hover:bg-[var(--hover)] aria-selected:border-[var(--control-border)] aria-selected:bg-[var(--hover)] disabled:opacity-50", index === activeIndex && "border-[var(--control-border)] bg-[var(--hover)]")}>
      <span className="flex min-w-0 items-center gap-3"><span className="flex size-8 shrink-0 items-center justify-center rounded-md bg-[var(--background)] text-[var(--muted-foreground)]">{action.icon ?? <Command size={16} aria-hidden="true" />}</span><span className="truncate">{action.name}</span></span>
      {action.badge ? <span className="rounded border border-[var(--border)] px-1.5 text-xs text-[var(--muted-foreground)]">{action.badge}</span> : action.children ? <ChevronRight size={16} aria-hidden="true" /> : action.shortcut ? <span className="flex gap-1">{action.shortcut.map((key) => <kbd key={key}>{key}</kbd>)}</span> : action.hint ? <span className="text-xs text-[var(--muted-foreground)]">{action.hint}</span> : null}
    </button>;
  };

  return <>
    <button ref={triggerRef} type="button" className="utility-button command-trigger" onClick={() => show()} aria-haspopup="dialog" aria-keyshortcuts="Control+k Meta+k" aria-describedby="command-shortcut"><Command size={16} aria-hidden="true" /><span>{ui.commands}</span><kbd aria-hidden="true">{isMac ? "⌘" : "Ctrl"} K</kbd></button>
    <span id="command-shortcut" className="sr-only">Ctrl + K {ui.or} ⌘ + K</span>
    {open ? createPortal(<div className="fixed inset-0 z-50 flex items-start justify-center bg-black/60 p-4 pt-[12vh]" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) close(); }}>
      <div ref={dialogRef} role="dialog" aria-modal="true" aria-label={ui.commands} className={cn("w-full max-w-xl overflow-hidden rounded-lg border border-[var(--control-border)] bg-[var(--surface)] text-[var(--foreground)] shadow-2xl", className)} onKeyDown={(event) => {
        if (event.key === "Escape") { event.preventDefault(); close(); }
        if (event.key === "Backspace" && !query && scope) { event.preventDefault(); setScope(null); }
        if (event.key === "ArrowDown" || event.key === "ArrowUp") { event.preventDefault(); if (filtered.length) setActive((activeIndex + (event.key === "ArrowDown" ? 1 : -1) + filtered.length) % filtered.length); }
        if (event.key === "Enter" && filtered[activeIndex]) { event.preventDefault(); run(filtered[activeIndex]); }
        if (event.key === "Tab") { const focusable = Array.from(dialogRef.current?.querySelectorAll<HTMLElement>("button:not([disabled]), input") ?? []); if (focusable.length) { const next = event.shiftKey ? focusable.at(-1) : focusable[0]; if (document.activeElement === (event.shiftKey ? focusable[0] : focusable.at(-1))) { event.preventDefault(); next?.focus(); } } }
      }}>
        <div className="flex items-center gap-3 border-b border-[var(--border)] px-4 py-3"><Search size={18} className="text-[var(--muted-foreground)]" aria-hidden="true" /><input ref={inputRef} role="combobox" aria-expanded="true" aria-controls="command-results" aria-autocomplete="list" aria-activedescendant={activeIndex >= 0 ? `command-${filtered[activeIndex].id}` : undefined} aria-label={ui.searchLabel} placeholder={scope ? scope.crumb ?? scope.name : ui.search} value={query} onChange={(event) => { setQuery(event.target.value); setActive(0); }} autoComplete="off" spellCheck={false} className="min-h-11 w-full bg-transparent text-base outline-none placeholder:text-[var(--muted-foreground)]" /><kbd>Esc</kbd></div>
        {scope ? <div className="flex items-center gap-2 border-b border-[var(--border)] px-4 py-2 text-xs text-[var(--muted-foreground)]"><button type="button" onClick={() => setScope(null)}>Home</button><ChevronRight size={14} aria-hidden="true" /><span>{scope.crumb ?? scope.name}</span></div> : null}
        <div ref={resultsRef} id="command-results" role="listbox" aria-label={ui.results} className="max-h-[min(24rem,48dvh)] overflow-y-auto p-2">{groups.map((group) => <div key={group} role="group" aria-label={group}><div className="px-3 pb-1 pt-3 text-[var(--text-xs)] uppercase tracking-widest text-[var(--muted-foreground)]">{group}</div>{filtered.filter((action) => action.section === group).map(renderAction)}</div>)}{filtered.filter((action) => !action.section).map(renderAction)}{!filtered.length ? <p role="status" className="px-3 py-6 text-sm text-[var(--muted-foreground)]">{ui.noResults}</p> : null}</div>
        <div className="flex flex-wrap gap-x-4 gap-y-2 border-t border-[var(--border)] px-4 py-3 text-xs text-[var(--muted-foreground)]"><span><kbd>↑ ↓</kbd> {ui.navigate}</span><span><kbd>↵</kbd> {ui.open}</span><span><kbd>Esc</kbd> {ui.close}</span></div>
      </div>
    </div>, document.body) : null}
  </>;
}
