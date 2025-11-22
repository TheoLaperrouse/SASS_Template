<template>
    <div class="min-h-[calc(100vh-4rem)] flex items-center justify-center px-4 py-12">
        <div class="w-full max-w-md">
            <div class="card">
                <div class="text-center mb-8">
                    <div
                        class="w-16 h-16 bg-linear-to-br from-primary to-primary-600 rounded-2xl flex items-center justify-center mx-auto mb-4"
                    >
                        <span class="text-4xl">👋</span>
                    </div>
                    <h2 class="text-3xl font-bold text-shadow-grey-900 mb-2">
                        {{ t("auth.login.title") }}
                    </h2>
                    <p class="text-neutral-600">
                        {{ t("auth.login.subtitle") }}
                    </p>
                </div>
                <form class="space-y-5" @submit.prevent="handleLogin">
                    <div>
                        <label for="email" class="block text-sm font-semibold text-neutral-700 mb-2">
                            {{ t("auth.login.email") }}
                        </label>
                        <input
                            id="email"
                            v-model="formData.email"
                            type="email"
                            required
                            class="input-field"
                            :placeholder="t('auth.login.email')"
                            :disabled="loading"
                        />
                    </div>

                    <div>
                        <label for="password" class="block text-sm font-semibold text-neutral-700 mb-2">
                            {{ t("auth.login.password") }}
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

                    <button type="submit" class="btn-primary w-full text-lg py-3" :disabled="loading">
                        {{ loading ? t("auth.login.submitting") : t("auth.login.submit") }}
                    </button>
                    <div v-if="error" class="alert-error">
                        {{ error }}
                    </div>
                </form>
                <p class="mt-6 text-center text-neutral-600">
                    {{ t("auth.login.noAccount") }}
                    <router-link to="/register" class="font-semibold text-primary hover:text-primary-700">
                        {{ t("auth.login.signup") }}
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
import { useI18n } from "../composables/useI18n";

const router = useRouter();
const route = useRoute();
const { login } = useAuth();
const { t } = useI18n();

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
        error.value = result.error || t("auth.login.error");
    }

    loading.value = false;
};
</script>
