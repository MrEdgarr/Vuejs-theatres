// Utilities
import { defineStore } from "pinia";
import AuthServices from "@/services/modules/MovieAPI";

export const movieAppStore = defineStore("movie", {
    state: () => ({
        movies: null,
        movie: null,
    }),
    actions: {
        async fetchAll() {
            try {
                await AuthServices.getAll().then((res) => {
                    this.movies = res.data.content;
                });
            } catch (error) {
                console.log(error);
            }
        },
        async postApiMovie() {
            try {
                await AuthServices.postMovie(value);
            } catch (error) {
                console.log("🚀 ~ postApiMovie ~ error:", error);
            }
        },
    },
});

// id: res.data.content.id,
//                         name: res.data.content.name,
//                         describe: res.data.content.describe,
//                         trailer: res.data.content.trailer,
//                         cens: res.data.content.cens,
//                         genres: res.data.content.genres,
//                         releases: res.data.content.releases,
//                         duration: res.data.content.duration,
//                         poster: res.data.content.poster,
//                         backdrop: res.data.content.backdrop,
//                         country: res.data.content.country,
//                         director: res.data.content.director,
//                         producer: res.data.content.producer,
//                         actor: res.data.content.actor,
//                         created_at: res.data.content.created_at,
//                         updated_at: res.data.content.updated_at,
