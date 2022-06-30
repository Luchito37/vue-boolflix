<template>
    <div class="d-flex justify-content-center">
        <div class="card text-white bg-dark mb-3 border border-danger" style="max-width: 18rem;">
            <div class="card-header">
                <img class="grandezzaImmagine" :src="getPoster(movie.poster_path)" alt="">
            </div>
            <div class="card-body">
                <p class="card-text">Titolo: {{movie.title}}</p>
                <p class="card-text">Titolo originale: {{movie.original_title}}</p>
                <p class="card-text">Lingua originale: 
                    <img :src="getImage(movie.original_language)" width="15" height="auto">
                </p>
                <p class="card-text">Voto: {{movie.vote_average}}</p>
            </div>
        </div>
        <hr>
    </div>
</template>

<script>
export default {

    name: "MovieCard",

    props: {
        movie: Object,
    },
    methods: {
        getImage(id){
            try {
                return require("../assets/img/" + id + ".png");}
            catch{
                return require("../assets/img/" + id + ".png");
            }
        },
        getPoster(id){
            if(this.movie.poster_path !== null) {
                return ("https://image.tmdb.org/t/p/w342/" + id )
            } else {
                return require("../assets/img/img-placeholder/placeholder.png")
            }
        }

    
    }
}
</script>

<style scoped>
    .grandezzaImmagine{
            max-width: 190px;
    }
</style>
