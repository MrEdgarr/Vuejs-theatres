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
                    <h1 class="sm:text-2xl text-base font-bold">Lịch chiếu</h1>
                    <span class="sm:text-sm text-xs">
                        Xem lịch chiếu phim, giá vé tiện lợi, đặt vé nhanh chỉ
                        với 1 bước!
                    </span>
                </div>
            </div>
        </v-img>
    </section>
    <section>
        <v-container>
            <div class="!max-w-6xl m-auto md:p-0 border-b pb-10">
                <showtime-filter />
            </div>
        </v-container>
    </section>
    <section>
        <v-container>
            <div class="!max-w-6xl m-auto md:p-0 pb-10">
                <showtime-content />
            </div>
        </v-container>
    </section>
</template>
<script>
export default {};
</script>
<style lang=""></style>
