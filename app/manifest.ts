import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: "Leandro César",
        short_name: "Leandro César",
        description: "Leandro César — Tech Lead e Engenheiro.",
        start_url: "/pt",
        display: "standalone",
        background_color: "#faf9f6",
        theme_color: "#faf9f6",
        icons: [
            { src: "/android-chrome-192x192.webp", sizes: "192x192", type: "image/webp" },
            { src: "/android-chrome-512x512.webp", sizes: "512x512", type: "image/webp" },
        ],
    };
}
