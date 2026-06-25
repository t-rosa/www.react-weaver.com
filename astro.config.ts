// @ts-check
import tailwindcss from "@tailwindcss/vite";
import { defineConfig, fontProviders, svgoOptimizer } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://www.react-weaver.com",
  compressHTML: true,
  vite: {
    plugins: [tailwindcss()],
  },
  fonts: [
    {
      provider: fontProviders.fontsource(),
      name: "Inter",
      cssVariable: "--font-inter",
    },
    {
      provider: fontProviders.fontsource(),
      name: "IBM Plex Mono",
      cssVariable: "--font-ibm-plex-mono",
    },
  ],
  experimental: {
    svgOptimizer: svgoOptimizer(),
  },
});
