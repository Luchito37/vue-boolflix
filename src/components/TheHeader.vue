<template>
    <div>
        <nav class="navbar bg-light">
            <div class="container-fluid">
                <a class="navbar-brand">BOOLFLIX</a>
                <form class="d-flex" role="search">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                    <button class="btn btn-outline-success" type="submit">Search</button>
                </form>
            </div>
        </nav>
    </div>
</template>


<script>
import {ricercaFilm} from "../store"

export default {
    methods:{
        ricercato(){
            ricercaFilm("casa")
        },
    },
    mounted(){
        ricercaFilm("casa")
    }
}
</script>
