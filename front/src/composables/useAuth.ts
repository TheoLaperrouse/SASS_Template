import { computed } from "vue";
import { useRouter } from "vue-router";
import { authClient, signIn, signUp, signOut, useSession } from "../lib/auth";

export function useAuth() {
    const router = useRouter();

    const sessionData = useSession();

    const isAuthenticated = computed(() => !!sessionData.value?.data);
    const user = computed(() => sessionData.value?.data?.user ?? null);
    const isLoading = computed(() => sessionData.value?.isPending ?? false);
    const sessionError = computed(() => sessionData.value?.error ?? null);

    const login = async (email: string, password: string) => {
        try {
            const result = await signIn.email({
                email,
                password,
            });

            if (result.error) {
                throw new Error(result.error.message || "Erreur de connexion");
            }

            return { success: true };
        } catch (err) {
            const error = err instanceof Error ? err : new Error("Une erreur est survenue");

            return {
                success: false,
                error: error.message,
            };
        }
    };

    const register = async (name: string, email: string, password: string) => {
        try {
            const result = await signUp.email({
                name,
                email,
                password,
            });
            if (result.error) {
                throw new Error(result.error.message || "Erreur lors de l'inscription");
            }

            return { success: true };
        } catch (err) {
            const error = err instanceof Error ? err : new Error("Une erreur est survenue");

            return {
                success: false,
                error: error.message,
            };
        }
    };

    const logout = async () => {
        try {
            await signOut();
            router.push("/");
            return { success: true };
        } catch (err) {
            const error = err instanceof Error ? err : new Error("Une erreur est survenue");
            return {
                success: false,
                error: error.message,
            };
        }
    };

    const checkAuth = async () => {
        try {
            const { data } = await authClient.getSession();
            return !!data;
        } catch {
            return false;
        }
    };

    return {
        sessionData,
        user,
        isAuthenticated,
        isLoading,
        sessionError,
        login,
        register,
        logout,
        checkAuth,
    };
}
