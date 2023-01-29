import { fileURLToPath } from "url";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import {ViteEjsPlugin} from "vite-plugin-ejs";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), ViteEjsPlugin({
    title: 'Report Card Assessment Tool Capstone Project',
  })],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
