<template>
  <div id="app">
    <nav class="navbar">
      <div class="nav-content">
        <router-link to="/" class="nav-brand">MyApp</router-link>
        
        <div class="nav-links">
          <router-link to="/" class="nav-link">Accueil</router-link>
          
          <template v-if="isAuthenticated">
            <router-link to="/dashboard" class="nav-link">Dashboard</router-link>
            <button @click="handleLogout" class="nav-link nav-logout">
              Déconnexion
            </button>
          </template>
          
          <template v-else>
            <router-link to="/login" class="nav-link">Connexion</router-link>
            <router-link to="/register" class="nav-link nav-cta">
              S'inscrire
            </router-link>
          </template>
        </div>
      </div>
    </nav>

    <main class="main-content">
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

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;
  background: #f9fafb;
  color: #111827;
}

#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.navbar {
  background: white;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 100;
}

.nav-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-brand {
  font-size: 1.5rem;
  font-weight: 700;
  color: #3b82f6;
  text-decoration: none;
  transition: color 0.2s;
}

.nav-brand:hover {
  color: #2563eb;
}

.nav-links {
  display: flex;
  gap: 1.5rem;
  align-items: center;
}

.nav-link {
  color: #374151;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  padding: 0.5rem 0;
}

.nav-link:hover,
.nav-link.router-link-active {
  color: #3b82f6;
}

.nav-cta {
  background: #3b82f6;
  color: white !important;
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  transition: all 0.2s;
}

.nav-cta:hover {
  background: #2563eb;
  transform: translateY(-1px);
}

.nav-logout {
  color: #ef4444 !important;
}

.nav-logout:hover {
  color: #dc2626 !important;
}

.main-content {
  flex: 1;
}

@media (max-width: 768px) {
  .nav-content {
    padding: 1rem;
  }

  .nav-links {
    gap: 1rem;
    flex-wrap: wrap;
  }

  .nav-link {
    font-size: 0.875rem;
  }
}
</style>