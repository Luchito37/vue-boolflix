<template>
    <div>
        <nav class="navbar bg-dark">
            <div class="container-fluid">
                <a class="navbar-brand text-danger">BOOLFLIX</a>
                <div class="d-flex">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" v-model="testoInserito">
                    <button class="btn btn-outline-danger" type="submit" @click="TestoCercato">Cerca...</button>
                </div>
            </div>
        </nav>
    </div>
</template>
<script>
import { ricercaFilm } from "../store";
import {state} from "../store"

export default {
    name:"TheHeader",
    data(){
        return{
            testoInserito: "",
        }
    },
    methods:{
        TestoCercato(){
            state.testoInserito = this.testoInserito
            ricercaFilm("movie")


        }
    },
    mounted(){
        ricercaFilm("movie")
    }
}
</script>
