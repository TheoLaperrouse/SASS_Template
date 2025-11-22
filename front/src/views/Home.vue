<template>
    <div class="home">
        <!-- Hero Section -->
        <section class="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
            <div class="max-w-6xl mx-auto text-center">
                <div
                    v-if="isAuthenticated"
                    class="inline-flex items-center px-4 py-2 bg-primary-50 border border-primary-200 rounded-full mb-8 animate-fade-in"
                >
                    <span class="w-2 h-2 bg-primary rounded-full mr-2 animate-pulse"></span>
                    <span class="text-sm font-medium text-primary-800">
                        Connecté en tant que <strong>{{ user?.name }}</strong>
                    </span>
                </div>

                <h1 class="text-5xl md:text-7xl font-bold text-shadow-grey-900 mb-6 leading-tight">
                    Créez votre
                    <span class="text-gradient-primary">SaaS</span>
                    <br />
                    en quelques minutes
                </h1>

                <p class="text-xl md:text-2xl text-neutral-600 mb-10 max-w-3xl mx-auto leading-relaxed">
                    Template moderne avec Vue 3, TypeScript, Better Auth et Tailwind CSS v4. Tout ce dont vous avez
                    besoin pour démarrer rapidement.
                </p>

                <div class="flex flex-col sm:flex-row gap-4 justify-center">
                    <router-link
                        v-if="!isAuthenticated"
                        to="/register"
                        class="btn-primary text-lg px-8 py-4 inline-flex items-center justify-center group"
                    >
                        Commencer gratuitement
                        <span class="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                    </router-link>
                    <router-link
                        v-else
                        to="/dashboard"
                        class="btn-primary text-lg px-8 py-4 inline-flex items-center justify-center group"
                    >
                        Accéder au dashboard
                        <span class="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                    </router-link>
                    <a
                        href="https://github.com/votre-repo"
                        class="btn-outline text-lg px-8 py-4 inline-flex items-center justify-center"
                        target="_blank"
                    >
                        <span class="mr-2">⭐</span>
                        Voir sur GitHub
                    </a>
                </div>
            </div>
        </section>

        <!-- Features Section -->
        <section class="py-20 px-4 sm:px-6 lg:px-8">
            <div class="max-w-7xl mx-auto">
                <div class="text-center mb-16">
                    <h2 class="text-4xl md:text-5xl font-bold text-shadow-grey-900 mb-4">Fonctionnalités puissantes</h2>
                    <p class="text-xl text-neutral-600">
                        Tout ce dont vous avez besoin pour créer une application moderne
                    </p>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <!-- Feature 1 -->
                    <div class="card group hover:scale-105 transition-all duration-300">
                        <div
                            class="w-16 h-16 bg-gradient-to-br from-primary to-primary-600 rounded-2xl flex items-center justify-center mb-5 group-hover:rotate-6 transition-transform"
                        >
                            <span class="text-4xl">🔐</span>
                        </div>
                        <h3 class="text-2xl font-bold text-shadow-grey-900 mb-3">Authentification sécurisée</h3>
                        <p class="text-neutral-600 leading-relaxed mb-4">
                            Better Auth intégré avec gestion des sessions, protection CSRF et support OAuth.
                        </p>
                        <span class="badge-primary">Better Auth</span>
                    </div>

                    <!-- Feature 2 -->
                    <div class="card group hover:scale-105 transition-all duration-300">
                        <div
                            class="w-16 h-16 bg-gradient-to-br from-secondary to-secondary-600 rounded-2xl flex items-center justify-center mb-5 group-hover:rotate-6 transition-transform"
                        >
                            <span class="text-4xl">⚡</span>
                        </div>
                        <h3 class="text-2xl font-bold text-shadow-grey-900 mb-3">Ultra performant</h3>
                        <p class="text-neutral-600 leading-relaxed mb-4">
                            Vue 3 avec Vite pour un hot reload instantané et un build ultra-rapide.
                        </p>
                        <span class="badge-secondary">Vue 3 + Vite</span>
                    </div>

                    <!-- Feature 3 -->
                    <div class="card group hover:scale-105 transition-all duration-300">
                        <div
                            class="w-16 h-16 bg-gradient-to-br from-accent to-accent-600 rounded-2xl flex items-center justify-center mb-5 group-hover:rotate-6 transition-transform"
                        >
                            <span class="text-4xl">🎨</span>
                        </div>
                        <h3 class="text-2xl font-bold text-shadow-grey-900 mb-3">Design moderne</h3>
                        <p class="text-neutral-600 leading-relaxed mb-4">
                            Tailwind CSS v4 avec une palette personnalisée élégante et harmonieuse.
                        </p>
                        <span class="badge-accent">Tailwind v4</span>
                    </div>

                    <!-- Feature 4 -->
                    <div class="card group hover:scale-105 transition-all duration-300">
                        <div
                            class="w-16 h-16 bg-gradient-to-br from-amethyst-smoke-400 to-amethyst-smoke-600 rounded-2xl flex items-center justify-center mb-5 group-hover:rotate-6 transition-transform"
                        >
                            <span class="text-4xl">🗄️</span>
                        </div>
                        <h3 class="text-2xl font-bold text-shadow-grey-900 mb-3">Base de données moderne</h3>
                        <p class="text-neutral-600 leading-relaxed mb-4">
                            PostgreSQL avec Drizzle ORM pour une gestion type-safe de vos données.
                        </p>
                        <span
                            class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-amethyst-smoke-100 text-amethyst-smoke-800"
                        >
                            Drizzle ORM
                        </span>
                    </div>

                    <!-- Feature 5 -->
                    <div class="card group hover:scale-105 transition-all duration-300">
                        <div
                            class="w-16 h-16 bg-gradient-to-br from-dark-teal-400 to-dark-teal-600 rounded-2xl flex items-center justify-center mb-5 group-hover:rotate-6 transition-transform"
                        >
                            <span class="text-4xl">🐳</span>
                        </div>
                        <h3 class="text-2xl font-bold text-shadow-grey-900 mb-3">Prêt pour Docker</h3>
                        <p class="text-neutral-600 leading-relaxed mb-4">
                            Configuration Docker Compose complète pour un déploiement simplifié.
                        </p>
                        <span
                            class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-dark-teal-100 text-dark-teal-800"
                        >
                            Docker
                        </span>
                    </div>

                    <!-- Feature 6 -->
                    <div class="card group hover:scale-105 transition-all duration-300">
                        <div
                            class="w-16 h-16 bg-gradient-to-br from-sandy-clay-400 to-sandy-clay-600 rounded-2xl flex items-center justify-center mb-5 group-hover:rotate-6 transition-transform"
                        >
                            <span class="text-4xl">✨</span>
                        </div>
                        <h3 class="text-2xl font-bold text-shadow-grey-900 mb-3">Code quality</h3>
                        <p class="text-neutral-600 leading-relaxed mb-4">
                            ESLint, Prettier et TypeScript pour un code propre et maintenable.
                        </p>
                        <span
                            class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-sandy-clay-100 text-sandy-clay-800"
                        >
                            TypeScript
                        </span>
                    </div>
                </div>
            </div>
        </section>

        <!-- CTA Section -->
        <section class="py-20 px-4 sm:px-6 lg:px-8">
            <div class="max-w-4xl mx-auto">
                <div
                    class="card text-center bg-gradient-to-br from-primary-50 to-amethyst-smoke-50 border border-primary-100"
                >
                    <h2 class="text-4xl font-bold text-shadow-grey-900 mb-4">Prêt à démarrer ?</h2>
                    <p class="text-xl text-neutral-600 mb-8 max-w-2xl mx-auto">
                        Créez votre compte gratuitement et commencez à développer votre SaaS dès maintenant.
                    </p>
                    <router-link
                        v-if="!isAuthenticated"
                        to="/register"
                        class="btn-primary text-lg px-8 py-4 inline-flex items-center justify-center"
                    >
                        Créer un compte gratuitement
                    </router-link>
                    <router-link
                        v-else
                        to="/dashboard"
                        class="btn-primary text-lg px-8 py-4 inline-flex items-center justify-center"
                    >
                        Aller au dashboard
                    </router-link>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup lang="ts">
import { useAuth } from "../composables/useAuth";

const { isAuthenticated, user } = useAuth();
</script>
