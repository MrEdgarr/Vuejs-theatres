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
export default {
    data() {
        return {
            tab: false,
            lengthItems: 8,
        };
    },
    methods: {
        // tăng độ dài ban đầu của mảng
        loadMore() {
            if (this.lengthItems > 20) return;
            this.lengthItems += 4;
        },
    },
    computed: {
        // hàm tính toán sẽ trả về mảng mới dựa trên biến items
        itemsLoaded() {
            // return this.items.slice(0, this.lengthItems);
        },
    },
};
</script>
<style lang=""></style>
