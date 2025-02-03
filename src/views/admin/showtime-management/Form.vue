<template>
    <v-dialog v-model="isDialog" max-width="500" persistent>
        <template v-slot:activator="{ props }">
            <v-btn color="primary" v-bind="props"> Thêm mới </v-btn>
        </template>
        <v-card>
            <v-card-title class="text-h5 text-center">
                {{ formTitle }}
            </v-card-title>
            {{ defaultForm.date }}
            <v-card-text>
                <v-form ref="myform" fast-fail @submit.prevent>
                    <field-select
                        v-model="defaultForm.movie_id"
                        :rules="[rules.required]"
                        :items="movies"
                        placeholder="Chọn phim"
                    ></field-select>
                    <field-select
                        v-model="defaultForm.cinema_id"
                        :rules="[rules.required]"
                        :items="cinemas"
                        placeholder="Chọn rạp"
                    ></field-select>
                    <field-select
                        v-model="defaultForm.room_id"
                        :rules="[rules.required]"
                        :items="rooms"
                        :disabled="!defaultForm.cinema_id"
                        placeholder="Chọn phòng"
                        ref="adrlistRef"
                    ></field-select>

                    <div class="grid grid-cols-2 gap-5">
                        <field-date
                            v-model="defaultForm.date"
                            placeholder="Chọn ngày chiếu"
                            :rules="[rules.required]"
                            :min="minDate"
                            :disabled="!defaultForm.movie_id"
                        >
                        </field-date>
                        <field-time-picker
                            v-model="defaultForm.start_time"
                            placeholder="Giờ bắt đầu"
                            :rules="[rules.required]"
                            min="08:00"
                            max="22:00"
                            :disabled="!defaultForm.movie_id"
                        ></field-time-picker>
                    </div>
                    <field-number
                        v-model="defaultForm.price"
                        placeholder="Gia ve"
                        :min="0"
                    ></field-number>
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
import { ref, onMounted, computed, watch } from "vue";

// Rules
import { validatioForm } from "@/utils/validationForm";
const rules = validatioForm;

import { formatDateTime, AddMinute } from "@/utils/format-date";

// Props
const props = defineProps({
    cinemas: Object,
    movies: Object,
    showtimes: Object,
});

// Ref component
const myform = ref(null);

// Variable
const defaultForm = ref({
    cinema_id: null,
    movie_id: null,
    room_id: null,
    start_time: null,
    end_time: null,
    date: null,
    price: null,
});
const editedIndex = ref(-1);
const isDialog = ref(false);
const minDate = ref(new Date().toISOString().split("T")[0]);

// Computed
const formTitle = computed(() => {
    return editedIndex.value === -1 ? "Thêm mới" : "Chỉnh sửa";
});
const rooms = computed(() => {
    if (defaultForm.value.cinema_id) {
        return props.cinemas.filter(
            (item) => item.id === defaultForm.value.cinema_id
        )[0].roomResult;
    }
});
// Watch
watch(
    () => defaultForm.value.cinema_id,
    (newVal, oldVal) => {
        if (!oldVal) return;
        defaultForm.value.room_id = null;
    },
    { deep: true }
);
watch(
    () => defaultForm.value.start_time,
    (newVal, oldVal) => {
        if (defaultForm.value.movie_id) {
            var movie = props.movies.filter(
                (item) => item.id === defaultForm.value.movie_id
            );
            defaultForm.value.end_time = AddMinute({
                minute: movie[0].duration,
                time: newVal,
            }).getEndTime;
        }
    },
    { deep: true }
);
// Methods
const edit = (item) => {
    editedIndex.value = props.showtimes.indexOf(item);
    defaultForm.value = {
        cinema_id: item.cinema_id,
        movie_id: item.movie_id,
        room_id: item.room_id,
        start_time: formatDateTime(item.start_time).showTime,
        end_time: formatDateTime(item.end_time).showTime,
        date: new Date(item.start_time),
        price: item.price,
    };
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

defineExpose({ edit });
</script>
<style lang="scss"></style>
