<template>
  <div class="home">
    <div class="hero">
      <h1>Bienvenue sur l'application</h1>
      <p class="subtitle">Gérez votre compte en toute sécurité avec Better Auth</p>
      
      <div v-if="isAuthenticated" class="authenticated-actions">
        <p class="welcome-text">Vous êtes connecté en tant que <strong>{{ user?.name }}</strong></p>
        <router-link to="/dashboard" class="btn btn-primary">
          Accéder au dashboard
        </router-link>
      </div>

      <div v-else class="guest-actions">
        <router-link to="/login" class="btn btn-secondary">
          Se connecter
        </router-link>
        <router-link to="/register" class="btn btn-primary">
          Créer un compte
        </router-link>
      </div>
    </div>

    <div class="features">
      <h2>Fonctionnalités</h2>
      <div class="features-grid">
        <div class="feature-card">
          <div class="feature-icon">🔐</div>
          <h3>Sécurisé</h3>
          <p>Authentification robuste avec Better Auth</p>
        </div>
        <div class="feature-card">
          <div class="feature-icon">⚡</div>
          <h3>Rapide</h3>
          <p>Interface réactive avec Vue 3</p>
        </div>
        <div class="feature-card">
          <div class="feature-icon">🎨</div>
          <h3>Moderne</h3>
          <p>Design élégant et intuitif</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useAuth } from "../composables/useAuth";

const { isAuthenticated, user } = useAuth();
</script>

<style scoped>
.home {
  padding: 2rem;
}

.hero {
  text-align: center;
  padding: 4rem 2rem;
  max-width: 800px;
  margin: 0 auto;
}

h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
  color: #111827;
  line-height: 1.2;
}

.subtitle {
  font-size: 1.25rem;
  color: #6b7280;
  margin-bottom: 2rem;
}

.guest-actions,
.authenticated-actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

.authenticated-actions {
  flex-direction: column;
  align-items: center;
}

.welcome-text {
  font-size: 1.125rem;
  color: #374151;
  margin-bottom: 1rem;
}

.welcome-text strong {
  color: #3b82f6;
}

.btn {
  padding: 0.875rem 2rem;
  border-radius: 0.5rem;
  text-decoration: none;
  font-weight: 600;
  font-size: 1rem;
  transition: all 0.2s;
  display: inline-block;
}

.btn-secondary {
  background: #f3f4f6;
  color: #374151;
  border: 2px solid #d1d5db;
}

.btn-secondary:hover {
  background: #e5e7eb;
  border-color: #9ca3af;
}

.btn-primary {
  background: #3b82f6;
  color: white;
  border: 2px solid #3b82f6;
}

.btn-primary:hover {
  background: #2563eb;
  border-color: #2563eb;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
}

.features {
  max-width: 1200px;
  margin: 4rem auto;
  padding: 0 2rem;
}

.features h2 {
  text-align: center;
  font-size: 2rem;
  margin-bottom: 3rem;
  color: #111827;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.feature-card {
  background: white;
  padding: 2rem;
  border-radius: 0.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: all 0.2s;
}

.feature-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.feature-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.feature-card h3 {
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
  color: #111827;
}

.feature-card p {
  color: #6b7280;
}

@media (max-width: 768px) {
  h1 {
    font-size: 2rem;
  }

  .subtitle {
    font-size: 1rem;
  }

  .hero {
    padding: 2rem 1rem;
  }
}
</style>