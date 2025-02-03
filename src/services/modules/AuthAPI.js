import API from "@/services/API";

export default {
    getAll: () => API().get(`users`),

    login: (value) => API().post(`users/login`, value),
    register: (value) => API().post(`users/register`, value),
};
