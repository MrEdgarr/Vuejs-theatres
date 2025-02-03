import API from "@/services/API";

export default {
    getAll: (value) => API().post(`/schedules/getSchedule`, value),
    // getAll: (value) =>
    //     API().post(`/schedules/getMovieShowtimeInformation`, value),
};
