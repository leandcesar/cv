"use client";

import { cloneElement, useEffect, useId, useState, type ReactElement } from "react";

export function Tooltip({ label, children }: { label: string; children: ReactElement }) {
  const [visible, setVisible] = useState(false);
  const [pointerInside, setPointerInside] = useState(false);
  const id = useId();

  useEffect(() => {
    if (!visible || pointerInside) return;
    const timer = window.setTimeout(() => setVisible(false), 120);
    return () => window.clearTimeout(timer);
  }, [pointerInside, visible]);

  const trigger = cloneElement(children, { "aria-describedby": id });

  return <span className="tooltip" onPointerEnter={() => { setPointerInside(true); setVisible(true); }}
    onPointerLeave={() => { setPointerInside(false); setVisible(false); }}
    onFocus={() => setVisible(true)} onBlur={() => setVisible(false)}>
    {trigger}
    <span id={id} role="tooltip" className="tooltip-content" data-state={visible ? "open" : "closed"}>
      {label}
    </span>
  </span>;
}
