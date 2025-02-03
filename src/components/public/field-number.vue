<template>
    <v-number-input
        v-model="form"
        :rules="rules"
        :placeholder="placeholder"
        :min="min"
        :max="max"
        control-variant="default"
        inset
        variant="outlined"
        density="compact"
        v-bind="$attrs"
    ></v-number-input>
</template>
<script>
import { VNumberInput } from "vuetify/labs/VNumberInput";

export default {
    components: {
        VNumberInput,
    },
    props: {
        modelValue: {},
        placeholder: { type: String, default: "" },
        rules: { type: [Array, Function] },
        min: {
            type: Number,
            default: 0,
        },
        max: {
            type: Number,
            default: 500000,
        },
    },

    computed: {
        form: {
            get() {
                return this.modelValue;
            },
            set(val) {
                // Sự kiện được phát ra khi thành phần thay đổi.
                return this.$emit("update:modelValue", val);
            },
        },
    },
};
</script>
<style></style>
