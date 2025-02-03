<template>
    <v-card elevation="5">
        <v-card-title class="d-flex align-center py-5">
            <v-text-field
                v-model="search"
                placeholder="Tìm kiếm quản trị"
                prepend-inner-icon="mdi-magnify"
                variant="outlined"
                density="compact"
                hide-details
            ></v-text-field>
            <v-spacer></v-spacer>
            <DialogUserForm ref="refForm" :desserts="users" />
            <DialogUserDelete ref="refDelete" />
        </v-card-title>
        <v-card-text>
            <v-data-table
                v-model="selected"
                :headers="headers"
                :items="users"
                :search="search"
                fixed-footer
                fixed-header
                loading-text="Loading..."
                :loading="isLoading"
            >
                <template v-slot:item.username="{ item }">
                    <div>
                        <div class="font-semibold">{{ item.username }}</div>
                        <div>
                            {{ item.email }}
                        </div>
                    </div>
                </template>
                <template v-slot:item.last_logged_at="{ item }">
                    {{ formatDateTime(item.last_logged_at).showTime }}
                    <div>
                        {{ formatDateTime(item.last_logged_at).showDate }}
                    </div>
                </template>
                <template v-slot:item.created_at="{ item }">
                    {{ formatDateTime(item.created_at).showTime }}
                    <div>
                        {{ formatDateTime(item.created_at).showDate }}
                    </div>
                </template>
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
import { ref, onMounted } from "vue";
// Utils
import { formatDateTime } from "@/utils/format-date";
// views component
import DialogUserForm from "@/views/admin/account-management/Form.vue";
import DialogUserDelete from "@/views/admin/account-management/Delete.vue";
// Store
import { authAppStore } from "@/stores/AuthStore";
const authStore = authAppStore();

const search = ref("");
const headers = ref([
    {
        key: "id",
        title: "ID",
    },
    {
        key: "username",
        title: "UserInfo",
    },
    {
        key: "password",
        title: "Pass",
    },
    {
        key: "phone",
        title: "Phone",
    },
    {
        key: "last_logged_at",
        title: "Last Logged",
    },
    {
        key: "created_at",
        title: "Joining Date",
    },
    { title: "Actions", key: "actions", sortable: false },
]);
const selected = ref([]);
const isLoading = ref(false);
const users = ref([]);
// ref component
const refForm = ref(null);
const refDelete = ref(null);

// methods
const fetchData = async () => {
    isLoading.value = true;
    try {
        await authStore.fetchAll();
        users.value = authStore.users.filter((item) => item.role == "admin");
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
    refDelete.value.deleteItem(item);
};
// mounted
onMounted(() => {
    fetchData();
});
</script>

<style></style>
