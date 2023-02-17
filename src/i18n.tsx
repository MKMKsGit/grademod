import i18next from "i18next";
import { initReactI18next } from "react-i18next";

import sidebarEnglish from "./locales/en/sidebar.json";
import sidebarThai from "./locales/th/sidebar.json";
import registerEnglish from "./locales/en/register.json";
import registerThai from "./locales/th/register.json";

const resources = {
  en: {
    sidebar: sidebarEnglish,
    register: registerEnglish,
  },
  th: {
    sidebar: sidebarThai,
    register: registerThai,
  },
};

i18next.use(initReactI18next).init({
  resources,
  lng: "th",
  fallbackLng: "th",
});

export default i18next;
