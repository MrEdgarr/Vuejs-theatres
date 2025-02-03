<template>
    <v-date-input
        v-model="form"
        :rules="rules"
        :placeholder="placeholder"
        :min="min"
        :max="max"
        prepend-icon=""
        append-inner-icon="$calendar"
        variant="outlined"
        density="compact"
        v-bind="$attrs"
    ></v-date-input>
</template>
<script setup>
import { ref, computed } from "vue";
import { VDateInput } from "vuetify/labs/VDateInput";

// emit
const emit = defineEmits(["update:modelValue"]);

// props
const props = defineProps({
    modelValue: { typeof: Object },
    placeholder: { type: String, default: "" },
    rules: { type: [Array, Function] },
    min: {},
    max: {},
});
// computed
const form = computed({
    get: () => {
        return props.modelValue;
    },
    set: (val) => {
        console.log(val);
        // Sự kiện được phát ra khi thành phần thay đổi.
        emit("update:modelValue", val);
    },
});
// export default {
//     components: { VDateInput },
//     props: {
//         modelValue: { typeof: Object },
//         placeholder: { type: String, default: "" },
//         rules: { type: [Array, Function] },
//         min: {},
//         max: {},
//     },
//     computed: {
//         form: {
//             get() {
//                 return this.modelValue;
//             },
//             set(val) {
//                 // Sự kiện được phát ra khi thành phần thay đổi.
//                 return this.$emit("update:modelValue", val);
//             },
//         },
//     },
// };
</script>
<style lang=""></style>
