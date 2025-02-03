<template>
    <v-autocomplete
        v-model="form"
        :items="items"
        :rules="rules"
        :placeholder="placeholder"
        variant="outlined"
        density="compact"
        v-bind="$attrs"
    ></v-autocomplete>
</template>
<script setup>
import { computed } from "vue";
// emit
const emit = defineEmits(["update:modelValue"]);
// props
const props = defineProps({
    modelValue: { type: String, Object },
    items: { type: Array },
    placeholder: { type: String },
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
</script>
<style lang=""></style>
