<template>
    <v-select
        v-model="form"
        :items="items"
        :rules="rules"
        :item-title="itemTitle"
        :item-value="itemValue"
        :placeholder="placeholder"
        density="compact"
        variant="outlined"
        v-bind="$attrs"
    ></v-select>
</template>
<script>
export default {
    props: {
        modelValue: {},
        placeholder: { type: String, default: "" },
        items: { type: Array },
        rules: { type: [Array, Function] },
        itemTitle: {
            type: String,
            default: "name",
        },
        itemValue: {
            type: String,
            default: "id",
        },
        placeholder: {
            type: String,
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
<style lang=""></style>
