<template>
    <div>
        <div class="container">
            <div id="movieList" class="row">
                <div class="col">
                    <ul>
                        <li v-for=" movie in listaDeiFilm" :key="movie.original_title">
                            {{movie.original_title}}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>


<script>

import {state} from"../store";

export default {
    computed:{
        listaDeiFilm(){
            return state.listaFilm;
        },
    },
}
</script>
