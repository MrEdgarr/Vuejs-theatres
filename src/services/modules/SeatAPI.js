import API from "@/services/API";

export default {
    getAll: (value) => API().post(`seats`, value),
};
