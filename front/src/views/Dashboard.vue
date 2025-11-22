<template>
    <div class="min-h-[calc(100vh-4rem)] py-12 px-4 sm:px-6 lg:px-8">
        <div class="max-w-7xl mx-auto">
            <div class="mb-12">
                <h1 class="text-4xl md:text-5xl font-bold text-shadow-grey-900 mb-3">
                    {{ t("dashboard.title") }}
                </h1>
                <p class="text-xl text-neutral-600">
                    {{ t("dashboard.subtitle") }}
                </p>
            </div>
            <div v-if="isLoading" class="flex items-center justify-center py-20">
                <div class="text-center">
                    <div
                        class="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"
                    ></div>
                    <p class="text-neutral-600">{{ t("dashboard.loading") }}</p>
                </div>
            </div>
            <div v-else-if="user" class="space-y-8">
                <div class="card bg-linear-to-br from-primary-50 to-amethyst-smoke-50 border border-primary-100">
                    <div class="flex items-start justify-between">
                        <div>
                            <h2 class="text-3xl font-bold text-shadow-grey-900 mb-2">
                                {{ t("dashboard.welcome", { name: user.name }) }}
                            </h2>
                            <p class="text-neutral-600 text-lg">
                                {{ t("dashboard.accountActive") }}
                            </p>
                        </div>
                        <span v-if="user.emailVerified" class="badge-success">
                            {{ t("dashboard.verified") }}
                        </span>
                        <span v-else class="badge-warning">
                            {{ t("dashboard.notVerified") }}
                        </span>
                    </div>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div class="card hover:scale-105 transition-transform">
                        <div class="flex items-center justify-between mb-4">
                            <h3 class="text-sm font-semibold text-neutral-600 uppercase tracking-wide">
                                {{ t("dashboard.stats.status") }}
                            </h3>
                            <div
                                class="w-10 h-10 bg-linear-to-br from-primary to-primary-600 rounded-xl flex items-center justify-center"
                            >
                                <span class="text-xl">✓</span>
                            </div>
                        </div>
                        <p class="text-3xl font-bold text-shadow-grey-900">
                            {{ t("dashboard.stats.active") }}
                        </p>
                    </div>
                    <div class="card hover:scale-105 transition-transform">
                        <div class="flex items-center justify-between mb-4">
                            <h3 class="text-sm font-semibold text-neutral-600 uppercase tracking-wide">
                                {{ t("dashboard.stats.email") }}
                            </h3>
                            <div
                                class="w-10 h-10 bg-linear-to-br from-secondary to-secondary-600 rounded-xl flex items-center justify-center"
                            >
                                <span class="text-xl">📧</span>
                            </div>
                        </div>
                        <p class="text-lg font-semibold text-shadow-grey-900 truncate">
                            {{ user.email }}
                        </p>
                    </div>
                    <div class="card hover:scale-105 transition-transform">
                        <div class="flex items-center justify-between mb-4">
                            <h3 class="text-sm font-semibold text-neutral-600 uppercase tracking-wide">
                                {{ t("dashboard.stats.memberSince") }}
                            </h3>
                            <div
                                class="w-10 h-10 bg-linear-to-br from-accent to-accent-600 rounded-xl flex items-center justify-center"
                            >
                                <span class="text-xl">📅</span>
                            </div>
                        </div>
                        <p class="text-3xl font-bold text-shadow-grey-900">
                            {{ t("dashboard.stats.recently") }}
                        </p>
                    </div>
                </div>
                <div class="card">
                    <h3 class="text-2xl font-bold text-shadow-grey-900 mb-6">
                        {{ t("dashboard.accountInfo.title") }}
                    </h3>
                    <div class="space-y-4">
                        <div class="flex items-center justify-between py-3 border-b border-neutral-100">
                            <span class="font-semibold text-neutral-700">{{ t("dashboard.accountInfo.name") }}</span>
                            <span class="text-neutral-900">{{ user.name }}</span>
                        </div>
                        <div class="flex items-center justify-between py-3 border-b border-neutral-100">
                            <span class="font-semibold text-neutral-700">{{ t("dashboard.accountInfo.email") }}</span>
                            <span class="text-neutral-900">{{ user.email }}</span>
                        </div>
                        <div class="flex items-center justify-between py-3 border-b border-neutral-100">
                            <span class="font-semibold text-neutral-700">{{ t("dashboard.accountInfo.userId") }}</span>
                            <code class="text-sm bg-neutral-100 px-3 py-1 rounded font-mono">
                                {{ user.id }}
                            </code>
                        </div>
                        <div class="flex items-center justify-between py-3">
                            <span class="font-semibold text-neutral-700">{{
                                t("dashboard.accountInfo.emailVerified")
                            }}</span>
                            <span v-if="user.emailVerified" class="badge-primary">
                                {{ t("dashboard.verified") }}
                            </span>
                            <span v-else class="badge-warning">
                                {{ t("dashboard.notVerified") }}
                            </span>
                        </div>
                    </div>
                </div>
                <div class="card">
                    <h3 class="text-2xl font-bold text-shadow-grey-900 mb-6">
                        {{ t("dashboard.actions.title") }}
                    </h3>
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <button class="btn-primary text-left flex items-center justify-between group">
                            <span>{{ t("dashboard.actions.editProfile") }}</span>
                            <span class="group-hover:translate-x-1 transition-transform">→</span>
                        </button>
                        <button class="btn-outline text-left flex items-center justify-between group">
                            <span>{{ t("dashboard.actions.settings") }}</span>
                            <span class="group-hover:translate-x-1 transition-transform">→</span>
                        </button>
                    </div>
                </div>
            </div>
            <div v-else class="card text-center py-12">
                <span class="text-6xl mb-4 block">😕</span>
                <h3 class="text-2xl font-bold text-shadow-grey-900 mb-2">
                    {{ t("dashboard.error.title") }}
                </h3>
                <p class="text-neutral-600">
                    {{ t("dashboard.error.message") }}
                </p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useAuth } from "../composables/useAuth";
import { useI18n } from "../composables/useI18n";

const { user, isLoading } = useAuth();
const { t } = useI18n();
</script>
