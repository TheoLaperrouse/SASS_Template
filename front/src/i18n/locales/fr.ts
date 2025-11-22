export const fr = {
    // Navigation
    nav: {
        home: "Accueil",
        dashboard: "Tableau de bord",
        login: "Connexion",
        register: "S'inscrire",
        logout: "Déconnexion",
    },

    // Page d'accueil
    home: {
        title: "Créez votre",
        titleHighlight: "SaaS",
        titleEnd: "en quelques minutes",
        subtitle:
            "Template moderne avec Vue 3, TypeScript, Better Auth et Tailwind CSS v4. Tout ce dont vous avez besoin pour démarrer rapidement.",
        cta: {
            start: "Commencer gratuitement",
            github: "Voir sur GitHub",
            dashboard: "Accéder au dashboard",
        },
        connectedAs: "Connecté en tant que",
        features: {
            title: "Fonctionnalités puissantes",
            subtitle: "Tout ce dont vous avez besoin pour créer une application moderne",
            auth: {
                title: "Authentification sécurisée",
                description: "Better Auth intégré avec gestion des sessions, protection CSRF et support OAuth.",
                badge: "Better Auth",
            },
            performance: {
                title: "Ultra performant",
                description: "Vue 3 avec Vite pour un hot reload instantané et un build ultra-rapide.",
                badge: "Vue 3 + Vite",
            },
            design: {
                title: "Design moderne",
                description: "Tailwind CSS v4 avec une palette personnalisée élégante et harmonieuse.",
                badge: "Tailwind v4",
            },
            database: {
                title: "Base de données moderne",
                description: "PostgreSQL avec Drizzle ORM pour une gestion type-safe de vos données.",
                badge: "Drizzle ORM",
            },
            docker: {
                title: "Prêt pour Docker",
                description: "Configuration Docker Compose complète pour un déploiement simplifié.",
                badge: "Docker",
            },
            quality: {
                title: "Code quality",
                description: "ESLint, Prettier et TypeScript pour un code propre et maintenable.",
                badge: "TypeScript",
            },
        },
        cta_section: {
            title: "Prêt à démarrer ?",
            description: "Créez votre compte gratuitement et commencez à développer votre SaaS dès maintenant.",
            button: "Créer un compte gratuitement",
            button_dashboard: "Aller au dashboard",
        },
    },

    // Authentification
    auth: {
        login: {
            title: "Bon retour !",
            subtitle: "Connectez-vous à votre compte",
            email: "Email",
            password: "Mot de passe",
            submit: "Se connecter",
            submitting: "Connexion...",
            noAccount: "Pas encore de compte ?",
            signup: "S'inscrire",
            error: "Erreur de connexion",
        },
        register: {
            title: "Créer un compte",
            subtitle: "Commencez votre aventure SaaS",
            name: "Nom complet",
            email: "Email",
            password: "Mot de passe",
            confirmPassword: "Confirmer le mot de passe",
            passwordHint: "Minimum 8 caractères",
            submit: "S'inscrire",
            submitting: "Inscription...",
            hasAccount: "Déjà un compte ?",
            signin: "Se connecter",
            passwordMismatch: "Les mots de passe ne correspondent pas",
            error: "Erreur lors de l'inscription",
        },
    },

    // Dashboard
    dashboard: {
        title: "Tableau de bord",
        subtitle: "Bienvenue sur votre espace personnel",
        loading: "Chargement...",
        welcome: "Bienvenue, {{name}} !",
        accountActive: "Votre compte est actif et prêt à l'emploi",
        verified: "Vérifié",
        notVerified: "Non vérifié",
        stats: {
            status: "Statut du compte",
            active: "Actif",
            email: "Email",
            memberSince: "Membre depuis",
            recently: "Récemment",
        },
        accountInfo: {
            title: "Informations du compte",
            name: "Nom",
            email: "Email",
            userId: "ID utilisateur",
            emailVerified: "Email vérifié",
        },
        actions: {
            title: "Actions rapides",
            editProfile: "Modifier le profil",
            settings: "Paramètres",
        },
        error: {
            title: "Erreur de chargement",
            message: "Impossible de charger les informations utilisateur",
        },
    },

    // Composants communs
    common: {
        loading: "Chargement...",
        error: "Une erreur est survenue",
        success: "Succès",
        cancel: "Annuler",
        confirm: "Confirmer",
        save: "Enregistrer",
        delete: "Supprimer",
        edit: "Modifier",
        close: "Fermer",
        back: "Retour",
        next: "Suivant",
        previous: "Précédent",
        search: "Rechercher",
        filter: "Filtrer",
        sort: "Trier",
    },

    // Messages d'erreur
    errors: {
        required: "Ce champ est requis",
        invalidEmail: "Email invalide",
        passwordTooShort: "Le mot de passe doit contenir au moins 8 caractères",
        passwordMismatch: "Les mots de passe ne correspondent pas",
        networkError: "Erreur réseau. Veuillez réessayer.",
        unauthorized: "Non autorisé",
        forbidden: "Accès refusé",
        notFound: "Page non trouvée",
        serverError: "Erreur serveur. Veuillez réessayer plus tard.",
    },
};
