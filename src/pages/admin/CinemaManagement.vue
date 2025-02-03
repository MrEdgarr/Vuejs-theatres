<template>
    <v-card elevation="5">
        <v-card-title class="d-flex align-center py-5">
            <v-autocomplete
                v-model="search"
                :items="cinemas"
                item-title="name"
                placeholder="Tìm kiếm rạp"
                prepend-inner-icon="mdi-magnify"
                variant="outlined"
                density="compact"
                hide-details
            ></v-autocomplete>
            <v-spacer></v-spacer>
            <DialogCinemaForm ref="refForm" :cinemas="cinemas" />
            <DialogCinemaDelete ref="refDelete" />
        </v-card-title>
        <v-card-text>
            <v-data-table
                v-model="selected"
                :headers="headers"
                :items="cinemas"
                :search="search"
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
                        <v-icon size="small" @click="deleteCinema(item)">
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
import { ref, onMounted, watch } from "vue";
// views component
import DialogCinemaForm from "@/views/admin/cinema-management/Form.vue";
import DialogCinemaDelete from "@/views/admin/cinema-management/Delete.vue";
// store
import { cinemaAppStore } from "@/stores/CinemaStore";
const cinemaStore = cinemaAppStore();

// Variable
const headers = ref([
    {
        key: "id",
        title: "ID",
    },
    {
        key: "name",
        title: "Name",
    },
    {
        key: "address",
        title: "Address",
    },
    {
        key: "phone",
        title: "Phone",
    },
    {
        key: "city_name",
        title: "City",
    },
    { title: "Actions", key: "actions", sortable: false },
]);
const search = ref("");
const selected = ref([]);
const isLoading = ref(false);
const cinemas = ref([]);

// ref component
const refForm = ref(null);
const refDelete = ref(null);

// methods
const fetchData = async () => {
    isLoading.value = true;
    try {
        await cinemaStore.fetchAll();
        cinemas.value = cinemaStore.cinemas;
        isLoading.value = false;
    } catch (error) {
        console.log("🚀 ~ fetchData ~ error:", error);
        isLoading.value = false;
    }
};
const edit = (item) => {
    refForm.value.edit(item);
};
const deleteCinema = (item) => {
    refDelete.value.open();
};

// mounted
onMounted(() => {
    fetchData();
});
</script>

<style></style>
