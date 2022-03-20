import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueI18n from "@intlify/vite-plugin-vue-i18n";

import { join, resolve } from "path";
export default defineConfig({
  mode: "development",
  resolve: {
    alias: {
      "@": join(__dirname, "./src"),
    },
  },
  plugins: [
    vue(),
    vueI18n({
      include: resolve(__dirname, "./locales/**"),
      runtimeOnly: false
    }),
  ],
  define: { "process.env": {} },
  css: {
    preprocessorOptions: {
      scss: { additionalData: ` @import "@/styles/variables.scss";` },
    },
  },
});
