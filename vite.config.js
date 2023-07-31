import { fileURLToPath } from "url";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { ViteEjsPlugin } from "vite-plugin-ejs";
import { VitePWA } from "vite-plugin-pwa";
import eslint from "vite-plugin-eslint";
// import { visualizer } from "rollup-plugin-visualizer"
import VueRouter from "unplugin-vue-router/vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    VueRouter(),
    vue(),
    VitePWA({
      manifest: {
        name: "Assessify",
        theme_color: "#ffffff",
        icons: [
          {
            src: "./public/ios/192.png",
            sizes: "192x192",
            type: "image/png",
          },
        ],
      },
      base: "/",
      registerType: "autoUpdate",
      strategies: "injectManifest", // Change the mode to "injectManifest"
      injectRegister: "auto",
      devOptions: {
        enabled: true,
      },
      srcDir: "src", // Use 'srcDir' property instead of 'swSrc'
      outDir: "dist", // Use 'outDir' property instead of 'swDest'
      workbox: {
        globPatterns: ["**/*.{js,css,html.png,jpg,jpeg,svg}"],
      },
    }),
    ViteEjsPlugin({
      title: "Assessify",
    }),
    // visualizer({
    //   open : true
    // }),
  ],
  build: {
    sourcemap: true,
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  define: {
    __VUE_I18N_LEGACY_API__: false,
    __VUE_I18N_FULL_INSTALL__: false,
    __INTLIFY_PROD_DEVTOOLS__: false,
  },
});
