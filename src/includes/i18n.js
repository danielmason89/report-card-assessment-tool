import { createI18n } from "vue-i18n";
import en from "@/locales/en.json";
import fr from "@/locales/fr.json";
import ko from "@/locales/ko.json";
import it from "@/locales/it.json";
import vi from "@/locales/vi.json";
import ja from "@/locales/ja.json";

export default createI18n({
  locale: "en",
  fallbackLocale: "en",
  messages: {
    en,
    fr,
    ko,
    it,
    vi,
    ja,
  },
  numberFormats: {
    en: {
      style: "currency",
      currency: "USD",
    },
    it: {
      style: "currency",
      currency: "EUR",
    },
    fr: {
      style: "currency",
      currency: "CAD",
    },
    ko: {
      style: "currency",
      currency: "KRW",
    },
    vi: {
      style: "currency",
      currency: "VND",
    },
    ja: {
      style: "currency",
      currency: "JPY",
    },
  },
});
