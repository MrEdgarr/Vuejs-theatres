<template>
    <div class="section-booking">
        <v-container>
            <div class="!max-w-6xl m-auto md:p-0">
                <div class="grid md:grid-cols-12 md:gap-5">
                    <div class="col-span-8 md:pb-0 pb-5">
                        <v-card rounded="lg" elevation="2">
                            <v-card-title>
                                <div class="text-lg">Thông tin phim</div>
                            </v-card-title>
                            <v-card-text>
                                <div>
                                    <p class="sm:text-lg">Phim</p>
                                    <span class="sm:text-base font-semibold"
                                        >MÈO BÉO SIÊU QUẬY - K</span
                                    >
                                </div>
                            </v-card-text>
                            <v-card-text>
                                <div>
                                    <p class="sm:text-lg">Rap</p>
                                    <span class="font-semibold">
                                        <h1 class="font-bold">
                                            Galaxy Nguyễn Du
                                        </h1>
                                        <span class="line-clamp-1">
                                            116 Nguyễn Du, Quận 1, Tp.HCM
                                        </span>
                                    </span>
                                </div>
                            </v-card-text>

                            <v-card-text class="grid grid-cols-2">
                                <div>
                                    <p class="sm:text-lg">Ngày giờ chiếu</p>
                                    <div class="font-bold">
                                        <span class="text-primary">20:00</span>
                                        <span> - </span>
                                        <span>31/05/2024</span>
                                    </div>
                                </div>

                                <div>
                                    <p class="sm:text-lg">Ghế</p>
                                    <span class="font-bold">A1, A2, A3</span>
                                </div>
                            </v-card-text>

                            <v-card-text class="grid grid-cols-2">
                                <div>
                                    <p class="sm:text-lg">Định dạng</p>
                                    <span class="font-bold">2D</span>
                                </div>
                                <div>
                                    <p class="sm:text-lg">Phòng chiếu</p>
                                    <span class="font-bold">13</span>
                                </div>
                            </v-card-text>
                        </v-card>
                        <v-card rounded="lg" class="my-5" elevation="2">
                            <v-card-title>
                                <div class="text-lg">Thông tin thanh toán</div>
                            </v-card-title>
                            <v-card-text>
                                <v-table class="bg-theme-bg">
                                    <thead>
                                        <tr>
                                            <th class="text-left">Danh mục</th>
                                            <th class="text-left">Số lượng</th>
                                            <th class="text-left">Tổng tiền</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Ghế (D6, D7, D5, D4)</td>
                                            <td>4</td>
                                            <td>380.000đ</td>
                                        </tr>
                                    </tbody>
                                </v-table>
                            </v-card-text>
                        </v-card>
                    </div>
                    <div class="col-span-4">
                        <v-card rounded="lg" elevation="2">
                            <v-card-title>
                                <div class="text-lg">
                                    Phương thức thanh toán
                                </div>
                            </v-card-title>
                            <v-card-text>
                                <v-radio-group v-model="radios">
                                    <v-radio
                                        v-for="value in payment"
                                        :key="value.id"
                                        :value="value.id"
                                        color="primary"
                                        class="py-1"
                                        :density="
                                            $vuetify.display.xs
                                                ? 'compact'
                                                : 'default'
                                        "
                                    >
                                        <template v-slot:label>
                                            <v-img
                                                :src="value.image"
                                                :height="
                                                    $vuetify.display.xs
                                                        ? '15'
                                                        : '25'
                                                "
                                                :width="
                                                    $vuetify.display.xs
                                                        ? '15'
                                                        : '25'
                                                "
                                            ></v-img>
                                            <p
                                                class="pl-2 sm:text-base text-xs"
                                            >
                                                {{ value.name }}
                                            </p>
                                        </template>
                                    </v-radio>
                                </v-radio-group>
                            </v-card-text>
                            <v-card-title>
                                <div class="text-lg">Chi phí</div>
                            </v-card-title>
                            <v-card-text>
                                <div class="flex justify-between sm:text-base">
                                    <p class="font-semibold">Thanh toán</p>
                                    <strong>190.000đ</strong>
                                </div>
                                <div class="flex justify-between sm:text-base">
                                    <p class="font-semibold">Phí</p>
                                    <strong>0đ</strong>
                                </div>
                                <div class="flex justify-between sm:text-base">
                                    <p class="font-semibold">Tổng cộng</p>
                                    <strong>190.000đ</strong>
                                </div>
                            </v-card-text>
                            <v-card-text>
                                <v-btn
                                    block
                                    :loading="loading"
                                    color="primary"
                                    rounded="xl"
                                    size="large"
                                    elevation="0"
                                    @click="load"
                                >
                                    Đặt vé
                                </v-btn>
                                <v-btn
                                    block
                                    variant="text"
                                    rounded="xl"
                                    size="large"
                                    elevation="0"
                                    @click="$router.go(-2)"
                                >
                                    Quay lại
                                </v-btn>
                            </v-card-text>
                            <v-card-text class="text-center text-error">
                                <p class="text-xs md:text-sm">
                                    <strong>Lưu ý:</strong> Không mua vé cho trẻ
                                    em dưới 13 tuổi đối với các suất chiếu phim
                                    kết thúc sau 22h00 và không mua vé cho trẻ
                                    em dưới 16 tuổi đối với các suất chiếu phim
                                    kết thúc sau 23h00.
                                </p>
                            </v-card-text>
                        </v-card>
                    </div>
                </div>
            </div>
        </v-container>
    </div>
</template>
<script>
export default {
    data() {
        return {
            StepperData: ["Chọn ghế", "Thanh toán", "Thông tin vé"],
            step: 0,
            radios: "1",
            loading: false,
            payment: [
                {
                    id: "1",
                    name: "Thanh toán tại quầy",
                    image: "https://cdn.moveek.com/bundles/ornweb/img/zalopay-domestic_card-icon.png",
                },
                {
                    id: "2",
                    name: "Ví MoMo",
                    image: "https://cdn.moveek.com/bundles/ornweb/img/momo-icon.png",
                },
                {
                    id: "3",
                    name: " Thẻ Visa, Master, JCB",
                    image: "https://cdn.moveek.com/bundles/ornweb/img/zalopay-international_card-icon.png",
                },
                {
                    id: "4",
                    name: "Ví ShopeePay",
                    image: "https://cdn.moveek.com/bundles/ornweb/img/shopeepay-icon.png",
                },
                {
                    id: "5",
                    name: "Thẻ ATM (Thẻ nội địa)",
                    image: "https://cdn.moveek.com/bundles/ornweb/img/zalopay-domestic_card-icon.png",
                },
                {
                    id: "6",
                    name: "Quét mã QR",
                    image: "https://cdn.moveek.com/bundles/ornweb/img/zalopay-vietqr-icon.png",
                },
            ],
        };
    },
    methods: {
        load() {
            this.loading = true;
            setTimeout(
                () => (
                    (this.loading = false),
                    this.$refs.modelDialogCheckout.open()
                ),
                2000
            );
        },
    },
};
</script>
<style lang=""></style>
