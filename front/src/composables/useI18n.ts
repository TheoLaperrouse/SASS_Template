import { ref, computed, nextTick } from "vue";
import i18next from "../i18n";

const currentLanguage = ref(i18next.language);

i18next.on("languageChanged", (lng) => {
    currentLanguage.value = lng;
});

export function useI18n() {
    const changeLanguage = async (lang: string) => {
        await i18next.changeLanguage(lang);
        await nextTick();
    };

    const t = (key: string, options?: Record<string, unknown>) => i18next.t(key, options);

    return {
        currentLanguage: computed(() => currentLanguage.value),
        changeLanguage,
        t,
    };
}
