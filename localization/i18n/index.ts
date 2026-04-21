import i18n from "i18next";
import { getLocales } from "expo-localization";
import { initReactI18next } from "react-i18next";

import en from "./locales/en.json";
import id from "./locales/id.json";
import su from "./locales/su.json";

const deviceLanguage = getLocales()[0]?.languageCode ?? "en";

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    id: { translation: id },
    su: { translation: su },
  },
  lng: deviceLanguage,
  fallbackLng: "en",
});

export default i18n;
