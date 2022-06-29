import Vue from "vue";

import axios from "axios"; 

export const state = Vue.observable({
    listaFilm: [],
    listaSerie: [],
    testoInserito: "",
    api_search: "https://api.themoviedb.org/3/search/"
});

export function ricercaFilm (genereSelezionato){
    debugger

    axios.get(state.api_search + genereSelezionato , {

    //pongo come variabile la query cosi da poterla modificre con l'inserimento nella searchbar    

    params: {
        api_key: "f925a2ed5166fdd6126fc0999ebadec4",
        language: "it",
        query: state.testoInserito
    }
    }).then((resp) => {
        if(genereSelezionato === "movie"){
            state.listaFilm = resp.data.results;
        }else if(genereSelezionato === "tv"){
            state.listaSerie = resp.data.results;
        }
        
    })
}