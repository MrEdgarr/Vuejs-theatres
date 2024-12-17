<template>
    <section>
        <dashboard-banner />
    </section>
    <section class="sm:py-5 border-b">
        <v-container>
            <div class="!max-w-6xl m-auto md:p-0">
                <div class="text-center mb-5">
                    <h2
                        class="sm:text-2xl text-base font-bold after:bg-blue-500 after:block after:w-12 after:h-0.5 after:m-auto after:mt-2.5"
                    >
                        Phim Đang chiếu
                    </h2>
                </div>
                <dashboard-movie />
            </div>
        </v-container>
    </section>
    <section class="sm:py-5 border-b">
        <v-container>
            <div class="!max-w-6xl m-auto md:p-0">
                <div class="text-center mb-5">
                    <h2
                        class="sm:text-2xl text-base font-bold after:bg-blue-500 after:block after:w-12 after:h-0.5 after:m-auto after:mt-2.5"
                    >
                        Phim Sắp chiếu
                    </h2>
                </div>
                <dashboard-movie />
            </div>
        </v-container>
    </section>
    <section class="sm:py-5 border-b">
        <v-container>
            <div class="!max-w-6xl m-auto md:p-0">
                <div class="text-center mb-5">
                    <h2
                        class="sm:text-2xl text-base font-bold after:bg-blue-500 after:block after:w-12 after:h-0.5 after:m-auto after:mt-2.5"
                    >
                        Blog phim ảnh
                    </h2>
                </div>
                <dashboard-block :isLoading="isLoading" />
            </div>
        </v-container>
    </section>
    <section class="sm:py-8">
        <v-container>
            <div class="!max-w-6xl m-auto md:p-0">
                <div class="text-center mb-5">
                    <h2
                        class="sm:text-2xl text-base font-bold after:bg-blue-500 after:block after:w-12 after:h-0.5 after:m-auto after:mt-2.5"
                    >
                        Tin tức - Khuyến mãi
                    </h2>
                </div>
                <dashboard-new :isLoading="isLoading" />
            </div>
        </v-container>
    </section>
</template>
<script>
import DashboardBanner from "@/templates/home/dashboard/DashboardBanner.vue";
import DashboardMovie from "@/templates/home/dashboard/DashboardMovie.vue";
import DashboardBlock from "@/templates/home/dashboard/DashboardBlock.vue";
import DashboardNew from "@/templates/home/dashboard/DashboardNew.vue";

import { useDisplay } from "vuetify";
export default {
    components: {
        DashboardBanner,
        DashboardMovie,
        DashboardBlock,
        DashboardNew,
    },
    data() {
        const { xs } = useDisplay();
        return {
            mobileBreakpoint: xs, //thiết kế đáp ứng < 600
            tab: null,
        };
    },
};
</script>
<style lang=""></style>
