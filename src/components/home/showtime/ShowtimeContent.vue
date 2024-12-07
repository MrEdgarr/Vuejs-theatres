<template>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 xl:gap-6">
        <v-card
            elevation="2"
            class="cursor-pointer rounded-lg !w-full !flex !flex-row !overflow-hidden"
            v-for="item in 5"
        >
            <div
                class="relative min-w-[100px] sm:min-w-[150px] xl:min-w-[220px] overflow-hidden"
            >
                <v-img
                    alt="NGÀY XƯA CÓ MỘT CHUYỆN TÌNH - T16"
                    src="https://images.unsplash.com/photo-1717251882167-07edf8fe4054?q=80&w=2012&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    cover
                />
            </div>
            <div class="p-4 xl:p-6 flex-1 relative">
                <div
                    class="text-sm text-gray-400 absolute top-1 right-1 !border border-gray-400 rounded-md px-2 py-1 font-semibold text-xs"
                >
                    2D
                </div>
                <div
                    class="flex-wrap items-center gap-x-5 text-gray-400 text-sm pr-12 hidden md:flex"
                >
                    <p>Tâm lý, tình cảm</p>
                    <p>135 phút</p>
                </div>
                <p class="mt-2 text-xs md:text-sm font-bold pr-10">
                    NGÀY XƯA CÓ MỘT CHUYỆN TÌNH - T16
                </p>
                <p class="mt-1 text-xs md:text-sm">Xuất xứ: Viet Nam</p>
                <p class="mt-1 text-sm hidden md:block">
                    Khởi chiếu: 01/11/2024
                </p>
                <p class="line-clamp-2 mt-1 text-xs md:text-sm text-red-500">
                    T16 - Phim được phổ biến đến người xem từ đủ 16 tuổi trở lên
                    (16+)
                </p>
                <div class="mt-3">
                    <p class="text-sm font-semibold hidden md:block">
                        Lịch chiếu
                    </p>
                    <div class="flex items-center gap-2 mt-2 flex-wrap">
                        <v-btn
                            :size="mobileBreakpoint ? 'x-small' : 'small'"
                            variant="outlined"
                            class="inline-flex items-center justify-center text-sm font-medium border bg-transparent h-8 rounded-md px-2"
                            v-for="item in 8"
                        >
                            11:50
                        </v-btn>
                    </div>
                </div>
            </div>
        </v-card>
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
