<template>
    <v-dialog
        v-model="authStore.isRegisterDialogOpen"
        max-width="450"
        width="100%"
    >
        <v-card rounded="lg">
            <v-form ref="form" fast-fail>
                <v-card-title class="text-center">
                    <div class="text-2xl py-5 font-bold">Đăng Ký</div>
                    <div
                        class="absolute top-0 right-2.5"
                        @click="
                            close(),
                                reset(),
                                (authStore.isRegisterDialogOpen = false)
                        "
                    >
                        <v-icon size="x-small">mdi-close</v-icon>
                    </div>
                </v-card-title>

                <v-card-text class="grid">
                    <div>
                        <v-text-field
                            v-model="defaultForm.fullName"
                            :rules="[rules.required, rules.min]"
                            density="compact"
                            variant="outlined"
                            label="Họ và tên"
                        ></v-text-field>
                    </div>
                    <div>
                        <v-text-field
                            v-model="defaultForm.email"
                            density="compact"
                            :rules="[rules.required, rules.emailRules]"
                            variant="outlined"
                            label="Email"
                        ></v-text-field>
                    </div>
                    <div>
                        <v-text-field
                            v-model="defaultForm.phone"
                            density="compact"
                            :rules="[rules.required, rules.phoneRules]"
                            variant="outlined"
                            label="Số điện thoại"
                        ></v-text-field>
                    </div>
                    <div>
                        <v-text-field
                            v-model="defaultForm.password"
                            density="compact"
                            label="Mật khẩu"
                            :rules="[rules.required, rules.min]"
                            :append-inner-icon="
                                visible.pass ? 'mdi-eye-off' : 'mdi-eye'
                            "
                            :type="visible.pass ? 'text' : 'password'"
                            variant="outlined"
                            @click:append-inner="visible.pass = !visible.pass"
                        ></v-text-field>
                    </div>
                    <div>
                        <v-text-field
                            v-model="defaultForm.passwordConfirm"
                            density="compact"
                            label="Mật khẩu"
                            :rules="[
                                rules.required,
                                defaultForm.password ===
                                    defaultForm.passwordConfirm ||
                                    'Mật khẩu phải trùng khớp',
                            ]"
                            :append-inner-icon="
                                visible.config ? 'mdi-eye-off' : 'mdi-eye'
                            "
                            :type="visible.config ? 'text' : 'password'"
                            variant="outlined"
                            @click:append-inner="
                                visible.config = !visible.config
                            "
                        ></v-text-field>
                    </div>
                    <v-checkbox density="compact" color="primary">
                        <template v-slot:label>
                            <div class="text-xs pl-2">
                                Bằng việc đăng ký tài khoản, tôi đồng ý với
                                <a
                                    href="#"
                                    target="_blank"
                                    class="text-primary font-bold hover:underline"
                                    @click.stop
                                >
                                    Điều khoản dịch vụ
                                </a>
                                và
                                <a
                                    href="#"
                                    target="_blank"
                                    class="text-primary font-bold hover:underline"
                                    @click.stop
                                >
                                    Chính sách bảo mật
                                </a>
                            </div>
                        </template>
                    </v-checkbox>
                    <v-btn
                        :loading="authStore.isLoading"
                        :disabled="!isValid"
                        block
                        color="primary"
                        rounded="lg"
                        size="large"
                        elevation="0"
                        type="submit"
                        class="mb-5"
                    >
                        Đăng ký
                    </v-btn>
                    <div>
                        <p class="text-center cursor-pointer">
                            Bạn đã có tài khoản?
                            <a
                                class="text-primary hover:underline mt-4"
                                @click="
                                    close(),
                                        reset(),
                                        (authStore.isLoginDialogOpen = true)
                                "
                            >
                                Đăng nhập
                            </a>
                        </p>
                    </div>
                </v-card-text>
            </v-form>
        </v-card>
    </v-dialog>
</template>
<script>
import { validatioForm } from "@/utils/validationForm";
import { mapStores } from "pinia";
import { authAppStore } from "@/stores/AuthStore.js";

const defaultForm = {
    fullName: "12345",
    phone: "1234567890",
    email: "nguyenvana@gmail.co",
    password: "12345",
    passwordConfirm: "12345",
};
export default {
    data() {
        return {
            rules: validatioForm,
            defaultForm: defaultForm,
            visible: {
                pass: false,
                config: false,
            },
            isValid: false,
        };
    },
    computed: {
        ...mapStores(authAppStore),
    },
    methods: {
        close() {
            this.authStore.isRegisterDialogOpen = false;
        },
        reset() {
            this.$refs.form.reset();
        },
    },
};
</script>
<style>
.v-messages__message {
    padding-bottom: 15px;
}
</style>
