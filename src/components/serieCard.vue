
<template>
    <div class="d-flex justify-content-center ">
        <div class="card text-dark mb-3 border border-danger" style="max-width: 18rem;">
            <div class="card-header">
                <img class="grandezzaImmagine" :src="getPoster(serie.poster_path)" alt="">
            </div>
            <div class="card-body">
                <p class="card-text">Titolo: {{serie.name}}</p>
                <p class="card-text">Titolo originale: {{serie.original_name}}</p>
                <p class="card-text">Lingua originale: 
                    <img :src="getImage(serie.original_language)" width="15" height="auto">
                </p>
                <p class="card-text">Voto: {{serie.vote_average}}</p>
            </div>
        </div>
        <hr>
    </div>
</template>

<script>
export default {
    
    name: "serieCard",

    props: {
        serie: Object,
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
            if(this.serie.poster_path !== null) {
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