// Định dạng số dưới dạng chuỗi tiền tệ bằng dấu phẩy (RegEx)
export const formatPrice = (item) => {
    const formatter = new Intl.NumberFormat("en-US");
    if (item) return formatter.format(item);
};
