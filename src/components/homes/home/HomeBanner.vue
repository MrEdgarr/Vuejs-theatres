<template>
    <v-skeleton-loader
        :loading="isLoading"
        type="image"
        class="!block"
        height="100%"
        width="100%"
    >
        <swiper
            :navigation="{ nextEl: '.nextBanner', prevEl: '.prevBanner' }"
            :pagination="{
                clickable: true,
            }"
            :keyboard="true"
            :grabCursor="true"
            :loop="true"
            :autoplay="{
                delay: 3500,
            }"
            :speed="500"
            :effect="'fade'"
            :modules="modules"
        >
            <swiper-slide v-for="(value, index) in items" :key="index">
                <v-img
                    class="!hidden md:!block"
                    :src="value.image_lg"
                    :lazy-src="value.image_lg"
                    cover
                />
                <v-img
                    class="md:!hidden"
                    :src="value.image_sm"
                    :lazy-src="value.image_sm"
                />
            </swiper-slide>

            <div class="hidden sm:block">
                <div
                    class="prevBanner h-10 w-10 flex items-center justify-center rounded-full absolute top-1/2 -translate-y-1/2 z-10 left-4"
                >
                    <v-icon>mdi-chevron-left</v-icon>
                </div>
                <div
                    class="nextBanner h-10 w-10 flex items-center justify-center rounded-full absolute top-1/2 -translate-y-1/2 z-10 right-4"
                >
                    <v-icon>mdi-chevron-right</v-icon>
                </div>
            </div>
        </swiper>
    </v-skeleton-loader>
</template>
<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import {
    Pagination,
    Navigation,
    EffectFade,
    Keyboard,
    Autoplay,
} from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import items from "@/utils/Data/ObjectBanner";

export default {
    props: {
        value: {
            type: Object,
            required: false,
        },
        isLoading: {
            type: Boolean,
        },
    },
    components: {
        Swiper,
        SwiperSlide,
    },
    data() {
        return {
            modules: [Pagination, Navigation, EffectFade, Keyboard, Autoplay],
            items: items,
        };
    },
};
</script>
<style lang="scss">
.prevBanner,
.nextBanner {
    background: rgba(255, 255, 255, 0.5);
}
.swiper-pagination-bullet {
    width: 5px;
    height: 5px;
    border: 1px solid white;
    opacity: 1;
    background: transparent;
    transition: width 0.5s ease-in-out, background-color 0.5s ease-in-out;
    border-radius: 10px;

    &.swiper-pagination-bullet-active {
        width: 30px;
        background-color: white;
    }
}
</style>
