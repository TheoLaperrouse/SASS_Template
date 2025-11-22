<template>
    <div ref="dropdownRef" class="relative">
        <button
            class="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-neutral-100 transition-colors"
            @click="isOpen = !isOpen"
        >
            <span class="text-xl">{{ currentFlag }}</span>
            <span class="text-sm font-medium hidden sm:inline">{{ currentLanguageName }}</span>
            <svg
                class="w-4 h-4 transition-transform"
                :class="{ 'rotate-180': isOpen }"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
            >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
        </button>
        <transition
            enter-active-class="transition ease-out duration-100"
            enter-from-class="transform opacity-0 scale-95"
            enter-to-class="transform opacity-100 scale-100"
            leave-active-class="transition ease-in duration-75"
            leave-from-class="transform opacity-100 scale-100"
            leave-to-class="transform opacity-0 scale-95"
        >
            <div
                v-if="isOpen"
                class="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-neutral-200 py-1 z-50"
            >
                <button
                    v-for="lang in languages"
                    :key="lang.code"
                    class="w-full flex items-center gap-3 px-4 py-2 text-left hover:bg-neutral-50 transition-colors"
                    :class="{ 'bg-primary-50 text-primary-700': currentLanguage === lang.code }"
                    @click="selectLanguage(lang.code)"
                >
                    <span class="text-xl">{{ lang.flag }}</span>
                    <span class="text-sm font-medium">{{ lang.name }}</span>
                    <svg
                        v-if="currentLanguage === lang.code"
                        class="w-5 h-5 ml-auto text-primary"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                    >
                        <path
                            fill-rule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clip-rule="evenodd"
                        />
                    </svg>
                </button>
            </div>
        </transition>
    </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from "vue";
import { useI18n } from "../composables/useI18n";

const { currentLanguage, changeLanguage } = useI18n();
const isOpen = ref(false);
const dropdownRef = ref<HTMLElement | null>(null);

const languages = [
    { code: "fr", name: "Français", flag: "🇫🇷" },
    { code: "en", name: "English", flag: "🇬🇧" },
];

const currentFlag = computed(() => languages.find((l) => l.code === currentLanguage.value)?.flag || "🌐");

const currentLanguageName = computed(() => languages.find((l) => l.code === currentLanguage.value)?.name || "");

const selectLanguage = async (lang: string) => {
    await changeLanguage(lang);
    isOpen.value = false;
};

const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.value && !dropdownRef.value.contains(event.target as Node)) {
        isOpen.value = false;
    }
};

onMounted(() => {
    document.addEventListener("click", handleClickOutside);
});

onUnmounted(() => {
    document.removeEventListener("click", handleClickOutside);
});
</script>
