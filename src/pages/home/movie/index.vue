<template>
    <section>
        <movie-banner />
    </section>
    <section>
        <v-container>
            <div class="!max-w-6xl m-auto md:p-0 relative">
                <router-view></router-view>
            </div>
        </v-container>
    </section>
</template>
<script>
import MovieBanner from "@/templates/home/movies/MovieBanner.vue";

export default {
    components: {
        MovieBanner,
    },
    data() {},
};
</script>
<style lang=""></style>
