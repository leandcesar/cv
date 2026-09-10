"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Dialog } from "@/components/ui/dialog";

const portraitAngles = [0, 45, 90, 135, 180, 225, 270, 315] as const;
const frontPortrait = "/360.webp";
const expandedPortrait = "/favicon-2560x2560.png";

export function Portrait({ label, title, closeLabel }: { label: string; title: string; closeLabel: string }) {
  const [open, setOpen] = useState(false);
  const [portraitSource, setPortraitSource] = useState(frontPortrait);
  const portraitRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const imageSources = portraitAngles.map((angle) => `/${angle}.webp`);
    imageSources.forEach((source) => {
      const image = new window.Image();
      image.src = source;
    });

    const updatePortrait = (event: PointerEvent) => {
      const element = portraitRef.current;
      if (!element) return;

      const bounds = element.getBoundingClientRect();
      const isPointerInside = event.clientX >= bounds.left && event.clientX <= bounds.right
        && event.clientY >= bounds.top && event.clientY <= bounds.bottom;

      if (isPointerInside) {
        setPortraitSource(frontPortrait);
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

      setPortraitSource(`/${nearestAngle}.webp`);
    };

    window.addEventListener("pointermove", updatePortrait);
    return () => window.removeEventListener("pointermove", updatePortrait);
  }, []);

  return <>
    <button ref={portraitRef} type="button" className="portrait" aria-label={label} aria-haspopup="dialog" onClick={() => setOpen(true)}>
      <Image src={portraitSource} alt="Leandro César" width={225} height={225}
        sizes="(max-width: 600px) 96px, 225px" priority />
    </button>
    <Dialog open={open} onClose={() => setOpen(false)} title={title} closeLabel={closeLabel} className="photo-dialog">
      {open && <Image src={expandedPortrait} alt="Leandro César" width={720} height={720}
        sizes="(max-width: 760px) 90vw, 720px" className="expanded-portrait" />}
    </Dialog>
  </>;
}
