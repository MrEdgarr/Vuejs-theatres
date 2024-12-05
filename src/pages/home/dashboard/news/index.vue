<template>
    <div>
        <div class="grid grid-cols-2 gap-x-3 gap-y-5 sm:gap-6 md:grid-cols-4">
            <div
                class="group h-full cursor-pointer transition-shadow md:overflow-hidden md:rounded-lg md:bg-white md:shadow-md md:hover:shadow-lg"
                v-for="(value, index) in itemsLoaded"
                :key="index"
            >
                <v-skeleton-loader
                    :loading="isLoading"
                    type="image, list-item-two-line"
                    class="!block"
                >
                    <div class="h-full">
                        <div class="flex h-full flex-col">
                            <div class="sm:w-full">
                                <div
                                    class="overflow-hidden rounded-lg bg-gray-200 md:rounded-none"
                                >
                                    <div class="relative block aspect-1">
                                        <span
                                            ><v-img
                                                alt="Mua vé Lotte Cinema săn bắp nước miễn phí trên MoMo!"
                                                :src="value.images"
                                                :lazy-src="value.images"
                                                cover
                                                aspect-ratio="1"
                                            />
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div
                                class="relative flex flex-1 flex-col sm:w-full sm:flex-auto sm:pb-7 md:px-4"
                            >
                                <div
                                    class="line-clamp-1 pr-2 pt-2 text-sm md:text-base sm:line-clamp-none sm:pb-1 sm:pr-0 sm:pt-2 sm:text-md sm:font-semibold sm:leading-snug md:landing:text-gray-900"
                                >
                                    {{ value.title }}
                                </div>
                                <div
                                    class="hidden items-center sm:absolute sm:bottom-2 sm:flex md:left-4"
                                >
                                    <span
                                        class="inline-block text-sm text-gray-500"
                                    >
                                        {{ value.text }}</span
                                    >
                                </div>
                            </div>
                        </div>
                    </div>
                </v-skeleton-loader>
            </div>
        </div>
        <div class="text-center pt-5" v-if="items.length != itemsLoaded.length">
            <v-btn
                :size="mobileBreakpoint ? 'small' : 'default'"
                variant="outlined"
                @click="loadMore"
            >
                Xem thêm
                <v-icon>mdi-chevron-right</v-icon>
            </v-btn>
        </div>
    </div>
</template>
<script>
import { useDisplay } from "vuetify";
import items from "@/utils/Data/ObjectNew";
export default {
    props: {
        isLoading: {
            type: Boolean,
        },
    },
    data() {
        const { xs } = useDisplay();
        return {
            mobileBreakpoint: xs, //thiết kế đáp ứng < 600
            items: items, // mảng
            lengthItems: 8, // độ dài ban đầu của mảng
        };
    },
    methods: {
        // tăng độ dài ban đầu của mảng
        loadMore() {
            if (this.length > this.items.length) return;
            this.lengthItems += 4;
        },
    },
    computed: {
        // hàm tính toán sẽ trả về mảng mới dựa trên biến items
        itemsLoaded() {
            return this.items.slice(0, this.lengthItems);
        },
    },
};
</script>
<style lang=""></style>
