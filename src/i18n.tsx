import i18next from "i18next";
import { initReactI18next } from "react-i18next";

import sidebarEnglish from "./locales/en/sidebar.json";
import sidebarThai from "./locales/th/sidebar.json";
import registerEnglish from "./locales/en/register.json";
import registerThai from "./locales/th/register.json";
import loginEnglish from "./locales/en/login.json";
import loginThai from "./locales/th/login.json";

const resources = {
  en: {
    sidebar: sidebarEnglish,
    register: registerEnglish,
    login: loginEnglish,
  },
  th: {
    sidebar: sidebarThai,
    register: registerThai,
    login: loginThai,
  },
};

i18next.use(initReactI18next).init({
  resources,
  lng: "th",
  fallbackLng: "th",
});

export default i18next;
