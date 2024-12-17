<template>
    <div class="grid grid-cols-4 gap-2 sm:gap-5">
        <div class="col-span-2 row-start-1 col-start-1 md:col-span-1">
            <div
                class="flex justify-between items-center md:text-lg text-sm font-medium"
            >
                1. Ngày
                <v-icon size="smail"> mdi-calendar-range</v-icon>
            </div>
            <v-select
                placeholder="Rạp"
                :items="date"
                item-title="dayNumber"
                variant="outlined"
                density="compact"
                hide-details="auto"
                height="50"
            ></v-select>
        </div>
        <div class="col-span-4 md:col-span-2 md:row-start-1 md:col-start-2">
            <div
                class="flex justify-between items-center md:text-lg text-sm font-medium"
            >
                2. Phim
                <v-icon size="smail"> mdi mdi-map-marker</v-icon>
            </div>
            <v-select
                placeholder="Rạp"
                :items="date"
                item-title="dayNumber"
                variant="outlined"
                density="compact"
                hide-details="auto"
                height="50"
            ></v-select>
        </div>
        <div class="col-span-2 row-start-1 col-start-3 md:col-span-1">
            <div
                class="flex justify-between items-center md:text-lg text-sm font-medium"
            >
                3. Rạp
                <v-icon size="smail">mdi-movie-open</v-icon>
            </div>
            <!-- :item-title="itemTitle"
                    :item-value="itemValue" -->
            <v-select
                placeholder="Rạp"
                variant="outlined"
                density="compact"
                hide-details="auto"
            ></v-select>
        </div>
    </div>
</template>
<script>
import { formatdate } from "@/utils/format-date";
export default {
    data() {
        return {
            date: formatdate(),
        };
    },
    watch: {},
    methods: {},
    mounted() {
        console.log(this.date);
    },
};
</script>
<style lang=""></style>
