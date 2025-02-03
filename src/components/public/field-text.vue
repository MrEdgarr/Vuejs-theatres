<template>
    <v-text-field
        v-model="form"
        :rules="rules"
        :placeholder="placeholder"
        variant="outlined"
        density="compact"
        v-bind="$attrs"
    ></v-text-field>
</template>
<script>
export default {
    props: {
        modelValue: { type: [String, Number] },
        placeholder: { type: String, default: "" },
        rules: { type: [Array, Function] },
    },
    computed: {
        form: {
            get() {
                return this.modelValue;
            },
            set(val) {
                // Sự kiện được phát ra khi thành phần thay đổi.
                this.$emit("update:modelValue", val);
            },
        },
    },
};
</script>
<style lang=""></style>
