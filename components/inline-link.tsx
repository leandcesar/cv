import { ArrowUpRight } from "lucide-react";
import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { BrandIcon } from "@/components/brand-icon";
import { brandIconSrc, type Brand } from "@/lib/brands";

type InlineLinkProps = Omit<ComponentPropsWithoutRef<"a">, "children"> & {
  children: ReactNode;
  brand?: Brand;
  showExternalIndicator?: boolean;
};

export function InlineLink({
  children,
  brand,
  showExternalIndicator = true,
  className,
  ...props
}: InlineLinkProps) {
  const iconSrc = brandIconSrc(brand);

  return <a {...props} className={className ? `inline-link ${className}` : "inline-link"}>
    {iconSrc && <BrandIcon src={iconSrc} />}
    {children}
    {showExternalIndicator && <ArrowUpRight className="inline-link-indicator" size={14} aria-hidden="true" />}
  </a>;
}
