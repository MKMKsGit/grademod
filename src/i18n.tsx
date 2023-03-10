import i18next from "i18next";
import { initReactI18next } from "react-i18next";

import sidebarEnglish from "./locales/en/sidebar.json";
import sidebarThai from "./locales/th/sidebar.json";
import filterEnglish from "./locales/en/filter.json";
import filterThai from "./locales/th/filter.json";

import registerEnglish from "./locales/en/register.json";
import registerThai from "./locales/th/register.json";
import loginEnglish from "./locales/en/login.json";
import loginThai from "./locales/th/login.json";
import userDashboardEnglish from "./locales/en/userDashboard.json";
import userDashboardThai from "./locales/th/userDashboard.json";
import schoolEnglish from "./locales/en/school.json";
import schoolThai from "./locales/th/school.json";

const resources = {
  en: {
    filter: filterEnglish,
    sidebar: sidebarEnglish,
    register: registerEnglish,
    login: loginEnglish,
    userDashboard: userDashboardEnglish,
    school: schoolEnglish,
  },
  th: {
    filter: filterThai,
    sidebar: sidebarThai,
    register: registerThai,
    login: loginThai,
    userDashboard: userDashboardThai,
    school: schoolThai,
  },
};

i18next.use(initReactI18next).init({
  resources,
  lng: "th",
  fallbackLng: "th",
});

export default i18next;
