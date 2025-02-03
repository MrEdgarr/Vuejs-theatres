<script setup>
import { ref } from "vue";
</script>
<template>
    <div>
        <!-- ---------------------------------------------- -->
        <!---Logo part -->
        <!-- ---------------------------------------------- -->
        <div class="pa-4 w-36 m-auto">
            <v-img src="@/assets/logo-black.png" cover></v-img>
        </div>
        <!-- ---------------------------------------------- -->
        <!---Navigation -->
        <!-- ---------------------------------------------- -->
        <div class="pa-4">
            <v-list>
                <router-link :to="{ name: 'adminFilmRedirect' }">
                    <v-list-item title="Phim" class="cursor-pointer">
                        <template v-slot:prepend>
                            <v-icon class="!-mr-5"> mdi-filmstrip </v-icon>
                        </template>
                    </v-list-item>
                </router-link>
                <router-link :to="{ name: 'adminShowtimeRedirect' }">
                    <v-list-item title="Lịch chiếu" class="cursor-pointer">
                        <template v-slot:prepend>
                            <v-icon class="!-mr-5">
                                mdi-calendar-month-outline
                            </v-icon>
                        </template>
                    </v-list-item>
                </router-link>
                <router-link :to="{ name: 'adminCinemaRedirect' }">
                    <v-list-item title="Rạp chiếu" class="cursor-pointer">
                        <template v-slot:prepend>
                            <v-icon class="!-mr-5"> mdi-theater </v-icon>
                        </template>
                    </v-list-item>
                </router-link>
                <v-divider class="border-opacity-100 my-1"></v-divider>
                <v-list-subheader class="!font-bold !text-base">
                    Tài khoản
                </v-list-subheader>
                <router-link :to="{ name: 'adminAccountRedirect' }">
                    <v-list-item title="Quản trị" class="cursor-pointer">
                        <template v-slot:prepend>
                            <v-icon class="!-mr-5"> mdi-shield-account </v-icon>
                        </template>
                    </v-list-item>
                </router-link>
                <router-link :to="{ name: 'clientAccountRedirect' }">
                    <v-list-item title="Người dùng" class="cursor-pointer">
                        <template v-slot:prepend>
                            <v-icon class="!-mr-5"> mdi-account </v-icon>
                        </template>
                    </v-list-item>
                </router-link>
            </v-list>
        </div>
    </div>
</template>
<style></style>
