<template>
    <v-app-bar color="background" class="position-fixed">
        <v-container>
            <v-toolbar flat class="!max-w-6xl m-auto md:p-0" color="background">
                <div class="md:hidden block">
                    <v-icon
                        :ripple="false"
                        class="ml-2"
                        @click="drawer = !drawer"
                    >
                        mdi-menu
                    </v-icon>
                </div>

                <!-- Tạo khoảng cách giữa hai thành phần. -->
                <v-spacer class="md:hidden"></v-spacer>
                <!-- Logo -->
                <router-link
                    :to="{ name: 'dashboardRedirect' }"
                    class="border-none"
                >
                    <v-img src="@/assets/logo-dark.png" width="100"></v-img>
                </router-link>
                <!-- Tạo khoảng cách giữa hai thành phần. -->
                <v-spacer class="md:block hidden"></v-spacer>
                <!-- Menu -->
                <div class="md:block hidden">
                    <template v-for="(value, index) in links" :key="index">
                        <v-btn
                            :ripple="false"
                            class="!capitalize"
                            @click="$router.push({ name: 'movieRedirect' })"
                        >
                            {{ value.name }}
                        </v-btn>
                    </template>
                </div>
                <!-- Tạo khoảng cách giữa hai thành phần. -->
                <v-spacer></v-spacer>
                <!-- Login / Register -->
                <div class="md:block hidden">
                    <template v-if="false">
                        <div class="md:block hidden">
                            <v-menu transition="slide-y-transition">
                                <template v-slot:activator="{ props }">
                                    <v-btn
                                        v-bind="props"
                                        :ripple="false"
                                        prepend-icon="mdi-account-circle"
                                    >
                                        NVA
                                    </v-btn>
                                </template>
                                <v-list>
                                    <v-list-item
                                        class="cursor-pointer hover:text-primary"
                                    >
                                        <v-list-item-title>
                                            Thông tin cá nhân
                                        </v-list-item-title>
                                    </v-list-item>
                                    <v-list-item
                                        class="cursor-pointer hover:text-primary"
                                    >
                                        <v-list-item-title>
                                            Đăng xuất
                                        </v-list-item-title>
                                    </v-list-item>
                                </v-list>
                            </v-menu>
                        </div>
                    </template>
                    <template v-else>
                        <v-btn
                            :ripple="false"
                            color="primary"
                            variant="flat"
                            @click="authStore.isLoginDialogOpen = true"
                        >
                            <span> Đăng Nhập </span>
                        </v-btn>
                    </template>
                </div>
                <div class="md:hidden block">
                    <v-icon> mdi-account </v-icon>
                </div>
            </v-toolbar>
        </v-container>
    </v-app-bar>
    <!-- điều hướng trong ứng dụng. -->
    <v-navigation-drawer v-model="drawer" temporary>
        <v-list>
            <v-list-item v-for="(value, index) in links" :key="index" link>
                <v-list-item-title
                    @click="$router.push({ name: `${value.nameRouter}` })"
                >
                    {{ value.name }}
                </v-list-item-title>
            </v-list-item>
        </v-list>
    </v-navigation-drawer>
    <!-- Auth -->
    <Login />
    <Register />
    <!--  -->
</template>
<script>
import { mapStores } from "pinia";
import { authAppStore } from "@/stores/auth";

export default {
    data: () => ({
        drawer: null,

        links: [
            {
                name: "Trang chủ",
                nameRouter: "dashboardRedirect",
            },

            {
                name: "Lịch chiếu",
                nameRouter: "showtimeRedirect",
            },
            {
                name: "Phim chiếu",
                nameRouter: "movieRedirect",
            },

            {
                name: "Giới thiệu",
                nameRouter: "blogRedirect",
            },
            // {
            //     name: "Tin tức & Khuyến mãi",
            //     nameRouter: "newRedirect",
            // },
        ],
    }),

    computed: {
        ...mapStores(authAppStore),
    },
};
</script>
