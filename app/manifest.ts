import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: "Leandro César",
        short_name: "Leandro César",
        description: "Leandro César — liderança técnica, backend e inteligência artificial.",
        start_url: "/pt",
        display: "standalone",
        background_color: "#faf9f6",
        theme_color: "#faf9f6",
        icons: [
            { src: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
            { src: "/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
        ],
    };
}
