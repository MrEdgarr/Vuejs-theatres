// Utilities
import { defineStore } from "pinia";
import AuthServices from "@/services/modules/AuthAPI";

export const authAppStore = defineStore("auth", {
    state: () => ({
        users: [],

        isLoading: false,
        isLoginDialogOpen: false,
        isRegisterDialogOpen: false,
    }),

    actions: {
        async fetchAll() {
            try {
                await AuthServices.getAll().then((res) => {
                    this.users = res.data.content;
                });
            } catch (error) {
                console.log(error);
            }
        },
    },
});
