<template>
    <div>
        <v-file-input
            v-model="form"
            :rules="rules"
            placeholder="Ảnh"
            prepend-icon=""
            append-inner-icon="mdi-camera"
            variant="outlined"
            density="compact"
            v-bind="$attrs"
        >
        </v-file-input>
        <div class="grid grid-cols-2 gap-2" :class="!modelValue ? '' : 'mb-2'">
            <v-img :src="convertImage" max-height="50"></v-img>
            <div class="text-xs">
                {{ modelValue?.name || modelValue }}
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref, computed } from "vue";

// emit
const emit = defineEmits(["update:modelValue"]);
// props
const props = defineProps({
    modelValue: {},
    placeholder: { type: String, default: "" },
    rules: { type: [Array, Function] },
});
// computed
const form = computed({
    get: () => {
        return props.modelValue;
    },
    set: (val) => {
        // Sự kiện được phát ra khi thành phần thay đổi.
        emit("update:modelValue", val);
    },
});
//         // Kiểm tra đầu vào của dữ liệu ảnh
//         // Thêm mới => typeof Object
//         // Chỉnh sửa => typeof String
const convertImage = computed(() => {
    const image = props.modelValue;
    if (typeof props.modelValue == "object" && props.modelValue !== null) {
        // Phương thức createObjectURL() tĩnh của URL giao diện tạo ra một
        // chuỗi chứa URL biểu diễn đối tượng được cung cấp trong tham số.
        return URL.createObjectURL(image);
    } else {
        return image;
    }
});
// export default {
//     props: {
//         modelValue: {},
//         placeholder: { type: String, default: "" },
//         rules: { type: [Array, Function] },
//     },
//     computed: {
//         form: {
//             get() {
//                 return this.modelValue;
//             },
//             set(val) {
//                 this.$emit("update:modelValue", val);
//             },
//         },
//         // Kiểm tra đầu vào của dữ liệu ảnh
//         // Thêm mới => typeof Object
//         // Chỉnh sửa => typeof String
//         convertImage() {
//             const image = this.modelValue;
//             if (
//                 typeof this.modelValue == "object" &&
//                 this.modelValue !== null
//             ) {
//                 // Phương thức createObjectURL() tĩnh của URL giao diện tạo ra một
//                 // chuỗi chứa URL biểu diễn đối tượng được cung cấp trong tham số.
//                 return URL.createObjectURL(image);
//             } else {
//                 return image;
//             }
//         },
//     },
// };
</script>
<style lang=""></style>
