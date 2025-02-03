<template>
    <v-dialog v-model="dialog" max-width="500px">
        <v-card>
            <v-card-title>
                Bạn có chắc chắn muốn xóa mục này không?
            </v-card-title>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue-darken-1" variant="text" @click="close">
                    Cancel
                </v-btn>
                <v-btn color="blue-darken-1" variant="text" @click="close">
                    OK
                </v-btn>
                <v-spacer></v-spacer>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>
<script>
export default {
    data() {
        return {
            dialog: false,
        };
    },
    methods: {
        deleteItem(item) {
            this.open();
        },
        open() {
            this.dialog = true;
        },
        close() {
            this.dialog = false;
        },
    },
};
</script>
<style lang=""></style>
