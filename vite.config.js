import { fileURLToPath } from "url";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { ViteEjsPlugin } from "vite-plugin-ejs";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
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
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
