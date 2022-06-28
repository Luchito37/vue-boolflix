<template>
    <div>
        <div class="container">
            <div id="movieList" class="row">
                <div class="col">
                    <ul class="list-unstyled">
                        <li v-for=" (movie) in state.listaFilm" :key="movie">
                            <filmCard :movie="movie"></filmCard>
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

export default {
    name:"TheMain",
    components:{
        filmCard
    },
    computed:{
        state(){
            return state;
        },
    },
}
</script>
