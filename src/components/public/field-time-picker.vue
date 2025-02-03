<template>
    <v-text-field
        v-model="form"
        :active="showMenu"
        :rules="rules"
        append-inner-icon="mdi-clock-time-four-outline"
        variant="outlined"
        density="compact"
        :placeholder="placeholder"
        readonly
        v-bind="$attrs"
    >
        <v-menu
            v-model="showMenu"
            :close-on-content-click="false"
            activator="parent"
            transition="scale-transition"
        >
            <v-time-picker
                v-model="form"
                :max="max"
                :min="min"
                ampm-in-title
            ></v-time-picker>
        </v-menu>
    </v-text-field>
</template>
<script setup>
import { ref, computed } from "vue";
import { VTimePicker } from "vuetify/labs/VTimePicker";

// emit
const emit = defineEmits(["update:modelValue"]);

// props
const props = defineProps({
    // model default
    modelValue: {
        required: true,
    },
    placeholder: {
        type: String,
        default: "",
    },
    rules: { type: [Array, Function] },
    min: {},
    max: {},
});
//
const showMenu = ref(false);
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
