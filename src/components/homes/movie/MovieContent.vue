<template>
    <v-card>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-5 px-5 pt-5">
            <div class="flex items-center">
                <v-select
                    v-model="selectedDate"
                    placeholder="Ngày"
                    :items="formatdate"
                    item-title="dayNumber"
                    variant="outlined"
                    density="compact"
                    hide-details="auto"
                ></v-select>
            </div>
            <div class="flex items-center">
                <v-select
                    v-model="selectedCity"
                    placeholder="Rạp"
                    :items="citys"
                    item-title="city_name"
                    item-value="id"
                    variant="outlined"
                    density="compact"
                    hide-details="auto"
                ></v-select>
            </div>
        </div>
        <div class="pt-5">
            <v-skeleton-loader
                :loading="isLoading"
                type="list-item-avatar-two-line"
                class="!block"
            >
                <v-expansion-panels variant="accordion">
                    <v-expansion-panel
                        v-for="cinema in cinemas"
                        :key="cinema.cinemaId"
                    >
                        <v-expansion-panel-title expand-icon="mdi-menu-down">
                            <div class="flex items-center">
                                <div>
                                    <v-img
                                        src="https://cdn.mservice.com.vn/app/img/booking/logo_beta.png"
                                        width="35"
                                        height="35"
                                        class="m-2 ml-3"
                                    ></v-img>
                                </div>
                                <div>
                                    <p
                                        class="font-bold sm:text-sm text-xs font-bold"
                                    >
                                        {{ cinema.cinema_name }}
                                    </p>
                                    <span
                                        class="sm:text-sm text-xs line-clamp-1 text-gray-500"
                                    >
                                        {{ cinema.cinema_address }}
                                    </span>
                                </div>
                            </div>
                        </v-expansion-panel-title>
                        <v-expansion-panel-text>
                            <div>
                                <label class="font-bold sm:text-sm text-xs">
                                    2D Phụ Đề
                                </label>
                                <div class="mt-1.5">
                                    <div
                                        class="flex items-center gap-2 mt-2 flex-wrap"
                                    >
                                        <v-btn
                                            :size="
                                                $vuetify.display.xs
                                                    ? 'x-small'
                                                    : 'small'
                                            "
                                            variant="outlined"
                                            class="inline-flex items-center justify-center text-sm font-medium border bg-transparent h-8 rounded-md px-2"
                                            v-for="schedule in cinema.resultSchedules"
                                            :key="schedule.schedule_id"
                                            @click="
                                                handleClickSeat({
                                                    cinema,
                                                    schedule,
                                                })
                                            "
                                        >
                                            {{ schedule.start_time }}
                                        </v-btn>
                                    </div>
                                </div>
                            </div>
                        </v-expansion-panel-text>
                    </v-expansion-panel>
                </v-expansion-panels>
                <v-empty-state
                    text="Chưa có suất chiếu"
                    min-height="25vh"
                    v-if="this.scheduleStore.theater?.length == 0"
                >
                </v-empty-state>
            </v-skeleton-loader>
        </div>
    </v-card>
</template>
<script>
import { formatdate } from "@/utils/format-date";
import { mapStores } from "pinia";
import { cityAppStore } from "@/stores/CityStore";
import { scheduleAppStore } from "@/stores/ScheduleStore";

export default {
    data() {
        return {
            formatdate: formatdate(),
            selectedDate: formatdate()[0].dayNumber,
            selectedCity: null,
            isLoading: false,
        };
    },
    computed: {
        ...mapStores(cityAppStore, scheduleAppStore),
        citys() {
            if (this.cityStore.citys) {
                return this.cityStore.citys;
            }
        },
        cinemas() {
            if (this.scheduleStore.theater) {
                return this.scheduleStore.theater?.resultCinema;
            }
        },
    },
    watch: {
        selectedCity() {
            return this.fetchData();
        },
    },
    methods: {
        async fetchData() {
            try {
                this.isLoading = true;
                await this.cityStore.fetchAll();
                await this.scheduleStore.fetchAll({
                    date_schedule: "17/07",
                    movie_id: this.$route.params.id,
                    city_id: this.selectedCity,
                });
                this.isLoading = false;
            } catch (error) {
                console.log(error);
            }
        },
        handleClickSeat(value) {
            localStorage.setItem(
                "schedule",
                JSON.stringify({
                    cinema_id: value.cinema.cinemaId,
                    cinema_name: value.cinema.cinema_name,
                    cinema_address: value.cinema.cinema_address,
                    date: this.selectedDate.slice(-5),
                    end_time: value.schedule.end_time,
                    movie_id: value.schedule.movie_id,
                    room_id: value.schedule.room_id,
                    schedule_id: value.schedule.schedule_id,
                    start_time: value.schedule.start_time,
                })
            );
            this.$router.push({
                name: "SeatRedirect",
            });
        },
    },
    mounted() {
        this.fetchData();
    },
};
</script>
<style lang="scss"></style>
