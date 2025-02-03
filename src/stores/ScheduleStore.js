// Utilities
import { defineStore } from "pinia";
import AuthServices from "@/services/modules/ScheduleAPI";

export const scheduleAppStore = defineStore("schedule", {
    state: () => ({
        schedules: null,
    }),
    actions: {
        async fetchAll(value) {
            try {
                await AuthServices.getAll(value).then((res) => {
                    this.schedules = res.data.content;
                });
            } catch (error) {
                console.log(error);
            }
        },
    },
});
