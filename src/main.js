import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ChakraUIVuePlugin from '@chakra-ui/vue-next'

createApp(App).use(store).use(router).use(ChakraUIVuePlugin).mount("#app");
