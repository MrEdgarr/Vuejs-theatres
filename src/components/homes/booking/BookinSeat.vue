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
                <div class="text-primary font-semibold">
                    {{ schedules.cinema_name }}
                </div>

                <div>
                    Ngày:
                    <span class="text-primary font-semibold">
                        {{ schedules.date }}
                    </span>
                </div>
                <div>
                    Giờ chiếu:
                    <span class="text-primary font-semibold">
                        {{ schedules.start_time }}
                    </span>
                </div>
            </div>
            <div>
                <div
                    class="flex cursor-pointer whitespace-nowrap rounded-md !border !border-sky-700 md:px-2 md:py-1 p-1 text-center"
                >
                    <div class="sm:block hidden">
                        Thời gian chọn ghế:
                        <span class="text-primary text-base font-semibold">
                            {{ duration.minutes }}:{{ duration.seconds }}
                        </span>
                    </div>
                    <span class="sm:hidden text-primary text-xs font-semibold">
                        {{ duration.minutes }}:{{ duration.seconds }}
                    </span>
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
            <!-- <v-item-group selected-class="bg-primary" multiple>
                <div
                    v-for="rowChair in seatStore.seats"
                    :key="rowChair.seat_row"
                    class="md:flex grid sm:gap-1 gap-px items-center justify-center text-center sm:mt-1 mt-px !grid-cols-auto-fit-9"
                >
                    <div
                        class="sm:text-base text-xs flex aspect-square md:h-10 grid place-items-center"
                    >
                        {{ rowChair.seat_row }}
                    </div>
                    <v-item
                        v-for="columChair in rowChair.seatResult"
                        :key="columChair.id"
                        v-slot="{ isSelected, toggle }"
                    >
                        <p
                            class="flex items-center justify-center aspect-square md:h-10 bg-gray-200 sm:text-base text-xs rounded cursor-pointer"
                            :class="{
                                'bg-primary':
                                    isSelected && !columChair.seat_status,
                                'bg-gray-400 cursor-not-allowed':
                                    columChair.seat_status,
                            }"
                            @click="toggle"
                        >
                            {{ columChair.seat_number }}
                        </p>
                    </v-item>
                    <div
                        class="sm:text-base text-xs flex aspect-square md:h-10 grid place-items-center"
                    >
                        {{ rowChair.seat_row }}
                    </div>
                </div>
            </v-item-group> -->
            <div
                v-for="(rowChair, index1) in seatStore.seats"
                :key="index1"
                class="md:flex grid sm:gap-1 gap-px items-center justify-center text-center sm:mt-1 mt-px !grid-cols-auto-fit-9"
            >
                <div
                    class="sm:text-base text-xs flex aspect-square md:h-10 grid place-items-center"
                >
                    {{ rowChair.seat_row }}
                </div>
                <div
                    v-for="(columChair, index2) in rowChair.seatResult"
                    :key="index2"
                >
                    <p
                        class="flex items-center justify-center aspect-square md:h-10 bg-gray-200 sm:text-base text-xs rounded cursor-pointer"
                        :class="{
                            'bg-gray-400 cursor-not-allowed':
                                columChair.seat_status,
                            'bg-primary': handleBackground(columChair),
                        }"
                        @click="handleToggle(columChair)"
                    >
                        {{ columChair.seat_number }}
                    </p>
                </div>
                <div
                    class="sm:text-base text-xs flex aspect-square md:h-10 grid place-items-center"
                >
                    {{ rowChair.seat_row }}
                </div>
            </div>
            <div class="flex items-center justify-center flex-wrap mt-5">
                <div class="flex mx-2">
                    <span
                        class="block md:w-5 md:h-5 h-4 w-4 mr-1 cursor-not-allowed bg-gray-400"
                    ></span>
                    <p class="sm:text-sm text-xs">Đã đặt</p>
                </div>
                <div class="flex mx-2">
                    <span
                        class="block md:w-5 md:h-5 h-4 w-4 mr-1 shadow bg-primary"
                    ></span>
                    <p class="sm:text-sm text-xs">Ghế bạn chọn</p>
                </div>
            </div>
        </div>
        <div class="block items-center mt-5 sm:flex sm:justify-between">
            <div class="sm:text-base text-xs">
                <p>
                    Ghế đã chọn:
                    <span
                        class="font-bold text-primary"
                        v-for="value in isSelected"
                        :key="value.id"
                    >
                        {{ value.seat_row + value.seat_number }},
                    </span>
                </p>
                <p>
                    Tổng tiền:
                    <span class="font-bold text-primary"> 370.000đ </span>
                </p>
            </div>
            <div class="text-center mt-5 md:text-right md:m-0">
                <v-btn
                    :size="$vuetify.display.xs ? 'small' : 'default'"
                    variant="outlined"
                    class="mr-1"
                    @click="$router.go(-1)"
                >
                    Quay lại
                </v-btn>

                <v-btn
                    :size="$vuetify.display.xs ? 'small' : 'default'"
                    color="primary"
                    @click="handlePayment()"
                >
                    Thanh toán
                </v-btn>
            </div>
        </div>
    </div>
</template>
<script>
import { seatAppStore } from "@/stores/SeatStore";
import { mapStores } from "pinia";

export default {
    data() {
        return {
            duration: {
                startingMinutes: 10,
                times: 0,
                minutes: "10",
                seconds: "00",
            },
            isSelected: [],
            seatSelect: false,
        };
    },
    computed: {
        ...mapStores(seatAppStore),
        schedules() {
            const getSchedule = JSON.parse(localStorage.getItem("schedule"));
            return getSchedule;
        },
    },

    methods: {
        async fetchData() {
            try {
                await this.seatStore.fetchAll({
                    // room_id: this.schedules.room_id,
                    room_id: 1,
                });
            } catch (error) {
                console.log(error);
            }
        },
        updateCountdown() {
            this.duration.times = this.duration.startingMinutes * 60;
            const interval = setInterval(() => {
                this.duration.minutes = Math.floor(this.duration.times / 60);
                this.duration.seconds = this.duration.times % 60;
                this.duration.seconds =
                    this.duration.seconds < 10
                        ? "0" + this.duration.seconds
                        : this.duration.seconds;
                this.duration.times--;
                if (this.duration.times < 0) {
                    clearInterval(interval);
                }
            }, 1000);
        },
        handleBackground(value) {
            const check = this.isSelected.filter(
                (checkSeat) => checkSeat.id == value.id
            );
            if (check.length != 0) {
                return true;
            }
        },
        handleToggle(value) {
            const checkSeat = this.isSelected.filter(
                (checkSeat) => checkSeat.id == value.id
            );
            if (checkSeat.length == 0 && !value.seat_status) {
                this.isSelected = [...this.isSelected, value];
            } else {
                this.isSelected = this.isSelected.filter(
                    (remove) => remove.id != value.id
                );
            }
            this.handleBackground(value);
        },
        handlePayment() {
            if (this.isSelected.length == 0) {
                alert("Ban chua chon ghe");
            } else {
                localStorage.setItem(
                    "seat-selected",
                    JSON.stringify(this.isSelected)
                );
                this.$router.push({ name: "PaymentRedirect" });
            }
        },
    },
    mounted() {
        this.fetchData();
    },
};
</script>
<style lang="scss"></style>
