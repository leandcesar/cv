import { existsSync } from "node:fs";
import { join } from "node:path";

/**
 * Local brand assets used by recognizable résumé links.
 *
 * The files are intentionally optional: the link component removes an icon
 * when the corresponding asset has not been provided yet.
 */
export const brandIcons = {
  cloudia: { light: "/brands/cloudia-light.svg", dark: "/brands/cloudia-dark.svg" },
  basf: { light: "/brands/basf-light.svg", dark: "/brands/basf-dark.svg" },
  "unifei": { light: "/brands/unifei-light.svg", dark: "/brands/unifei-dark.svg" },
  "ball-corporation": { light: "/brands/ball-corporation-light.svg", dark: "/brands/ball-corporation-dark.svg" },
  "ex-machina": { light: "/brands/ex-machina-light.svg", dark: "/brands/ex-machina-dark.svg" },
  "peak-detection": { light: "/brands/peak-detection-light.svg", dark: "/brands/peak-detection-dark.svg" },
  "enhancer-for-letterboxd": { light: "/brands/enhancer-for-letterboxd-light.svg", dark: "/brands/enhancer-for-letterboxd-dark.svg" },
  themoviedb: { light: "/brands/themoviedb-light.svg", dark: "/brands/themoviedb-dark.svg" },
  "onthisday-watch": { light: "/brands/onthisday-watch-light.svg", dark: "/brands/onthisday-watch-dark.svg" },
} as const;

export type Brand = keyof typeof brandIcons;
export type BrandIconSources = (typeof brandIcons)[Brand];

export function brandIconSrc(brand?: Brand) {
  if (!brand) return undefined;
  const sources = brandIcons[brand];
  const publicDirectory = join(process.cwd(), "public");
  return Object.values(sources).every((src) => existsSync(join(publicDirectory, src.slice(1))))
    ? sources
    : undefined;
}
