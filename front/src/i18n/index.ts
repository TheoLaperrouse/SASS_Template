import i18next from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { en } from "./locales/en";
import { fr } from "./locales/fr";

i18next.use(LanguageDetector).init({
    debug: false,
    fallbackLng: "fr",
    resources: {
        en: { translation: en },
        fr: { translation: fr },
    },
    detection: {
        order: ["localStorage", "navigator"],
        caches: ["localStorage"],
    },
});

export default i18next;
