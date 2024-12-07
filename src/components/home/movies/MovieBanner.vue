<template>
    <div class="text-white">
        <v-img
            gradient="to right,
                        rgba(31.5, 31.5, 31.5, 1) calc((50vw - 170px) - 340px),
                        rgba(31.5, 31.5, 31.5, 0.84) 50%,
                        rgba(31.5, 31.5, 31.5, 0.84) 100%"
            class="bg-cover bg-center !bg-[url('https://cdn.galaxycine.vn/media/2024/8/9/200-wolf-500_1723194966825.jpg')]"
            cover
        >
            <!-- :style="`background: url(${movieStore.db_movieId.movie_backdrop})`" -->
            <v-container>
                <div class="!max-w-6xl m-auto md:p-0">
                    <div class="grid grid-cols-1 md:grid-cols-5 md:gap-5">
                        <div class="flex justify-center">
                            <v-img
                                src="https://cdn.galaxycine.vn/media/2024/8/9/200-wolf-750_1723194966598.jpg"
                                width="100%"
                                :max-width="mobileBreakpoint ? 100 : 150"
                                max-height="225"
                                cover
                                class="rounded-lg"
                            ></v-img>
                        </div>
                        <div class="md:col-span-4 md:pt-0 pt-2.5">
                            <div class="wrapper-info">
                                <div class="mb-2.5 md:!text-left !text-center">
                                    <p class="sm:text-2xl text-xl">
                                        200% Sói Bảnh
                                    </p>
                                    <p class="text-gray-400 sm:text-sm text-xs">
                                        Hoạt Hình, Phiêu Lưu
                                    </p>
                                </div>
                                <div>
                                    <div class="md:!text-left !text-center">
                                        <v-btn
                                            :size="
                                                mobileBreakpoint
                                                    ? 'x-small'
                                                    : 'small'
                                            "
                                            class="mr-1"
                                            variant="outlined"
                                            prepend-icon="mdi-star"
                                        >
                                            Đánh giá
                                        </v-btn>
                                        <v-btn
                                            :size="
                                                mobileBreakpoint
                                                    ? 'x-small'
                                                    : 'small'
                                            "
                                            class=""
                                            variant="outlined"
                                            prepend-icon="mdi-play-circle-outline"
                                        >
                                            Trailer
                                        </v-btn>
                                    </div>
                                    <div class="py-2.5">
                                        <p class="sm:text-base text-sm">
                                            200% Wolf / 200% Sói Bảnh kể về
                                            Freddy thuộc một gia đình người sói
                                            và cần chứng tỏ bản thân để được các
                                            bậc trưởng lão công nhận. Tình cờ
                                            phát hiện ra những cổ ngữ xưa, cậu
                                            vô tình triệu hồi sức mạnh từ một
                                            tiên nguyệt nghịch ngợm tên là
                                            Moopoo. Giờ đây, Freddy phải giúp
                                            Moopoo trở về mặt trăng và khôi phục
                                            trật tự vũ trụ. Phim mới 200% Wolf /
                                            200% Sói Bảnh dự kiến ra mắt tại các
                                            rạp chiếu phim toàn quốc từ
                                            30.08.2024.
                                        </p>
                                    </div>
                                    <div class="grid grid-cols-1 grid-cols-3">
                                        <div
                                            class="md:!text-left !text-center sm:text-sm text-xs"
                                        >
                                            <strong>
                                                <v-icon>
                                                    mdi-calendar-blank
                                                </v-icon>
                                            </strong>
                                            <span
                                                class="d-none d-sm-inline-block"
                                            >
                                                Khởi chiếu
                                            </span>
                                            <br />
                                            <span> 30.08.2024 </span>
                                        </div>
                                        <div
                                            class="md:!text-left !text-center sm:text-sm text-xs"
                                        >
                                            <strong>
                                                <v-icon>
                                                    mdi-clock-time-three-outline
                                                </v-icon>
                                            </strong>
                                            <span
                                                class="d-none d-sm-inline-block"
                                            >
                                                Thời lượng
                                            </span>
                                            <br />
                                            <span> 98 phút </span>
                                        </div>
                                        <div
                                            class="md:!text-left !text-center sm:text-sm text-xs"
                                        >
                                            <strong>
                                                <v-icon>
                                                    mdi-account-check-outline
                                                </v-icon>
                                            </strong>
                                            <span
                                                class="d-none d-sm-inline-block"
                                            >
                                                Giới hạn tuổi
                                            </span>
                                            <br />
                                            <span> K </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </v-container>
        </v-img>
    </div>
</template>
<script>
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
<style lang=""></style>
