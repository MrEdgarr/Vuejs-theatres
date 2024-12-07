<template>
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
            <div
                class="flex justify-between items-center md:text-lg text-sm font-medium"
            >
                1. Vị trí
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

        <div>
            <div
                class="flex justify-between items-center md:text-lg text-sm font-medium"
            >
                2. Rạp
                <v-icon size="smail"> mdi-filmstrip</v-icon>
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

        <div>
            <div
                class="flex justify-between items-center md:text-lg text-sm font-medium"
            >
                3. Ngày
                <v-icon size="smail"> mdi-calendar-range</v-icon>
            </div>
            <v-select
                placeholder="Rạp"
                :items="date"
                item-title="dayNumber"
                variant="outlined"
                density="compact"
                hide-details="auto"
            ></v-select>
        </div>
        <div class="flex w-full flex-nowrap items-center">
            <div class="hidden flex-none sm:block">
                <div class="flex h-9 w-9 flex-none items-center justify-center">
                    <v-img
                        src="https://cdn.mservice.com.vn/app/img/booking/logo_beta.png"
                        width="35"
                        height="35"
                        class="m-2 ml-3"
                    ></v-img>
                </div>
            </div>
            <div class="min-w-0 flex-1 sm:pl-3">
                <p class="font-bold sm:text-sm text-xs font-bold">
                    Galaxy Nguyễn Du
                </p>
                <div
                    class="flex flex-nowrap items-center sm:text-sm text-xs font-"
                >
                    <span class="sm:text-sm text-xs line-clamp-1 text-gray-400">
                        116 Nguyễn Du, Quận 1, Tp.HCM
                        <a
                            class="inline-block text-primary whitespace-nowrap relative z-10 cursor-pointer hover:underline"
                        >
                            [ Bản đồ ]
                        </a>
                    </span>
                </div>
            </div>
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
