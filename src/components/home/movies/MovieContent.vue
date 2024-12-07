<template>
    <v-card>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-5 px-5 pt-5">
            <div class="flex items-center">
                <v-select
                    placeholder="Toàn quốc"
                    item-value="value."
                    variant="outlined"
                    density="compact"
                    hide-details="auto"
                ></v-select>
            </div>
            <div class="flex items-center">
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
        </div>
        <div class="pt-5">
            <v-expansion-panels variant="accordion">
                <v-expansion-panel v-for="i in 10" :key="i">
                    <v-expansion-panel-title expand-icon="mdi-menu-down">
                        <div class="flex items-center">
                            <div>
                                <v-img
                                    src="https://cdn.mservice.com.vn/app/img/booking/logo_beta.png"
                                    width="35"
                                    height="35"
                                    class="m-2 ml-3"
                                ></v-img>
                            </div>
                            <div>
                                <p
                                    class="font-bold sm:text-sm text-xs font-bold"
                                >
                                    Galaxy Nguyễn Du
                                </p>
                                <span
                                    class="sm:text-sm text-xs line-clamp-1 text-gray-500"
                                >
                                    116 Nguyễn Du, Quận 1, Tp.HCM</span
                                >
                            </div>
                        </div>
                    </v-expansion-panel-title>
                    <v-expansion-panel-text>
                        <div>
                            <label class="font-bold sm:text-sm text-xs"
                                >2D Phụ Đề
                            </label>
                            <div class="mt-1.5">
                                <router-link
                                    :to="{
                                        name: 'SeatRedirect',
                                        params: { id: '123' },
                                    }"
                                >
                                    <div
                                        class="flex items-center gap-2 mt-2 flex-wrap"
                                    >
                                        <v-btn
                                            :size="
                                                mobileBreakpoint
                                                    ? 'x-small'
                                                    : 'small'
                                            "
                                            variant="outlined"
                                            class="inline-flex items-center justify-center text-sm font-medium border bg-transparent h-8 rounded-md px-2"
                                            v-for="item in 8"
                                        >
                                            11:50
                                        </v-btn>
                                    </div>
                                </router-link>
                            </div>
                        </div>
                    </v-expansion-panel-text>
                </v-expansion-panel>
            </v-expansion-panels>
        </div>
    </v-card>
</template>
<script>
//mobileBreakpoint
import { useDisplay } from "vuetify";

export default {
    data() {
        const { xs } = useDisplay();
        return {
            mobileBreakpoint: xs,
        };
    },
};
</script>
<style lang="scss"></style>
