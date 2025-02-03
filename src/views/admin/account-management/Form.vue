<template>
    <v-dialog v-model="dialog" max-width="500" persistent>
        <template v-slot:activator="{ props }">
            <v-btn color="primary" v-bind="props"> Thêm mới </v-btn>
        </template>
        <v-card>
            <v-card-title class="text-h5 text-center">
                {{ formTitle }}
            </v-card-title>
            <v-card-text>
                <v-form ref="form" fast-fail @submit.prevent>
                    <field-text
                        v-model="form.username"
                        :rules="[rules.required, rules.min]"
                        placeholder="Họ và tên"
                    ></field-text>
                    <field-text
                        v-model="form.email"
                        :rules="[rules.required, rules.min, rules.emailRules]"
                        placeholder="gmail/email"
                    ></field-text>
                    <field-text
                        v-model="form.phone"
                        :rules="[rules.required, rules.phoneRules]"
                        placeholder="Số điện thoại"
                    ></field-text>
                    <field-text
                        v-model="form.password"
                        :rules="[rules.required, rules.min]"
                        placeholder="Mật khẩu"
                        :append-inner-icon="
                            visible.password ? 'mdi-eye-off' : 'mdi-eye'
                        "
                        :type="visible.password ? 'text' : 'password'"
                        @click:append-inner="
                            visible.password = !visible.password
                        "
                    ></field-text>
                    <field-text
                        v-model="form.passConfig"
                        :rules="[
                            rules.required,
                            rules.min,
                            form.password === form.passConfig ||
                                'Mật khẩu phải trùng khớp',
                        ]"
                        placeholder="Nhập lại mật khẩu"
                        :append-inner-icon="
                            visible.confirm ? 'mdi-eye-off' : 'mdi-eye'
                        "
                        :type="visible.confirm ? 'text' : 'password'"
                        @click:append-inner="visible.confirm = !visible.confirm"
                    ></field-text>

                    <div class="text-right">
                        <v-btn @click="close()">Hủy bỏ</v-btn>

                        <v-btn
                            class="ml-2"
                            color="primary"
                            type="submit"
                            @click="save()"
                        >
                            Lưu
                        </v-btn>
                    </div>
                </v-form>
            </v-card-text>
        </v-card>
    </v-dialog>
</template>
<script>
import { validatioForm } from "@/utils/validationForm";

const defaultForm = {
    username: "1231412",
    email: "123123@gmail.com",
    password: "12345",
    passConfig: "12345",
    phone: "1231231231",
    role: "",
};
export default {
    props: {
        desserts: {
            type: Object,
        },
    },
    data() {
        return {
            dialog: false,
            form: defaultForm,
            rules: validatioForm,
            editedIndex: -1,
            visible: {
                password: false,
                confirm: false,
            },
        };
    },
    computed: {
        formTitle() {
            return this.editedIndex === -1
                ? this.desserts[0].role === "admin"
                    ? "Thêm quản trị mới"
                    : "Thêm mới"
                : "Chỉnh sửa";
        },
        role() {
            if (this.desserts[0].role === "admin") {
                return (this.form.role = "admin");
            }
            if (this.desserts[0].role === "customer") {
                return (this.form.role = "customer");
            }
        },
    },
    methods: {
        // Kiểm tra dữ liệu nhập vào khi lưu
        async save() {
            const { valid } = await this.$refs.form.validate();
            if (valid) return this.close();
        },
        edit(item) {
            this.editedIndex = this.desserts.indexOf(item);
            this.form = Object.assign({}, item); //Sao chép dữ liệu
            this.open();
        },
        open() {
            this.dialog = true;
        },
        close() {
            this.editedIndex = -1;
            this.$refs.form.reset();
            this.dialog = false;
        },
    },
};
</script>

<style></style>
