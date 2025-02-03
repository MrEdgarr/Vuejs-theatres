export const validatioForm = {
    //'Required.'
    required: (item) => !!item > 0 || "Không được để trống",

    //'Must be at least 6 characters long.'
    min: (item) => item?.length >= 5 || "Phải có ít nhất 5 ký tự",

    // Enter a valid phone number.
    phoneRules: (item) => {
        // const pattern = /^\d{10}$/;
        const pattern =
            /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
        return pattern.test(item) || "Vui lòng nhập số điện thoại hợp lệ.";
    },

    // Email
    emailRules: (item) => {
        const pattern =
            /^(([^<>()[\]\\.,;:\s@']+(\.[^<>()\\[\]\\.,;:\s@']+)*)|('.+'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return pattern.test(item) || "Email không hợp lệ";
    },

    minDate: (item) => new Date(item) > new Date() || "Chọn ngày lớn hơn",
};
