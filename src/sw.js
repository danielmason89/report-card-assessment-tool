import { precacheAndRoute } from "workbox-precaching";
import { clientsClaim } from "workbox-core";

clientsClaim();
precacheAndRoute(self.__WB_MANIFEST);
