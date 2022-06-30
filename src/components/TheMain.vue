<template>
    <div class="bg-dark">
        <div class="container bg-secondary border border-danger">
            <div id="movieList" class="row">
                <div class="col">
                    <ul class="list-unstyled d-flex flex-wrap justify-content-center mt-4">
                        <li class="mx-3" v-for=" (movie) in state.listaFilm" :key="movie">
                            <filmCard :movie="movie"></filmCard>
                        </li>
                    </ul>
                </div>
            </div>
            <div>
                <div class="col">
                    <ul class="list-unstyled d-flex flex-wrap justify-content-center mt-4">
                        <li class="mx-3" v-for=" (serie, i) in state.listaSerie" :key="i">
                            <serieCard :serie="serie"></serieCard>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>



<script>

import {state} from "../store"
import filmCard from "./filmCard.vue"
import serieCard from "./serieCard.vue";

export default {
    name:"TheMain",
    components:{
        filmCard,
        serieCard
    },
    computed:{
        state(){
            return state;
        },
    },
}
</script>
