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
                        placeholder="Tên phim"
                    ></field-text>
                    <field-textarea
                        v-model="defaultForm.describe"
                        :rules="[rules.required, rules.min]"
                        placeholder="Mô tả"
                    ></field-textarea>
                    <field-text
                        v-model="defaultForm.trailer"
                        :rules="[rules.required, rules.min]"
                        placeholder="Trailer"
                    ></field-text>
                    <field-autocomplete
                        v-model="defaultForm.genres"
                        :rules="[rules.required]"
                        :items="itemGenre"
                        placeholder="Thể loại"
                        multiple
                    ></field-autocomplete>
                    <div class="grid grid-cols-2 gap-2">
                        <field-select
                            v-model="defaultForm.cens"
                            :rules="[rules.required]"
                            placeholder="Độ tuổi"
                            :items="['P', 'K', 'C13', 'C16', 'C18']"
                        >
                        </field-select>
                        <field-date
                            v-model="defaultForm.releases"
                            :rules="[rules.required]"
                            placeholder="Ngày phát hành"
                            :min="new Date()"
                        ></field-date>
                    </div>
                    <div class="grid grid-cols-2 gap-2">
                        <field-number
                            v-model="defaultForm.duration"
                            :rules="[rules.required]"
                            placeholder="Thời lượng"
                        ></field-number>
                        <field-text
                            v-model="defaultForm.country"
                            :rules="[rules.required]"
                            placeholder="Quốc gia"
                        ></field-text>
                    </div>
                    <field-file
                        v-model="defaultForm.poster"
                        :rules="[rules.required]"
                        :label="defaultForm.poster ? '' : 'Chọn ảnh'"
                    >
                    </field-file>
                    <field-file
                        v-model="defaultForm.backdrop"
                        :rules="[rules.required]"
                        :label="defaultForm.backdrop ? '' : 'Chọn ảnh'"
                    >
                    </field-file>

                    <div class="grid grid-cols-2 gap-2">
                        <field-text
                            v-model="defaultForm.director"
                            :rules="[rules.required]"
                            placeholder="Đạo diễn"
                        ></field-text>
                        <field-text
                            v-model="defaultForm.producer"
                            :rules="[rules.required]"
                            placeholder="Nhà sản xuất"
                        ></field-text>
                    </div>

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
import { ref, onMounted, computed } from "vue";
// Store
import { movieAppStore } from "@/stores/MovieStore";
const movieStore = movieAppStore();

// API Object
import itemGenre from "@/utils/Data/ObjectGenre";
// Rules
import { validatioForm } from "@/utils/validationForm";
const rules = validatioForm;
// Props
const props = defineProps({ movies: Object });

// Ref component
const myform = ref(null);

// // Variable
const defaultForm = ref({
    name: "",
    describe: "",
    trailer: "",
    cens: null,
    genres: null,
    releases: null,
    duration: null,
    poster: null,
    backdrop: null,
    country: "",
    director: "",
    producer: "",
});
const editedIndex = ref(-1);
const isDialog = ref(false);

// Computed
const formTitle = computed(() => {
    return editedIndex.value === -1 ? "Thêm mới" : "Chỉnh sửa";
});

// Methods
const save = async () => {
    // Kiểm tra dữ liệu nhập vào khi lưu
    const { valid } = await myform.value.validate();
    movieStore.postApiMovie({
        name: defaultForm.value.name,
        describe: defaultForm.value.describe,
        trailer: defaultForm.value.trailer,
        cens: defaultForm.value.cens,
        genres: defaultForm.value.genres,
        releases: defaultForm.value.releases,
        duration: defaultForm.value.duration,
        poster: defaultForm.value.poster,
        backdrop: defaultForm.value.backdrop,
        country: defaultForm.value.country,
        director: defaultForm.value.director,
        producer: defaultForm.value.producer,
    });
    if (valid) return close();
};
const edit = async (item) => {
    // this.form = Object.assign({}, item); //Sao chép dữ liệu
    defaultForm.value = Object.assign({}, item); //Sao chép dữ liệu
    editedIndex.value = props.movies.indexOf(item);
    // defaultForm.value = {
    //     name: item.name,
    //     describe: item.describe,
    //     trailer: item.trailer,
    //     cens: item.cens,
    //     genres: item.genres,
    //     releases: item.releases,
    //     duration: item.duration,
    //     poster: item.poster,
    //     backdrop: item.backdrop,
    //     country: item.country,
    //     director: item.director,
    //     producer: item.producer,
    // };
    open();
};
const open = () => {
    isDialog.value = true;
};
const close = () => {
    editedIndex.value = -1;
    myform.value.reset();
    isDialog.value = false;
};
defineExpose({
    edit,
    open,
});
</script>

<style></style>
