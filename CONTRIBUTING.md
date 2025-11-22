# Guide de Contribution

## Convention de Commits

Ce projet utilise [Conventional Commits](https://www.conventionalcommits.org/).

### Format

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Types disponibles

- **feat**: Nouvelle fonctionnalité
- **fix**: Correction de bug
- **docs**: Documentation
- **style**: Formatage, points-virgules manquants, etc.
- **refactor**: Refactoring de code
- **perf**: Amélioration des performances
- **test**: Ajout ou correction de tests
- **build**: Changements du système de build
- **ci**: Changements de CI/CD
- **chore**: Tâches de maintenance

### Exemples

```bash
# Nouvelle fonctionnalité (version mineure)
git commit -m "feat: add user profile page"
git commit -m "feat(auth): add OAuth login"

# Correction de bug (version patch)
git commit -m "fix: resolve login error"
git commit -m "fix(api): handle null user response"

# Breaking change (version majeure)
git commit -m "feat!: redesign authentication system

BREAKING CHANGE: The authentication API has been completely redesigned"

# Documentation
git commit -m "docs: update README with setup instructions"

# Refactoring
git commit -m "refactor: simplify auth logic"
```

### Règles

1. Le type doit être en minuscules
2. Le sujet doit commencer par une minuscule
3. Pas de point à la fin du sujet
4. Maximum 100 caractères pour l'en-tête
5. Utiliser l'impératif présent ("add" pas "added")

### Scopes suggérés

- `auth` - Authentification
- `api` - API backend
- `ui` - Interface utilisateur
- `db` - Base de données
- `deps` - Dépendances

## Workflow

1. Créer une branche depuis `develop`
2. Faire vos modifications
3. Commiter avec la convention
4. Pousser et créer une Pull Request vers `develop`
5. Une fois approuvée et mergée dans `main`, semantic-release créera automatiquement:
   - Un tag de version
   - Une release GitHub
   - Un changelog mis à jour

// ========================================
// README.md (Section à ajouter)
// ========================================
## 🔄 Releases et Versioning

Ce projet utilise [Semantic Release](https://semantic-release.gitbook.io/) pour automatiser les versions et les releases.

### Branches

- `main` - Production, déclenche les releases
- `develop` - Développement

### Générer une Release

Les releases sont automatiquement générées lorsque vous pushez sur `main` avec des commits suivant la [convention](CONTRIBUTING.md).

**Exemples:**

```bash
# Version patch (0.0.1 -> 0.0.2)
git commit -m "fix: resolve bug"

# Version mineure (0.0.1 -> 0.1.0)
git commit -m "feat: add new feature"

# Version majeure (0.1.0 -> 1.0.0)
git commit -m "feat!: redesign API

BREAKING CHANGE: API endpoints have changed"
```

### CHANGELOG

Le fichier `CHANGELOG.md` est automatiquement généré et mis à jour à chaque release.