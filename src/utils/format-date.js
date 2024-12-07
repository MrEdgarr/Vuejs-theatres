import dayjs from "dayjs";

export const formatdate = () => {
    var arrDay = [];
    var dayToday = "";
    var date = "";
    var month = "";
    var day = "";
    for (let i = 0; i < 7; i++) {
        day = dayjs().add(i, "day").valueOf();
        switch (dayjs(day).day()) {
            case dayjs().day():
                dayToday = "Hôm nay";
                break;
            case 0:
                dayToday = "Chủ nhật";
                break;
            case 1:
                dayToday = "Thứ hai";
                break;
            case 2:
                dayToday = "Thứ ba";
                break;
            case 3:
                dayToday = "Thứ tư";
                break;
            case 4:
                dayToday = "Thứ năm";
                break;
            case 5:
                dayToday = "Thứ sáu";
                break;
            case 6:
                dayToday = "Thứ bảy";
                break;
        }
        date = `0${dayjs(day).date()}`.slice(-2);
        month = `0${dayjs(day).month()}`.slice(-2);
        arrDay = [
            ...arrDay,
            {
                dayNumber: dayToday + " " + date + "/" + month,
            },
        ];
    }
    return arrDay;
};
