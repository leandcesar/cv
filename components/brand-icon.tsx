import Image from "next/image";
import type { BrandIconSources } from "@/lib/brands";

export function BrandIcon({ src }: { src: BrandIconSources }) {
  return <>
    <Image
      src={src.light}
      alt=""
      aria-hidden="true"
      width={18}
      height={18}
      unoptimized
      className="inline-link-brand inline-link-brand-light"
    />
    <Image
      src={src.dark}
      alt=""
      aria-hidden="true"
      width={18}
      height={18}
      unoptimized
      className="inline-link-brand inline-link-brand-dark"
    />
  </>;
}
