<template>
    <section>
        <slider-view />
    </section>
    <section class="sm:py-8 border-b">
        <v-container>
            <div class="!max-w-6xl m-auto md:p-0">
                <v-tabs v-model="tab" align-tabs="center" class="mb-5">
                    <v-tab value="nowshowing">
                        <p class="sm:text-base text-xs font-bold">Đang chiếu</p>
                    </v-tab>
                    <v-tab value="comingsoon">
                        <p class="sm:text-base text-xs font-bold">Sắp chiếu</p>
                    </v-tab>
                </v-tabs>

                <v-tabs-window v-model="tab" class="disable-tab-transition">
                    <v-tabs-window-item value="nowshowing">
                        <movie-view />
                    </v-tabs-window-item>
                    <v-tabs-window-item value="comingsoon">
                        <movie-view />
                    </v-tabs-window-item>
                </v-tabs-window>
                <div class="text-center">
                    <v-btn
                        :size="mobileBreakpoint ? 'small' : 'default'"
                        variant="outlined"
                        @click="$router.push({ name: 'movieRedirect' })"
                    >
                        Xem thêm
                        <v-icon>mdi-chevron-right</v-icon>
                    </v-btn>
                </div>
            </div>
        </v-container>
    </section>
    <section class="sm:py-8 border-b">
        <v-container>
            <div class="!max-w-6xl m-auto md:p-0">
                <div class="text-center mb-5">
                    <h2 class="sm:text-2xl text-base font-bold">
                        Blog phim ảnh
                    </h2>
                </div>
                <blog-view :isLoading="isLoading" />
            </div>
        </v-container>
    </section>
    <section class="sm:py-8">
        <v-container>
            <div class="!max-w-6xl m-auto md:p-0">
                <div class="text-center mb-5">
                    <h2 class="sm:text-2xl text-base font-bold">
                        Tin tức - Khuyến mãi
                    </h2>
                </div>
                <new-view :isLoading="isLoading" />
            </div>
        </v-container>
    </section>
</template>
<script>
import SliderView from "@/pages/home/dashboard/slider";
import MovieView from "@/pages/home/dashboard/movie";
import BlogView from "@/pages/home/dashboard/blog";
import NewView from "@/pages/home/dashboard/news";
import { useDisplay } from "vuetify";
export default {
    components: {
        SliderView,
        MovieView,
        BlogView,
        NewView,
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
