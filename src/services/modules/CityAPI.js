import API from "@/services/API";

export default {
    getAll: () => API().get(`/citys`),
};
