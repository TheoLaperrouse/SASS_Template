export interface User {
    id: string;
    name: string;
    email: string;
    emailVerified: boolean;
    image?: string;
    createdAt: Date;
    updatedAt: Date;
}

export interface Session {
    user: User;
    session: {
        id: string;
        userId: string;
        expiresAt: Date;
        token: string;
        ipAddress?: string;
        userAgent?: string;
    };
}

export interface AuthResponse {
    success: boolean;
    error?: string;
}

export interface LoginCredentials {
    email: string;
    password: string;
}

export interface RegisterCredentials {
    name: string;
    email: string;
    password: string;
}
