// Utilities
import { defineStore } from "pinia";
import AuthServices from "@/services/modules/CityAPI";

export const cityAppStore = defineStore("city", {
    state: () => ({
        citys: null,
    }),
    actions: {
        async fetchAll() {
            try {
                await AuthServices.getAll().then((res) => {
                    this.citys = res.data.content;
                });
            } catch (error) {
                console.log(error);
            }
        },
    },
});
