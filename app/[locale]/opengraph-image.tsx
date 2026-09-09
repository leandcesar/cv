import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { isLocale } from "@/lib/i18n";
import { getUI } from "@/locales/ui";

export const alt = "Leandro César — Leadership, backend & AI";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function SocialImage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const ui = getUI(isLocale(locale) ? locale : "pt");
  const font = await readFile(join(process.cwd(), "node_modules/geist/dist/fonts/geist-sans/Geist-Regular.ttf"));
  return new ImageResponse(
    <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", width: "100%", height: "100%", padding: "70px 80px", background: "#faf9f6", color: "#242624", fontFamily: "Geist" }}>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ fontSize: 84, letterSpacing: "-4px", lineHeight: 1.15 }}>Leandro César</div>
        <div style={{ fontSize: 38, color: "#355c43", marginTop: 22 }}>{ui.headline}</div>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", borderTop: "1px solid #dbddd5", paddingTop: 24, fontSize: 22, color: "#61655e" }}>
        <div>Python · LLM · AWS</div><div>leandcesar.vercel.app</div>
      </div>
    </div>,
    { ...size, fonts: [{ name: "Geist", data: font, weight: 400, style: "normal" }] },
  );
}
