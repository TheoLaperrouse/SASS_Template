import { createRouter, createWebHistory } from "vue-router";
import type { RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import Dashboard from "../views/Dashboard.vue";
import { authClient } from "../lib/auth";

const routes: RouteRecordRaw[] = [
    {
        path: "/",
        name: "Home",
        component: Home,
        meta: { requiresGuest: true },
    },
    {
        path: "/login",
        name: "Login",
        component: Login,
        meta: { requiresGuest: true },
    },
    {
        path: "/register",
        name: "Register",
        component: Register,
        meta: { requiresGuest: true },
    },
    {
        path: "/dashboard",
        name: "Dashboard",
        component: Dashboard,
        meta: { requiresAuth: true },
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach(async (to, _from, next) => {
    const { data: session } = await authClient.getSession();
    const isAuthenticated = !!session;

    if (to.meta.requiresAuth && !isAuthenticated) {
        next({ name: "Login", query: { redirect: to.fullPath } });
        return;
    }

    // Routes pour les utilisateurs non connectés (login, register)
    if (to.meta.requiresGuest && isAuthenticated) {
        next({ name: "Dashboard" });
        return;
    }

    next();
});

export default router;
