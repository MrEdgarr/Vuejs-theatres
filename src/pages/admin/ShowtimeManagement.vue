<template>
    <v-card elevation="5">
        <v-card-title class="!grid grid-cols-3 py-5 w-full gap-5">
            <v-autocomplete
                v-model="searchValue.movie"
                :items="defaultValue.movies"
                item-title="name"
                item-value="id"
                placeholder="Tìm kiếm phim"
                prepend-inner-icon="mdi-magnify"
                variant="outlined"
                density="compact"
                hide-details
            ></v-autocomplete>
            <v-autocomplete
                v-model="searchValue.cinema"
                :items="defaultValue.cinemas"
                item-title="name"
                item-value="id"
                placeholder="Tìm kiếm rạp"
                prepend-inner-icon="mdi-magnify"
                variant="outlined"
                density="compact"
                hide-details
            ></v-autocomplete>
            <v-date-input
                v-model="searchValue.date"
                placeholder="Ngày chiếu"
                prepend-icon=""
                append-inner-icon="$calendar"
                variant="outlined"
                density="compact"
                hide-details
            ></v-date-input>
        </v-card-title>
        <v-divider class="border-opacity-100"></v-divider>
        <v-card-title class="text-right">
            <DialogShowtimeForm
                ref="refForm"
                :showtimes="defaultValue.schedules"
                :cinemas="defaultValue.cinemas"
                :movies="defaultValue.movies"
            />
            <DialogShowtimeDelete ref="refDelete" />
        </v-card-title>
        <v-card-text>
            <v-data-table
                v-model="selected"
                :headers="headers"
                :items="defaultValue.schedules"
                fixed-footer
                fixed-header
                loading-text="Loading..."
                :loading="isLoading"
            >
                <template v-slot:item.actions="{ item }">
                    <div class="block">
                        <v-icon class="me-2" size="small" @click="edit(item)">
                            mdi-pencil
                        </v-icon>
                        <v-icon size="small" @click="deleteItem(item)">
                            mdi-delete
                        </v-icon>
                    </div>
                </template>
                <template v-slot:item.start_date="{ item }">
                    {{ formatDateTime(item.start_time).showTime }}
                    -
                    {{ formatDateTime(item.start_time).showDate }}
                </template>
                <template v-slot:item.price="{ item }">
                    {{ formatPrice(item.price) }}
                </template>
                <template v-slot:no-data>
                    <div class="opacity-50">
                        <v-icon size="x-large">mdi-package-variant</v-icon>
                        <div>Không có dũ liệu</div>
                    </div>
                </template>
            </v-data-table>
        </v-card-text>
    </v-card>
</template>
<script setup>
import { ref, onMounted, watch } from "vue";
// views component
import DialogShowtimeForm from "@/views/admin/showtime-management/Form.vue";
import DialogShowtimeDelete from "@/views/admin/showtime-management/Delete.vue";
// component vuetify date
import { VDateInput } from "vuetify/labs/VDateInput";
// utils
import { formatDateTime } from "@/utils/format-date";
import { formatPrice } from "@/utils/format-price";
// Store
import { movieAppStore } from "@/stores/MovieStore";
import { scheduleAppStore } from "@/stores/ScheduleStore";
import { cinemaAppStore } from "@/stores/CinemaStore";
const movieStore = movieAppStore();
const cinemaStore = cinemaAppStore();
const scheduleStore = scheduleAppStore();

// Variable
const headers = ref([
    {
        key: "id",
        title: "ID",
    },
    {
        key: "movie_name",
        title: "Movie",
    },
    {
        key: "cinema_name",
        title: "Cinema",
    },
    {
        key: "room_name",
        title: "Room",
    },
    {
        key: "start_date",
        title: "Show Date",
    },
    {
        key: "price",
        title: "Price",
    },
    { title: "Actions", key: "actions", sortable: false },
]);
const searchValue = ref({ movie: null, cinema: null, date: null });
const defaultValue = ref({ schedules: [], movies: [], cinemas: [] });
const selected = ref([]);
const isLoading = ref(false);

// ref component
const refForm = ref(null);
const refDelete = ref(null);

// watch
watch(
    searchValue,
    (valNew, valOld) => {
        fetchDataSchedule();
    },
    { deep: true }
);

// methods
const fetchData = async () => {
    isLoading.value = true;
    try {
        fetchDataSchedule();
        await movieStore.fetchAll();
        await cinemaStore.fetchAll();

        defaultValue.value.movies = movieStore.movies;
        defaultValue.value.cinemas = cinemaStore.cinemas;
        isLoading.value = false;
    } catch (error) {
        console.log("🚀 ~ fetchData ~ error:", error);
        isLoading.value = false;
    }
};
const fetchDataSchedule = async () => {
    isLoading.value = true;
    try {
        await scheduleStore.fetchAll({
            movie_id: searchValue.value.movie,
            cinema_id: searchValue.value.cinema,
            datetime: formatDateTime(searchValue.value.date)?.showDate,
        });
        defaultValue.value.schedules = scheduleStore.schedules;
        isLoading.value = false;
    } catch (error) {
        console.log("🚀 ~ fetchData ~ error:", error);
        isLoading.value = false;
    }
};

const edit = (item) => {
    refForm.value.edit(item);
};
const deleteItem = (item) => {
    refDelete.value.deleteItem(item);
};

// Mounted
onMounted(() => {
    fetchData();
});
</script>

<style></style>
