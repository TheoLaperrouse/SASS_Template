<template>
    <div class="home">
        <section class="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
            <div class="max-w-6xl mx-auto text-center">
                <div
                    v-if="isAuthenticated"
                    class="inline-flex items-center px-4 py-2 bg-primary-50 border border-primary-200 rounded-full mb-8 animate-fade-in"
                >
                    <span class="w-2 h-2 bg-primary rounded-full mr-2 animate-pulse"></span>
                    <span class="text-sm font-medium text-primary-800">
                        {{ t("home.connectedAs") }} <strong>{{ user?.name }}</strong>
                    </span>
                </div>

                <h1 class="text-5xl md:text-7xl font-bold text-shadow-grey-900 mb-6 leading-tight">
                    {{ t("home.title") }}
                    <span class="text-gradient-primary">{{ t("home.titleHighlight") }}</span>
                    <br />
                    {{ t("home.titleEnd") }}
                </h1>

                <p class="text-xl md:text-2xl text-neutral-600 mb-10 max-w-3xl mx-auto leading-relaxed">
                    {{ t("home.subtitle") }}
                </p>

                <div class="flex flex-col sm:flex-row gap-4 justify-center">
                    <router-link
                        v-if="!isAuthenticated"
                        to="/register"
                        class="btn-primary text-lg px-8 py-4 inline-flex items-center justify-center group"
                    >
                        {{ t("home.cta.start") }}
                        <span class="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                    </router-link>
                    <router-link
                        v-else
                        to="/dashboard"
                        class="btn-primary text-lg px-8 py-4 inline-flex items-center justify-center group"
                    >
                        {{ t("home.cta.dashboard") }}
                        <span class="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                    </router-link>
                    <a
                        href="https://github.com/votre-repo"
                        class="btn-outline text-lg px-8 py-4 inline-flex items-center justify-center"
                        target="_blank"
                    >
                        <span class="mr-2">⭐</span>
                        {{ t("home.cta.github") }}
                    </a>
                </div>
            </div>
        </section>
        <section class="py-20 px-4 sm:px-6 lg:px-8">
            <div class="max-w-7xl mx-auto">
                <div class="text-center mb-16">
                    <h2 class="text-4xl md:text-5xl font-bold text-shadow-grey-900 mb-4">
                        {{ t("home.features.title") }}
                    </h2>
                    <p class="text-xl text-neutral-600">
                        {{ t("home.features.subtitle") }}
                    </p>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div class="card group hover:scale-105 transition-all duration-300">
                        <div
                            class="w-16 h-16 bg-linear-to-br from-primary to-primary-600 rounded-2xl flex items-center justify-center mb-5 group-hover:rotate-6 transition-transform"
                        >
                            <span class="text-4xl">🔐</span>
                        </div>
                        <h3 class="text-2xl font-bold text-shadow-grey-900 mb-3">
                            {{ t("home.features.auth.title") }}
                        </h3>
                        <p class="text-neutral-600 leading-relaxed mb-4">
                            {{ t("home.features.auth.description") }}
                        </p>
                        <span class="badge-primary">{{ t("home.features.auth.badge") }}</span>
                    </div>
                    <div class="card group hover:scale-105 transition-all duration-300">
                        <div
                            class="w-16 h-16 bg-linear-to-br from-secondary to-secondary-600 rounded-2xl flex items-center justify-center mb-5 group-hover:rotate-6 transition-transform"
                        >
                            <span class="text-4xl">⚡</span>
                        </div>
                        <h3 class="text-2xl font-bold text-shadow-grey-900 mb-3">
                            {{ t("home.features.performance.title") }}
                        </h3>
                        <p class="text-neutral-600 leading-relaxed mb-4">
                            {{ t("home.features.performance.description") }}
                        </p>
                        <span class="badge-secondary">{{ t("home.features.performance.badge") }}</span>
                    </div>
                    <div class="card group hover:scale-105 transition-all duration-300">
                        <div
                            class="w-16 h-16 bg-linear-to-br from-accent to-accent-600 rounded-2xl flex items-center justify-center mb-5 group-hover:rotate-6 transition-transform"
                        >
                            <span class="text-4xl">🎨</span>
                        </div>
                        <h3 class="text-2xl font-bold text-shadow-grey-900 mb-3">
                            {{ t("home.features.design.title") }}
                        </h3>
                        <p class="text-neutral-600 leading-relaxed mb-4">
                            {{ t("home.features.design.description") }}
                        </p>
                        <span class="badge-accent">{{ t("home.features.design.badge") }}</span>
                    </div>
                    <div class="card group hover:scale-105 transition-all duration-300">
                        <div
                            class="w-16 h-16 bg-linear-to-br from-amethyst-smoke-400 to-amethyst-smoke-600 rounded-2xl flex items-center justify-center mb-5 group-hover:rotate-6 transition-transform"
                        >
                            <span class="text-4xl">🗄️</span>
                        </div>
                        <h3 class="text-2xl font-bold text-shadow-grey-900 mb-3">
                            {{ t("home.features.database.title") }}
                        </h3>
                        <p class="text-neutral-600 leading-relaxed mb-4">
                            {{ t("home.features.database.description") }}
                        </p>
                        <span
                            class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-amethyst-smoke-100 text-amethyst-smoke-800"
                        >
                            {{ t("home.features.database.badge") }}
                        </span>
                    </div>
                    <div class="card group hover:scale-105 transition-all duration-300">
                        <div
                            class="w-16 h-16 bg-linear-to-br from-dark-teal-400 to-dark-teal-600 rounded-2xl flex items-center justify-center mb-5 group-hover:rotate-6 transition-transform"
                        >
                            <span class="text-4xl">🐳</span>
                        </div>
                        <h3 class="text-2xl font-bold text-shadow-grey-900 mb-3">
                            {{ t("home.features.docker.title") }}
                        </h3>
                        <p class="text-neutral-600 leading-relaxed mb-4">
                            {{ t("home.features.docker.description") }}
                        </p>
                        <span
                            class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-dark-teal-100 text-dark-teal-800"
                        >
                            {{ t("home.features.docker.badge") }}
                        </span>
                    </div>
                    <div class="card group hover:scale-105 transition-all duration-300">
                        <div
                            class="w-16 h-16 bg-linear-to-br from-sandy-clay-400 to-sandy-clay-600 rounded-2xl flex items-center justify-center mb-5 group-hover:rotate-6 transition-transform"
                        >
                            <span class="text-4xl">✨</span>
                        </div>
                        <h3 class="text-2xl font-bold text-shadow-grey-900 mb-3">
                            {{ t("home.features.quality.title") }}
                        </h3>
                        <p class="text-neutral-600 leading-relaxed mb-4">
                            {{ t("home.features.quality.description") }}
                        </p>
                        <span
                            class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-sandy-clay-100 text-sandy-clay-800"
                        >
                            {{ t("home.features.quality.badge") }}
                        </span>
                    </div>
                </div>
            </div>
        </section>
        <section class="py-20 px-4 sm:px-6 lg:px-8">
            <div class="max-w-4xl mx-auto">
                <div
                    class="card text-center bg-linear-to-br from-primary-50 to-amethyst-smoke-50 border border-primary-100"
                >
                    <h2 class="text-4xl font-bold text-shadow-grey-900 mb-4">
                        {{ t("home.cta_section.title") }}
                    </h2>
                    <p class="text-xl text-neutral-600 mb-8 max-w-2xl mx-auto">
                        {{ t("home.cta_section.description") }}
                    </p>
                    <router-link
                        v-if="!isAuthenticated"
                        to="/register"
                        class="btn-primary text-lg px-8 py-4 inline-flex items-center justify-center"
                    >
                        {{ t("home.cta_section.button") }}
                    </router-link>
                    <router-link
                        v-else
                        to="/dashboard"
                        class="btn-primary text-lg px-8 py-4 inline-flex items-center justify-center"
                    >
                        {{ t("home.cta_section.button_dashboard") }}
                    </router-link>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup lang="ts">
import { useAuth } from "../composables/useAuth";
import { useI18n } from "../composables/useI18n";

const { isAuthenticated, user } = useAuth();
const { t } = useI18n();
</script>
