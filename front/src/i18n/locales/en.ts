export const en = {
    // Navigation
    nav: {
        home: "Home",
        dashboard: "Dashboard",
        login: "Login",
        register: "Sign up",
        logout: "Logout",
    },

    // Home page
    home: {
        title: "Build your",
        titleHighlight: "SaaS",
        titleEnd: "in minutes",
        subtitle:
            "Modern template with Vue 3, TypeScript, Better Auth and Tailwind CSS v4. Everything you need to start quickly.",
        cta: {
            start: "Get started for free",
            github: "View on GitHub",
            dashboard: "Go to dashboard",
        },
        connectedAs: "Connected as",
        features: {
            title: "Powerful features",
            subtitle: "Everything you need to create a modern application",
            auth: {
                title: "Secure authentication",
                description: "Better Auth integrated with session management, CSRF protection and OAuth support.",
                badge: "Better Auth",
            },
            performance: {
                title: "Ultra fast",
                description: "Vue 3 with Vite for instant hot reload and ultra-fast build.",
                badge: "Vue 3 + Vite",
            },
            design: {
                title: "Modern design",
                description: "Tailwind CSS v4 with an elegant and harmonious custom palette.",
                badge: "Tailwind v4",
            },
            database: {
                title: "Modern database",
                description: "PostgreSQL with Drizzle ORM for type-safe data management.",
                badge: "Drizzle ORM",
            },
            docker: {
                title: "Docker ready",
                description: "Complete Docker Compose configuration for simplified deployment.",
                badge: "Docker",
            },
            quality: {
                title: "Code quality",
                description: "ESLint, Prettier and TypeScript for clean and maintainable code.",
                badge: "TypeScript",
            },
        },
        cta_section: {
            title: "Ready to start?",
            description: "Create your account for free and start building your SaaS right now.",
            button: "Create free account",
            button_dashboard: "Go to dashboard",
        },
    },

    // Authentication
    auth: {
        login: {
            title: "Welcome back!",
            subtitle: "Sign in to your account",
            email: "Email",
            password: "Password",
            submit: "Sign in",
            submitting: "Signing in...",
            noAccount: "Don't have an account?",
            signup: "Sign up",
            error: "Login error",
        },
        register: {
            title: "Create account",
            subtitle: "Start your SaaS journey",
            name: "Full name",
            email: "Email",
            password: "Password",
            confirmPassword: "Confirm password",
            passwordHint: "Minimum 8 characters",
            submit: "Sign up",
            submitting: "Signing up...",
            hasAccount: "Already have an account?",
            signin: "Sign in",
            passwordMismatch: "Passwords do not match",
            error: "Registration error",
        },
    },

    // Dashboard
    dashboard: {
        title: "Dashboard",
        subtitle: "Welcome to your personal space",
        loading: "Loading...",
        welcome: "Welcome, {{name}}!",
        accountActive: "Your account is active and ready to use",
        verified: "Verified",
        notVerified: "Not verified",
        stats: {
            status: "Account status",
            active: "Active",
            email: "Email",
            memberSince: "Member since",
            recently: "Recently",
        },
        accountInfo: {
            title: "Account information",
            name: "Name",
            email: "Email",
            userId: "User ID",
            emailVerified: "Email verified",
        },
        actions: {
            title: "Quick actions",
            editProfile: "Edit profile",
            settings: "Settings",
        },
        error: {
            title: "Loading error",
            message: "Unable to load user information",
        },
    },

    // Common components
    common: {
        loading: "Loading...",
        error: "An error occurred",
        success: "Success",
        cancel: "Cancel",
        confirm: "Confirm",
        save: "Save",
        delete: "Delete",
        edit: "Edit",
        close: "Close",
        back: "Back",
        next: "Next",
        previous: "Previous",
        search: "Search",
        filter: "Filter",
        sort: "Sort",
    },

    // Error messages
    errors: {
        required: "This field is required",
        invalidEmail: "Invalid email",
        passwordTooShort: "Password must be at least 8 characters",
        passwordMismatch: "Passwords do not match",
        networkError: "Network error. Please try again.",
        unauthorized: "Unauthorized",
        forbidden: "Access denied",
        notFound: "Page not found",
        serverError: "Server error. Please try again later.",
    },
};
