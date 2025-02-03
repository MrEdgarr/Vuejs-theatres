// Utilities
import { defineStore } from "pinia";
import AuthServices from "@/services/modules/CinemaApi";

export const cinemaAppStore = defineStore("cinema", {
    state: () => ({
        cinemas: null,
    }),
    actions: {
        async fetchAll() {
            try {
                await AuthServices.getAll().then((res) => {
                    this.cinemas = res.data.content;
                });
            } catch (error) {
                console.log(error);
            }
        },
    },
});
