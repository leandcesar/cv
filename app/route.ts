import { permanentRedirect } from "next/navigation";

export function GET(request: Request) {
  const acceptedLanguages = (request.headers.get("accept-language") ?? "")
    .split(",")
    .map((value) => {
      const [language, ...parameters] = value.trim().toLowerCase().split(";");
      const quality = Number(parameters.find((parameter) => parameter.trim().startsWith("q="))?.split("=")[1] ?? "1");
      return { language, quality: Number.isNaN(quality) ? 0 : quality };
    })
    .filter(({ language, quality }) => language && quality > 0)
    .sort((first, second) => second.quality - first.quality);
  const locale = acceptedLanguages[0]?.language.startsWith("pt") ? "pt" : "en";
  permanentRedirect(`/${locale}`);
}
