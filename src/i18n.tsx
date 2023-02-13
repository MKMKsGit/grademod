import i18next from "i18next";
import { initReactI18next } from "react-i18next";

import sidebarEnglish from "./locales/en/sidebar.json";
import sidebarThai from "./locales/th/sidebar.json";

const resources = {
  en: {
    sidebar: sidebarEnglish,
  },
  th: {
    sidebar: sidebarThai,
  },
};

i18next.use(initReactI18next).init({
  resources,
  lng: "th",
  fallbackLng: "th",
});

export default i18next;
