<template>
    <div class="cursor-pointer rounded-lg !w-full divide-y divide-gray-200">
        <div
            class="grid grid-cols-2 sm:grid-cols-4 gap-5 py-5"
            v-for="item in 5"
        >
            <div class="col-span-1">
                <div class="sticky top-[64px]">
                    <div>
                        <v-img
                            alt="NGÀY XƯA CÓ MỘT CHUYỆN TÌNH - T16"
                            src="https://images.unsplash.com/photo-1717251882167-07edf8fe4054?q=80&w=2012&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            cover
                            rounded="lg"
                        />
                    </div>
                    <div>
                        <div
                            class="flex flex-wrap items-center gap-x-5 text-gray-400 sm:text-sm text-xs"
                        >
                            <p>Tâm lý, tình cảm</p>
                            <p>135 phút</p>
                        </div>
                        <p class="mt-2 text-xs md:text-sm font-bold">
                            NGÀY XƯA CÓ MỘT CHUYỆN TÌNH - T16
                        </p>
                        <p class="mt-1 text-xs md:text-sm">Xuất xứ: Viet Nam</p>
                        <p class="mt-1 text-sm hidden md:block">
                            Khởi chiếu: 01/11/2024
                        </p>
                        <p
                            class="line-clamp-2 mt-1 text-xs md:text-sm text-red-500"
                        >
                            T16 - Phim được phổ biến đến người xem từ đủ 16 tuổi
                            trở lên (16+)
                        </p>
                    </div>
                </div>
            </div>
            <div class="col-span-1 sm:col-span-3">
                <div class="divide-y divide-gray-200">
                    <div
                        class="grid grid-cols-1 md:grid-cols-3 gap-5 [&:not(:first-child)]:pt-5"
                        v-for="n in 5"
                        :key="n"
                    >
                        <div class="col-span-1">
                            <p class="font-bold sm:text-lg text-sm">
                                Galaxy Nguyễn Du
                            </p>
                            <span class="sm:text-sm text-xs text-gray-900">
                                116 Nguyễn Du, Quận 1, Tp.HCM
                            </span>
                        </div>
                        <div class="col-span-1 md:col-span-2">
                            <div v-for="n in 2" :key="n" class="pb-5">
                                <p
                                    class="text-xs sm:text-sm font-semibold pb-2"
                                >
                                    Standard
                                </p>
                                <div class="flex items-center gap-2 flex-wrap">
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
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
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
    methods: {
        handleSelectDate(value) {
            console.log(value);
        },
    },
};
</script>
<style lang=""></style>
