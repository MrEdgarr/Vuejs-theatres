<template>
    <v-dialog
        v-model="authStore.isLoginDialogOpen"
        max-width="450"
        width="100%"
    >
        <v-card rounded="lg">
            <v-form ref="form" fast-fail>
                <v-card-title class="text-center">
                    <div class="text-2xl py-5 font-bold">Đăng nhập</div>
                    <div
                        class="absolute top-0 right-2.5"
                        @click="close(), reset()"
                    >
                        <v-icon size="x-small">mdi-close</v-icon>
                    </div>
                </v-card-title>
                <v-card-text>
                    <div class="grid gap-2">
                        <div>
                            <v-text-field
                                v-model="formValue.email"
                                :rules="[rules.required, rules.emailRules]"
                                density="compact"
                                variant="outlined"
                                label="Email"
                            ></v-text-field>
                        </div>
                        <div>
                            <v-text-field
                                v-model="formValue.password"
                                :rules="[rules.required, rules.min]"
                                label="Mật khẩu"
                                density="compact"
                                :append-inner-icon="
                                    visible ? 'mdi-eye-off' : 'mdi-eye'
                                "
                                :type="visible ? 'text' : 'password'"
                                variant="outlined"
                                @click:append-inner="visible = !visible"
                            ></v-text-field>
                        </div>
                    </div>
                    <div
                        class="cursor-pointer text-right text-primary hover:underline"
                    >
                        <a>Quên mật khẩu?</a>
                    </div>
                    <v-btn
                        block
                        :disabled="!isValid"
                        color="primary"
                        rounded="lg"
                        size="large"
                        elevation="0"
                        class="my-5"
                        type="submit"
                    >
                        Đăng nhập
                    </v-btn>

                    <div class="text-center cursor-pointer">
                        Bạn đã có tài khoản?
                        <a
                            class="text-primary hover:underline"
                            @click="
                                close(),
                                    reset(),
                                    (authStore.isRegisterDialogOpen = true)
                            "
                        >
                            Đăng Ký
                        </a>
                    </div>
                </v-card-text>
            </v-form>
        </v-card>
    </v-dialog>
</template>
<script>
import { validatioForm } from "@/utils/validationForm";
import { mapStores } from "pinia";
import { authAppStore } from "@/stores/AuthStore";

const defaultForm = {
    email: "",
    password: "",
};
export default {
    data() {
        return {
            dialog: true,
            rules: validatioForm,
            formValue: defaultForm,
            visible: false,
            isValid: false,
        };
    },
    computed: {
        ...mapStores(authAppStore),
    },
    methods: {
        close() {
            this.authStore.isLoginDialogOpen = false;
        },
        reset() {
            this.$refs.form.reset();
        },
    },
};
</script>
<style lang=""></style>
