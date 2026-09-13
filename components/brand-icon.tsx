"use client";

import Image from "next/image";
import { useState } from "react";
import type { BrandIconSources } from "@/lib/brands";

export function BrandIcon({ src }: { src: BrandIconSources }) {
  const [available, setAvailable] = useState(true);

  if (!available) return null;

  return <>
    <Image
      src={src.light}
      alt=""
      aria-hidden="true"
      width={18}
      height={18}
      unoptimized
      className="inline-link-brand inline-link-brand-light"
      onError={() => setAvailable(false)}
    />
    <Image
      src={src.dark}
      alt=""
      aria-hidden="true"
      width={18}
      height={18}
      unoptimized
      className="inline-link-brand inline-link-brand-dark"
      onError={() => setAvailable(false)}
    />
  </>;
}
