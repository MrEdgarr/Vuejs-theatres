export const validatioForm = {
    required: (value) => value?.length > 0 || "Không được để trống",

    min: (value) => value?.length >= 5 || "Phải có ít nhất 5 ký tự",

    phoneRules: (value) => {
        const pattern = /^\d{10}$/;
        return pattern.test(value) || "Vui lòng nhập số điện thoại hợp lệ.";
    },

    emailRules: (value) => {
        const pattern =
            /^(([^<>()[\]\\.,;:\s@']+(\.[^<>()\\[\]\\.,;:\s@']+)*)|('.+'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return pattern.test(value) || "Email không hợp lệ";
    },
};
