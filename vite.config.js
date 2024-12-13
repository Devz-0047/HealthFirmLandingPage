import { defineConfig } from "vite";
import tailwindcss from "tailwindcss";

export default defineConfig({
  // Base URL for GitHub Pages deployment
  base: "/HealthFirmLandingPage/",

  // Tailwind CSS Configuration
  css: {
    postcss: {
      plugins: [tailwindcss],
    },
  },

  build: {
    rollupOptions: {
      input: "index.html",
    },
  },
});
