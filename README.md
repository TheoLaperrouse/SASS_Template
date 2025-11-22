# 🚀 SaaS Starter Template

> Un template moderne et prêt à l'emploi pour démarrer rapidement votre application SaaS avec Vue 3, Node.js, et Better Auth.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js Version](https://img.shields.io/badge/node-%3E%3D20.0.0-brightgreen)](https://nodejs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-blue)](https://www.typescriptlang.org/)

## 🎯 À propos

Ce template est conçu pour vous permettre de démarrer rapidement le développement de votre application SaaS (Software as a Service) sans perdre de temps sur la configuration initiale. Il intègre toutes les fonctionnalités essentielles d'une application SaaS moderne :

- ✅ **Authentification robuste** avec gestion des sessions
- ✅ **Base de données PostgreSQL** avec ORM moderne
- ✅ **API RESTful** sécurisée
- ✅ **Interface utilisateur moderne** et responsive
- ✅ **Versioning automatique** avec Semantic Release
- ✅ **Prêt pour Docker** et le déploiement en production
- ✅ **TypeScript** partout pour une meilleure maintenabilité

## 🛠 Stack technique

### Frontend
- **[Vue 3](https://vuejs.org/)** - Framework JavaScript progressif
- **[TypeScript](https://www.typescriptlang.org/)** - JavaScript typé
- **[Vue Router](https://router.vuejs.org/)** - Routage officiel pour Vue
- **[Vite](https://vitejs.dev/)** - Build tool ultra-rapide
- **[Better Auth](https://better-auth.com/)** - Authentification moderne

### Backend
- **[Node.js](https://nodejs.org/)** - Runtime JavaScript
- **[Express](https://expressjs.com/)** - Framework web minimaliste
- **[TypeScript](https://www.typescriptlang.org/)** - JavaScript typé
- **[Better Auth](https://better-auth.com/)** - Authentification
- **[Drizzle ORM](https://orm.drizzle.team/)** - ORM TypeScript-first

### Base de données
- **[PostgreSQL](https://www.postgresql.org/)** - Base de données relationnelle

### DevOps
- **[Docker](https://www.docker.com/)** - Containerisation
- **[Docker Compose](https://docs.docker.com/compose/)** - Orchestration multi-conteneurs
- **[GitHub Actions](https://github.com/features/actions)** - CI/CD
- **[Semantic Release](https://semantic-release.gitbook.io/)** - Versioning automatique

## 🚀 Installation

### 1. Cloner le repository

```bash
git clone https://github.com/votre-username/saas-starter-template.git
cd saas-starter-template
```

### 2. Installer les dépendances

```bash
# À la racine du projet
yarn install:all
```

### 3. Configuration des variables d'environnement

#### Backend

Créez un fichier `backend/.env` :

```env
# Base de données
DATABASE_URL=postgresql://postgres:postgres@localhost:5432/mydb

# Better Auth
BETTER_AUTH_SECRET=votre-secret-key-minimum-32-caracteres-tres-long
BETTER_AUTH_URL=http://localhost:3000

# Serveur
PORT=3000
NODE_ENV=development
```

#### Frontend

Créez un fichier `frontend/.env` :

```env
# API Backend
VITE_API_URL=http://localhost:3000
```

### 4. Initialiser la base de données

```bash
# Démarrer PostgreSQL (avec Docker)
docker-compose up -d postgres

# Générer les migrations
cd backend
yarn db:generate

# Appliquer les migrations
yarn db:migrate
```

## 💻 Développement

### Lancer l'application en développement

#### Option 1 : Avec Docker (recommandé)

```bash
# Démarrer tous les services
docker-compose up

# En arrière-plan
docker-compose up -d

# Voir les logs
docker-compose logs -f
```

L'application sera accessible sur :
- **Frontend** : http://localhost:5173
- **Backend** : http://localhost:3000
- **PostgreSQL** : localhost:5432

#### Option 2 : Sans Docker

```bash
# Terminal 1 - PostgreSQL local
# Assurez-vous que PostgreSQL est démarré

# Terminal 2 - Backend
cd backend
yarn dev

# Terminal 3 - Frontend
cd frontend
yarn dev
```

#### Option 3 : Avec le script de développement

```bash
# À la racine du projet
yarn dev
```

Cette commande démarre le backend et le frontend simultanément avec des logs colorés.

### Commandes utiles

```bash
# Développement
yarn dev                    # Lancer backend + frontend
yarn dev:backend           # Lancer seulement le backend
yarn dev:frontend          # Lancer seulement le frontend

# Base de données
yarn db:generate           # Générer les migrations
yarn db:migrate            # Appliquer les migrations
yarn db:studio             # Ouvrir Drizzle Studio (interface graphique)

# Build
yarn build:all             # Builder backend + frontend

# Docker
docker-compose up          # Démarrer tous les services
docker-compose down        # Arrêter tous les services
docker-compose logs -f     # Voir les logs en temps réel
docker-compose restart     # Redémarrer les services
```

## 🌐 Déploiement

### Variables d'environnement de production

N'oubliez pas de configurer ces variables en production :

**Backend :**
- `DATABASE_URL` - URL de votre base de données PostgreSQL
- `BETTER_AUTH_SECRET` - Clé secrète (minimum 32 caractères)
- `BETTER_AUTH_URL` - URL publique de votre backend
- `NODE_ENV=production`

**Frontend :**
- `VITE_API_URL` - URL de votre API backend

## 👥 Guide de contribution

### Convention de commits

Ce projet utilise [Conventional Commits](https://www.conventionalcommits.org/) pour le versioning automatique.

**Format :**
```
<type>(<scope>): <description>

[body optionnel]

[footer optionnel]
```

**Types disponibles :**
- `feat:` - Nouvelle fonctionnalité (version mineure)
- `fix:` - Correction de bug (version patch)
- `docs:` - Documentation seulement
- `style:` - Formatage, point-virgules, etc.
- `refactor:` - Refactoring de code
- `perf:` - Amélioration des performances
- `test:` - Ajout de tests
- `chore:` - Tâches de maintenance

**Exemples :**
```bash
# Nouvelle fonctionnalité
git commit -m "feat(auth): add OAuth Google login"

# Correction de bug
git commit -m "fix(api): resolve null pointer exception"

# Breaking change (version majeure)
git commit -m "feat!: redesign authentication system

BREAKING CHANGE: Old authentication tokens are no longer valid"
```

## 📚 Documentation

- [Better Auth Documentation](https://better-auth.com/docs)
- [Drizzle ORM Documentation](https://orm.drizzle.team/docs/overview)
- [Vue 3 Documentation](https://vuejs.org/guide/introduction.html)
- [Express Documentation](https://expressjs.com/en/guide/routing.html)
- [Docker Documentation](https://docs.docker.com/)


## 👏 Remerciements

- [Better Auth](https://better-auth.com/) pour l'authentification
- [Drizzle ORM](https://orm.drizzle.team/) pour l'ORM TypeScript
- [Vue.js](https://vuejs.org/) pour le framework frontend
- [Vite](https://vitejs.dev/) pour le build tool
- La communauté open-source