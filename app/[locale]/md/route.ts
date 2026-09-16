import { getContent } from "@/locales";
import { isLocale } from "@/lib/i18n";
import { contentToMarkdown } from "@/lib/markdown";

type Props = { params: Promise<{ locale: string }> };

export async function GET(_request: Request, { params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale)) return new Response("Not Found\n", { status: 404 });

  const content = await getContent(locale);
  return new Response(contentToMarkdown(content), {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "Cache-Control": "public, max-age=0, s-maxage=3600",
    },
  });
}
