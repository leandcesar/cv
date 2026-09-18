"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Dialog } from "@/components/ui/dialog";

const portraitAngles = [0, 45, 90, 135, 180, 225, 270, 315] as const;
const frontPortrait = "/360.webp";
const expandedPortrait = "/favicon-2560x2560.webp";

export function Portrait({ label, title, closeLabel }: { label: string; title: string; closeLabel: string }) {
  const [open, setOpen] = useState(false);
  const [portraitSource, setPortraitSource] = useState(frontPortrait);
  const portraitRef = useRef<HTMLButtonElement>(null);
  const portraitSourceRef = useRef(frontPortrait);
  const pointerRef = useRef<PointerEvent | null>(null);
  const frameRef = useRef<number | null>(null);

  useEffect(() => {
    const updatePortrait = () => {
      frameRef.current = null;
      const event = pointerRef.current;
      const element = portraitRef.current;
      if (!event || !element) return;

      const bounds = element.getBoundingClientRect();
      const isPointerInside = event.clientX >= bounds.left && event.clientX <= bounds.right
        && event.clientY >= bounds.top && event.clientY <= bounds.bottom;

      if (isPointerInside) {
        if (portraitSourceRef.current !== frontPortrait) {
          portraitSourceRef.current = frontPortrait;
          setPortraitSource(frontPortrait);
        }
        return;
      }

      const centerX = bounds.left + bounds.width / 2;
      const centerY = bounds.top + bounds.height / 2;
      const angle = (Math.atan2(event.clientX - centerX, centerY - event.clientY) * 180 / Math.PI + 360) % 360;
      const nearestAngle = portraitAngles.reduce((nearest, candidate) => {
        const distance = Math.abs(angle - candidate);
        const wrappedDistance = Math.min(distance, 360 - distance);
        const nearestDistance = Math.min(Math.abs(angle - nearest), 360 - Math.abs(angle - nearest));
        return wrappedDistance < nearestDistance ? candidate : nearest;
      }, portraitAngles[0]);

      const nextSource = `/${nearestAngle}.webp`;
      if (portraitSourceRef.current !== nextSource) {
        portraitSourceRef.current = nextSource;
        setPortraitSource(nextSource);
      }
    };

    const onPointerMove = (event: PointerEvent) => {
      pointerRef.current = event;
      if (frameRef.current === null) frameRef.current = requestAnimationFrame(updatePortrait);
    };

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onPointerMove);
      if (frameRef.current !== null) cancelAnimationFrame(frameRef.current);
    };
  }, []);

  return <>
    <button ref={portraitRef} type="button" className="portrait" aria-label={label} aria-haspopup="dialog" onClick={() => setOpen(true)}>
      <Image src={portraitSource} alt="Leandro César" width={320} height={320}
        sizes="(max-width: 760px) 150px, 320px" priority />
    </button>
    <Dialog open={open} onClose={() => setOpen(false)} title={title} closeLabel={closeLabel} className="photo-dialog">
      {open && <Image src={expandedPortrait} alt="Leandro César" width={720} height={720}
        sizes="(max-width: 760px) 90vw, 720px" className="expanded-portrait" />}
    </Dialog>
  </>;
}
