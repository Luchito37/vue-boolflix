import Vue from "vue";

import axios from "axios"; 

export const state = Vue.observable({
    listaFilm: [],
    listaSerie: [],
});

export function ricercaFilm (titoloCercato){
    debugger

    axios.get("https://api.themoviedb.org/3/search/movie", {

    params: {
        api_key: "f925a2ed5166fdd6126fc0999ebadec4",
        language: "it",
        query: titoloCercato
    }
    }).then((resp) => {
        state.listaFilm = resp.data.results;
    })
}