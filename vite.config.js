import autoprefixer from "autoprefixer";
import { defineConfig } from "vite";

export default defineConfig({
  base: '/beauty-glow-landing/',
  css: {
    postcss: {
      plugins: [autoprefixer()],
    },
  },
});
