<template>
    <div class="min-h-[calc(100vh-4rem)] flex items-center justify-center px-4 py-12">
        <div class="w-full max-w-md">
            <!-- Card -->
            <div class="card">
                <!-- Header -->
                <div class="text-center mb-8">
                    <div
                        class="w-16 h-16 bg-linear-to-br from-primary to-primary-600 rounded-2xl flex items-center justify-center mx-auto mb-4"
                    >
                        <span class="text-4xl">👋</span>
                    </div>
                    <h2 class="text-3xl font-bold text-shadow-grey-900 mb-2">Bon retour !</h2>
                    <p class="text-neutral-600">Connectez-vous à votre compte</p>
                </div>

                <!-- Form -->
                <form class="space-y-5" @submit.prevent="handleLogin">
                    <div>
                        <label for="email" class="block text-sm font-semibold text-neutral-700 mb-2"> Email </label>
                        <input
                            id="email"
                            v-model="formData.email"
                            type="email"
                            required
                            class="input-field"
                            placeholder="votre@email.com"
                            :disabled="loading"
                        />
                    </div>

                    <div>
                        <label for="password" class="block text-sm font-semibold text-neutral-700 mb-2">
                            Mot de passe
                        </label>
                        <input
                            id="password"
                            v-model="formData.password"
                            type="password"
                            required
                            class="input-field"
                            placeholder="••••••••"
                            :disabled="loading"
                            minlength="8"
                        />
                    </div>

                    <button
                        type="submit"
                        class="btn-primary w-full text-lg py-3"
                        :disabled="loading"
                        :class="{ 'opacity-50 cursor-not-allowed': loading }"
                    >
                        {{ loading ? "Connexion..." : "Se connecter" }}
                    </button>

                    <div v-if="error" class="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg text-sm">
                        {{ error }}
                    </div>
                </form>

                <p class="mt-6 text-center text-neutral-600">
                    Pas encore de compte ?
                    <router-link to="/register" class="font-semibold text-primary hover:text-primary-700">
                        S'inscrire
                    </router-link>
                </p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";
import { useRouter, useRoute } from "vue-router";
import { useAuth } from "../composables/useAuth";

const router = useRouter();
const route = useRoute();
const { login } = useAuth();

const loading = ref(false);
const error = ref("");

const formData = reactive({
    email: "",
    password: "",
});

const handleLogin = async () => {
    loading.value = true;
    error.value = "";

    const result = await login(formData.email, formData.password);

    if (result.success) {
        const redirect = (route.query.redirect as string) || "/dashboard";
        router.push(redirect);
    } else {
        error.value = result.error || "Erreur de connexion";
    }

    loading.value = false;
};
</script>
