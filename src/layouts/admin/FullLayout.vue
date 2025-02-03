<template>
    <v-app id="inspire" class="bg-[#F2F5F8]">
        <!-- ---------------------------------------------- -->
        <!---Sidebar -->
        <!-- ---------------------------------------------- -->
        <v-navigation-drawer
            v-model="drawer"
            elevation="1"
            class="position-fixed"
        >
            <SidebarVue />
            <template v-slot:append>
                <div>
                    <v-btn block variant="tonal" color="red"> Logout </v-btn>
                </div>
            </template>
        </v-navigation-drawer>
        <!-- ---------------------------------------------- -->
        <!---Header -->
        <!-- ---------------------------------------------- -->
        <v-app-bar elevation="1" class="position-fixed" color="white" flat>
            <v-app-bar-nav-icon
                class="hidden-lg-and-up"
                @click="drawer = !drawer"
            />
            <v-spacer />
            <!-- ---------------------------------------------- -->
            <!-- User Profile -->
            <!-- ---------------------------------------------- -->
            <HeaderVue />
        </v-app-bar>

        <!-- ---------------------------------------------- -->
        <!---Page Wrapper -->
        <!-- ---------------------------------------------- -->
        <v-main class="!bg-[#f6f6f6]">
            <v-container fluid class="page-wrapper">
                <RouterView class="h-full" />
            </v-container>
        </v-main>
    </v-app>
</template>
<script setup>
import { ref, onMounted } from "vue";
// Components
import SidebarVue from "./sidebar/Sidebar.vue";
import HeaderVue from "./header/Header.vue";

const drawer = ref(true);
onMounted(() => {
    if (window.innerWidth < 1280) {
        drawer.value = !drawer.value;
    }
});
</script>
<style scoped>
.page-wrapper {
    max-width: 1550px;
    height: calc(100vh - 65px) !important;
}
</style>
