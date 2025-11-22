import { computed } from "vue";
import { useRouter } from "vue-router";
import { authClient, signIn, signUp, signOut, useSession } from "../lib/auth";

export function useAuth() {
  const router = useRouter();
  const { data: session, isPending, error: sessionError } = useSession();
  
  const isAuthenticated = computed(() => !!session.value);
  const user = computed(() => session.value?.user ?? null);
  const isLoading = computed(() => isPending.value);

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
    } catch (error: any) {
      return { 
        success: false, 
        error: error.message || "Une erreur est survenue" 
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
    } catch (error: any) {
      return { 
        success: false, 
        error: error.message || "Une erreur est survenue" 
      };
    }
  };

  const logout = async () => {
    try {
      await signOut();
      router.push("/");
      return { success: true };
    } catch (error: any) {
      return { 
        success: false, 
        error: error.message || "Erreur lors de la déconnexion" 
      };
    }
  };

  const checkAuth = async () => {
    try {
      const { data } = await authClient.getSession();
      return !!data;
    } catch (error) {
      return false;
    }
  };

  return {
    session,
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