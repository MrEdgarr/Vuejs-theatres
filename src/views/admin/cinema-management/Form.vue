<template>
    <v-dialog v-model="isDialog" max-width="500" persistent>
        <template v-slot:activator="{ props }">
            <v-btn color="primary" v-bind="props"> Thêm mới </v-btn>
        </template>
        <v-card>
            <v-card-title class="text-h5 text-center">
                {{ formTitle }}
            </v-card-title>
            <v-card-text>
                <v-form ref="myform" fast-fail @submit.prevent>
                    <field-text
                        v-model="defaultForm.name"
                        :rules="[rules.required, rules.min]"
                        placeholder="Tên rạp"
                    >
                    </field-text>
                    <field-text
                        v-model="defaultForm.address"
                        :rules="[rules.required, rules.min]"
                        placeholder="Địa chỉ"
                    >
                    </field-text>
                    <field-text
                        v-model="defaultForm.phone"
                        :rules="[rules.required, rules.phoneRules]"
                        placeholder="Số điệnn thoại"
                    >
                    </field-text>
                    <field-select
                        v-model="defaultForm.city_id"
                        :rules="[rules.required]"
                        :items="citys"
                        placeholder="Thành phố"
                    >
                    </field-select>

                    <div class="text-right">
                        <v-btn @click="close()">Hủy bỏ</v-btn>
                        <v-btn
                            class="ml-2"
                            color="primary"
                            type="submit"
                            @click="save()"
                        >
                            Lưu
                        </v-btn>
                    </div>
                </v-form>
            </v-card-text>
        </v-card>
    </v-dialog>
</template>
<script setup>
import { ref, computed, onMounted } from "vue";
// store
import { cityAppStore } from "@/stores/CityStore";
const cityStore = cityAppStore();
// Rules
import { validatioForm } from "@/utils/validationForm";
const rules = validatioForm;
// Props
const props = defineProps({ cinemas: Object });
// Ref component
const myform = ref(null);

// Variable
const defaultForm = ref({
    name: "",
    address: "",
    phone: "",
    city_id: null,
    room_total: null,
});
const editedIndex = ref(-1);
const isDialog = ref(false);
const isLoading = ref(false);

const citys = ref(false);

// Computed
const formTitle = computed(() => {
    return editedIndex.value === -1 ? "Thêm mới" : "Chỉnh sửa";
});

// Methods
const fetchData = async () => {
    isLoading.value = true;
    try {
        await cityStore.fetchAll();
        citys.value = cityStore.citys;
        isLoading.value = false;
    } catch (error) {
        console.log("🚀 ~ fetchData ~ error:", error);
        isLoading.value = false;
    }
};
const edit = (item) => {
    editedIndex.value = props.cinemas.indexOf(item);
    defaultForm.value = Object.assign({}, item);
    open();
};
const save = (item) => {};
const open = () => {
    isDialog.value = true;
};
const close = () => {
    editedIndex.value = -1;
    myform.value.reset();
    isDialog.value = false;
};
// Mounted
onMounted(() => {
    fetchData();
});

defineExpose({ edit });
</script>
<style lang=""></style>
