<template>
    <div>
        <p class="text-error sm:text-base text-xs text-center md:py-5">
            <strong>Lưu ý: </strong>
            Khán giả dưới 13 tuổi chỉ chọn suất chiếu kết thúc trước 22h và Khán
            giả dưới 16 tuổi chỉ chọn suất chiếu kết thúc trước 23h.
        </p>
        <div
            class="flex justify-between items-center py-2.5 sm:text-base text-xs"
        >
            <div>
                <p>Ngày: <strong class="text-primary">25/05</strong></p>
                <p>Giờ chiếu: <strong class="text-primary">20:30</strong></p>
            </div>
            <div>
                <div
                    class="flex cursor-pointer whitespace-nowrap rounded-md !border !border-sky-700 md:px-2 md:py-1 p-1 text-center"
                >
                    <span class="sm:flex hidden pr-1">
                        Thời gian chọn ghế:
                    </span>
                    <strong class="text-primary sm:text-base text-xs"
                        >10:00</strong
                    >
                </div>
            </div>
        </div>
        <div class="text-center">
            <v-divider class="border-opacity-100" :thickness="10"></v-divider>
            <span class="font-semibold sm:text-base text-sm mt-2.5 block">
                Phòng chiếu số 3
            </span>
        </div>
        <div class="py-5">
            <v-item-group selected-class="bg-primary" multiple>
                <div
                    v-for="rowChair in rowChairs"
                    :key="rowChair"
                    class="md:flex grid sm:gap-1 gap-px items-center justify-center text-center sm:mt-1 mt-px"
                    style="
                        grid-template-columns: repeat(
                            auto-fit,
                            minmax(9px, 1fr)
                        );
                    "
                >
                    <div
                        class="sm:text-base text-xs flex aspect-square md:h-10 grid place-items-center"
                    >
                        {{ rowChair }}
                    </div>
                    <v-item
                        v-for="columChair in 14"
                        :key="m"
                        v-slot="{ isSelected, toggle }"
                    >
                        <p
                            class="flex items-center justify-center aspect-square md:h-10 bg-gray-200 sm:text-base text-xs rounded cursor-pointer"
                            :class="
                                isSelected && columChair < 5 ? 'bg-primary' : ''
                            "
                            :style="
                                columChair > 4
                                    ? ` background: repeating-linear-gradient(
                                45deg,
                                hsla(0, 0%, 60%, 0.4),
                                hsla(0, 0%, 60%, 0.4) 10px,
                                hsla(0, 0%, 60%, 0.6) 0,
                                hsla(0, 0%, 60%, 0.6) 20px
                            );
                            cursor: not-allowed !important;
                            `
                                    : ''
                            "
                            @click="toggle"
                        >
                            {{ columChair }}
                        </p>
                    </v-item>
                    <div
                        class="sm:text-base text-xs flex aspect-square md:h-10 grid place-items-center"
                    >
                        {{ rowChair }}
                    </div>
                </div>
            </v-item-group>
            <div class="flex items-center justify-center flex-wrap mt-5">
                <div class="flex mx-2">
                    <span
                        class="block md:w-5 md:h-5 h-4 w-4 mr-1 cursor-not-allowed"
                        style="
                            background: repeating-linear-gradient(
                                45deg,
                                hsla(0, 0%, 60%, 0.4),
                                hsla(0, 0%, 60%, 0.4) 10px,
                                hsla(0, 0%, 60%, 0.6) 0,
                                hsla(0, 0%, 60%, 0.6) 20px
                            );
                        "
                    ></span>
                    <p class="sm:text-sm text-xs">Đã đặt</p>
                </div>
                <div class="flex mx-2">
                    <span
                        class="block md:w-5 md:h-5 h-4 w-4 mr-1 shadow"
                        style="
                            background-color: rgb(
                                var(--v-theme-primary)
                            ) !important;
                            box-shadow: 0 0 10px rgb(var(--v-theme-primary));
                        "
                    ></span>
                    <p class="sm:text-sm text-xs">Ghế bạn chọn</p>
                </div>
            </div>
        </div>
        <div class="block items-center mt-5 sm:flex sm:justify-between">
            <div class="sm:text-base text-xs">
                <p>
                    Ghế đã chọn:
                    <span class="font-bold text-primary"> A1, A2 </span>
                </p>
                <p>
                    Tổng tiền:
                    <span class="font-bold text-primary"> 370.000đ </span>
                </p>
            </div>
            <div class="text-center mt-5 md:text-right md:m-0">
                <v-btn
                    :size="mobileBreakpoint ? 'small' : 'default'"
                    variant="outlined"
                    class="mr-1"
                    @click="$router.go(-1)"
                >
                    Quay lại
                </v-btn>

                <v-btn
                    :size="mobileBreakpoint ? 'small' : 'default'"
                    color="primary"
                    @click="$router.push({ name: 'PaymentRedirect' })"
                >
                    Thanh toán
                </v-btn>
            </div>
        </div>
    </div>
</template>
<script>
import { useDisplay } from "vuetify";
export default {
    data() {
        const { xs } = useDisplay();
        return {
            rowChairs: [],
            mobileBreakpoint: xs,
        };
    },
    methods: {
        fromCharCode() {
            for (let i = 65; i <= 73; i++) {
                this.rowChairs = [...this.rowChairs, String.fromCharCode(i)];
            }
        },
        handleSelect(e, row, col) {
            if (e.target.classList == "taken") {
                return;
            }
            e.target.classList.toggle("selected");
        },
    },
    mounted() {
        this.fromCharCode();
    },
};
</script>
<style lang="scss"></style>
