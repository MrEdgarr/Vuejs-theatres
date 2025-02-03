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
                            import("@/components/homes/movie/MovieContent.vue"),
                    },
                    {
                        path: ":id",
                        name: "SeatRedirect",
                        component: () =>
                            import("@/components/homes/booking/BookinSeat.vue"),
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
    {
        path: "/admin",
        component: () => import("@/layouts/admin/FullLayout.vue"),
        children: [
            {
                path: "admin/dashboard",
                name: "adminDashboardRedirect",
                component: () => import("@/pages/admin/Dashboard.vue"),
            },
            {
                path: "movie",
                name: "adminFilmRedirect",
                component: () => import("@/pages/admin/MovieManagement.vue"),
            },
            {
                path: "showtime",
                name: "adminShowtimeRedirect",
                component: () => import("@/pages/admin/ShowtimeManagement.vue"),
            },
            {
                path: "cinema",
                name: "adminCinemaRedirect",
                component: () => import("@/pages/admin/CinemaManagement.vue"),
            },
            {
                path: "accountadmin",
                name: "adminAccountRedirect",
                component: () => import("@/pages/admin/AdminManagement.vue"),
            },
            {
                path: "accountclient",
                name: "clientAccountRedirect",
                component: () => import("@/pages/admin/UserManagement.vue"),
            },
        ],
    },
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: setupLayouts(routes),
    routes,
    linkActiveClass: "v-active-link",
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
