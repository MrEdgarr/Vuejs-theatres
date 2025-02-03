<template>
    <v-card elevation="5">
        <v-card-title class="d-flex align-center py-5">
            <field-autocomplete
                v-model="search"
                :items="movies"
                item-title="name"
                placeholder="Tìm kiếm phim"
                prepend-inner-icon="mdi-magnify"
            ></field-autocomplete>
            <v-autocomplete
                v-model="search"
                :items="movies"
                item-title="name"
                placeholder="Tìm kiếm phim"
                prepend-inner-icon="mdi-magnify"
                variant="outlined"
                density="compact"
                hide-details
            ></v-autocomplete>
            <v-spacer></v-spacer>
            <DialogMovieForm ref="refForm" :movies="movies" />
            <DialogMovieInfo ref="refInfo" />
            <DialogMovieDelete ref="refDelete" />
        </v-card-title>
        <v-card-text>
            <v-data-table
                v-model="selected"
                :headers="headers"
                :items="movies"
                :search="search"
                density="compact"
                fixed-footer
                fixed-header
                loading-text="Loading..."
                :loading="isLoading"
            >
                <template v-slot:item.poster="{ item }">
                    <v-card class="my-2" elevation="2" rounded width="50">
                        <v-img :src="item.poster" cover></v-img>
                    </v-card>
                </template>
                <template v-slot:item.releases="{ item }">
                    <div>{{ formatDateTime(item.releases).showDate }}</div>
                </template>
                <template v-slot:item.status="{ item }">
                    <div>{{ statusMovie(item) }}</div>
                </template>
                <template v-slot:item.actions="{ item }">
                    <div class="block">
                        <v-icon
                            class="me-2"
                            size="small"
                            @click="showMovie(item)"
                        >
                            mdi-eye
                        </v-icon>
                        <v-icon
                            class="me-2"
                            size="small"
                            @click="editMovie(item)"
                        >
                            mdi-pencil
                        </v-icon>
                        <v-icon size="small" @click="deleteMovie(item)">
                            mdi-delete
                        </v-icon>
                    </div>
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
import { ref, computed, onMounted } from "vue";
// Format Date
import { formatDateTime } from "@/utils/format-date";
// Store
import { movieAppStore } from "@/stores/MovieStore";
const movieStore = movieAppStore();
// Component
import DialogMovieForm from "@/views/admin/movie-management/Form.vue";
import DialogMovieDelete from "@/views/admin/movie-management/Delete.vue";
import DialogMovieInfo from "@/views/admin/movie-management/Info.vue";

// Variable
const search = ref(null);
const headers = ref([
    {
        key: "id",
        title: "ID",
    },
    { key: "poster", title: "Poster" },
    {
        key: "name",
        title: "Name",
    },
    { key: "releases", title: "Releases" },
    { key: "status", title: "Status" },
    { title: "Actions", key: "actions", sortable: false },
]);
const selected = ref([]);
const isLoading = ref(false);
const movies = ref();

// ref component
const refForm = ref(null);
const refInfo = ref(null);
const refDelete = ref(null);

// computed

// methods
const fetchData = async () => {
    isLoading.value = true;
    try {
        await movieStore.fetchAll();
        movies.value = movieStore.movies;

        isLoading.value = false;
    } catch (error) {
        isLoading.value = false;
    }
};
const statusMovie = (item) => {
    const itemDate = formatDateTime(item.releases).getDate;
    const newDate = formatDateTime(new Date()).getDate;
    if (itemDate > newDate) {
        return "Sắp chiếu";
    } else {
        return "Đang chiếu";
    }
};

// Chỉnh sửa dữ liệu
const editMovie = (item) => {
    refForm.value.edit(item);
};
// Xóa dữ liệu
const deleteMovie = (item) => {
    refDelete.value.deleteItem(item);
};
// Hiển thị thông tin chi tiết
const showMovie = (item) => {
    refInfo.value.open(item);
};

// Mounted
onMounted(() => {
    fetchData();
});
</script>
<style></style>
