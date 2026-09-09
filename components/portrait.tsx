"use client";

import Image from "next/image";
import { useState } from "react";
import { Dialog } from "@/components/ui/dialog";

export function Portrait({ label, title, closeLabel }: { label: string; title: string; closeLabel: string }) {
  const [open, setOpen] = useState(false);
  return <>
    <button type="button" className="portrait" aria-label={label} aria-haspopup="dialog" onClick={() => setOpen(true)}>
      <Image src="/image-2560x2560.webp" alt="Leandro César" width={160} height={160}
        sizes="(max-width: 600px) 96px, 160px" priority />
    </button>
    <Dialog open={open} onClose={() => setOpen(false)} title={title} closeLabel={closeLabel} className="photo-dialog">
      {open && <Image src="/image-2560x2560.webp" alt="Leandro César" width={720} height={720}
        sizes="(max-width: 760px) 90vw, 720px" className="expanded-portrait" />}
    </Dialog>
  </>;
}
