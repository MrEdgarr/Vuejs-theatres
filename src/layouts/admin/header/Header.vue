<script setup>
import { ref } from "vue";

const profile = ref([
    {
        title: "My Profile",
        desc: "Account Settings",
    },
    {
        title: "My Inbox",
        desc: "Messages & Emails",
    },
    {
        title: "My Tasks",
        desc: "To-do and Daily Tasks",
    },
]);
</script>

<template>
    <div>
        <!-- ---------------------------------------------- -->
        <!-- User Profile -->
        <!-- ---------------------------------------------- -->
        <v-menu anchor="bottom end" origin="auto" min-width="300">
            <template v-slot:activator="{ props }">
                <div class="flex items-center">
                    <div class="border-r pr-4 border-black">Welcome</div>
                    <v-btn
                        v-bind="props"
                        class="pa-0 px-1"
                        elevation="0"
                        color="transparent"
                        plain
                        :ripple="false"
                    >
                        <v-avatar size="35">
                            <img
                                src="https://images.aiscribbles.com/ba9047ea50364bf48552b8463dda706d.png?v=f42b63"
                                alt="Julia"
                            />
                        </v-avatar>
                    </v-btn>
                </div>
            </template>

            <v-list class="pa-6" elevation="10" rounded="lg">
                <v-list-item
                    class="pa-3 mb-2"
                    v-for="(item, i) in profile"
                    :key="i"
                    :value="item"
                    :title="item.title"
                    :subtitle="item.desc"
                    rounded="lg"
                >
                </v-list-item>
                <v-btn
                    block
                    color="secondary"
                    variant="contained"
                    class="mt-4 py-4"
                    >Logout</v-btn
                >
            </v-list>
        </v-menu>
    </div>
</template>

<style></style>
