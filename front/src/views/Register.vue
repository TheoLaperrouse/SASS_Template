<template>
    <div class="auth-container">
        <div class="auth-card">
            <h2>Inscription</h2>

            <form @submit.prevent="handleRegister">
                <div class="form-group">
                    <label for="name">Nom complet</label>
                    <input
                        id="name"
                        v-model="formData.name"
                        type="text"
                        required
                        placeholder="Votre nom"
                        :disabled="loading"
                    />
                </div>

                <div class="form-group">
                    <label for="email">Email</label>
                    <input
                        id="email"
                        v-model="formData.email"
                        type="email"
                        required
                        placeholder="votre@email.com"
                        :disabled="loading"
                    />
                </div>

                <div class="form-group">
                    <label for="password">Mot de passe</label>
                    <input
                        id="password"
                        v-model="formData.password"
                        type="password"
                        required
                        placeholder="••••••••"
                        :disabled="loading"
                        minlength="8"
                    />
                    <small>Minimum 8 caractères</small>
                </div>

                <div class="form-group">
                    <label for="confirmPassword">Confirmer le mot de passe</label>
                    <input
                        id="confirmPassword"
                        v-model="formData.confirmPassword"
                        type="password"
                        required
                        placeholder="••••••••"
                        :disabled="loading"
                        minlength="8"
                    />
                </div>

                <button type="submit" class="btn btn-primary" :disabled="loading || !isPasswordMatch">
                    {{ loading ? "Inscription..." : "S'inscrire" }}
                </button>

                <div v-if="error" class="alert alert-error">
                    {{ error }}
                </div>

                <div v-if="!isPasswordMatch && formData.confirmPassword" class="alert alert-warning">
                    Les mots de passe ne correspondent pas
                </div>
            </form>

            <p class="switch-auth">
                Déjà un compte ?
                <router-link to="/login">Se connecter</router-link>
            </p>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, reactive, computed } from "vue";
import { useRouter } from "vue-router";
import { useAuth } from "../composables/useAuth";

const router = useRouter();
const { register } = useAuth();

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
        error.value = "Les mots de passe ne correspondent pas";
        return;
    }

    loading.value = true;
    error.value = "";

    const result = await register(formData.name, formData.email, formData.password);

    if (result.success) {
        router.push("/dashboard");
    } else {
        error.value = result.error || "Erreur lors de l'inscription";
    }

    loading.value = false;
};
</script>

<style scoped>
.auth-container {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: calc(100vh - 4rem);
    padding: 2rem;
}

.auth-card {
    background: white;
    padding: 2rem;
    border-radius: 0.5rem;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    width: 100%;
    max-width: 400px;
}

h2 {
    margin-bottom: 1.5rem;
    text-align: center;
    color: #111827;
}

.form-group {
    margin-bottom: 1rem;
}

label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: 500;
    color: #374151;
}

small {
    display: block;
    margin-top: 0.25rem;
    color: #6b7280;
    font-size: 0.875rem;
}

input {
    width: 100%;
    padding: 0.75rem;
    border: 1px solid #d1d5db;
    border-radius: 0.375rem;
    font-size: 1rem;
    transition: all 0.2s;
}

input:focus {
    outline: none;
    border-color: #3b82f6;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

input:disabled {
    background: #f3f4f6;
    cursor: not-allowed;
}

.btn {
    width: 100%;
    padding: 0.75rem;
    border: none;
    border-radius: 0.375rem;
    font-weight: 500;
    font-size: 1rem;
    cursor: pointer;
    transition: all 0.2s;
}

.btn-primary {
    background: #3b82f6;
    color: white;
}

.btn-primary:hover:not(:disabled) {
    background: #2563eb;
}

.btn:disabled {
    opacity: 0.5;
    cursor: not-allowed;
}

.alert {
    margin-top: 1rem;
    padding: 0.75rem;
    border-radius: 0.375rem;
}

.alert-error {
    background: #fee2e2;
    color: #991b1b;
    border: 1px solid #fecaca;
}

.alert-warning {
    background: #fef3c7;
    color: #92400e;
    border: 1px solid #fde68a;
}

.switch-auth {
    margin-top: 1.5rem;
    text-align: center;
    color: #6b7280;
}

.switch-auth a {
    color: #3b82f6;
    text-decoration: none;
    font-weight: 500;
}

.switch-auth a:hover {
    text-decoration: underline;
}
</style>
