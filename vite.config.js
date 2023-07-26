import { fileURLToPath } from "url";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { ViteEjsPlugin } from "vite-plugin-ejs";
import { VitePWA } from "vite-plugin-pwa";
import eslint from "vite-plugin-eslint";
import VueRouter from "unplugin-vue-router/vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    VueRouter(),
    vue(),
    VitePWA({
      manifest: {},
      base: "/",
      registerType: "autoUpdate",
      strategies: "injectManifest", // Change the mode to "injectManifest"
      injectRegister: "auto",
      devOptions: {
        enabled: true,
      },
      srcDir: "src", // Use 'srcDir' property instead of 'swSrc'
      outDir: "dist", // Use 'outDir' property instead of 'swDest'
      workbox: {},
    }),
    ViteEjsPlugin({
      title: "Assessify",
    }),
  ],
  build: {
    sourcemap: true,
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
