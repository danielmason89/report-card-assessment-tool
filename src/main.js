import { createApp } from "vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { registerSW } from "virtual:pwa-register";
import {
  faTwitter,
  faLinkedin,
  faInstagram,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";

if ("serviceWorker" in navigator) {
  // && !/localhost/.test(window.location)) {
  registerSW();
}

library.add(fas, faTwitter, faLinkedin, faInstagram, faFacebook);

router.beforeEach((to, from, next) => {
  const isAuthenticated = store.getters["isAuthenticated"];
  if (isAuthenticated === true) {
    console.log("isAuthenticated", isAuthenticated);
    next();
  } else if (["Home", "About", "Contact", "Quiz"].includes(to.name)) {
    next();
  } else {
    next({ name: "Home", query: { redirect: to.fullPath } });
  }
});

const app = createApp(App);
app.use(store);
app.use(router);
app.component("font-awesome-icon", FontAwesomeIcon);
app.mount("#app");
