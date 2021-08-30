import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueI18n from "@intlify/vite-plugin-vue-i18n";
import path from "path";
// const srcPath = path.resolve(__dirname, "src", "styles", "variables.scss");

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueI18n({
      include: path.resolve(__dirname, "./path/to/src/locales/**"),
    }),
  ],
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
