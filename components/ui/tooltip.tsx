"use client";

import { useEffect, useId, useState, type ReactNode } from "react";

export function Tooltip({ label, children }: { label: string; children: ReactNode }) {
  const [visible, setVisible] = useState(false);
  const [pointerInside, setPointerInside] = useState(false);
  const id = useId();

  useEffect(() => {
    if (!visible || pointerInside) return;
    const timer = window.setTimeout(() => setVisible(false), 120);
    return () => window.clearTimeout(timer);
  }, [pointerInside, visible]);

  return <span className="tooltip" onPointerEnter={() => { setPointerInside(true); setVisible(true); }}
    onPointerLeave={() => { setPointerInside(false); setVisible(false); }}
    onFocus={() => setVisible(true)} onBlur={() => setVisible(false)}>
    {children}
    <span id={id} role="tooltip" className="tooltip-content" hidden={!visible}>{label}</span>
  </span>;
}
