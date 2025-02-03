// Utilities
import { defineStore } from "pinia";
import AuthServices from "@/services/modules/seat";

export const seatAppStore = defineStore("seat", {
    state: () => ({
        seats: null,
    }),
    actions: {
        async fetchAll(value) {
            try {
                await AuthServices.getAll(value).then((res) => {
                    this.seats = res.data.content;
                });
            } catch (error) {
                console.log(error);
            }
        },
    },
});
