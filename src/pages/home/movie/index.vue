<template>
    <section>
        <v-img
            src="@/assets/image/tix-banner.ed8b6071.png"
            min-height="100"
            max-height="150"
            cover
        >
            <div class="grid place-items-center h-full px-2">
                <div class="text-center text-gray-100">
                    <h1 class="sm:text-2xl text-base font-bold">Phim chiếu</h1>
                    <span class="sm:text-sm text-xs">
                        Xem lịch chiếu phim, giá vé tiện lợi, đặt vé nhanh chỉ
                        với 1 bước!
                    </span>
                </div>
            </div>
        </v-img>
        <v-container>
            <div class="!max-w-6xl m-auto md:p-0 relative">
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
                        <div
                            class="mt-6 grid gap-4 sm:grid-cols-auto-fit-200 grid-cols-auto-fit-100"
                        >
                            <div
                                class="relative cursor-pointer"
                                v-for="value in 10"
                            >
                                <span
                                    class="absolute top-1 right-1 bg-primary text-white text-sm font-medium rounded-md py-2 px-2.5 leading-none z-20"
                                >
                                    <!-- {{ value.cens }} -->
                                    9.5
                                </span>
                                <div class="relative w-full">
                                    <v-img
                                        lazy-src="https://cdn.galaxycine.vn/media/2024/12/4/moana-2-500_1733308287086.jpg"
                                        src="https://cdn.galaxycine.vn/media/2024/12/4/moana-2-500_1733308287086.jpg"
                                        rounded="lg"
                                        max-heigth="300"
                                        cover
                                    ></v-img>
                                </div>
                                <div>
                                    <p
                                        class="mt-3.5 sm:text-base text-sm font-semibold text-left cursor-pointer"
                                    >
                                        <!-- {{ value.name }} -->
                                        a sc bf e
                                    </p>
                                </div>
                            </div>
                        </div>
                    </v-tabs-window-item>
                    <v-tabs-window-item value="comingsoon">
                        <div
                            class="mt-6 grid gap-4 sm:grid-cols-auto-fit-200 grid-cols-auto-fit-100"
                        >
                            <div
                                class="relative cursor-pointer"
                                v-for="value in 10"
                            >
                                <span
                                    class="absolute top-1 right-1 bg-primary text-white text-sm font-medium rounded-md py-2 px-2.5 leading-none z-20"
                                >
                                    <!-- {{ value.cens }} -->
                                    9.5
                                </span>
                                <div class="relative w-full">
                                    <v-img
                                        lazy-src="https://cdn.galaxycine.vn/media/2024/12/4/moana-2-500_1733308287086.jpg"
                                        src="https://cdn.galaxycine.vn/media/2024/12/4/moana-2-500_1733308287086.jpg"
                                        rounded="lg"
                                        max-heigth="300"
                                        cover
                                    ></v-img>
                                </div>
                                <div>
                                    <p
                                        class="mt-3.5 sm:text-base text-sm font-semibold text-left cursor-pointer"
                                    >
                                        <!-- {{ value.name }} -->
                                        a sc bf e
                                    </p>
                                </div>
                            </div>
                        </div>
                    </v-tabs-window-item>
                </v-tabs-window>
            </div>
        </v-container>
    </section>
</template>
<script>
export default {
    data() {
        return {
            tab: false,
        };
    },
};
</script>
<style lang=""></style>
