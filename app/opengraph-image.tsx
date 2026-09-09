import SocialImage, { alt, contentType, size } from "./[locale]/opengraph-image";

export { alt, contentType, size };

export default function OpenGraphImage() {
    return SocialImage({ params: Promise.resolve({ locale: "pt" }) });
}