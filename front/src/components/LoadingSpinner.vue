<template>
    <div class="spinner-container">
        <div class="spinner"></div>
        <p v-if="message">{{ message }}</p>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    message?: string;
}>();
</script>

<style scoped>
.spinner-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2rem;
}

.spinner {
    width: 40px;
    height: 40px;
    border: 4px solid #f3f4f6;
    border-top: 4px solid #3b82f6;
    border-radius: 50%;
    animation: spin 1s linear infinite;
}

@keyframes spin {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}

.spinner-container p {
    margin-top: 1rem;
    color: #6b7280;
}
</style>
