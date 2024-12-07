<template>
    <div class="relative">
        <swiper
            :slidesPerView="'auto'"
            :grabCursor="true"
            :freeMode="true"
            @init="(swiper) => ($swiper = swiper)"
            :loop="true"
            :modules="modules"
            class="Swiper"
        >
            <swiper-slide
                v-for="value in 10"
                :key="value"
                class="mb-5 sm:!w-60 !w-40"
            >
                <v-skeleton-loader
                    :loading="isLoading"
                    type="image, text"
                    class="!block px-2"
                >
                    <div>
                        <span
                            class="absolute top-1 right-3 bg-primary text-white text-sm font-medium rounded-md py-1 px-1.5 leading-none z-20"
                        >
                            <!-- {{ value.cens }} -->
                            9.5
                        </span>

                        <div>
                            <v-img
                                rounded="lg"
                                lazy-src="https://cdn.galaxycine.vn/media/2024/12/4/moana-2-500_1733308287086.jpg"
                                src="https://cdn.galaxycine.vn/media/2024/12/4/moana-2-500_1733308287086.jpg"
                                cover
                            >
                                <div class="grid place-items-center h-full">
                                    <v-icon class="!text-5xl text-white">
                                        mdi-play-circle-outline
                                    </v-icon>
                                </div>
                            </v-img>
                        </div>

                        <div class="mt-3.5">
                            <p
                                class="font-semibold text-left sm:text-base text-sm cursor-pointer line-clamp-1"
                            >
                                <!-- {{ value.name }} -->
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Et nostrum voluptatem illum
                                neque reprehenderit obcaecati dolorem placeat
                                eum accusantium eveniet corrupti incidunt, iusto
                                voluptatibus rerum error? Quibusdam, possimus
                                alias. Corporis?
                            </p>
                        </div>
                    </div>
                </v-skeleton-loader>
            </swiper-slide>
        </swiper>
        <div
            class="absolute w-full top-[calc(50%-50px)] -translate-y-1/2 z-10 md:block hidden"
        >
            <div
                class="btn_prev absolute bg-white w-10 h-10 border rounded-full elevation-3 -left-5 z-10 cursor-pointer !grid place-items-center"
                @click="$swiper.slidePrev()"
            >
                <v-icon size="large">mdi-chevron-left</v-icon>
            </div>
            <div
                class="btn_next absolute bg-white w-10 h-10 border rounded-full elevation-3 -right-5 z-10 cursor-pointer !grid place-items-center"
                @click="$swiper.slideNext()"
            >
                <v-icon size="large">mdi-chevron-right</v-icon>
            </div>
        </div>
    </div>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
// import required modules
import { FreeMode, Autoplay } from "swiper/modules";
export default {
    props: {
        movies: {
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
            modules: [FreeMode, Autoplay],
        };
    },
};
</script>
<style lang="scss"></style>
