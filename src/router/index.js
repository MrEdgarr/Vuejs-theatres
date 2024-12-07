/**
 * router/index.ts
 *
 * Automatic routes for `./src/pages/*.vue`
 */

// Composables
import { createRouter, createWebHistory } from "vue-router/auto";
import { setupLayouts } from "virtual:generated-layouts";
// import { routes } from "vue-router/auto-routes";

const routes = [
    {
        path: "/",
        component: () => import("@/layouts/default.vue"),
        children: [
            {
                path: "/",
                name: "DashboardRedirect",
                component: () => import("@/pages/home/dashboard"),
            },
            {
                path: "/showtimes",
                name: "ShowtimeRedirect",
                component: () => import("@/pages/home/showtime"),
            },
            {
                path: "/movies",
                component: () => import("@/pages/home/movie"),
                children: [
                    {
                        path: ":id",
                        name: "MovieRedirect",
                        component: () =>
                            import("@/components/home/movies/MovieContent.vue"),
                    },
                    {
                        path: ":id/seats",
                        name: "SeatRedirect",
                        component: () =>
                            import("@/components/home/booking/BookingSeat.vue"),
                    },
                ],
            },
            {
                path: "/payment",
                name: "PaymentRedirect",
                component: () => import("@/pages/home/payment"),
            },
        ],
    },
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: setupLayouts(routes),
    routes,
});

// Workaround for https://github.com/vitejs/vite/issues/11804
router.onError((err, to) => {
    if (
        err?.message?.includes?.("Failed to fetch dynamically imported module")
    ) {
        if (!localStorage.getItem("vuetify:dynamic-reload")) {
            console.log("Reloading page to fix dynamic import error");
            localStorage.setItem("vuetify:dynamic-reload", "true");
            location.assign(to.fullPath);
        } else {
            console.error(
                "Dynamic import error, reloading page did not fix it",
                err
            );
        }
    } else {
        console.error(err);
    }
});

router.isReady().then(() => {
    localStorage.removeItem("vuetify:dynamic-reload");
});

export default router;
