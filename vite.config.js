import { fileURLToPath } from "url";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import {ViteEjsPlugin} from "vite-plugin-ejs";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), ViteEjsPlugin({
    title: 'Assessify',
  })],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
