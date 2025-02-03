<template>
    <div>
        <div class="grid grid-cols-1 sm:grid-cols-2 sm:gap-6 md:grid-cols-4">
            <div
                class="h-full cursor-pointer"
                v-for="(value, index) in itemsLoaded"
                :key="index"
            >
                <v-skeleton-loader
                    :loading="isLoading"
                    type="image, list-item-two-line"
                    class="!block"
                >
                    <div
                        class="flex flex-wrap !border-gray-300 pb-3 sm:pb-2 sm:!border-none !border-b"
                    >
                        <div
                            class="order-2 w-28 pt-3 sm:order-1 sm:w-full sm:flex-auto sm:pt-0"
                        >
                            <div
                                class="relative flex overflow-hidden rounded bg-gray-900"
                            >
                                <v-img
                                    alt="Danh sách phim hay Netflix tháng 5/2024"
                                    :src="value.images"
                                    :lazy-src="value.images"
                                    class="w-full sm:h-36 h-16"
                                    cover
                                />
                            </div>
                        </div>
                        <div
                            class="flex-1 pr-6 sm:order-2 sm:w-full sm:flex-auto sm:pr-0"
                        >
                            <div
                                class="md:text-base text-sm pb-2 pt-3 font-semibold"
                            >
                                {{ value.title }}
                            </div>
                            <div class="flex items-center text-gray-500">
                                <span class="inline-block md:text-sm text-xs">
                                    {{ value.text }}k lượt xem
                                </span>
                            </div>
                        </div>
                    </div>
                </v-skeleton-loader>
            </div>
        </div>
        <div class="text-center pt-5" v-if="items.length != itemsLoaded.length">
            <v-btn
                :size="$vuetify.display.xs ? 'small' : 'default'"
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
import itemblog from "@/utils/Data/ObjectBlog";

export default {
    props: {
        isLoading: {
            type: Boolean,
        },
    },
    data() {
        return {
            items: itemblog, // mảng
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
<style lang="scss"></style>
