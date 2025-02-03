<template>
    <div class="text-white">
        <v-skeleton-loader :loading="isLoading" type="image">
            <v-img
                gradient="to right,
                        rgba(31.5, 31.5, 31.5, 1) calc((50vw - 170px) - 340px),
                        rgba(31.5, 31.5, 31.5, 0.84) 50%,
                        rgba(31.5, 31.5, 31.5, 0.84) 100%"
                class="bg-cover bg-center"
                :style="`background: url(${movieStore.movie?.backdrop})`"
                cover
            >
                <v-container>
                    <div class="!max-w-6xl m-auto md:p-0">
                        <div class="grid grid-cols-1 md:grid-cols-5 md:gap-5">
                            <div class="flex justify-center">
                                <v-img
                                    :src="movieStore.movie?.poster"
                                    width="100%"
                                    :max-width="$vuetify.display.xs ? 100 : 150"
                                    max-height="225"
                                    cover
                                    class="rounded-lg"
                                ></v-img>
                            </div>
                            <div class="md:col-span-4 md:pt-0 pt-2.5">
                                <div class="wrapper-info">
                                    <div
                                        class="mb-2.5 md:!text-left !text-center"
                                    >
                                        <p class="sm:text-2xl text-xl">
                                            {{ movieStore.movie?.name }}
                                        </p>
                                        <p
                                            class="text-gray-400 sm:text-sm text-xs"
                                        >
                                            {{ movieStore.movie?.genres }}
                                        </p>
                                    </div>
                                    <div>
                                        <div class="md:!text-left !text-center">
                                            <v-btn
                                                :size="
                                                    $vuetify.display.xs
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
                                                    $vuetify.display.xs
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
                                                {{ movieStore.movie?.describe }}
                                            </p>
                                        </div>
                                        <div
                                            class="grid grid-cols-1 grid-cols-3"
                                        >
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
                                                <span>
                                                    {{
                                                        movieStore.movie
                                                            ?.releases
                                                    }}
                                                </span>
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
                                                <span>
                                                    {{
                                                        movieStore.movie
                                                            ?.duration
                                                    }}
                                                </span>
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
                                                <span>
                                                    {{ movieStore.movie?.cens }}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </v-container>
            </v-img>
        </v-skeleton-loader>
    </div>
</template>
<script>
import { movieAppStore } from "@/stores/MovieStore";
import { mapStores } from "pinia";

export default {
    data() {
        return {
            movies: null,
            isLoading: false,
        };
    },
    computed: {
        ...mapStores(movieAppStore),
    },
    methods: {
        async fetchData() {
            try {
                this.isLoading = true;
                const _id = this.$route.params.id;
                await this.movieStore.fetchById(_id);
                this.isLoading = false;
            } catch (error) {
                console.log(error);
            }
        },
    },
    mounted() {
        this.fetchData();
    },
};
</script>
<style lang=""></style>
