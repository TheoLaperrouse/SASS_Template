<template>
    <div id="app" class="min-h-screen bg-gradient-elegant">
        <nav class="bg-white/80 backdrop-blur-md border-b border-neutral-200 sticky top-0 z-50">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex justify-between items-center h-16">
                    <router-link
                        to="/"
                        class="flex items-center space-x-2 text-2xl font-bold text-gradient-primary hover:scale-105 transition-transform"
                    >
                        <span>🚀</span>
                        <span>MySaaS</span>
                    </router-link>
                    <div class="flex items-center space-x-6">
                        <router-link to="/" class="text-neutral-700 hover:text-primary font-medium transition-colors">
                            Accueil
                        </router-link>

                        <template v-if="isAuthenticated">
                            <router-link
                                to="/dashboard"
                                class="text-neutral-700 hover:text-primary font-medium transition-colors"
                            >
                                Dashboard
                            </router-link>
                            <button class="btn-outline text-sm" @click="handleLogout">Déconnexion</button>
                        </template>

                        <template v-else>
                            <router-link
                                to="/login"
                                class="text-neutral-700 hover:text-primary font-medium transition-colors"
                            >
                                Connexion
                            </router-link>
                            <router-link to="/register" class="btn-primary text-white text-sm">
                                S'inscrire
                            </router-link>
                        </template>
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

const { isAuthenticated, logout } = useAuth();

const handleLogout = async () => {
    await logout();
};
</script>
