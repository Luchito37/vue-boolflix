import Vue from "vue";

import axios from "axios"; 

export const state = Vue.observable({
    listaFilm: [],
    listaSerie: [],
    testoInserito: "",
    genereRicercato: "",
    api_search: "https://api.themoviedb.org/3/search/"
});

export function ricercaFilm (genereRicercato){
    debugger

    axios.get(state.api_search + genereRicercato, {

    //pongo come variabile la query cosi da poterla modificre con l'inserimento nella searchbar    

    params: {
        api_key: "f925a2ed5166fdd6126fc0999ebadec4",
        language: "it",
        query: state.testoInserito
    }
    }).then((resp) => {
        if(genereRicercato === "movie"){
            state.listaFilm = resp.data.results;
        }
        
    })
}