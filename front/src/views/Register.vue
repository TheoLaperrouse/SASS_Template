<template>
    <div class="min-h-[calc(100vh-4rem)] flex items-center justify-center px-4 py-12">
        <div class="w-full max-w-md">
            <div class="card">
                <div class="text-center mb-8">
                    <div
                        class="w-16 h-16 bg-linear-to-br from-secondary to-secondary-600 rounded-2xl flex items-center justify-center mx-auto mb-4"
                    >
                        <span class="text-4xl">🚀</span>
                    </div>
                    <h2 class="text-3xl font-bold text-shadow-grey-900 mb-2">
                        {{ t("auth.register.title") }}
                    </h2>
                    <p class="text-neutral-600">
                        {{ t("auth.register.subtitle") }}
                    </p>
                </div>
                <form class="space-y-5" @submit.prevent="handleRegister">
                    <div>
                        <label for="name" class="block text-sm font-semibold text-neutral-700 mb-2">
                            {{ t("auth.register.name") }}
                        </label>
                        <input
                            id="name"
                            v-model="formData.name"
                            type="text"
                            required
                            class="input-field"
                            :placeholder="t('auth.register.name')"
                            :disabled="loading"
                        />
                    </div>

                    <div>
                        <label for="email" class="block text-sm font-semibold text-neutral-700 mb-2">
                            {{ t("auth.register.email") }}
                        </label>
                        <input
                            id="email"
                            v-model="formData.email"
                            type="email"
                            required
                            class="input-field"
                            :placeholder="t('auth.register.email')"
                            :disabled="loading"
                        />
                    </div>

                    <div>
                        <label for="password" class="block text-sm font-semibold text-neutral-700 mb-2">
                            {{ t("auth.register.password") }}
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
                        <p class="text-xs text-neutral-500 mt-1">
                            {{ t("auth.register.passwordHint") }}
                        </p>
                    </div>

                    <div>
                        <label for="confirmPassword" class="block text-sm font-semibold text-neutral-700 mb-2">
                            {{ t("auth.register.confirmPassword") }}
                        </label>
                        <input
                            id="confirmPassword"
                            v-model="formData.confirmPassword"
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
                        :disabled="loading || !isPasswordMatch"
                    >
                        {{ loading ? t("auth.register.submitting") : t("auth.register.submit") }}
                    </button>
                    <div v-if="error" class="alert-error">
                        {{ error }}
                    </div>

                    <div
                        v-if="!isPasswordMatch && formData.confirmPassword"
                        class="bg-amber-50 border border-amber-200 text-amber-800 px-4 py-3 rounded-lg text-sm"
                    >
                        {{ t("auth.register.passwordMismatch") }}
                    </div>
                </form>
                <p class="mt-6 text-center text-neutral-600">
                    {{ t("auth.register.hasAccount") }}
                    <router-link to="/login" class="font-semibold text-primary hover:text-primary-700">
                        {{ t("auth.register.signin") }}
                    </router-link>
                </p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, reactive, computed } from "vue";
import { useRouter } from "vue-router";
import { useAuth } from "../composables/useAuth";
import { useI18n } from "../composables/useI18n";

const router = useRouter();
const { register } = useAuth();
const { t } = useI18n();

const loading = ref(false);
const error = ref("");

const formData = reactive({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
});

const isPasswordMatch = computed(() => {
    if (!formData.confirmPassword) return true;
    return formData.password === formData.confirmPassword;
});

const handleRegister = async () => {
    if (!isPasswordMatch.value) {
        error.value = t("auth.register.passwordMismatch");
        return;
    }

    loading.value = true;
    error.value = "";

    const result = await register(formData.name, formData.email, formData.password);

    if (result.success) {
        router.push("/dashboard");
    } else {
        error.value = result.error || t("auth.register.error");
    }

    loading.value = false;
};
</script>
