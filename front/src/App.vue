<template>
    <div id="app" class="min-h-screen bg-gradient-elegant">
        <nav class="bg-white/80 backdrop-blur-md border-b border-neutral-200 sticky top-0 z-50">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex justify-between items-center h-16">
                    <router-link
                        to="/"
                        class="flex items-center space-x-2 text-2xl font-bold text-gradient-primary hover:scale-105 transition-transform"
                    >
                        <span class="text-white">🚀</span>
                        <span>MySaaS</span>
                    </router-link>
                    <div class="flex items-center space-x-6">
                        <router-link to="/" class="text-neutral-700 hover:text-primary font-medium transition-colors">
                            {{ t("nav.home") }}
                        </router-link>

                        <template v-if="isAuthenticated">
                            <router-link
                                to="/dashboard"
                                class="text-neutral-700 hover:text-primary font-medium transition-colors"
                            >
                                {{ t("nav.dashboard") }}
                            </router-link>
                            <button class="btn-outline text-sm" @click="handleLogout">
                                {{ t("nav.logout") }}
                            </button>
                        </template>

                        <template v-else>
                            <router-link
                                to="/login"
                                class="text-neutral-700 hover:text-primary font-medium transition-colors"
                            >
                                {{ t("nav.login") }}
                            </router-link>
                            <router-link to="/register" class="btn-primary text-sm">
                                {{ t("nav.register") }}
                            </router-link>
                        </template>
                        <LanguageSwitcher />
                    </div>
                </div>
            </div>
        </nav>
        <main>
            <router-view />
        </main>
    </div>
</template>

<script setup lang="ts">
import { useAuth } from "./composables/useAuth";
import { useI18n } from "./composables/useI18n";
import LanguageSwitcher from "./components/LanguageSwitcher.vue";

const { isAuthenticated, logout } = useAuth();
const { t } = useI18n();

const handleLogout = async () => {
    await logout();
};
</script>
