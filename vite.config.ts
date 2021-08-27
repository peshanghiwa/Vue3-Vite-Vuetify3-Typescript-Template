import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

import path from "path";
const srcPath = path.resolve(__dirname, "src", "styles", "variables.scss");

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  define: { "process.env": {} },
  css: {
    preprocessorOptions: {
      sass: { additionalData: `@import ${srcPath}\n` },
      scss: { additionalData: `@import ${srcPath};\n` },
    },
  },
});
