<template>
    <v-footer class="d-flex flex-column !bg-gray-50">
        <v-container>
            <div class="!max-w-6xl m-auto md:p-0">
                <div class="grid grid-cols-12">
                    <div class="md:col-span-3 col-span-12 sm:col-span-6 pb-5">
                        <div class="!text-base !font-semibold">
                            <h3>GIỚI THIỆU</h3>
                        </div>
                        <div class="cursor-pointer text-sm pt-2.5">
                            <span class="hover:!text-sky-700 text-gray-500">
                                Về Chúng Tôi
                            </span>
                        </div>
                        <div class="cursor-pointer text-sm pt-2.5">
                            <span class="hover:!text-sky-700 text-gray-500">
                                Thoả Thuận Sử Dụng
                            </span>
                        </div>
                        <div class="cursor-pointer text-sm pt-2.5">
                            <span class="hover:!text-sky-700 text-gray-500">
                                Quy Chế Hoạt Động
                            </span>
                        </div>
                        <div class="cursor-pointer text-sm pt-2.5">
                            <span class="hover:!text-sky-700 text-gray-500">
                                Chính Sách Bảo Mật
                            </span>
                        </div>
                    </div>
                    <div class="md:col-span-3 col-span-12 sm:col-span-6 pb-5">
                        <div class="!text-base !font-semibold">
                            <h3>GÓC ĐIỆN ẢNH</h3>
                        </div>
                        <div class="cursor-pointer text-sm pt-2.5">
                            <span class="hover:!text-sky-700 text-gray-500">
                                Thể Loại Phim
                            </span>
                        </div>
                        <div class="cursor-pointer text-sm pt-2.5">
                            <span class="hover:!text-sky-700 text-gray-500">
                                Bình Luận Phim
                            </span>
                        </div>
                        <div class="cursor-pointer text-sm pt-2.5">
                            <span class="hover:!text-sky-700 text-gray-500">
                                Blog Điện Ảnh
                            </span>
                        </div>
                        <div class="cursor-pointer text-sm pt-2.5">
                            <span class="hover:!text-sky-700 text-gray-500">
                                Phim Hay Tháng
                            </span>
                        </div>
                    </div>
                    <div class="md:col-span-3 col-span-12 sm:col-span-6 pb-5">
                        <div class="!text-base !font-semibold">
                            <h3>HỖ TRỢ</h3>
                        </div>
                        <div class="cursor-pointer text-sm pt-2.5">
                            <span class="hover:!text-sky-700 text-gray-500">
                                Góp Ý
                            </span>
                        </div>
                        <div class="cursor-pointer text-sm pt-2.5">
                            <span class="hover:!text-sky-700 text-gray-500">
                                Rạp / Giá Vé
                            </span>
                        </div>
                        <div class="cursor-pointer text-sm pt-2.5">
                            <span class="hover:!text-sky-700 text-gray-500">
                                Tuyển Dụng
                            </span>
                        </div>
                        <div class="cursor-pointer text-sm pt-2.5">
                            <span class="hover:!text-sky-700 text-gray-500">
                                FAQ
                            </span>
                        </div>
                    </div>
                    <div class="md:col-span-3 col-span-12 sm:col-span-6 pb-5">
                        <div>
                            <v-img
                                src="@/assets/logo-black.png"
                                width="100"
                            ></v-img>

                            <v-icon
                                :size="mobileBreakpoint ? 'default' : 'x-large'"
                                class="mx-1 my-5 hover:scale-125 hover:text-sky-700"
                                >mdi-facebook</v-icon
                            >
                            <v-icon
                                :size="mobileBreakpoint ? 'default' : 'x-large'"
                                class="mx-1 my-5 hover:scale-125 hover:text-sky-700"
                                >mdi-youtube</v-icon
                            >
                            <v-icon
                                :size="mobileBreakpoint ? 'default' : 'x-large'"
                                class="mx-1 my-5 hover:scale-125 hover:text-sky-700"
                                >mdi-instagram</v-icon
                            >
                            <v-icon
                                :size="mobileBreakpoint ? 'default' : 'x-large'"
                                class="mx-1 my-5 hover:scale-125 hover:text-sky-700"
                                >mdi-gitlab</v-icon
                            >
                            <v-icon
                                :size="mobileBreakpoint ? 'default' : 'x-large'"
                                class="mx-1 my-5 hover:scale-125 hover:text-sky-700"
                                >mdi-github</v-icon
                            >
                            <v-img
                                src="http://online.gov.vn/PublicImages/2015/08/27/11/20150827110756-dathongbao.png"
                                :width="mobileBreakpoint ? '100' : '150'"
                            ></v-img>
                        </div>
                    </div>
                </div>
                <v-divider class="mt-10" color="gray-500"></v-divider>
                <div class="pt-10">
                    <h1 class="font-black text-3xl font-sans text-center">
                        LOGO
                    </h1>
                    <div class="px-4 py-2 text-center md:text-base text-xs">
                        <p>
                            © 2022 The Movie. Template design ( November
                            {{ new Date().getFullYear() }} )
                        </p>
                        <v-spacer></v-spacer>
                    </div>
                </div>
            </div>
        </v-container>
    </v-footer>
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

<style lang="scss">
.v-footer {
    .footer__connect {
        .v-icon {
            cursor: pointer;
            &:hover {
                transition: all 0.3s ease-in-out;
                color: rgb(var(--v-theme-primary));
                transform: scale(1.3);
            }
        }
    }
}
</style>
