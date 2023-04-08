import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ChakraUIVuePlugin from "@chakra-ui/vue-next";
import { registerSW } from "virtual:pwa-register";

if ("serviceWorker" in navigator) {
  // && !/localhost/.test(window.location)) {
  registerSW();
}

router.beforeEach((to, from) => {
  if (["Login", "Home", "About", "Contact"].includes(to.name)) {
    return true;
  }
  return { name: "Login", query: { redirect: to.fullPath } };
});

const app = createApp(App);

app.use(store);
app.use(router);
app.use(ChakraUIVuePlugin);
app.mount("#app");
