import API from "@/services/API";

export default {
    getAll: () => API().get(`/movies`),
    postMovie: (value) => API().post(`/movies/create`, value),
};
