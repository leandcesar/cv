"use client";

import { useEffect, useRef, useState } from "react";
import { Command, Search } from "lucide-react";
import { Dialog } from "@/components/ui/dialog";
import type { UI } from "@/locales/ui";

export type CommandAction = {
  id: string;
  name: string;
  section: string;
  keywords?: string;
  href?: string;
  perform?: () => void;
};

const normalize = (value: string) => value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();

export function CommandPalette({ actions, ui }: { actions: CommandAction[]; ui: UI }) {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [active, setActive] = useState(0);
  const [isMac, setIsMac] = useState(false);
  const searchRef = useRef<HTMLInputElement>(null);
  const resultsRef = useRef<HTMLDivElement>(null);
  const query = normalize(search).trim();
  const filtered = actions.filter((action) => query.split(/\s+/).every((word) =>
    normalize(`${action.name} ${action.keywords ?? ""} ${action.section}`).includes(word)));
  const groups = Array.from(new Set(filtered.map((action) => action.section)));
  const ordered = groups.flatMap((group) => filtered.filter((action) => action.section === group));
  const activeIndex = Math.min(active, ordered.length - 1);

  function openPalette() {
    setSearch("");
    setActive(0);
    setOpen(true);
  }

  useEffect(() => {
    setIsMac(/Mac|iPhone|iPad/.test(navigator.platform));
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.isComposing || event.repeat || event.altKey || event.shiftKey) return;
      if (!(event.ctrlKey || event.metaKey) || event.key.toLowerCase() !== "k") return;
      // Do not open a second modal or intercept shortcuts while editing another field.
      if (document.querySelector("dialog[open]") && !open) return;
      const target = event.target;
      if (!open && target instanceof HTMLElement && target.closest("input, textarea, select, [contenteditable='true']")) return;
      event.preventDefault();
      if (open) setOpen(false);
      else { setSearch(""); setActive(0); setOpen(true); }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  useEffect(() => {
    if (open) resultsRef.current?.querySelector('[aria-selected="true"]')?.scrollIntoView({ block: "nearest" });
  }, [activeIndex, open, search]);

  function run(action: CommandAction) {
    setOpen(false);
    if (action.href) window.location.assign(action.href);
    else action.perform?.();
  }

  return <>
    <button type="button" className="utility-button command-trigger" onClick={openPalette}
      aria-haspopup="dialog" aria-keyshortcuts="Control+k Meta+k" aria-describedby="command-shortcut">
      <Command size={16} aria-hidden="true" /><span>{ui.commands}</span>
      <kbd aria-hidden="true">{isMac ? "⌘" : "Ctrl"} K</kbd>
    </button>
    <span id="command-shortcut" className="sr-only">Ctrl + K {ui.or} ⌘ + K</span>
    <Dialog open={open} onClose={() => setOpen(false)} title={ui.commands} closeLabel={ui.close} initialFocus={searchRef}>
      <div className="command-search">
        <Search size={18} aria-hidden="true" />
        <input ref={searchRef} role="combobox" aria-expanded={open} aria-controls="command-results"
          aria-autocomplete="list" aria-activedescendant={activeIndex >= 0 ? `command-${ordered[activeIndex].id}` : undefined}
          aria-label={ui.searchLabel} placeholder={ui.search} value={search}
          onChange={(event) => { setSearch(event.target.value); setActive(0); }}
          onKeyDown={(event) => {
            if (event.nativeEvent.isComposing) return;
            if (event.key === "ArrowDown" || event.key === "ArrowUp") {
              event.preventDefault();
              const delta = event.key === "ArrowDown" ? 1 : -1;
              if (ordered.length) setActive((activeIndex + delta + ordered.length) % ordered.length);
            }
            if (event.key === "Enter" && ordered[activeIndex]) {
              event.preventDefault(); run(ordered[activeIndex]);
            }
          }}
          autoComplete="off" autoCorrect="off" autoCapitalize="off" spellCheck={false} />
      </div>
      <div ref={resultsRef} id="command-results" className="command-results" role="listbox" aria-label={ui.results}>
        {groups.map((group, groupIndex) => <div role="group" aria-labelledby={`command-group-${groupIndex}`} key={group}>
          <div id={`command-group-${groupIndex}`} className="command-group" role="presentation">{group}</div>
          {ordered.filter((action) => action.section === group).map((action) => {
            const index = ordered.indexOf(action);
            return <div id={`command-${action.id}`} key={action.id} role="option" aria-selected={activeIndex === index}
              className="command-option" onMouseDown={(event) => event.preventDefault()}
              onClick={() => run(action)}>
              <span>{action.name}</span><span aria-hidden="true">{action.href?.startsWith("https:") ? "↗" : "↵"}</span>
            </div>;
          })}
        </div>)}
      </div>
      <p role="status" className={ordered.length ? "sr-only" : "command-empty"}>
        {ordered.length ? `${ui.results}: ${ordered.length}` : ui.noResults}
      </p>
      <div className="command-help small muted">
        <span><kbd>↑ ↓</kbd> {ui.navigate}</span><span><kbd>↵</kbd> {ui.open}</span><span><kbd>Esc</kbd> {ui.close}</span>
      </div>
    </Dialog>
  </>;
}
