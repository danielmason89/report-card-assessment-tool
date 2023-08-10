import { createApp } from "vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import App from "./App.vue";
import router from "./router";
import { useLoginStore } from "@/store/loginStore";
import { createPinia } from "pinia";
import VeeValidatePlugin from "./plugins/validation";
import Icon from "./directives/icon";
import { registerSW } from "virtual:pwa-register";
import i18n from "./includes/i18n";
import GlobalComponents from "./includes/_globals";
import progressBar from "./includes/progress-bar";
import {
  faTwitter,
  faLinkedin,
  faInstagram,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import "nprogress/nprogress.css";
import "floating-vue/dist/style.css";
import "@fortawesome/fontawesome-free/css/all.css";

if ("serviceWorker" in navigator) {
  // && !/localhost/.test(window.location)) {
  registerSW({ immediate: true });
}

progressBar(router);

library.add(fas, faTwitter, faLinkedin, faInstagram, faFacebook);

router.beforeEach((to, from, next) => {
  const loginStore = useLoginStore();
  const isAuthenticated = loginStore.loggedIn;

  if (
    ["Home", "About", "Contact", "Quiz", "Faq"].includes(to.name) ||
    isAuthenticated
  ) {
    next();
  } else {
    next({ name: "Home", query: { redirect: to.fullPath } });
  }
});

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.component("font-awesome-icon", FontAwesomeIcon);
app.use(VeeValidatePlugin);
app.use(i18n);
app.use(GlobalComponents);
app.directive("icon", Icon);
app.mount("#app");
