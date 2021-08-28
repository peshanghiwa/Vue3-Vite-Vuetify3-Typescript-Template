import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

import path from "path";
// const srcPath = path.resolve(__dirname, "src", "styles", "variables.scss");

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": path.join(__dirname, "./src"),
    },
  },
  define: { "process.env": {} },
  css: {
    preprocessorOptions: {
      scss: { additionalData: ` @import "@/styles/variables.scss";` },
    },
  },
});
