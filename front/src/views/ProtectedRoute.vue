<template>
    <div v-if="isLoading" class="loading-container">
        <LoadingSpinner message="Vérification de l'authentification..." />
    </div>
    <div v-else-if="isAuthenticated">
        <slot />
    </div>
    <div v-else class="unauthorized">
        <h2>Accès non autorisé</h2>
        <p>Vous devez être connecté pour accéder à cette page.</p>
        <router-link to="/login" class="btn btn-primary"> Se connecter </router-link>
    </div>
</template>

<script setup lang="ts">
import { useAuth } from "../composables/useAuth";
import LoadingSpinner from "../components/LoadingSpinner.vue";

const { isAuthenticated, isLoading } = useAuth();
</script>

<style scoped>
.loading-container {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 50vh;
}

.unauthorized {
    text-align: center;
    padding: 4rem 2rem;
}

.unauthorized h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
    color: #111827;
}

.unauthorized p {
    color: #6b7280;
    margin-bottom: 2rem;
}

.btn {
    display: inline-block;
    padding: 0.75rem 1.5rem;
    background: #3b82f6;
    color: white;
    text-decoration: none;
    border-radius: 0.375rem;
    font-weight: 500;
    transition: all 0.2s;
}

.btn:hover {
    background: #2563eb;
}
</style>
