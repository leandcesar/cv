"use client";

import type { MouseEvent, ReactNode } from "react";

export function ScrollToResume({ children, label }: { children: ReactNode; label?: string }) {
  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    event.preventDefault();
    const target = document.getElementById("resume");
    if (!target) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.history.pushState(null, "", "#resume");
    target.scrollIntoView({ block: "start", behavior: reducedMotion ? "auto" : "smooth" });
    document.getElementById("resume-content")?.focus({ preventScroll: true });
  }

  return <a className="button button-primary" href="#resume" aria-controls="resume-content" aria-label={label} onClick={handleClick}>
    {children}
  </a>;
}
