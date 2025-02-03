<template>
    <v-dialog v-model="isDialog" max-width="500px">
        <v-card>
            <v-card-title class="text-h5 text-center">
                Thông tin phim
            </v-card-title>
            <div class="absolute right-1" @click="close()">
                <v-icon>mdi-close</v-icon>
            </div>
            <v-card-text>
                <div>
                    <v-img
                        alt="NGÀY XƯA CÓ MỘT CHUYỆN TÌNH - T16"
                        :src="movie.poster"
                        gradient="to top right, rgba(0,0,0, 0.15), rgba(0,0,0, .05)"
                        width="150"
                        cover
                        class="float-left mr-5"
                    >
                        <div class="grid place-items-center h-full">
                            <v-icon class="!text-5xl" color="white">
                                mdi-play-circle-outline
                            </v-icon>
                        </div>
                    </v-img>
                    <div>
                        <div class="text-xs md:text-sm font-bold">
                            {{ movie.name }}
                        </div>
                        <div
                            class="flex-wrap items-center gap-x-5 text-gray-400 text-sm pr-12 hidden md:flex"
                        >
                            <div>{{ movie.genres }}</div>
                            <div>{{ movie.duration }} phút</div>
                        </div>
                        <div class="mt-1 text-xs md:text-sm">
                            <span class="font-bold">Xuất xứ: </span
                            >{{ movie.country }}
                        </div>
                        <div class="mt-1 text-sm hidden md:block">
                            <span class="font-bold">Khởi chiếu: </span>
                            {{ movie.releases }}
                        </div>
                        <div class="mt-1 text-sm hidden md:block">
                            <span class="font-bold">Nhà sản xuất: </span>
                            {{ movie.producer }}
                        </div>
                        <div class="mt-1 text-sm hidden md:block">
                            <span class="font-bold">Đạo diễn: </span>
                            {{ movie.director }}
                        </div>
                        <div class="text-sm mt-1">
                            <span class="font-bold">Nội dung phim: </span>
                            {{ movie.describe }}
                        </div>
                        <div
                            class="line-clamp-2 mt-1 text-xs md:text-sm text-red-500"
                        >
                            {{ cens }}
                        </div>
                        <div></div>
                    </div>
                    <div class="pt-5">
                        <div class="font-bold">Trailer</div>
                        {{ trailer }}
                        <iframe
                            width="100%"
                            height="250"
                            :src="`https://www.youtube.com/embed/${trailer}`"
                            title="Trailer"
                        ></iframe>
                    </div>
                </div>
            </v-card-text>
        </v-card>
    </v-dialog>
</template>
<script setup>
import { ref, computed } from "vue";
const isDialog = ref(false);
const movie = ref([]);

// computed
const trailer = computed(() => {
    return movie.value.trailer.slice(32);
});
const cens = computed(() => {
    const cens = movie.value.cens;
    if (cens == "P")
        return "P: Phim được phép phổ biến đến người xem ở mọi độ tuổi";
    if (cens == "K")
        return "K: Phim được phổ biến đến người xem dưới 13 tuổi và có người bảo hộ đi kèm";
    if (cens == "T13")
        return "T13: Phim được phổ biến đến người xem từ đủ 13 tuổi trở lên";
    if (cens == "T16")
        return "T16: Phim được phổ biến đến người xem từ đủ 16 tuổi trở lên";
    if (cens == "T18")
        return "T18: Phim được phổ biến đến người xem từ đủ 18 tuổi trở lên";
});

// methods
const open = (item) => {
    movie.value = Object.assign({}, item);
    isDialog.value = true;
};
const close = () => {
    isDialog.value = false;
};

defineExpose({
    open,
});
</script>
<style lang=""></style>
